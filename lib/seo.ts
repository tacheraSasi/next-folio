import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const defaultConfig = {
  siteName: 'Tachera W Sasi',
  siteUrl: 'https://next-folio-pi.vercel.app',
  defaultTitle: 'Tachera W Sasi - Full Stack Developer & CEO',
  defaultDescription: "Tachera W Sasi's portfolio. A passionate web developer and Golang enthusiast with expertise in modern web technologies. CEO @ ekilie.",
  defaultKeywords: 'Tachera W Sasi,Tach, ekilie ceo,sasi, web developer, Golang, PHP, Python, TypeScript, Java, C++, JavaScript, Django, React, Node.js, Next.js, React Native, PostgreSQL, Docker, Gin, Fiber, Express.js, Hono, Ubuntu, VSCode, NeoVim, Prisma, HTMX',
  defaultImage: '/me.jpg',
  twitterHandle: '@tacheraSasi',
  linkedinProfile: 'https://linkedin.com/in/tachera-sasi',
  githubProfile: 'https://github.com/tacheraSasi'
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = defaultConfig.defaultKeywords,
    canonical,
    ogImage = defaultConfig.defaultImage,
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author = 'Tachera W Sasi',
    section,
    tags = []
  } = config

  const fullTitle = title === defaultConfig.defaultTitle ? title : `${title} | ${defaultConfig.siteName}`
  const url = canonical ? `${defaultConfig.siteUrl}${canonical}` : defaultConfig.siteUrl
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${defaultConfig.siteUrl}${ogImage}`

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: author, url: defaultConfig.siteUrl }],
    creator: author,
    publisher: defaultConfig.siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: defaultConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: defaultConfig.twitterHandle,
      site: defaultConfig.twitterHandle,
    },
    verification: {
      google: 'google-site-verification-code', // Replace with actual verification code
    },
    category: section || 'technology',
  }
}

export function generateStructuredData(config: SEOConfig) {
  const {
    title,
    description,
    canonical,
    ogImage = defaultConfig.defaultImage,
    ogType = 'website',
    publishedTime
  } = config

  const url = canonical ? `${defaultConfig.siteUrl}${canonical}` : defaultConfig.siteUrl
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${defaultConfig.siteUrl}${ogImage}`

  // Person schema for the author
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tachera W Sasi',
    alternateName: 'Tach',
    url: defaultConfig.siteUrl,
    image: imageUrl,
    sameAs: [
      defaultConfig.githubProfile,
      defaultConfig.linkedinProfile,
      'https://twitter.com/tacheraSasi'
    ],
    jobTitle: 'Full Stack Developer & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'ekilie'
    },
    knowsAbout: [
      'Web Development',
      'Golang',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Docker'
    ]
  }

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: defaultConfig.siteName,
    description: defaultConfig.defaultDescription,
    url: defaultConfig.siteUrl,
    author: personSchema,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${defaultConfig.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  // Article schema for blog posts
  const articleSchema = ogType === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl,
    url,
    datePublished: publishedTime,
    author: personSchema,
    publisher: {
      '@type': 'Person',
      name: 'Tachera W Sasi',
      logo: {
        '@type': 'ImageObject',
        url: imageUrl
      }
    }
  } : null

  return {
    personSchema,
    websiteSchema,
    ...(articleSchema && { articleSchema })
  }
}

export { defaultConfig }