'use client'

import { Language, useLanguage } from '@/components/LanguageProvider'
import { useTheme } from '@/components/ThemeProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const languages: { code: Language; label: string; fullName: string }[] = [
  { code: 'en', label: 'EN', fullName: 'English' },
  { code: 'ru', label: 'RU', fullName: 'Русский' },
  { code: 'uz', label: 'UZ', fullName: 'Oʻzbekcha' },
]

const navTranslations = {
  en: {
    '/': 'Home',
    '/about': 'About Us',
    '/products': 'Products',
    '/careers': 'Careers',
    '/contact': 'Contact',
    'cta': 'Get a Quote'
  },
  ru: {
    '/': 'Главная',
    '/about': 'О нас',
    '/products': 'Продукция',
    '/careers': 'Карьера',
    '/contact': 'Контакты',
    'cta': 'Получить предложение'
  },
  uz: {
    '/': 'Bosh sahifa',
    '/about': 'Biz haqimizda',
    '/products': 'Mahsulotlar',
    '/careers': 'Karyera',
    '/contact': 'Aloqa',
    'cta': 'Narxni bilish'
  }
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center justify-between gap-1 w-20 h-9 rounded-full bg-surface border border-border text-text hover:bg-surface-alt hover:shadow-sm px-3 text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="flex items-center gap-1.5">
          <span>🌐</span>
          <span>{currentLang.label}</span>
        </span>
        <svg
          className={`w-3 h-3 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-surface border border-border shadow-lg rounded-2xl flex flex-col z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`flex items-center justify-between w-full px-4 py-2.5 text-left text-xs font-semibold transition-colors ${lang.code === language
                ? 'text-secondary bg-surface-alt font-bold'
                : 'text-text hover:bg-surface-alt'
                }`}
            >
              <span>{lang.fullName}</span>
              {lang.code === language && (
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language } = useLanguage()
  const t = navTranslations[language] || navTranslations.uz

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      id="navbar"
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full ${
        menuOpen
          ? 'top-0 max-w-full rounded-none bg-transparent px-0 border-none'
          : scrolled
          ? 'top-0 md:top-4 max-w-full md:max-w-5xl rounded-none md:rounded-full shadow-md backdrop-blur-md bg-surface/90 border-b border-border md:border md:px-2'
          : 'top-0 max-w-full border-b border-border/50 bg-background/95 backdrop-blur-sm px-0'
      }`}
    >
      <div className={`relative z-50 w-full mx-auto flex items-center justify-between h-16 ${(scrolled || menuOpen) ? 'px-6 md:px-4' : 'max-w-7xl px-6'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Novda Textile Home">
          <span
            className="text-2xl font-black tracking-tight text-text"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Novda
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${active
                  ? 'text-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary'
                  : 'text-text-muted hover:text-text'
                  }`}
              >
                {t[link.href as keyof typeof t]}
              </Link>
            )
          })}
        </nav>

        {/* Right Action Group */}
        <div className="hidden md:flex items-center gap-4 z-10">
          {/* Theme toggle */}
          {mounted && (
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-border text-text hover:bg-surface-alt transition-all duration-200 hover:scale-110"
            >
              <span
                className="block transition-transform duration-300"
                style={{ transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(0deg) scale(0.85)' }}
              >
                {theme === 'dark' ? (
                  /* Sun icon */
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  /* Moon icon */
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </span>
            </button>
          )}

          {/* Language switcher */}
          {mounted && <LanguageSwitcher />}

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ml-2"
            id="navbar-cta"
          >
            {t.cta}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile theme toggle */}
          {mounted && (
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-alt border border-border text-text transition-all duration-200"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}
          <button
            id="mobile-menu-toggle"
            className="text-text p-2 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              /* Perfect X Close Icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              /* Premium Hamburger Icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 h-screen w-screen bg-surface z-40 flex flex-col justify-between px-6 pt-24 pb-8 overflow-y-auto shadow-xl">
          {/* Top Links Section */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-bold tracking-tight transition-colors ${pathname === link.href ? 'text-secondary' : 'text-text-muted hover:text-text'
                  }`}
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {t[link.href as keyof typeof t]}
              </Link>
            ))}
          </div>

          {/* Bottom Actions Section */}
          <div className="flex flex-col gap-6 mt-8">
            {/* Mobile Language Switcher */}
            {mounted && (
              <div>
                <p className="text-xs font-semibold tracking-wider text-text-muted uppercase mb-3">Language / Язык / Til</p>
                <div className="grid grid-cols-3 gap-2 bg-surface-alt p-1 rounded-xl border border-border">
                  {languages.map((lang) => {
                    const { language: activeLang, setLanguage } = useLanguage()
                    return (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`py-2.5 rounded-lg text-xs font-bold transition-all ${lang.code === activeLang
                            ? 'bg-surface text-secondary shadow-sm'
                            : 'text-text-muted hover:text-text'
                          }`}
                      >
                        {lang.fullName.split(' ')[0]}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-4 rounded-full bg-secondary text-white font-bold hover:bg-accent transition-all duration-200 hover:shadow-md"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
