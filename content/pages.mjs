import { SITE, PAM, BRANCH, FAIRWAY, TEAM, AREAS, PHOTOS } from './site.mjs';
import { loans } from './loans.mjs';
import { answer, facts, faq, band, loanGrid, loanSlider, teamStrip, cta, contactCard, loanList, arrow, phoneIcon, esc } from './parts.mjs';

const addr = `${BRANCH.street}, ${BRANCH.city}, ${BRANCH.state} ${BRANCH.zip}`;

/* ------------------------------------------------------------------ HOME */
const homeFaqs = [
  ['Who is Pam Miller?', `Pam Miller (Pamela Stuever Miller, NMLS #${PAM.nmls}) is a mortgage loan officer and Co-Branch Manager at Fairway Independent Mortgage Corporation in Frisco, Texas. She helps homebuyers and homeowners across the Dallas–Fort Worth Metroplex with purchase loans and refinancing, and is licensed in Texas and Oklahoma.`],
  ['Where is Pam Miller\'s office?', `Pam works from Fairway's Frisco branch at ${addr}, near the Dallas North Tollway. Her office phone is ${PAM.phone} and the branch line is ${BRANCH.phone}. Meetings are available in person, by phone or by video.`],
  ['What types of home loans does Pam Miller offer?', `Pam's team offers conventional, FHA, VA and jumbo loans, first-time homebuyer programs with Texas down payment assistance, investment property and DSCR loans, and rate-and-term and cash-out refinancing. She also helps clients who are relocating to North Texas or downsizing.`],
  ['Which areas does Pam Miller serve?', `Pam serves the entire Dallas–Fort Worth Metroplex, including Frisco, Plano, McKinney, Prosper, Allen, Little Elm, The Colony, Celina, Denton, Dallas and Fort Worth. She can lend on property anywhere in Texas and Oklahoma.`],
  ['How do I get pre-approved with Pam Miller?', `Call ${PAM.phone}, email ${PAM.email} or use the contact form on this site. Pam will ask about your goals, review your credit, income and assets, and explain which loan options fit. A pre-approval can often be issued within a day or two of receiving your documents.`],
  ['Does it cost anything to talk with Pam about a mortgage?', `No. An initial conversation and pre-approval review are free and carry no obligation. You only pay third-party costs, such as an appraisal, once you decide to move forward with a loan.`],
];

