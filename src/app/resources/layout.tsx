import type { ReactNode } from 'react'

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#161411] to-[#0e0e0e] px-5 py-12 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">{children}</div>
    </main>
  )
}
