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
    { href: '/practice/medical-malpractice', label: 'Medical Malpractice' },
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
  const current = allLinks.find((l) => l.href === pathname) || allLinks[0]

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className={className}>
      <div className="relative max-w-sm" ref={dropdownRef}>
        <button onClick={() => setMenuOpen(!menuOpen)} className="w-full flex justify-between items-center p-3 rounded-lg bg-white/4 text-left">
          <span className="font-semibold">{current.label}</span>
          <span className="ml-2 text-white/80">▾</span>
        </button>

        {menuOpen && (
          <div className="mt-2 rounded-lg border border-white/8 bg-white/5 shadow-lg overflow-hidden z-40">
            <div className="px-3 py-2 text-xs font-semibold text-[#d4af37] border-b border-white/10">
              Personal Injury
            </div>
            {personalInjuryLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block px-4 py-3 text-sm hover:bg-white/6" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-xs font-semibold text-[#d4af37] border-b border-white/10 border-t border-white/10 mt-2">
              Criminal Defense
            </div>
            {criminalDefenseLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block px-4 py-3 text-sm hover:bg-white/6" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