const home = {
  path: '/',
  title: 'Pam Miller | Mortgage Loan Officer in Frisco, TX | Fairway',
  desc: `Pam Miller, NMLS #${PAM.nmls}, is a Fairway mortgage loan officer in Frisco, TX. Clear answers on credit, rates and home loans for buyers across Dallas–Fort Worth.`,
  faqs: homeFaqs,
  custom: true,
  body: `
<section class="hero">
<img class="hero-bg" src="/assets/img/texas-bluebonnets-1600.webp" srcset="/assets/img/texas-bluebonnets-800.webp 800w, /assets/img/texas-bluebonnets-1600.webp 1600w" sizes="100vw" width="1600" height="1200" alt="" fetchpriority="high">
<div class="wrap">
<div class="hero-copy">
<h1>Your mortgage lender in Frisco, Texas</h1>
<p class="lede">Pam Miller is a Co-Branch Manager with Fairway Independent Mortgage Corporation in Frisco. She and her team help buyers and homeowners all across Texas compare loan options, sort out credit questions and understand exactly what a rate will cost them.</p>
<div class="btn-row"><a class="btn" href="${PAM.apply}" target="_blank" rel="noopener">Start a pre-approval ${arrow}</a><a class="btn btn--ghost" href="tel:${PAM.phoneE164}">${phoneIcon} ${PAM.phone}</a></div>
</div>
<figure class="hero-photo hero-photo--arch">
<img src="/assets/img/pam-miller-cutout.webp" width="593" height="693" alt="Pam Miller, mortgage loan officer and Co-Branch Manager at Fairway in Frisco, Texas">
</figure>
</div></section>
<section class="sec" id="about"><div class="wrap">
<header class="sec-head"><h2>Meet Pam Miller</h2>
<p class="lede">Pam is a Co-Branch Manager at Fairway in Frisco who is known for being precise with the numbers and patient with the questions. First-time buyers, veterans and homeowners all across Texas come to her for a loan they actually understand.</p>
<div class="btn-row" style="justify-content:center"><a class="btn btn--ghost" href="/about/">About Pam ${arrow}</a></div></header>
</div></section>

<section class="sec sec--stone sec--rule" id="loans"><div class="wrap">
<header class="sec-head"><h2>Which home loan fits your situation?</h2><p class="lede">Each guide starts with a short answer, then covers requirements, costs and the Texas-specific rules that apply.</p></header>
${loanSlider()}
</div></section>

${band('square', 'Based in Frisco. Lending all across Texas.')}

<section class="sec"><div class="wrap">
<header class="sec-head"><h2>Credit and interest rates, in plain terms</h2></header>
<div class="split split--even" style="margin-top:2.4rem">
<div>
<h3>What credit score do I need to buy a home in Texas?</h3>
<p>FHA loans allow 3.5% down with a credit score of 580 or higher. Most conventional loans start at about 620, and jumbo loans usually look for 700 or more. A higher score lowers both your rate and the cost of mortgage insurance, so a few weeks of targeted work before you apply can pay off for years.</p>
<p><a href="/answers/#credit">Read the credit answers →</a></p>
</div>
<div>
<h3>What decides my mortgage interest rate?</h3>
<p>Two things: the market on the day you lock, and your own file. Your credit score, down payment, loan type, property type and whether you pay points all move the rate. Pam shows the same loan priced several ways so you can see what each choice costs per month and over time.</p>
<p><a href="/answers/#rates">Read the interest rate answers →</a></p>
</div>
</div>
</div></section>

<section class="sec sec--pine" id="process"><div class="wrap split">
<div class="sticky">
<h2>How does getting a mortgage with Pam work?</h2>
<p class="lede">Five steps. Many purchase loans close in about 30 to 45 days once a contract is signed.</p>
</div>
<ol class="steps">
<li><div><h3>A conversation about your goals</h3><p>A phone call or meeting to cover what you want to do, your timeline and any concerns about credit, income or cash to close.</p></div></li>
<li><div><h3>Pre-approval</h3><p>Pam reviews credit, income and assets, then issues a pre-approval letter you can hand to your real estate agent.</p></div></li>
<li><div><h3>Loan options side by side</h3><p>You receive a written comparison of loan types, down payments and rate choices, with every line of the Loan Estimate explained.</p></div></li>
<li><div><h3>Processing and underwriting</h3><p>The team orders the appraisal and title work, collects documents and keeps you and your agent updated as conditions are cleared.</p></div></li>
<li><div><h3>Closing</h3><p>You review final figures at least three business days ahead, sign at the title company and get your keys.</p></div></li>
</ol>
</div></section>

<section class="sec sec--stone" id="calculator"><div class="wrap">
<header class="sec-head"><h2>What would the monthly payment be?</h2><p class="lede">Enter a price, a down payment and an interest rate to estimate principal, interest, taxes and insurance.</p></header>
<div class="calc">
<form id="calc" aria-label="Mortgage payment estimator">
<label class="full">Home price ($)<input id="c-price" inputmode="numeric" value="500000"></label>
<label>Down payment (%)<input id="c-down" inputmode="decimal" value="20"></label>
<label>Interest rate (%)<input id="c-rate" inputmode="decimal" placeholder="Enter a rate"></label>
<label>Term<select id="c-term"><option value="30">30 years</option><option value="20">20 years</option><option value="15">15 years</option></select></label>
<label>Property tax (% / yr)<input id="c-tax" inputmode="decimal" value="1.9"></label>
<label class="full">Homeowners insurance ($ / yr)<input id="c-ins" inputmode="numeric" value="3600"></label>
</form>
<div class="calc-out" aria-live="polite">
<span class="calc-hint" id="o-hint">Estimated monthly payment</span>
<span class="big" id="o-total">—</span>
<dl>
<div><dt>Principal and interest</dt><dd id="o-pi">—</dd></div>
<div><dt>Property tax</dt><dd id="o-tax">—</dd></div>
<div><dt>Homeowners insurance</dt><dd id="o-ins">—</dd></div>
<div><dt>Loan amount</dt><dd id="o-loan">—</dd></div>
<div><dt>Down payment</dt><dd id="o-down">—</dd></div>
</dl>
<p class="small">For illustration only. This is not a rate quote, a Loan Estimate or an offer to lend. Tax and insurance defaults are placeholders; actual amounts depend on the property. Mortgage insurance and HOA dues are not included.</p>
</div>
</div>
</div></section>

<section class="sec"><div class="wrap">
<header class="sec-head"><h2>Who will be working on my loan?</h2><p class="lede">Four licensed loan originators, supported by an in-house processor and closer, work from the Frisco branch on Warren Parkway.</p></header>
${teamStrip()}
<p style="margin-top:2rem"><a href="/team/">Meet the team →</a></p>
</div></section>

<section class="sec sec--stone sec--rule"><div class="wrap split">
<div class="sticky">
<h2>Frequently asked questions</h2>
<p><a href="/answers/">See all mortgage answers →</a></p>
</div>
${faq(homeFaqs, true)}
</div></section>

${cta()}
`,
};

