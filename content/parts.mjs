// Reusable HTML fragments.
import { PAM, TEAM, PHOTOS } from './site.mjs';
import { loans } from './loans.mjs';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const strip = (s) => String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7"/></svg>`;
export const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>`;

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

export const loanGrid = () =>
  `<ul class="grid">${loans.map((l) => `<li><a href="/loans/${l.slug}/"><h3>${l.short}</h3><p>${l.card}</p><span class="go">Read the guide →</span></a></li>`).join('')}</ul>`;

export const teamStrip = () =>
  `<ul class="team">${TEAM.map((t) => `<li><img src="/assets/img/${t.img}" width="${t.w}" height="${t.h}" alt="${esc(t.legalName)}, ${t.role} at Fairway in Frisco, Texas" loading="lazy" decoding="async"><h3>${t.name}</h3><p>${t.role} · NMLS #${t.nmls}<br><a href="tel:${t.phone.replace(/-/g, '')}">${t.phone}</a></p></li>`).join('')}</ul>`;

export const cta = (h = 'Have a question about your numbers?', p = 'Tell Pam where you are in the process. You will get a clear answer, a plain-English explanation and no pressure.') =>
  `<section class="cta" aria-label="Contact Pam Miller"><div class="wrap">
<h2>${h}</h2>
<div><p>${p}</p><div class="btn-row" style="margin-top:0"><a class="btn" href="/contact/">Start a pre-approval ${arrow}</a><a class="btn btn--ghost" href="tel:${PAM.phoneE164}">${phoneIcon} ${PAM.phone}</a></div></div>
</div></section>`;

export const contactCard = () =>
  `<div class="aside-card aside-card--gold"><h2>Talk to Pam</h2>
<ul><li><a href="tel:${PAM.phoneE164}"><strong>${PAM.phone}</strong></a> office</li><li><a href="mailto:${PAM.email}">${PAM.email}</a></li><li><a href="/contact/">Send a note or start a pre-approval →</a></li></ul></div>`;

export const loanList = (except) =>
  `<div class="aside-card"><h2>Loan guides</h2><ul>${loans.filter((l) => l.slug !== except).map((l) => `<li><a href="/loans/${l.slug}/">${l.name}</a></li>`).join('')}</ul></div>`;
