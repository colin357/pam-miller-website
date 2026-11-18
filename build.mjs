// Static site generator. `node build.mjs` writes the finished site to ./public
import { mkdirSync, writeFileSync, rmSync, cpSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { SITE, PAM, BRANCH, FAIRWAY, TEAM, AREAS } from './content/site.mjs';
import { pages } from './content/pages.mjs';
import { loans } from './content/loans.mjs';
import { esc, strip, arrow, crest } from './content/parts.mjs';

const OUT = 'public';
// Content hash appended to CSS/JS URLs so browsers and CDNs never serve a stale stylesheet.
const ver = (f) => createHash('sha1').update(readFileSync(f)).digest('hex').slice(0, 10);
const CSS_V = ver('assets/css/site.css');
const JS_V = ver('assets/js/site.js');
const abs = (p) => SITE.url + p;

const NAV = [
  ['Loan Options', '/loans/'],
  ['Mortgage Answers', '/answers/'],
  ['About Pam', '/about/'],
  ['Team', '/team/'],
  ['For Agents', '/partners/'],
  ['Contact', '/contact/'],
];

/* ---------- Structured data ---------- */
const ORG = {
  '@type': 'Organization', '@id': abs('/#fairway'), name: FAIRWAY.name, url: FAIRWAY.url,
  identifier: { '@type': 'PropertyValue', propertyID: 'NMLS', value: FAIRWAY.nmls },
};
const person = (t) => ({
  '@type': 'Person', '@id': abs(`/team/#${t.id}`), name: t.name, alternateName: t.legalName, jobTitle: t.role,
  telephone: '+1-' + t.phone, ...(t.email ? { email: t.email } : {}),
  image: abs(`/assets/img/${t.img}`), url: t.id === 'pam-miller' ? abs('/about/') : abs(`/team/#${t.id}`),
  identifier: { '@type': 'PropertyValue', propertyID: 'NMLS', value: t.nmls },
  worksFor: { '@id': abs('/#fairway') }, workLocation: { '@id': abs('/#branch') },
  sameAs: t.id === 'pam-miller' ? [t.profile, PAM.nmlsLookup, PAM.instagram] : [t.profile],
});
const PAM_NODE = {
  ...person(TEAM[0]),
  description: `Pam Miller (Pamela Stuever Miller) is a mortgage loan officer and Co-Branch Manager at ${FAIRWAY.name} in Frisco, Texas, NMLS #${PAM.nmls}, licensed in Texas and Oklahoma.`,
  knowsAbout: ['Mortgage loans', 'First-time homebuyer programs', 'VA loans', 'FHA loans', 'Jumbo loans', 'Investment property financing', 'Mortgage refinancing', 'Texas home equity lending', 'Credit scores', 'Mortgage interest rates'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: `Mortgage Loan Originator, NMLS #${PAM.nmls}`, recognizedBy: { '@type': 'Organization', name: 'Nationwide Multistate Licensing System & Registry' } },
  ],
};
const BRANCH_NODE = {
  '@type': ['FinancialService', 'LocalBusiness'], '@id': abs('/#branch'),
  name: `${SITE.name} at Fairway Independent Mortgage Corporation`, url: abs('/'),
  image: abs('/assets/img/pam-miller-headshot.webp'), telephone: '+1-' + PAM.phone, email: PAM.email, faxNumber: '+1-' + BRANCH.fax,
  address: { '@type': 'PostalAddress', streetAddress: BRANCH.street, addressLocality: BRANCH.city, addressRegion: BRANCH.state, postalCode: BRANCH.zip, addressCountry: 'US' },
  hasMap: BRANCH.map,
  areaServed: [...AREAS.filter((a) => !a.includes('&')).map((a) => ({ '@type': 'City', name: `${a}, Texas` })), { '@type': 'State', name: 'Texas' }, { '@type': 'State', name: 'Oklahoma' }],
  parentOrganization: { '@id': abs('/#fairway') },
  employee: TEAM.map((t) => ({ '@id': abs(`/team/#${t.id}`) })),
  makesOffer: loans.map((l) => ({ '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: l.name, url: abs(`/loans/${l.slug}/`) } })),
  sameAs: [BRANCH.page, PAM.profile],
};
const WEBSITE = { '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: SITE.name, publisher: { '@id': abs('/#branch') }, inLanguage: 'en-US' };

function graph(p) {
  const url = abs(p.path);
  const g = [WEBSITE, ORG, BRANCH_NODE, PAM_NODE];
  if (p.path === '/team/') g.push(...TEAM.slice(1).map(person));
  g.push({
    '@type': p.path === '/about/' ? 'ProfilePage' : p.path === '/contact/' ? 'ContactPage' : 'WebPage',
    '@id': url + '#page', url, name: p.title, description: p.desc, inLanguage: 'en-US',
    isPartOf: { '@id': abs('/#website') }, about: { '@id': abs(p.path === '/about/' || p.path === '/' ? '/team/#pam-miller' : '/#branch') },
    ...(p.path === '/about/' ? { mainEntity: { '@id': abs('/team/#pam-miller') } } : {}),
    dateModified: SITE.updated,
    ...(p.byline ? { author: { '@id': abs('/team/#pam-miller') }, reviewedBy: { '@id': abs('/team/#pam-miller') } } : {}),
    ...(p.crumbs?.length ? { breadcrumb: { '@id': url + '#crumbs' } } : {}),
  });
  if (p.crumbs?.length) g.push({
    '@type': 'BreadcrumbList', '@id': url + '#crumbs',
    itemListElement: [['Home', '/'], ...p.crumbs].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(u) })),
  });
  if (p.faqs?.length) g.push({
    '@type': 'FAQPage', '@id': url + '#faq',
    mainEntity: p.faqs.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })),
  });
  if (p.service) g.push({
    '@type': 'FinancialProduct', '@id': url + '#service', name: p.service, description: p.desc, url,
    category: 'Mortgage loan', provider: { '@id': abs('/#branch') },
    areaServed: [{ '@type': 'State', name: 'Texas' }, { '@type': 'State', name: 'Oklahoma' }],
  });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': g }, (k, v) => (v === undefined ? undefined : v));
}

