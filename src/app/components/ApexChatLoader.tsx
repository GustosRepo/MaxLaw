"use client";

import React from "react";

const APEX_CHAT_SRC = "https://www.apexchat.net/scripts/invitation.ashx?company=maxlawnv";

export default function ApexChatLoader() {
  React.useEffect(() => {
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

    const timer = window.setTimeout(loadChat, 10000);

    const cleanup = () => {
      window.removeEventListener("pointerdown", loadChat);
      window.removeEventListener("keydown", loadChat);
      window.removeEventListener("touchstart", loadChat);
      window.removeEventListener("scroll", loadChat);
      window.clearTimeout(timer);
    };

    window.addEventListener("pointerdown", loadChat, { once: true, passive: true });
    window.addEventListener("keydown", loadChat, { once: true });
    window.addEventListener("touchstart", loadChat, { once: true, passive: true });
    window.addEventListener("scroll", loadChat, { once: true, passive: true });

    return cleanup;
  }, []);

  return null;
}
