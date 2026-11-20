"""Audit installed display graphs and build an offline route inspector. Never writes game files."""
import collections
import hashlib
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from inspect_story import Asar, GAME, locale

OUT = Path(__file__).parent
app = Asar(GAME / 'resources/app.asar')
loc = locale()

def asset(prefix):
    name = next(n for n in app.entries if '/assets/' + prefix in n and n.endswith('.js'))
    return name, app.read(name).decode('utf-8')

def video_id(value):
    # Same normalization as navigation-D0fhxgIL.js; do not guess shortened storylet IDs.
    return '_'.join(re.sub('^a', '', p) for p in value.split('_')).upper()

video_source, video_text = asset('videos-')
storylets = json.loads(re.search(r'JSON.parse\(`(.*?)`\)', video_text).group(1))['storylets']
owner = {v: s['id'] for s in storylets for v in s['videos']}
player_source, player_text = asset('StoryletPlayer-')
changes = {}
for sid, vid, label, direction in re.findall(
        r'\{storylet_id:`([^`]+)`,video_id:`([^`]+)`,value_changed_text:`([^`]+)`,value_changed_type:`([^`]+)`\}', player_text):
    changes[vid] = {'storylet': sid, 'label': label, 'direction': direction,
                    'evidence': '客户端开头三秒显示的提示；不是数值增量或判定公式'}

edges = []
audits = []
for name in app.entries:
    match = re.search(r'/([0-7])-[^/]+\.svg$', name)
    if not match:
        continue
    ch = int(match[1])
    root = ET.fromstring(app.read(name))
    attrs = collections.Counter(k for e in root.iter() for k in e.attrib)
    seen = set()
    for e in root.iter():
        if e.tag.rsplit('}', 1)[-1] != 'path':
            continue
        raw = next((v for k, v in e.attrib.items() if k.endswith('id') and ',' in v), '')
        if not raw:
            continue
        # JS split(',', 2) discards a trailing third segment, rather than retaining it.
        a, b = map(video_id, raw.split(',')[:2])
        if (a, b) in seen:
            continue
        seen.add((a, b))
        edges.append({'chapter': ch, 'from': a, 'to': b, 'source': name,
                      'raw_id': raw, 'guard': None})
    audits.append({'chapter': ch, 'source': name, 'edges': len(seen),
                   'attributes': dict(attrs), 'sha256': hashlib.sha256(app.read(name)).hexdigest()})

adj, prev = collections.defaultdict(list), collections.defaultdict(list)
for e in edges:
    adj[e['from']].append(e['to'])
    prev[e['to']].append(e['from'])
vertices = sorted(set(adj) | set(prev))
nodes = {}
for v in vertices:
    sid = owner.get(v)
    converted = 'a' + '_a'.join(v.lower().split('_'))
    # A title on a storylet's opening is not automatically the title of every later video.
    title = loc['nodes'].get(converted, {}).get('title', '')
    if not title and sid and next((s['videos'][0] for s in storylets if s['id'] == sid), None) == v:
        title = loc['nodes'].get(sid, {}).get('title', '')
    nodes[v] = {'id': v, 'title': title, 'storylet': sid, 'change': changes.get(v)}

starts = {ch: next(v for v in vertices if v.startswith(f'{ch:02d}_001_')) for ch in range(8)}

def shortest(start, goal):
    queue = collections.deque([start])
    parents = {start: None}
    while queue:
        v = queue.popleft()
        if v == goal:
            path = []
            while v is not None:
                path.append(v)
                v = parents[v]
            return path[::-1]
        for nxt in adj[v]:
            if nxt not in parents:
                parents[nxt] = v
                queue.append(nxt)
    return []

endings = []
for sid, info in loc['endings'].items():
    target = video_id(sid)
    ch = int(target[:2])
    endings.append({'id': sid, 'target': target, 'title': info['title'], 'chapter': ch,
                    'mapped_storylet': owner.get(target), 'has_builtin_help': bool(info.get('help')),
                    'path': shortest(starts[ch], target)})

# These annotations are paraphrases of inspected scene content, not UI option quotations.
annotations = {
    '00_048_011A025': '讨论纳谏与明君', '00_049_011B025': '提出先让虞宫回乡尽孝，再执行刑罚',
    '00_050_011C025': '提出免死并发配边疆', '00_052_026': '皇帝拒绝宽免',
    '00_053_027': '皇帝质疑借忠孝施压', '00_055_012A': '继续以社稷、忠孝说理',
    '00_056_012B': '转向父子感情求情', '00_058_013LOOP': '棋局选择',
    '00_059_013A': '赢下棋局', '00_060_013B': '输掉棋局',
    '00_062_014LOOP': '讨论大哥过错', '00_063_014A': '替大哥解释为受到蒙蔽',
    '00_064_014B': '建议削减礼遇并责令补过', '00_065_030': '皇帝同意按你的意见处理虞宫；成就：圣心难测',
    '00_066_031': '皇帝让你退下，未作宽免承诺', '00_075_034': '虞宫活着离开',
    '00_076_035': '虞宫被处决',
}
for v, note in annotations.items():
    if v in nodes:
        nodes[v]['annotation'] = note

pack_audit = []
for path in GAME.glob('*.pack'):
    pack = Asar(path)
    pack_audit.append({'file': path.name, 'entries': len(pack.entries),
                       'extensions': dict(collections.Counter(Path(n).suffix for n in pack.entries))})

data = {'date': '2026-11-12', 'build': '21189939', 'nodes': nodes, 'edges': edges,
        'starts': starts, 'endings': endings, 'svg_audit': audits, 'pack_audit': pack_audit,
        'value_hints': changes, 'sources': {'player': player_source, 'videos': video_source},
        'limits': ['路径是章节内的显示图路径，未证明状态可行；不是逐步通关攻略。',
                   '没有自动拼接跨章连线；前章变量可能改变后章结果。',
                   '原图缺线、孤立片段与资源编号差异均保留，不凭剧情补边。',
                   '数值上升/下降是客户端提示，未找到增量、阈值或完整 guards。']}
(OUT / 'route-audit.json').write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
template = (OUT / 'route-viewer.template.html').read_text(encoding='utf-8')
(OUT / '结局路由查看器.html').write_text(template.replace('__ROUTE_DATA__', json.dumps(data, ensure_ascii=False).replace('<', '\\u003c')), encoding='utf-8')
print(json.dumps({'endings': len(endings), 'with_path': sum(bool(e['path']) for e in endings),
                  'edges': len(edges), 'nodes': len(nodes), 'value_hints': len(changes),
                  'no_path': [e['title'] for e in endings if not e['path']]}, ensure_ascii=False))
