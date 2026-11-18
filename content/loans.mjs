// Loan program pages. Each entry renders to /loans/<slug>/.
// Figures that change every year are labelled with the year so they are easy to find and update.

export const loans = [
  {
    slug: 'first-time-homebuyer',
    name: 'First-Time Homebuyer Loans',
    short: 'First-Time Buyers',
    card: 'Low down payment options and Texas assistance programs, explained one step at a time.',
    title: 'First-Time Homebuyer Loans in Frisco, TX',
    desc: 'How first-time buyers in Frisco and DFW can buy with 0% to 3.5% down, what credit score is needed, and which Texas down payment assistance programs can help.',
    h1: 'First-time homebuyer loans in Frisco and North Texas',
    answer: `First-time buyers in Texas do not need 20% down. Common options are a conventional loan with as little as 3% down, an FHA loan with 3.5% down, or a VA loan with no down payment for eligible veterans. Texas programs from TSAHC and TDHCA can also help with the down payment and closing costs for buyers who qualify.`,
    facts: [
      ['Lowest down payment', '0% (VA, eligible borrowers), 3% (conventional), 3.5% (FHA)'],
      ['Typical minimum credit score', '580 for FHA with 3.5% down; about 620 for most conventional loans'],
      ['Texas assistance', 'TSAHC and TDHCA programs, subject to income and purchase price limits'],
      ['First step', 'A pre-approval, which shows sellers what you can borrow'],
      ['Who to call', 'Pam Miller, NMLS #267016, 972-677-9223'],
    ],
    sections: [
      ['What counts as a first-time homebuyer?', `<p>Most programs define a first-time homebuyer as someone who has not owned a principal residence in the past three years. That means you may qualify again even if you owned a home years ago. Some programs, such as those for veterans and certain public-service professions in Texas, do not require first-time status at all.</p>`],
      ['How much do I need for a down payment?', `<p>Less than most people expect. The right number depends on the loan type:</p>
<div class="tbl-wrap"><table>
<caption>Down payment by loan type</caption>
<thead><tr><th scope="col">Loan type</th><th scope="col">Minimum down</th><th scope="col">Good fit when</th></tr></thead>
<tbody>
<tr><th scope="row">Conventional</th><td>3% for qualifying first-time buyers</td><td>Credit is solid and you want mortgage insurance that can later be removed</td></tr>
<tr><th scope="row">FHA</th><td>3.5% with a 580+ credit score</td><td>Credit is still being built or debt-to-income is higher</td></tr>
<tr><th scope="row">VA</th><td>0% for eligible borrowers</td><td>You are a veteran, service member or eligible surviving spouse</td></tr>
<tr><th scope="row">USDA</th><td>0% in eligible areas</td><td>The home is in a qualifying rural or outer-suburban area and income is within limits</td></tr>
</tbody></table></div>
<p>You will also need funds for closing costs and prepaid items such as homeowners insurance and property taxes. Gift funds from family, seller credits and assistance programs can often cover part of that amount.</p>`],
      ['What Texas down payment assistance is available?', `<p>Two statewide agencies run the main programs. The <strong>Texas State Affordable Housing Corporation (TSAHC)</strong> offers Home Sweet Texas and Homes for Texas Heroes, and the <strong>Texas Department of Housing and Community Affairs (TDHCA)</strong> offers My First Texas Home and My Choice Texas Home. They provide assistance as a grant or a second lien, paired with a 30-year fixed-rate mortgage.</p>
<p>Each program has its own income limits, purchase price limits and credit requirements, and funding can change. Pam checks eligibility during pre-approval and compares the assisted option with a standard loan side by side, because assistance sometimes comes with a higher interest rate.</p>`],
      ['How does Pam work with first-time borrowers?', `<p>Slowly and precisely, on purpose. Pam walks through every line of the Loan Estimate, explains what each number means, and shows more than one way to structure the loan. Clients are encouraged to ask the same question twice. The goal is that by closing day you can explain your own mortgage to someone else.</p>`],
    ],
    faqs: [
      ['Can I buy a house in Texas with no money down?', `Yes, in some cases. VA loans allow eligible veterans and service members to buy with no down payment, and USDA loans do the same in eligible areas. Other buyers may combine a 3% to 3.5% down payment with a Texas assistance program that covers some or all of it. You will still need to plan for closing costs.`],
      ['What credit score do I need to buy my first home?', `FHA guidelines allow a 3.5% down payment with a credit score of 580 or higher, and most conventional loans start at about 620. Lenders can set stricter requirements, and a higher score usually means a lower rate and cheaper mortgage insurance. If your score is not there yet, Pam can outline specific steps to improve it.`],
      ['How long does it take to get pre-approved?', `Once your income, asset and identification documents are in, a pre-approval can often be issued within a day or two. It is based on a review of your credit, income and assets, and it is not a commitment to lend until the full loan is underwritten and approved.`],
    ],
  },
  {
    slug: 'va-loans',
    name: 'VA Home Loans',
    short: 'VA Loans',
    card: 'No down payment and no monthly mortgage insurance for eligible veterans and service members.',
    title: 'VA Home Loans in Frisco, TX',
    desc: 'VA loans in Frisco and DFW: who is eligible, how the funding fee works, zero down payment rules and how the Texas cash-out limit applies to VA refinances.',
    h1: 'VA home loans for Texas veterans and military families',
    answer: `A VA loan is a mortgage guaranteed by the U.S. Department of Veterans Affairs for eligible veterans, active-duty service members, Guard and Reserve members and some surviving spouses. It allows a purchase with no down payment and has no monthly mortgage insurance. Most borrowers pay a one-time VA funding fee, which can be financed into the loan.`,
    facts: [
      ['Down payment', '0% for eligible borrowers with full entitlement'],
      ['Monthly mortgage insurance', 'None'],
      ['Funding fee', 'One-time fee set by the VA; waived for veterans receiving VA disability compensation and certain others'],
      ['Occupancy', 'Primary residence'],
      ['Document to start', 'Certificate of Eligibility (COE), which Pam can request for you'],
    ],
    sections: [
      ['Who is eligible for a VA loan?', `<p>Eligibility is based on length and type of service. In general, veterans, active-duty service members, National Guard and Reserve members who meet service requirements, and certain surviving spouses can qualify. The VA confirms eligibility with a <strong>Certificate of Eligibility</strong>. Pam's team can usually pull the COE electronically during pre-approval.</p>`],
      ['What does a VA loan cost?', `<p>There is no monthly mortgage insurance, which is the biggest monthly savings compared with FHA or low-down-payment conventional loans. Instead, most borrowers pay a one-time <strong>VA funding fee</strong>. The percentage depends on your down payment and whether you have used the benefit before. Veterans who receive VA disability compensation, Purple Heart recipients on active duty and eligible surviving spouses are exempt.</p>
<p>The VA also limits certain closing costs that veterans can be charged, and sellers are allowed to pay some costs on the buyer's behalf.</p>`],
      ['Can I use a VA loan more than once?', `<p>Yes. The VA benefit is reusable. You can restore entitlement after selling a home and paying off the VA loan, and in some situations you can hold two VA loans at once using remaining entitlement. This is common for military families relocating to or from North Texas.</p>`],
      ['What is different about VA loans in Texas?', `<p>Texas law limits cash-out refinances on a homestead to 80% of the home's value, and that limit applies to VA cash-out refinances too. VA purchase loans and VA Interest Rate Reduction Refinance Loans (IRRRL) are not affected by that cap. Texas veterans may also want to compare programs from the Texas Veterans Land Board.</p>`],
    ],
    faqs: [
      ['Is there a loan limit on VA loans?', `Veterans with full entitlement have no VA-imposed loan limit, so there is no down payment requirement at any price as long as the borrower qualifies and the home appraises. Borrowers with reduced entitlement may need a down payment on higher-priced homes.`],
      ['Can I buy a home above conforming loan limits with a VA loan?', `Yes. With full entitlement, a VA loan can exceed the conforming loan limit without a down payment, subject to lender approval, income and credit qualification, and the appraisal.`],
      ['Do VA loans take longer to close?', `Not necessarily. A VA loan follows a similar timeline to other loan types when documents are submitted promptly. The VA appraisal is ordered through the VA system, so ordering it early helps keep the closing on schedule.`],
    ],
  },
  {
    slug: 'fha-loans',
    name: 'FHA Loans',
    short: 'FHA Loans',
    card: 'Flexible credit guidelines and 3.5% down, insured by the Federal Housing Administration.',
    title: 'FHA Loans in Frisco, TX',
    desc: 'FHA loan requirements for Frisco and DFW buyers: 3.5% down with a 580 credit score, how mortgage insurance works and when FHA beats a conventional loan.',
    h1: 'FHA loans with flexible credit and 3.5% down',
    answer: `An FHA loan is a mortgage insured by the Federal Housing Administration. It allows a down payment of 3.5% with a credit score of 580 or higher, and 10% down with a score from 500 to 579. FHA loans require an upfront mortgage insurance premium of 1.75% of the loan amount plus an annual premium paid monthly.`,
    facts: [
      ['Minimum down payment', '3.5% with a 580+ score; 10% with a 500–579 score'],
      ['Upfront mortgage insurance', '1.75% of the loan amount, usually financed into the loan'],
      ['Annual mortgage insurance', 'Paid monthly; the rate depends on loan size, term and down payment'],
      ['Occupancy', 'Primary residence, one to four units'],
      ['Loan limit', 'Set by county each year by HUD'],
    ],
    sections: [
      ['Who is an FHA loan best for?', `<p>FHA is often the stronger choice for buyers whose credit score is below roughly 680, who have a higher debt-to-income ratio, or who are rebuilding after a past credit event. FHA pricing is less sensitive to credit score than conventional pricing, so the monthly payment can be lower even though mortgage insurance is required.</p>`],
      ['How does FHA mortgage insurance work?', `<p>FHA charges two premiums. The <strong>upfront premium</strong> is 1.75% of the loan amount and is typically added to the loan. The <strong>annual premium</strong> is divided into monthly payments. If you put down less than 10%, the annual premium lasts for the life of the loan; with 10% or more down it ends after 11 years. Many borrowers later refinance into a conventional loan to drop mortgage insurance once they have enough equity.</p>`],
      ['FHA or conventional: which costs less?', `<p>It depends on your credit score, down payment and how long you will keep the loan. Pam runs both options with real numbers so you can compare the total monthly payment, cash needed at closing, and the cost over the years you expect to stay in the home.</p>
<div class="tbl-wrap"><table>
<caption>FHA compared with conventional</caption>
<thead><tr><th scope="col"></th><th scope="col">FHA</th><th scope="col">Conventional</th></tr></thead>
<tbody>
<tr><th scope="row">Minimum down</th><td>3.5%</td><td>3% to 5%</td></tr>
<tr><th scope="row">Typical minimum score</th><td>580</td><td>About 620</td></tr>
<tr><th scope="row">Mortgage insurance</th><td>Upfront and annual premiums; often for the life of the loan</td><td>Monthly PMI under 20% down; can be removed</td></tr>
<tr><th scope="row">Second homes and rentals</th><td>Not allowed</td><td>Allowed</td></tr>
</tbody></table></div>`],
    ],
    faqs: [
      ['Is FHA only for first-time buyers?', `No. Any borrower who qualifies can use an FHA loan to buy or refinance a primary residence. You generally cannot have more than one FHA loan at a time.`],
      ['Can I get an FHA loan after bankruptcy or foreclosure?', `Often, yes, after a waiting period. FHA guidelines generally call for two years after a Chapter 7 discharge and three years after a foreclosure, along with re-established credit. Individual circumstances vary, so it is worth a conversation.`],
      ['Does an FHA loan require a special appraisal?', `FHA appraisals confirm value and also check that the home meets HUD's minimum property standards for safety, security and soundness. Most homes in good condition pass without issue.`],
    ],
  },
  {
    slug: 'conventional-loans',
    name: 'Conventional Loans',
    short: 'Conventional',
    card: 'The most common mortgage, for primary homes, second homes and rental properties.',
    title: 'Conventional Loans in Frisco, TX',
    desc: 'Conventional mortgage basics for Frisco and DFW buyers: down payment from 3%, how PMI is removed, 2026 conforming loan limits and fixed versus adjustable rates.',
    h1: 'Conventional loans for homes across DFW',
    answer: `A conventional loan is a mortgage that is not insured by a government agency and usually follows Fannie Mae and Freddie Mac guidelines. It requires as little as 3% down for qualifying first-time buyers, and private mortgage insurance (PMI) applies only when the down payment is under 20%. For 2026 the conforming loan limit for a one-unit home in Texas is $832,750.`,
    facts: [
      ['Minimum down payment', '3% (qualifying first-time buyers), 5% otherwise; 10%+ for second homes; 15%+ for most rentals'],
      ['Typical minimum credit score', 'About 620'],
      ['Mortgage insurance', 'PMI under 20% down; removable once you reach enough equity'],
      ['2026 conforming limit', '$832,750 for a one-unit home in all Texas counties'],
      ['Terms', 'Fixed rates from 10 to 30 years, and adjustable-rate options'],
    ],
    sections: [
      ['When is a conventional loan the right choice?', `<p>Conventional financing tends to win when your credit score is in the upper 600s or higher, when you can put at least 5% down, or when you are buying a second home or investment property. With 20% down there is no mortgage insurance at all.</p>`],
      ['How do I get rid of PMI?', `<p>On a conventional loan you can ask your servicer to cancel PMI once your loan balance reaches 80% of the home's original value, and it must end automatically at 78% if payments are current. Paying extra principal, or a new appraisal after the home has gained value, can get you there sooner. This is a key difference from FHA, where mortgage insurance often lasts for the life of the loan.</p>`],
      ['Fixed rate or adjustable rate?', `<p>A <strong>fixed-rate mortgage</strong> keeps the same interest rate and principal-and-interest payment for the whole term. An <strong>adjustable-rate mortgage (ARM)</strong> starts with a rate that is fixed for a set period, commonly 5, 7 or 10 years, and then adjusts periodically within limits. An ARM can make sense when you expect to move or refinance before the fixed period ends. Pam shows both, including the worst-case payment on the ARM, so the choice is informed.</p>`],
      ['What is the conforming loan limit?', `<p>The Federal Housing Finance Agency sets the maximum loan size Fannie Mae and Freddie Mac will purchase. For 2026 that limit is <strong>$832,750</strong> for a one-unit home in every Texas county. The limit is updated each year, usually in late November for the following January. Loans above the limit are <a href="/loans/jumbo-loans/">jumbo loans</a>.</p>`],
    ],
    faqs: [
      ['Can I buy with less than 20% down on a conventional loan?', `Yes. Qualifying first-time buyers can put down as little as 3%, and most other buyers can put down 5%. PMI is added to the monthly payment until you have enough equity to remove it.`],
      ['Does a conventional loan need a higher credit score than FHA?', `Usually. Most conventional loans require a score of about 620 or higher, and pricing improves noticeably as the score rises. Borrowers below roughly 680 should compare an FHA quote alongside the conventional one.`],
      ['Can a seller pay my closing costs on a conventional loan?', `Yes, within limits that depend on your down payment and whether the home is a primary residence, second home or investment property. Seller credits can be used for closing costs, prepaid items and in some cases a temporary rate buydown.`],
    ],
  },
  {
    slug: 'jumbo-loans',
    name: 'Jumbo & Luxury Home Loans',
    short: 'Jumbo & Luxury',
    card: 'Financing above the conforming limit for higher-priced homes in Frisco, Prosper and Plano.',
    title: 'Jumbo Loans for Luxury Homes in Frisco, TX',
    desc: 'Jumbo mortgage guidance for luxury homes in Frisco, Prosper, Plano and DFW: what counts as jumbo in 2026, down payment, reserves and documentation.',
    h1: 'Jumbo loans for luxury homes in North Texas',
    answer: `A jumbo loan is a mortgage larger than the conforming loan limit, which is $832,750 for a one-unit home in Texas for 2026. Jumbo loans are not sold to Fannie Mae or Freddie Mac, so each lender sets its own rules. Expect stronger credit, a larger down payment, fuller documentation and cash reserves after closing.`,
    facts: [
      ['Jumbo threshold (2026)', 'Loan amounts above $832,750 on a one-unit home in Texas'],
      ['Down payment', 'Commonly 10% to 20% or more, depending on the program and loan size'],
      ['Credit', 'Typically 700+ for the best options'],
      ['Reserves', 'Several months of payments in verified assets after closing'],
      ['Property types', 'Primary homes, second homes and some investment properties'],
    ],
    sections: [
      ['How is a jumbo loan different from a conventional loan?', `<p>The paperwork looks similar, but the underwriting is more detailed. Lenders usually want to see stronger credit scores, a lower debt-to-income ratio and documented reserves. Some programs require a second appraisal on larger loan amounts. Interest rates on jumbo loans are set independently of conforming rates, and at times they are comparable or even lower.</p>`],
      ['How should self-employed and high-income buyers prepare?', `<p>Many luxury buyers in Frisco and Collin County are business owners, executives with stock compensation, or professionals with variable income. Preparation matters more than usual:</p>
<ul>
<li>Have two years of personal and business tax returns ready, plus a year-to-date profit and loss statement if you are self-employed.</li>
<li>Document bonus, commission and restricted stock income with a history of receipt.</li>
<li>Keep large deposits traceable, and avoid moving money between accounts during the loan.</li>
<li>Ask about alternatives such as bank statement programs if tax returns do not reflect your real cash flow.</li>
</ul>`],
      ['Can I avoid a jumbo loan?', `<p>Sometimes. A larger down payment can bring the loan under the conforming limit, or the financing can be split into a conforming first mortgage and a second lien. Eligible veterans with full entitlement can use a <a href="/loans/va-loans/">VA loan</a> above the conforming limit without a down payment. Pam prices each structure so you can see which costs less overall.</p>`],
    ],
    faqs: [
      ['What is the jumbo loan limit in Frisco, TX?', `There is no upper limit set by regulation. A loan is considered jumbo when it exceeds the conforming limit, which is $832,750 for a one-unit home in Collin and Denton counties for 2026. Maximum loan sizes above that depend on the lender and program.`],
      ['Are jumbo rates higher than conventional rates?', `Not always. Jumbo rates are set by a different market than conforming loans. Depending on conditions and the borrower's profile, they can be higher, similar or lower. The only way to know is to compare quotes for your specific scenario.`],
      ['How much do I need in reserves for a jumbo loan?', `It varies by program, loan size and property type. Many jumbo programs ask for six to twelve months of housing payments in verified liquid or retirement assets after closing, and more for second homes or investment properties.`],
    ],
  },
  {
    slug: 'investment-property-loans',
    name: 'Investment Property Loans',
    short: 'Investment',
    card: 'Conventional and DSCR financing for rental homes and small portfolios.',
    title: 'Investment Property Loans in Frisco & DFW',
    desc: 'How to finance a rental property in Frisco and Dallas-Fort Worth: down payment, reserves, using rental income to qualify and when a DSCR loan makes sense.',
    h1: 'Investment property loans for DFW rentals',
    answer: `Investment property loans finance homes you rent out rather than live in. A conventional investment loan generally requires at least 15% down on a single-family rental, with 20% to 25% down giving better pricing. Investors who prefer to qualify on the property's rent instead of personal income can use a DSCR loan.`,
    facts: [
      ['Down payment', 'Typically 15% to 25% depending on the loan type and number of units'],
      ['Rates', 'Higher than primary-residence rates because the risk is higher'],
      ['Reserves', 'Usually six months or more of payments per financed property'],
      ['Rental income', 'Can often be counted using a lease or an appraiser\'s market rent estimate'],
      ['DSCR option', 'Qualify primarily on rent versus the monthly payment'],
    ],
    sections: [
      ['What are the two main ways to finance a rental?', `<div class="tbl-wrap"><table>
<caption>Conventional compared with DSCR</caption>
<thead><tr><th scope="col"></th><th scope="col">Conventional investment loan</th><th scope="col">DSCR loan</th></tr></thead>
<tbody>
<tr><th scope="row">Qualifies on</th><td>Your personal income, debts and credit</td><td>The property's rent compared with its payment</td></tr>
<tr><th scope="row">Documentation</th><td>Tax returns, pay stubs, bank statements</td><td>Lease or market rent schedule, credit and assets</td></tr>
<tr><th scope="row">Best for</th><td>Investors with strong documented income and a few properties</td><td>Self-employed investors, larger portfolios, purchases in an LLC</td></tr>
<tr><th scope="row">Pricing</th><td>Usually lower</td><td>Usually higher, with more flexibility</td></tr>
</tbody></table></div>
<p>DSCR stands for debt service coverage ratio: the monthly rent divided by the monthly payment including taxes, insurance and any HOA dues. A ratio of 1.0 means the rent covers the payment.</p>`],
      ['What should Texas investors plan for?', `<p>Texas has no state income tax, but property taxes are a meaningful line item, and investment properties do not receive the homestead exemption. Insurance costs in North Texas reflect hail and wind exposure. Pam builds both into the payment estimate so the cash-flow math is realistic before you make an offer.</p>`],
      ['Can I use equity from my current home?', `<p>Yes. A cash-out refinance or home equity loan on your primary residence can fund a down payment. In Texas, borrowing against a homestead is limited to 80% of the home's value. See <a href="/loans/refinance/">refinancing in Texas</a> for how those rules work.</p>`],
    ],
    faqs: [
      ['How much do I need to put down on an investment property?', `Plan on at least 15% for a single-family rental with a conventional loan and 25% for two to four units. Putting down 20% to 25% generally improves the rate and avoids mortgage insurance. DSCR programs commonly start at 20% down.`],
      ['Can I use future rent to qualify?', `Often, yes. On a purchase, lenders can typically use a portion of the market rent determined by the appraiser, or a signed lease, to offset the new payment. How much counts depends on the program and your landlord experience.`],
      ['Is a second home the same as an investment property?', `No. A second home is for your own use for part of the year and usually carries better pricing and a lower down payment than a rental. A property you intend to rent out is an investment property, and it must be disclosed that way on the application.`],
    ],
  },
  {
    slug: 'refinance',
    name: 'Refinancing',
    short: 'Refinance',
    card: 'Lower a rate, change a term or use equity, with Texas cash-out rules explained.',
    title: 'Mortgage Refinance in Frisco, TX',
    desc: 'When refinancing makes sense for Frisco and DFW homeowners, how to calculate break-even, and how Texas 80% cash-out rules and the 12-day waiting period work.',
    h1: 'Refinancing a mortgage in Texas',
    answer: `Refinancing replaces your current mortgage with a new one to lower the rate, change the term, remove mortgage insurance or take cash from equity. It makes sense when the monthly savings will repay the closing costs within the time you expect to keep the home. In Texas, a cash-out refinance on a homestead is limited to 80% of the home's value.`,
    facts: [
      ['Rate-and-term refinance', 'Changes the rate or term without taking significant cash out'],
      ['Cash-out refinance', 'Texas homestead limit is 80% loan-to-value'],
      ['Texas waiting period', 'At least 12 days after application and required notice before a home equity closing'],
      ['Frequency', 'One Texas home equity loan closing per 12-month period'],
      ['Streamline options', 'FHA Streamline and VA IRRRL for existing FHA and VA loans'],
    ],
    sections: [
      ['How do I know if refinancing is worth it?', `<p>Use the break-even test. Divide the total closing costs by the monthly savings to get the number of months it takes to recover the cost. If you expect to keep the home and the loan longer than that, the refinance is likely worthwhile.</p>
<p><strong>Example:</strong> if closing costs are $4,800 and the new payment is $200 lower, break-even is 24 months. Pam also looks at the total interest paid, because resetting to a new 30-year term can cost more over time even when the payment drops.</p>`],
      ['What are the Texas cash-out refinance rules?', `<p>Texas protects homesteads through Article XVI, Section 50(a)(6) of the state constitution. The main rules for a home equity cash-out refinance are:</p>
<ul>
<li>The total of all loans on the home cannot exceed <strong>80% of its fair market value</strong>.</li>
<li>Closing cannot happen until at least <strong>12 days</strong> after you apply and receive the required notice.</li>
<li>You have a <strong>three-day right to cancel</strong> after closing.</li>
<li>Only <strong>one</strong> home equity loan can be closed on the property in any 12-month period.</li>
<li>The loan must close at the office of the lender, a title company or an attorney.</li>
<li>Lender fees are capped at 2% of the loan amount, not counting certain items such as the appraisal and title insurance.</li>
</ul>
<p>These rules apply to a primary residence. Investment properties and second homes follow standard cash-out guidelines.</p>`],
      ['What other reasons are there to refinance?', `<ul>
<li><strong>Remove mortgage insurance</strong> by moving from FHA to conventional once you have about 20% equity.</li>
<li><strong>Shorten the term</strong> from 30 years to 20 or 15 to pay less total interest.</li>
<li><strong>Move from an adjustable rate to a fixed rate</strong> before the adjustment period begins.</li>
<li><strong>Remove or add a borrower</strong> after a life change.</li>
<li><strong>Consolidate higher-interest debt</strong>, weighing the risk of securing that debt with your home.</li>
</ul>`],
    ],
    faqs: [
      ['How much equity do I need to refinance in Texas?', `For a rate-and-term refinance, some programs allow as little as 3% to 5% equity. For a Texas cash-out refinance on a homestead, you must keep at least 20% equity, because total borrowing is capped at 80% of the home's value.`],
      ['How much does it cost to refinance?', `Closing costs commonly run from about 2% to 5% of the loan amount, including lender fees, title, appraisal and prepaid items. The exact figures appear on your Loan Estimate, and some costs can be offset with a lender credit in exchange for a slightly higher rate.`],
      ['Should I wait for rates to drop further before refinancing?', `No one can reliably time rates. A practical approach is to decide in advance what payment or break-even period makes the refinance worthwhile, and to have your file ready so you can lock quickly when the market reaches that point.`],
    ],
  },
  {
    slug: 'downsizing-relocation',
    name: 'Downsizing & Relocation Loans',
    short: 'Downsizing & Relocation',
    card: 'Buying before you sell, moving to Texas and right-sizing in retirement.',
    title: 'Downsizing & Relocation Mortgages in Frisco, TX',
    desc: 'Mortgage options for downsizing in retirement or relocating to Frisco and DFW: buying before selling, qualifying on retirement income and Texas over-65 tax benefits.',
    h1: 'Loans for downsizing and relocating to North Texas',
    answer: `Downsizers and relocating buyers usually face the same question: how to buy the next home before or while selling the current one. Options include a bridge loan, a home equity line on the departing home, or a new mortgage that is later recast after the sale. Retirees can qualify using Social Security, pension, retirement distributions and, in some programs, assets.`,
    facts: [
      ['Buy before you sell', 'Bridge loan, HELOC on the current home, or recast after the sale'],
      ['Retirement income', 'Social Security, pensions, IRA and 401(k) distributions, annuities, investment income'],
      ['Asset-based qualifying', 'Some programs convert verified assets into qualifying income'],
      ['Texas tax notes', 'No state income tax; added homestead exemption and school tax ceiling at age 65'],
      ['Relocating for work', 'An offer letter can often be used before your start date'],
    ],
    sections: [
      ['How can I buy my next home before selling my current one?', `<ul>
<li><strong>Bridge loan:</strong> a short-term loan secured by your current home that funds the down payment on the next one. It is repaid when the first home sells.</li>
<li><strong>Home equity line of credit:</strong> opened on your current home before it is listed, then paid off at the sale.</li>
<li><strong>Buy, then recast:</strong> buy with a smaller down payment, then apply the sale proceeds to principal and have the lender re-amortize the loan to a lower payment. Many conventional loans allow this for a small fee.</li>
<li><strong>Sale contingency:</strong> an offer that depends on your sale closing. It costs nothing but is weaker in a competitive market.</li>
</ul>
<p>Pam maps the cash flow for each option, including whether you can qualify while carrying both payments for a short time.</p>`],
      ['How do retirees qualify for a mortgage?', `<p>Retirement does not prevent you from getting a mortgage. Lenders count stable income such as Social Security, pensions and annuities, along with regular distributions from retirement accounts. Non-taxable income can often be increased, or "grossed up," for qualifying purposes. If monthly income is modest but savings are substantial, some programs calculate income from assets.</p>
<p>Homeowners age 62 and older can also ask about reverse mortgage options, including using one to buy a home. These loans have specific costs and counseling requirements, so they deserve a careful conversation with family and advisors.</p>`],
      ['What should people moving to Texas know?', `<p>Texas has no state income tax, and housing costs in DFW are often lower than on the coasts. Property taxes are comparatively high and are usually collected monthly through an escrow account. Once the home is your primary residence you can file for a homestead exemption, and at age 65 you qualify for an additional exemption and a ceiling on school district taxes. Pam estimates taxes for the specific address so the payment is accurate.</p>`],
    ],
    faqs: [
      ['Can I get a 30-year mortgage if I am retired?', `Yes. Lenders cannot decline a loan because of age. You qualify the same way as any other borrower, using documented income, assets and credit. A 30-year term is available at any age.`],
      ['Do I have to sell my current home before buying in Frisco?', `No. If you qualify to carry both payments, or use a bridge loan or home equity line for the down payment, you can buy first and sell afterward. This avoids moving twice and lets you prepare the old home for sale after you move out.`],
      ['Can I get a mortgage with a job offer letter?', `In many cases, yes. Conventional guidelines allow closing before your start date when you have a signed, non-contingent offer letter and enough reserves. This is common for professionals relocating to employers in Frisco, Plano and Dallas.`],
    ],
  },
];
