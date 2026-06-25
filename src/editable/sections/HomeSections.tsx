import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Globe2,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, postHref } from '@/editable/cards/PostCards'
import { Reveal } from '@/editable/components/Motion'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const trustIcons = [Star, ShieldCheck, Zap]

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const hero = pagesContent.home.hero
  const recent = posts.slice(0, 4)

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-[var(--slot4-accent-soft)] blur-3xl opacity-60 float-soft" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-[var(--slot4-sky)] blur-3xl opacity-70 float-soft" />

      <div className={`${dc.shell.section} pb-12 pt-16 text-center sm:pt-20`}>
        <p className="hero-reveal mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)] shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> {hero.badge}
        </p>

        <h1 className="hero-reveal mx-auto mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-[var(--slot4-dark-bg)] sm:text-6xl lg:text-7xl" style={{ animationDelay: '.08s' }}>
          {hero.titlePrefix}{' '}
          <span className="bg-[image:var(--slot4-accent-grad)] bg-clip-text text-transparent">{hero.titleAccent}</span>
          <span className="mx-2 inline-flex h-12 w-12 translate-y-2 items-center justify-center rounded-2xl bg-[image:var(--slot4-accent-grad)] align-middle shadow-[0_12px_30px_rgba(91,99,245,0.4)] sm:h-14 sm:w-14">
            <Radio className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </span>
          {hero.titleSuffix}
        </h1>

        <p className="hero-reveal mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]" style={{ animationDelay: '.16s' }}>
          {hero.description}
        </p>

        <div className="hero-reveal mt-9 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '.24s' }}>
          <Link href={hero.primaryCta.href} className={dc.button.primary}>
            {hero.primaryCta.label}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link href={hero.secondaryCta.href} className={dc.button.secondary}>
            {hero.secondaryCta.label}
          </Link>
        </div>

        <div className="hero-reveal mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold text-[var(--slot4-muted-text)]" style={{ animationDelay: '.32s' }}>
          {hero.trust.map((item, index) => {
            const Icon = trustIcons[index % trustIcons.length]
            return (
              <span key={item.label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-[var(--slot4-accent)]" /> {item.label}
              </span>
            )
          })}
        </div>

        <Reveal className="mt-14" delay={120}>
          <HeroDashboard primaryTask={primaryTask} primaryRoute={primaryRoute} recent={recent} />
        </Reveal>
      </div>
    </section>
  )
}

