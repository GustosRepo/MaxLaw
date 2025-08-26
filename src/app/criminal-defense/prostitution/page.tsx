import Link from 'next/link'

export const metadata = {
  title: 'Prostitution Defense | Saggese & Associates',
  description: 'Defense for prostitution-related charges. Protect your rights with experienced representation.'
}

export default function ProstitutionPage() {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Prostitution Defense</h1>
        <p className="text-white/75 mt-3">We defend clients facing prostitution and related charges with discretion and strategic representation.</p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <p className="text-white/80 leading-relaxed mb-3">Allegations of prostitution and related offenses can have sensitive consequences, including potential immigration issues, employment risk, and reputational harm. We treat these matters with discretion and aggressive representation when necessary.</p>

        <h3 className="mt-4 text-lg font-semibold text-white">Defense approaches</h3>
        <ul className="mt-3 list-disc pl-5 text-white/80 mb-3">
          <li>Investigate entrapment or inducement by law enforcement</li>
          <li>Challenge credibility of evidence and witness statements</li>
          <li>Negotiate resolution that minimizes collateral consequences</li>
        </ul>

        <p className="text-white/80 leading-relaxed mb-3">We often succeed by highlighting lack of intent, procedural defects, or by negotiating resolutions that prioritize confidentiality and minimal long-term impact.</p>

        <div className="mt-4 flex gap-3">
          <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Call (702) 778‑8883</a>
          <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90">Request a free consultation</Link>
        </div>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates.</footer>
    </>
  )
}
