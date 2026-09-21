import { site } from './site';
import type { Product } from './products';

const orgId = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/img/logo-1200.png`,
    description: 'Australian brand making blackout storage and gear bags for 4WD touring and camping.',
    email: site.email,
    telephone: site.phoneSchema,
    foundingDate: site.foundingYear,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: 'AU',
    },
    areaServed: { '@type': 'Country', name: 'Australia' },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ABN',
      value: site.abn,
    },
    sameAs: [site.social.instagram, site.social.youtube, site.social.facebook],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: `${site.url}/`,
    publisher: { '@id': orgId },
  };
}

export function productSchema(product: Product, path: string) {
  const url = `${site.url}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.name,
    description: product.intro,
    image: [
      `${site.url}/img/${product.slug}-1x1.jpg`,
      `${site.url}/img/${product.slug}-4x3.jpg`,
      `${site.url}/img/${product.slug}-16x9.jpg`,
    ],
    sku: product.sku,
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': orgId },
    material: product.material,
    color: product.color,
    weight: { '@type': 'QuantitativeValue', value: product.weightKg, unitCode: 'KGM' },
    additionalProperty: product.specs.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    })),
  };
}

export type Crumb = { name: string; item?: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.item ? { item: c.item } : {}),
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function blogPostingSchema(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image: string;
}) {
  const url = `${site.url}${opts.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@type': 'Person', name: opts.authorName },
    publisher: { '@id': orgId },
    image: opts.image,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}