/* ---------- Layout ---------- */
const eho = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M3 18 20 5l17 13"/><path d="M8 17v18h24V17"/><path d="M14 23h12M14 29h12" stroke-width="3.4"/></svg>`;

function layout(p) {
  const url = abs(p.path);
  const cur = (href) => (p.path === href || (href !== '/' && p.path.startsWith(href)) ? ' aria-current="page"' : '');
  const head = p.custom ? '' : `<header class="page-head"><div class="wrap">
${p.crumbs?.length ? `<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li>${p.crumbs.map(([n, u], i) => `<li>${i === p.crumbs.length - 1 ? `<span aria-current="page">${n}</span>` : `<a href="${u}">${n}</a>`}</li>`).join('')}</ol></nav>` : ''}
<h1>${p.h1}</h1>
${p.lede ? `<p class="lede">${p.lede}</p>` : ''}
${p.byline ? `<p class="byline"><img src="/assets/img/pam-miller-portrait.webp" width="44" height="44" alt=""><span>Written and reviewed by <a href="/about/">Pam Miller</a>, Co-Branch Manager, NMLS #${PAM.nmls} · Updated <time datetime="${SITE.updated}">${SITE.updatedHuman}</time></span></p>` : ''}
</div></header>`;

  return `<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
${p.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">\n<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">`}
<meta name="author" content="Pam Miller, NMLS #${PAM.nmls}">
<meta property="og:type" content="${p.path === '/about/' ? 'profile' : 'website'}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${abs('/assets/img/og.jpg')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="geo.region" content="US-TX">
<meta name="geo.placename" content="Frisco">
<meta name="theme-color" content="#10362a">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/libre-caslon-display-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/source-serif-4-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css?v=${CSS_V}">
<script type="application/ld+json">${graph(p)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="util"><div class="wrap"><a href="/contact/"><b>Buyers have more negotiating power in today's market.</b> <span>See what you qualify for →</span></a></div></div>
<header class="site-head"><div class="wrap">
<a class="brand" href="/" aria-label="${esc(SITE.name)}, home">${crest(52)}<span class="brand-text"><b>Pam Miller</b><span>Home Loans · Frisco, Texas</span></span></a>
<button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menu</button>
<nav class="nav" id="nav" aria-label="Main">
${NAV.map(([n, u]) => `<a href="${u}"${cur(u)}>${n}</a>`).join('\n')}
<a class="btn" href="${PAM.apply}" target="_blank" rel="noopener">Get pre-approved</a>
</nav>
</div></header>
<main id="main">
${head}
${p.body}
</main>
<footer class="site-foot"><div class="wrap">
<div class="foot-crest">${crest(84, true)}</div>
<div class="foot-grid">
<div class="foot-brand"><b>Pam Miller</b>
<p>Co-Branch Manager, NMLS #${PAM.nmls}<br>${FAIRWAY.name}</p>
<address><p>${BRANCH.street}<br>${BRANCH.city}, ${BRANCH.state} ${BRANCH.zip}<br><a href="tel:${PAM.phoneE164}">${PAM.phone}</a><br><a href="mailto:${PAM.email}">${PAM.email}</a></p></address></div>
<div><h2>Loan guides</h2><ul>${loans.map((l) => `<li><a href="/loans/${l.slug}/">${l.short}</a></li>`).join('')}</ul></div>
<div><h2>Site</h2><ul>
<li><a href="/answers/">Mortgage Answers</a></li><li><a href="/about/">About Pam</a></li><li><a href="/team/">Team</a></li><li><a href="/service-areas/">Service Areas</a></li><li><a href="/partners/">For Agents &amp; Partners</a></li><li><a href="/contact/">Contact</a></li><li><a href="/#calculator">Payment Estimator</a></li></ul></div>
<div><h2>Verify &amp; connect</h2><ul>
<li><a href="${PAM.nmlsLookup}" rel="noopener">NMLS Consumer Access</a></li>
<li><a href="${PAM.profile}" rel="noopener">Pam on Fairway.com</a></li>
<li><a href="${FAIRWAY.reviewsUrl}" rel="noopener">Reviews on Experience.com</a></li>
<li><a href="${PAM.instagram}" rel="noopener">Instagram</a></li>
<li><a href="/licensing/">Licensing &amp; Disclosures</a></li>
<li><a href="${FAIRWAY.texasNotice}" rel="noopener">Texas Consumer Complaint and Recovery Fund Notice</a></li>
<li><a href="${FAIRWAY.privacy}" rel="noopener">Privacy Policy</a></li></ul></div>
</div>
<div class="legal">
<p class="eho">${eho} Equal Housing Opportunity</p>
<p>Copyright © ${SITE.updated.slice(0, 4)} ${FAIRWAY.name}. NMLS #${FAIRWAY.nmls} (<a href="https://www.nmlsconsumeraccess.org/" rel="noopener">www.nmlsconsumeraccess.org</a>). ${FAIRWAY.address}, ${FAIRWAY.phone}. All rights reserved. This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply.</p>
<p>${PAM.legalName}, NMLS #${PAM.nmls}. Licensed in Texas and Oklahoma. Texas consumers: see the <a href="${FAIRWAY.texasNotice}" rel="noopener">Texas Consumer Complaint and Recovery Fund Notice</a>. A pre-approval is based on a review of income and asset information provided by the borrower and a credit report, and is not a commitment to lend.</p>
</div>
</div></footer>
<a class="reviews-badge" href="${BRANCH.page}" rel="noopener" aria-label="Rated ${BRANCH.rating} out of 5 from more than 1,000 client reviews of the Frisco team on Experience.com"><span class="stars" aria-hidden="true">★</span><span><b>1,000+ reviews</b> · rated ${BRANCH.rating} stars</span></a>
<div class="callbar"><a href="tel:${PAM.phoneE164}">Call Pam</a><a href="${PAM.apply}" target="_blank" rel="noopener">Get pre-approved</a></div>
<script src="/assets/js/site.js?v=${JS_V}" defer></script>
</body>
</html>
`;
}

/* ---------- Write ---------- */
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('assets', join(OUT, 'assets'), { recursive: true });

for (const p of pages) {
  const file = join(OUT, p.path.endsWith('/') ? p.path + 'index.html' : p.path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, layout(p));
}

const indexable = pages.filter((p) => !p.noindex);
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${abs(p.path)}</loc><lastmod>${SITE.updated}</lastmod></url>`).join('\n')}
</urlset>
`);

