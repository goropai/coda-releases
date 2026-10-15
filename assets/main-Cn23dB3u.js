import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./styles-B8enwdRz.js";var p=c(),m=r(),h=`coda-site-downloads`,g=6e5;function _(e){return Object.values(e).reduce((e,t)=>e+t,0)}function v(e){let t={};for(let n of e){let e=n.tag_name.replace(/^v/,``);t[e]=n.assets.reduce((e,t)=>e+t.download_count,0)}return t}function y(){try{let e=window.sessionStorage.getItem(h);if(!e)return null;let t=JSON.parse(e);return Date.now()-t.at<g?t.counts:null}catch{return null}}function b(e){try{window.sessionStorage.setItem(h,JSON.stringify({at:Date.now(),counts:e}))}catch{}}async function x(e,t){let n=y();if(n)return n;let r=e.replace(`https://github.com/`,`https://api.github.com/repos/`);try{let e=await fetch(`${r}/releases?per_page=100`,{headers:{Accept:`application/vnd.github+json`},signal:t});if(!e.ok)return null;let n=v(await e.json());return b(n),n}catch{return null}}var S=n();function C(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function w(e,t){let n=C(e),r=[{until:.12,level:.32},{until:.42,level:.86},{until:.52,level:.45},{until:.86,level:.92},{until:1,level:.38}],i=[];for(let e=0;e<t;e++){let a=e/t,o=r.find(e=>a<=e.until)??r[r.length-1],s=e%4==0?.12:0,c=o.level*(.72+.28*n())+s;i.push(Math.min(1,c))}return i}var T=220,E=1e3,D=120;function O({seed:e,played:t,zone:n,bpm:r,label:i}){let a=(0,p.useMemo)(()=>w(e,T),[e]),o=E/T,s=n.from*E,c=(n.to-n.from)*E,l=n.kind===`out`?`var(--zone-out)`:`var(--zone-in)`,u=Array.from({length:24},(e,t)=>{let r=t/23,i=n.kind===`out`?Math.cos(r*Math.PI/2):Math.sin(r*Math.PI/2),a=s+r*c,o=16+(1-i)*94;return`${t===0?`M`:`L`}${a.toFixed(1)},${o.toFixed(1)}`}).join(` `);return(0,S.jsxs)(`svg`,{className:`waveform`,viewBox:`0 0 ${E} ${D}`,preserveAspectRatio:`none`,role:`img`,"aria-label":i,children:[(0,S.jsx)(`rect`,{width:E,height:D,className:`waveform-bg`}),Array.from({length:33},(e,t)=>(0,S.jsx)(`line`,{x1:t*31.25,x2:t*31.25,y1:12,y2:D,className:`waveform-grid`},`g${t}`)),Array.from({length:17},(e,t)=>(0,S.jsx)(`polygon`,{points:`${t*62.5-5},2 ${t*62.5+5},2 ${t*62.5},10`,className:`bar-handle`},`h${t}`)),(0,S.jsx)(`rect`,{x:s,y:12,width:c,height:108,fill:l,className:`zone`}),a.map((e,n)=>{let r=e*(D/2-10),i=n*o;return(0,S.jsx)(`rect`,{x:i+.6,y:66-r,width:3.3454545454545457,height:r*2,className:n/T<t?`wave-played`:`wave-rest`},n)}),(0,S.jsx)(`path`,{d:u,className:`zone-curve`}),(0,S.jsx)(`line`,{x1:(n.kind,s),x2:s,y1:12,y2:D,className:n.kind===`out`?`cue cue-out`:`cue cue-in`}),(0,S.jsx)(`line`,{x1:t*E,x2:t*E,y1:12,y2:D,className:`playhead`}),(0,S.jsxs)(`g`,{className:`bpm-badge`,children:[(0,S.jsx)(`rect`,{x:882,y:16,width:108,height:22,rx:3}),(0,S.jsx)(`text`,{x:936,y:32,textAnchor:`middle`,children:r})]})]})}function k({t:e}){return(0,S.jsxs)(`div`,{className:`app-window`,"aria-hidden":`true`,children:[(0,S.jsxs)(`div`,{className:`app-titlebar`,children:[(0,S.jsx)(`img`,{src:`./icon.png`,alt:``}),(0,S.jsx)(`span`,{children:`Coda`}),(0,S.jsxs)(`span`,{className:`app-titlebar-controls`,children:[(0,S.jsx)(`i`,{children:`–`}),(0,S.jsx)(`i`,{children:`□`}),(0,S.jsx)(`i`,{children:`✕`})]})]}),(0,S.jsx)(`div`,{className:`app-menu`,children:e.menu.map(e=>(0,S.jsx)(`span`,{children:e},e))}),(0,S.jsxs)(`div`,{className:`app-body`,children:[(0,S.jsxs)(`div`,{className:`app-decks`,children:[(0,S.jsx)(A,{t:e,active:!0,title:`Beels & T:Base — Other Side of Town`,cover:`cover-a`,seed:7,played:.83,zone:{from:.86,to:.97,kind:`out`}}),(0,S.jsxs)(`div`,{className:`transition-row`,children:[(0,S.jsx)(`span`,{className:`arrows`,children:`▲▼`}),(0,S.jsx)(`span`,{children:e.playedPercent}),(0,S.jsx)(`span`,{className:`fake-combo`,children:`70%`}),(0,S.jsx)(`span`,{children:e.type}),(0,S.jsx)(`span`,{className:`fake-combo`,children:`Jungle`}),(0,S.jsx)(`span`,{children:e.transition}),(0,S.jsx)(`span`,{className:`fake-combo wide`,children:e.pattern}),(0,S.jsx)(`span`,{className:`fake-combo`,children:e.bassSwap}),(0,S.jsx)(`span`,{className:`fake-check checked`,children:e.syncTempo}),(0,S.jsx)(`span`,{className:`duration`,children:e.duration})]}),(0,S.jsx)(A,{t:e,title:`Wright & Bastard — Fertile`,cover:`cover-b`,seed:23,played:0,zone:{from:.13,to:.24,kind:`in`}})]}),(0,S.jsxs)(`div`,{className:`app-meters`,children:[(0,S.jsx)(j,{label:`1`,level:`meter-a`}),(0,S.jsx)(`div`,{className:`meter-scale`,children:[`+3`,`0`,`−6`,`−12`,`−24`,`−36`,`−48`].map(e=>(0,S.jsx)(`span`,{children:e},e))}),(0,S.jsx)(j,{label:`2`,level:`meter-b`})]})]})]})}function A({t:e,title:t,cover:n,seed:r,played:i,zone:a,active:o}){return(0,S.jsxs)(`div`,{className:`deck${o?` deck-active`:``}`,children:[(0,S.jsx)(`div`,{className:`deck-cover ${n}`}),(0,S.jsxs)(`div`,{className:`deck-zoom`,children:[(0,S.jsx)(`span`,{children:`+`}),(0,S.jsx)(`small`,{children:`1.0x`}),(0,S.jsx)(`span`,{children:`−`})]}),(0,S.jsxs)(`div`,{className:`deck-main`,children:[(0,S.jsxs)(`div`,{className:`deck-top`,children:[(0,S.jsx)(`span`,{className:`fake-check`,children:e.metronome}),(0,S.jsx)(`span`,{className:`fake-check`,children:e.kicks}),(0,S.jsx)(`span`,{className:`fake-check checked`,children:e.bars}),(0,S.jsxs)(`span`,{className:`deck-title`,children:[t,` (5:18 | 44 kHz, 320 kbps | MP3)`]})]}),(0,S.jsx)(O,{seed:r,played:i,zone:a,bpm:`174.0 BPM`,label:e.waveformLabel})]})]})}function j({label:e,level:t}){return(0,S.jsxs)(`div`,{className:`meter`,children:[(0,S.jsx)(`span`,{className:`meter-label`,children:e}),(0,S.jsxs)(`div`,{className:`meter-trough`,children:[(0,S.jsx)(`div`,{className:`meter-level ${t}`}),(0,S.jsx)(`div`,{className:`meter-fader`})]})]})}function M({source:e}){let t=[],n=[],r=[],i=()=>{r.length&&(t.push((0,S.jsx)(`p`,{children:N(r.join(` `))},t.length)),r=[])},a=()=>{n.length&&(t.push((0,S.jsx)(`ul`,{children:n.map((e,t)=>(0,S.jsx)(`li`,{children:N(e)},t))},t.length)),n=[])};for(let o of e.replace(/\r\n/g,`
`).split(`
`)){let e=o.trim(),s=/^(#{1,4})\s+(.*)$/.exec(e);if(!e)i(),a();else if(s){i(),a();let e=`h${Math.min(s[1].length+2,6)}`;t.push((0,S.jsx)(e,{children:N(s[2])},t.length))}else e.startsWith(`- `)?(i(),n.push(e.slice(2))):(a(),r.push(e))}return i(),a(),(0,S.jsx)(S.Fragment,{children:t})}function N(e){return e.split(/(\*\*[^*]+\*\*)/).map((e,t)=>e.startsWith(`**`)&&e.endsWith(`**`)&&e.length>4?(0,S.jsx)(`strong`,{children:P(e.slice(2,-2))},t):(0,S.jsx)(p.Fragment,{children:P(e)},t))}function P(e){return e.split(/(https?:\/\/[^\s,;)]*[^\s,;).])/).map((e,t)=>/^https?:\/\//.test(e)?(0,S.jsx)(`a`,{className:`text-link`,href:e,target:`_blank`,rel:`noreferrer`,children:e},t):(0,S.jsx)(p.Fragment,{children:e},t))}var F=`# Coda — End User License Agreement

