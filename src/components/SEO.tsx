import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.pixeladvant.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/img/logo/PixelAdvantlogo.jpg`;

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqSchema?: Array<{ question: string; answer: string }>;
  additionalSchemas?: object[];
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  article,
  breadcrumbs,
  faqSchema,
  additionalSchemas = [],
}: SEOProps) => {
  const fullTitle = title === 'Home' 
    ? 'Pixel Advant | GCC Setup & Consulting India | Global Capability Centre Services'
    : `${title} | Pixel Advant`;
  
  const canonicalUrl = canonical 
    ? `${SITE_URL}${canonical}` 
    : typeof window !== 'undefined' 
      ? `${SITE_URL}${window.location.pathname}`
      : SITE_URL;

  // Organization schema — sitewide
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pixel Advant',
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    description: 'Pixel Advant is a leading GCC setup and consulting company in India, helping MNCs establish, scale, and optimise Global Capability Centres.',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${SITE_URL}/contact`,
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/pixeladvant',
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Delhi NCR' },
    ],
    knowsAbout: [
      'GCC Setup', 'Global Capability Centre', 'GCC Consulting',
      'Talent Acquisition', 'Digital Engineering', 'Managed Services',
    ],
  };

  // ProfessionalService schema
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixel Advant',
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    description: 'End-to-end GCC setup, consulting, and management services in India for global enterprises.',
    areaServed: ['Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Delhi NCR', 'Mumbai'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GCC Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GCC Setup & Consulting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recruitment Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Engineering' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workspace Solutions' } },
      ],
    },
  };

  // WebSite + SearchAction schema (homepage only)
  const websiteSchema = canonical === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pixel Advant',
    url: SITE_URL,
    description: 'GCC Setup & Consulting in India | Pixel Advant',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  } : null;

  // BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.url}`,
    })),
  } : null;

  // FAQPage schema
  const faqPageSchema = faqSchema && faqSchema.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchema.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // Collect all schemas
  const allSchemas = [
    organizationSchema,
    professionalServiceSchema,
    websiteSchema,
    breadcrumbSchema,
    faqPageSchema,
    ...additionalSchemas,
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Pixel Advant" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Pixel Advant" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article meta (for blog posts) */}
      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}
      {article?.tags?.map((tag, i) => <meta key={i} property="article:tag" content={tag} />)}

      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
