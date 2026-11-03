'use client';

import { PREFERENCES_EVENT } from '../../lib/consent';

export default function CookiePreferencesButton() {
  return <button type="button" className="hover:text-[#d4af37]" onClick={() => window.dispatchEvent(new Event(PREFERENCES_EVENT))}>Cookie preferences</button>;
}
