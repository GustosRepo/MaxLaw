import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Law Offices of Saggese & Associates website and contact forms.',
  alternates: { canonical: 'https://www.maxlawnv.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#d4af37] mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-sm leading-7 text-white/80">
          <p>
            The Law Offices of Saggese &amp; Associates (“we,” “our,” or “firm”) is committed to protecting the privacy
            and security of personal information collected through this website and our communications with prospective and
            current clients. This Privacy Policy explains what information we collect, how we use it, and when we may share it.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Information We Collect</h2>
            <p>
              We may collect basic contact information you provide directly through our website, including your name, email,
              phone number, case type, and message details. We may also collect information about your device and browser,
              such as IP address, pages viewed, and referral source, when you interact with our site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">How We Use Information</h2>
            <p>
              We use the information you submit to respond to your inquiry, evaluate whether our firm may be able to assist,
              communicate about your matter, and provide information about legal services. We may also use information to
              improve our website, monitor usage, and maintain security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Consent and Communications</h2>
            <p>
              By submitting a contact form or otherwise contacting our firm, you consent to our use of the information you
              provide for the purpose of responding to your inquiry, evaluating your matter, and contacting you regarding
              legal services. This consent may be withdrawn at any time by contacting us, but withdrawal may affect our ability
              to respond to your request for legal assistance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Information Sharing</h2>
            <p>
              We do not sell personal information. We may share information with trusted service providers who assist with
              website hosting, email delivery, communications, and internal operations, as needed to provide our services.
              We may also disclose information if required by law, court order, subpoena, or as necessary to protect our
              legal rights or the safety of others.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Data Retention</h2>
            <p>
              We retain information only as long as necessary for the purposes described in this policy or as required by
              applicable law, professional obligations, or litigation hold obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Cookies and Analytics</h2>
            <p>
              Our website may use cookies or similar technologies to improve functionality, analyze traffic, and understand
              how visitors use our site. You may configure your browser to decline cookies; however, some website features
              may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or limit the use of personal
              information, subject to applicable law and professional obligations. If you would like to exercise those
              rights or ask questions about this policy, contact us at the information below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Contact Information</h2>
            <p>
              The Law Offices of Saggese &amp; Associates<br />
              732 S 6th St #200c<br />
              Las Vegas, NV 89101<br />
              Phone: (702) 778-8883<br />
              Email: info@maxlawnv.com
            </p>
          </section>

          <p>
            This policy is provided for informational purposes and does not constitute legal advice. We may update this policy
            from time to time to reflect changes in our practices or legal requirements.
          </p>
        </div>
      </div>
    </main>
  );
}