function HeroDashboard({
  primaryTask,
  primaryRoute,
  recent,
}: {
  primaryTask: TaskKey
  primaryRoute: string
  recent: SitePost[]
}) {
  const dash = pagesContent.home.hero.dashboard
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-white text-left shadow-[0_40px_120px_rgba(13,23,46,0.18)]">
      <div className="grid sm:grid-cols-[210px_1fr]">
        <aside className="hidden flex-col gap-1 bg-[var(--slot4-dark-bg)] p-5 text-white sm:flex">
          <div className="mb-4 flex items-center gap-2 text-sm font-black">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"><Radio className="h-4 w-4" /></span>
            {dash.brand}
          </div>
          {['Dashboard', 'Distributions', 'Insights', 'Audience', 'AI Advisor', 'Reports'].map((item, index) => (
            <span
              key={item}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ${index === 0 ? 'bg-white/12 text-white' : 'text-white/55'}`}
            >
              {item}
            </span>
          ))}
        </aside>

        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-[var(--slot4-dark-bg)]">{dash.title}</h3>
              <p className="mt-1 text-sm text-[var(--slot4-soft-muted-text)]">{dash.welcome}</p>
            </div>
            <span className="hidden items-center gap-2 rounded-full border border-[var(--editable-border)] px-3 py-2 text-xs font-semibold text-[var(--slot4-soft-muted-text)] sm:inline-flex">
              <Search className="h-3.5 w-3.5" /> Search
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {dash.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-cream)] p-4">
                {metric.delta ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--slot4-accent-soft)] px-2 py-0.5 text-[10px] font-bold text-[var(--slot4-accent)]">
                    <TrendingUp className="h-3 w-3" /> {metric.delta}
                  </span>
                ) : null}
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-[var(--slot4-soft-muted-text)]">{metric.label}</p>
                <p className="mt-1 text-2xl font-black text-[var(--slot4-dark-bg)]">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[var(--editable-border)] bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-[var(--slot4-dark-bg)]">Recent distributions</p>
              <Link href={primaryRoute} className="text-xs font-bold text-[var(--slot4-accent)]">View all</Link>
            </div>
            <div className="mt-3 grid gap-2">
              {(recent.length ? recent : Array.from({ length: 3 })).map((post, index) =>
                recent.length ? (
                  <Link
                    key={(post as SitePost).id || (post as SitePost).slug || index}
                    href={postHref(primaryTask, post as SitePost, primaryRoute)}
                    className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[var(--slot4-cream)]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--slot4-accent-soft)] text-xs font-black text-[var(--slot4-accent)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate text-sm font-semibold text-[var(--slot4-dark-bg)]">{(post as SitePost).title}</span>
                    </span>
                    <span className="shrink-0 text-[11px] font-bold text-emerald-600">+{12 + index * 4}%</span>
                  </Link>
                ) : (
                  <div key={index} className="h-10 rounded-xl skeleton" />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Features grid                                                       */
/* ------------------------------------------------------------------ */
export function EditableStoryRail(_props: HomeSectionProps) {
  const features = pagesContent.home.features
  return (
    <section className="relative">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className={`${dc.type.eyebrow} text-[var(--slot4-accent)]`}>{features.badge}</p>
            <h2 className={`${dc.type.sectionTitle} mt-3 text-[var(--slot4-dark-bg)]`}>{features.title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--slot4-muted-text)]">{features.description}</p>
          </div>
          <Link href={features.cta.href} className={dc.button.accent}>
            {features.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {features.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 90}
              className={`${index === 2 ? 'lg:row-span-2' : ''} ${index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <FeatureCard item={item} tall={index === 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  item,
  tall = false,
}: {
  item: { title: string; description: string; tags: readonly string[]; variant: string }
  tall?: boolean
}) {
  const isDark = item.variant === 'dark'
  const isAccent = item.variant === 'accent'
  const base = `group flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1.5 ${
    tall ? 'min-h-[360px]' : ''
  }`
  const skin = isDark
    ? 'border-white/10 bg-[var(--slot4-dark-bg)] text-white shadow-[0_26px_60px_rgba(13,23,46,0.28)]'
    : isAccent
      ? 'border-transparent bg-[image:var(--slot4-accent-grad)] text-white shadow-[0_22px_50px_rgba(91,99,245,0.32)]'
      : 'border-[var(--editable-border)] bg-white text-[var(--slot4-dark-bg)] shadow-[0_16px_40px_rgba(13,23,46,0.06)] hover:shadow-[0_26px_60px_rgba(13,23,46,0.12)]'

  return (
    <div className={`${base} ${skin}`}>
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
          isDark || isAccent ? 'bg-white/15 text-white' : 'bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]'
        }`}
      >
        <FeatureIcon variant={item.variant} />
      </span>
      <h3 className="mt-6 text-xl font-black">{item.title}</h3>
      <p className={`mt-3 text-sm leading-7 ${isDark || isAccent ? 'text-white/75' : 'text-[var(--slot4-muted-text)]'}`}>
        {item.description}
      </p>
      {item.tags.length ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                isDark || isAccent ? 'bg-white/15 text-white' : 'bg-[var(--slot4-cream)] text-[var(--slot4-dark-bg)]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      )}
    </div>
  )
}

function FeatureIcon({ variant }: { variant: string }) {
  if (variant === 'dark') return <Target className="h-6 w-6" />
  if (variant === 'accent') return <BarChart3 className="h-6 w-6" />
  return <Bell className="h-6 w-6" />
}

/* ------------------------------------------------------------------ */
/* Latest distributions (text-only post cards)                         */
/* ------------------------------------------------------------------ */
export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const latest = pagesContent.home.latest
  const cards = posts.slice(0, 6)
  return (
    <section className="relative bg-white">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className={`${dc.type.eyebrow} text-[var(--slot4-accent)]`}>{latest.badge}</p>
            <h2 className={`${dc.type.sectionTitle} mt-3 text-[var(--slot4-dark-bg)]`}>{latest.title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--slot4-muted-text)]">{latest.description}</p>
          </div>
          <Link href={latest.cta.href} className={dc.button.secondary}>
            {latest.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        {cards.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((post, index) => (
              <Reveal key={post.id || post.slug || index} delay={index * 80}>
                <TextPostCard post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-[var(--editable-border)] bg-[var(--slot4-cream)] p-12 text-center">
            <p className="text-lg font-bold text-[var(--slot4-dark-bg)]">{latest.emptyTitle}</p>
          </div>
        )}
      </div>
    </section>
  )
}

function TextPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-[var(--editable-border)] bg-white p-6 shadow-[0_14px_36px_rgba(13,23,46,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[var(--slot4-accent)]/40 hover:shadow-[0_26px_60px_rgba(13,23,46,0.12)]"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-[var(--slot4-accent-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--slot4-accent)]">
          {getEditableCategory(post)}
        </span>
        <span className="text-xs font-black text-[var(--slot4-gray)]">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="mt-4 line-clamp-3 text-xl font-black leading-snug tracking-[-0.02em] text-[var(--slot4-dark-bg)] transition group-hover:text-[var(--slot4-accent)]">
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">
        {getEditableExcerpt(post, 150) || 'Open this distribution to read the full press release and campaign details.'}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--slot4-dark-bg)]">
        Read campaign <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/* Stats + Platform overview                                           */
/* ------------------------------------------------------------------ */
export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const stats = pagesContent.home.stats
  const platform = pagesContent.home.platform
  const collected = timeSections.flatMap((section) => section.posts)
  const trending = (collected.length ? collected : posts).slice(0, 4)

  return (
    <>
      <section className="relative">
        <div className={`${dc.shell.section} py-16 sm:py-20`}>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className={`${dc.type.eyebrow} text-[var(--slot4-accent)]`}>{stats.badge}</p>
            <h2 className={`${dc.type.sectionTitle} mt-3 text-[var(--slot4-dark-bg)]`}>{stats.title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--slot4-muted-text)]">{stats.description}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.items.map((item, index) => (
              <Reveal key={item.label} delay={index * 80} className={index === 1 ? 'lg:row-span-2' : ''}>
                <StatCard item={item} big={index === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(91,99,245,0.1),transparent_70%)]" />
        <div className={`${dc.shell.section} py-16 text-center sm:py-20`}>
          <Reveal className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-[var(--slot4-cream)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">
              <Globe2 className="h-3.5 w-3.5" /> {platform.badge}
            </span>
            <h2 className={`${dc.type.sectionTitle} mt-5 text-[var(--slot4-dark-bg)]`}>{platform.title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--slot4-muted-text)]">{platform.description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={platform.primaryCta.href} className={dc.button.primary}>
                {platform.primaryCta.label}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25"><ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
              <Link href={platform.secondaryCta.href} className={dc.button.accent}>{platform.secondaryCta.label}</Link>
            </div>
          </Reveal>

          <Reveal className="mt-14" delay={120}>
            <PlatformPanel primaryTask={primaryTask} primaryRoute={primaryRoute} trending={trending} />
          </Reveal>
        </div>
      </section>
    </>
  )
}

function StatCard({ item, big = false }: { item: { value: string; label: string; sub: string; variant: string }; big?: boolean }) {
  const isDark = item.variant === 'dark'
  const isAccent = item.variant === 'accent'
  const skin = isDark
    ? 'bg-[var(--slot4-dark-bg)] text-white'
    : isAccent
      ? 'bg-[image:var(--slot4-accent-grad)] text-white'
      : 'border border-[var(--editable-border)] bg-white text-[var(--slot4-dark-bg)]'
  return (
    <div className={`flex h-full flex-col justify-between rounded-3xl p-7 shadow-[0_16px_44px_rgba(13,23,46,0.08)] ${skin} ${big ? 'min-h-[260px]' : ''}`}>
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
          isDark || isAccent ? 'bg-white/15 text-white' : 'bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]'
        }`}
      >
        <TrendingUp className="h-5 w-5" />
      </span>
      <div className="mt-8">
        <p className={`font-black tracking-[-0.04em] ${big ? 'text-6xl' : 'text-5xl'}`}>{item.value}</p>
        <p className="mt-3 text-base font-bold">{item.label}</p>
        <p className={`mt-1 text-sm ${isDark || isAccent ? 'text-white/70' : 'text-[var(--slot4-soft-muted-text)]'}`}>{item.sub}</p>
      </div>
    </div>
  )
}

function PlatformPanel({
  primaryTask,
  primaryRoute,
  trending,
}: {
  primaryTask: TaskKey
  primaryRoute: string
  trending: SitePost[]
}) {
  const panel = pagesContent.home.platform.panel
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-[var(--slot4-cream)] p-5 text-left shadow-[0_40px_120px_rgba(13,23,46,0.16)] sm:p-7">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-black text-[var(--slot4-dark-bg)]">{panel.title}</h3>
          <p className="mt-1 text-sm text-[var(--slot4-soft-muted-text)]">{panel.subtitle}</p>
        </div>
        <span className="rounded-full bg-[image:var(--slot4-accent-grad)] px-4 py-2 text-xs font-bold text-white">Customize</span>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {panel.cards.map((card) => {
          const positive = !card.delta.startsWith('-')
          return (
            <div key={card.label} className="rounded-2xl border border-[var(--editable-border)] bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><Star className="h-4 w-4" /></span>
                <span className={`text-xs font-bold ${positive ? 'text-emerald-600' : 'text-rose-500'}`}>{card.delta}</span>
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[var(--slot4-soft-muted-text)]">{card.label}</p>
              <p className="mt-1 text-2xl font-black text-[var(--slot4-dark-bg)]">{card.value}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--editable-border)] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-black text-[var(--slot4-dark-bg)]">Trending distributions</p>
            <Link href={primaryRoute} className="text-xs font-bold text-[var(--slot4-accent)]">View all</Link>
          </div>
          <div className="mt-3 grid gap-1.5">
            {(trending.length ? trending : Array.from({ length: 4 })).map((post, index) =>
              trending.length ? (
                <Link
                  key={(post as SitePost).id || (post as SitePost).slug || index}
                  href={postHref(primaryTask, post as SitePost, primaryRoute)}
                  className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition hover:bg-[var(--slot4-cream)]"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--slot4-accent-soft)] text-[10px] font-black text-[var(--slot4-accent)]">{(post as SitePost).title?.slice(0, 2).toUpperCase()}</span>
                    <span className="truncate text-sm font-semibold text-[var(--slot4-dark-bg)]">{(post as SitePost).title}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--slot4-soft-muted-text)]" />
                </Link>
              ) : (
                <div key={index} className="h-9 rounded-xl skeleton" />
              ),
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--editable-border)] bg-white p-5">
          <p className="text-sm font-black text-[var(--slot4-dark-bg)]">Channel performance</p>
          <div className="mt-3 grid gap-2.5">
            {panel.assets.map((asset) => (
              <div key={asset.name} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2">
                <span className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--slot4-dark-bg)] text-[10px] font-black text-white">{asset.symbol}</span>
                  <span className="truncate text-sm font-semibold text-[var(--slot4-dark-bg)]">{asset.name}</span>
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="text-sm font-bold text-[var(--slot4-dark-bg)]">{asset.price}</span>
                  <span className="text-xs font-bold text-emerald-600">{asset.delta}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Closing CTA                                                          */
/* ------------------------------------------------------------------ */
export function EditableHomeCta() {
  const cta = pagesContent.home.cta
  return (
    <section className="relative">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <Reveal className="relative overflow-hidden rounded-[2.2rem] border border-[var(--editable-border)] bg-[var(--slot4-dark-bg)] px-6 py-16 text-center shadow-[0_30px_90px_rgba(13,23,46,0.3)] sm:px-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[var(--slot4-accent)]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[var(--slot4-accent-2)]/30 blur-3xl" />
          <p className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            <Sparkles className="h-3.5 w-3.5" /> {cta.badge}
          </p>
          <h2 className="relative mx-auto mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
            {cta.title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">{cta.description}</p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href={cta.primaryCta.href} className={dc.button.primary}>
              {cta.primaryCta.label}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25"><ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
            <Link
              href={cta.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--slot4-dark-bg)]"
            >
              {cta.secondaryCta.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