Version 1.2, effective 6 October 2026.

Coda ("the Software") is provided by its author, Oleg Goropai, located in Ukraine ("the Licensor"), who can be contacted at goropai@ukr.net. This Agreement is between you and the Licensor. By installing or using the Software you accept it. If you do not accept it, do not install or use the Software.

## 1. Licence

The Licensor grants you a free of charge, non-exclusive, non-transferable and revocable licence to install and use the Software on devices you own or control, for any purpose except Commercial Exploitation of the Software as defined in section 2.

## 2. What you may and may not do

You may, free of charge:

- use the Software for yourself, for practice and for DJ performances, private or public, **including performances you are paid for**;
- record, publish and sell mixes and other audio you create with the Software. The Licensor claims no rights to that output.

You may not, without the Licensor's prior written permission ("Commercial Exploitation of the Software"):

- sell, rent, lease or sublicense the Software, or charge anyone for access to it;
- include the Software, or any part of it, in a product or service offered to others;
- provide the functionality of the Software to others as a hosted or online service.

## 3. Restrictions

Except where this Agreement, a mandatory provision of applicable law or the licence of a third-party component (section 5) expressly allows it, you may not:

- copy or distribute the Software, other than installing it on your own devices and keeping backup copies for your own use. Others should download it from the official releases site, https://goropai.github.io/coda-releases/;
- modify, translate or adapt the Software, or create derivative works of it;
- decompile, disassemble or otherwise reverse engineer the Software;
- remove or alter copyright notices, licence texts or this Agreement.

