'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, PlusCircle, Send, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
}

const fieldClass = 'rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--slot4-dark-bg)] outline-none transition placeholder:text-slate-400 focus:border-[var(--slot4-accent)] focus:ring-4 focus:ring-[var(--slot4-accent)]/10'
const labelClass = 'grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--slot4-muted-text)]'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task, setTask] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="relative min-h-screen overflow-hidden px-4 py-16 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />
          <section className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-[var(--editable-border)] bg-white p-7 shadow-[0_24px_70px_rgba(13,23,46,0.1)] md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[var(--slot4-dark-bg)] text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--slot4-accent)]/30 blur-3xl" />
              <Lock className="relative h-20 w-20 opacity-80" />
            </div>
            <div className="self-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">{pagesContent.create.locked.badge}</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.03em] text-[var(--slot4-dark-bg)] sm:text-5xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--slot4-accent-grad)] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(91,99,245,0.35)] transition hover:-translate-y-0.5">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5">Sign up</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="relative min-h-screen overflow-hidden text-[var(--slot4-page-text)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(91,99,245,0.16),transparent_70%)]" />
        <section className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--editable-border)] bg-white p-6 shadow-[0_24px_70px_rgba(13,23,46,0.1)] lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <aside>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">{pagesContent.create.hero.badge}</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.03em] text-[var(--slot4-dark-bg)] sm:text-5xl">{pagesContent.create.hero.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.create.hero.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`rounded-2xl border p-4 text-left transition ${active ? 'border-transparent bg-[var(--slot4-dark-bg)] text-white' : 'border-[var(--editable-border)] bg-[var(--slot4-cream)] hover:-translate-y-0.5'}`}>
                      <Icon className="h-5 w-5" />
                      <span className="mt-3 block text-sm font-black">{item.label}</span>
                      <span className={`mt-1 block text-xs font-semibold ${active ? 'text-white/65' : 'text-[var(--slot4-soft-muted-text)]'}`}>{item.description}</span>
                    </button>
                  )
                })}
              </div>
            </aside>

            <form onSubmit={submit} className="rounded-[1.5rem] border border-[var(--editable-border)] bg-[var(--slot4-cream)] p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-soft-muted-text)]">Create {activeTask?.label || 'post'}</p>
                  <h2 className="mt-1 text-2xl font-black tracking-[-0.02em] text-[var(--slot4-dark-bg)]">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--slot4-dark-bg)]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <label className={labelClass}>Release headline<input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Company launches..." required /></label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={labelClass}>Industry category<input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Technology, finance, health..." /></label>
                  <label className={labelClass}>Source URL<input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://company.com/news" /></label>
                </div>
                <label className={labelClass}>Campaign thumbnail URL<input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="https://..." /></label>
                <label className={labelClass}>Media pitch summary<textarea className={`${fieldClass} min-h-24 normal-case tracking-normal`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Summarize the announcement and why it matters." required /></label>
                <label className={labelClass}>Press release body<textarea className={`${fieldClass} min-h-48 normal-case tracking-normal`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Add the complete release, boilerplate, quotes, and supporting details." required /></label>
              </div>

              {created ? (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[image:var(--slot4-accent-grad)] px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(91,99,245,0.35)] transition hover:-translate-y-0.5">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
