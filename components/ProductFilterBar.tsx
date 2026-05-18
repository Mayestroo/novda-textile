'use client'

import { useEffect, useRef, useState } from 'react'

type Category = {
  id: string
  name: string
}

export default function ProductFilterBar({ categories }: { categories: Category[] }) {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      {
        rootMargin: '-96px 0px 0px 0px', // 96px corresponds to top-24
        threshold: 0,
      }
    )

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Observer for scrollspy (active section)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // Trigger when the section comes near the top of the viewport (below the sticky nav)
        rootMargin: '-120px 0px -60% 0px',
        threshold: 0,
      }
    )

    categories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })

    // Also observe the private label section immediately below categories
    const privateLabelEl = document.getElementById('private-label-section')
    if (privateLabelEl) observer.observe(privateLabelEl)

    return () => observer.disconnect()
  }, [categories])

  useEffect(() => {
    if (activeSection) {
      const activeEl = document.getElementById(`filter-tab-${activeSection}`)
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }, [activeSection])

  return (
    <>
      <div ref={sentinelRef} className="w-full h-px -mt-px pointer-events-none" aria-hidden="true" />
      <div className={`sticky top-24 z-40 w-full flex justify-center pointer-events-none transition-all duration-500 ${
        activeSection === 'private-label-section' ? 'opacity-0 scale-95 pointer-events-none' : ''
      }`} aria-label="Product category navigation wrapper">
        <nav
          className={`pointer-events-auto transition-all duration-700 ease-in-out overflow-hidden mx-auto ${
            isSticky
              ? 'bg-surface/90 backdrop-blur-md shadow-md rounded-full border border-border w-max max-w-[95%]'
              : 'bg-surface shadow-sm border-b border-border/50 w-full max-w-full rounded-none'
          }`}
        >
          <div className={`flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none transition-all duration-700 ease-in-out ${
            isSticky
              ? 'px-3 py-2 w-full justify-start'
              : 'px-6 py-3 w-full max-w-7xl mx-auto justify-start'
          }`}>
            {categories.map((c) => {
              const isActive = activeSection === c.id
              return (
                <a
                  key={c.id}
                  id={`filter-tab-${c.id}`}
                  href={`#${c.id}`}
                  className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-text text-background border border-transparent shadow-sm'
                      : isSticky
                        ? 'text-text hover:bg-text hover:text-background border border-transparent'
                        : 'border border-border text-text hover:bg-text hover:text-background hover:border-text'
                  }`}
                >
                  {c.name}
                </a>
              )
            })}
          </div>
        </nav>
      </div>
    </>
  )
}
