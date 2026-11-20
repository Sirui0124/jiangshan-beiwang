"""Recover shipped text and code without modifying or launching the game.
Refuses to overwrite generated output; choose a new --output for another run.
"""
import argparse, collections, hashlib, json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'research/jiangshan-beiwang'))
from inspect_story import Asar, GAME

p = argparse.ArgumentParser()
p.add_argument('--output', type=Path, default=Path(__file__).parent / 'restored')
args = p.parse_args()
OUT = args.output.resolve()
OUT.mkdir(parents=True, exist_ok=False)
BASE = Path(__file__).resolve().parents[1] / 'research/jiangshan-beiwang'
graph = json.loads((BASE / '完整路由与选项关联.json').read_text(encoding='utf-8'))
chapters = json.loads((BASE / 'structure-index.json').read_text(encoding='utf-8'))['chapters']
nodes = {n['id']: n for n in graph['nodes']}
manifest = []
def save(rel, data, source=None):
    dest = OUT / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    if isinstance(data, str): data = data.encode('utf-8')
    dest.write_bytes(data)
    if source: manifest.append({'path':rel, 'source':source, 'bytes':len(data), 'sha256':hashlib.sha256(data).hexdigest()})
def dump(rel, data): save(rel, json.dumps(data, ensure_ascii=False, indent=2))
app = Asar(GAME / 'resources/app.asar')
app_hash = hashlib.file_digest(app.path.open('rb'), 'sha256').hexdigest()
old = json.loads((BASE / 'rea-summary.json').read_text(encoding='utf-8'))
assert app_hash == old['summary']['subject']['digest']['sha256'], 'Existing graph targets a different app build'
inventory = []
for name, meta in app.entries.items():
    inventory.append({'path':name, **meta})
    if (name.startswith('.vite/') and Path(name).suffix in {'.js','.css','.html','.json','.svg','.map'}) or name in {'package.json','LICENSE'}:
        save('code-original/'+name, app.read(name), 'app.asar!/'+name)
dump('data/app-inventory.json', inventory)
dump('data/route-graph.json', graph)
subtitles = {}
cue_total = 0
pack_hashes = {}
for ch in range(8):
    pack = Asar(GAME / f'chapter{ch}_zh_cmn_Hans.pack')
    pack_hashes[pack.path.name] = hashlib.file_digest(pack.path.open('rb'), 'sha256').hexdigest()
    for name in pack.entries:
        if not name.endswith('.vtt'): continue
        raw = pack.read(name)
        vid = Path(name).stem
        assert vid not in subtitles
        text = raw.decode('utf-8-sig').replace('\r\n','\n')
        cues = []
        for block in re.split(r'\n\s*\n', text):
            lines = block.splitlines()
            idx = next((i for i,line in enumerate(lines) if '-->' in line), None)
            if idx is not None:
                cues.append({'time':lines[idx], 'text':'\n'.join(lines[idx+1:])})
        assert len(cues) == text.count('-->'), name
        cue_total += len(cues)
        subtitles[vid] = {'chapter':ch, 'source':pack.path.name+'!/'+name, 'cues':cues}
        save('subtitles/'+str(ch)+'/'+Path(name).name, raw, subtitles[vid]['source'])
all_ids = sorted(set(nodes) | set(subtitles))
def link(vid): return f'[{vid}](../nodes/{vid}.md)'
for vid in all_ids:
    n = nodes.get(vid, {})
    sub = subtitles.get(vid)
    s = [f'# {vid} {n.get("title") or "未标注标题"}', '', '[返回目录](../README.md)', '',
         f'故事单元：`{n.get("storylet") or "未映射"}`。', '',
         '## 剧情连接', '', '前驱：'+('、'.join(link(v) for v in n.get('predecessors',[])) or '无图上前驱 / 未收录'), '',
         '后继：'+('、'.join(link(v) for v in n.get('successors',[])) or '无图上后继 / 未收录'), '',
         '连线来自内置显示图；分支条件未知，不代表无条件跳转。', '']
    if n.get('change'): s += ['数值提示：'+json.dumps(n['change'],ensure_ascii=False), '']
    if n.get('dialogue',{}).get('scene_summary'): s += ['已有情境释义（非原文）：'+n['dialogue']['scene_summary'], '']
    s += ['## 已知选项线索', '']
    choices = [graph['choice_evidence'][i] for i in n.get('verified_choice_evidence_indices',[])]
    for c in choices:
        s += [f'- {c["option_text"]}；出口：{link(c["target_video"]) if c.get("target_video") else "未核实"}；来源：`{c["source"]}`。']
    if not choices: s += ['本地资料未恢复本节点的选项文本。']
    s += ['', '以上不是完整按钮表。', '', '## 字幕原文', '']
    if sub:
        s += [f'来源：`{sub["source"]}`。字幕未标明说话人时，不推测人物归属。', '']
        for cue in sub['cues']:
            s += [f'**{cue["time"]}**', '', *['> '+line for line in cue['text'].split('\n')], '']
        if not sub['cues']: s += ['该字幕文件没有对白条目；不能据此断言画面无剧情。', '']
    else: s += ['未找到对应中文字幕文件。', '']
    save('nodes/'+vid+'.md', '\n'.join(s))
