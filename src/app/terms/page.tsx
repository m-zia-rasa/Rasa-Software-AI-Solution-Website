import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | RASA Software & AI Solutions",
  description: "Terms of use for the RASA website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage kind="terms" />;
}
