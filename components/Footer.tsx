'use client'

import { useLanguage } from '@/components/LanguageProvider'
import Link from 'next/link'

const quickLinks = [
  { href: '/', labelKey: '/' },
  { href: '/about', labelKey: '/about' },
  { href: '/products', labelKey: '/products' },
  { href: '/careers', labelKey: '/careers' },
  { href: '/contact', labelKey: '/contact' },
]

const translations = {
  uz: {
    desc: 'Iplardan kiyimga qadar sifatli ishlab chiqarish. Andijon, Oʻzbekiston.',
    quick: 'Tezkor havolalar',
    contact: 'Aloqa',
    allRights: 'Barcha huquqlar himoyalangan.',
    madeWith: 'Ehtiyotkorlik va mehr bilan tikilgan 🧵',
    address: 'Andijon, Oʻzbekiston',
    hours: 'Dush–Jum: 08:00–18:00 (UZT)',
    labels: {
      '/': 'Bosh sahifa',
      '/about': 'Biz haqimizda',
      '/products': 'Mahsulotlar',
      '/careers': 'Karyera',
      '/contact': 'Aloqa'
    }
  },
  ru: {
    desc: 'Качество во всем. От нити до готовой одежды. Андижан, Узбекистан.',
    quick: 'Быстрые ссылки',
    contact: 'Контакты',
    allRights: 'Все права защищены.',
    madeWith: 'Сшито с заботой и мастерством 🧵',
    address: 'Андижан, Узбекистан',
    hours: 'Пн–Пт: 08:00–18:00 (UZT)',
    labels: {
      '/': 'Главная',
      '/about': 'О нас',
      '/products': 'Продукция',
      '/careers': 'Карьера',
      '/contact': 'Контакты'
    }
  },
  en: {
    desc: 'Crafting quality from thread to wardrobe. Andijan, Uzbekistan.',
    quick: 'Quick Links',
    contact: 'Contact',
    allRights: 'All rights reserved.',
    madeWith: 'Made with craft & care 🧵',
    address: 'Andijan, Uzbekistan',
    hours: 'Mon–Fri: 08:00–18:00 (UZT)',
    labels: {
      '/': 'Home',
      '/about': 'About Us',
      '/products': 'Products',
      '/careers': 'Careers',
      '/contact': 'Contact'
    }
  }
}

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz

  return (
    <footer className="bg-surface-alt text-text border-t border-border dark:bg-primary dark:text-white dark:border-transparent transition-colors duration-300" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
              Novda
            </span>
          </div>
          <p className="text-text-muted dark:text-white/60 text-sm leading-relaxed max-w-xs whitespace-pre-line">
            {t.desc}
          </p>
          {/* Socials */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-text/5 text-text hover:bg-secondary hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-secondary flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-text/5 text-text hover:bg-secondary hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-secondary flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href="https://t.me/+998000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-full bg-text/5 text-text hover:bg-secondary hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-secondary flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-6">{t.quick}</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-muted hover:text-text dark:text-white/60 dark:hover:text-white text-sm transition-colors duration-200"
                >
                  {t.labels[link.labelKey as keyof typeof t.labels]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-6">{t.contact}</h3>
          <ul className="space-y-3 text-sm text-text-muted dark:text-white/60">
            <li>📧 <a href="mailto:info@novdatex.com" className="hover:text-text dark:hover:text-white transition-colors">info@novdatex.com</a></li>
            <li>📞 <a href="tel:+998000000000" className="hover:text-text dark:hover:text-white transition-colors">+998 XX XXX XX XX</a></li>
            <li>📍 {t.address}</li>
            <li>🕐 {t.hours}</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border dark:border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-text-muted/60 dark:text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Novda Textile. {t.allRights}</p>
          <p>{t.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
