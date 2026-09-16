import Breadcrumbs from '../components/Breadcrumbs'
import Link from 'next/link'
import type React from 'react'

export type PracticeFaq = {
  question: string
  answer: string
  links?: {
    text: string
    href: string
  }[]
}

export function PracticeBreadcrumbs({
  current,
  href
}: {
  current: string
  href: string
}) {
  return (
    <Breadcrumbs
      items={[
        { name: 'Home', href: '/' },
        { name: 'Practice Areas', href: '/practice' },
        { name: current, href }
      ]}
    />
  )
}

function renderLinkedAnswer(answer: string, links: PracticeFaq['links'] = []) {
  if (!links.length) return answer

  const nodes: React.ReactNode[] = [answer]

  links.forEach((link) => {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i]
      if (typeof node !== 'string') continue

      const index = node.indexOf(link.text)
      if (index === -1) continue

      nodes.splice(
        i,
        1,
        node.slice(0, index),
        <Link key={`${link.href}-${i}`} href={link.href} className="text-[#d4af37] underline-offset-4 hover:underline">
          {link.text}
        </Link>,
        node.slice(index + link.text.length)
      )
      break
    }
  })

  return nodes
}

export function PracticeFaqSection({
  title,
  faqs,
}: {
  title: string
  faqs: PracticeFaq[]
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-base font-semibold text-[#bfa76a]">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{renderLinkedAnswer(faq.answer, faq.links)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
