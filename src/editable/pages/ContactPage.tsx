'use client'

import { FileText, Mail, Megaphone, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { Reveal } from '@/editable/components/Motion'

const desks = [
  { icon: FileText, title: 'Campaign review', body: 'Send release drafts, media assets, publisher notes, and campaign timing questions.' },
  { icon: Megaphone, title: 'Distribution strategy', body: 'Discuss syndication, industry targeting, newsroom collaborations, and PR launch plans.' },
  { icon: Mail, title: 'Account support', body: 'Reach the team for submission, billing, publishing, or profile-related help.' },
]

export default function ContactPage() {
  const contact = pagesContent.contact
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden text-[var(--slot4-page-text)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />

        <section className="mx-auto max-w-[1160px] px-4 pb-6 pt-16 text-center sm:px-6 lg:px-8 lg:pt-20">
          <p className="hero-reveal mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)] shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> {contact.eyebrow}
          </p>
          <h1 className="hero-reveal mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.03em] text-[var(--slot4-dark-bg)] sm:text-6xl" style={{ animationDelay: '.08s' }}>
            {contact.title}
          </h1>
          <p className="hero-reveal mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]" style={{ animationDelay: '.16s' }}>
            {contact.description}
          </p>
        </section>

        <section className="mx-auto grid max-w-[1160px] gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:pb-24">
          <Reveal as="aside" className="overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] text-white shadow-[0_24px_70px_rgba(13,23,46,0.28)]">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border-b border-white/10 p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10"><desk.icon className="h-5 w-5 text-[var(--slot4-accent-2)]" /></span>
                  <span className="text-xs font-black text-white/40">0{index + 1}</span>
                </div>
                <h2 className="mt-5 text-2xl font-black">{desk.title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/65">{desk.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120} className="rounded-[2rem] border border-[var(--editable-border)] bg-white p-6 shadow-[0_18px_50px_rgba(13,23,46,0.08)] sm:p-10 lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-3xl font-black text-[var(--slot4-dark-bg)]">{contact.formTitle}</h2>
            <EditableContactLeadForm />
          </Reveal>
        </section>
      </main>
    </EditableSiteShell>
  )
}
