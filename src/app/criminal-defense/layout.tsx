"use client"

import React from 'react'
import PracticeNav from '../../components/PracticeNav'

export default function CriminalDefenseLayout({ children }: { children: React.ReactNode }) {

  // Navigation link data centralized in PracticeNav; removed local unused arrays.

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
