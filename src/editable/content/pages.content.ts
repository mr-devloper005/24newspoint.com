import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution and press release publishing platform',
      description:
        'Distribute press releases, news campaigns, and brand stories through a professional, AI-assisted media outreach platform with real-time reach tracking.',
      openGraphTitle: 'Media distribution and press release publishing',
      openGraphDescription: 'Reach journalists, publishers, and audiences with polished news distribution campaigns.',
      keywords: ['media distribution', 'press release distribution', 'PR outreach', 'news publishing'],
    },
    hero: {
      badge: '',
      title: 'Media Distribution Platform',
      titlePrefix: 'Media',
      titleAccent: 'Distribution',
      titleSuffix: 'Platform',
      description:
        'Optimize your outreach with AI-driven targeting, real-time reach tracking, and intelligent recommendations for every press release.',
      primaryCta: { label: 'Get started now', href: '/create' },
      secondaryCta: { label: 'View distributions', href: '/media-distribution' },
      trust: [
        { label: '4.9/5 publisher rating' },
        { label: 'Newsroom-grade security' },
        { label: 'Real-time reach insights' },
      ],
      dashboard: {
        brand: 'Newsroom',
        title: 'Distribution Command',
        welcome: 'Welcome back. Your campaigns are up 12.4% this quarter.',
        metrics: [
          { label: 'Total Reach', value: '584,200', delta: '+12.4%' },
          { label: 'Pickups Today', value: '+1,240', delta: '+2.1%' },
          { label: 'Active Releases', value: '24', delta: '' },
          { label: 'Trust Score', value: '92 / 100', delta: 'live' },
        ],
      },
    },
    features: {
      badge: 'Platform capabilities',
      title: 'Everything you need to distribute confidently',
      description:
        'A premium launch surface for every press release — built for PR teams, founders, and communications leaders managing diverse campaigns.',
      cta: { label: 'View all features', href: '/media-distribution' },
      items: [
        {
          title: 'Advanced reach analysis',
          description: 'Predictive pickup signals and real-time reach scoring keep every campaign measurable.',
          tags: ['Predictive alerts', 'Real-time scoring'],
          variant: 'light',
        },
        {
          title: 'Media insights',
          description: 'Track sentiment, momentum, and audience response across publisher networks live.',
          tags: ['Live momentum', '+2.4% trend'],
          variant: 'light',
        },
        {
          title: 'AI-powered targeting',
          description: 'Real-time market data and predictive analysis route releases to the right outlets.',
          tags: [],
          variant: 'dark',
        },
        {
          title: 'Campaign tracking',
          description: 'See your entire distribution picture in one place with pickup attribution and engagement analysis.',
          tags: [],
          variant: 'accent',
        },
        {
          title: 'Smart alerts',
          description: 'Get notified the moment a release breaks out, trends, or earns a major pickup.',
          tags: ['Breakout signal'],
          variant: 'light',
        },
      ],
    },
    latest: {
      badge: 'Latest distributions',
      title: 'Fresh from the newsroom',
      description: 'Relevant distribution stories that move your visibility — browse the newest press releases and campaign records.',
      cta: { label: 'Browse all distributions', href: '/media-distribution' },
      emptyTitle: 'New distributions will appear here once published.',
    },
    stats: {
      badge: 'Platform stats',
      title: 'Powering smarter media decisions',
      description: 'Real-time insights, advanced analytics, and secure infrastructure working together.',
      items: [
        { value: '10,000+', label: 'Active publishers', sub: 'Teams distributing with AI insights.', variant: 'light' },
        { value: '$250M+', label: 'Media value tracked', sub: 'In coverage monitored across the platform.', variant: 'dark' },
        { value: '1M+', label: 'AI signals generated', sub: 'Data-driven recommendations delivered.', variant: 'dark' },
        { value: '120+', label: 'Markets covered', sub: 'Global reach across regions and industries.', variant: 'accent' },
        { value: '99.9%', label: 'Platform uptime', sub: 'Reliable access to your media intelligence.', variant: 'light' },
      ],
    },
    platform: {
      badge: 'Platform overview',
      title: 'See your media intelligence in action',
      description:
        'Explore a real-time dashboard that brings your campaigns, pickups, and reach analysis together in one clear view.',
      primaryCta: { label: 'Explore features', href: '/media-distribution' },
      secondaryCta: { label: 'Try the live demo', href: '/create' },
      panel: {
        title: 'Media Intelligence Center',
        subtitle: 'AI-powered insights across global outlets · Updated 2m ago',
        cards: [
          { label: 'Global media sentiment', value: 'Bullish (74%)', delta: '+12.4%' },
          { label: 'Top performing sector', value: 'Technology', delta: '+4.8%' },
          { label: 'Coverage volatility index', value: '14.28', delta: '-2.4%' },
        ],
        assets: [
          { name: 'Press Release', symbol: 'PR', price: '64,231', delta: '+4.2%' },
          { name: 'Brand News', symbol: 'BN', price: '192.42', delta: '+0.4%' },
          { name: 'Coverage', symbol: 'CV', price: '178.22', delta: '+1.8%' },
          { name: 'Syndication', symbol: 'SY', price: '872.10', delta: '+6.5%' },
        ],
      },
    },
    intro: {
      badge: 'Distribution intelligence',
      title: 'Built for teams that need their announcements to travel further.',
      paragraphs: [
        'Plan, publish, and present media campaigns with the clarity expected by PR agencies, founders, marketers, and communications teams.',
        'Every release can carry the essentials: campaign angle, publisher context, industry category, reach indicators, audience engagement, and source assets.',
        'The experience keeps visitors focused on trust, speed, and measurable visibility instead of burying your message in generic listing pages.',
      ],
    },
    cta: {
      badge: 'Ready to amplify',
      title: 'Ready to distribute smarter?',
      description:
        'Join teams using AI insights and real-time data to launch press releases and make better media decisions.',
      primaryCta: { label: 'Start free trial', href: '/create' },
      secondaryCta: { label: 'Talk to PR desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the platform',
    title: 'A sharper way to publish, syndicate, and amplify brand news.',
    description: `${slot4BrandConfig.siteName} helps teams shape announcements into professional media campaigns designed for visibility, credibility, and follow-through.`,
    paragraphs: [
      'The platform is built around the real workflow of media distribution: clarify the angle, package the release, present the brand, and make the next action obvious.',
      'From startups announcing launches to agencies managing client coverage, every page is structured to help readers quickly understand who is speaking, why it matters, and where the story can travel next.',
    ],
    stats: [
      { value: '10K+', label: 'Active publishers' },
      { value: '120+', label: 'Markets covered' },
      { value: '99.9%', label: 'Platform uptime' },
      { value: '4.9/5', label: 'Publisher rating' },
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
    mission: {
      badge: 'Our mission',
      title: 'Make great announcements impossible to ignore.',
      description:
        'We believe every brand deserves a clear, trustworthy path from idea to coverage. The platform removes friction so your message reaches the right audience faster.',
    },
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Connect with the media distribution desk.',
    description:
      'Tell us what you want to announce, who you need to reach, and how soon the campaign should go live. We will route your request to the right publishing path.',
    formTitle: 'Plan a campaign',
  },
  search: {
    metadata: {
      title: 'Search',
      description: 'Search press releases, campaigns, publishers, and media coverage across the platform.',
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
      description: 'Create and submit new media distributions and press releases.',
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
      metadataDescription: 'Login to your media distribution workspace.',
      badge: 'Member access',
      title: 'Welcome back to your media desk.',
      description: 'Login to manage campaign submissions, review release drafts, and continue building distribution momentum.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
      highlights: [
        'Track reach and pickups in real time',
        'Manage drafts and scheduled releases',
        'Access publisher-ready campaign pages',
      ],
    },
    signup: {
      metadataDescription: 'Create your media distribution account.',
      badge: 'Site access',
      title: 'Create your account and launch your first campaign.',
      description: 'Sign up to access the distribution workspace, save release details, and prepare professional PR submissions.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
      highlights: [
        'Free to start — no card required',
        'AI-assisted targeting and timing',
        'Newsroom-grade campaign presentation',
      ],
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
