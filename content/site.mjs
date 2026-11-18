// Single source of truth for names, numbers and links used across the site and its structured data.

export const SITE = {
  // TODO before launch: replace with the real domain. Used for canonical URLs, sitemap and schema.
  url: 'https://www.pammillerhomeloans.com',
  name: 'Pam Miller Home Loans',
  tagline: 'Fairway Independent Mortgage Corporation · Frisco, Texas',
  updated: '2026-11-18',
  updatedHuman: 'November 18, 2026',
  // Optional: form backend URL (Formspree, CRM webhook). Empty = the form opens the visitor's email app.
  formEndpoint: '',
};

export const PAM = {
  name: 'Pam Miller',
  legalName: 'Pamela Stuever Miller',
  title: 'Co-Branch Manager',
  nmls: '267016',
  email: 'pamm@fairwaymc.com',
  phone: '972-677-9223',
  phoneE164: '+19726779223',
  fax: '215-975-3545',
  licensed: ['Texas', 'Oklahoma'],
  okLicense: 'MLO05564',
  profile: 'https://www.fairway.com/lo/pamela-miller-267016',
  instagram: 'https://www.instagram.com/pammiesmiller/',
  nmlsLookup: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/267016',
  rating: '4.89',
  reviews: '486',
  ratingAsOf: 'November 2026',
};

export const BRANCH = {
  name: 'Fairway Independent Mortgage Corporation, Frisco Branch',
  street: '8000 Warren Parkway, Suite 206',
  city: 'Frisco',
  state: 'TX',
  zip: '75034',
  phone: '972-543-2403',
  phoneE164: '+19725432403',
  fax: '214-387-7780',
  map: 'https://maps.app.goo.gl/ZD246MC2qtTDwNUM8',
  page: 'https://www.fairway.com/branch/frisco-tx-8000-75034-415',
  rating: '4.83',
  reviews: '1,002',
};

export const FAIRWAY = {
  name: 'Fairway Independent Mortgage Corporation',
  nmls: '2289',
  address: '4750 S. Biltmore Lane, Madison, WI 53718',
  phone: '1-866-912-4800',
  url: 'https://www.fairway.com/',
  texasNotice: 'https://www.fairway.com/legal/texas-consumer-complaints',
  privacy: 'https://www.fairway.com/legal/privacy-policy',
  disclosures: 'https://www.fairway.com/legal/legal-disclosures',
  reviewsUrl: 'https://www.experience.com/reviews/company/fairway-independent-mortgage-corporation-1300',
};

export const TEAM = [
  {
    id: 'pam-miller', name: 'Pam Miller', legalName: 'Pamela Stuever Miller', role: 'Co-Branch Manager', nmls: '267016',
    phone: '972-677-9223', email: 'pamm@fairwaymc.com', img: 'pam-miller-portrait.webp', w: 387, h: 480,
    profile: 'https://www.fairway.com/lo/pamela-miller-267016', licensed: 'Texas and Oklahoma', rating: '4.89 from 486 reviews',
    bio: `Pam co-manages Fairway's Frisco branch and works directly with borrowers every day. She is known for being precise with numbers and patient with questions, which is why first-time buyers and their agents keep sending family and friends her way. Her practice covers first-time purchases, VA and FHA loans, luxury and jumbo financing, investment properties, refinancing, relocation and downsizing.`,
  },
  {
    id: 'gary-miller', name: 'Gary Miller', legalName: 'Gary Mitchell Miller', role: 'Co-Branch Manager', nmls: '268432',
    phone: '214-783-7732', email: '', img: 'gary-miller.webp', w: 315, h: 480,
    profile: 'https://www.fairway.com/lo/gary-miller-268432', licensed: 'Texas and Oklahoma', rating: '4.69 from 127 reviews',
    bio: `Gary leads the Frisco branch alongside Pam. He originates purchase and refinance loans across North Texas and Oklahoma and helps structure the more complex files that come through the office.`,
  },
  {
    id: 'john-stuever', name: 'John Stuever', legalName: 'John C Stuever II', role: 'Loan Officer', nmls: '268420',
    phone: '972-740-8092', email: '', img: 'john-stuever.webp', w: 401, h: 480,
    profile: 'https://www.fairway.com/lo/john-stuever-268420', licensed: 'Texas', rating: '4.91 from 389 reviews',
    bio: `John is a licensed loan officer serving buyers and homeowners throughout the Dallas–Fort Worth Metroplex, guiding clients from pre-approval through closing.`,
  },
  {
    id: 'robert-vernon', name: 'Robert Vernon', legalName: 'Robert Vernon', role: 'Loan Officer', nmls: '621482',
    phone: '469-223-1689', email: '', img: 'robert-vernon.webp', w: 500, h: 700,
    profile: 'https://www.fairway.com/lo/robert-vernon-621482', licensed: '', rating: '',
    bio: `Robert is a licensed loan officer at the Frisco branch, working with homebuyers and homeowners on purchase and refinance financing.`,
  },
];

export const AREAS = ['Frisco', 'Plano', 'McKinney', 'Prosper', 'Allen', 'Little Elm', 'The Colony', 'Celina', 'Lewisville', 'Carrollton', 'Richardson', 'Denton', 'Dallas', 'Fort Worth', 'Pottsboro & Lake Texoma'];

export const PHOTOS = {
  square: { file: 'frisco-square', w: 1600, h: 900, alt: 'Brick storefronts along Main Street at Frisco Square in Frisco, Texas', credit: 'Frisco Square, 2026. Photo via Wikimedia Commons, CC0.', src: 'https://commons.wikimedia.org/wiki/File:Frisco_Square_-_20261020.jpg' },
  hall: { file: 'frisco-municipal-center', w: 1600, h: 1067, alt: 'George A. Purefoy Municipal Center at Frisco Square, Frisco, Texas', credit: 'George A. Purefoy Municipal Center. Photo: Michael Barera, CC BY-SA 4.0.', src: 'https://commons.wikimedia.org/wiki/File:Frisco_June_2019_05_(George_A._Purefoy_Municipal_Center_and_Frisco_Square).jpg' },
  bonnets: { file: 'texas-bluebonnets', w: 1600, h: 1200, alt: 'Texas bluebonnets and Indian paintbrush in a field at sunset', credit: 'Bluebonnets and Indian paintbrush. Photo: 8bit12man, CC BY 4.0.', src: 'https://commons.wikimedia.org/wiki/File:Bluebonnets_and_Indian_Paintbrush_Field_Sunset.jpg' },
};
