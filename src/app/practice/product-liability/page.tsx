import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import { PracticeBreadcrumbs, PracticeFaqSection, type PracticeFaq } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas Product Liability Lawyer | Saggese & Associates',
  description: 'Las Vegas product liability lawyer handling defective product, design, manufacturing & warning defect claims. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas product liability lawyer',
    'defective product attorney nevada',
    'dangerous product claim',
    'design defect lawyer las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice/product-liability` },
  openGraph: {
    title: 'Las Vegas Product Liability Lawyer',
    description: 'Defective product & design defect claims – free consultation.',
    url: `${SITE_URL}/practice/product-liability`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Product Liability Lawyer',
    description: 'Injured by a defective product? Free consultation (702) 778‑8883.'
  }
}

const productLiabilityFaqs: PracticeFaq[] = [
  {
    question: 'What should be preserved if a product may have caused an injury?',
    answer: 'Relevant items may include the product, packaging, instructions, receipts, photos, repair records, and available recall or warning information. Keeping these materials together can help document the product and the circumstances surrounding the incident.'
  },
  {
    question: 'What types of products can be involved in product-related injury claims?',
    answer: 'Examples can include vehicles or auto parts, tools, appliances, children’s products, and other consumer products. The circumstances can vary depending on the product, how it was used, and what happened.'
  },
  {
    question: 'What if a product-related incident caused a serious or fatal injury?',
    answer: 'Serious product-related incidents may also involve brain or spine injuries when the head, neck, back, nerves, or spinal cord are affected. Fatal incidents may also overlap with the firm’s wrongful death practice area.',
    links: [
      { text: 'brain or spine injuries', href: '/practice/brain-and-spine-injury' },
      { text: 'wrongful death practice area', href: '/practice/wrongful-death' }
    ]
  }
]

export default function ProductLiabilityPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Product Liability" href="/practice/product-liability" />

      {/* Content only — PracticeLayout provides main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Las Vegas Product Liability Lawyer</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Defective products can cause catastrophic injuries. We hold manufacturers accountable for design, manufacturing, and warning defects.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Product liability claims can arise when a vehicle or auto part, a tool or appliance, a children’s product, or another consumer product injures someone because it breaks, malfunctions, or is unsafe in ordinary or reasonably expected use. These cases may involve the manufacturer, a component supplier, or another company that sold or distributed the product.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            If a product may have caused an injury, preserving the product, packaging, instructions, receipts, photos, and repair or recall information can be important. Product liability cases may involve design defects, manufacturing defects, inadequate warnings, or failures in the supply chain.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Product Liability Case Factors</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">Design defects</strong> affect entire product lines.</li>
            <li><span className="stat-number">•</span> Manufacturing defects occur during <strong className="text-[#d4af37]">production</strong>.</li>
            <li><span className="stat-number">•</span> Warning defects involve <strong className="text-[#d4af37]">inadequate instructions</strong>.</li>
            <li><span className="stat-number">•</span> Multiple parties may be liable in the supply chain.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Design defects, manufacturing defects, and inadequate warnings — we evaluate claims to find the strongest legal theories for recovery. Serious product injuries may also involve <Link href="/practice/brain-and-spine-injury" className="text-[#d4af37] underline-offset-4 hover:underline">brain or spine injury</Link> claims or, in fatal incidents, <Link href="/practice/wrongful-death" className="text-[#d4af37] underline-offset-4 hover:underline">wrongful death</Link> claims.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Product defect types</div>
          <p className="text-sm text-white/80">Understanding different defect categories helps build stronger cases against manufacturers and suppliers.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">Preserve Product</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Defect types</div>
              <div className="text-lg font-semibold text-[#d4af37]">3 main</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Liable parties</div>
              <div className="text-lg font-semibold text-[#d4af37]">Multiple</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How we help</h2>
        <p className="text-white/80 leading-relaxed mb-3">We preserve the product, retain experts, and pursue full recovery from manufacturers and distributors responsible for dangerous products.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

      <PracticeFaqSection title="Product Liability Questions" faqs={productLiabilityFaqs} />

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/product-liability"
        serviceType="Las Vegas Product Liability Lawyer"
        description="Las Vegas product liability lawyer handling defective product, design, manufacturing & warning defect claims. Free consultation."
        keywords={['las vegas product liability lawyer','defective product attorney','design defect lawyer nevada']}
        faqs={productLiabilityFaqs}
      />
    </>
  )
}
