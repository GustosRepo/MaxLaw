"use client";
import React from 'react';
import Link from 'next/link';
import {
  CRIMINAL_DEFENSE_CASE_TYPES,
  PERSONAL_INJURY_CASE_TYPES,
} from '../../lib/constants';

const ACCEPTED_CASE_TYPES = ['Injury', 'Criminal Defense'];

interface ContactFormInnerProps {
  onSubmitSuccess?: () => void;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

type FormDataShape = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  caseType: string;
  injurySeverity: string;
  medicalEstimate: string;
  chargeName: string;
  arrested: string;
  piSubtype: string;
  atFault: string;
  otherDriverInsurance: string;
  wereYouInjured: string;
  injuryList: string;
  passengers: string;
  vehicleDamageSeverity: string;
  financialAbility: string;
};

const INITIAL_FORM: FormDataShape = {
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
};

export default function ContactFormInner({ onSubmitSuccess }: ContactFormInnerProps) {
  const [formData, setFormData] = React.useState<FormDataShape>(INITIAL_FORM);
  const [formStatus, setFormStatus] = React.useState<FormStatus>('idle');
  const [formMessage, setFormMessage] = React.useState('');

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
        setFormData(INITIAL_FORM);
        onSubmitSuccess?.();
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
    <form onSubmit={handleFormSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 [&_label]:leading-relaxed [&_input:not([type=checkbox])]:text-base [&_select]:text-base [&_textarea]:text-base" aria-label="Free consultation form">
      <h2 className="mb-2 text-2xl font-bold text-white">Tell us about your case</h2>
      <p className="mb-6 text-base leading-relaxed text-white/75">Complete the form below and our team will review your message.</p>
      {formStatus === 'error' && (
        <div className="mb-4 rounded-lg bg-red-900/20 border border-red-500/30 p-4 text-red-300" role="alert">{formMessage}</div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="caseType" className="block mb-2 text-lg font-bold text-white">What type of matter is this? <span className="text-[#d4af37]">*</span></label>
          <select id="caseType" value={formData.caseType} onChange={(e) => setFormData(prev => ({ ...prev, caseType: e.target.value }))} required className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-3 text-base">
            <option value="">Select a case type</option>
            {ACCEPTED_CASE_TYPES.map(caseType => (
              <option key={caseType} value={caseType}>{caseType}</option>
            ))}
          </select>
          {!ACCEPTED_CASE_TYPES.includes(formData.caseType || '') && formData.caseType !== '' && (
            <div className="mt-2 text-sm text-yellow-300">We do not handle this matter. Please call for a referral.</div>
          )}
        </div>
        {formData.caseType === 'Injury' && (
          <>
            <label className="text-base">Injury type
              <select value={formData.piSubtype} onChange={(e) => setFormData(prev => ({ ...prev, piSubtype: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-3 text-base">
                <option value="">Select</option>
                {PERSONAL_INJURY_CASE_TYPES.map((caseType) => (
                  <option key={caseType.label} value={caseType.label}>{caseType.label}</option>
                ))}
              </select>
            </label>
            <label className="text-base">Injury severity
              <select value={formData.injurySeverity} onChange={(e) => setFormData(prev => ({ ...prev, injurySeverity: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-3 text-base">
                <option value="">Select</option>
                <option value="minor">Minor (no hospitalization)</option>
                <option value="moderate">Moderate (medical treatment)</option>
                <option value="severe">Severe (hospitalization, long-term)</option>
              </select>
            </label>
            <label className="text-sm">Estimated medical bills
              <select value={formData.medicalEstimate} onChange={(e) => setFormData(prev => ({ ...prev, medicalEstimate: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                <option value="">Select</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-25k">$5,000 - $25,000</option>
                <option value="25k-plus">Over $25,000</option>
                <option value="unknown">Unknown</option>
              </select>
            </label>
            <label className="text-sm">Was the other vehicle at fault?
              <select value={formData.atFault} onChange={(e) => setFormData(prev => ({ ...prev, atFault: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unknown">Unknown</option>
              </select>
            </label>
            <label className="text-sm">Does the other driver have insurance?
              <select value={formData.otherDriverInsurance} onChange={(e) => setFormData(prev => ({ ...prev, otherDriverInsurance: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No / unknown</option>
              </select>
            </label>
            <label className="text-sm">Were you injured?
              <select value={formData.wereYouInjured} onChange={(e) => setFormData(prev => ({ ...prev, wereYouInjured: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="text-sm">List injuries (if known)
              <textarea name="injuryList" value={formData.injuryList} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="List injuries" />
            </label>
            <label className="text-sm">Were there other passengers? How many? Were they injured?
              <input name="passengers" value={formData.passengers} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="e.g. 2; one injured" />
            </label>
            <label className="text-sm">Vehicle damage severity
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
              <select value={formData.chargeName} onChange={(e) => setFormData(prev => ({ ...prev, chargeName: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                <option value="">Select</option>
                {CRIMINAL_DEFENSE_CASE_TYPES.map((caseType) => (
                  <option key={caseType.label} value={caseType.label}>{caseType.label}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">Ability to retain private counsel?
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
          <label htmlFor="consent" className="text-sm font-semibold leading-relaxed">
            I consent to being contacted by The Law Offices of Saggese &amp; Associates regarding my inquiry and agree to the{' '}
            <Link href="/privacy-policy" className="text-[#d4af37] underline underline-offset-2">Privacy Policy</Link>{' '}
            and{' '}
            <Link href="/disclaimer" className="text-[#d4af37] underline underline-offset-2">Disclaimer</Link>.
            <span className="mt-1 block text-white/60">Submitting this form does not establish an attorney-client relationship.</span>
          </label>
        </div>
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
        <button type="submit" disabled={formStatus === 'loading'} className="mt-3 w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-4 text-lg font-bold text-[#0e0e0e] shadow-[0_8px_24px_rgba(212,175,55,0.25)] disabled:opacity-50 disabled:cursor-not-allowed">
          {formStatus === 'loading' ? 'Sending...' : 'Request a free consultation'}
        </button>
        {formStatus === 'success' && (
          <div className="rounded-lg border border-blue-400/30 bg-[#0b2a4a] p-4 text-base font-semibold text-blue-100 md:col-span-2" role="status" aria-live="polite">
            {formMessage}
          </div>
        )}
      </div>
    </form>
  );
}
