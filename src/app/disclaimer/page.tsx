import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Disclaimer',
  description: 'Legal disclaimer for The Law Offices of Saggese & Associates website and online consultations.',
  alternates: { canonical: 'https://www.maxlawnv.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#d4af37] mb-6">Disclaimer</h1>

        <div className="space-y-6 text-sm leading-7 text-white/80">
          <p>
            The information on this website is intended for general informational purposes only and does not constitute legal
            advice, nor does use of this site or submission of a form create an attorney-client relationship.
          </p>

          <p>
            The Law Offices of Saggese &amp; Associates provides legal information and resources for educational purposes. Legal
            advice depends on the facts and circumstances of each individual matter, and the content of this website should not
            be relied upon as legal advice without consulting a qualified attorney.
          </p>

          <p>
            Any communication through this website, including through the contact form, is not a guarantee of representation,
            and no attorney-client relationship is formed unless and until the firm confirms in writing that it agrees to
            represent you.
          </p>

          <p>
            Past results do not guarantee future outcomes. No representation is made that the quality of legal services will be
            the same as in any prior matter.
          </p>

          <p>
            The firm may decline representation in any matter for any lawful reason, including conflicts of interest, lack of an
            adequate factual basis, or other considerations.
          </p>

          <p>
            If you are in need of immediate legal assistance, please call (702) 778-8883 or contact the firm directly. If you
            are facing an emergency involving imminent danger, call emergency services immediately.
          </p>

          <p>
            This disclaimer is provided in connection with the firm’s website and is subject to applicable Nevada law and
            professional rules. We may revise this disclaimer from time to time.
          </p>
        </div>
      </div>
    </main>
  );
}
