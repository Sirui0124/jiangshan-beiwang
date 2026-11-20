"""Read local ASAR metadata and selected narrative evidence without exporting a script corpus."""
import json
import re
import struct
import subprocess
from pathlib import Path

GAME = Path(r'D:\SteamLibrary\steamapps\common\江山北望')

class Asar:
    def __init__(self, path):
        self.path = Path(path)
        with self.path.open('rb') as f:
            header = struct.unpack('<IIII', f.read(16))
            self.base = 8 + header[1]
            self.tree = json.loads(f.read(header[3]))
        self.entries = dict(self.walk(self.tree))

    def walk(self, node, prefix=''):
        for name, item in node.get('files', {}).items():
            if 'files' in item:
                yield from self.walk(item, prefix + name + '/')
            else:
                yield prefix + name, item

    def read(self, name):
        item = self.entries[name]
        if item.get('unpacked'):
            raise ValueError('Unpacked entry requires explicit external path')
        with self.path.open('rb') as f:
            f.seek(self.base + int(item['offset']))
            return f.read(item['size'])

def locale():
    archive = Asar(GAME / 'resources/app.asar')
    name = next(n for n in archive.entries if '/assets/zh-cmn-Hans-' in n and n.endswith('.js'))
    source = archive.read(name).decode('utf-8')
    # Evaluate only the locale data declaration, in a context without host APIs.
    source = source[source.index('const e={generic_name:'):source.rindex('export{')]
    driver = "const fs=require('fs'),vm=require('vm');const s=fs.readFileSync(0,'utf8');const c=vm.createContext(Object.create(null),{codeGeneration:{strings:false,wasm:false}});process.stdout.write(JSON.stringify(vm.runInContext(s+';l',c,{timeout:1000})));"
    result = subprocess.run(['node', '-e', driver], input=source, text=True, encoding='utf-8', capture_output=True, check=True)
    return json.loads(result.stdout)

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--chapter', type=int)
    p.add_argument('--subtitle', help='chapter:number prefix, e.g. 7:07_055')
    args = p.parse_args()
    if args.subtitle:
        ch, prefix = args.subtitle.split(':', 1)
        a = Asar(GAME / f'chapter{ch}_zh_cmn_Hans.pack')
        for name in a.entries:
            if name.startswith('subtitles/' + prefix) and name.endswith('.vtt'):
                print(name, a.read(name).decode('utf-8-sig'))
    else:
        data = locale()
        if args.chapter is not None:
            for key, item in data['nodes'].items():
                if key.startswith(f'a{args.chapter:02d}_'):
                    print(key, item.get('title'), item.get('description'))
        else:
            print(json.dumps({'chapters':data['chapters'], 'node_count':len(data['nodes']), 'ending_count':len(data['endings']), 'characters':list(data['portfolios'])},ensure_ascii=False,indent=2))
