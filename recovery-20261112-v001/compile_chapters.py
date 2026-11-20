"""Assemble current node Markdown without changing it. Never overwrite an edition."""
import collections, hashlib, heapq, json, re
from pathlib import Path

BASE=Path(__file__).parent
SRC=BASE/'restored-complete'
OUT=BASE/'chapter-script-v001'
OUT.mkdir(exist_ok=False)
g=json.loads((SRC/'data/route-graph.json').read_text(encoding='utf-8'))
subs=json.loads((SRC/'data/subtitle-cues.json').read_text(encoding='utf-8'))
nodes={n['id']:n for n in g['nodes']}
names=['大风起','雨打萍','蛟入海','试锋刀','破山缺','问天命','太平志','九州同']
files=[f'{i:02d}-{name}-完整剧本.md' for i,name in enumerate(names)]
texts={p.stem:p.read_text(encoding='utf-8') for p in (SRC/'nodes').glob('*.md')}
hashes={p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in (SRC/'nodes').glob('*.md')}
ends=collections.defaultdict(list)
for e in g['ending_routes']: ends[e['target']].append(e)
def anchor(v): return 'node-'+v.lower()
def link(v,ch):
    target='' if int(v[:2])==ch else files[int(v[:2])]
    title=nodes.get(v,{}).get('title') or '未标注标题'
    return f'[{v} {title}]({target}#{anchor(v)})'
def sort_chapter(ch):
    vs={v for v in nodes if int(v[:2])==ch}
    degree={v:sum(p in vs for p in nodes[v]['predecessors']) for v in vs}
    q=[v for v in vs if degree[v]==0];heapq.heapify(q)
    ordered=[]
    while q:
        v=heapq.heappop(q);ordered.append(v)
        for t in nodes[v]['successors']:
            if t in vs:
                degree[t]-=1
                if degree[t]==0: heapq.heappush(q,t)
    assert len(ordered)==len(vs)
    return ordered