chapter_links = []
for ch in chapters:
    num, title = ch['chapter'], ch['title']
    filename = f'{num:02d}-{title}.md'
    chapter_links.append(f'- [{num} {title}](chapters/{filename})')
    ids = [v for v in graph['topological_order'] if int(v[:2]) == num]
    extra = [v for v in all_ids if int(v[:2]) == num and v not in ids]
    s = [f'# {num} {title}', '', '[返回目录](../README.md)', '',
         '按图的拓扑顺序列出全部节点。并列分支不是连续发生的剧情；点击节点查看对白、前驱和后继。', '',
         '## 节点与剧本', '']
    s += [f'- {link(v)} {nodes.get(v,{}).get("title") or ""}（字幕 {len(subtitles.get(v,{}).get("cues",[]))} 条）' for v in ids]
    if extra: s += ['', '## 图外字幕节点', ''] + [f'- {link(v)}' for v in extra]
    s += ['', '## 全部连线', '', '```mermaid', 'flowchart TD']
    diagram_ids = list(dict.fromkeys(ids + [v for e in graph['edges'] if e['chapter'] == num for v in (e['from'],e['to'])]))
    aliases = {v:f'n{i}' for i,v in enumerate(diagram_ids)}
    s += [f'  {aliases[v]}["{v}"]' for v in diagram_ids]
    for e in graph['edges']:
        if e['chapter'] == num: s.append(f'  {aliases[e["from"]]} --> {aliases[e["to"]]}')
    s += ['```', '', '## 本章结局', '']
    for e in graph['ending_routes']:
        if e['chapter'] == num: s += [f'- {e["title"]} → {link(e["target"])}；图上组合路径 {e["all_path_count"]} 条。']
    save('chapters/'+filename, '\n'.join(s))
dump('data/subtitle-cues.json', subtitles)
dump('data/extraction-manifest.json', manifest)
stats = {'app_sha256':app_hash,'pack_sha256':pack_hashes,'code_and_diagram_files':sum(x['path'].startswith('code-original/') for x in manifest),'subtitle_files':len(subtitles),'subtitle_cues':cue_total,'graph_nodes':len(nodes),'edges':len(graph['edges']),'endings':len(graph['ending_routes']),'markdown_nodes':len(all_ids),'graph_nodes_without_subtitles':sorted(set(nodes)-set(subtitles)),'subtitles_outside_graph':sorted(set(subtitles)-set(nodes))}
dump('data/recovery-report.json', stats)
save('README.md', '\n'.join(['# 江山北望 剧本与客户端恢复', '',
'恢复日期：2026-11-12。来源：本机安装包，app.asar SHA-256 已与已有 REA 证据核对。适用原整理标记的 build 21189939。', '',
f'已导出 {len(subtitles)} 个中文字幕文件、{cue_total} 条字幕、{len(all_ids)} 个节点 Markdown；显示图含 {len(nodes)} 节点、{len(graph["edges"])} 连线、{len(graph["ending_routes"])} 结局。', '',
'## 按章阅读', '', *chapter_links, '',
'## 编辑方式', '',
'在 nodes 中直接编辑 Markdown，保留节点 ID 便于关联。原始 VTT 和 code-original 保留发布字节；可读代码另放 code-readable。修改 Markdown 不会自动改写游戏，当前交付不是可重新编译的完整开发工程。重新导出须选择新的输出目录，避免覆盖人工修改。', '',
'## 恢复范围', '',
'对白按字幕原文保存，未补写导演说明或未知说话人。图含分支与合流，不能展开为唯一的线性剧本。隐藏阈值、完整选项和跨章状态仍有缺失；API 返回的时间线不在现有静态资源中。', '',
'客户端代码来自已发布 JavaScript，可排版阅读，但原始 Vue/TypeScript 文件、压缩前变量名、注释和服务端源码未恢复。没有将推测实现冒充原源码。', '',
'## 证据和复现', '',
'data/extraction-manifest.json 记录每个原始导出文件的来源与 SHA-256；data/recovery-report.json 记录覆盖量与缺口。data/route-graph.json 保留全部显示图数据和选项出处。上级 recover.py 是提取脚本，使用 --output 指定新的导出目录。', '',
'REA 项目：https://github.com/morluto/rea 。已有证据在 ../../research/jiangshan-beiwang/rea-evidence.json；本轮补充分析在 ../rea-followup-evidence.json。REA 提供静态代码关系证据，字幕和 Markdown 由本地提取脚本转换。', '',
'未启动游戏、未连接游戏服务器、未验证存档条件下的可执行路线。']))
print(json.dumps(stats,ensure_ascii=False,indent=2))
