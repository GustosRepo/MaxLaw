import React from 'react'
import PracticeNav from '../../components/PracticeNav'

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-white font-['Inter'] py-12 relative overflow-hidden">
      <div className="practice-bg" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-6"><PracticeNav /></div>
        <div className="space-y-10 max-w-5xl mx-auto">{children}</div>
      </div>
    </main>
  )
}
