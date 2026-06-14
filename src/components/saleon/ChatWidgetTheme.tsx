"use client";

import { useEffect } from "react";

const STYLE_ID = "saleon-theme-overrides";

const OVERRIDE_CSS = `
  .sw-root {
    --sw-user-bubble: #2455F5 !important;
    --sw-user-text: #FFFFFF !important;
    --sw-link-user: #EAF0FF !important;
  }
  .sw-bubble {
    box-shadow: 0 20px 60px -20px rgba(36, 85, 245, .55), 0 4px 16px rgba(15, 23, 42, .12) !important;
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
