import{f as e,h as t,n,p as r,t as i}from"./styles-Cc7zbmwM.js";import{n as a}from"./usePage-1c6ljjgb.js";var o=r(),s=t(),c=e();function l({source:e}){let t=[],n=[],r=[],i=()=>{r.length&&(t.push((0,c.jsx)(`p`,{children:u(r.join(` `))},t.length)),r=[])},a=()=>{n.length&&(t.push((0,c.jsx)(`ul`,{children:n.map((e,t)=>(0,c.jsx)(`li`,{children:u(e)},t))},t.length)),n=[])};for(let o of e.replace(/\r\n/g,`
`).split(`
`)){let e=o.trim(),s=/^(#{1,4})\s+(.*)$/.exec(e);if(!e)i(),a();else if(s){i(),a();let e=`h${Math.min(s[1].length+2,6)}`;t.push((0,c.jsx)(e,{children:u(s[2])},t.length))}else e.startsWith(`- `)?(i(),n.push(e.slice(2))):(a(),r.push(e))}return i(),a(),(0,c.jsx)(c.Fragment,{children:t})}function u(e){return e.split(/(\*\*[^*]+\*\*)/).map((e,t)=>e.startsWith(`**`)&&e.endsWith(`**`)&&e.length>4?(0,c.jsx)(`strong`,{children:d(e.slice(2,-2))},t):(0,c.jsx)(s.Fragment,{children:d(e)},t))}function d(e){return e.split(/(https?:\/\/[^\s,;)]*[^\s,;).])/).map((e,t)=>/^https?:\/\//.test(e)?(0,c.jsx)(`a`,{className:`text-link`,href:e,target:`_blank`,rel:`noreferrer`,children:e},t):(0,c.jsx)(s.Fragment,{children:e},t))}var f=`# Coda — End User License Agreement

Version 1.3, effective 4 November 2026.

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

The GPU pack, which lets style analysis run on an NVIDIA graphics card, is not part of the Software either. It is downloaded only if you choose to, from where its authors publish it: the NVIDIA CUDA and cuDNN libraries from NVIDIA's packages on PyPI (https://pypi.org), and the CUDA provider of ONNX Runtime from Maven Central (https://central.sonatype.com). The NVIDIA libraries are licensed by NVIDIA under the NVIDIA CUDA Toolkit End User License Agreement (https://docs.nvidia.com/cuda/eula/) and the License Agreement for NVIDIA Software Development Kits (https://docs.nvidia.com/deeplearning/cudnn/latest/reference/eula.html); your use of them is governed by those agreements, not by this Agreement. The ONNX Runtime provider is under the MIT licence, like the rest of ONNX Runtime.

## 6. Your music

This Agreement gives you no rights to the music you play, analyse or record with the Software. You are responsible for holding the rights or licences needed to perform, record and publish it.

## 7. Your data

The Software works on your computer. It keeps its library database, settings, downloaded models and log files in your user folder (.coda) and does not send them anywhere. It connects to the internet only:

- to download the style-analysis models described in section 5;
- if you choose to, to download the GPU pack described in section 5; the requests name the Software and its version and nothing else;
- to check for new versions — at startup, unless you turn this off in Settings, and whenever you choose Help → Check for updates. The check asks GitHub (https://github.com), where the official releases are published, for the latest release, and reads its list of changes from the official releases site; the request names the Software and its version and nothing else. If you then choose to update, the Software downloads the installer from the same place and verifies its checksum before running it. Nothing is downloaded or installed unless you choose to;
- if you turn on the corresponding setting, to look up genres on MusicBrainz (https://musicbrainz.org);
- if you turn on the corresponding setting, to look up lyrics on LRCLIB (https://lrclib.net): for a track that starts playing, the request names its artist, title, album and duration, and the answer is kept so the same track is not asked about again.

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
`,p=`# Coda — Ліцензійна угода з кінцевим користувачем

Версія 1.3, чинна з 4 листопада 2026 року.

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

GPU-пакет, з яким аналіз стилю виконується на відеокарті NVIDIA, теж не є частиною Програми. Він завантажується лише за вашим вибором і звідти, де його публікують автори: бібліотеки NVIDIA CUDA і cuDNN — з пакетів NVIDIA на PyPI (https://pypi.org), CUDA-провайдер ONNX Runtime — з Maven Central (https://central.sonatype.com). NVIDIA ліцензує свої бібліотеки на умовах NVIDIA CUDA Toolkit End User License Agreement (https://docs.nvidia.com/cuda/eula/) і License Agreement for NVIDIA Software Development Kits (https://docs.nvidia.com/deeplearning/cudnn/latest/reference/eula.html); ваше користування ними регулюють ці угоди, а не ця угода. Провайдер ONNX Runtime поширюється, як і весь ONNX Runtime, за ліцензією MIT.

## 6. Ваша музика

Ця угода не надає вам жодних прав на музику, яку ви відтворюєте, аналізуєте чи записуєте за допомогою Програми. Ви відповідаєте за наявність прав або ліцензій, потрібних для її виконання, запису й публікації.

## 7. Ваші дані

Програма працює на вашому комп'ютері. Базу даних бібліотеки, налаштування, завантажені моделі й журнали вона зберігає у вашій теці користувача (.coda) і нікуди їх не надсилає. До інтернету вона звертається лише:

- щоб завантажити моделі аналізу стилю, описані в розділі 5;
- якщо ви цього захочете, — щоб завантажити GPU-пакет, описаний у розділі 5; запити називають Програму та її версію і більше нічого;
- щоб перевірити, чи вийшла нова версія, — під час запуску, якщо ви не вимкнете цього в налаштуваннях, і щоразу, коли ви обираєте «Довідка → Перевірити оновлення». Перевірка запитує в GitHub (https://github.com), де публікуються офіційні релізи, найновіший реліз і читає перелік його змін з офіційного сайту релізів; запит називає Програму та її версію і більше нічого. Якщо після цього ви оберете оновитися, Програма завантажує інсталятор звідти ж і перед запуском звіряє його контрольну суму. Без вашого вибору нічого не завантажується й не встановлюється;
- якщо ви ввімкнете відповідне налаштування, — щоб шукати жанри в MusicBrainz (https://musicbrainz.org);
- якщо ви ввімкнете відповідне налаштування, — щоб шукати лірику в LRCLIB (https://lrclib.net): для треку, що почав звучати, запит містить його виконавця, назву, альбом і тривалість, а відповідь зберігається, тож про той самий трек вдруге не питають.

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
`,m=new URL(`THIRD-PARTY-B23zslxQ.txt`,import.meta.url).href,h=new URL(`LICENSE-TEXTS-Cqx1STSn.txt`,import.meta.url).href,g={en:f,uk:p},_=m,v=h,y=`https://github.com/microsoft/onnxruntime/blob/v1.22.0/ThirdPartyNotices.txt`;function b(){let e=(0,s.useCallback)(e=>({title:e.licensePage.htmlTitle,description:e.licensePage.metaDescription}),[]),{lang:t,t:r,choose:o}=a(e);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{t:r,lang:t,onChoose:o,page:`license`}),(0,c.jsxs)(`main`,{id:`top`,children:[(0,c.jsx)(`div`,{className:`page-intro`,children:(0,c.jsx)(`h1`,{children:r.license.title})}),(0,c.jsxs)(`section`,{id:`license`,className:`section license`,children:[(0,c.jsx)(`article`,{className:`panel eula`,lang:t,children:(0,c.jsx)(l,{source:g[t]})}),(0,c.jsxs)(`article`,{className:`panel third-party`,children:[(0,c.jsx)(`h3`,{children:r.license.thirdPartyTitle}),(0,c.jsx)(`p`,{children:r.license.thirdPartyText}),(0,c.jsxs)(`ul`,{className:`needs`,children:[(0,c.jsx)(`li`,{children:(0,c.jsx)(`a`,{className:`text-link`,href:_,target:`_blank`,rel:`noreferrer`,children:r.license.listLink})}),(0,c.jsx)(`li`,{children:(0,c.jsx)(`a`,{className:`text-link`,href:v,target:`_blank`,rel:`noreferrer`,children:r.license.textsLink})}),(0,c.jsxs)(`li`,{children:[r.license.onnxText,` `,(0,c.jsx)(`a`,{className:`text-link`,href:y,target:`_blank`,rel:`noreferrer`,children:r.license.onnxLink})]})]})]})]})]}),(0,c.jsx)(n,{})]})}(0,o.createRoot)(document.getElementById(`root`)).render((0,c.jsx)(s.StrictMode,{children:(0,c.jsx)(b,{})}));