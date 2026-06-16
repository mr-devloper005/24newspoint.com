'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, UserCircle2, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '../theme/brand.config'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 text-slate-950 shadow-[0_10px_30px_rgba(16,24,40,.05)] backdrop-blur">
      <div className="mx-auto grid min-h-[76px] max-w-[1120px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            
          </button>
        </div>

        <Link
              href="/"
              className="inline-flex items-center gap-3 justify-center"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--editable-border)] bg-white shadow-sm">
                <img
                  src="/favicon.png?v=20260413"
                  alt={slot4BrandConfig.siteName}
                  className="h-9 w-9 object-contain"
                />
              </span>

              <span className="truncate text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {SITE_CONFIG.name}
              </span>
            </Link>
        


        <div className="flex items-center justify-end gap-4">
          {session ? (
            <>
              
              <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black sm:flex">
                <UserCircle2 className="h-4 w-4 text-[var(--slot4-accent)]" />
                <span className="max-w-24 truncate">{session.name}</span>
              </div>
              <button type="button" onClick={logout} className="hidden h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)] sm:inline-flex" aria-label="Logout"><LogOut className="h-4 w-4" /></button>
            </>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] text-slate-600 hover:text-[var(--slot4-accent)] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-md bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:-translate-y-0.5 sm:px-5">
            {session ? 'Publish' : 'Start campaign'}
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-950 text-white">
        <div className="mx-auto flex min-h-[50px] max-w-[1120px] items-center gap-6 px-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center gap-6 text-xs font-black uppercase tracking-[.14em] text-white/70 lg:flex">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/media-distribution" className="hover:text-white">Distributions</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center rounded-md border border-white/15 bg-white/10 lg:max-w-[320px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search campaigns" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, { label: 'Distributions', href: '/media-distribution' },  { label: 'Search', href: '/search' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: session.name, href: '/profile' }, { label: 'Create campaign', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
