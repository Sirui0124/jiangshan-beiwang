"""Export complete display graph with choice evidence and dialogue provenance, without a script dump."""
import collections
import json
import re
from pathlib import Path
from inspect_story import GAME, Asar, locale

OUT = Path(__file__).parent
d = json.loads((OUT / 'route-audit.json').read_text(encoding='utf-8'))
loc = locale()
adj, prev = collections.defaultdict(list), collections.defaultdict(list)
for edge in d['edges']:
    adj[edge['from']].append(edge['to'])
    prev[edge['to']].append(edge['from'])
indegree = {n: len(prev[n]) for n in d['nodes']}
q = collections.deque(n for n, degree in indegree.items() if degree == 0)
order = []
while q:
    n = q.popleft()
    order.append(n)
    for t in adj[n]:
        indegree[t] -= 1
        if indegree[t] == 0:
            q.append(t)
assert len(order) == len(d['nodes']), 'Graph is cyclic; finite path counting not applicable'

def ancestors(target):
    result, pending = {target}, [target]
    while pending:
        for n in prev[pending.pop()]:
            if n not in result:
                result.add(n)
                pending.append(n)
    return result

def convert(sid):
    return '_'.join(re.sub('^a', '', s) for s in sid.split('_')).upper()

title_index = collections.defaultdict(list)
for sid, item in loc['nodes'].items():
    title_index[(int(sid[1:3]), item.get('title'))].append(convert(sid))
choices = []
for ending, info in loc['endings'].items():
    for line in info.get('help', '').splitlines():
        m = re.match(r'【(序|一|二|三|四|五|六|七)章】([^→]+)→(.+)', line)
        if not m:
            continue
        ch = '序一二三四五六七'.index(m[1])
        candidates = title_index[(ch, m[2])]
        choices.append({'chapter': ch, 'question_title': m[2], 'option_text': m[3],
                        'text_status': 'verbatim_builtin_help_not_runtime_button_capture',
                        'candidate_choice_nodes': candidates, 'target_video': None,
                        'source': f'zh-cmn-Hans-DCjjwtGP.js:endings.{ending}.help',
                        'related_ending': ending,
                        'mapping_status': 'title_match_only_target_unresolved'})
# Only relationships already verified by the inspected local scenes.
verified = {('00_006_002LOOP', '依谢尚书的意思办'): '00_007_002A006007008009010',
            ('00_058_013LOOP', '输掉此局'): '00_060_013B',
            ('00_062_014LOOP', '削减大哥的礼遇，责令大哥将功补过'): '00_064_014B'}
for choice in choices:
    for n in choice['candidate_choice_nodes']:
        target = verified.get((n, choice['option_text']))
        if target and target in adj[n]:
            choice['target_video'] = target
            choice['mapping_status'] = 'builtin_help_plus_local_scene_and_svg'

subtitle_refs = {}
for ch in range(8):
    pack_name = f'chapter{ch}_zh_cmn_Hans.pack'
    pack = Asar(GAME / pack_name)
    for entry in pack.entries:
        if not entry.endswith('.vtt'):
            continue
        content = pack.read(entry).decode('utf-8-sig')
        times = re.findall(r'([\d:.]+)\s*-->\s*([\d:.]+)', content)
        subtitle_refs[Path(entry).stem] = {'pack': pack_name, 'entry': entry,
            'cue_count': len(times), 'first_cue_start': times[0][0] if times else None,
            'last_cue_end': times[-1][1] if times else None,
            'text_exported': False}

nodes = []
for vid, item in d['nodes'].items():
    options = [i for i, c in enumerate(choices) if vid in c['candidate_choice_nodes']]
    nodes.append({**item, 'predecessors': prev[vid], 'successors': adj[vid],
        'possible_choice_or_auto_branch': len(adj[vid]) > 1,
        'verified_choice_evidence_indices': options,
        'options_complete': False,
        'dialogue': {'scene_summary': item.get('annotation'),
                     'summary_status': 'reviewed_paraphrase' if item.get('annotation') else 'not_yet_summarized',
                     'current_video_subtitles': subtitle_refs.get(vid),
                     'previous_video_subtitles': [dict(video_id=p, **subtitle_refs[p]) for p in prev[vid] if p in subtitle_refs],
                     'note': '选择等待视频可能没有字幕；前驱字幕是候选上下文，合流时不能全部串为一次对话。'},
        'missing_option_reason': 'No complete static action table found; timeline.actions is returned at runtime'})

route_index = []
for ending in d['endings']:
    start = d['starts'][str(ending['chapter'])]
    counts = {n: 0 for n in order}
    counts[start] = 1
    for n in order:
        for t in adj[n]:
            counts[t] += counts[n]
    upstream = ancestors(ending['target'])
    related = [n for n in order if n in upstream and counts[n]]
    route_index.append({'ending_id': ending['id'], 'title': ending['title'], 'chapter': ending['chapter'],
        'start': start, 'target': ending['target'], 'all_path_count': str(counts[ending['target']]),
        'all_route_nodes_topological': related,
        'all_route_edges': [[e['from'], e['to']] for e in d['edges'] if e['from'] in related and e['to'] in related],
        'cross_chapter_conditions': 'incomplete_not_connected_by_assumption',
        'state_feasibility': 'not_verified'})

result = {'schema_version': 2, 'scope': 'All locally extracted display-graph routes, not full runtime state-machine rules',
    'installed_build': d['build'], 'chapter_starts': d['starts'], 'topological_order': order,
    'nodes': nodes, 'edges': d['edges'], 'choice_evidence': choices,
    'ending_routes': route_index,
    'coverage': {'nodes': len(nodes), 'edges': len(d['edges']), 'endings': len(route_index),
                 'choice_evidence_records': len(choices),
                 'choice_nodes_with_text': len({n for c in choices for n in c['candidate_choice_nodes']}),
                 'verified_option_edge_records': sum(c['target_video'] is not None for c in choices),
                 'dialogue_references': sum(n['dialogue']['current_video_subtitles'] is not None for n in nodes),
                 'reviewed_scene_summaries': sum(n['dialogue']['scene_summary'] is not None for n in nodes)},
    'readme': ['Each ending includes every node and edge on any chapter-start-to-ending route.',
               'All paths are represented by the DAG; there is no shortest-path filter or top-N truncation.',
               'Null target_video means the option is not mapped to an outgoing edge, not an automatic transition.',
               'options_complete=false and summary_status identify missing content explicitly.',
               'A source subtitle may describe a consequence rather than the exact choice prompt.',
               'Choice evidence may repeat across built-in ending hints; preserve provenance.']}
(OUT / '完整路由与选项关联.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(result['coverage'], ensure_ascii=False))
