import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution and press release publishing',
      description: 'Distribute press releases, news campaigns, and brand stories through a professional media outreach platform.',
      openGraphTitle: 'Media distribution and press release publishing',
      openGraphDescription: 'Reach journalists, publishers, and audiences with polished news distribution campaigns.',
      keywords: ['media distribution', 'press release distribution', 'PR outreach', 'news publishing'],
    },
    hero: {
      badge: 'Professional media distribution',
      title: ['Distribute your story', 'to journalists, publishers, and search audiences.'],
      description: 'Launch press releases, syndicate brand announcements, and track visibility across media networks from one polished workspace.',
      primaryCta: { label: 'Create campaign', href: '/create' },
      secondaryCta: { label: 'View distributions', href: '/media-distribution' },
      searchPlaceholder: 'Search campaigns, industries, publishers, and releases',
      focusLabel: 'Coverage focus',
      featureCardBadge: 'campaign command center',
      featureCardTitle: 'A premium launch surface for every press release.',
      featureCardDescription: 'Package headlines, media assets, publisher context, and campaign outcomes into one high-trust distribution experience.',
    },
    intro: {
      badge: 'Distribution intelligence',
      title: 'Built for teams that need their announcements to travel further.',
      paragraphs: [
        'Plan, publish, and present media campaigns with the clarity expected by PR agencies, founders, marketers, and communications teams.',
        'Every release can carry the essentials: campaign angle, publisher context, industry category, reach indicators, audience engagement, and source assets.',
        'The experience keeps visitors focused on trust, speed, and measurable visibility instead of burying your message in generic listing pages.',
      ],
      sideBadge: 'Platform edge',
      sidePoints: [
        'Media-ready campaign pages with newsroom polish.',
        'Clear archive browsing for press releases and coverage.',
        'Trust-building metrics for reach, pickups, and engagement.',
        'Fast account flows for campaign submission and review.',
      ],
      primaryLink: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryLink: { label: 'Start a release', href: '/create' },
    },
    cta: {
      badge: 'Ready to publish',
      title: 'Turn your next announcement into a coordinated media campaign.',
      description: 'Create a release, add your media assets, choose the right category, and present your story with publisher-grade credibility.',
      primaryCta: { label: 'Create Campaign', href: '/create' },
      secondaryCta: { label: 'Talk to PR Desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the network',
    title: 'A sharper way to publish, syndicate, and amplify brand news.',
    description: `${slot4BrandConfig.siteName} helps teams shape announcements into professional media campaigns designed for visibility, credibility, and follow-through.`,
    paragraphs: [
      'The platform is designed around the real workflow of media distribution: clarify the angle, package the release, present the brand, and make the next action obvious.',
      'From startups announcing launches to agencies managing client coverage, every page is structured to help readers quickly understand who is speaking, why it matters, and where the story can travel next.',
    ],
    values: [
      {
        title: 'Publisher-grade presentation',
        description: 'Campaign pages balance polished visuals, concise summaries, and strong proof points so releases feel credible from the first view.',
      },
      {
        title: 'Distribution-focused workflows',
        description: 'Archives, search, submission, and detail pages all point toward faster publishing, better targeting, and stronger media reach.',
      },
      {
        title: 'Built for measurable visibility',
        description: 'Reach, engagement, campaign status, and related coverage are surfaced clearly so teams can understand momentum.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Connect with the media distribution desk.',
    description: 'Tell us what you want to announce, who you need to reach, and how soon the campaign should go live. We will route your request to the right publishing path.',
    formTitle: 'Plan a campaign',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find campaigns, publishers, industries, and press releases faster.',
      description: 'Search across media distributions, company announcements, PR categories, and supporting resources.',
      placeholder: 'Search by campaign, brand, topic, publisher, or industry',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to open the campaign workspace.',
      description: 'Use your account to submit press releases, manage campaign drafts, and prepare media assets for distribution.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Submit a media campaign with everything publishers need.',
      description: 'Choose the distribution type, add a release headline, attach source links and visuals, and prepare a clear newsroom-ready campaign brief.',
    },
    formTitle: 'Campaign details',
    submitLabel: 'Submit campaign',
    successTitle: 'Campaign submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your media desk.',
      description: 'Login to manage campaign submissions, review release drafts, and continue building distribution momentum.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and launch your first campaign.',
      description: 'Sign up to access the distribution workspace, save release details, and prepare professional PR submissions.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