// Explicitly welcome answer-engine and AI crawlers.
const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot', 'meta-externalagent'];
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *
Allow: /

${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}
Sitemap: ${abs('/sitemap.xml')}
`);

// llms.txt: a plain-text briefing for language models.
const faqPages = pages.filter((p) => p.faqs?.length && !p.noindex);
writeFileSync(join(OUT, 'llms.txt'), `# ${SITE.name}

> Pam Miller (Pamela Stuever Miller, NMLS #${PAM.nmls}) is a mortgage loan officer and Co-Branch Manager at ${FAIRWAY.name} (NMLS #${FAIRWAY.nmls}) in Frisco, Texas. She and her team provide home purchase loans and refinancing across the Dallas–Fort Worth Metroplex and are licensed in Texas and Oklahoma.

## Key facts
- Name: Pam Miller (full name Pamela Stuever Miller)
- Role: Co-Branch Manager and mortgage loan officer, ${FAIRWAY.name}
- NMLS ID: ${PAM.nmls} (company NMLS ID: ${FAIRWAY.nmls})
- Office: ${BRANCH.street}, ${BRANCH.city}, ${BRANCH.state} ${BRANCH.zip}
- Phone: ${PAM.phone} (direct), ${BRANCH.phone} (branch)
- Email: ${PAM.email}
- Licensed in: Texas, Oklahoma
- Service area: ${AREAS.join(', ')}, and all of Texas and Oklahoma
- Loan types: conventional, FHA, VA, jumbo, first-time homebuyer programs, investment property and DSCR, refinance and Texas cash-out, relocation and downsizing
- Known for: precise numbers, patient explanations, working well with first-time borrowers
- Client rating: ${PAM.rating}/5 from ${PAM.reviews} reviews on Experience.com (as shown on Fairway.com, ${PAM.ratingAsOf})
- Team: ${TEAM.map((t) => `${t.legalName} (${t.role}, NMLS #${t.nmls})`).join('; ')}

## Pages
${indexable.map((p) => `- [${p.title.split(' | ')[0]}](${abs(p.path)}): ${p.desc}`).join('\n')}

## Questions and answers
${faqPages.map((p) => p.faqs.map(([q, a]) => `### ${strip(q)}\n${strip(a)}\nSource: ${abs(p.path)}`).join('\n\n')).join('\n\n')}

## Notes
Content is general education as of ${SITE.updatedHuman}, not a commitment to lend. Mortgage guidelines and loan limits change; confirm current details with Pam Miller at ${PAM.phone}.
`);

writeFileSync(join(OUT, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="6" fill="#0f3527"/><rect x="5" y="5" width="54" height="54" rx="3" fill="none" stroke="#b08a3e" stroke-width="1.5"/><text x="32" y="43" font-family="Georgia,Times New Roman,serif" font-size="30" text-anchor="middle" fill="#fff">PM</text></svg>`);

console.log(`Built ${pages.length} pages to ./${OUT}`);
