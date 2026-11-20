(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Sweet`,`Savory`],t=[{slug:`og-brownie`,title:`OG Brownie`,category:`Sweet`,art:`chocolate`,featured:!0,ingredients:[{amount:`150gr`,item:`chocolate, melted`},{amount:`100gr`,item:`butter, melted`},{amount:`2`,item:`eggs`},{amount:`100gr`,item:`sugar`},{amount:`60gr`,item:`flour`},{amount:`20gr`,item:`cocoa powder`}],steps:[`mix the melted chocolate and melted butter together`,`mix the eggs and sugar together and combine with the melted chocolate and butter`,`add the flour and cocoa powder`,`bake / airfry for about 30 mins until it's done!`]}],n=e=>`<svg class="choc" viewBox="0 0 260 170" role="img" aria-label="${e}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">`,r=`${n(`line drawing of a chocolate bar with a square broken off`)}
  <g transform="rotate(-9 120 90)">
    <path d="M28 40 h88 l6 -5 l-6 9 l7 4 l-7 5 v77 h-88 z" />
    <path d="M24 34 h96 M24 34 v104 h4" opacity=".55" />
    <path d="M24 34 l-6 -10 l14 4 l10 -8 l8 9 l12 -6 l6 9 l14 -7 l9 8 l12 -5 l11 6" opacity=".55" />
    ${[0,1,2].map(e=>[0,1].map(t=>{let n=34+t*40,r=50+e*27;return`<rect x="${n}" y="${r}" width="34" height="21" rx="2" /><rect x="${n+5}" y="${r+4}" width="24" height="13" rx="1.5" opacity=".5" />`}).join(``)).join(``)}
  </g>
  <g transform="rotate(14 190 110)">
    <rect x="166" y="96" width="38" height="24" rx="2" />
    <rect x="172" y="101" width="26" height="14" rx="1.5" opacity=".5" />
    <path d="M204 99 l4 3 l-3 4 l4 4 l-4 5" />
  </g>
  <path d="M214 62 l3 -6 M222 70 l6 -3 M211 74 l2 2" opacity=".6" />
  <path d="M150 150 c8 3 18 3 26 0" opacity=".4" />
</svg>`,i=`${n(`line drawing of a mixing bowl with a whisk`)}
  <ellipse cx="120" cy="88" rx="78" ry="13" />
  <path d="M42 88 C 46 132, 82 150, 120 150 C 158 150, 194 132, 198 88" />
  <path d="M96 150 l-4 8 h56 l-4 -8" />
  <path d="M62 96 c 20 7 96 7 116 0" opacity=".45" />
  <g transform="rotate(28 170 60)">
    <rect x="164" y="6" width="12" height="44" rx="6" />
    <path d="M170 50 v8" />
    <path d="M170 58 C 150 80, 152 118, 170 122 C 188 118, 190 80, 170 58 Z" />
    <path d="M170 58 C 160 82, 161 114, 170 122 C 179 114, 180 82, 170 58" opacity=".7" />
    <path d="M170 58 V 122" opacity=".5" />
  </g>
  <path d="M214 52 l6 -4 M218 64 l7 0" opacity=".6" />
</svg>`,a=`${n(`line drawing of a cooking pot with steam`)}
  <path d="M62 78 h136 v52 c0 12 -8 20 -20 20 h-96 c-12 0 -20 -8 -20 -20 z" />
  <path d="M62 92 h-14 c-6 0 -6 12 0 12 h14 M198 92 h14 c6 0 6 12 0 12 h-14" />
  <path d="M54 78 c 10 -16 142 -16 152 0 z" />
  <path d="M120 62 v-6 M112 56 h16" />
  <path d="M74 120 h112" opacity=".4" />
  <path d="M96 40 c -8 -8 8 -14 0 -24 M122 36 c -8 -8 8 -14 0 -24 M148 40 c -8 -8 8 -14 0 -24" opacity=".6" />
  <path d="M60 158 h140" opacity=".4" />
</svg>`,o=`${n(`line drawing of a bowl of rice with chopsticks`)}
  <path d="M52 96 c 4 -14 16 -20 26 -18 c 6 -12 22 -16 32 -8 c 8 -10 26 -10 34 0 c 10 -8 26 -4 32 8 c 10 -2 22 4 26 18" />
  <path d="M86 86 l3 2 M112 80 l2 3 M138 82 l3 1 M160 88 l2 2 M100 92 l3 1 M128 90 l2 2" opacity=".55" />
  <path d="M44 96 h172 c -4 34 -40 52 -86 52 c -46 0 -82 -18 -86 -52 z" />
  <path d="M106 148 l-2 10 h52 l-2 -10" />
  <path d="M74 118 c 16 10 96 10 112 0" opacity=".4" />
  <path d="M168 20 L 226 74 M178 16 L 232 70" />
</svg>`,s=`${n(`line drawing of a loaf of bread`)}
  <path d="M40 122 C 34 76, 76 50, 130 50 C 184 50, 226 76, 220 122 C 218 136, 206 142, 190 142 H 70 C 54 142, 42 136, 40 122 Z" />
  <path d="M84 70 l 14 22 M118 62 l 14 24 M152 64 l 14 22 M184 76 l 10 16" />
  <path d="M60 116 c 40 8 100 8 140 0" opacity=".4" />
  <path d="M30 152 h200" opacity=".4" />
  <path d="M206 40 l4 -6 M216 50 l7 -2" opacity=".6" />
</svg>`,c=`${n(`line drawing of a plate with a fork and knife`)}
  <ellipse cx="130" cy="98" rx="70" ry="44" />
  <ellipse cx="130" cy="98" rx="48" ry="29" opacity=".55" />
  <path d="M38 52 v34 M30 52 v18 c0 8 16 8 16 0 v-18 M38 86 v56" />
  <path d="M222 52 c 10 6 10 36 0 44 v46" />
  <path d="M112 90 c 6 -4 14 -4 20 0" opacity=".45" />
</svg>`,l={chocolate:{label:`chocolate`,svg:r},whisk:{label:`bowl and whisk`,svg:i},pot:{label:`pot`,svg:a},ricebowl:{label:`rice bowl`,svg:o},bread:{label:`bread`,svg:s},plate:{label:`plate`,svg:c}},u={sweet:`whisk`,savory:`pot`};function d(e){return e?.art&&l[e.art]?e.art:u[String(e?.category??``).toLowerCase()]??`plate`}function f(e){return l[d(e)].svg}var p=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),m=e=>`mochi-recipe-book:cook:${e}`;function h(e,t){try{let n=JSON.parse(e?.getItem(m(t.slug))??`null`);if(!n||typeof n!=`object`)throw Error();return{stage:Number.isInteger(n.stage)?Math.min(Math.max(n.stage,0),t.steps.length+1):0,checked:Array.isArray(n.checked)?n.checked.filter(e=>Number.isInteger(e)&&e<t.ingredients.length):[]}}catch{return{stage:0,checked:[]}}}function g(e,t,n){try{e?.setItem(m(t.slug),JSON.stringify(n))}catch{}}function _(e,t,n){let r=t.steps.length,i=h(n,t),a=null;document.body.classList.add(`cooking`);let o=async()=>{try{document.visibilityState===`visible`&&`wakeLock`in navigator&&(a=await navigator.wakeLock.request(`screen`))}catch{a=null}},s=()=>{document.visibilityState===`visible`&&o()},c=()=>g(n,t,i),l=t=>{i.stage=Math.min(Math.max(t,0),r+1),c(),f(),e.querySelector(`[data-focus]`)?.focus({preventScroll:!0}),window.scrollTo(0,0)},u=()=>`
    <div class="cook-top">
      <a class="back" href="#/recipe/${p(t.slug)}">× leave cook mode</a>
      <p class="cook-title">${p(t.title)}</p>
    </div>`,d=()=>`<div class="cook-progress" aria-hidden="true">${Array.from({length:r+1},(e,t)=>`<span class="${t===i.stage?`on`:t<i.stage?`past`:``}"></span>`).join(``)}</div>`;function f(){let{stage:n,checked:a}=i,o;o=n===0?`
        <h1 class="cook-h" tabindex="-1" data-focus>Get everything out</h1>
        <p class="cook-hint">tap each one as you put it on the counter</p>
        ${t.ingredients.length?`<ul class="cook-ings">${t.ingredients.map((e,t)=>`
              <li><button type="button" class="cook-ing" aria-pressed="${a.includes(t)}" data-ing="${t}">
                <span class="box" aria-hidden="true">${a.includes(t)?`✓`:``}</span>
                <span class="cook-amt">${e.amount?p(e.amount):``}</span>
                <span>${p(e.item)}</span>
              </button></li>`).join(``)}</ul>`:`<p class="cook-hint">no ingredients written down for this one</p>`}
        <div class="cook-nav">
          ${r?`<button type="button" class="btn primary big" data-next>Start the steps →</button>`:`<a class="btn big" href="#/recipe/${p(t.slug)}">back to the recipe</a>`}
        </div>`:n<=r?`
        <p class="cook-count">step ${n} of ${r}</p>
        <h1 class="cook-step" tabindex="-1" data-focus>${p(t.steps[n-1])}</h1>
        <div class="cook-nav">
          <button type="button" class="btn big" data-prev>← back</button>
          <button type="button" class="btn primary big" data-next>${n===r?`Finish`:`Next step →`}</button>
        </div>
        <details class="cook-peek">
          <summary>see the ingredients</summary>
          <ul>${t.ingredients.map(e=>`<li><b>${p(e.amount)}</b> ${p(e.item)}</li>`).join(``)}</ul>
        </details>`:`
        <h1 class="cook-h" tabindex="-1" data-focus>All done. enjoy it</h1>
        <p class="cook-hint">if something turned out different, write it down in the studio while you remember</p>
        <div class="cook-nav">
          <button type="button" class="btn big" data-prev>← last step</button>
          <a class="btn primary big" href="#/recipe/${p(t.slug)}" data-reset>back to the recipe</a>
        </div>`,e.innerHTML=`
      <div class="cook">
        ${u()}
        ${d()}
        ${o}
        ${n>0&&n<=r+1?`<button type="button" class="link-btn" data-restart>start over</button>`:``}
      </div>`,e.querySelectorAll(`[data-ing]`).forEach(e=>e.addEventListener(`click`,()=>{let t=Number(e.dataset.ing);i.checked=i.checked.includes(t)?i.checked.filter(e=>e!==t):[...i.checked,t],c();let n=i.checked.includes(t);e.setAttribute(`aria-pressed`,String(n)),e.querySelector(`.box`).textContent=n?`✓`:``})),e.querySelector(`[data-next]`)?.addEventListener(`click`,()=>l(i.stage+1)),e.querySelector(`[data-prev]`)?.addEventListener(`click`,()=>l(i.stage-1)),e.querySelector(`[data-restart]`)?.addEventListener(`click`,()=>{i={stage:0,checked:[]},l(0)}),e.querySelector(`[data-reset]`)?.addEventListener(`click`,()=>{i={stage:0,checked:[]},c()})}let m=e=>{e.target.closest?.(`input, textarea`)||(e.key===`ArrowRight`&&i.stage<=r&&r&&l(i.stage+1),e.key===`ArrowLeft`&&i.stage>0&&l(i.stage-1))};return f(),o(),document.addEventListener(`visibilitychange`,s),document.addEventListener(`keydown`,m),{title:`Cooking ${t.title}`,leave(){document.removeEventListener(`visibilitychange`,s),document.removeEventListener(`keydown`,m),a?.release?.().catch(()=>{}),document.body.classList.remove(`cooking`)}}}var v=`mochi-recipe-book:favorites`;function y(e){return String(e??``).normalize(`NFC`).toLowerCase().trim()}function b(e,t){let n=y(t);if(!n)return!0;let r=[e.title,e.subtitle,e.category,...e.collections??[],...(e.ingredients??[]).map(e=>e.item)];return n.split(/\s+/).every(e=>r.some(t=>y(t).includes(e)))}function ee(e,t){return e.filter(e=>b(e,t))}function x(e,t=[]){let n=[...t];for(let t of e)t.category&&!n.includes(t.category)&&n.push(t.category);let r=n.slice(t.length).sort((e,t)=>e.localeCompare(t));return[...t,...r].map(t=>({name:t,recipes:e.filter(e=>e.category===t).sort((e,t)=>e.title.localeCompare(t.title))}))}function te(e,t=8){return{shown:e.slice(0,t),hasMore:e.length>t}}function S(e,t){return e.find(e=>e.slug===t)??null}function ne(e){return e.find(e=>e.featured)??e[0]??null}function C(e){let t=new Set;for(let n of e){for(let e of[`slug`,`title`,`category`])if(!n[e])throw Error(`recipe is missing ${e}: ${JSON.stringify(n.title??n.slug)}`);if(!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(n.slug))throw Error(`bad slug ${n.slug}`);if(t.has(n.slug))throw Error(`duplicate slug ${n.slug}`);if(t.add(n.slug),!Array.isArray(n.ingredients)||!Array.isArray(n.steps))throw Error(`${n.slug} needs ingredients and steps lists`);if(n.collections!==void 0&&!Array.isArray(n.collections))throw Error(`${n.slug} collections should be a list`);if(n.basedOn&&n.basedOn===n.slug)throw Error(`${n.slug} can't be a version of itself`)}return!0}function w(e){try{let t=JSON.parse(e?.getItem(`mochi-recipe-book:favorites`)??`[]`);return Array.isArray(t)?t.filter(e=>typeof e==`string`):[]}catch{return[]}}function T(e,t){let n=w(e),r=n.includes(t)?n.filter(e=>e!==t):[...n,t];try{e?.setItem(v,JSON.stringify(r))}catch{}return r}function re(e){return[...new Set(e.flatMap(e=>e.collections??[]))].sort((e,t)=>e.localeCompare(t))}function E(e,t){return t?e.filter(e=>(e.collections??[]).includes(t)):e}function D(e,t){return e.filter(e=>e.basedOn===t)}function O(e,t){return t?.basedOn?S(e,t.basedOn):null}function k(e){let t=new Set(e.map(e=>e.slug));return e.filter(e=>!(e.basedOn&&t.has(e.basedOn))).map(t=>({recipe:t,versions:e.filter(e=>e.basedOn===t.slug)}))}function A(e){let t=String(e??``).trim();return/^https?:\/\/[^\s]+$/i.test(t)?t:null}function j(e){try{return new URL(e).hostname.replace(/^www\./,``)}catch{return``}}C(t);var M=document.getElementById(`main`),N=`mochi’s recipe book`,P=null;try{P=window.localStorage}catch{P=null}var F=w(P),I=``,L=``,R=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),z=e=>`#/recipe/${e.slug}`,B=e=>`#/recipes?c=${encodeURIComponent(e)}`;function V(e){return e.photo?`./${e.photo.replace(/^\.?\//,``)}`:null}function H(e=`search recipes`){return`
    <div class="search">
      <label class="sr-only" for="q">${e}</label>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>
      <input id="q" type="search" autocomplete="off" placeholder="search titles, collections, ingredients" value="${R(I)}" />
    </div>`}function U(){let e=re(t);if(!e.length)return``;let n=(e,t)=>`<button type="button" class="chip" data-collection="${R(e)}" aria-pressed="${L===e}">${R(t)}</button>`;return`<div class="chips" role="group" aria-label="collections">${n(``,`All`)}${e.map(e=>n(e,e)).join(``)}</div>`}function W(e,{version:t=!1}={}){return`
    <a class="row${t?` row-version`:``}" href="${z(e)}">
      ${t?`<span class="row-arrow" aria-hidden="true">↳</span>`:``}
      <span class="row-title">${R(e.title)}</span>
      ${e.subtitle?`<span class="row-sub">${R(e.subtitle)}</span>`:``}
      ${t?`<span class="sr-only">, a version</span>`:``}
      ${e.draft?`<span class="tag">draft</span>`:``}
      ${F.includes(e.slug)?`<span class="heart" aria-label="saved">♥</span>`:``}
    </a>`}function G(t,{showEmptySections:n=!0}={}){return x(t,e).filter(e=>n||e.recipes.length).map(e=>`
      <section class="cat" aria-labelledby="cat-${R(e.name)}">
        <h2 class="cat-name" id="cat-${R(e.name)}">${R(e.name)}</h2>
        ${e.recipes.length?`<ul class="rows">${k(e.recipes).map(({recipe:e,versions:t})=>`
              <li>
                ${W(e)}
                ${t.length?`<ul class="rows versions">${t.map(e=>`<li>${W(e,{version:!0})}</li>`).join(``)}</ul>`:``}
              </li>`).join(``)}</ul>`:`<p class="quiet">nothing here yet</p>`}
      </section>`).join(``)}function K(){let e=[I.trim()&&`“${R(I)}”`,L&&`in ${R(L)}`].filter(Boolean).join(` `);return`
    <div class="empty" role="status">
      <p class="empty-title">no recipes ${e?`match ${e}`:`here yet`}</p>
      <p>try a title, a collection or an ingredient like 찹쌀가루</p>
      <button type="button" class="btn" data-clear>show everything</button>
    </div>`}function q(e){let t=V(e);return`
    <a class="feature" href="${z(e)}">
      <span class="ribbon ribbon-butter" aria-hidden="true"></span>
      <span class="feature-art">${t?`<img src="${R(t)}" alt="" />`:f(e)}</span>
      <span class="feature-text">
        <span class="feature-kicker">${R(e.category)}</span>
        <span class="feature-title">${R(e.title)}</span>
        ${e.subtitle?`<span class="feature-sub">${R(e.subtitle)}</span>`:``}
      </span>
    </a>`}function J(e){let t=M.querySelector(`#q`),n=M.querySelector(`[data-results]`),r=()=>{n.innerHTML=e(),n.querySelector(`[data-clear]`)?.addEventListener(`click`,()=>{I=``,L=``,t.value=``,i(),r(),t.focus()})},i=()=>{M.querySelectorAll(`[data-collection]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.collection===L))),location.hash.startsWith(`#/recipes`)&&history.replaceState(null,``,L?B(L):`#/recipes`)};t.addEventListener(`input`,()=>{I=t.value,r()}),M.querySelectorAll(`[data-collection]`).forEach(e=>e.addEventListener(`click`,()=>{L=e.dataset.collection,i(),r()})),r()}var Y=()=>ee(E(t,L),I);function ie(){let e=ne(t);return M.innerHTML=`
    <div class="page-head">
      <h1 tabindex="-1">Recipe book</h1>
      ${H()}
    </div>
    
    ${U()}
    <div class="home-grid">
      ${e?q(e):``}
      <div class="index" data-results aria-live="polite"></div>
    </div>`,J(()=>{if(I.trim()||L){let e=Y();return e.length?G(e,{showEmptySections:!1}):K()}let{shown:e,hasMore:n}=te(t);return`${G(e)}${n?`<a class="browse" href="#/recipes">Browse all recipes →</a>`:``}`}),`Recipe book`}function ae(){return M.innerHTML=`
    <div class="page-head">
      <h1 tabindex="-1">All recipes</h1>
      ${H()}
    </div>
    ${U()}
    <div class="index index-wide" data-results aria-live="polite"></div>`,J(()=>{let e=Y();return e.length?G(e,{showEmptySections:!I.trim()&&!L}):K()}),L?`${L} · All recipes`:`All recipes`}function oe(){let e=t.filter(e=>F.includes(e.slug));return M.innerHTML=`
    <div class="page-head">
      <h1 tabindex="-1">Favorites</h1>
    </div>
    <div class="index index-wide">
      ${e.length?G(e,{showEmptySections:!1}):`<div class="empty"><p class="empty-title">no favorites yet</p><p>open a recipe and tap save recipe to keep it here</p><a class="btn" href="#/recipes">see all recipes</a></div>`}
    </div>`,`Favorites`}function X(){return M.innerHTML=`
    <a class="back" href="#/">← back to recipes</a>
    <div class="empty"><h1 tabindex="-1" class="empty-title">this recipe isn’t in the book</h1><p>the link might be old. try the full list instead</p><a class="btn" href="#/recipes">see all recipes</a></div>`,`not found`}function se(e){let n=S(t,e);if(!n)return X();let r=F.includes(n.slug),i=V(n),a=O(t,n),o=D(t,n.slug),s=A(n.source),c=n.ingredients.length||n.steps.length;return M.innerHTML=`
    <a class="back" href="${a?z(a):`#/`}">← ${a?`back to ${R(a.title)}`:`back to recipes`}</a>
    <article class="card">
      <span class="ribbon ribbon-pink" aria-hidden="true"></span>
      <header class="card-head">
        <p class="kicker">${R(n.category)}${n.draft?` <span class="tag">draft</span>`:``}</p>
        <h1 tabindex="-1">${R(n.title)}</h1>
        ${n.subtitle?`<p class="subtitle">${R(n.subtitle)}</p>`:``}
        ${a?`<p class="version-of">my version of <a href="${z(a)}">${R(a.title)}</a></p>`:``}
        <div class="meta">
          ${n.servings?`<span>${R(n.servings)}</span>`:``}
          ${s?`<a href="${R(s)}" target="_blank" rel="noopener noreferrer">original recipe at ${R(j(s))} ↗</a>`:``}
        </div>
        ${n.collections?.length?`<p class="chips small">${n.collections.map(e=>`<a class="chip" href="${B(e)}">${R(e)}</a>`).join(``)}</p>`:``}
        <div class="actions">
          ${c?`<a class="btn primary" href="#/cook/${R(n.slug)}">Start cooking</a>`:``}
          <button type="button" class="btn save" aria-pressed="${r}" data-save>
            <span aria-hidden="true">${r?`♥`:`♡`}</span>
            <span>${r?`Saved`:`Save recipe`}</span>
          </button>
        </div>
        
      </header>
      ${n.note?`<p class="note">${R(n.note)}</p>`:``}
      ${n.outcome?`<div class="outcome"><p class="outcome-label">how it turned out</p><p>${R(n.outcome)}</p></div>`:``}
      ${i?`<img class="photo" src="${R(i)}" alt="${R(n.title)}" />`:``}
      <div class="cols">
        <section class="ingredients" aria-labelledby="ing-h">
          <h2 id="ing-h">Ingredients</h2>
          ${n.ingredients.length?`<ul>${n.ingredients.map(e=>`<li><span class="amt ${e.amount?``:`amt-missing`}">${e.amount?R(e.amount):`amount tbd`}</span><span>${R(e.item)}</span></li>`).join(``)}</ul>`:`<p class="quiet">no ingredients written yet</p>`}
        </section>
        <section class="method" aria-labelledby="method-h">
          <h2 id="method-h">Method</h2>
          ${n.steps.length?`<ol>${n.steps.map(e=>`<li>${R(e)}</li>`).join(``)}</ol>`:`<p class="quiet">the steps aren’t written down yet</p>`}
        </section>
      </div>
      ${o.length?`<section class="my-versions" aria-labelledby="ver-h">
              <h2 id="ver-h">My versions</h2>
              ${o.length?`<ul>${o.map(e=>`<li><a href="${z(e)}"><span class="row-title">${R(e.title)}</span>${e.subtitle?` <span class="row-sub">${R(e.subtitle)}</span>`:``}</a>${e.outcome?`<p>${R(e.outcome)}</p>`:``}</li>`).join(``)}</ul>`:`<p class="quiet">no versions yet. make one to try different amounts and write down how it went</p>`}
            </section>`:``}
      ${i?``:`<div class="card-art" aria-hidden="true">${f(n)}</div>`}
    </article>`,M.querySelector(`[data-save]`).addEventListener(`click`,()=>{F=T(P,n.slug);let e=M.querySelector(`[data-save]`),t=F.includes(n.slug);e.setAttribute(`aria-pressed`,String(t)),e.children[0].textContent=t?`♥`:`♡`,e.children[1].textContent=t?`Saved`:`Save recipe`}),n.title}function ce(e){let n=S(t,e);return n?_(M,n,P):X()}var Z=!0,Q=null;async function $(){Q?.(),Q=null,document.body.classList.remove(`cooking`);let[e,t=``]=location.hash.replace(/^#\/?/,``).split(`?`),[n,r]=e.split(`/`),i=r?decodeURIComponent(r):``,a,o=``;if(n===`recipe`&&i)a=se(i);else if(n===`cook`&&i){let e=ce(i);a=typeof e==`string`?e:e.title,Q=e.leave??null}else n===`recipes`?(L=new URLSearchParams(t).get(`c`)??``,a=ae(),o=`recipes`):n===`favorites`?(a=oe(),o=`favorites`):a=ie();document.title=a===`Recipe book`?N:`${a} · ${N}`,document.querySelectorAll(`[data-nav]`).forEach(e=>{e.dataset.nav===o?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)}),Z||(window.scrollTo(0,0),M.querySelector(`h1`)?.focus({preventScroll:!0})),Z=!1}window.addEventListener(`storage`,()=>{F=w(P)}),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(()=>{})),window.addEventListener(`hashchange`,$),$();