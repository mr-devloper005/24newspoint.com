'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function EditableContactLeadForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data?.message || 'Unable to send your message.')
      setStatus('success')
      setMessage(data?.message || 'Thanks. Your message has been received.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to send your message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 border-t border-[var(--editable-border)] bg-white pt-7">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Full name" placeholder="Your name" required />
        <Field name="email" type="email" label="Email address" placeholder="you@company.com" required />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field name="phone" label="Phone number" placeholder="Optional" />
        <Field name="subject" label="Campaign goal" placeholder="Distribution, release review, media outreach..." />
      </div>
      <label className="mt-4 grid gap-2 text-sm font-black text-slate-600">
        Campaign notes
        <textarea name="message" required rows={6} placeholder="Tell us what you want to announce, who you need to reach, and your timing." className="rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[var(--slot4-accent)] focus:ring-4 focus:ring-[var(--slot4-accent)]/10" />
      </label>
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {message ? (
        <div className={`mt-5 flex items-start gap-3 border px-4 py-3 text-sm font-bold ${status === 'success' ? 'border-emerald-800 bg-emerald-50 text-emerald-800' : 'border-red-700 bg-red-50 text-red-700'}`}>
          {status === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : null}
          <span>{message}</span>
        </div>
      ) : null}
      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-[image:var(--slot4-accent-grad)] px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(91,99,245,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Send message
      </button>
    </form>
  )
}

function Field({ name, label, type = 'text', placeholder, required = false }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-black text-slate-600">
      {label}
      <input name={name} type={type} required={required} placeholder={placeholder} className="h-[3.25rem] rounded-md border border-slate-300 bg-white px-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[var(--slot4-accent)] focus:ring-4 focus:ring-[var(--slot4-accent)]/10" />
    </label>
  )
}
