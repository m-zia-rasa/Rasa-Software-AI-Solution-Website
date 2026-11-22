"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export type Language = "en" | "fa" | "ps";

interface Translations {
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCta1: string;
  heroCta2: string;
  clientsTrust: string;
  projectsDelivered: string;
  nativeNlp: string;
  servicesTitle: string;
  servicesSubtitle: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
  service5Title: string;
  service5Desc: string;
  service6Title: string;
  service6Desc: string;
  portfolioTitle: string;
  portfolioSubtitle: string;
  project1Title: string;
  project1Desc: string;
  project2Title: string;
  project2Desc: string;
  whyTitle: string;
  whySubtitle: string;
  whyFounder: string;
  whyBullet1: string;
  whyBullet2: string;
  whyBullet3: string;
  whyBullet4: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBtn1: string;
  ctaBtn2: string;
  ctaBtn3: string;
  availableForProjects: string;
  contactNote: string;
  learnMore: string;
  academicBackground: string;
  navServices: string;
  navPortfolio: string;
  navAbout: string;
  navContact: string;
  navCta: string;
  techTitle: string;
  techSubtitle: string;
  footerTagline: string;
  footerPrivacy: string;
  footerTerms: string;
  heroCardLabel: string;
  heroCardValue: string;
  formTitle: string;
  formName: string;
  formContact: string;
  formMessage: string;
  formSend: string;
  formHint: string;
  legalBack: string;
  whyStat1Value: string;
  whyStat1Label: string;
  whyStat2Value: string;
  whyStat2Label: string;
  whyStat3Value: string;
  whyStat3Label: string;
  footerRights: string;
  backToHome: string;
  caseStudies: string;
  portfolioDeepTitle: string;
  portfolioDeepSubtitle: string;
  wantBuiltTitle: string;
  wantBuiltSubtitle: string;
  statsYears: string;
  statsProjects: string;
  statsClients: string;
  statsLabel1: string;
  statsLabel2: string;
  statsLabel3: string;
  viewProject: string;
  readMore: string;
}