/* --------------------------------------------------------------- ANSWERS */
const groups = [
  {
    id: 'credit', h: 'Credit questions', faqs: [
      ['What credit score do I need to buy a house in Texas?', `FHA guidelines allow a 3.5% down payment with a score of 580 or higher, and a 10% down payment with a score from 500 to 579. Most conventional loans require about 620. The VA does not set a minimum score, although lenders do. Jumbo loans typically look for 700 or more. Meeting the minimum gets you approved; a higher score gets you a better rate.`],
      ['How can I raise my credit score before applying for a mortgage?', `<p>Focus on the factors that carry the most weight:</p><ul><li><strong>Pay every account on time.</strong> Payment history is the largest factor in a FICO score.</li><li><strong>Lower credit card balances.</strong> Aim to use less than 30% of each card's limit, and under 10% if you can.</li><li><strong>Leave old accounts open.</strong> Length of history helps.</li><li><strong>Hold off on new credit.</strong> New accounts and inquiries can lower the score for a while.</li><li><strong>Check your reports for errors</strong> at annualcreditreport.com and dispute anything inaccurate.</li></ul><p>Pam can review your report and point to the specific changes likely to help most. In some cases a lender can request a rapid rescore after balances are paid down.</p>`],
      ['Does getting pre-approved hurt my credit score?', `A mortgage pre-approval involves a hard credit inquiry, which usually lowers a score by only a few points for a short time. Credit scoring models treat multiple mortgage inquiries made within a short shopping window, typically 14 to 45 days depending on the model, as a single inquiry, so comparing lenders does not multiply the effect.`],
      ['Can I get a mortgage with student loans or other debt?', `Yes. Lenders look at your debt-to-income ratio, which is your total monthly debt payments divided by your gross monthly income. Many programs allow a ratio in the mid-40% range, and sometimes higher with strong credit or savings. What matters is the monthly payment on each debt, not the total balance.`],
      ['What should I avoid doing while my loan is in process?', `<ul><li>Do not open new credit cards or finance a car, furniture or appliances.</li><li>Do not change jobs or become self-employed without talking to your loan officer first.</li><li>Do not make large cash deposits that cannot be documented.</li><li>Do not co-sign a loan for anyone.</li><li>Do not miss a payment on anything.</li></ul><p>Lenders re-check credit and employment shortly before closing, so changes can delay or derail an approval.</p>`],
      ['Can I buy a home after bankruptcy or foreclosure?', `Usually, after a waiting period and with re-established credit. As a general guide, FHA looks for two years after a Chapter 7 discharge and three years after a foreclosure, while conventional loans typically require four years after Chapter 7 and seven years after a foreclosure. Documented extenuating circumstances can shorten some of these periods.`],
    ],
  },
  {
    id: 'rates', h: 'Interest rate questions', faqs: [
      ['What determines my mortgage interest rate?', `Your rate is a combination of market conditions and your individual file. The market sets the baseline each day. Your credit score, down payment, loan type, loan size, property type, occupancy and loan term then adjust it up or down. You can also lower the rate by paying discount points at closing.`],
      ['What is the difference between an interest rate and APR?', `The interest rate is the cost of borrowing the principal and is what your monthly principal-and-interest payment is based on. The annual percentage rate (APR) includes the interest rate plus certain fees and costs, expressed as a yearly rate. APR is useful for comparing offers, because a loan with a low rate and high fees will show a higher APR.`],
      ['What are discount points, and are they worth paying?', `One discount point costs 1% of the loan amount and is paid at closing in exchange for a lower interest rate. Points are worth paying when you will keep the loan long enough for the monthly savings to exceed the upfront cost. Pam calculates the break-even month for each option so the decision is based on your timeline.`],
      ['What is a rate lock?', `A rate lock is a lender's commitment to hold a specific interest rate and pricing for a set period, commonly 30 to 60 days, while your loan is processed. If rates rise during that time, your rate does not. Longer locks cost slightly more, and extending a lock that is about to expire can carry a fee.`],
      ['What is a 2-1 buydown?', `A 2-1 buydown is a temporary rate reduction. The interest rate is 2 percentage points lower in the first year and 1 point lower in the second year, then returns to the full note rate for the rest of the loan. The cost is paid upfront, usually by the seller or builder, and you must qualify at the full rate.`],
      ['Should I wait for interest rates to drop before buying?', `It depends on your budget and timeline more than on a forecast. No one can reliably predict rates. If you find the right home at a payment you can comfortably afford, buying now and refinancing later if rates fall is a common strategy, keeping in mind that a refinance has costs and is not guaranteed. Waiting carries its own risks, including higher prices and more competition when rates do fall.`],
      ['Is a fixed-rate or adjustable-rate mortgage better?', `A fixed-rate mortgage keeps the same rate and payment for the entire term, which suits buyers who plan to stay long-term. An adjustable-rate mortgage starts with a rate fixed for 5, 7 or 10 years and then adjusts within set limits. An ARM can make sense if you expect to sell or refinance before the first adjustment.`],
    ],
  },
  {
    id: 'process', h: 'Pre-approval and process questions', faqs: [
      ['What is the difference between pre-qualification and pre-approval?', `A pre-qualification is an estimate based on information you provide verbally. A pre-approval is stronger: the lender has reviewed your credit report and documentation of income and assets. Sellers and agents in the DFW market generally expect a pre-approval letter with an offer.`],
      ['What documents do I need to apply for a mortgage?', `<ul><li>Government-issued photo ID</li><li>Pay stubs covering the most recent 30 days</li><li>W-2s for the past two years</li><li>Federal tax returns for the past two years if you are self-employed or have commission, rental or other variable income</li><li>Bank and investment statements for the past two months, all pages</li><li>For VA loans, your DD-214 or statement of service</li><li>If applicable, divorce decree, child support order or bankruptcy discharge papers</li></ul>`],
      ['How long does it take to close on a house in Texas?', `Many purchase loans close in about 30 to 45 days from a signed contract. The timeline depends on the appraisal, title work, how quickly documents are returned and the loan type. A complete pre-approval before you shop is the most reliable way to keep closing on schedule.`],
      ['How much are closing costs in Texas?', `Buyers commonly pay closing costs of roughly 2% to 5% of the purchase price in addition to the down payment. This covers lender fees, the appraisal, title and escrow charges, and prepaid property taxes and homeowners insurance. Title insurance premiums in Texas are set by the state. Seller credits and lender credits can reduce the cash you need.`],
      ['How much house can I afford?', `Lenders look at your debt-to-income ratio, but affordability is personal. Start with a monthly payment you are comfortable with, including principal, interest, property taxes, insurance and any HOA dues, then work backward to a price. Property taxes and insurance are a larger share of the payment in North Texas than in many states, so use realistic figures.`],
      ['What is an escrow account?', `An escrow account is held by your loan servicer to pay property taxes and homeowners insurance on your behalf. A portion of each monthly payment goes into the account, and the servicer pays the bills when they are due. Escrow is required on most loans with less than 20% down.`],
    ],
  },
  {
    id: 'pam', h: 'Questions about working with Pam', faqs: [
      ['Is Pam Miller a licensed mortgage loan officer?', `Yes. Pam Miller is registered with the Nationwide Multistate Licensing System as NMLS #${PAM.nmls} and is licensed to originate mortgages in Texas and Oklahoma. Her employer, ${FAIRWAY.name}, is NMLS #${FAIRWAY.nmls}. Both records can be verified at nmlsconsumeraccess.org.`],
      ['Does Pam work with first-time homebuyers?', `Yes, and it is one of the things she is best known for. Pam takes the time to explain each step and each number, compares low-down-payment loans and Texas assistance programs, and makes sure first-time borrowers understand their loan before they sign.`],
      ['Can Pam help if I live outside Frisco?', `Yes. Pam's office is in Frisco, but she works with clients throughout the Dallas–Fort Worth Metroplex and can finance property anywhere in Texas and Oklahoma. Applications, document uploads and most signatures are handled electronically.`],
      ['How do real estate agents and other professionals work with Pam?', `Agents, builders, financial advisors and CPAs refer clients to Pam for pre-approvals and second opinions. Partners receive proactive status updates and fully reviewed pre-approval letters. See the <a href="/partners/">referral partners page</a> for details.`],
    ],
  },
];

