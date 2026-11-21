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
  hint3d: string;
  hintDrag: string;
  liteSwitch: string;
  fullSwitch: string;
  modes: Record<SiteMode, { name: string; desc: string; points: string[] }>;
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
    hint3d: "Drag to rotate · click to change color",
    hintDrag: "Drag to rotate",
    liteSwitch: "Lite version",
    fullSwitch: "Enable 3D",
    modes: {
      simple: { name: "Simple", desc: "Clean, fast and focused on the goal.", points: ["Fast loading", "Clear and focused", "Best for most businesses"] },
      animated: {
        name: "Animated",
        desc: "Scroll animations, entrance effects and interactive motion.",
        points: ["Scroll and entrance effects", "Interactive cards and buttons", "Cinematic hero"],
      },
      "3d": { name: "3D", desc: "An interactive, immersive three-dimensional experience.", points: ["Interactive 3D scene", "Services as 3D objects", "Lite version for weak devices"] },
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
    hint3d: "برای چرخاندن بکشید · برای تغییر رنگ کلیک کنید",
    hintDrag: "برای چرخاندن بکشید",
    liteSwitch: "نسخهٔ سبک",
    fullSwitch: "فعال‌سازی سه‌بعدی",
    modes: {
      simple: { name: "ساده", desc: "تمیز، سریع و متمرکز بر هدف.", points: ["بارگذاری سریع", "روشن و متمرکز", "مناسب بیشتر کسب‌وکارها"] },
      animated: {
        name: "متحرک",
        desc: "انیمیشن اسکرول، ورود المان‌ها و حرکت‌های تعاملی.",
        points: ["افکت اسکرول و ورود المان‌ها", "کارت‌ها و دکمه‌های تعاملی", "بخش اصلی سینمایی"],
      },
      "3d": { name: "سه‌بعدی", desc: "تجربهٔ تعاملی و فراگیر سه‌بعدی.", points: ["صحنهٔ سه‌بعدی تعاملی", "خدمات به‌شکل اشیای سه‌بعدی", "نسخهٔ سبک برای دستگاه‌های ضعیف"] },
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
    hint3d: "د ګرځولو لپاره کش کړئ · د رنګ بدلولو لپاره کلیک وکړئ",
    hintDrag: "د ګرځولو لپاره کش کړئ",
    liteSwitch: "سپکه بڼه",
    fullSwitch: "درې‌اړخیز فعال کړئ",
    modes: {
      simple: { name: "ساده", desc: "پاک، چټک او په موخه متمرکز.", points: ["چټک لوډ", "روښانه او متمرکز", "د ډیرو سوداګریو لپاره مناسب"] },
      animated: {
        name: "متحرک",
        desc: "د سکرول انیمیشن، د عناصرو ننوتل او تعاملي حرکتونه.",
        points: ["د سکرول او ننوتلو اغېز", "تعاملي کارتونه او تڼۍ", "سینمایي سر برخه"],
      },
      "3d": { name: "درې‌اړخیز", desc: "تعاملي او ژور درې‌اړخیز تجربه.", points: ["تعاملي درې‌اړخیزه صحنه", "خدمتونه د درې‌اړخیزو شیانو په بڼه", "د ضعیفو وسایلو لپاره سپکه بڼه"] },
    },
  },
};

export const siteModes: SiteMode[] = ["simple", "animated", "3d"];
export const modePath = (m: SiteMode) => `/showcase/${m}`;
