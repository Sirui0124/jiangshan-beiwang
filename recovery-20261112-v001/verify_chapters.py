import json,re,hashlib
from pathlib import Path
base=Path(__file__).parent
out=base/'chapter-script-v001'
src=base/'restored-complete'
graph=json.loads((src/'data/route-graph.json').read_text(encoding='utf-8'))
report=json.loads((out/'合并检查.json').read_text(encoding='utf-8'))
link_count=0
for p in out.glob('*.md'):
    text=p.read_text(encoding='utf-8')
    for link in re.findall(r'\]\(([^)]+)\)',text):
        if link.startswith(('https:','http:')):continue
        file,_,a=link.partition('#')
        dest=(p.parent/file).resolve() if file else p
        assert dest.exists(),(p,link)
        if a:assert f'id="{a}"' in dest.read_text(encoding='utf-8'),(p,link)
        link_count+=1
texts={c['chapter']:(out/c['file']).read_text(encoding='utf-8') for c in report['chapters']}
for e in graph['edges']:
    body=texts[int(e['from'][:2])].split(f'<a id="node-{e["from"].lower()}"></a>',1)[1].split('<a id=',1)[0]
    assert f'#node-{e["to"].lower()}' in body,(e['from'],e['to'])
for name,h in report['source_node_sha256'].items():
    p=src/'nodes'/name
    assert hashlib.sha256(p.read_bytes()).hexdigest()==h,name
    body=p.read_text(encoding='utf-8').split('## 字幕原文',1)[1].strip()
    assert body in texts[int(name[:2])],name
result={'chapter_files':len(texts),'markdown_links_checked':link_count,'graph_edges_checked':len(graph['edges']),'current_subtitle_blocks_preserved':len(report['source_node_sha256']),'cues':sum(c['cues'] for c in report['chapters']),'endings':sum(c['endings'] for c in report['chapters']),'original_nodes_unchanged':True,'runtime_playtested':False}
(out/'最终校验.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
