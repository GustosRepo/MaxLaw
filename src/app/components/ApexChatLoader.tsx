"use client";

import React from "react";
import { CONSENT_EVENT, getConsentChoice } from '../../lib/consent';

const APEX_CHAT_SRC = "https://www.apexchat.net/scripts/invitation.ashx?company=maxlawnv";

export default function ApexChatLoader() {
  React.useEffect(() => {
    if (window.location.pathname === "/contact") return;
    if (document.querySelector(`script[src="${APEX_CHAT_SRC}"]`)) return;

    let loaded = false;

    const loadChat = () => {
      if (loaded) return;
      loaded = true;
      const script = document.createElement("script");
      script.src = APEX_CHAT_SRC;
      script.async = true;
      document.body.appendChild(script);
      cleanup();
    };

    const update = () => { if (getConsentChoice() === 'accepted') loadChat(); };

    const cleanup = () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener('storage', update);
    };

    update();
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener('storage', update);

    return cleanup;
  }, []);

  return null;
}
