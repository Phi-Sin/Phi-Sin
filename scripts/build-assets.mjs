import {writeFile} from 'node:fs/promises';
const out = new URL('../assets/',import.meta.url);
const hero = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 440" role="img" aria-labelledby="title desc">
<title id="title">PHI-SIN / Netrunner dossier</title><desc id="desc">Freelance developer. IT Helpdesk and Support. Learning networking. Build useful things. Keep systems running.</desc>
<defs>
<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#132334" stroke-width=".6"/></pattern>
<linearGradient id="sky" x2="1" y2="1"><stop stop-color="#080b12"/><stop offset="1" stop-color="#122535"/></linearGradient>
<linearGradient id="fade"><stop stop-color="#00e5ff" stop-opacity="0"/><stop offset="1" stop-color="#00e5ff" stop-opacity=".5"/></linearGradient>
<style>
.pulse{animation:pulse 5s ease-in-out infinite}.scan{animation:scan 9s linear infinite}.orbit{transform-origin:775px 202px;animation:orbit 40s linear infinite}.signal{stroke-dasharray:14 200;animation:signal 9s linear infinite}
@keyframes pulse{50%{opacity:.35}}@keyframes scan{from{transform:translateY(-100px)}to{transform:translateY(320px)}}@keyframes orbit{to{transform:rotate(360deg)}}@keyframes signal{to{stroke-dashoffset:-428}}
@media(prefers-reduced-motion:reduce){.pulse,.scan,.orbit,.signal{animation:none}}
</style></defs>
<rect width="960" height="440" rx="12" fill="url(#sky)"/><rect width="960" height="440" rx="12" fill="url(#grid)"/>
<path d="M0 0H960V52L930 22H0Z" fill="#fcee09"/>
<g font-family="monospace"><text x="26" y="15" font-size="11" font-weight="bold" fill="#080b12">PERSONAL DOSSIER / PHI-SIN</text><text x="34" y="67" fill="#00e5ff" font-size="13" letter-spacing="3">BUILD / SUPPORT / AUTOMATE</text></g>
<g stroke="#25485b" fill="none"><circle cx="775" cy="202" r="126"/><circle cx="775" cy="202" r="107" stroke-dasharray="2 10"/><path d="M624 202H926M775 51V353"/><path d="M570 105H622L650 133M560 299H627L660 266M851 91L893 50H930"/></g>
<circle class="orbit" cx="775" cy="202" r="126" fill="none" stroke="#00e5ff" stroke-width="3" stroke-dasharray="75 717"/>
<path d="M775 98L856 148V247L775 297L694 247V148Z" fill="#0a1620" stroke="#00e5ff" stroke-width="2"/>
<path d="M775 122L834 160V234L775 272L716 234V160Z" fill="none" stroke="#fcee09"/>
<path d="M744 167H803V184H763V195H795V236H740V219H776V209H744Z" fill="#fcee09"/>
<circle cx="856" cy="148" r="5" fill="#fcee09" class="pulse"/>
<path class="signal" d="M570 105H622L650 133M560 299H627L660 266" fill="none" stroke="#00e5ff" stroke-width="2"/>
<g font-family="Arial,Helvetica,sans-serif" font-weight="900"><text x="33" y="177" font-size="91" letter-spacing="-5" fill="#fcee09">PHI-SIN</text></g>
<path d="M36 196H390L402 184H523" stroke="#fcee09" fill="none"/>
<g font-family="monospace"><text x="36" y="230" font-size="19" fill="#f0f4fa">FREELANCE DEVELOPER</text><text x="36" y="261" font-size="19" fill="#f0f4fa">IT HELPDESK / SUPPORT</text><text x="36" y="296" font-size="13" fill="#00e5ff">NEXT SKILL: IT NETWORKING</text>
<text x="36" y="344" font-size="15" fill="#aab8c9">Build useful things. Keep systems running.</text></g>
<g fill="#091018" stroke="#233b4b"><path d="M582 370V329H603V305H626V348H644V292H671V369H690V342H713V316H733V369H754V323H773V288H800V369H824V340H844V306H867V366H891V327H920V369H960V440H582Z"/></g>
<path class="scan" d="M630 100H921" stroke="url(#fade)" stroke-width="2"/>
<path d="M0 385H960" stroke="#294353"/><rect x="0" y="385" width="8" height="55" fill="#fcee09"/>
<g font-family="monospace" font-size="12" fill="#97a9bd"><text x="35" y="418">ERP AUTOMATION / INTERNAL TOOLS / RPG PLANNING</text><text x="802" y="418" fill="#00e5ff">BACH TUNG IT</text></g></svg>`;
await writeFile(new URL('hero.svg',out),hero+'\n');
const icons = {
facebook:'<path d="M23 9h-4c-4 0-6 3-6 7v3H9v5h4v12h6V24h4l1-5h-5v-3c0-1 1-2 2-2h3Z" fill="#00e5ff" transform="translate(8 -3) scale(.9)"/>',
linkedin:'<rect x="12" y="11" width="20" height="20" rx="2" fill="#00e5ff"/><circle cx="17" cy="16" r="1.5" fill="#080b12"/><path d="M17 19v8M22 27v-8m0 3c0-4 6-4 6 0v5" stroke="#080b12" stroke-width="2.4" fill="none"/>',
github:'<path d="M14 16l-1-6 6 3a17 17 0 0 1 8 0l6-3-1 6c4 8-1 13-7 13v6h-5v-6c-7 0-11-5-6-13Z" fill="#00e5ff"/>'
};
for (const [name,icon] of Object.entries(icons)) {
 const label = {facebook:'FACEBOOK',linkedin:'LINKEDIN',github:'GITHUB'}[name];
 await writeFile(new URL(`${name}.svg`,out),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" role="img"><title>${label}</title><path d="M1 1H149L159 11V39H1Z" fill="#080b12" stroke="#285366"/>${icon}<text x="48" y="25" fill="#e6edf3" font-family="monospace" font-size="13" letter-spacing="1">${label}</text></svg>\n`);
}
await writeFile(new URL('footer.svg',out),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 72"><rect width="960" height="72" fill="#080b12"/><path d="M0 1H620L639 20H960" fill="none" stroke="#00e5ff"/><text x="26" y="46" font-family="monospace" font-size="14" fill="#fcee09">LEARN. BUILD. TROUBLESHOOT. REPEAT.</text><text x="810" y="46" font-family="monospace" font-size="12" fill="#aab8c9">PHI-SIN // EOF</text></svg>\n`);
console.log('Generated hero, social buttons and footer.');

