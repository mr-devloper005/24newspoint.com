import type { CSSProperties } from 'react'

/**
 * Zenvix-inspired light SaaS design system for the media distribution platform.
 * Soft sky-to-white gradients, indigo/blue accents, rounded surfaces, pill buttons,
 * and gentle motion. All values here cascade through the editable UI.
 */
export const editableRootStyle = {
  '--slot4-page-bg': '#eef3fb',
  '--slot4-page-text': '#0c1426',
  '--slot4-panel-bg': '#e7eefb',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#475067',
  '--slot4-soft-muted-text': '#6b7488',
  '--slot4-accent': '#5b63f5',
  '--slot4-accent-fill': '#5b63f5',
  '--slot4-accent-2': '#8b93ff',
  '--slot4-accent-soft': '#e7e9ff',
  '--slot4-accent-grad': 'linear-gradient(135deg,#5b63f5 0%,#8b93ff 100%)',
  '--slot4-dark-bg': '#0b1224',
  '--slot4-dark-soft': '#121a30',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e6ecf6',
  '--slot4-cream': '#f4f7fc',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#6d5dfc',
  '--slot4-gray': '#e6eaf2',
  '--slot4-sky': '#dbe8fb',
  '--slot4-body-gradient': 'linear-gradient(180deg,#e4eefb 0%,#eef3fb 26%,#ffffff 64%,#eef4fb 100%)',
  '--editable-container': '1160px',
  '--editable-border': '#e6eaf2',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[var(--editable-border)]',
  darkBorder: 'border-white/12',
  shadow: 'shadow-[0_18px_50px_rgba(13,23,46,0.08)]',
  shadowStrong: 'shadow-[0_30px_80px_rgba(13,23,46,0.16)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(7,12,24,0.02),rgba(7,12,24,0.72))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-16 sm:py-20 lg:py-24',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[240px] shrink-0 snap-start sm:w-[280px]',
  },
  type: {
    eyebrow: 'text-[11px] font-bold uppercase tracking-[0.22em]',
    heroTitle: 'text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl',
    sectionTitle: 'text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    glass: 'rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_18px_50px_rgba(13,23,46,0.08)]',
    dark: `rounded-3xl ${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary:
      'inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--slot4-accent-grad)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(91,99,245,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(91,99,245,0.45)]',
    secondary:
      'inline-flex items-center justify-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--slot4-page-text)] shadow-[0_10px_24px_rgba(13,23,46,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--slot4-accent)]',
    accent:
      'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--slot4-accent-fill)]',
    ghost:
      'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[var(--slot4-page-text)] transition hover:text-[var(--slot4-accent)]',
  },
  media: {
    frame: `relative overflow-hidden rounded-3xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(13,23,46,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
    zoom: 'transition duration-700 group-hover:scale-[1.06]',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a light, airy SaaS aesthetic: soft sky-to-white gradients, rounded surfaces, indigo accents, and gentle motion.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays unless nothing live is available.',
  'Use postHref()/buildPostUrl() for all post links so route aliases and task-specific detail pages stay functional.',
  'Prioritize readable desktop and mobile layouts with clear hierarchy and generous whitespace.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference brand name or logo.',
] as const
