"use client";

import { useEffect } from "react";

const STYLE_ID = "saleon-theme-overrides";

const OVERRIDE_CSS = `
  .sw-root {
    --sw-user-bubble: #2455F5 !important;
    --sw-user-text: #FFFFFF !important;
    --sw-link-user: #EAF0FF !important;
    --sw-bot-bubble: #FFFFFF !important;
    --sw-bot-text: #0C0E1A !important;
    --sw-admin-bubble: #FFFFFF !important;
    --sw-admin-text: #0C0E1A !important;
    --sw-system-bg: #FFFFFF !important;
    --sw-system-text: #8892A8 !important;
    --sw-cta-bg: #FFFFFF !important;
    --sw-cta-text: #2455F5 !important;
    --sw-cta-border: rgba(36, 85, 245, .18) !important;
    --sw-cta-bg-hover: #EAF0FF !important;
    --sw-cta-border-hover: #2455F5 !important;
  }
  .sw-bubble {
    box-shadow: 0 20px 60px -20px rgba(36, 85, 245, .55), 0 4px 16px rgba(15, 23, 42, .12) !important;
  }
  .sw-messages {
    padding: 16px 8px 16px 16px !important;
    gap: 10px !important;
  }
  .sw-msg-bot .sw-msg-bubble,
  .sw-date-sep-text,
  .sw-msg-system span {
    box-shadow: 0 2px 8px -2px rgba(15, 23, 42, .08), 0 1px 2px rgba(15, 23, 42, .04) !important;
    border: 1px solid rgba(15, 23, 42, .05) !important;
  }
  .sw-msg-meta--user,
  .sw-msg-meta--user .sw-msg-status,
  .sw-msg-meta--user .sw-msg-status--read {
    color: rgba(255, 255, 255, .75) !important;
  }
  .sw-date-sep-text,
  .sw-msg-system span {
    font-weight: 600 !important;
  }
  .sw-cta-btn {
    border-radius: 999px !important;
    font-weight: 600 !important;
  }
  @media (min-width: 641px) {
    .sw-window {
      border-radius: 24px !important;
      box-shadow: 0 20px 60px -20px rgba(36, 85, 245, .35), 0 8px 24px -8px rgba(15, 23, 42, .12) !important;
    }
  }
`;

export function ChatWidgetTheme() {
  useEffect(() => {
    const inject = () => {
      const shadow = document.getElementById("saleon-widget-root")?.shadowRoot;
      if (!shadow) return false;
      if (shadow.getElementById(STYLE_ID)) return true;

      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = OVERRIDE_CSS;
      shadow.appendChild(style);
      return true;
    };

    if (inject()) return;

    const interval = setInterval(() => {
      if (inject()) clearInterval(interval);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