const answers = {
  path: '/answers/',
  title: 'Mortgage Answers: Credit, Rates & Pre-Approval in Texas',
  desc: 'Straight answers to Texas mortgage questions on credit scores, interest rates, points, pre-approval and closing costs, from Frisco loan officer Pam Miller.',
  label: 'Mortgage answers',
  h1: 'Mortgage questions, answered plainly',
  lede: 'Credit and interest rates are the two topics buyers worry about most. These are the questions Pam hears every week, with the answers she gives.',
  crumbs: [['Mortgage Answers', '/answers/']],
  faqs: groups.flatMap((g) => g.faqs),
  byline: true,
  body: `<section class="sec"><div class="wrap split">
<div class="sticky">
<div class="aside-card"><h2>Jump to</h2><ul>${groups.map((g) => `<li><a href="#${g.id}">${g.h}</a></li>`).join('')}</ul></div>
${contactCard()}
</div>
<div>
${groups.map((g) => `<div class="faq-group" id="${g.id}"><h2>${g.h}</h2>${faq(g.faqs)}</div>`).join('')}
<p class="small">These answers are general education, not a commitment to lend or individual financial advice. Program guidelines change and lenders may apply additional requirements. Ask Pam about your specific situation.</p>
</div>
</div></section>
${cta('Did not see your question?', 'Ask it directly. Pam answers by phone or email, typically within one business day.')}`,
};

/* ----------------------------------------------------------------- ABOUT */
const aboutFaqs = [
  ['What is Pam Miller\'s NMLS number?', `Pam Miller's NMLS ID is ${PAM.nmls}. She is listed in the NMLS registry under her full name, Pamela Stuever Miller.`],
  ['Which company does Pam Miller work for?', `Pam is a Co-Branch Manager with ${FAIRWAY.name} (NMLS #${FAIRWAY.nmls}), a national mortgage lender headquartered in Madison, Wisconsin. She works from Fairway's Frisco, Texas branch.`],
  ['In which states is Pam Miller licensed?', `Pam is licensed to originate residential mortgage loans in Texas and Oklahoma.`],
];
const about = {
  path: '/about/',
  title: 'About Pam Miller, Co-Branch Manager | Fairway Frisco, TX',
  desc: `Meet Pam Miller (Pamela Stuever Miller), NMLS #${PAM.nmls}, Co-Branch Manager at Fairway in Frisco, TX. Precise, patient mortgage guidance for DFW buyers.`,
  label: 'About Pam',
  h1: 'Pam Miller, mortgage loan officer in Frisco, Texas',
  crumbs: [['About Pam', '/about/']],
  faqs: aboutFaqs,
  body: `<section class="sec"><div class="wrap about-intro">
<figure class="hero-photo hero-photo--arch">
<img src="/assets/img/pam-miller-cutout.webp" width="593" height="693" alt="Portrait of Pamela Stuever Miller, Co-Branch Manager at Fairway Independent Mortgage Corporation, Frisco, Texas">
</figure>
<div>
<h2>A loan officer who takes the time</h2>
<p class="lede">Pam Miller (Pamela Stuever Miller) is a Co-Branch Manager and licensed mortgage loan officer, NMLS #${PAM.nmls}, at Fairway Independent Mortgage Corporation's Frisco, Texas branch. She leads the branch with Gary Miller and personally works with homebuyers and homeowners across the Dallas–Fort Worth Metroplex.</p>
<p>A mortgage is a large stack of numbers, and most people sign for one only a few times in their lives. Pam's approach is built around that fact.</p>
<div class="btn-row"><a class="btn" href="${PAM.apply}" target="_blank" rel="noopener">Start a pre-approval ${arrow}</a><a class="btn btn--ghost" href="tel:${PAM.phoneE164}">${phoneIcon} ${PAM.phone}</a></div>
</div>
</div></section>

<section class="sec sec--stone"><div class="wrap">
<header class="sec-head"><h2>How does Pam work with clients?</h2></header>
<ul class="trio">
<li><h3>Exact with the figures</h3><p>Every number on the Loan Estimate is checked and explained, so the payment and the cash to close are never a surprise.</p></li>
<li><h3>Patient with the questions</h3><p>She does not move on until the client is comfortable. Asking the same question twice is welcome.</p></li>
<li><h3>Honest about where you stand</h3><p>First-time borrowers see where their credit is today, what a realistic payment looks like, and what would improve their options before they apply.</p></li>
</ul>
</div></section>

${band('hall', 'Precise with the numbers. Patient with the questions.')}

<section class="sec"><div class="wrap">
<header class="sec-head"><h2>What does Pam specialize in?</h2>
<p class="lede">Her clients range from Gen Z and millennial first-time buyers to seniors right-sizing for retirement, along with entrepreneurs and small business owners whose income takes more care to document.</p></header>
<ul class="grid grid--3">
<li><a href="/loans/first-time-homebuyer/"><h3>First-time homebuyers</h3><p>Low-down-payment loans and Texas down payment assistance.</p><span class="go">Read the guide →</span></a></li>
<li><a href="/loans/va-loans/"><h3>VA and FHA loans</h3><p>Government-backed options for veterans and for buyers building credit.</p><span class="go">Read the guide →</span></a></li>
<li><a href="/loans/jumbo-loans/"><h3>Luxury homes</h3><p>Jumbo financing for higher-priced homes in Frisco, Prosper and Plano.</p><span class="go">Read the guide →</span></a></li>
<li><a href="/loans/investment-property-loans/"><h3>Investment properties</h3><p>Conventional and DSCR loans for rental homes.</p><span class="go">Read the guide →</span></a></li>
<li><a href="/loans/refinance/"><h3>Refinancing</h3><p>Rate, term and cash-out refinancing under Texas rules.</p><span class="go">Read the guide →</span></a></li>
<li><a href="/loans/downsizing-relocation/"><h3>Relocation and downsizing</h3><p>Buying before you sell and qualifying on retirement income.</p><span class="go">Read the guide →</span></a></li>
</ul>
</div></section>

<section class="sec sec--pine"><div class="wrap">
<header class="sec-head"><h2>Credentials and contact details</h2></header>
<div class="duo">
<div class="duo-card"><h3>Credentials</h3>
${facts([
  ['Full name', PAM.legalName],
  ['Title', `${PAM.title}, ${FAIRWAY.name}`],
  ['NMLS ID', `<a href="${PAM.nmlsLookup}" rel="noopener">#${PAM.nmls}</a>`],
  ['Licensed in', `Texas; Oklahoma (license #${PAM.okLicense})`],
  ['Client reviews', `${PAM.rating} out of 5 from ${PAM.reviews} reviews on <a href="${FAIRWAY.reviewsUrl}" rel="noopener">Experience.com</a>, as shown on Fairway.com in ${PAM.ratingAsOf}`],
])}</div>
<div class="duo-card"><h3>Contact</h3>
${facts([
  ['Office', addr],
  ['Phone', `<a href="tel:${PAM.phoneE164}">${PAM.phone}</a>`],
  ['Email', `<a href="mailto:${PAM.email}">${PAM.email}</a>`],
  ['Fairway profile', `<a href="${PAM.profile}" rel="noopener">fairway.com/lo/pamela-miller-${PAM.nmls}</a>`],
  ['Directions', `<a href="${BRANCH.map}" rel="noopener">Open in Google Maps →</a>`],
])}</div>
</div>
</div></section>

