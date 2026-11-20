import fs from 'node:fs/promises';
import path from 'node:path';
import prettier from './tools/node_modules/prettier/index.mjs';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const parser = require('C:/Users/zhousirui/.codex/tools/game-research/rea-runtime/node_modules/@babel/parser');
const root = path.join(import.meta.dirname, 'restored-complete');
const src = path.join(root, 'code-original');
const report = [];
async function walk(dir) {
  for (const e of await fs.readdir(dir, {withFileTypes:true})) {
    const file = path.join(dir,e.name);
    if(e.isDirectory()) { await walk(file); continue; }
    if(!/\.(js|css|html|json)$/.test(file)) continue;
    const rel = path.relative(src,file);
    const original = await fs.readFile(file,'utf8');
    const formatted = await prettier.format(original,{filepath:file});
    const dest = path.join(root,'code-readable',rel);
    await fs.mkdir(path.dirname(dest),{recursive:true});
    try { await fs.writeFile(dest,formatted,{flag:'wx'}); }
    catch(e) { if(e.code!=='EEXIST' || await fs.readFile(dest,'utf8')!==formatted) throw e; }
    const ok = await prettier.check(await fs.readFile(dest,'utf8'),{filepath:file});
    let equivalent=null;
    if(file.endsWith('.js')) {
      const clean = value => JSON.stringify(value,(key,v)=> ['start','end','loc','extra','comments','leadingComments','trailingComments','innerComments','tokens','errors'].includes(key)?undefined:v);
      equivalent=clean(parser.parse(original,{sourceType:'unambiguous'}))===clean(parser.parse(formatted,{sourceType:'unambiguous'}));
      if(!equivalent) throw new Error('AST mismatch: '+rel);
    }
    report.push({file:rel,format_idempotent:ok,javascript_ast_equivalent:equivalent});
  }
}
await walk(src);
await fs.writeFile(path.join(root,'data/code-format-report.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({formatted:report.length,all_parsed:true}));
