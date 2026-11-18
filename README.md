# Pam Miller Home Loans — website

Static website for Pam Miller (NMLS #267016) and the Fairway Frisco, TX mortgage team.

## Build

```bash
node build.mjs
```

Output goes to `public/` (not committed). No dependencies; Node 18+.
`vercel.json` is set up so Vercel builds and serves it as-is.

## Where things live

| Path | What |
| --- | --- |
| `content/site.mjs` | Names, NMLS IDs, phone numbers, ratings, domain, form endpoint. Change facts here once. |
| `content/loans.mjs` | The eight loan guides. |
| `content/pages.mjs` | Home, Answers, About, Team, Service Areas, Partners, Contact, Licensing. |
| `content/parts.mjs` | Shared HTML fragments. |
| `build.mjs` | Layout, JSON-LD, `sitemap.xml`, `robots.txt`, `llms.txt`. |
| `assets/` | CSS, JS, self-hosted fonts, images. |

## Before launch

1. Set the real domain in `SITE.url` (`content/site.mjs`).
2. Have Fairway compliance review all copy, disclosures and the Texas notice link.
3. Optionally set `SITE.formEndpoint` so the contact form posts to a CRM or form service. Without it, the form opens the visitor's email app addressed to Pam.
4. Update `SITE.updated`, review ratings and the yearly figures (conforming loan limit) whenever they change.

## Answer-engine optimization

- Every page opens with a short, self-contained answer and uses question headings.
- JSON-LD on every page: `FinancialService`/`LocalBusiness`, `Person`, `WebSite`, `WebPage`, `BreadcrumbList`, plus `FAQPage` and `FinancialProduct` where relevant.
- `llms.txt` is generated with key facts and every Q&A; `robots.txt` explicitly allows AI and search crawlers.
- Visible "written and reviewed by" bylines with NMLS ID and update date.

## Photo credits

Listed on `/licensing/#photo-credits`. Wikimedia Commons photos are CC0, CC BY 4.0 and CC BY-SA 4.0; team portraits are from Fairway.