report=[]
for ch,name in enumerate(names):
    ids=sort_chapter(ch)
    extras=sorted(v for v in texts if int(v[:2])==ch and v not in nodes)
    chapter_ends=[e for e in g['ending_routes'] if e['chapter']==ch]
    cue_count=sum(len(s['cues']) for v,s in subs.items() if int(v[:2])==ch)
    s=[f'# {"序章" if ch==0 else "第"+str(ch)+"章"} {name} 完整剧本','',
       '整理日期：2026-11-12。适用本机恢复版本，发布包 1.1.16；沿用已核对资源哈希的 build 21189939 标记。含全部本地可恢复剧情与结局剧透。','',
       f'本章收录 {len(ids)} 个图节点、{len(extras)} 个图外字幕节点，字幕 {cue_count} 条，已映射结局 {len(chapter_ends)} 个。完整指当前恢复资料全部收录，不代表服务端条件与全部按钮已恢复。','',
       '## 阅读与编辑说明','',
       '正文按本章剧情图的拓扑顺序编排，同样可排序时按节点 ID 排列。相邻段落不一定连续发生，请按每段的后继链接阅读。互斥分支分别保留；合流节点只收录一次。跨章出口链接到另一章。','',
       '【分支】仅表示多个图上出口，可能是玩家选择、自动判定或 QTE；类型未核实时明确标为未知。【合流】只说明多个图上前驱，不说明这些前驱会在一次游玩中全部发生。【结局】依据已有结局映射。无后继但无结局映射的节点，不自动称为结局。','',
       '对白和时间码沿用当前节点 Markdown，字幕没有说话人标签时不补写。可以直接修改本文件；保留节点锚点有利于维持跳转。改稿不会自动回写游戏或节点文件。','',
       '所有边的执行条件尚未恢复；单出口也不能解释为已确认无条件。选项线索来自内置结局提示，不等于完整运行时按钮。','',
       '## 本章入口','',link(g['chapter_starts'][str(ch)],ch),'','## 结局索引','']
    s += [f'- **{e["title"]}**：{link(e["target"],ch)}。触发条件、跨章状态依赖未完整恢复。' for e in chapter_ends]
    s += ['','## 节点目录','']+[f'- {link(v,ch)}'+('【结局】' if v in ends else '') for v in ids]
    for v in ids+extras:
        n=nodes.get(v,{})
        title=texts[v].splitlines()[0].removeprefix('# ')
        s += ['',f'<a id="{anchor(v)}"></a>','',f'## {title}','']
        marks=[]
        if v==g['chapter_starts'][str(ch)]:marks.append('【本章入口】')
        if len(n.get('predecessors',[]))>1:marks.append('【合流】来自 '+str(len(n['predecessors']))+' 个图上前驱；不是累加播放')
        if len(n.get('successors',[]))>1:marks.append('【分支】'+str(len(n['successors']))+' 个图上出口；玩家选择 / 自动条件 / QTE 类型未完全核实')
        if v in ends: marks.append('【结局】'+'、'.join(e['title'] for e in ends[v]))
        elif not n.get('successors') and v in nodes: marks.append('【图上终点】未映射结局，不能据此认定游戏结束')
        if v in extras:marks.append('【图外字幕】连接位置未知，不插入任何假定路线')
        s += [*marks,'','**【未知条件】** 本节点所有出口的条件式均未恢复；数值提示不包含阈值。','']
        body=texts[v].split('\n',1)[1]
        body=body.replace('[返回目录](../README.md)','').strip()
        body=re.sub(r'^## ', '### ',body,flags=re.M)
        body=re.sub(r'\[[^\]]+\]\(\.\./nodes/([^)]+)\.md\)',lambda m:link(m[1],ch),body)
        s += [body,'','### 出口与条件','']
        for t in n.get('successors',[]):
            found=[g['choice_evidence'][i]['option_text'] for i in n.get('verified_choice_evidence_indices',[]) if g['choice_evidence'][i].get('target_video')==t]
            label=' / '.join(found) if found else '按钮原文或自动跳转方式未知'
            s += [f'- → {link(t,ch)}'+('【跨章】' if int(t[:2])!=ch else '')+f'；{label}；**执行条件未知**。']
        if not n.get('successors'):s += ['无已收录后继；以上结局标记与图外说明决定其资料状态。']
    out='\n'.join(s)+'\n'
    # Compare every current subtitle section as a verbatim block, including edits.
    for v in ids+extras:
        original=texts[v].split('## 字幕原文',1)[1].strip()
        assert original in out, v
    (OUT/files[ch]).write_text(out,encoding='utf-8')
    report.append({'chapter':ch,'file':files[ch],'graph_nodes':len(ids),'extra_nodes':len(extras),'cues':cue_count,'endings':len(chapter_ends)})
for file in OUT.glob('*.md'):
    content=file.read_text(encoding='utf-8')
    for target,a in re.findall(r'\]\(([^)#]*)#([^)]*)\)',content):
        dest=OUT/target if target else file
        assert f'id="{a}"' in dest.read_text(encoding='utf-8'),(file,target,a)
assert sum(r['cues'] for r in report)==9852
assert sum(r['graph_nodes']+r['extra_nodes'] for r in report)==len(texts)==617
assert sum(r['endings'] for r in report)==59
for p in (SRC/'nodes').glob('*.md'):assert hashes[p.name]==hashlib.sha256(p.read_bytes()).hexdigest()
(OUT/'合并检查.json').write_text(json.dumps({'chapters':report,'source_node_sha256':hashes,'checks':{'all_current_subtitle_sections_preserved':True,'all_node_anchor_links_resolve':True,'source_nodes_unchanged':True}},ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'阅读目录.md').write_text('# 江山北望 分章剧本与游戏文档\n\n2026-11-12。剧本保留本地已恢复对白，分支、合流、结局和未知条件在正文标注。\n\n'+ '\n'.join(f'- [{i} {n} 完整剧本]({files[i]})' for i,n in enumerate(names))+'\n\n- [游戏设计架构与技术栈](游戏设计架构与技术栈.md)\n\n原节点文件保持不变。本目录是独立可编辑稿，修改不会自动同步至旧文件。合并脚本拒绝覆盖已有目录。\n',encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
