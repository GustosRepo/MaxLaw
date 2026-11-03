export const CASE_TYPES = ['Injury', 'Criminal Defense', 'Media / Press'] as const;
export type CaseType = typeof CASE_TYPES[number];

const LIMITS = {
  firstName: 100, lastName: 100, email: 254, phone: 50, message: 10000,
  piSubtype: 150, injurySeverity: 100, medicalEstimate: 100, atFault: 100,
  otherDriverInsurance: 100, wereYouInjured: 100, injuryList: 2000,
  passengers: 200, vehicleDamageSeverity: 100, chargeName: 200,
  arrested: 100, financialAbility: 100,
} as const;

export type ContactForm = Record<keyof typeof LIMITS, string> & {
  caseType: CaseType;
  consent: true;
};

export class ContactInputError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}

export function validateContactForm(input: unknown): ContactForm {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    throw new ContactInputError('Please complete the required fields.');
  }
  const data = input as Record<string, unknown>;
  if (data.company) throw new ContactInputError('Unable to submit this form.');
  if (data.consent !== true) throw new ContactInputError('Please agree to be contacted about your inquiry.');
  const fields = {} as Record<keyof typeof LIMITS, string>;
  for (const [field, limit] of Object.entries(LIMITS)) {
    const value = data[field];
    if (value !== undefined && typeof value !== 'string') throw new ContactInputError('Please check the form fields.');
    const text = ((value as string | undefined) ?? '').trim();
    if (text.length > limit || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text)) {
      throw new ContactInputError(`Please shorten or correct the ${field} field.`);
    }
    fields[field as keyof typeof LIMITS] = text;
  }
  for (const field of ['firstName', 'lastName', 'email', 'message'] as const) {
    if (!fields[field]) throw new ContactInputError('Please enter your name, email, and message.');
  }
  if (/[\r\n]/.test(fields.firstName + fields.lastName + fields.email + fields.phone) ||
      !/^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/.test(fields.email)) {
    throw new ContactInputError('Please enter a valid email and contact details.');
  }
  const caseType = data.caseType === 'Personal Injury' ? 'Injury' : data.caseType;
  if (!CASE_TYPES.includes(caseType as CaseType)) {
    throw new ContactInputError('Please select Injury, Criminal Defense, or Media / Press.', 422);
  }
  return { ...fields, email: fields.email.toLowerCase(), caseType: caseType as CaseType, consent: true };
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}