const translations: Record<Language, Translations> = {
  en: {
    heroBadge: "AI & Software Engineering Agency",
    heroHeadline: "Empowering Businesses with Next-Gen AI & Custom Software",
    heroSubheadline:
      "We build scalable mobile apps, custom RAG chatbots, and AI-driven automation tailored for the Afghan market and global diaspora. Master's level engineering, delivered.",
    heroCta1: "Explore Our Work",
    heroCta2: "Contact Us on WhatsApp",
    clientsTrust: "AI assistants in Dari, Pashto & English",
    projectsDelivered: "Projects Delivered",
    nativeNlp: "Native Language NLP",
    servicesTitle: "What We Build",
    servicesSubtitle:
      "End-to-end AI and software engineering for ambitious businesses.",
    service1Title: "Custom AI & RAG Chatbots",
    service1Desc:
      "Localized Dari and Pashto AI assistants for customer support, internal knowledge bases, and automated workflows.",
    service2Title: "Mobile & Web App Development",
    service2Desc:
      "High-performance, cross-platform applications built with React Native and Next.js. From concept to deployment.",
    service3Title: "AI Automation & Integration",
    service3Desc:
      "Connecting AI models to your existing business tools, WhatsApp, Telegram, and databases to save time and reduce costs.",
    service4Title: "Website Design",
    service4Desc: "Fast, modern websites — simple, animated or 3D — built multilingual and SEO-ready from day one.",
    service5Title: "Custom Business Systems",
    service5Desc: "CRM, inventory, sales and accounting systems tailored to how your business actually works.",
    service6Title: "Desktop Applications",
    service6Desc: "Windows and macOS software for offices, shops and factories — fast, reliable and able to work offline.",
    portfolioTitle: "Proof of Work",
    portfolioSubtitle: "Real projects. Real impact. Built to last.",
    project1Title: "AfghanTrafficApp",
    project1Desc:
      "A comprehensive cross-platform mobile application designed to streamline traffic management, user reporting, and administrative oversight in Afghanistan.",
    project2Title: "Localized RAG Chatbot",
    project2Desc:
      "A highly accurate Retrieval-Augmented Generation (RAG) system fine-tuned for Persian/Dari contexts, solving the hallucination problem in local language AI.",
    whyTitle: "Why Choose RASA?",
    whySubtitle:
      "Not just code — strategic AI partnerships built on academic rigor and local expertise.",
    whyFounder:
      "Led by a Computer Science Master's graduate specializing in Software Engineering and AI.",
    whyBullet1: "Deep Local Context",
    whyBullet2: "Enterprise-Grade Security",
    whyBullet3: "End-to-End Delivery",
    whyBullet4: "Fluent in Local & Global Tech Stacks",
    ctaTitle: "Ready to build the future?",
    ctaSubtitle:
      "Let's discuss how AI and custom software can solve your business challenges.",
    ctaBtn1: "Book a Free Consultation",
    ctaBtn2: "Message on WhatsApp",
    ctaBtn3: "Email Us",
    availableForProjects: "Available for Projects",
    contactNote:
      "Free consultation · Response within 24 hours",
    learnMore: "Learn more",
    academicBackground: "Academic Background",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navAbout: "About",
    navContact: "Contact",
    navCta: "Book a Call",
    techTitle: "Built with a modern, battle-tested stack",
    techSubtitle: "The technologies we use to ship reliable products",
    footerTagline:
      "Next-Gen AI & Custom Software for the Afghan market and global diaspora.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms",
    heroCardLabel: "First consultation",
    heroCardValue: "Free",
    formTitle: "Tell us about your project",
    formName: "Your name",
    formContact: "Email or phone",
    formMessage: "What do you need?",
    formSend: "Send message",
    formHint: "Opens your email app with the message ready to send.",
    legalBack: "Back to home",
    whyStat1Value: "3",
    whyStat1Label: "Languages: Dari, Pashto, English",
    whyStat2Value: "MSc",
    whyStat2Label: "Academic Level",
    whyStat3Value: "24h",
    whyStat3Label: "Response Time",
    footerRights: "RASA Software & AI Solutions. All rights reserved.",
    backToHome: "Back to Home",
    caseStudies: "Case Studies",
    portfolioDeepTitle: "Portfolio Deep-Dives",
    portfolioDeepSubtitle:
      "A detailed look at the engineering decisions, challenges, and outcomes behind our flagship projects.",
    wantBuiltTitle: "Want something like this built for you?",
    wantBuiltSubtitle:
      "Every project starts with a conversation. Let's talk about your goals.",
    statsYears: "5+",
    statsProjects: "30+",
    statsClients: "20+",
    statsLabel1: "Years Experience",
    statsLabel2: "Projects Delivered",
    statsLabel3: "Happy Clients",
    viewProject: "View Project →",
    readMore: "Read Case Study →",
  },
  fa: {
    heroBadge: "آژانس هوش مصنوعی و مهندسی نرم‌افزار",
    heroHeadline:
      "توانمندسازی کسب‌وکارها با هوش مصنوعی و نرم‌افزارهای نسل جدید",
    heroSubheadline:
      "ما اپلیکیشن‌های موبایل مقیاس‌پذیر، چت‌بات‌های RAG سفارشی، و اتوماسیون مبتنی بر هوش مصنوعی را برای بازار افغانستان و دیاسپورای جهانی می‌سازیم. مهندسی در سطح کارشناسی ارشد، تحویل داده می‌شود.",
    heroCta1: "مشاهده نمونه‌کارها",
    heroCta2: "تماس از طریق واتساپ",
    clientsTrust: "دستیار هوشمند به دری، پشتو و انگلیسی",
    projectsDelivered: "پروژه تحویل‌شده",
    nativeNlp: "پردازش زبان بومی",
    servicesTitle: "خدمات ما",
    servicesSubtitle:
      "مهندسی نرم‌افزار و هوش مصنوعی از ابتدا تا انتها برای کسب‌وکارهای بلندپرواز.",
    service1Title: "چت‌بات‌های هوش مصنوعی و RAG",
    service1Desc:
      "دستیاران هوش مصنوعی بومی‌سازی‌شده به زبان دری و پشتو برای پشتیبانی مشتریان، پایگاه‌های دانش داخلی و جریان‌های کاری خودکار.",
    service2Title: "توسعه اپ موبایل و وب",
    service2Desc:
      "اپلیکیشن‌های پرکارایی، چندسکویی با React Native و Next.js. از ایده تا اجرا.",
    service3Title: "اتوماسیون و یکپارچه‌سازی هوش مصنوعی",
    service3Desc:
      "اتصال مدل‌های هوش مصنوعی به ابزارهای موجود کسب‌وکار، واتساپ، تلگرام و پایگاه داده برای صرفه‌جویی در زمان.",
    service4Title: "طراحی وب‌سایت",
    service4Desc: "وب‌سایت‌های سریع و مدرن — ساده، متحرک یا سه‌بعدی — با پشتیبانی چندزبانه و آماده برای سئو.",
    service5Title: "سیستم‌های اختصاصی کسب‌وکار",
    service5Desc: "سیستم‌های CRM، انبار، فروش و حسابداری که دقیقاً مطابق نیاز کسب‌وکار شما ساخته می‌شوند.",
    service6Title: "نرم‌افزار دسکتاپ",
    service6Desc: "نرم‌افزار ویندوز و مک برای دفاتر، فروشگاه‌ها و کارخانه‌ها — سریع، پایدار و قابل استفاده بدون اینترنت.",
    portfolioTitle: "نمونه کارها",
    portfolioSubtitle: "پروژه‌های واقعی. تأثیر واقعی. ساخته‌شده برای ماندگاری.",
    project1Title: "اپلیکیشن ترافیک افغانستان",
    project1Desc:
      "یک اپلیکیشن موبایل جامع چندسکویی برای مدیریت ترافیک، گزارش‌دهی کاربران و نظارت اداری در افغانستان.",
    project2Title: "چت‌بات RAG بومی‌سازی‌شده",
    project2Desc:
      "یک سیستم RAG با دقت بالا که برای زمینه‌های فارسی/دری تنظیم شده و مشکل توهم در هوش مصنوعی زبان محلی را حل می‌کند.",
    whyTitle: "چرا رسا؟",
    whySubtitle:
      "نه فقط کد — مشارکت‌های استراتژیک هوش مصنوعی بر پایه دقت علمی و تخصص محلی.",
    whyFounder:
      "به رهبری فارغ‌التحصیل کارشناسی ارشد علوم کامپیوتر با تخصص در مهندسی نرم‌افزار و هوش مصنوعی.",
    whyBullet1: "درک عمیق بافت محلی",
    whyBullet2: "امنیت در سطح سازمانی",
    whyBullet3: "تحویل کامل از ابتدا تا انتها",
    whyBullet4: "تسلط بر تکنولوژی‌های محلی و جهانی",
    ctaTitle: "آماده ساختن آینده هستید؟",
    ctaSubtitle:
      "بیایید درباره اینکه چگونه هوش مصنوعی و نرم‌افزار سفارشی می‌تواند چالش‌های کسب‌وکار شما را حل کند صحبت کنیم.",
    ctaBtn1: "رزرو مشاوره رایگان",
    ctaBtn2: "پیام در واتساپ",
    ctaBtn3: "ایمیل به ما",
    availableForProjects: "آماده پذیرش پروژه",
    contactNote:
      "مشاوره رایگان · پاسخ در کمتر از ۲۴ ساعت",
    learnMore: "بیشتر بدانید",
    academicBackground: "پیشینه علمی",
    navServices: "خدمات",
    navPortfolio: "نمونه کارها",
    navAbout: "درباره ما",
    navContact: "تماس",
    navCta: "رزرو تماس",
    techTitle: "با یک پشته مدرن و آزمایش‌شده ساخته شده است",
    techSubtitle: "فناوری‌هایی که برای تحویل محصولات قابل‌اعتماد استفاده می‌کنیم",
    footerTagline:
      "هوش مصنوعی و نرم‌افزار نسل جدید برای بازار افغانستان و دیاسپورای جهانی.",
    footerPrivacy: "سیاست حریم خصوصی",
    footerTerms: "شرایط",
    heroCardLabel: "مشاوره اول",
    heroCardValue: "رایگان",
    formTitle: "دربارهٔ پروژه‌تان بگویید",
    formName: "نام شما",
    formContact: "ایمیل یا شمارهٔ تماس",
    formMessage: "به چه چیزی نیاز دارید؟",
    formSend: "ارسال پیام",
    formHint: "برنامهٔ ایمیل شما با پیام آماده باز می‌شود.",
    legalBack: "بازگشت به صفحهٔ اصلی",
    whyStat1Value: "۳",
    whyStat1Label: "زبان: دری، پشتو، انگلیسی",
    whyStat2Value: "MSc",
    whyStat2Label: "سطح علمی",
    whyStat3Value: "۲۴ ساعت",
    whyStat3Label: "زمان پاسخ",
    footerRights: "RASA Software & AI Solutions. تمام حقوق محفوظ است.",
    backToHome: "بازگشت به خانه",
    caseStudies: "مطالعات موردی",
    portfolioDeepTitle: "بررسی عمیق نمونه‌کارها",
    portfolioDeepSubtitle:
      "نگاهی دقیق به تصمیم‌های مهندسی، چالش‌ها و نتایج پروژه‌های شاخص ما.",
    wantBuiltTitle: "می‌خواهید چیزی شبیه این برای شما ساخته شود؟",
    wantBuiltSubtitle:
      "هر پروژه با یک گفتگو شروع می‌شود. درباره اهداف‌تان صحبت کنیم.",
    statsYears: "+۵",
    statsProjects: "+۳۰",
    statsClients: "+۲۰",
    statsLabel1: "سال تجربه",
    statsLabel2: "پروژه تحویل‌شده",
    statsLabel3: "مشتری راضی",
    viewProject: "← مشاهده پروژه",
    readMore: "← مطالعه موردی",
  },
  ps: {
    heroBadge: "د هوښیار ماشین او سافټویر انجنیرۍ اداره",
    heroHeadline: "د هوش مصنوعي او نوې سافټویر سره د سوداګریو پیاوړتیا",
    heroSubheadline:
      "موږ د افغانستان بازار او نړیوالې دیاسپورا لپاره د مقیاس وړ موبایل ایپس، دودیز RAG چټ بوټس، او د هوښیار ماشین پر بنسټ اتومات کول جوړوو. د ماسټر کچې انجنیري، وړاندې کیږي.",
    heroCta1: "زموږ کار وګورئ",
    heroCta2: "په واټساپ کې مو سره اړیکه ونیسئ",
    clientsTrust: "په دري، پښتو او انګلیسي AI مرستندویان",
    projectsDelivered: "تحویل شوې پروژې",
    nativeNlp: "د اصلي ژبې NLP",
    servicesTitle: "زموږ خدمتونه",
    servicesSubtitle:
      "د لوړ اهدافو سوداګریو لپاره د پیل نه تر پای پورې د AI او سافټویر انجینیري.",
    service1Title: "د AI او RAG چیټ بوټونه",
    service1Desc:
      "د پښتو او دري ژبو لپاره محلي AI مرستیالان د پیرودونکو ملاتړ، د پوهې اډو او اتومات کاري جریانونو لپاره.",
    service2Title: "د موبایل او ویب اپ پراختیا",
    service2Desc:
      "د React Native او Next.js سره لوړ فعالیت، ګڼ پلیټ فارم اپلیکیشنونه. له مفکورې نه تر ځای پرانیستو.",
    service3Title: "د AI اتومیشن او یوځایکول",
    service3Desc:
      "د AI ماډلونو د موجوده سوداګریز وسیلو، واټساپ، ټیلیګرام او ډیټابیسونو سره د وخت او لګښت خوندیتوب لپاره اتصال.",
    service4Title: "د ویب‌پاڼو ډیزاین",
    service4Desc: "چټک او عصري ویب‌پاڼې — ساده، متحرکې یا درې‌اړخیزې — د څو‌ژبو ملاتړ او SEO سره.",
    service5Title: "د سوداګرۍ ځانګړي سیسټمونه",
    service5Desc: "د CRM، ګودام، پلورنې او محاسبې سیسټمونه چې ستاسو د سوداګرۍ اړتیاوو سره سم جوړیږي.",
    service6Title: "د ډیسکټاپ پروګرامونه",
    service6Desc: "د دفترونو، دوکانونو او فابریکو لپاره د وینډوز او مک پروګرامونه — چټک، باوري او پرته له انټرنیټه کارېدونکي.",
    portfolioTitle: "د کار ثبوت",
    portfolioSubtitle: "ریښتیني پروژې. ریښتینی اغیز. د دوام لپاره جوړ شوی.",
    project1Title: "د افغانستان ټرافیک اپ",
    project1Desc:
      "یو جامع ګڼ پلیټ فارم موبایل اپلیکیشن چې د افغانستان د ټرافیک مدیریت، د کاروونکو راپور ورکولو او اداري نظارت لپاره ډیزاین شوی.",
    project2Title: "محلي RAG چیټ بوټ",
    project2Desc:
      "یو خورا دقیق RAG سیستم چې د فارسي/دري شرایطو لپاره تنظیم شوی، د محلي ژبې AI کې د توهم ستونزه حلوي.",
    whyTitle: "ولې رسا وټاکئ؟",
    whySubtitle:
      "یوازې کوډ نه — د علمي دقت او محلي تخصص پر بنسټ ستراتیژیک AI ملګرتیاوې.",
    whyFounder:
      "د کمپیوټر ساینس ماسټر پوهان لخوا مشري شوی چې د سافټویر انجینیري او AI کې تخصص لري.",
    whyBullet1: "ژور محلي شرایط پوهاوی",
    whyBullet2: "د تصدۍ کچې امنیت",
    whyBullet3: "له پیل نه تر پای تحویلي",
    whyBullet4: "د محلي او نړیوال ټیک سټیک پوهاوی",
    ctaTitle: "د راتلونکي جوړولو چمتو یاست؟",
    ctaSubtitle:
      "راځئ چې وبحثوو چې څنګه AI او ګمرکي سافټویر ستاسو د سوداګرۍ ننګونې حل کولی شي.",
    ctaBtn1: "وړیا مشوره بک کړئ",
    ctaBtn2: "واټساپ پیغام",
    ctaBtn3: "موږ ته بریښنالیک",
    availableForProjects: "د پروژو لپاره چمتو",
    contactNote: "وړیا مشوره · په ۲۴ ساعتونو کې ځواب",
    learnMore: "نور ولولئ",
    academicBackground: "علمي شالید",
    navServices: "خدمتونه",
    navPortfolio: "پروفولیو",
    navAbout: "زموږ د اړه",
    navContact: "اړیکه",
    navCta: "زنګ بک کړئ",
    techTitle: "د عصري او ازمويل شوي سټک سره جوړ شوی",
    techSubtitle: "هغه ټیکنالوژۍ چې موږ یې د باوري محصولاتو لپاره کاروو",
    footerTagline:
      "د افغانستان بازار او نړیوالې دیاسپورا لپاره نوې نسل AI او دودیز سافټویر.",
    footerPrivacy: "د محرمیت پالیسي",
    footerTerms: "شرایط",
    heroCardLabel: "لومړۍ مشوره",
    heroCardValue: "وړیا",
    formTitle: "موږ ته د خپلې پروژې په اړه ووایاست",
    formName: "ستاسو نوم",
    formContact: "بریښنالیک یا شمیره",
    formMessage: "تاسو څه ته اړتیا لرئ؟",
    formSend: "پیغام ولېږئ",
    formHint: "ستاسو د بریښنالیک اپ به له تیار پیغام سره خلاص شي.",
    legalBack: "کور ته ستنیدل",
    whyStat1Value: "۳",
    whyStat1Label: "ژبې: دري، پښتو، انګلیسي",
    whyStat2Value: "MSc",
    whyStat2Label: "علمي کچه",
    whyStat3Value: "۲۴ ساعته",
    whyStat3Label: "د ځواب وخت",
    footerRights: "RASA Software & AI Solutions. ټول حقوق خوندي دي.",
    backToHome: "کور ته بیرته",
    caseStudies: "د قضیې مطالعې",
    portfolioDeepTitle: "د پروفولیو ژوره کتنه",
    portfolioDeepSubtitle:
      "د زموږ د مهمو پروژو د انجنیري پریکړو، ننګونو او پایلو تفصيلي کتنه.",
    wantBuiltTitle: "غواړئ چې دا ډول کار ستاسو لپاره جوړ شي؟",
    wantBuiltSubtitle:
      "هره پروژه له خبرو پیلېږي. راځئ د ستاسو د موخو په اړه خبرې وکړو.",
    statsYears: "+۵",
    statsProjects: "+۳۰",
    statsClients: "+۲۰",
    statsLabel1: "کلونه تجربه",
    statsLabel2: "تحویل شوې پروژې",
    statsLabel3: "خوشاله پیرودونکي",
    viewProject: "← پروژه وګورئ",
    readMore: "← د قضیې مطالعه",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
  dir: "ltr" | "rtl";
  fontClass: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const isRTL = language === "fa" || language === "ps";
  const dir: "ltr" | "rtl" = isRTL ? "rtl" : "ltr";
  const fontClass = isRTL ? "font-rtl" : "font-ltr";

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("rasa-lang", lang);
    }
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("rasa-lang") as Language | null;
    if (stored && ["en", "fa", "ps"].includes(stored)) {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        isRTL,
        dir,
        fontClass,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
