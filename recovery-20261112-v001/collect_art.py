import sys,json,hashlib,collections,html
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'research/jiangshan-beiwang'))
from inspect_story import Asar,GAME
out=Path(__file__).resolve().parents[1]/'江山北望-核心美术资产-20261117'
out.mkdir(exist_ok=False)
images={'.png','.jpg','.jpeg','.webp','.svg','.gif','.ico','.icns','.bmp','.avif'}
fonts={'.otf','.ttf','.woff','.woff2'}
media={'.mp4','.webm','.opus','.wav','.mp3','.ogg','.flac'}
rows=[];sources=[];counts=collections.Counter();total=0
for p in [GAME/'resources/app.asar',*sorted(GAME.glob('*.pack'))]:
 a=Asar(p)
 sources.append({'path':str(p),'bytes':p.stat().st_size,'mtime_ns':p.stat().st_mtime_ns})
 for n,m in a.entries.items():
  if 'node_modules/' in n or any(x.startswith('._') or x=='__MACOSX' for x in Path(n).parts):continue
  ext=Path(n).suffix.lower()
  if ext not in images|fonts|media:continue
  rel=None
  if n.startswith('characters/'):rel=Path('01-人物图片')/Path(n).relative_to('characters')
  elif ext in fonts:rel=Path('05-字体')/p.stem/n
  elif ext in images:
   group='02-界面与章节图' if p.name=='app.asar' else '03-章节缩略图与图片'
   rel=Path(group)/p.stem/n
  elif ext=='.webm':rel=Path('04-结局与章节动画')/p.stem/n
  elif p.name=='app.asar' and ext=='.mp4':rel=Path('04-结局与章节动画')/'app'/n
  row={'source_package':str(p),'entry':n,'bytes':m['size'],'type':ext,'extracted_path':None}
  if rel:
   dest=out/rel
   assert dest.resolve().is_relative_to(out.resolve())
   dest.parent.mkdir(parents=True,exist_ok=True)
   raw=a.read(n)
   assert len(raw)==m['size']
   with dest.open('xb') as f:f.write(raw)
   digest=hashlib.sha256(raw).hexdigest()
   assert hashlib.sha256(dest.read_bytes()).hexdigest()==digest
   row.update(extracted_path=str(dest),sha256=digest)
   counts[rel.parts[0]]+=1;total+=len(raw)
  rows.append(row)
app=Asar(GAME/'resources/app.asar')
version=json.loads(app.read('package.json'))['version']
apphash=hashlib.file_digest(app.path.open('rb'),'sha256').hexdigest()
for s in sources:
 p=Path(s['path']);assert p.stat().st_size==s['bytes'] and p.stat().st_mtime_ns==s['mtime_ns']
manifest={'date':'2026-11-17','client_version':version,'app_sha256':apphash,'sources':sources,'counts':dict(counts),'extracted_bytes':total,'assets':rows}
(out/'资产清单.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
lines=['# 江山北望 核心美术资产汇总','','2026-11-17。当前客户端 '+version+'，与 2026-11-12 的 1.1.16 不同，不沿用旧版资源数量。','','## 已提取，可直接打开','']
for k,v in counts.items():lines.append(f'- [{k}]({k}/)：{v} 个文件。')
lines+=['',f'共 {sum(counts.values())} 个文件，约 {total/1024**2:.1f} MiB。所有导出文件保持原始字节，已逐个检查 SHA-256；未修改安装目录。','','人物图按包内 carousel 与 portrait 两种用途分目录，34 位人物各两张；不是 PSD 或分层制作源文件。界面图含背景、按钮和 SVG；章节图像主要是节点缩略图。未把真人视频中的场景或人物截帧冒充独立原画。','','## 剧情视频与音频','','剧情 MP4 和音频保留在原安装包中；资产清单 JSON 逐条记录包的绝对路径、内部条目名和大小。包内路径不是可直接打开的普通文件。本次没有重复导出几十 GB 剧情视频。','','[全部视频与音频位置](影音原始位置.md)','','[全部图片浏览](图片浏览.html)','','[机器可读完整清单](资产清单.json)','','版本范围只按当前文件认定；未与旧版逐项比较、未完整播放动画。']
(out/'资产路径说明.md').write_text('\n'.join(lines),encoding='utf-8')
lines=['# 视频与音频原始位置','','未提取条目仍在以下包内，内部路径用于后续提取，不是磁盘上的独立文件。','']
for s in sources:
 selected=[r for r in rows if r['source_package']==s['path'] and r['type'] in media]
 if not selected:continue
 lines += [f'## {Path(s["path"]).name}','',f'原包：[{Path(s["path"]).name}]({Path(s["path"]).as_posix()})','','| 包内条目 | 大小 MiB | 状态 |','|---|---:|---|']
 for r in selected:lines.append(f'| `{r["entry"]}` | {r["bytes"]/1024**2:.2f} | '+('已提取至动画目录' if r['extracted_path'] else '保留在原包')+' |')
(out/'影音原始位置.md').write_text('\n'.join(lines),encoding='utf-8')
cards=[]
for r in rows:
 if r['extracted_path'] and r['type'] in images-{'.icns','.ico'}:
  rel=Path(r['extracted_path']).relative_to(out).as_posix();esc=html.escape(rel,quote=True)
  cards.append(f'<figure><a href="{esc}"><img loading="lazy" src="{esc}"></a><figcaption>{html.escape(rel)}</figcaption></figure>')
(out/'图片浏览.html').write_text('<!doctype html><meta charset="utf-8"><title>江山北望图片资产</title><style>body{font-family:system-ui;background:#eee;margin:24px}main{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}figure{margin:0;padding:12px;background:white}img{width:100%;height:220px;object-fit:contain;background:#ddd}figcaption{overflow-wrap:anywhere;font-size:13px}</style><h1>江山北望图片资产</h1><p>当前客户端 '+version+'。点击图片打开原文件；文件名与包内目录保留。</p><main>'+''.join(cards)+'</main>',encoding='utf-8')
print(json.dumps({'version':version,'counts':dict(counts),'extracted_MiB':round(total/1024**2,1),'inventory_entries':len(rows),'unextracted_video_count':sum(r['type']=='.mp4' and not r['extracted_path'] for r in rows),'unextracted_video_GiB':round(sum(r['bytes'] for r in rows if r['type']=='.mp4' and not r['extracted_path'])/1024**3,2)},ensure_ascii=False,indent=2))
