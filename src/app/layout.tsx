import React from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Vazirmatn } from "next/font/google";
import "../styles/tailwind.css";
import Providers from "@/components/Providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rasasoft.ai",
  ),
  title: "RASA Software & AI Solutions | Websites, Apps, Systems & AI",
  description:
    "RASA designs websites, mobile and desktop apps, custom business systems, smart chatbots and AI automation — in Dari, Pashto and English. Free consultation.",
  keywords: [
    "website design",
    "mobile app development",
    "custom software",
    "AI chatbot",
    "RAG",
    "Afghanistan",
    "Dari",
    "Pashto",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  openGraph: {
    title: "RASA Software & AI Solutions",
    description:
      "Next-Gen AI & Custom Software for the Afghan market and global diaspora.",
    type: "website",
    siteName: "RASA Software & AI Solutions",
    images: [{ url: "/assets/images/app_logo.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${vazirmatn.variable}`} suppressHydrationWarning>
      <body className={plusJakartaSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
