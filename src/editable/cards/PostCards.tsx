import Link from 'next/link'
import { ArrowRight, BarChart3, RadioTower, Send } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Latest'
}

function metricFor(post: SitePost, seed = 1) {
  const base = (post.title?.length || 28) + seed * 17
  return {
    reach: `${Math.max(18, base % 92)}K`,
    pickups: `${Math.max(7, base % 34)} outlets`,
    status: seed % 3 === 0 ? 'Syndicating' : seed % 2 === 0 ? 'Published' : 'Ready',
  }
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

/** Text-first feature card (no image) — used for archive/editorial leads. */
export function EditorialFeatureCard({ post, href, label = 'Cover story' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="group flex min-h-[320px] flex-col justify-end rounded-3xl border border-white/10 bg-[var(--slot4-dark-bg)] p-8 text-white shadow-[0_30px_80px_rgba(13,23,46,0.28)] transition duration-300 hover:-translate-y-1.5"
    >
      <span className="w-fit rounded-full bg-[image:var(--slot4-accent-grad)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]">{label}</span>
      <h3 className="mt-6 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl">{post.title}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">{getEditableExcerpt(post, 180)}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Open campaign <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const metric = metricFor(post, index + 1)
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block rounded-3xl border border-[var(--editable-border)] bg-white p-5 shadow-[0_14px_36px_rgba(13,23,46,0.06)] ${dc.motion.lift}`}>
      <div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--slot4-accent)]">
        <span>{getEditableCategory(post)}</span>
        <span className="rounded-full bg-[var(--slot4-accent-soft)] px-2.5 py-1">{metric.status}</span>
      </div>
      <h3 className="mt-3 line-clamp-3 text-lg font-black leading-snug tracking-[-0.02em] text-[var(--slot4-dark-bg)]">{post.title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-bold text-[var(--slot4-muted-text)]">
        <span className="inline-flex items-center gap-1 rounded-xl bg-[var(--slot4-cream)] px-2 py-2"><RadioTower className="h-3.5 w-3.5 text-[var(--slot4-accent)]" /> {metric.reach}</span>
        <span className="inline-flex items-center gap-1 rounded-xl bg-[var(--slot4-cream)] px-2 py-2"><BarChart3 className="h-3.5 w-3.5 text-[var(--slot4-accent)]" /> {metric.pickups}</span>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[46px_1fr] gap-4 border-t border-[var(--editable-border)] py-5 first:border-t-0">
      <span className="text-3xl font-black leading-none text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--slot4-soft-muted-text)]"><Send className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-lg font-black leading-snug tracking-[-0.02em] text-[var(--slot4-dark-bg)] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 rounded-3xl border border-[var(--editable-border)] bg-white p-6 shadow-[0_14px_36px_rgba(13,23,46,0.05)] transition duration-300 hover:-translate-y-1 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6">
      <span className="text-4xl font-black leading-none text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0 pt-2 sm:pt-0">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{getEditableCategory(post)}</p>
        <h2 className="mt-3 line-clamp-2 text-2xl font-black leading-tight tracking-[-0.03em] text-[var(--slot4-dark-bg)] group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
        <p className={`mt-3 line-clamp-2 text-sm leading-7 ${pal.mutedText}`}>{getEditableExcerpt(post, 190)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--slot4-dark-bg)]">Read story <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  )
}
