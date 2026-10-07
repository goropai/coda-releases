import{r as f,j as e,i as P,v as N,d as b,R as v,s as _,S as M,f as k,b as $,e as F,a as U,c as H}from"./styles-UmLZDQhg.js";const C="coda-site-downloads",D=600*1e3;function Y(s){return Object.values(s).reduce((t,n)=>t+n,0)}function O(s){const t={};for(const n of s){const i=n.tag_name.replace(/^v/,"");t[i]=n.assets.reduce((o,r)=>o+r.download_count,0)}return t}function B(){try{const s=window.sessionStorage.getItem(C);if(!s)return null;const t=JSON.parse(s);return Date.now()-t.at<D?t.counts:null}catch{return null}}function z(s){try{window.sessionStorage.setItem(C,JSON.stringify({at:Date.now(),counts:s}))}catch{}}async function G(s,t){const n=B();if(n)return n;const i=s.replace("https://github.com/","https://api.github.com/repos/");try{const o=await fetch(`${i}/releases?per_page=100`,{headers:{Accept:"application/vnd.github+json"},signal:t});if(!o.ok)return null;const r=O(await o.json());return z(r),r}catch{return null}}function W(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function X(s,t){const n=W(s),i=[{until:.12,level:.32},{until:.42,level:.86},{until:.52,level:.45},{until:.86,level:.92},{until:1,level:.38}],o=[];for(let r=0;r<t;r++){const m=r/t,d=i.find(l=>m<=l.until)??i[i.length-1],a=r%4===0?.12:0,h=d.level*(.72+.28*n())+a;o.push(Math.min(1,h))}return o}const w=220,u=1e3,p=120;function q({seed:s,played:t,zone:n,bpm:i,label:o}){const r=f.useMemo(()=>X(s,w),[s]),m=u/w,d=p/2+6,a=n.from*u,h=(n.to-n.from)*u,l=n.kind==="out"?"var(--zone-out)":"var(--zone-in)",L=Array.from({length:24},(j,c)=>{const x=c/23,g=n.kind==="out"?Math.cos(x*Math.PI/2):Math.sin(x*Math.PI/2),I=a+x*h,R=16+(1-g)*(p-26);return`${c===0?"M":"L"}${I.toFixed(1)},${R.toFixed(1)}`}).join(" ");return e.jsxs("svg",{className:"waveform",viewBox:`0 0 ${u} ${p}`,preserveAspectRatio:"none",role:"img","aria-label":o,children:[e.jsx("rect",{width:u,height:p,className:"waveform-bg"}),Array.from({length:33},(j,c)=>e.jsx("line",{x1:c*31.25,x2:c*31.25,y1:12,y2:p,className:"waveform-grid"},`g${c}`)),Array.from({length:17},(j,c)=>e.jsx("polygon",{points:`${c*62.5-5},2 ${c*62.5+5},2 ${c*62.5},10`,className:"bar-handle"},`h${c}`)),e.jsx("rect",{x:a,y:12,width:h,height:p-12,fill:l,className:"zone"}),r.map((j,c)=>{const x=j*(p/2-10),g=c*m;return e.jsx("rect",{x:g+.6,y:d-x,width:m-1.2,height:x*2,className:c/w<t?"wave-played":"wave-rest"},c)}),e.jsx("path",{d:L,className:"zone-curve"}),e.jsx("line",{x1:(n.kind==="out",a),x2:a,y1:12,y2:p,className:n.kind==="out"?"cue cue-out":"cue cue-in"}),e.jsx("line",{x1:t*u,x2:t*u,y1:12,y2:p,className:"playhead"}),e.jsxs("g",{className:"bpm-badge",children:[e.jsx("rect",{x:u-118,y:16,width:108,height:22,rx:3}),e.jsx("text",{x:u-64,y:32,textAnchor:"middle",children:i})]})]})}function J({t:s}){return e.jsxs("div",{className:"app-window","aria-hidden":"true",children:[e.jsxs("div",{className:"app-titlebar",children:[e.jsx("img",{src:"./icon.png",alt:""}),e.jsx("span",{children:"Coda"}),e.jsxs("span",{className:"app-titlebar-controls",children:[e.jsx("i",{children:"–"}),e.jsx("i",{children:"□"}),e.jsx("i",{children:"✕"})]})]}),e.jsx("div",{className:"app-menu",children:s.menu.map(t=>e.jsx("span",{children:t},t))}),e.jsxs("div",{className:"app-body",children:[e.jsxs("div",{className:"app-decks",children:[e.jsx(S,{t:s,active:!0,title:"Beels & T:Base — Other Side of Town",cover:"cover-a",seed:7,played:.83,zone:{from:.86,to:.97,kind:"out"}}),e.jsxs("div",{className:"transition-row",children:[e.jsx("span",{className:"arrows",children:"▲▼"}),e.jsx("span",{children:s.playedPercent}),e.jsx("span",{className:"fake-combo",children:"70%"}),e.jsx("span",{children:s.type}),e.jsx("span",{className:"fake-combo",children:"Jungle"}),e.jsx("span",{children:s.transition}),e.jsx("span",{className:"fake-combo wide",children:s.pattern}),e.jsx("span",{className:"fake-combo",children:s.bassSwap}),e.jsx("span",{className:"fake-check checked",children:s.syncTempo}),e.jsx("span",{className:"duration",children:s.duration})]}),e.jsx(S,{t:s,title:"Wright & Bastard — Fertile",cover:"cover-b",seed:23,played:0,zone:{from:.13,to:.24,kind:"in"}})]}),e.jsxs("div",{className:"app-meters",children:[e.jsx(T,{label:"1",level:"meter-a"}),e.jsx("div",{className:"meter-scale",children:["+3","0","−6","−12","−24","−36","−48"].map(t=>e.jsx("span",{children:t},t))}),e.jsx(T,{label:"2",level:"meter-b"})]})]})]})}function S({t:s,title:t,cover:n,seed:i,played:o,zone:r,active:m}){return e.jsxs("div",{className:`deck${m?" deck-active":""}`,children:[e.jsx("div",{className:`deck-cover ${n}`}),e.jsxs("div",{className:"deck-zoom",children:[e.jsx("span",{children:"+"}),e.jsx("small",{children:"1.0x"}),e.jsx("span",{children:"−"})]}),e.jsxs("div",{className:"deck-main",children:[e.jsxs("div",{className:"deck-top",children:[e.jsx("span",{className:"fake-check",children:s.metronome}),e.jsx("span",{className:"fake-check",children:s.kicks}),e.jsx("span",{className:"fake-check checked",children:s.bars}),e.jsxs("span",{className:"deck-title",children:[t," (5:18 | 44 kHz, 320 kbps | MP3)"]})]}),e.jsx(q,{seed:i,played:o,zone:r,bpm:"174.0 BPM",label:s.waveformLabel})]})]})}function T({label:s,level:t}){return e.jsxs("div",{className:"meter",children:[e.jsx("span",{className:"meter-label",children:s}),e.jsxs("div",{className:"meter-trough",children:[e.jsx("div",{className:`meter-level ${t}`}),e.jsx("div",{className:"meter-fader"})]})]})}function K({source:s}){const t=[];let n=[],i=[];const o=()=>{i.length&&(t.push(e.jsx("p",{children:y(i.join(" "))},t.length)),i=[])},r=()=>{n.length&&(t.push(e.jsx("ul",{children:n.map((m,d)=>e.jsx("li",{children:y(m)},d))},t.length)),n=[])};for(const m of s.replace(/\r\n/g,`
`).split(`
`)){const d=m.trim(),a=/^(#{1,4})\s+(.*)$/.exec(d);if(!d)o(),r();else if(a){o(),r();const l=`h${Math.min(a[1].length+2,6)}`;t.push(e.jsx(l,{children:y(a[2])},t.length))}else d.startsWith("- ")?(o(),n.push(d.slice(2))):(r(),i.push(d))}return o(),r(),e.jsx(e.Fragment,{children:t})}function y(s){return s.split(/(\*\*[^*]+\*\*)/).map((t,n)=>t.startsWith("**")&&t.endsWith("**")&&t.length>4?e.jsx("strong",{children:E(t.slice(2,-2))},n):e.jsx(f.Fragment,{children:E(t)},n))}function E(s){return s.split(/(https?:\/\/[^\s,;)]*[^\s,;).])/).map((t,n)=>/^https?:\/\//.test(t)?e.jsx("a",{className:"text-link",href:t,target:"_blank",rel:"noreferrer",children:t},n):e.jsx(f.Fragment,{children:t},n))}const Q=`# Coda — End User License Agreement

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
`,V=`# Coda — Ліцензійна угода з кінцевим користувачем

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
`,Z=""+new URL("THIRD-PARTY-heY9Fhzo.txt",import.meta.url).href,ee=""+new URL("LICENSE-TEXTS-C7gNXQ9H.txt",import.meta.url).href,ne={en:Q,uk:V},se=Z,te=ee,ae="https://github.com/microsoft/onnxruntime/blob/v1.19.2/ThirdPartyNotices.txt",A=["var(--accent)","var(--cyan)","var(--amber)","var(--live)"];function re(){const[s,t]=f.useState(P),n=_[s],i=N[0],[o]=b(i,s),[r,m]=f.useState(null);f.useEffect(()=>{const a=new AbortController;return G(v,a.signal).then(h=>{a.signal.aborted||m(h)}),()=>a.abort()},[]),f.useEffect(()=>{document.documentElement.lang=s,document.title=n.htmlTitle,document.querySelector('meta[name="description"]')?.setAttribute("content",n.metaDescription)},[s,n]);const d=a=>{t(a),U(a)};return e.jsxs(e.Fragment,{children:[e.jsx(M,{t:n,lang:s,onChoose:d,page:"home"}),e.jsxs("main",{id:"top",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-text",children:[e.jsx("p",{className:"eyebrow",children:n.hero.eyebrow}),e.jsxs("h1",{children:["Coda ",e.jsx("span",{className:"hero-tagline",children:"— Mix everything!"})]}),e.jsx("p",{className:"lead",children:n.hero.lead}),e.jsxs("div",{className:"hero-actions",children:[e.jsx("a",{className:"button button-primary",href:o.url,children:n.hero.download(i.version)}),e.jsx("a",{className:"button",href:"#releases",children:n.hero.allReleases})]}),e.jsxs("p",{className:"hero-meta",children:[n.hero.platform," · ",o.note," · ",k(i.date,s),r&&e.jsxs(e.Fragment,{children:[" · ",e.jsx("span",{className:"download-count",children:n.downloads(Y(r))})]})]})]}),e.jsx(J,{t:n.app})]}),e.jsxs("section",{id:"features",className:"section",children:[e.jsx("h2",{children:n.featuresTitle}),e.jsx("div",{className:"feature-grid",children:n.features.map((a,h)=>e.jsxs("article",{className:"panel feature",style:{"--group":A[h%A.length]},children:[e.jsx("h3",{children:a.title}),e.jsx("ul",{children:a.items.map(l=>e.jsx("li",{children:l},l))})]},a.title))}),e.jsxs("p",{className:"formats",children:[n.formats," ",e.jsx("code",{children:"mp3"})," ",e.jsx("code",{children:"flac"})," ",e.jsx("code",{children:"wav"})," ",e.jsx("code",{children:"aiff"})," ",e.jsx("code",{children:"m4a"})," ",e.jsx("code",{children:"aac"})," ",e.jsx("code",{children:"ogg"})," ",e.jsx("code",{children:"opus"})," ",e.jsx("code",{children:"wma"})," ",e.jsx("code",{children:"wv"})]})]}),e.jsxs("section",{id:"releases",className:"section",children:[e.jsx("h2",{children:n.releasesTitle}),e.jsx("ol",{className:"release-list",children:N.map((a,h)=>e.jsxs("li",{className:`panel release${h===0?" release-latest":""}`,children:[e.jsxs("div",{className:"release-head",children:[e.jsxs("span",{className:"release-version",children:["v",a.version]}),h===0&&e.jsx("span",{className:"badge",children:n.latest}),e.jsx("span",{className:"release-title",children:a.title[s]}),e.jsxs("span",{className:"release-meta",children:[r&&r[a.version]!==void 0&&e.jsx("span",{className:"download-count",children:n.downloads(r[a.version])}),e.jsx("time",{dateTime:a.date,children:k(a.date,s)})]})]}),e.jsx("ul",{className:"release-notes",children:a.highlights[s].map(l=>e.jsx("li",{children:l},l))}),e.jsxs("div",{className:"release-actions",children:[b(a,s).map(l=>e.jsx("a",{className:`button${h===0?" button-primary":""}`,href:l.url,children:l.label},l.url)),e.jsx("a",{className:"text-link",href:$(a),target:"_blank",rel:"noreferrer",children:n.releasePage})]})]},a.version))})]}),e.jsxs("section",{id:"install",className:"section install",children:[e.jsx("h2",{children:n.install.title}),e.jsxs("div",{className:"install-grid",children:[e.jsxs("article",{className:"panel",children:[e.jsx("h3",{children:n.install.installerTitle}),e.jsx("ol",{className:"steps",children:n.install.steps(F(i)).map(a=>e.jsx("li",{children:a},a))}),e.jsx("p",{className:"muted",children:n.install.requirement}),e.jsxs("aside",{className:"callout",children:[e.jsx("strong",{children:n.install.smartScreenTitle}),e.jsx("p",{children:n.install.smartScreenText})]})]}),e.jsxs("article",{className:"panel",children:[e.jsx("h3",{children:n.install.needsTitle}),e.jsx("ul",{className:"needs",children:n.install.needs.map(a=>e.jsx("li",{children:a},a))})]})]})]}),e.jsxs("section",{id:"license",className:"section license",children:[e.jsx("h2",{children:n.license.title}),e.jsx("article",{className:"panel eula",lang:s,children:e.jsx(K,{source:ne[s]})}),e.jsxs("article",{className:"panel third-party",children:[e.jsx("h3",{children:n.license.thirdPartyTitle}),e.jsx("p",{children:n.license.thirdPartyText}),e.jsxs("ul",{className:"needs",children:[e.jsx("li",{children:e.jsx("a",{className:"text-link",href:se,target:"_blank",rel:"noreferrer",children:n.license.listLink})}),e.jsx("li",{children:e.jsx("a",{className:"text-link",href:te,target:"_blank",rel:"noreferrer",children:n.license.textsLink})}),e.jsxs("li",{children:[n.license.onnxText," ",e.jsx("a",{className:"text-link",href:ae,target:"_blank",rel:"noreferrer",children:n.license.onnxLink})]})]})]})]})]}),e.jsxs("footer",{className:"site-footer",children:[e.jsx("span",{children:"Coda — Mix everything!"}),e.jsx("a",{className:"text-link",href:v,target:"_blank",rel:"noreferrer",children:v.replace("https://","")})]})]})}H.createRoot(document.getElementById("root")).render(e.jsx(f.StrictMode,{children:e.jsx(re,{})}));
