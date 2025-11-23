import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/auth/', '/carrito/', '/api/'],
      },
    ],
    sitemap: 'https://itservicespr.com/sitemap.xml',
  };
}
