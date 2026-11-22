import type { Language } from "@/context/LanguageContext";

export interface VideoText {
  title: string;
  subtitle: string;
  play: string;
  note?: string;
}

/** English visitors get the English ad; Dari and Pashto visitors get the Persian (Dari) ad. */
export const promoVideo: Record<Language, VideoText & { src: string; poster: string }> = {
  en: {
    title: "See What RASA Builds",
    subtitle: "A short film about our services and how we work.",
    play: "Play video",
    src: "/assets/video/rasa-ad-en.mp4",
    poster: "/assets/video/poster-en.jpg",
  },
  fa: {
    title: "ببینید رسا چه می‌سازد",
    subtitle: "ویدیویی کوتاه دربارهٔ خدمات و شیوهٔ کار ما.",
    play: "پخش ویدیو",
    src: "/assets/video/rasa-ad-fa.mp4",
    poster: "/assets/video/poster-fa.jpg",
  },
  ps: {
    title: "وګورئ رسا څه جوړوي",
    subtitle: "زموږ د خدمتونو او د کار د ډول په اړه یوه لنډه ویډیو.",
    play: "ویډیو پیل کړئ",
    note: "دا ویډیو په دري ژبه ده.",
    src: "/assets/video/rasa-ad-fa.mp4",
    poster: "/assets/video/poster-fa.jpg",
  },
};
