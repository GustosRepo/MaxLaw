import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Results — Saggese & Associates',
  description: 'Representative results and outcomes for The Law Offices of Saggese & Associates. Past results do not guarantee future outcomes.',
  alternates: { canonical: 'https://www.maxlawnv.com/results' },
  openGraph: {
    title: 'Representative Results',
    description: 'Sample outcomes from Saggese & Associates (not a guarantee).',
    url: 'https://www.maxlawnv.com/results',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Results — Saggese & Associates',
    description: 'Sample outcomes (not a guarantee).'
  }
};

export default function ResultsPage() {
  return (
    <>
      <style>{`
          @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; border-radius:4px }
          .card-hover { transition:transform .32s cubic-bezier(.2,.9,.3,1), box-shadow .28s ease, border-color .22s ease; will-change:transform }
          .card-hover:hover { transform:translateY(-8px) scale(1.01); box-shadow:0 34px 90px rgba(0,0,0,0.65); border-color:rgba(212,175,55,0.12) }
          .watermark { font-weight:900; color:rgba(255,255,255,0.04); letter-spacing:-2px; pointer-events:none }
          .custom-bg { background-image: radial-gradient(circle at 8% 12%, rgba(191,167,106,0.03), transparent 6%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.02), transparent 22%), linear-gradient(180deg,#0e0e0e,#0f0f0f); }
        `}</style>

      <main className="min-h-screen custom-bg bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-['Inter'] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-8">
            <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg overflow-hidden">
              <div className="absolute -right-12 -top-6 text-[6rem] md:text-[9rem] font-black text-white/6 select-none pointer-events-none hidden md:block">Results</div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Representative Results</h1>
                <div className="mt-3 w-36"><span className="accent-underline" /></div>
                <p className="mt-3 text-sm text-white/80 max-w-3xl">A selection of outcomes and representative results from The Law Offices of Saggese & Associates. Results vary and past outcomes do not guarantee future results.</p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <main className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Multi-million dollar settlement', desc: 'Catastrophic injury settlement for a commercial vehicle collision.' },
                  { title: 'Felony charge dismissed', desc: 'Client exonerated after evidence suppression and plea negotiations.' },
                  { title: 'Career-saving plea', desc: 'Reduced charges and probation for a professional license holder.' },
                  { title: 'Successful trial verdict', desc: 'Not guilty verdict after jury trial for a high-profile criminal case.' },
                ].map((r) => (
                  <article key={r.title} className="rounded-2xl p-5 bg-gradient-to-br from-white/3 to-transparent border border-white/8 card-hover">
                    <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                    <p className="text-sm text-white/80 mt-2">{r.desc}</p>
                    <div className="mt-4 text-xs text-white/70">Outcome details available on request</div>
                  </article>
                ))}
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-3">Notes on Results</h2>
                <p className="text-sm text-white/80">Past results are case-specific. We share representative matters so prospective clients can understand the firm’s experience. Contact us to discuss whether our experience fits your needs.</p>
              </div>
            </main>

            <aside className="space-y-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/8 shadow-lg text-center">
                <div className="text-sm font-semibold text-white mb-2">Ready to talk?</div>
                <div className="text-white/80 mb-4">Free consultation • Same‑day appointments</div>
                <a href="tel:17027788883" className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-3 text-sm font-semibold text-[#0e0e0e] mb-3">Call (702) 778‑8883</a>
                <Link href="/contact" className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/90">Request a consultation</Link>
              </div>

              <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-sm text-white/80">
                <div className="font-semibold text-white mb-2">Privacy</div>
                <div>Client confidentiality is maintained for all matters. Case specifics are shared only with permission.</div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
