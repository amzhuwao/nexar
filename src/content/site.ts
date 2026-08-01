export const company = {
  name: 'Nexar',
  fullName: 'Nexar Shipping Solutions',
  tagline: 'Freight that moves with precision across continents.',
  description:
    'Nexar Solutions is an international freight forwarding company based in Wegberg, Germany. Registered and approved at Mönchengladbach District Court and a member of the Aachen Chamber of Commerce and Industry.',
  address: {
    street: 'Kampstrasse 9',
    city: '41844 Wegberg',
    country: 'Germany',
  },
  phone: {
    mobile: '+49 163 186 9613',
    mobileHref: 'tel:+491631869613',
    tel: '+49 179 431 5062',
    telHref: 'tel:+491794315062',
  },
  email: 'info@nexarsolution.de',
  emailHref: 'mailto:info@nexarsolution.de',
  formEndpoint: 'https://formsubmit.co/info@nexarsolution.de',
  languages: ['English', 'German', 'Portuguese', 'Shona', 'Ndebele'],
  social: {
    facebook: 'https://www.facebook.com/Nexar-Shipping-Solutions-102949952227010/?ti=as',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Air Freight', href: '/services/air-freight' },
      { label: 'Sea Freight', href: '/services/sea-freight' },
      { label: 'Road Freight', href: '/services/road-freight' },
      { label: 'Customs Clearance', href: '/services/customs-clearance' },
      { label: 'Car Shipping & RORO', href: '/services/car-shipping' },
    ],
  },
  { label: 'Quote', href: '/quote' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = [
  {
    slug: 'air-freight',
    title: 'Air Freight',
    short:
      'Urgent, high-value, and time-sensitive cargo with daily and weekly departures worldwide.',
    image: '/images/air.jpg',
    href: '/services/air-freight',
  },
  {
    slug: 'sea-freight',
    title: 'Sea Freight',
    short:
      'Cost-effective ocean shipping for heavy cargo, containers, and door-to-door deliveries.',
    image: '/images/sea.jpg',
    href: '/services/sea-freight',
  },
  {
    slug: 'road-freight',
    title: 'Road Freight',
    short:
      'Reliable European road haulage with dedicated options for specialised consignments.',
    image: '/images/road.jpg',
    href: '/services/road-freight',
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance',
    short:
      'Import and export clearance across Europe and Africa with duty guidance and documentation.',
    image: '/images/customs.jpg',
    href: '/services/customs-clearance',
  },
  {
    slug: 'car-shipping',
    title: 'Car Shipping & RORO',
    short:
      'RoRo, LoLo, and container vehicle shipping with port coverage across Africa.',
    image: '/images/car.jpg',
    href: '/services/car-shipping',
  },
] as const;

export const whyUs = [
  'Customised logistical services',
  'Competitive pricing',
  'Partner agents across Europe and Africa',
  'Light and full-load haulage',
  'Advice on import duties and taxes',
  'Quotes on request with international coverage',
] as const;

export const quoteGoodsTypes = [
  'General cargo',
  'Vehicles / RORO',
  'Household effects',
  'Machinery / project cargo',
  'Pharmaceuticals / chemicals',
  'Other',
] as const;