<section class="sec sec--stone"><div class="wrap split">
<div class="sticky"><h2>Frequently asked questions</h2></div>
${faq(aboutFaqs)}
</div></section>
${cta()}`,
};

/* ------------------------------------------------------------------ TEAM */
const team = {
  path: '/team/',
  title: 'Meet the Team | Fairway Mortgage Frisco, TX',
  desc: 'Meet the Fairway Frisco mortgage team: Co-Branch Managers Pam Miller and Gary Miller and loan officers John Stuever and Robert Vernon, with NMLS IDs.',
  label: 'The Frisco team',
  h1: 'The mortgage team at Fairway in Frisco',
  lede: `Four licensed loan originators and an in-house processor and closer, all working from ${BRANCH.street}.`,
  crumbs: [['Team', '/team/']],
  body: `<section class="sec"><div class="wrap">
${answer(`The Fairway Frisco branch is led by Co-Branch Managers Pam Miller (NMLS #267016) and Gary Miller (NMLS #268432), with loan officers John Stuever (NMLS #268420) and Robert Vernon (NMLS #621482). A dedicated processor and closer handle each file locally from application to funding. The branch holds a ${BRANCH.rating} out of 5 rating from ${BRANCH.reviews} reviews on Experience.com, as shown on Fairway.com in ${PAM.ratingAsOf}.`, 'Who is on the team')}
${TEAM.map((t) => `<article class="person" id="${t.id}">
<img src="/assets/img/${t.img}" width="${t.w}" height="${t.h}" alt="${esc(t.legalName)}, ${t.role}, Fairway Independent Mortgage Corporation, Frisco, Texas" loading="lazy" decoding="async">
<div>
<h2>${t.name}</h2>
<p class="role">${t.role} · NMLS #${t.nmls}</p>
<p>${t.bio}</p>
${facts([
  ['Full name', t.legalName],
  ['Direct line', `<a href="tel:${t.phone.replace(/-/g, '')}">${t.phone}</a>`],
  ...(t.email ? [['Email', `<a href="mailto:${t.email}">${t.email}</a>`]] : []),
  ...(t.licensed ? [['Licensed in', t.licensed]] : []),
  ...(t.rating ? [['Client rating', `${t.rating} on Experience.com (${PAM.ratingAsOf})`]] : []),
  ['Fairway profile', `<a href="${t.profile}" rel="noopener">View on fairway.com</a>`],
])}
</div>
</article>`).join('')}
<article class="person"><div style="grid-column:1/-1" class="prose">
<h2>Processing and closing</h2>
<p>Behind the loan officers, an in-house processor and closer manage documents, coordinate with the title company and prepare final figures. Because they sit with the team in Frisco, questions get answered quickly and agents know who to call.</p>
</div></article>
</div></section>
${cta('Not sure who to call?', `Start with Pam. She will make sure your question lands with the right person on the team.`)}`,
};

/* ----------------------------------------------------------------- AREAS */
const areaFaqs = [
  ['Does Pam Miller only work in Frisco?', `No. Frisco is where the office is located, but Pam works with clients across Collin, Denton, Dallas, Tarrant and Grayson counties and can finance homes anywhere in Texas and Oklahoma.`],
  ['Where is the Fairway Frisco office located?', `The branch is at ${addr}, near the Dallas North Tollway. The branch phone number is ${BRANCH.phone}.`],
  ['Can I complete my mortgage without visiting the office?', `Yes. Applications, document uploads and disclosures are handled online, and conversations can happen by phone or video. Texas purchase closings are signed with a title company, which can often arrange a mobile notary or mail-away closing when needed.`],
];
const areas = {
  path: '/service-areas/',
  title: 'Mortgage Lender Serving Frisco & Dallas–Fort Worth, TX',
  desc: 'Pam Miller and the Fairway Frisco team provide home loans in Frisco, Plano, McKinney, Prosper, Allen, Dallas, Fort Worth and across Texas and Oklahoma.',
  label: 'Service area',
  h1: 'Home loans in Frisco and across Dallas–Fort Worth',
  lede: 'A local office on Warren Parkway, with lending throughout Texas and Oklahoma.',
  crumbs: [['Service Areas', '/service-areas/']],
  faqs: areaFaqs,
  body: `<section class="sec"><div class="wrap split">
