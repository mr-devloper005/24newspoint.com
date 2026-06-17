import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const featureTiles = posts.slice(1, 5)
  const fallbackTiles = posts.slice(0, 4)
  const tiles = featureTiles.length >= 4 ? featureTiles : fallbackTiles
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: independent stories, culture, and perspective.`

  return (
    <section className="bg-[#090b12] text-white">
      <div className={`${dc.shell.section} py-9 sm:py-11`}>
        {!lead ? (
          <div className="grid min-h-[520px] items-end bg-[#090b12] p-8 text-white sm:p-12 lg:grid-cols-[1fr_.55fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
              <h1 className={`${dc.type.heroTitle} mt-5 max-w-5xl`}>{heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{pagesContent.home.hero.description}</p>
              <Link href="/create" className={`${dc.button.accent} mt-8`}>Create campaign <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.26fr_1fr]">
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group relative min-h-[520px] overflow-hidden bg-black text-white">
              <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05)_0%,rgba(0,0,0,.18)_36%,rgba(0,0,0,.88)_100%)]" />
              <div className="absolute left-5 top-5 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[.12em] text-[#090b12]">{getEditableCategory(lead)}</div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h1 className="max-w-2xl text-4xl font-black leading-[1.04] sm:text-5xl">{lead.title}</h1>
                <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-white/78">{getEditableExcerpt(lead, 150)}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-white">Open campaign <ArrowRight className="h-4 w-4" /></p>
              </div>
            </Link>

            <div className="grid gap-6 sm:grid-cols-2">
              {tiles.slice(0, 4).map((post, index) => (
                <Link key={post.id || post.slug || index} href={postHref(primaryTask, post, primaryRoute)} className="group block text-white">
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
                  </div>
                  <div className="pt-4">
                    <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-[.08em] text-black ${index === 0 ? 'bg-[#ecff5c]' : index === 1 ? 'bg-[#57d73a]' : 'bg-[var(--slot4-accent)]'}`}>{getEditableCategory(post)}</span>
                    <h2 className="mt-3 text-xl font-black leading-[1.18]">{post.title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(1, 5).length ? posts.slice(1, 5) : posts.slice(0, 4)
  if (!railPosts.length) return null
  return (
    <section className="bg-white text-[#090b12]">
      <div className={`${dc.shell.section} py-14 sm:py-16`}>
        <div className="mb-7 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[-.02em]">Media News</h2>
            <p className="mt-1 text-lg font-semibold text-black/75">Relevant distribution stories that impact your visibility</p>
          </div>
          <Link href={primaryRoute} className="hidden text-3xl leading-none text-black/70 hover:text-black sm:block">→</Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {railPosts.map((post) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs font-black text-black/55">
                <span>{getEditableCategory(post)}</span>
                <span>Campaign</span>
              </div>
              <h3 className="mt-4 text-xl font-black leading-[1.35] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[8] || posts[0]
  const portraits = posts.slice(2, 6).length ? posts.slice(2, 6) : posts.slice(0, 4)
  if (!feature) return null
  return (
    <section className="bg-[#090b12] text-white">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <div className="mb-7 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[-.02em]">Signature Moves</h2>
            <p className="mt-1 text-lg font-semibold text-white/85">Learn from high-performing media distribution campaigns</p>
          </div>
          <Link href={primaryRoute} className="hidden text-3xl leading-none text-white/80 hover:text-white sm:block">→</Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {[feature, ...portraits].slice(0, 4).map((post) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group block text-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs font-black text-white/75">
                <span>{getEditableCategory(post)}</span>
                <span>Media reach</span>
              </div>
              <h3 className="mt-4 text-xl font-black leading-[1.25] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const lead = source[0] || posts[0]
  const briefs = source.slice(1, 6).length ? source.slice(1, 6) : posts.slice(0, 5)
  const performance = posts.slice(5, 8).length ? posts.slice(5, 8) : posts.slice(0, 3)
  if (!lead) return null
  return (
    <section className="bg-white text-[#090b12]">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[-.02em]">Promo Trends</h2>
            <p className="mt-1 text-lg font-semibold text-black/75">Get plugged into the latest media-marketing tactics and tools</p>
          </div>
          <Link href={primaryRoute} className="hidden text-3xl leading-none text-black/70 hover:text-black sm:block">→</Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-5">
          {[lead, ...briefs].slice(0, 5).map((post) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group block bg-black text-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="min-h-[170px] p-5">
                <h3 className="text-lg font-black leading-[1.25]">{post.title}</h3>
                <p className="mt-10 text-xs font-black">{getEditableCategory(post)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-[var(--slot4-accent)]">☆</span>
            <h2 className="text-4xl font-black">Performance</h2>
          </div>
          <Link href={primaryRoute} className="text-sm font-black text-[var(--slot4-accent)]">View All →</Link>
        </div>
        <div className="mt-7 grid gap-8 lg:grid-cols-[.9fr_1.8fr_.9fr]">
          {performance.slice(0, 3).map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className={`group block ${index === 1 ? 'lg:row-span-2' : ''}`}>
              <div className={`relative overflow-hidden bg-black ${index === 1 ? 'min-h-[420px]' : 'aspect-[4/3]'}`}>
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                {index === 1 ? <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.75))]" /> : null}
                {index === 1 ? <h3 className="absolute inset-x-0 bottom-0 p-6 text-3xl font-black leading-tight text-white">{post.title}</h3> : null}
              </div>
              {index !== 1 ? (
                <div className="pt-4">
                  <p className="text-xs font-black text-black/60">{getEditableCategory(post)}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight">{post.title}</h3>
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-black/70">{getEditableExcerpt(post, 110)}</p>
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[var(--slot4-dark-bg)] text-white">
      <div className={`${dc.shell.section} grid gap-px bg-white/10 lg:grid-cols-2`}>
        <div className="bg-[var(--slot4-dark-bg)] px-6 py-14 sm:px-10 lg:py-20">
          <p className="text-[10px] font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Trusted by brands</p>
          <h2 className="mt-4 max-w-xl text-5xl font-black leading-[1]">Give your announcement a professional distribution path.</h2>
        </div>
        <div className="flex flex-col justify-center bg-[var(--slot4-dark-bg)] px-6 py-14 sm:px-10 lg:py-20">
          <p className="max-w-xl text-lg leading-8 text-white/65">Publish press releases faster, package them beautifully, and guide readers toward the next step with clear campaign actions.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/create" className={dc.button.accent}>Create campaign</Link>
            <Link href="/contact" className="rounded-md border border-white/30 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] hover:bg-white hover:text-black">Talk to PR desk</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
