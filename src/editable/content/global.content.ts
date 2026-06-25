import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Media distribution platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Press releases, news media, and public updates',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Distributions', href: '/media-distribution' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Get started', href: '/signup' },
      secondary: { label: 'View distributions', href: '/media-distribution' },
    },
  },
  footer: {
    tagline: 'Newsroom updates and distributed media',
    description: 'Transform your media strategy with intelligent press release distribution and powerful brand storytelling. Connect with publishers, track your reach, and amplify your message across the digital landscape.',
    contactEmail: 'Contact',
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Distributions', href: '/media-distribution' },
          { label: 'Create campaign', href: '/create' },
          { label: 'Search', href: '/search' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Login', href: '/login' },
          { label: 'Sign up', href: '/signup' },
        ],
      },
    ],
    bottomNote: 'Built for fast, flexible, category-led media distribution.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
