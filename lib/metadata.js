import { SITE, SERVICES, BLOG_POSTS, PORTFOLIO_PROJECTS } from "@/lib/constants";

export function formatTitle(title) {
  if (!title) return SITE.name;
  return `${title} | ${SITE.name}`;
}

export function absoluteUrl(path = "") {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * @param {Object} overrides
 * @param {string} [overrides.title]          
 * @param {string} [overrides.description]    
 * @param {string} [overrides.path]         
 * @param {string} [overrides.ogImage]    
 * @param {string} [overrides.ogType]         
 * @param {string[]} [overrides.keywords]    
 * @param {boolean} [overrides.noIndex]    
 * @param {Object}  [overrides.openGraph]    
 * @param {Object}  [overrides.twitter]      
 * @returns {import("next").Metadata}
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  ogType = "website",
  keywords = [],
  noIndex = false,
  openGraph = {},
  twitter = {},
} = {}) {
  const resolvedTitle       = title ? formatTitle(title) : formatTitle(SITE.tagline);
  const resolvedDescription = description ?? SITE.description;
  const canonicalUrl        = absoluteUrl(path);
  const resolvedOgImage     = absoluteUrl(ogImage ?? SITE.ogImage);

  return {
    metadataBase: new URL(SITE.url),

    title:       resolvedTitle,
    description: resolvedDescription,

    keywords: [
      "web development", "mobile app development", "UI UX design",
      "cloud devops", "AI machine learning", "digital marketing",
      "software company India", "TriAxon Technologies",
      ...keywords,
    ],

    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },

    openGraph: {
      type:        ogType,
      url:         canonicalUrl,
      title:       resolvedTitle,
      description: resolvedDescription,
      siteName:    SITE.name,
      locale:      SITE.locale,
      images: [
        {
          url:   resolvedOgImage,
          width: 1200,
          height: 630,
          alt:   resolvedTitle,
        },
      ],
      ...openGraph,
    },

    twitter: {
      card:        "summary_large_image",
      title:       resolvedTitle,
      description: resolvedDescription,
      images:      [resolvedOgImage],
      creator:     "@triaxontech",
      site:        "@triaxontech",
      ...twitter,
    },

    icons: {
      icon:   SITE.favicon,
      apple:  "/apple-touch-icon.png",
    },
  };
}

export function buildOpenGraph({
  title,
  description,
  path = "/",
  ogImage,
  ogType = "website",
} = {}) {
  return {
    type:        ogType,
    url:         absoluteUrl(path),
    title:       title ? formatTitle(title) : formatTitle(SITE.tagline),
    description: description ?? SITE.description,
    siteName:    SITE.name,
    locale:      SITE.locale,
    images: [
      {
        url:    absoluteUrl(ogImage ?? SITE.ogImage),
        width:  1200,
        height: 630,
        alt:    title ?? SITE.name,
      },
    ],
  };
}

/**
 * @param {"organization"|"website"|"service"|"article"|"breadcrumb"} type
 * @param {Object} [data] - Optional overrides / extra fields
 * @returns {string} Serialised JSON-LD string
 */
