import { Metadata } from 'next'

export interface SEOData {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export const defaultSEO: SEOData = {
  title: 'Tachera W Sasi - Full Stack Developer & CEO',
  description: 'Tachera W Sasi\'s portfolio. A passionate web developer and Golang enthusiast with expertise in modern web technologies. CEO @ ekilie.',
  keywords: 'Tachera W Sasi, Tach, ekilie ceo, sasi, web developer, Golang, PHP, Python, TypeScript, Java, C++, JavaScript, Django, React, Node.js, Next.js, React Native, PostgreSQL, Docker, Gin, Fiber, Express.js, Hono, Ubuntu, VSCode, NeoVim, Prisma, HTMX, full stack developer, software engineer',
  image: '/og-image.jpg',
  url: 'https://tacherasasi.dev',
  type: 'website'
}

export function generateMetadata({
  title,
  description,
  keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section
}: Partial<SEOData> = {}): Metadata {
  const finalTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title
  const finalDescription = description || defaultSEO.description
  const finalKeywords = keywords || defaultSEO.keywords
  const finalImage = image?.startsWith('http') ? image : `${url}${image}`
  const finalUrl = url || defaultSEO.url

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    authors: [{ name: author || 'Tachera W Sasi', url: 'https://tacherasasi.dev' }],
    creator: 'Tachera W Sasi',
    publisher: 'Tachera W Sasi',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(finalUrl),
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: finalUrl,
      siteName: 'Tachera W Sasi Portfolio',
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'en_US',
      type: type as any,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
      creator: '@tacheraSasi',
      site: '@tacheraSasi',
    },
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
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
}

export function generateStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tachera W Sasi',
    alternateName: 'Tach',
    description: 'Full Stack Developer and CEO at ekilie',
    url: 'https://tacherasasi.dev',
    image: 'https://tacherasasi.dev/profile-image.jpg',
    sameAs: [
      'https://github.com/tacheraSasi',
      'https://linkedin.com/in/tacherasasi',
      'https://twitter.com/tacheraSasi',
    ],
    jobTitle: 'CEO & Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'ekilie',
      url: 'https://ekilie.com',
    },
    knowsAbout: [
      'Web Development',
      'Golang',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Software Engineering',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University/Institution Name',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ekilie',
    founder: {
      '@type': 'Person',
      name: 'Tachera W Sasi',
    },
    url: 'https://ekilie.com',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tachera W Sasi Portfolio',
    description: 'Portfolio of Tachera W Sasi, Full Stack Developer and CEO at ekilie',
    url: 'https://tacherasasi.dev',
    author: {
      '@type': 'Person',
      name: 'Tachera W Sasi',
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Tachera W Sasi',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tacherasasi.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://tacherasasi.dev#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Skills',
        item: 'https://tacherasasi.dev#skills',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Projects',
        item: 'https://tacherasasi.dev#projects',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Blog',
        item: 'https://tacherasasi.dev#blog',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: 'https://tacherasasi.dev#contact',
      },
    ],
  }

  return {
    person: personSchema,
    organization: organizationSchema,
    website: websiteSchema,
    breadcrumb: breadcrumbSchema,
  }
}