"use client";

import React from 'react';

export default function ContactPageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-['Inter'] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-6">
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
              <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Contact</h1>
              <p className="mt-2 text-white/80">Schedule a free consultation or call <a href="tel:17027788883" className="underline">(702) 778‑8883</a>.</p>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll reach out shortly."); }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
                    <input required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="Jane" />
                  </label>

                  <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
                    <input required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="Doe" />
                  </label>

                  <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
                    <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="you@example.com" />
                  </label>

                  <label className="text-sm font-semibold">Phone
                    <input className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="(702) 555‑0123" />
                  </label>

                  <label className="text-sm font-semibold md:col-span-2">Brief description of your legal issue <span className="text-[#d4af37]">*</span>
                    <textarea required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="Briefly describe your matter" />
                  </label>

                  <button type="submit" className="mt-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-2.5 font-semibold text-[#0e0e0e] shadow-xl shadow-yellow-700/20 transition-all duration-300 hover:shadow-yellow-600/30 md:col-span-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#bfa76a]">Location</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>702 S. 3rd Street</p>
                  <p>Las Vegas, NV 89101</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#bfa76a]">Phone</h3>
                <p className="text-sm">
                  <a href="tel:17027788883" className="underline">(702) 778‑8883</a>
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
            </div>
          </div>

          <section className="mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Map & Directions</h2>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.7751874834147!2d-115.14485952464977!3d36.16885447295451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c41744e8c3b7%3A0x8e9a6a7b9b0f0c7d!2s702%20S%203rd%20St%2C%20Las%20Vegas%2C%20NV%2089101!5e0!3m2!1sen!2sus!4v1693245678901!5m2!1sen!2sus"
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
                <p><strong>Address:</strong> 702 S. 3rd Street, Las Vegas, NV 89101</p>
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
