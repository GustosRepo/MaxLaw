"use client"

import React from 'react'
import PracticeNav from '../../components/PracticeNav'

export default function CriminalDefenseLayout({ children }: { children: React.ReactNode }) {

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-white font-['Inter'] py-12 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 md:px-6 grid practice-grid gap-6">

        <div className="mb-4">
          <PracticeNav />
        </div>

        <div className="col-span-1 md:col-span-1">{/* placeholder for hidden sidebar space */}</div>

        <div className="col-span-1 md:col-span-1">
          <div className="space-y-6">{children}</div>
        </div>
      </div>
    </main>
  )
}
