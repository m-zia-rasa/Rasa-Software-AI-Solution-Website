import type { Language } from "@/context/LanguageContext";

export interface Step {
  title: string;
  body: string;
}
export interface FxText {
  processTitle: string;
  processSub: string;
  steps: Step[];
}

export const fxText: Record<Language, FxText> = {
  en: {
    processTitle: "How we work",
    processSub: "From the first conversation to launch, in four clear steps.",
    steps: [
      { title: "Understand", body: "A free consultation to learn your goals and your real needs." },
      { title: "Design", body: "A clear plan, structure and look you approve before we build." },
      { title: "Build", body: "Fast, clean development with regular progress you can see." },
      { title: "Launch & support", body: "Delivery, training and ongoing help after go-live." },
    ],
  },
  fa: {
    processTitle: "چگونه کار می‌کنیم",
    processSub: "از اولین گفتگو تا راه‌اندازی، در چهار گام روشن.",
    steps: [
      { title: "شناخت نیاز", body: "مشاورهٔ رایگان برای شناخت هدف‌ها و نیاز واقعی شما." },
      { title: "طراحی", body: "برنامه، ساختار و ظاهری روشن که پیش از ساخت تأیید می‌کنید." },
      { title: "توسعه", body: "ساخت سریع و تمیز، همراه با گزارش پیشرفت قابل‌دیدن." },
      { title: "تحویل و پشتیبانی", body: "تحویل، آموزش و پشتیبانی پس از راه‌اندازی." },
    ],
  },
  ps: {
    processTitle: "موږ څنګه کار کوو",
    processSub: "له لومړۍ خبرې تر پیلولو پورې، په څلورو روښانه ګامونو کې.",
    steps: [
      { title: "اړتیا پېژندنه", body: "وړیا مشوره، ستاسو د هدفونو او ریښتینې اړتیا د پوهېدو لپاره." },
      { title: "ډیزاین", body: "روښانه پلان، جوړښت او بڼه چې مخکې له جوړولو یې تاییدوئ." },
      { title: "جوړونه", body: "چټک او پاک پرمختګ، د لیدلو وړ راپور سره." },
      { title: "تسلیمي او ملاتړ", body: "تسلیمي، زده‌کړه او د پیلولو وروسته دوامداره مرسته." },
    ],
  },
};
