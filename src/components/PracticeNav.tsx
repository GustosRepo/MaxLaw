"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PracticeNav({ className = '' }: { className?: string }) {
  const pathname = usePathname() || ''

  const personalInjuryLinks = [
    { href: '/practice/car-accidents', label: 'Car Accidents' },
    { href: '/practice/car-accident-statistics', label: 'Car Accident Statistics' },
    { href: '/practice/cell-phone-related-accidents', label: 'Cell Phone-Related Accidents' },
    { href: '/practice/underinsured-and-uninsured-accidents', label: 'Underinsured & Uninsured' },
    { href: '/practice/motorcycle-accidents', label: 'Motorcycle Accidents' },
    { href: '/practice/truck-accidents', label: 'Truck Accidents' },
    { href: '/practice/commercial-vehicle-accidents', label: 'Commercial Vehicle Accidents' },
    { href: '/practice/crosswalk-and-pedestrian-accidents', label: 'Crosswalk & Pedestrian' },
    { href: '/practice/premises-liability', label: 'Premises Liability' },
    { href: '/practice/product-liability', label: 'Product Liability' },
    { href: '/practice/brain-and-spine-injury', label: 'Brain & Spine Injury' },
    { href: '/practice/excessive-force', label: 'Excessive Force' },
    { href: '/practice/elder-abuse', label: 'Elder Abuse' },
    { href: '/practice/wrongful-death', label: 'Wrongful Death' },
    { href: '/practice/insurance-settlements-and-checks', label: 'Insurance Settlements & Checks' },
  ]

  const criminalDefenseLinks = [
    { href: '/criminal-defense/dui', label: 'DUI' },
    { href: '/criminal-defense/prostitution', label: 'Prostitution' },
    { href: '/criminal-defense/larceny', label: 'Larceny' },
    { href: '/criminal-defense/domestic-violence', label: 'Domestic Violence' },
    { href: '/criminal-defense/drugs', label: 'Drugs' },
    { href: '/criminal-defense/theft', label: 'Theft' },
    { href: '/criminal-defense/sexual-assault', label: 'Sexual Assault' },
    { href: '/criminal-defense/burglary', label: 'Burglary' },
    { href: '/criminal-defense/forgery', label: 'Forgery' },
    { href: '/criminal-defense/bad-checks', label: 'Bad Checks' },
    { href: '/criminal-defense/murder', label: 'Murder' },
    { href: '/criminal-defense/juvenile-crimes', label: 'Juvenile Crimes' },
  ]

  const allLinks = [...personalInjuryLinks, ...criminalDefenseLinks]

  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const current = allLinks.find((l) => l.href === pathname) || allLinks[0]

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className={className + ' w-full flex justify-center px-4 md:px-0'}>
      <div className="relative" ref={dropdownRef}>
        <button
          ref={buttonRef}
          aria-haspopup="true"
            aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-full sm:min-w-[240px] flex justify-between items-center px-4 py-3 rounded-xl bg-white/7 md:backdrop-blur border border-white/10 hover:bg-white/12 transition"
        >
          <span className="font-semibold text-sm tracking-wide">{current.label}</span>
          <span className={`ml-2 text-white/70 transition-transform ${menuOpen ? 'rotate-180' : ''}`}>▾</span>
        </button>

        {menuOpen && (
          <div
            role="menu"
            className="absolute left-1/2 top-full -translate-x-1/2 mt-3 w-screen max-w-xl rounded-2xl border border-white/10 bg-[#121212]/96 md:backdrop-blur-xl shadow-[0_10px_40px_-18px_rgba(0,0,0,0.65)] overflow-hidden z-50 ring-1 ring-black/40 max-h-[70vh] overflow-y-auto"
          >
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-4">
                <div className="text-xs font-semibold text-[#d4af37] tracking-wide mb-2">Personal Injury</div>
                <ul className="space-y-1">
                  {personalInjuryLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        role="menuitem"
                        className={`block px-3 py-2 rounded-md text-sm hover:bg-white/10 hover:text-white/90 transition ${(pathname === l.href) ? 'bg-white/10 text-white' : 'text-white/80'}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4">
                <div className="text-xs font-semibold text-[#d4af37] tracking-wide mb-2">Criminal Defense</div>
                <ul className="space-y-1">
                  {criminalDefenseLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        role="menuitem"
                        className={`block px-3 py-2 rounded-md text-sm hover:bg-white/10 hover:text-white/90 transition ${(pathname === l.href) ? 'bg-white/10 text-white' : 'text-white/80'}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
