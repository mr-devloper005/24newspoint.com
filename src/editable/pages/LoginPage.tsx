import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { Reveal } from '@/editable/components/Motion'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  const login = pagesContent.auth.login
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden text-[var(--slot4-page-text)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />
        <section className="mx-auto grid min-h-[calc(100vh-14rem)] max-w-[1160px] items-stretch gap-5 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <Reveal className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] p-8 text-white shadow-[0_30px_90px_rgba(13,23,46,0.3)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--slot4-accent)]/30 blur-3xl" />
            <p className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80"><Sparkles className="h-3.5 w-3.5" /> {login.badge}</p>
            <h1 className="relative mt-6 max-w-md text-4xl font-black leading-[1.05] sm:text-5xl">{login.title}</h1>
            <p className="relative mt-5 max-w-md text-base leading-8 text-white/70">{login.description}</p>
            <ul className="relative mt-8 grid gap-3">
              {login.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white/85">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--slot4-accent-2)]" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center rounded-[2rem] border border-[var(--editable-border)] bg-white p-7 shadow-[0_18px_50px_rgba(13,23,46,0.08)] sm:p-12 lg:p-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 text-3xl font-black text-[var(--slot4-dark-bg)]">{login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-6 border-t border-[var(--editable-border)] pt-5 text-sm text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-bold text-[var(--slot4-accent)] underline-offset-4 hover:underline">{login.createCta}</Link></p>
          </Reveal>
        </section>
      </main>
    </EditableSiteShell>
  )
}
