"use client";

import React, { useState } from 'react';
import { 
  FIRM_ADDRESS_LINE1, 
  FIRM_ADDRESS_LINE2, 
  FIRM_ADDRESS_FULL, 
  FIRM_PHONE_DISPLAY, 
  FIRM_PHONE_E164 
} from '../../lib/constants';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactPageClient() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! We\'ll reach out to you shortly.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
        });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.error || 'Failed to send message. Please try again.' 
        });
      }
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-['Inter'] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-6">
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
              <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Contact</h1>
              <p className="mt-2 text-white/80">Schedule a free consultation or call <a href="tel:17027788883" className="underline">(702) 778‑8883</a>.</p>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
            <div className="md:col-span-2 flex">
              <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex-1 flex flex-col">
                {status.type === 'success' && (
                  <div className="mb-4 rounded-lg bg-green-900/20 border border-green-500/30 p-4 text-green-300">
                    {status.message}
                  </div>
                )}
                
                {status.type === 'error' && (
                  <div className="mb-4 rounded-lg bg-red-900/20 border border-red-500/30 p-4 text-red-300">
                    {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
                    <input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                      className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" 
                      placeholder="Jane" 
                    />
                  </label>

                  <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
                    <input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                      className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" 
                      placeholder="Doe" 
                    />
                  </label>

                  <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" 
                      placeholder="you@example.com" 
                    />
                  </label>

                  <label className="text-sm font-semibold">Phone
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" 
                      placeholder="(702) 555‑0123" 
                    />
                  </label>

                  <label className="text-sm font-semibold md:col-span-2">Brief description of your legal issue <span className="text-[#d4af37]">*</span>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      rows={5} 
                      className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" 
                      placeholder="Briefly describe your matter" 
                    />
                  </label>

                  <div className="flex items-start gap-2 md:col-span-2">
                    <input 
                      id="consent" 
                      name="consent" 
                      type="checkbox" 
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1" 
                      required 
                    />
                    <label htmlFor="consent" className="text-sm">
                      I have read the disclaimer. <span className="text-white/60">(Submitting does not create an attorney‑client relationship)</span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status.type === 'loading'}
                    className="mt-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-2.5 font-semibold text-[#0e0e0e] shadow-xl shadow-yellow-700/20 transition-all duration-300 hover:shadow-yellow-600/30 disabled:opacity-50 disabled:cursor-not-allowed md:col-span-2"
                  >
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6 flex flex-col h-full">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#bfa76a]">Location</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>{FIRM_ADDRESS_LINE1}</p>
                  <p>{FIRM_ADDRESS_LINE2}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#bfa76a]">Phone</h3>
                <p className="text-sm">
                  <a href={`tel:${FIRM_PHONE_E164}`} className="underline">{FIRM_PHONE_DISPLAY}</a>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#bfa76a]">Hours</h3>
                <div className="space-y-1 text-sm text-white/80">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#bfa76a]">Free Consultation</h3>
                <p className="text-sm text-white/80">
                  We offer a free initial consultation to discuss your case and legal options.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#bfa76a]">Connect</h3>
                <ul className="flex flex-wrap gap-3 text-sm">
                  {[
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marc-saggese-4a84a34b/?original_referer=https%3A%2F%2Fwww.maxlawnv.com%2F' },
                    { name: 'Avvo', href: 'https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html' },
                  ].map(s => (
                    <li key={s.name} className="list-none">
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label={`Visit our ${s.name} profile (opens in new tab)`}
                        className="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-1.5 font-medium tracking-wide hover:bg-white/20 transition"
                      >
                        {s.name}
                        <span aria-hidden className="text-[10px] opacity-60">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1" aria-hidden />
            </div>
          </div>

          <section className="mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Map & Directions</h2>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.7606809079157!2d-115.1462139236927!3d36.1608364724385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c37be7b8c0c7%3A0x3dc32c9f3e909fd4!2s732%20S%206th%20St%20%23200c%2C%20Las%20Vegas%2C%20NV%2089101!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Law Offices of Saggese & Associates Location"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-white/80">
                <p><strong>Address:</strong> {FIRM_ADDRESS_FULL}</p>
                <p><strong>Parking:</strong> Street parking and nearby public lots available</p>
                <p><strong>Public Transit:</strong> Accessible via RTC transit routes</p>
                <p><strong>Directions:</strong> Located in downtown Las Vegas, near the Las Vegas courthouse</p>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}
