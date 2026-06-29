import type { GtagEventParams } from "@/types/gtag";

function sendGtagEvent(eventName: string, eventParams?: GtagEventParams): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, eventParams);
}

export function trackPhoneClick(phone: string): void {
  sendGtagEvent("phone_click", { phone_number: phone });
}

export function trackWhatsAppClick(): void {
  sendGtagEvent("whatsapp_click");
}

export function trackLead(method = "contact_form"): void {
  sendGtagEvent("generate_lead", { method });
}

export function onPhoneClick(phone: string): () => void {
  return () => {
    trackPhoneClick(phone);
  };
}

export function onWhatsAppClick(): () => void {
  return () => {
    trackWhatsAppClick();
  };
}