## 4. Ownership

The Software is licensed, not sold. The Licensor keeps all rights, title and interest in the Software, including its source code, which is not provided. No right is granted except those stated in this Agreement.

## 5. Third-party components

The Software contains components made by third parties and licensed under their own terms. The list of those components and the full text of their licences is in Help → Third-party licences, and in the files THIRD-PARTY.txt and LICENSE-TEXTS.txt that accompany the Software. For those components their licences prevail over this Agreement, and nothing in this Agreement limits the rights they give you. In particular, for components licensed under the GNU Lesser General Public License, among them FFmpeg, you may replace them with modified versions and reverse engineer the Software to the extent needed to debug such modifications.

The models used for style analysis are not part of the Software. When style analysis is first used, the Software downloads them from the Essentia project (https://essentia.upf.edu). They are licensed by their authors under Creative Commons BY-NC-SA 4.0, which does not allow commercial use; your use of them is governed by that licence, not by this Agreement.

## 6. Your music

This Agreement gives you no rights to the music you play, analyse or record with the Software. You are responsible for holding the rights or licences needed to perform, record and publish it.

## 7. Your data

The Software works on your computer. It keeps its library database, settings, downloaded models and log files in your user folder (.coda) and does not send them anywhere. It connects to the internet only:

- to download the style-analysis models described in section 5;
- to check for new versions — at startup, unless you turn this off in Settings, and whenever you choose Help → Check for updates. The check asks GitHub (https://github.com), where the official releases are published, for the latest release, and reads its list of changes from the official releases site; the request names the Software and its version and nothing else. If you then choose to update, the Software downloads the installer from the same place and verifies its checksum before running it. Nothing is downloaded or installed unless you choose to;
- if you turn on the corresponding setting, to look up genres on MusicBrainz (https://musicbrainz.org).

As with any connection to a website, those services see your IP address, and their own privacy policies apply. The Software contains no telemetry.

## 8. No warranty

The Software is provided "as is", without warranty of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. You use it at your own risk, including during live performances.

## 9. Limitation of liability

To the maximum extent permitted by applicable law, the Licensor is not liable for any direct, indirect, incidental, special or consequential damages arising from the use of, or the inability to use, the Software, including loss of data, damage to equipment, an interrupted performance or lost income, even if advised of the possibility of such damages.

## 10. Termination

This Agreement remains in effect until terminated. It terminates automatically if you breach it. On termination you must stop using the Software and delete all copies of it. Sections 4, 6, 8, 9 and 12 survive termination.

## 11. New versions

A later version of the Software may come with a different agreement. Each version of the Software is governed by the agreement supplied with it.

## 12. Governing law and language

This Agreement is governed by the law of Ukraine. It is written in English, and a Ukrainian translation is provided for convenience. If the two differ, the English version prevails.
`,I=`# Coda — Ліцензійна угода з кінцевим користувачем

Версія 1.2, чинна з 6 жовтня 2026 року.

Це переклад для зручності. Чинною є англійська версія угоди, і в разі розбіжностей переважає вона.

Coda («Програма») надає її автор, Олег Горопай (Oleg Goropai), місцезнаходження — Україна («Ліцензіар»), з яким можна зв'язатися за адресою goropai@ukr.net. Ця угода укладається між вами та Ліцензіаром. Встановлюючи або використовуючи Програму, ви її приймаєте. Якщо ви її не приймаєте, не встановлюйте й не використовуйте Програму.

## 1. Ліцензія

Ліцензіар надає вам безоплатну, невиключну, непередавану й відкличну ліцензію встановлювати й використовувати Програму на пристроях, якими ви володієте або які контролюєте, з будь-якою метою, крім Комерційного використання Програми, як його визначає розділ 2.

## 2. Що можна і чого не можна

Ви можете безоплатно:

- використовувати Програму для себе, для практики й для DJ-виступів, приватних чи публічних, **зокрема тих, за які вам платять**;
- записувати, публікувати й продавати мікси та інше аудіо, створене за допомогою Програми. Ліцензіар не претендує на жодні права на нього.

Без попереднього письмового дозволу Ліцензіара («Комерційне використання Програми») ви не можете:

- продавати, здавати в оренду чи субліцензувати Програму або брати з будь-кого плату за доступ до неї;
- включати Програму чи будь-яку її частину до продукту або послуги, що пропонуються іншим;
- надавати іншим функції Програми як розміщений чи онлайн-сервіс.

## 3. Обмеження

Окрім випадків, які прямо дозволяє ця угода, імперативна норма застосовного права або ліцензія стороннього компонента (розділ 5), ви не можете:

- копіювати чи розповсюджувати Програму, крім встановлення на власні пристрої та зберігання резервних копій для власного користування. Іншим слід завантажувати її з офіційного сайту релізів, https://goropai.github.io/coda-releases/;
- змінювати, перекладати чи адаптувати Програму або створювати похідні від неї твори;
- декомпілювати, дизасемблювати чи іншим чином здійснювати зворотну розробку Програми;
- вилучати або змінювати повідомлення про авторські права, тексти ліцензій чи цю угоду.

## 4. Право власності

Програма надається за ліцензією, а не продається. Ліцензіар зберігає всі права на Програму, зокрема на її вихідний код, який не надається. Жодних прав, крім зазначених у цій угоді, не надається.

## 5. Сторонні компоненти

Програма містить компоненти, створені третіми сторонами й ліцензовані на їхніх власних умовах. Перелік цих компонентів і повні тексти їхніх ліцензій є в меню «Довідка → Ліцензії сторонніх компонентів», а також у файлах THIRD-PARTY.txt і LICENSE-TEXTS.txt, що супроводжують Програму. Щодо цих компонентів їхні ліцензії мають перевагу над цією угодою, і ніщо в цій угоді не обмежує прав, які вони вам надають. Зокрема, компоненти під GNU Lesser General Public License, серед них FFmpeg, ви можете замінювати зміненими версіями та здійснювати зворотну розробку Програми в межах, потрібних для налагодження таких змін.

Моделі для аналізу стилю не є частиною Програми. Коли аналіз стилю вперше використовується, Програма завантажує їх із проєкту Essentia (https://essentia.upf.edu). Їхні автори ліцензують їх на умовах Creative Commons BY-NC-SA 4.0, яка не дозволяє комерційного використання; ваше користування ними регулює ця ліцензія, а не ця угода.

## 6. Ваша музика

Ця угода не надає вам жодних прав на музику, яку ви відтворюєте, аналізуєте чи записуєте за допомогою Програми. Ви відповідаєте за наявність прав або ліцензій, потрібних для її виконання, запису й публікації.

## 7. Ваші дані

Програма працює на вашому комп'ютері. Базу даних бібліотеки, налаштування, завантажені моделі й журнали вона зберігає у вашій теці користувача (.coda) і нікуди їх не надсилає. До інтернету вона звертається лише:

- щоб завантажити моделі аналізу стилю, описані в розділі 5;
- щоб перевірити, чи вийшла нова версія, — під час запуску, якщо ви не вимкнете цього в налаштуваннях, і щоразу, коли ви обираєте «Довідка → Перевірити оновлення». Перевірка запитує в GitHub (https://github.com), де публікуються офіційні релізи, найновіший реліз і читає перелік його змін з офіційного сайту релізів; запит називає Програму та її версію і більше нічого. Якщо після цього ви оберете оновитися, Програма завантажує інсталятор звідти ж і перед запуском звіряє його контрольну суму. Без вашого вибору нічого не завантажується й не встановлюється;
- якщо ви ввімкнете відповідне налаштування, — щоб шукати жанри в MusicBrainz (https://musicbrainz.org).

Як і за будь-якого звернення до вебсайту, ці сервіси бачать вашу IP-адресу, і на них поширюються їхні власні правила конфіденційності. Телеметрії Програма не містить.

## 8. Відмова від гарантій

Програма надається «як є», без будь-яких гарантій, явних чи неявних, зокрема гарантій придатності до продажу, придатності для певної мети й відсутності порушень прав. Ви використовуєте її на власний ризик, зокрема під час живих виступів.

## 9. Обмеження відповідальності

У максимальних межах, дозволених застосовним правом, Ліцензіар не відповідає за жодні прямі, непрямі, випадкові, спеціальні чи опосередковані збитки, спричинені використанням Програми або неможливістю її використати, зокрема за втрату даних, пошкодження обладнання, перерваний виступ чи втрачений дохід, навіть якщо його попереджали про можливість таких збитків.

## 10. Припинення дії

Угода діє, доки її дію не припинено. Вона припиняється автоматично, якщо ви її порушуєте. Після припинення ви мусите припинити використання Програми та видалити всі її копії. Розділи 4, 6, 8, 9 і 12 залишаються чинними після припинення.

## 11. Нові версії

Пізніша версія Програми може постачатися з іншою угодою. Кожну версію Програми регулює угода, що постачається разом із нею.

## 12. Застосовне право і мова

Ця угода регулюється правом України. Її складено англійською мовою, а український переклад надано для зручності. У разі розбіжностей переважає англійська версія.
`,L=new URL(`THIRD-PARTY-DN6T4q0N.txt`,import.meta.url).href,R=new URL(`LICENSE-TEXTS-QEXp_WjJ.txt`,import.meta.url).href,z={en:F,uk:I},B=L,V=R,H=`https://github.com/microsoft/onnxruntime/blob/v1.19.2/ThirdPartyNotices.txt`,U=[`var(--accent)`,`var(--cyan)`,`var(--amber)`,`var(--live)`];function W(){let[n,r]=(0,p.useState)(t),c=f[n],m=s[0],[h]=l(m,n),[g,v]=(0,p.useState)(null);return(0,p.useEffect)(()=>{let e=new AbortController;return x(o,e.signal).then(t=>{e.signal.aborted||v(t)}),()=>e.abort()},[]),(0,p.useEffect)(()=>{document.documentElement.lang=n,document.title=c.htmlTitle,document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,c.metaDescription)},[n,c]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d,{t:c,lang:n,onChoose:e=>{r(e),a(e)},page:`home`}),(0,S.jsxs)(`main`,{id:`top`,children:[(0,S.jsxs)(`section`,{className:`hero`,children:[(0,S.jsxs)(`div`,{className:`hero-text`,children:[(0,S.jsx)(`p`,{className:`eyebrow`,children:c.hero.eyebrow}),(0,S.jsxs)(`h1`,{children:[`Coda `,(0,S.jsx)(`span`,{className:`hero-tagline`,children:`— Mix everything!`})]}),(0,S.jsx)(`p`,{className:`lead`,children:c.hero.lead}),(0,S.jsxs)(`div`,{className:`hero-actions`,children:[(0,S.jsx)(`a`,{className:`button button-primary`,href:h.url,children:c.hero.download(m.version)}),(0,S.jsx)(`a`,{className:`button`,href:`#releases`,children:c.hero.allReleases})]}),(0,S.jsxs)(`p`,{className:`hero-meta`,children:[c.hero.platform,` · `,h.note,` · `,u(m.date,n),g&&(0,S.jsxs)(S.Fragment,{children:[` · `,(0,S.jsx)(`span`,{className:`download-count`,children:c.downloads(_(g))})]})]})]}),(0,S.jsx)(k,{t:c.app})]}),(0,S.jsxs)(`section`,{id:`features`,className:`section`,children:[(0,S.jsx)(`h2`,{children:c.featuresTitle}),(0,S.jsx)(`div`,{className:`feature-grid`,children:c.features.map((e,t)=>(0,S.jsxs)(`article`,{className:`panel feature`,style:{"--group":U[t%U.length]},children:[(0,S.jsx)(`h3`,{children:e.title}),(0,S.jsx)(`ul`,{children:e.items.map(e=>(0,S.jsx)(`li`,{children:e},e))})]},e.title))}),(0,S.jsxs)(`p`,{className:`formats`,children:[c.formats,` `,(0,S.jsx)(`code`,{children:`mp3`}),` `,(0,S.jsx)(`code`,{children:`flac`}),` `,(0,S.jsx)(`code`,{children:`wav`}),` `,(0,S.jsx)(`code`,{children:`aiff`}),` `,(0,S.jsx)(`code`,{children:`m4a`}),` `,(0,S.jsx)(`code`,{children:`aac`}),` `,(0,S.jsx)(`code`,{children:`ogg`}),` `,(0,S.jsx)(`code`,{children:`opus`}),` `,(0,S.jsx)(`code`,{children:`wma`}),` `,(0,S.jsx)(`code`,{children:`wv`})]})]}),(0,S.jsxs)(`section`,{id:`releases`,className:`section`,children:[(0,S.jsx)(`h2`,{children:c.releasesTitle}),(0,S.jsx)(`ol`,{className:`release-list`,children:s.map((t,r)=>(0,S.jsxs)(`li`,{className:`panel release${r===0?` release-latest`:``}`,children:[(0,S.jsxs)(`div`,{className:`release-head`,children:[(0,S.jsxs)(`span`,{className:`release-version`,children:[`v`,t.version]}),r===0&&(0,S.jsx)(`span`,{className:`badge`,children:c.latest}),(0,S.jsx)(`span`,{className:`release-title`,children:t.title[n]}),(0,S.jsxs)(`span`,{className:`release-meta`,children:[g&&g[t.version]!==void 0&&(0,S.jsx)(`span`,{className:`download-count`,children:c.downloads(g[t.version])}),(0,S.jsx)(`time`,{dateTime:t.date,children:u(t.date,n)})]})]}),(0,S.jsx)(`ul`,{className:`release-notes`,children:t.highlights[n].map(e=>(0,S.jsx)(`li`,{children:e},e))}),(0,S.jsxs)(`div`,{className:`release-actions`,children:[l(t,n).map(e=>(0,S.jsx)(`a`,{className:`button${r===0?` button-primary`:``}`,href:e.url,children:e.label},e.url)),(0,S.jsx)(`a`,{className:`text-link`,href:e(t),target:`_blank`,rel:`noreferrer`,children:c.releasePage})]})]},t.version))})]}),(0,S.jsxs)(`section`,{id:`install`,className:`section install`,children:[(0,S.jsx)(`h2`,{children:c.install.title}),(0,S.jsxs)(`div`,{className:`install-grid`,children:[(0,S.jsxs)(`article`,{className:`panel`,children:[(0,S.jsx)(`h3`,{children:c.install.installerTitle}),(0,S.jsx)(`ol`,{className:`steps`,children:c.install.steps(i(m)).map(e=>(0,S.jsx)(`li`,{children:e},e))}),(0,S.jsx)(`p`,{className:`muted`,children:c.install.requirement}),(0,S.jsxs)(`aside`,{className:`callout`,children:[(0,S.jsx)(`strong`,{children:c.install.smartScreenTitle}),(0,S.jsx)(`p`,{children:c.install.smartScreenText})]})]}),(0,S.jsxs)(`article`,{className:`panel`,children:[(0,S.jsx)(`h3`,{children:c.install.needsTitle}),(0,S.jsx)(`ul`,{className:`needs`,children:c.install.needs.map(e=>(0,S.jsx)(`li`,{children:e},e))})]})]})]}),(0,S.jsxs)(`section`,{id:`license`,className:`section license`,children:[(0,S.jsx)(`h2`,{children:c.license.title}),(0,S.jsx)(`article`,{className:`panel eula`,lang:n,children:(0,S.jsx)(M,{source:z[n]})}),(0,S.jsxs)(`article`,{className:`panel third-party`,children:[(0,S.jsx)(`h3`,{children:c.license.thirdPartyTitle}),(0,S.jsx)(`p`,{children:c.license.thirdPartyText}),(0,S.jsxs)(`ul`,{className:`needs`,children:[(0,S.jsx)(`li`,{children:(0,S.jsx)(`a`,{className:`text-link`,href:B,target:`_blank`,rel:`noreferrer`,children:c.license.listLink})}),(0,S.jsx)(`li`,{children:(0,S.jsx)(`a`,{className:`text-link`,href:V,target:`_blank`,rel:`noreferrer`,children:c.license.textsLink})}),(0,S.jsxs)(`li`,{children:[c.license.onnxText,` `,(0,S.jsx)(`a`,{className:`text-link`,href:H,target:`_blank`,rel:`noreferrer`,children:c.license.onnxLink})]})]})]})]})]}),(0,S.jsxs)(`footer`,{className:`site-footer`,children:[(0,S.jsx)(`span`,{children:`Coda — Mix everything!`}),(0,S.jsx)(`a`,{className:`text-link`,href:o,target:`_blank`,rel:`noreferrer`,children:o.replace(`https://`,``)})]})]})}(0,m.createRoot)(document.getElementById(`root`)).render((0,S.jsx)(p.StrictMode,{children:(0,S.jsx)(W,{})}));