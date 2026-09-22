import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MARC_AWARDS, MARC_HEADSHOT_SRC } from "../../../lib/constants";

export const metadata: Metadata = {
  title: "Marc A. Saggese, Esq. | Las Vegas Trial Attorney",
  description: "Profile of Marc A. Saggese — Las Vegas injury & criminal defense attorney with decades of trial experience. Free consultations.",
  alternates: { canonical: "https://www.maxlawnv.com/about/marc-a-saggese" },
  openGraph: {
    title: "Marc A. Saggese, Esq. | Las Vegas Trial Attorney",
    description: "Las Vegas injury & criminal defense lawyer with decades of courtroom experience.",
    type: "profile",
    url: "https://www.maxlawnv.com/about/marc-a-saggese",
    images: [
      { url: `https://www.maxlawnv.com${MARC_HEADSHOT_SRC}`, width: 1320, height: 1604, alt: "Attorney Marc A. Saggese" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc A. Saggese, Esq. | Las Vegas Trial Attorney",
    description: "Las Vegas injury & criminal defense lawyer. Free consultation.",
    images: [`https://www.maxlawnv.com${MARC_HEADSHOT_SRC}`],
  },
};

export default function MarcSaggesePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#111215] text-white font-[var(--font-inter)] pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <section className="rounded-3xl bg-gradient-to-br from-white/3 to-transparent border border-white/8 p-6 md:p-10 shadow-lg mt-8">
          <style>{`
            .accent-underline { display:block; height:6px; width:120px; background:linear-gradient(90deg,#bfa76a,#d4af37); transform-origin:left; }
            .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
            .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
          `}</style>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
            <div className="flex items-start justify-center md:justify-start">
              <div className="relative w-48 overflow-hidden rounded-2xl md:w-[220px]">
                <div className="absolute inset-0 rounded-2xl blur-2xl" style={{ background: 'radial-gradient(ellipse at center, rgba(191,167,106,0.12), transparent 30%)' }} />
                <Image src={MARC_HEADSHOT_SRC} alt="Marc A. Saggese, Esq." width={320} height={389} className="relative rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-[#bfa76a]/20 object-cover bg-[#0f1011]" />
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#bfa76a]">Marc A. Saggese, Esq.</h1>
              <div className="mt-2 mb-4">
                <span className="inline-block w-full md:w-auto"><span className="accent-underline" /></span>
              </div>

              <p className="text-sm text-white/80 mb-4">Founder & Lead Attorney — The Law Offices of Saggese & Associates. Trial-ready representation in injury and criminal defense; individualized attention and seasoned courtroom experience.</p>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">Call (702) 778‑8883</a>
                <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/90">Request Consultation</Link>
                <span className="w-full text-center text-xs text-white/70 md:w-auto md:ml-3">Free consultation • 1:1 attorney attention</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <section className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/6 card-hover" aria-labelledby="bar-admissions-heading">
                  <h2 id="bar-admissions-heading" className="text-lg font-semibold text-white">Bar Admissions</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90 list-disc list-inside">
                    <li>Supreme Court of the United States, Washington DC</li>
                    <li>State Bar of Nevada</li>
                    <li>State Bar of Georgia</li>
                    <li>State Bar of Texas</li>
                    <li>United States Court of Appeals, 9th Circuit</li>
                    <li>United States Court of Appeals, 5th Circuit</li>
                    <li>United States Court of Appeals, 3rd Circuit</li>
                    <li>United States Court of Military Appeals</li>
                    <li>United States Court of Appeals for the Armed Forces</li>
                  </ul>
                </section>

                <section className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/6 card-hover" aria-labelledby="education-heading">
                  <h2 id="education-heading" className="text-lg font-semibold text-white">Education</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90 list-disc list-inside">
                    <li>J.D., Columbus School of Law, The Catholic University of America, 1999</li>
                    <li>B.A., State University of New York at Cortland, 1995</li>
                    <li>Graduate, The Judge Advocate General&apos;s (JAG) Legal Center and School, U.S. Army, 2000</li>
                  </ul>
                </section>

                <section className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/6 card-hover md:col-span-2" aria-labelledby="awards-heading">
                  <h2 id="awards-heading" className="text-lg font-semibold text-white">Awards</h2>
                  <ul className="mt-3 grid grid-cols-1 gap-3 text-sm leading-relaxed text-white/90 md:grid-cols-2">
                    {MARC_AWARDS.map((award, index) => (
                      <li key={`${award}-${index}`} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">{award}</li>
                    ))}
                  </ul>
                </section>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-3">Professional Highlights</h2>
              <ul className="text-sm text-white/90 list-disc list-inside">
                <li>Practicing law since 1999; represented 5,000+ clients</li>
                <li>Pro tempore judge, Las Vegas Municipal Court; Small Claims Court judge; Traffic Court magistrate</li>
                <li>Captain, JAG Corps, U.S. Army; litigation for U.S. DOJ</li>
                <li>Featured on Fox, Court TV, CBS; weekly writer for Las Vegas Review‑Journal</li>
                <li>Inspiration for Pete Kaczmarek in the CBS drama <em>The Defenders</em></li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Associations & Memberships</h3>
                <ul className="text-sm text-white/90 list-disc list-inside">
                  <li>National Association of Distinguished Counsel</li>
                  <li>Multi-Million Dollar Advocates Forum</li>
                  <li>Clark County Bar Association</li>
                  <li>Association of Trial Lawyers of America</li>
                </ul>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Contact & Office</h3>
                <address className="not-italic text-sm text-white/80">
                  <div>The Law Offices of Saggese & Associates</div>
                  <div>732 S. Sixth Street, Suite 200C</div>
                  <div>Las Vegas, Nevada 89101</div>
                  <div className="mt-3">
                    <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#bfa76a] px-4 py-2 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">Call 702-778-8883</a>
                  </div>
                  <div><a href="https://www.google.com/maps/dir/?api=1&destination=732+S.+Sixth+Street,+Suite+200C,+Las+Vegas,+Nevada+89101" target="_blank" rel="noreferrer" className="underline text-[#bfa76a]">Map & Directions</a></div>
                </address>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/8 shadow-lg text-center">
              <div className="text-sm font-semibold text-white mb-2">Ready to Talk?</div>
              <div className="text-white/80 mb-4">Free consultation • Same‑day appointments</div>
              <a href="tel:17027788883" className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#bfa76a] px-4 py-3 text-sm font-semibold text-[#0e0e0e] mb-3">Call (702) 778‑8883</a>
              <Link href="/contact" className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/90">Request a consultation</Link>
            </div>

            <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-sm text-white/80">
              <div className="font-semibold text-white mb-2">Quick Facts</div>
              <div>Trial-ready attorney with decades of litigation experience.</div>
            </div>
          </aside>
        </section>

  {/* Removed inline footer; global <Footer /> handles site-wide footer content */}
      </div>
    </main>
  );
}
