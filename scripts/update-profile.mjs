import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const headers = { Accept:'application/vnd.github+json', 'User-Agent':'Phi-Sin-profile' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const repos = [];
for (let page=1; ; page++) {
  const res = await fetch(`https://api.github.com/users/Phi-Sin/repos?per_page=100&type=owner&sort=pushed&page=${page}`, {headers, signal:AbortSignal.timeout(30000)});
  if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
  const batch = await res.json();
  repos.push(...batch);
  if (batch.length < 100) break;
}
const original = repos.filter(r => !r.fork);
const recent = original.filter(r => r.name.toLowerCase() !== 'phi-sin').sort((a,b) => b.pushed_at.localeCompare(a.pushed_at)).slice(0,3);
const stamp = new Date().toISOString().slice(0,16).replace('T',' ') + ' UTC';
const stars = original.reduce((s,r) => s+r.stargazers_count,0);
const esc = v => String(v).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const md = v => String(v).replace(/[\\`*_{}\[\]<>()!|]/g,'\\$&');
const text = (x,y,v,size=16,color='#dae3ee') => `<text x="${x}" y="${y}" font-size="${size}" fill="${color}">${esc(v)}</text>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 320" role="img" aria-labelledby="title"><title id="title">Public GitHub snapshot updated ${stamp}</title>
<rect width="960" height="320" rx="12" fill="#080b12"/><path d="M0 48H960M320 70V170M640 70V170" stroke="#253345"/>
<g font-family="monospace">${text(28,31,'PUBLIC SIGNAL / GITHUB SNAPSHOT',14,'#00e5ff')}${text(28,109,original.length,38,'#fcee09')}${text(28,142,'PUBLIC ORIGINAL REPOS',14)}${text(348,109,stars,38,'#fcee09')}${text(348,142,'STARS / ORIGINAL REPOS',14)}${text(668,109,'UTC+07',30,'#00e5ff')}${text(668,142,'LOCAL TIME ZONE',14)}${text(28,192,'RECENT REPOSITORY PUSHES',13,'#00e5ff')}${recent.map((r,i)=>text(28,222+i*24,`${r.name.slice(0,48)} / ${r.pushed_at.slice(0,10)}`,15)).join('')}${text(28,301,`UPDATED ${stamp} / SCHEDULED SNAPSHOT`,12,'#9cacc0')}</g></svg>`;
const block = `<!-- SIGNAL:START -->\nUpdated **${stamp}** · Scheduled every 12 hours.\n\n${recent.map(r=>`- [${md(r.name)}](${r.html_url}) — latest repository push: ${r.pushed_at.slice(0,10)}`).join('\n') || 'No public project activity yet.'}\n<!-- SIGNAL:END -->`;
const readme = await readFile(new URL('README.md',root),'utf8');
const marker = /<!-- SIGNAL:START -->[\s\S]*?<!-- SIGNAL:END -->/;
if (!marker.test(readme)) throw new Error('Missing README markers');
await writeFile(new URL('assets/telemetry.svg',root),svg+'\n');
await writeFile(new URL('README.md',root),readme.replace(marker,()=>block));
console.log(`Generated snapshot of ${original.length} original public repositories.`);
