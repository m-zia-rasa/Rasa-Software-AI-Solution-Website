import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | RASA Software & AI Solutions",
  description: "How the RASA website handles your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}
