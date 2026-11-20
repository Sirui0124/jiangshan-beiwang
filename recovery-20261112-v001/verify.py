import hashlib,json,re
from pathlib import Path
root=Path(__file__).parent/'restored-complete'
manifest=json.loads((root/'data/extraction-manifest.json').read_text(encoding='utf-8'))
for item in manifest:
    assert hashlib.sha256((root/item['path']).read_bytes()).hexdigest()==item['sha256'],item['path']
links=0
for file in root.rglob('*.md'):
    for target in re.findall(r'\]\(([^)]+)\)',file.read_text(encoding='utf-8')):
        assert (file.parent/target).resolve().exists(),(file,target)
        links+=1
subs=json.loads((root/'data/subtitle-cues.json').read_text(encoding='utf-8'))
count=0
for vid,sub in subs.items():
    md=(root/'nodes'/f'{vid}.md').read_text(encoding='utf-8')
    assert md.count('** -->')==0
    for cue in sub['cues']:
        expected='\n'.join('> '+line for line in cue['text'].split('\n'))
        assert expected in md,(vid,cue)
        count+=1
stats=json.loads((root/'data/recovery-report.json').read_text(encoding='utf-8'))
assert count==stats['subtitle_cues']
rea=json.loads((root.parent/'rea-followup-summary.json').read_text(encoding='utf-8-sig'))
assert stats['app_sha256'] in json.dumps(rea)
report={'original_file_hashes_verified':len(manifest),'markdown_links_verified':links,'subtitle_cues_verified':count,'rea_digest_matches':True,'runtime_playtested':False}
(root/'data/verification.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report,indent=2))
