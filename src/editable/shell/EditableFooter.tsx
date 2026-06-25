'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { Reveal } from '@/editable/components/Motion'

const socials: { Icon: any; href: string; label: string }[] = []
  
  

export function EditableFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-3 pb-4 pt-10 sm:px-5">
      <Reveal className="mx-auto max-w-[1160px] overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-white shadow-[0_24px_70px_rgba(13,23,46,0.1)]">
        <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:p-16">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[var(--slot4-dark-bg)]">
                <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-7 w-7 object-contain" />
              </span>
              <span className="text-xl font-black tracking-tight text-[var(--slot4-dark-bg)]">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--slot4-muted-text)]">
              {globalContent.footer?.description || SITE_CONFIG.description}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-[var(--slot4-accent-fill)]"
            >
              {globalContent.footer?.contactEmail || 'press@yourbrand.com'}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {globalContent.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-black text-[var(--slot4-dark-bg)]">{column.title}</h3>
              <div className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <Link
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    className="nav-underline w-fit text-sm font-semibold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-accent)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--editable-border)] px-8 py-6 sm:flex-row sm:px-12 lg:px-16">
          <p className="text-xs font-semibold text-[var(--slot4-soft-muted-text)]">
            © {year} {SITE_CONFIG.name}. {globalContent.footer?.bottomNote || 'Media distribution and press visibility.'}
          </p>
          <div className="flex items-center gap-2.5">
            {socials.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--editable-border)] text-[var(--slot4-muted-text)] transition hover:-translate-y-0.5 hover:border-[var(--slot4-accent)] hover:bg-[var(--slot4-accent)] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
