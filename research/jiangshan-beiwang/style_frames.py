import sys,json,subprocess,hashlib
from pathlib import Path
from PIL import Image,ImageDraw
sys.path.insert(0,str(Path(__file__).parent))
from inspect_story import Asar,GAME
OUT=Path('D:/Projects/Game/江山北望-影像风格研究-20261117')
OUT.mkdir(exist_ok=True)
BIN=Path('C:/Users/zhousirui/.codex/tools/game-research/bin')
ids=['00_001_001','00_005_002003004005','00_081_037038039040041','07_054_075075_1075_2075_3075_4075_5075_6','07_056_078079080081','07_068_052']
manifest=[]
for vid in ids:
 ch=int(vid[:2]);a=Asar(GAME/f'chapter{ch}_neutral.pack')
 p=OUT/'候选原片'/f'{vid}.mp4';p.parent.mkdir(exist_ok=True)
 if not p.exists():p.write_bytes(a.read(f'videos/{vid}.mp4'))
 info=json.loads(subprocess.check_output([str(BIN/'ffprobe.exe'),'-v','error','-show_format','-show_streams','-of','json',str(p)]))
 duration=float(info['format']['duration']);frames=[]
 for i in range(16):
  t=round((i+.35)*duration/16,3)
  f=OUT/'frames'/vid/f'{t:08.3f}.jpg';f.parent.mkdir(parents=True,exist_ok=True)
  if not f.exists():subprocess.run([str(BIN/'ffmpeg.exe'),'-v','error','-ss',str(t),'-i',str(p),'-frames:v','1','-vf','scale=960:-2','-q:v','2',str(f)],check=True)
  frames.append({'time':t,'path':str(f)})
 sheet=Image.new('RGB',(1280,800),'#222222');d=ImageDraw.Draw(sheet)
 for i,item in enumerate(frames):
  im=Image.open(item['path']);im.thumbnail((320,174));x=(i%4)*320;y=(i//4)*200;sheet.paste(im,(x,y));d.text((x+5,y+176),f'{item["time"]:.2f}s',fill='white')
 sp=OUT/f'{vid}-联系表.jpg';sheet.save(sp,quality=90)
 record={'id':vid,'pack':str(a.path),'entry':f'videos/{vid}.mp4','mp4':str(p),'sha256':hashlib.file_digest(p.open('rb'),'sha256').hexdigest(),'duration':duration,'streams':info['streams'],'frames':frames,'sheet':str(sp)}
 manifest.append(record);print(vid,duration,flush=True)
(OUT/'抽帧清单.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
