import type { Metadata } from "next";
import ModeSwitcher from "@/components/sites/ModeSwitcher";

export const metadata: Metadata = {
  title: "Website Showcase | RASA Software & AI Solutions",
  description:
    "The same company website built in three styles: simple, animated and 3D.",
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ModeSwitcher />
    </>
  );
}