<div class="sticky">
<div class="aside-card"><h2>Frisco office</h2>
<address><p><strong>${FAIRWAY.name}</strong><br>${BRANCH.street}<br>${BRANCH.city}, ${BRANCH.state} ${BRANCH.zip}</p></address>
<ul><li>Pam direct: <a href="tel:${PAM.phoneE164}">${PAM.phone}</a></li><li>Branch: <a href="tel:${BRANCH.phoneE164}">${BRANCH.phone}</a></li><li><a href="${BRANCH.map}" rel="noopener">Get directions →</a></li></ul></div>
${contactCard()}
</div>
<div class="prose">
${answer(`Pam Miller's team lends throughout the Dallas–Fort Worth Metroplex from Fairway's branch at ${addr}. The team regularly works with buyers in Frisco, Plano, McKinney, Prosper, Allen, Little Elm, The Colony and Celina, and is licensed to finance homes anywhere in Texas and Oklahoma.`)}
<h2>Which communities does the team serve?</h2>
<ul class="cols">${AREAS.map((a) => `<li>${a}</li>`).join('')}</ul>
<h2>What should buyers know about the Frisco market?</h2>
<p>Frisco sits in both Collin and Denton counties, about 25 miles north of downtown Dallas along the Dallas North Tollway. It is one of the fastest-growing cities in the country, with a mix of established neighborhoods, new construction and master-planned communities. That mix affects financing in a few practical ways:</p>
<ul>
<li><strong>New construction:</strong> builders often offer incentives tied to their preferred lender. Pam can compare those offers against outside financing so you see the real difference.</li>
<li><strong>Property taxes:</strong> total rates vary by city, county, school district and any municipal utility or public improvement district. Two similar homes a mile apart can have different payments.</li>
<li><strong>HOA dues:</strong> common in master-planned communities and counted in your debt-to-income ratio.</li>
<li><strong>Loan size:</strong> many Frisco and Prosper homes are priced near or above the 2026 conforming loan limit of $832,750, so it is worth comparing conforming and <a href="/loans/jumbo-loans/">jumbo</a> structures.</li>
</ul>
<h2>Frequently asked</h2>
${faq(areaFaqs)}
</div>
</div></section>
${band('hall', 'Frisco, Collin County and the whole Metroplex.')}
${cta()}`,
};

/* -------------------------------------------------------------- PARTNERS */
const partnerFaqs = [
  ['How quickly can Pam turn around a pre-approval for my client?', `When the client provides complete income and asset documents, a reviewed pre-approval can often be issued within a day or two. Pam is also available to call a listing agent to speak to the strength of the file.`],
  ['Will I be kept updated during the loan?', `Yes. Referral partners receive status updates at each milestone: application, appraisal ordered and received, conditional approval, clear to close and funding. You will not need to chase the lender for news.`],
  ['Can Pam give a second opinion on a client\'s loan?', `Yes. Pam will review a Loan Estimate from another lender and explain the rate, points, fees and cash to close line by line, at no cost and with no obligation.`],
];
const partners = {
  path: '/partners/',
  title: 'For Real Estate Agents & Referral Partners | Pam Miller',
  desc: 'Frisco loan officer Pam Miller partners with DFW real estate agents, builders, CPAs and advisors: reviewed pre-approvals and updates at every milestone.',
  label: 'Referral partners',
  h1: 'A lending partner for DFW agents, builders and advisors',
  lede: 'Your clients get clear explanations. You get a file that is solid before the offer goes in, and updates without having to ask.',
  crumbs: [['Partners', '/partners/']],
  faqs: partnerFaqs,
  body: `<section class="sec"><div class="wrap split">
<div class="sticky">${contactCard()}
<div class="aside-card"><h2>Who Pam partners with</h2><ul><li>Real estate agents and brokers</li><li>Home builders and on-site sales teams</li><li>Financial advisors and wealth managers</li><li>CPAs and tax professionals</li><li>Divorce and estate attorneys</li><li>Insurance agents</li></ul></div>
</div>
<div class="prose">
${answer(`Pam Miller works with real estate agents, builders, financial advisors and CPAs across Dallas–Fort Worth who want their clients' financing handled carefully. Partners can expect pre-approvals based on reviewed documents, proactive milestone updates, direct access to Pam by phone, and a local processor and closer in the Frisco office.`)}
<h2>What can partners expect?</h2>
<ol class="steps">
<li><div><h3>Pre-approvals that hold up</h3><p>Credit, income and assets are reviewed before a letter goes out, so surprises are found before the contract, not after.</p></div></li>
<li><div><h3>Updates at every milestone</h3><p>You and your client hear from the team at application, appraisal, approval, clear to close and funding.</p></div></li>
<li><div><h3>A lender who picks up the phone</h3><p>When an offer is being written, Pam is reachable to update a letter or talk with the listing agent.</p></div></li>
<li><div><h3>Clients who understand their loan</h3><p>Borrowers who know what they are signing are calmer, close on time and refer their friends back to you.</p></div></li>
</ol>
<h2>How does Pam help specific types of clients?</h2>
<ul>
<li><strong>First-time buyers:</strong> education up front, low-down-payment options and Texas assistance programs.</li>
<li><strong>Self-employed and business owners:</strong> income analysis from tax returns, plus alternatives when returns understate cash flow.</li>
<li><strong>Clients in transition:</strong> bridge strategies for buying before selling, and qualifying on retirement or asset income.</li>
<li><strong>Investors:</strong> conventional and DSCR financing with realistic tax and insurance figures.</li>
</ul>
<h2>Frequently asked</h2>
${faq(partnerFaqs)}
</div>
</div></section>
${cta('Let\'s compare notes.', 'Coffee in Frisco or a quick call. Tell Pam about your business and the clients you serve.')}`,
};

/* --------------------------------------------------------------- CONTACT */
const contact = {
  path: '/contact/',
  title: 'Contact Pam Miller | Fairway Mortgage, Frisco, TX',
  desc: `Contact Frisco mortgage loan officer Pam Miller at ${PAM.phone} or ${PAM.email}. Office at ${BRANCH.street}, Frisco, TX.`,
  label: 'Contact',
  h1: 'Start a pre-approval or ask Pam a question',
  lede: 'Call, email or send a note. You will hear back from Pam or a member of her team, usually within one business day.',
  crumbs: [['Contact', '/contact/']],
  body: `<section class="sec"><div class="wrap split split--even">
