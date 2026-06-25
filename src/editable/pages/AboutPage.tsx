import Link from 'next/link'
import { ArrowRight, Sparkles, Target, BarChart3, Newspaper } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { Reveal } from '@/editable/components/Motion'

const valueIcons = [Target, BarChart3, Newspaper]

export default function AboutPage() {
  const about = pagesContent.about
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden text-[var(--slot4-page-text)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />

        <section className="mx-auto max-w-[1160px] px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8 lg:pt-20">
          <p className="hero-reveal mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)] shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> {about.badge}
          </p>
          <h1 className="hero-reveal mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.03em] text-[var(--slot4-dark-bg)] sm:text-6xl" style={{ animationDelay: '.08s' }}>
            {about.title}
          </h1>
          <p className="hero-reveal mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]" style={{ animationDelay: '.16s' }}>
            {about.description}
          </p>
        </section>

        <section className="mx-auto max-w-[1160px] px-4 py-8 sm:px-6 lg:px-8">
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-3xl p-7 text-center shadow-[0_16px_44px_rgba(13,23,46,0.08)] ${
                  index === 1 ? 'bg-[var(--slot4-dark-bg)] text-white' : index === 2 ? 'bg-[image:var(--slot4-accent-grad)] text-white' : 'border border-[var(--editable-border)] bg-white'
                }`}
              >
                <p className="text-4xl font-black tracking-[-0.03em]">{stat.value}</p>
                <p className={`mt-2 text-sm font-bold ${index === 1 || index === 2 ? 'text-white/80' : 'text-[var(--slot4-muted-text)]'}`}>{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="mx-auto grid max-w-[1160px] gap-5 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
          <Reveal as="article" className="rounded-[2rem] border border-[var(--editable-border)] bg-white p-7 shadow-[0_18px_50px_rgba(13,23,46,0.08)] sm:p-10 lg:p-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
            <p className="mt-5 text-2xl font-bold leading-[1.35] text-[var(--slot4-dark-bg)] sm:text-3xl">{about.description}</p>
            <div className="article-content mt-8 space-y-5">
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
          <div className="grid gap-5">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length]
              return (
                <Reveal key={value.title} delay={index * 90} className="rounded-3xl border border-[var(--editable-border)] bg-white p-7 shadow-[0_14px_36px_rgba(13,23,46,0.06)] transition duration-300 hover:-translate-y-1.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-5 text-xl font-black text-[var(--slot4-dark-bg)]">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-4 pb-20 sm:px-6 lg:px-8">
          <Reveal className="relative overflow-hidden rounded-[2.2rem] bg-[var(--slot4-dark-bg)] px-6 py-14 text-center shadow-[0_30px_90px_rgba(13,23,46,0.3)] sm:px-12">
            <div className="pointer-events-none absolute -left-20 -top-16 h-64 w-64 rounded-full bg-[var(--slot4-accent)]/30 blur-3xl" />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{about.mission.badge}</p>
            <h2 className="relative mx-auto mt-4 max-w-3xl text-3xl font-black leading-[1.1] text-white sm:text-5xl">{about.mission.title}</h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">{about.mission.description}</p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/media-distribution" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--slot4-accent-grad)] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5">Explore the archive <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--slot4-dark-bg)]">Talk to us</Link>
            </div>
          </Reveal>
        </section>
      </main>
    </EditableSiteShell>
  )
}