export function buildJsonLd(type, data = {}) {
  const schemas = {
    organization: {
      "@context":    "https://schema.org",
      "@type":       "Organization",
      name:          SITE.name,
      url:           SITE.url,
      logo:          absoluteUrl(SITE.logo),
      email:         SITE.email,
      telephone:     SITE.phone,
      foundingDate:  String(SITE.foundedYear),
      description:   SITE.description,
      sameAs: [
        "https://linkedin.com/company/triaxon-tech",
        "https://twitter.com/triaxontech",
        "https://github.com/triaxon-tech",
        "https://instagram.com/triaxontech",
        "https://youtube.com/@triaxontech",
      ],
      address: {
        "@type":           "PostalAddress",
        streetAddress:     "4th Floor, Treasure Island Mall, MG Road",
        addressLocality:   "Indore",
        addressRegion:     "Madhya Pradesh",
        postalCode:        "452001",
        addressCountry:    "IN",
      },
      contactPoint: {
        "@type":       "ContactPoint",
        telephone:     SITE.phone,
        contactType:   "customer service",
        areaServed:    "Worldwide",
        availableLanguage: "English",
      },
      ...data,
    },

    website: {
      "@context":     "https://schema.org",
      "@type":        "WebSite",
      name:           SITE.name,
      url:            SITE.url,
      description:    SITE.description,
      potentialAction: {
        "@type":       "SearchAction",
        target:        `${SITE.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      ...data,
    },

    service: {
      "@context":    "https://schema.org",
      "@type":       "Service",
      provider: {
        "@type": "Organization",
        name:    SITE.name,
        url:     SITE.url,
      },
      areaServed:    "Worldwide",
      ...data,
    },

    article: {
      "@context":    "https://schema.org",
      "@type":       "Article",
      publisher: {
        "@type": "Organization",
        name:    SITE.name,
        logo: {
          "@type": "ImageObject",
          url:     absoluteUrl(SITE.logo),
        },
      },
      ...data,
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type":    "BreadcrumbList",
      itemListElement: (data.items ?? []).map((item, index) => ({
        "@type":   "ListItem",
        position:  index + 1,
        name:      item.name,
        item:      absoluteUrl(item.path),
      })),
    },
  };

  if (!schemas[type]) {
    throw new Error(`buildJsonLd: unsupported type "${type}". Use one of: ${Object.keys(schemas).join(", ")}`);
  }

  return JSON.stringify(schemas[type]);
}


export const PAGE_METADATA = {
  home: buildMetadata({
    path:        "/",
    description: SITE.description,
    keywords:    ["software development company", "tech agency India", "startup development"],
  }),

  about: buildMetadata({
    title:       "About Us",
    path:        "/about",
    description: `Learn how ${SITE.name} has been building world-class digital products since ${SITE.foundedYear}. Meet the team behind 150+ successful projects across 15+ countries.`,
    keywords:    ["about TriAxon", "tech company Indore", "software agency India"],
  }),

  services: buildMetadata({
    title:       "Our Services",
    path:        "/services",
    description: "Explore TriAxon's full suite of services: full-stack web, mobile apps, UI/UX design, cloud & DevOps, AI/ML, and digital marketing.",
    keywords:    ["IT services", "software services India", "web development services"],
  }),

  portfolio: buildMetadata({
    title:       "Portfolio",
    path:        "/portfolio",
    description: "Browse 150+ projects delivered by TriAxon — fintech dashboards, mobile apps, AI platforms, and enterprise e-commerce solutions.",
    keywords:    ["software portfolio", "case studies", "project showcase"],
  }),

  blog: buildMetadata({
    title:       "Blog",
    path:        "/blog",
    description: "Technical insights, engineering deep-dives, and product lessons from the TriAxon team.",
    keywords:    ["tech blog", "software engineering articles", "AI ML tutorials"],
  }),

  careers: buildMetadata({
    title:       "Careers",
    path:        "/careers",
    description: `Join the ${SITE.name} team. We're hiring engineers, designers, and AI specialists. Competitive pay, MacBook Pro, ₹30K learning budget, and remote-friendly culture.`,
    keywords:    ["jobs Indore", "software engineer jobs India", "tech careers"],
  }),

  contact: buildMetadata({
    title:       "Contact Us",
    path:        "/contact",
    description: `Get in touch with ${SITE.name}. Offices in Indore, Dubai, and London. Start your project today.`,
    keywords:    ["contact TriAxon", "hire developers", "get a quote"],
  }),

  privacy: buildMetadata({
    title:   "Privacy Policy",
    path:    "/privacy",
    noIndex: true,
  }),

  terms: buildMetadata({
    title:   "Terms of Service",
    path:    "/terms",
    noIndex: true,
  }),

  cookies: buildMetadata({
    title:   "Cookie Policy",
    path:    "/cookies",
    noIndex: true,
  }),
};

/**
 * @param {string} slug 
 */
export function buildServiceMetadata(slug) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return buildMetadata({ title: "Service Not Found", noIndex: true });

  return buildMetadata({
    title:       service.title,
    description: `${service.description} ${service.tagline}. Trusted by startups & enterprises worldwide.`,
    path:        service.href,
    keywords:    service.tags,
  });
}

/**
 * @param {string} slug 
 */
export function buildBlogMetadata(slug) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return buildMetadata({ title: "Post Not Found", noIndex: true });

  return buildMetadata({
    title:       post.title,
    description: post.excerpt,
    path:        `/blog/${post.slug}`,
    ogType:      "article",
    keywords:    [post.category, "tech blog", "software engineering"],
    openGraph: {
      type:            "article",
      publishedTime:   post.date,
      authors:         [post.author.name],
      section:         post.category,
    },
  });
}

/**
 * @param {string} slug 
 */
export function buildPortfolioMetadata(slug) {
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return buildMetadata({ title: "Project Not Found", noIndex: true });

  return buildMetadata({
    title:       `${project.title} — Case Study`,
    description: `${project.title}: a ${project.category} project in the ${project.industry} industry. Result: ${project.result}. Built with ${project.stack.join(", ")}.`,
    path:        `/portfolio/${project.slug}`,
    keywords:    [...project.stack, project.industry, project.category],
  });
}