/**
 * Central place for public contact details & social links.
 * Override with environment variables (Vercel → Settings → Environment Variables)
 * so nothing needs to be edited in code when the real domain / numbers go live.
 */
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rasasoft.ai",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@rasasoft.ai",
  /** International format, digits only, e.g. 93700123456. Empty = WhatsApp button hidden. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  github: "https://github.com/m-zia-rasa",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
};
