// Reusable HTML fragments.
import { PAM, TEAM, PHOTOS } from './site.mjs';
import { loans } from './loans.mjs';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const strip = (s) => String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7"/></svg>`;
export const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>`;

// Monogram crest used in the header, footer and section ornaments.
export const crest = (size = 54, light = false) => {
  const c = light ? '#dcc68e' : '#a5803c', t = light ? '#ffffff' : '#10362a';
  return `<svg class="crest" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47" fill="none" stroke="${c}" stroke-width="1.6"/><circle cx="50" cy="50" r="41.5" fill="none" stroke="${c}" stroke-width=".8"/><text x="50" y="63" text-anchor="middle" font-family="'Libre Caslon Display',Georgia,serif" font-size="38" fill="${t}" letter-spacing="1">PM</text><path d="M30 73h40" stroke="${c}" stroke-width=".8"/><path d="M50 78.5l3 3-3 3-3-3z" fill="${c}"/></svg>`;
};

export const answer = (text) => `<div class="answer"><p>${text}</p></div>`;

export const facts = (rows) =>
  `<dl class="facts">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;

// faqs: [question, answerHtml][]
export const faq = (faqs, open = false) =>
  `<div class="faq">${faqs.map(([q, a], i) => `<details${open && i === 0 ? ' open' : ''}><summary><h3>${q}</h3></summary><div class="a">${/^\s*</.test(a) ? a : `<p>${a}</p>`}</div></details>`).join('')}</div>`;

export const band = (key, html) => {
  const p = PHOTOS[key];
  return `<figure class="band" style="margin:0">
<img src="/assets/img/${p.file}-1600.webp" srcset="/assets/img/${p.file}-800.webp 800w, /assets/img/${p.file}-1600.webp 1600w" sizes="100vw" width="${p.w}" height="${p.h}" alt="${esc(p.alt)}" loading="lazy" decoding="async">
<figcaption class="band-copy"><div class="wrap"><p>${html}</p></div></figcaption>
</figure>
<p class="credit"><a href="${p.src}" rel="noopener nofollow">${p.credit}</a></p>`;
};

const loanCards = () =>
  loans.map((l, i) => `<li><a href="/loans/${l.slug}/" style="--bg:url(/assets/img/card-${i + 1}.webp)"><h3>${l.short}</h3><p>${l.card}</p><span class="go">Read the guide →</span></a></li>`).join('');

export const loanGrid = () => `<ul class="grid">${loanCards()}</ul>`;

// Horizontal, swipeable version with previous/next buttons.
export const loanSlider = () => `<div class="slider" data-slider>
<ul class="grid slider-track" tabindex="0" aria-label="Loan guides">${loanCards()}</ul>
<div class="slider-nav"><button type="button" data-prev aria-label="Previous loan guides">${arrow}</button><button type="button" data-next aria-label="More loan guides">${arrow}</button></div>
</div>`;

export const teamStrip = () =>
  `<ul class="team">${TEAM.map((t) => `<li><img src="/assets/img/${t.img}" width="${t.w}" height="${t.h}" alt="${esc(t.legalName)}, ${t.role} at Fairway in Frisco, Texas" loading="lazy" decoding="async"><h3>${t.name}</h3><p>${t.role} · NMLS #${t.nmls}<br><a href="tel:${t.phone.replace(/-/g, '')}">${t.phone}</a></p></li>`).join('')}</ul>`;

export const cta = (h = 'Have a question about your numbers?', p = 'Tell Pam where you are in the process. You will get a clear answer, a plain-English explanation and no pressure.') =>
  `<section class="cta" aria-label="Contact Pam Miller"><div class="wrap">
${crest(64, true)}
<h2>${h}</h2>
<p>${p}</p>
<div class="btn-row"><a class="btn" href="/contact/">Start a pre-approval ${arrow}</a><a class="btn btn--ghost" href="tel:${PAM.phoneE164}">${phoneIcon} ${PAM.phone}</a></div>
</div></section>`;

export const contactCard = () =>
  `<div class="aside-card aside-card--gold"><h2>Talk to Pam</h2>
<ul><li><a href="tel:${PAM.phoneE164}"><strong>${PAM.phone}</strong></a> office</li><li><a href="mailto:${PAM.email}">${PAM.email}</a></li><li><a href="/contact/">Send a note or start a pre-approval →</a></li></ul></div>`;

export const loanList = (except) =>
  `<div class="aside-card"><h2>Loan guides</h2><ul>${loans.filter((l) => l.slug !== except).map((l) => `<li><a href="/loans/${l.slug}/">${l.name}</a></li>`).join('')}</ul></div>`;
