import type { Language } from "@/context/LanguageContext";

export type SiteMode = "simple" | "animated" | "3d";

export interface ShowcaseText {
  pageTitle: string;
  pageSubtitle: string;
  open: string;
  soon: string;
  soonBody: string;
  back: string;
  statServices: string;
  statLanguages: string;
  statResponse: string;
  hourUnit: string;
  modes: Record<SiteMode, { name: string; desc: string }>;
}

export const showcaseText: Record<Language, ShowcaseText> = {
  en: {
    pageTitle: "Website Showcase",
    pageSubtitle:
      "The same company website, built in three styles. Pick one to explore it live.",
    open: "Open demo",
    soon: "Coming soon",
    soonBody: "This style is being built and will appear here shortly.",
    back: "All styles",
    statServices: "Service areas",
    statLanguages: "Languages",
    statResponse: "Response time",
    hourUnit: "h",
    modes: {
      simple: { name: "Simple", desc: "Clean, fast and focused on the goal." },
      animated: {
        name: "Animated",
        desc: "Scroll animations, entrance effects and interactive motion.",
      },
      "3d": { name: "3D", desc: "An interactive, immersive three-dimensional experience." },
    },
  },
  fa: {
    pageTitle: "نمونه‌کارهای وب‌سایت",
    pageSubtitle:
      "همین وب‌سایت شرکت، در سه سبک مختلف. یکی را انتخاب کنید و زنده ببینید.",
    open: "مشاهدهٔ نمونه",
    soon: "به‌زودی",
    soonBody: "این سبک در حال ساخت است و به‌زودی اینجا قرار می‌گیرد.",
    back: "همهٔ سبک‌ها",
    statServices: "حوزهٔ خدمات",
    statLanguages: "زبان",
    statResponse: "زمان پاسخ",
    hourUnit: "ساعت",
    modes: {
      simple: { name: "ساده", desc: "تمیز، سریع و متمرکز بر هدف." },
      animated: {
        name: "متحرک",
        desc: "انیمیشن اسکرول، ورود المان‌ها و حرکت‌های تعاملی.",
      },
      "3d": { name: "سه‌بعدی", desc: "تجربهٔ تعاملی و فراگیر سه‌بعدی." },
    },
  },
  ps: {
    pageTitle: "د ویب‌پاڼو نمونې",
    pageSubtitle:
      "همدا د شرکت ویب‌پاڼه، په درې سټایلونو کې. یو وټاکئ او ژوندی یې وګورئ.",
    open: "نمونه وګورئ",
    soon: "ډیر ژر",
    soonBody: "دا سټایل جوړیږي او ډیر ژر به دلته راشي.",
    back: "ټول سټایلونه",
    statServices: "د خدمتونو برخې",
    statLanguages: "ژبې",
    statResponse: "د ځواب وخت",
    hourUnit: "ساعته",
    modes: {
      simple: { name: "ساده", desc: "پاک، چټک او په موخه متمرکز." },
      animated: {
        name: "متحرک",
        desc: "د سکرول انیمیشن، د عناصرو ننوتل او تعاملي حرکتونه.",
      },
      "3d": { name: "درې‌اړخیز", desc: "تعاملي او ژور درې‌اړخیز تجربه." },
    },
  },
};

export const siteModes: SiteMode[] = ["simple", "animated", "3d"];
export const modePath = (m: SiteMode) => `/showcase/${m}`;
