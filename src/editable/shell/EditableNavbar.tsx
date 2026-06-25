'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, LogOut, Menu, Search, UserCircle2, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { useScrolled } from '@/editable/components/Motion'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '../theme/brand.config'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Distributions', href: '/media-distribution' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const scrolled = useScrolled(16)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[1160px] items-center justify-between gap-4 rounded-full border border-white/70 bg-white/80 px-4 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'min-h-[58px] shadow-[0_16px_40px_rgba(13,23,46,0.14)]'
            : 'min-h-[68px] shadow-[0_10px_30px_rgba(13,23,46,0.08)]'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--slot4-dark-bg)] shadow-sm">
            <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-7 w-7 object-contain" />
          </span>
          <span className="truncate text-lg font-black tracking-tight text-[var(--slot4-dark-bg)] sm:text-xl">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-underline text-sm font-semibold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/search"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--editable-border)] text-[var(--slot4-muted-text)] transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)] sm:inline-flex"
          >
            <Search className="h-4 w-4" />
          </Link>

          {session ? (
            <>
              <span className="hidden items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-3 py-2 text-xs font-bold text-[var(--slot4-dark-bg)] sm:flex">
                <UserCircle2 className="h-4 w-4 text-[var(--slot4-accent)]" />
                <span className="max-w-24 truncate">{session.name}</span>
              </span>
              <button
                type="button"
                onClick={logout}
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--editable-border)] text-[var(--slot4-muted-text)] transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)] sm:inline-flex"
                aria-label="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="hidden text-sm font-semibold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)] sm:block"
            >
              Log in
            </Link>
          )}

          <Link
            href={session ? '/create' : '/signup'}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] py-2.5 pl-5 pr-2.5 text-sm font-bold text-white transition hover:bg-[var(--slot4-accent-fill)]"
          >
            {session ? 'Publish' : globalContent.nav.actions.primary.label}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--editable-border)] bg-white text-[var(--slot4-dark-bg)] lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-[1160px] rounded-3xl border border-[var(--editable-border)] bg-white p-3 shadow-[0_18px_50px_rgba(13,23,46,0.12)] lg:hidden">
          <div className="grid gap-1.5">
            {[
              ...navLinks,
              { label: 'Search', href: '/search' },
              ...(session
                ? [{ label: 'Create campaign', href: '/create' }]
                : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }]),
            ].map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-[var(--slot4-dark-bg)] transition hover:bg-[var(--slot4-accent-soft)]"
              >
                {item.label}
              </Link>
            ))}
            {session ? (
              <button
                type="button"
                onClick={() => {
                  logout()
                  setOpen(false)
                }}
                className="rounded-2xl px-4 py-3 text-left text-sm font-bold text-[var(--slot4-dark-bg)] transition hover:bg-[var(--slot4-accent-soft)]"
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
