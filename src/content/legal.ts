import type { Language } from "@/context/LanguageContext";

export interface LegalDoc {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}

type Kind = "privacy" | "terms";

export const legalContent: Record<Kind, Record<Language, LegalDoc>> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      updated: "Last updated: November 2026",
      sections: [
        {
          heading: "What we collect",
          body: "This website does not use accounts, tracking cookies or advertising trackers. The only thing stored in your browser is your chosen language (in local storage), so the site remembers it on your next visit.",
        },
        {
          heading: "Contact messages",
          body: "When you use the contact form, your browser opens your email app with a message addressed to us. We receive only what you choose to send (your name, your email or phone, and your message) and use it solely to reply to you about your project.",
        },
        {
          heading: "Third parties",
          body: "The site is hosted on Vercel, which may process standard technical logs such as IP address and browser type to deliver the pages. If you use WhatsApp or email links, those services' own policies apply.",
        },
        {
          heading: "Your choices",
          body: "You can ask us at any time to delete any correspondence we hold from you, and you can clear your language preference by clearing your browser's site data.",
        },
      ],
    },
    fa: {
      title: "سیاست حریم خصوصی",
      updated: "آخرین به‌روزرسانی: نوامبر ۲۰۲۶",
      sections: [
        {
          heading: "چه اطلاعاتی جمع‌آوری می‌کنیم",
          body: "این وب‌سایت حساب کاربری، کوکی ردیابی یا ردیاب‌های تبلیغاتی ندارد. تنها چیزی که در مرورگر شما ذخیره می‌شود زبان انتخابی شماست (در حافظهٔ محلی) تا در بازدید بعدی به یاد بماند.",
        },
        {
          heading: "پیام‌های تماس",
          body: "وقتی از فرم تماس استفاده می‌کنید، مرورگر شما برنامهٔ ایمیل را با پیامی خطاب به ما باز می‌کند. ما فقط همان چیزی را دریافت می‌کنیم که خودتان می‌فرستید (نام، ایمیل یا شماره و پیام) و تنها برای پاسخ دادن دربارهٔ پروژهٔ شما از آن استفاده می‌کنیم.",
        },
        {
          heading: "اشخاص ثالث",
          body: "این سایت روی Vercel میزبانی می‌شود که ممکن است برای ارائهٔ صفحات، گزارش‌های فنی معمول مانند آدرس IP و نوع مرورگر را پردازش کند. اگر از پیوندهای واتساپ یا ایمیل استفاده کنید، سیاست‌های همان سرویس‌ها اعمال می‌شود.",
        },
        {
          heading: "اختیارات شما",
          body: "هر زمان می‌توانید از ما بخواهید مکاتبات شما را حذف کنیم، و با پاک کردن داده‌های سایت در مرورگر، زبان ذخیره‌شده نیز پاک می‌شود.",
        },
      ],
    },
    ps: {
      title: "د محرمیت پالیسي",
      updated: "وروستی تازه‌والی: نومبر ۲۰۲۶",
      sections: [
        {
          heading: "موږ کوم معلومات راټولوو",
          body: "دا ویب‌پاڼه حساب، د تعقیب کوکیز یا اعلاني تعقیبوونکي نه کاروي. یوازې ستاسو غوره کړې ژبه ستاسو په براوزر کې (په محلي حافظه کې) ساتل کیږي څو د راتلونکي لیدنې پر مهال یې په یاد ولري.",
        },
        {
          heading: "د اړیکې پیغامونه",
          body: "کله چې د اړیکې فورمه کاروئ، ستاسو براوزر ستاسو د بریښنالیک اپ زموږ پته سره خلاصوي. موږ یوازې هغه ترلاسه کوو چې تاسو یې لېږئ (نوم، بریښنالیک یا شمیره او پیغام) او یوازې ستاسو د پروژې په اړه د ځواب لپاره یې کاروو.",
        },
        {
          heading: "دریم اړخونه",
          body: "دا سایټ په Vercel کې کوربه شوی چې ممکن د پاڼو د وړاندې کولو لپاره عادي تخنیکي لاګونه لکه IP پته او د براوزر ډول پروسس کړي. که د واټساپ یا بریښنالیک لینکونه وکاروئ، د هغو خدمتونو خپلې پالیسي پلي کیږي.",
        },
        {
          heading: "ستاسو اختیارات",
          body: "هر وخت کولای شئ له موږ وغواړئ چې ستاسو مکاتبې ړنګې کړو، او د براوزر د سایټ ډیټا پاکولو سره ستاسو ژبه هم پاکیږي.",
        },
      ],
    },
  },
  terms: {
    en: {
      title: "Terms of Use",
      updated: "Last updated: November 2026",
      sections: [
        {
          heading: "About this website",
          body: "This website presents the services of RASA – Software & AI Solutions. The information is provided for general purposes and may change without notice.",
        },
        {
          heading: "Services and quotes",
          body: "Nothing on this site is a binding offer. Scope, timeline and price for any project are agreed in writing with you after a free consultation.",
        },
        {
          heading: "Intellectual property",
          body: "The RASA name, logo, text and design of this website belong to RASA. Please do not copy them without permission. Work we deliver for a client is governed by the agreement made with that client.",
        },
        {
          heading: "Limitation",
          body: "We work to keep this site accurate and available, but we cannot guarantee it is always error-free or uninterrupted. External links lead to sites we do not control.",
        },
        {
          heading: "Contact",
          body: "Questions about these terms can be sent to us through the contact form on the home page.",
        },
      ],
    },
    fa: {
      title: "شرایط استفاده",
      updated: "آخرین به‌روزرسانی: نوامبر ۲۰۲۶",
      sections: [
        {
          heading: "دربارهٔ این وب‌سایت",
          body: "این وب‌سایت خدمات رسا – راه‌حل‌های نرم‌افزار و هوش مصنوعی را معرفی می‌کند. اطلاعات برای مقاصد عمومی ارائه شده و ممکن است بدون اطلاع قبلی تغییر کند.",
        },
        {
          heading: "خدمات و قیمت‌ها",
          body: "هیچ‌چیز در این سایت پیشنهاد الزام‌آور نیست. دامنه، زمان‌بندی و قیمت هر پروژه پس از مشاورهٔ رایگان به‌صورت کتبی با شما توافق می‌شود.",
        },
        {
          heading: "مالکیت معنوی",
          body: "نام و آرم رسا و متن و طراحی این وب‌سایت متعلق به رسا است؛ لطفاً بدون اجازه کپی نکنید. کارهایی که برای مشتری تحویل می‌دهیم تابع قرارداد با همان مشتری است.",
        },
        {
          heading: "محدودیت مسئولیت",
          body: "تلاش می‌کنیم این سایت دقیق و در دسترس باشد، اما نمی‌توانیم بی‌خطا و بدون وقفه بودن آن را تضمین کنیم. پیوندهای بیرونی به سایت‌هایی می‌روند که تحت کنترل ما نیستند.",
        },
        {
          heading: "تماس",
          body: "پرسش‌های خود دربارهٔ این شرایط را از طریق فرم تماس در صفحهٔ اصلی برای ما بفرستید.",
        },
      ],
    },
    ps: {
      title: "د کارونې شرایط",
      updated: "وروستی تازه‌والی: نومبر ۲۰۲۶",
      sections: [
        {
          heading: "د دې ویب‌پاڼې په اړه",
          body: "دا ویب‌پاڼه د RASA – سافټویر او AI حلونو خدمتونه معرفي کوي. معلومات د عمومي موخو لپاره دي او ممکن پرته له خبرتیا بدلون ومومي.",
        },
        {
          heading: "خدمتونه او بیې",
          body: "په دې سایټ کې هیڅ شی الزامي وړاندیز نه دی. د هرې پروژې پراخوالی، مهال‌ویش او بیه د وړیا مشورې وروسته په لیکلې بڼه ستاسو سره هوکړه کیږي.",
        },
        {
          heading: "فکري مالکیت",
          body: "د RASA نوم، لوګو، متن او د دې ویب‌پاڼې ډیزاین د RASA دي؛ مهرباني وکړئ پرته له اجازې یې کاپي نه کړئ. هغه کار چې موږ یې پیرودونکي ته سپاري د هماغه پیرودونکي سره د تړون تابع دی.",
        },
        {
          heading: "محدودیت",
          body: "موږ هڅه کوو دا سایټ دقیق او لاسرسی وړ وي، خو نشو کولای تضمین کړو چې تل به بې‌ستونزې وي. بهرني لینکونه هغو سایټونو ته ځي چې زموږ تر کنټرول لاندې نه دي.",
        },
        {
          heading: "اړیکه",
          body: "د دې شرایطو په اړه خپلې پوښتنې د کور پاڼې د اړیکې فورمې له لارې موږ ته ولېږئ.",
        },
      ],
    },
  },
};
