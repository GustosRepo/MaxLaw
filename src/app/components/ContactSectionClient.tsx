"use client";
import React from 'react';
import Image from 'next/image';
import LazyMap from './LazyMap';
import {
  FIRM_ADDRESS_LINE1,
  FIRM_ADDRESS_LINE2,
  FIRM_PHONE_DISPLAY,
  FIRM_PHONE_E164,
} from '../../lib/constants';

const BRAND = { accent: '#d4af37' };

const ACCEPTED_CASE_TYPES = ['Personal Injury', 'Criminal Defense'];

export default function ContactSectionClient() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    caseType: '',
    injurySeverity: '',
    medicalEstimate: '',
    chargeName: '',
    arrested: '',
    piSubtype: '',
    atFault: '',
    otherDriverInsurance: '',
    wereYouInjured: '',
    injuryList: '',
    passengers: '',
    vehicleDamageSeverity: '',
    financialAbility: '',
  });
  const [formStatus, setFormStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = React.useState('');
  const [mapRevealed, setMapRevealed] = React.useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ACCEPTED_CASE_TYPES.includes(formData.caseType || '')) {
      setFormStatus('error');
      setFormMessage('We do not handle that matter. Please call for a referral or check our practice areas.');
      return;
    }
    setFormStatus('loading');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormMessage('Thank you! We\'ll reach out to you shortly.');
        setFormData(prev => ({
          ...prev,
          firstName: '', lastName: '', email: '', phone: '', message: '', consent: false,
          caseType: '', injurySeverity: '', medicalEstimate: '', chargeName: '', arrested: '', piSubtype: '', atFault: '', otherDriverInsurance: '', wereYouInjured: '', injuryList: '', passengers: '', vehicleDamageSeverity: '', financialAbility: '',
        }));
      } else {
        setFormStatus('error');
        setFormMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please try again.');
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
    <div className="mt-0 grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <form onSubmit={handleFormSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6" aria-label="Free consultation form">
          {formStatus === 'success' && (
            <div className="mb-4 rounded-lg bg-green-900/20 border border-green-500/30 p-4 text-green-300">{formMessage}</div>
          )}
          {formStatus === 'error' && (
            <div className="mb-4 rounded-lg bg-red-900/20 border border-red-500/30 p-4 text-red-300">{formMessage}</div>
          )}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="text-sm font-semibold block mb-2">What type of matter is this? <span className="text-[#d4af37]">*</span></label>
              <select value={formData.caseType} onChange={(e) => setFormData(prev => ({ ...prev, caseType: e.target.value }))} required className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                <option value="">Select a case type</option>
                <option>Personal Injury</option>
                <option>Criminal Defense</option>
                <option>Family Law</option>
                <option>Immigration</option>
                <option>Business / Contract</option>
                <option>Other</option>
              </select>
              {!ACCEPTED_CASE_TYPES.includes(formData.caseType || '') && formData.caseType !== '' && (
                <div className="mt-2 text-sm text-yellow-300">We do not handle this matter. Please call for a referral.</div>
              )}
            </div>
            {formData.caseType === 'Personal Injury' && (
              <>
                <label className="text-sm">Personal injury type
                  <select value={formData.piSubtype} onChange={(e) => setFormData(prev => ({ ...prev, piSubtype: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                    <option value="">Select</option>
                    <option value="Car Accident">Car Accident</option>
                    <option value="Slip and Fall">Slip and Fall</option>
                    <option value="Premises Liability">Premises Liability</option>
                    <option value="Medical Malpractice">Medical Malpractice</option>
                    <option value="Product Liability">Product Liability</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label className="text-sm">Injury severity
                  <select onChange={(e) => setFormData(prev => ({ ...prev, injurySeverity: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                    <option value="">Select</option>
                    <option value="minor">Minor (no hospitalization)</option>
                    <option value="moderate">Moderate (medical treatment)</option>
                    <option value="severe">Severe (hospitalization, long-term)</option>
                  </select>
                </label>
                <label className="text-sm">Estimated medical bills
                  <input name="medicalEstimate" value={formData.medicalEstimate} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Estimated bills or 'unknown'" />
                </label>
                <label className="text-sm">Who was at-fault?
                  <input name="atFault" value={formData.atFault} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Driver / Other party" />
                </label>
                <label className="text-sm">Did the other driver have insurance and do you have insurance?
                  <input name="otherDriverInsurance" value={formData.otherDriverInsurance} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Other driver: yes/no/unknown; Yours: yes/no" />
                </label>
                <label className="text-sm">Were you injured during the accident?
                  <select value={formData.wereYouInjured} onChange={(e) => setFormData(prev => ({ ...prev, wereYouInjured: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
                <label className="text-sm">What are the injuries that you have that you are currently aware of?
                  <input name="injuryList" value={formData.injuryList} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="List injuries" />
                </label>
                <label className="text-sm">Were there other passengers in your car? How many? Were they injured?
                  <input name="passengers" value={formData.passengers} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="e.g. 2; one injured" />
                </label>
                <label className="text-sm">How much damage was done to your vehicle? Minor, moderate or severe?
                  <select value={formData.vehicleDamageSeverity} onChange={(e) => setFormData(prev => ({ ...prev, vehicleDamageSeverity: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                    <option value="">Select</option>
                    <option value="minor">Minor</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                  </select>
                </label>
              </>
            )}
            {formData.caseType === 'Criminal Defense' && (
              <>
                <label className="text-sm">Were you arrested?
                  <select value={formData.arrested} onChange={(e) => setFormData(prev => ({ ...prev, arrested: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </label>
                <label className="text-sm">Charge (if known)
                  <input name="chargeName" value={formData.chargeName} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="e.g. DUI, theft" />
                </label>
                <label className="text-sm">Do you have the financial ability to retain private counsel?
                  <select value={formData.financialAbility} onChange={(e) => setFormData(prev => ({ ...prev, financialAbility: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </>
            )}
            <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
              <input name="firstName" value={formData.firstName} onChange={handleInputChange} autoComplete="given-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Jane" />
            </label>
            <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
              <input name="lastName" value={formData.lastName} onChange={handleInputChange} autoComplete="family-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Doe" />
            </label>
            <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="you@example.com" />
            </label>
            <label className="text-sm font-semibold">Phone
              <input name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="tel" className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="(702) 555‑0123" />
            </label>
            <label className="text-sm font-semibold md:col-span-2">Brief description <span className="text-[#d4af37]">*</span>
              <textarea name="message" value={formData.message} onChange={handleInputChange} aria-required required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Briefly describe your matter" />
            </label>
            <div className="flex items-start gap-2 md:col-span-2">
              <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleInputChange} className="mt-1" required />
              <label htmlFor="consent" className="text-sm font-semibold">I have read the disclaimer. <span className="text-white/60">(Submitting does not create an attorney‑client relationship)</span></label>
            </div>
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
            <button type="submit" disabled={formStatus === 'loading'} className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] disabled:opacity-50 disabled:cursor-not-allowed">
              {formStatus === 'loading' ? 'Sending...' : 'Request a free consultation'}
            </button>
          </div>
        </form>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 flex flex-col gap-4">
        <h3 className="text-base font-semibold">Contact Information</h3>
        <address className="not-italic text-white/80">
          The Law Offices of Saggese & Associates<br />{FIRM_ADDRESS_LINE1}<br />{FIRM_ADDRESS_LINE2}
        </address>
        <p className="text-white/80">Phone: <a href={`tel:${FIRM_PHONE_E164}`} className="underline" style={{ textDecorationColor: BRAND.accent }}>{FIRM_PHONE_DISPLAY}</a></p>
        <p className="text-white/80">Fax: 702-778-8884</p>
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-white/75">Connect</h4>
          <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Social links">
            {[
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marc-saggese-4a84a34b/?original_referer=https%3A%2F%2Fwww.maxlawnv.com%2F' },
              { name: 'Avvo', href: 'https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html' },
            ].map(s => (
              <li key={s.name} className="list-none">
                <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" aria-label={`Visit our ${s.name} profile (opens in new tab)`} className="rounded-full bg-white/6 px-4 py-1.5 text-xs font-medium tracking-wide hover:bg-white/10 transition text-center inline-flex items-center gap-1">
                  {s.name}
                  <span aria-hidden className="text-[10px] opacity-60">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-sm text-white/60">Office hours: Mon–Fri 8:00–5:00 • Sat–Sun Closed</div>
        {!mapRevealed ? (
          <button onClick={() => setMapRevealed(true)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10">Load map</button>
        ) : (
          <>
            <LazyMap />
            <div className="mt-2 text-[10px] tracking-wide uppercase text-white/30">Map data © {new Date().getFullYear()} Google</div>
          </>
        )}
      </div>
    </div>
  );
}
