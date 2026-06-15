export const SITE_URL = 'https://www.scalecompany.com.br';

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;

export const brand = {
  name: 'Scale',
  legalName: 'Scale Marketing Digital',
  url: SITE_URL,
  telephone: undefined as string | undefined,
  email: 'contato@scalecompany.com.br',
  logo: `${SITE_URL}/images/scale-logo.svg`,
  image: `${SITE_URL}/images/og-default.jpg`,
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  address: {
    streetAddress: 'Atendimento Nacional',
    addressLocality: 'Operacao Remota',
    addressRegion: 'BR',
    postalCode: '',
    addressCountry: 'BR',
  },
  areaServed: ['Brasil'],
  sameAs: [
    'https://www.instagram.com/scalecompany_/',
    'https://www.linkedin.com/company/scale-company-br/',
  ],
};

export function getCanonicalUrl(pathname: string, siteUrl = SITE_URL) {
  return new URL(pathname, siteUrl).href;
}