<div>
${facts([
  ['Pam direct', `<a href="tel:${PAM.phoneE164}">${PAM.phone}</a>`],
  ['Email', `<a href="mailto:${PAM.email}">${PAM.email}</a>`],
  ['Branch phone', `<a href="tel:${BRANCH.phoneE164}">${BRANCH.phone}</a>`],
  ['Branch fax', BRANCH.fax],
  ['Office', `<address>${FAIRWAY.name}<br>${BRANCH.street}<br>${BRANCH.city}, ${BRANCH.state} ${BRANCH.zip}<br><a href="${BRANCH.map}" rel="noopener">Get directions →</a></address>`],
  ['Apply online', `<a href="${PAM.apply}" target="_blank" rel="noopener">Start Pam's secure online application →</a>`],
  ['NMLS', `Pam Miller #${PAM.nmls} · Fairway #${FAIRWAY.nmls}`],
])}
<div class="note"><h3>What to have handy</h3>
<ul><li>A rough idea of your price range and timeline</li><li>Your estimated credit score, if you know it</li><li>How you are paid: salary, hourly, self-employed or retired</li><li>How much you have set aside for a down payment</li></ul></div>
</div>
<div>
<h2 style="font-size:2rem">Send a note</h2>
<form id="contact-form" class="form" data-to="${PAM.email}" data-endpoint="${SITE.formEndpoint}">
<label class="full">Full name<input name="name" autocomplete="name" required></label>
<label>Phone<input name="phone" type="tel" autocomplete="tel" required></label>
<label>Email<input name="email" type="email" autocomplete="email" required></label>
<label>I am looking to<select name="goal"><option>Buy my first home</option><option>Buy my next home</option><option>Refinance</option><option>Buy an investment property</option><option>Downsize or relocate</option><option>Partner with Pam (agent or advisor)</option><option>Something else</option></select></label>
<label>Timeline<select name="timeline"><option>As soon as possible</option><option>1 to 3 months</option><option>3 to 6 months</option><option>6+ months</option><option>Just researching</option></select></label>
<label class="full">Your question or situation<textarea name="message" rows="5"></textarea></label>
<label class="full" style="position:absolute;left:-9999px" aria-hidden="true">Company<input name="company" tabindex="-1" autocomplete="off"></label>
<p class="small full">Please do not include Social Security numbers, account numbers or other sensitive details. By sending this note you agree that Pam Miller's team may contact you by phone, text or email about your inquiry.</p>
<div class="full"><button class="btn" type="submit">Send to Pam ${arrow}</button></div>
<p id="form-msg" class="form-msg full" role="status" tabindex="-1" hidden></p>
</form>
</div>
</div></section>
${band('bonnets', 'Good questions get straight answers.')}`,
};

/* ----------------------------------------------------------------- LEGAL */
const legal = {
  path: '/licensing/',
  title: 'Licensing, Disclosures & Photo Credits | Pam Miller',
  desc: `Licensing and legal information for Pam Miller, NMLS #${PAM.nmls}, and Fairway Independent Mortgage Corporation, NMLS #${FAIRWAY.nmls}, plus photo credits.`,
  label: 'Legal',
  h1: 'Licensing and disclosures',
  crumbs: [['Licensing', '/licensing/']],
  body: `<section class="sec"><div class="wrap prose">
<h2>Licensing</h2>
${facts([
  ['Loan originator', `${PAM.legalName}, NMLS #${PAM.nmls}. Licensed in Texas and Oklahoma (OK license #${PAM.okLicense}).`],
  ['Company', `${FAIRWAY.name}, NMLS #${FAIRWAY.nmls}. ${FAIRWAY.address}. ${FAIRWAY.phone}.`],
  ['Branch', `${addr}. ${BRANCH.phone}.`],
  ['Verify a license', `<a href="https://www.nmlsconsumeraccess.org/" rel="noopener">www.nmlsconsumeraccess.org</a>`],
])}
<h2>Texas consumers</h2>
<p>Consumers wishing to file a complaint against a mortgage banker or a licensed residential mortgage loan originator should refer to the <a href="${FAIRWAY.texasNotice}" rel="noopener">Texas Consumer Complaint and Recovery Fund Notice</a> published by Fairway Independent Mortgage Corporation, which explains how to contact the Texas Department of Savings and Mortgage Lending.</p>
<h2>General disclosures</h2>
<p>Copyright © ${SITE.updated.slice(0, 4)} ${FAIRWAY.name}. NMLS #${FAIRWAY.nmls}. All rights reserved. This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply. Equal Housing Opportunity.</p>
<p>A pre-approval is based on a review of income and asset information provided by the borrower and a credit report. It is not a commitment to lend, and final approval is subject to underwriting, appraisal and other conditions.</p>
<p>Content on this website is provided for general educational purposes and is not legal, tax or financial advice. Down payment assistance programs are administered by third parties and are subject to their eligibility requirements and available funding. VA loans are subject to individual VA entitlement and eligibility. FHA and VA loans are not endorsed or made by HUD, FHA, the VA or any government agency.</p>
<p>Client ratings are sourced from Experience.com as displayed on Fairway.com in ${PAM.ratingAsOf} and may change.</p>
<p>See also Fairway's <a href="${FAIRWAY.privacy}" rel="noopener">Privacy Policy</a> and <a href="${FAIRWAY.disclosures}" rel="noopener">Legal Disclosures</a>.</p>
<h2 id="photo-credits">Photo credits</h2>
<ul>${Object.values(PHOTOS).map((p) => `<li><a href="${p.src}" rel="noopener nofollow">${p.credit}</a> Cropped and toned for this site.</li>`).join('')}
<li>Team portraits courtesy of Fairway Independent Mortgage Corporation.</li></ul>
</div></section>`,
};

/* ------------------------------------------------------------ LOAN PAGES */
const loanIndex = {
  path: '/loans/',
  title: 'Home Loan Options in Frisco, TX | Pam Miller, Fairway',
  desc: 'Compare home loan options in Frisco and DFW: first-time buyer, VA, FHA, conventional, jumbo, investment, refinance and downsizing guides from Pam Miller.',
  label: 'Loan options',
  h1: 'Home loan options for Texas buyers and homeowners',
  lede: 'Eight guides, each starting with a short answer and followed by the requirements, costs and Texas rules that matter.',
  crumbs: [['Loan Options', '/loans/']],
  body: `<section class="sec"><div class="wrap">
