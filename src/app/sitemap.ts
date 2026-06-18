import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.scalecompany.com.br';

  const routes = [
    '',
    '/google-ads-advogados',
    '/captacao-de-clientes-para-advogados',
    '/crm-advogados',
    '/scale-advogados',
    '/servicos',
    '/depoimentos',
    '/simulador-captacao',
    '/blog',
    '/blog/melhor-agencia-marketing-juridico',
    '/blog/palavras-chave-por-area',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
