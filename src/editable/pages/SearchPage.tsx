import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Filter, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, getPostTaskKey } from '@/lib/task-data'
import { getMockPostsForTask } from '@/lib/mock-posts'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { pagesContent } from '@/editable/content/pages.content'
import { Reveal } from '@/editable/components/Motion'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/search',
    title: pagesContent.search.metadata.title,
    description: pagesContent.search.metadata.description,
  })
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')
const compactText = (value: unknown) => typeof value === 'string' ? stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase() : ''
const getContent = (post: SitePost) => post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
const getImage = (post: SitePost) => {
  const content = getContent(post)
  const media = Array.isArray(post.media) ? post.media.find((item) => typeof item?.url === 'string')?.url : ''
  const images = Array.isArray(content.images) ? content.images.find((item) => typeof item === 'string') as string | undefined : ''
  return media || compactRaw(content.featuredImage) || compactRaw(content.image) || compactRaw(content.thumbnail) || images || ''
}
const compactRaw = (value: unknown) => typeof value === 'string' ? value.trim() : ''
const summaryOf = (post: SitePost) => post.summary || compactRaw(getContent(post).description) || compactRaw(getContent(post).excerpt) || ''

const matches = (post: SitePost, query: string, category: string, task: string) => {
  const content = getContent(post)
  const typeText = compactText(content.type)
  if (typeText === 'comment') return false
  const derivedTask = getPostTaskKey(post) || typeText
  if (task && derivedTask !== task) return false
  const categoryText = compactText(content.category)
  const tagsText = compactText(Array.isArray(post.tags) ? post.tags.join(' ') : '')
  if (category && !(categoryText || tagsText).includes(category)) return false
  if (!query) return true
  return [post.title, post.summary, content.description, content.body, content.excerpt, content.category, Array.isArray(post.tags) ? post.tags.join(' ') : '']
    .some((value) => compactText(value).includes(query))
}

function SearchResultCard({ post, index }: { post: SitePost; index: number }) {
  const task = getPostTaskKey(post) as TaskKey | null
  const href = task ? buildPostUrl(task, post.slug) : `/article/${post.slug}`
  const image = getImage(post)
  const summary = summaryOf(post)
  const taskLabel = SITE_CONFIG.tasks.find((item) => item.key === task)?.label || 'Post'
  const strong = index % 5 === 0

  return (
    <Link href={href} className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--editable-border)] bg-white shadow-[0_14px_36px_rgba(13,23,46,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(13,23,46,0.12)] ${strong ? 'md:col-span-2' : ''}`}>
      {image ? (
        <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${strong ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}>
          <img src={image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--slot4-dark-bg)] backdrop-blur">{taskLabel}</span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {!image ? <span className="w-fit rounded-full bg-[var(--slot4-accent-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--slot4-accent)]">{taskLabel}</span> : null}
        <h2 className="mt-4 line-clamp-3 text-xl font-black leading-snug tracking-[-0.02em] text-[var(--slot4-dark-bg)] transition group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
        {summary ? <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{summary}</p> : null}
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--slot4-dark-bg)]">Open result <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  )
}

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }> }) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = (resolved.task || '').trim().toLowerCase()
  const useMaster = resolved.master !== '0'
  const feed = await fetchSiteFeed(useMaster ? 1000 : 300, useMaster ? { fresh: true, category: category || undefined, task: task || undefined } : undefined)
  const posts = feed?.posts?.length ? feed.posts : useMaster ? [] : SITE_CONFIG.tasks.filter((item) => item.enabled).flatMap((item) => getMockPostsForTask(item.key))
  const results = posts.filter((post) => matches(post, normalized, category, task)).slice(0, normalized ? 80 : 36)
  const enabledTasks = SITE_CONFIG.tasks.filter((item) => item.enabled)

  return (
    <EditableSiteShell>
      <main className="relative min-h-screen overflow-hidden text-[var(--slot4-page-text)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />
        <section className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-white shadow-[0_24px_70px_rgba(13,23,46,0.1)]">
            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative overflow-hidden bg-[var(--slot4-dark-bg)] p-7 text-white sm:p-10 lg:p-12">
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--slot4-accent)]/30 blur-3xl" />
                <p className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80"><Search className="h-3.5 w-3.5" /> {pagesContent.search.hero.badge}</p>
                <h1 className="relative mt-5 text-3xl font-black leading-[1.1] sm:text-4xl lg:text-5xl">{pagesContent.search.hero.title}</h1>
                <p className="relative mt-5 max-w-md text-base leading-8 text-white/70">{pagesContent.search.hero.description}</p>
              </div>
              <form action="/search" className="self-center p-6 sm:p-10 lg:p-12">
                <input type="hidden" name="master" value="1" />
                <label className="flex items-center gap-3 rounded-full border border-[var(--editable-border)] bg-white px-5 py-3.5 shadow-sm focus-within:border-[var(--slot4-accent)]">
                  <Search className="h-5 w-5 text-[var(--slot4-soft-muted-text)]" />
                  <input name="q" defaultValue={query} placeholder={pagesContent.search.hero.placeholder} className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-slate-400" />
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-4 py-3">
                    <Filter className="h-4 w-4 text-[var(--slot4-soft-muted-text)]" />
                    <input name="category" defaultValue={category} placeholder="Industry category" className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400" />
                  </label>
                  <select name="task" defaultValue={task} className="rounded-full border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-semibold outline-none">
                    <option value="">All content types</option>
                    {enabledTasks.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
                  </select>
                </div>
                <button className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[image:var(--slot4-accent-grad)] px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(91,99,245,0.35)] transition hover:-translate-y-0.5" type="submit">Search <ArrowRight className="h-4 w-4" /></button>
              </form>
            </div>
          </Reveal>

          <div className="flex flex-wrap items-end justify-between gap-4 py-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">{results.length} results</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[var(--slot4-dark-bg)] sm:text-4xl">{query ? `Results for “${query}”` : pagesContent.search.resultsTitle}</h2>
            </div>
            <Link href="/media-distribution" className="inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5">Browse latest <ArrowRight className="h-4 w-4" /></Link>
          </div>

          {results.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {results.map((post, index) => (
                <Reveal key={post.id || post.slug} delay={(index % 3) * 70}>
                  <SearchResultCard post={post} index={index} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[var(--editable-border)] bg-white p-12 text-center">
              <p className="text-2xl font-black tracking-[-0.02em] text-[var(--slot4-dark-bg)]">No matching posts found.</p>
              <p className="mt-3 text-sm text-[var(--slot4-muted-text)]">Try a different keyword, content type, or category.</p>
            </div>
          )}
        </section>
      </main>
    </EditableSiteShell>
  )
}