${answer(`Pam Miller's team at Fairway in Frisco offers conventional, FHA, VA and jumbo mortgages, first-time homebuyer programs, investment property and DSCR loans, refinancing, and financing strategies for relocation and downsizing. The right loan depends on your credit score, down payment, how the property will be used and how long you plan to keep it.`)}
${loanGrid()}
<header class="sec-head" style="margin-top:4rem"><h2>How do the main loan types compare?</h2></header>
<div class="tbl-wrap"><table>
<caption>Loan types at a glance (2026)</caption>
<thead><tr><th scope="col">Loan</th><th scope="col">Minimum down</th><th scope="col">Typical minimum credit score</th><th scope="col">Mortgage insurance</th><th scope="col">Best for</th></tr></thead>
<tbody>
<tr><th scope="row"><a href="/loans/conventional-loans/">Conventional</a></th><td>3% to 5%</td><td>About 620</td><td>PMI under 20% down, removable</td><td>Solid credit; second homes and rentals</td></tr>
<tr><th scope="row"><a href="/loans/fha-loans/">FHA</a></th><td>3.5%</td><td>580</td><td>Upfront and annual premiums</td><td>Building or rebuilding credit</td></tr>
<tr><th scope="row"><a href="/loans/va-loans/">VA</a></th><td>0%</td><td>Set by lender</td><td>None; one-time funding fee</td><td>Eligible veterans and service members</td></tr>
<tr><th scope="row"><a href="/loans/jumbo-loans/">Jumbo</a></th><td>10% to 20%+</td><td>About 700</td><td>Varies by program</td><td>Loans above $832,750</td></tr>
<tr><th scope="row"><a href="/loans/investment-property-loans/">Investment / DSCR</a></th><td>15% to 25%</td><td>About 620 to 680</td><td>Usually none at 20%+ down</td><td>Rental properties</td></tr>
</tbody></table></div>
<p class="small">General guidelines only. Lenders may apply additional requirements, and program terms change.</p>
</div></section>
${cta('Not sure which loan fits?', 'That is the point of a first conversation. Pam will price more than one option and explain the trade-offs.')}`,
};

const loanPages = loans.map((l) => ({
  path: `/loans/${l.slug}/`,
  title: `${l.title} | Pam Miller`,
  desc: l.desc,
  label: l.name,
  h1: l.h1,
  crumbs: [['Loan Options', '/loans/'], [l.name, `/loans/${l.slug}/`]],
  faqs: l.faqs,
  byline: true,
  service: l.name,
  body: `<section class="sec"><div class="wrap split" style="grid-template-columns:minmax(0,7fr) minmax(0,3fr)">
<article class="prose">
${answer(l.answer)}
<h2>Key facts</h2>
${facts(l.facts)}
${l.sections.map(([h, html]) => `<h2>${h}</h2>${html}`).join('\n')}
<h2>Frequently asked questions</h2>
${faq(l.faqs)}
<p class="small" style="margin-top:2rem">General information as of ${SITE.updatedHuman}. Not a commitment to lend. Guidelines change and additional requirements may apply. Contact Pam for details on your situation.</p>
</article>
<aside class="sticky">${contactCard()}${loanList(l.slug)}</aside>
</div></section>
${cta()}`,
}));

const notFound = {
  path: '/404.html',
  title: 'Page Not Found | Pam Miller',
  desc: 'That page could not be found.',
  label: 'Error 404',
  h1: 'That page is not here',
  lede: 'The link may be out of date. Try one of these instead.',
  noindex: true,
  crumbs: [],
  body: `<section class="sec"><div class="wrap">${loanGrid()}<div class="btn-row"><a class="btn" href="/">Back to the home page ${arrow}</a></div></div></section>`,
};

export const pages = [home, loanIndex, ...loanPages, answers, about, team, areas, partners, contact, legal, notFound];
