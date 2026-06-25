import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { Reveal } from '@/editable/components/Motion'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  const signup = pagesContent.auth.signup
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden text-[var(--slot4-page-text)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />
        <section className="mx-auto grid min-h-[calc(100vh-14rem)] max-w-[1160px] items-stretch gap-5 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <Reveal className="order-2 flex flex-col justify-center rounded-[2rem] border border-[var(--editable-border)] bg-white p-7 shadow-[0_18px_50px_rgba(13,23,46,0.08)] sm:p-12 lg:order-1 lg:p-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-3xl font-black text-[var(--slot4-dark-bg)]">{signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-6 border-t border-[var(--editable-border)] pt-5 text-sm text-[var(--slot4-muted-text)]">Already have an account? <Link href="/login" className="font-bold text-[var(--slot4-accent)] underline-offset-4 hover:underline">{signup.loginCta}</Link></p>
          </Reveal>
          <Reveal delay={120} className="relative order-1 flex flex-col justify-center overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] p-8 text-white shadow-[0_30px_90px_rgba(13,23,46,0.3)] sm:p-12 lg:order-2 lg:p-16">
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[var(--slot4-accent-2)]/30 blur-3xl" />
            <p className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80"><Sparkles className="h-3.5 w-3.5" /> {signup.badge}</p>
            <h2 className="relative mt-6 max-w-md text-4xl font-black leading-[1.05] sm:text-5xl">{signup.title}</h2>
            <p className="relative mt-5 max-w-md text-base leading-8 text-white/70">{signup.description}</p>
            <ul className="relative mt-8 grid gap-3">
              {signup.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white/85">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--slot4-accent-2)]" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </main>
    </EditableSiteShell>
  )
}
