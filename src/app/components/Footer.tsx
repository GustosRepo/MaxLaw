import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-white/70 flex-wrap justify-center md:justify-end">
          <Link href="#privacy" className="hover:text-white/90">Privacy</Link>
          <Link href="#disclaimer" className="hover:text-white/90">Disclaimer</Link>
          <Link href="/contact" className="hover:text-white/90">Contact</Link>
          <span className="hidden md:inline text-white/25">|</span>
          <a
            href="https://code-werx.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-white/90 whitespace-nowrap"
            aria-label="Website designed and developed by Code Werx"
          >Made by <span className="text-white">Code Werx</span></a>
        </div>
      </div>
    </footer>
  )
}
