"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Brain,
  Settings,
  Coins,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle2,
  X,
  Send,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Zap,
  Sliders,
  FileText,
  RotateCcw,
  Receipt,
  Wallet,
  Users,
  BarChart3,
  Target,
  Shield,
  Rocket,
  CircleDollarSign,
  Calculator,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StarfieldBackground from "@/components/shared/StarfieldBackground";

// Multilingual Copy Dictionary tailored for MTM Tech BD's 4 Value Pillars
const HERO_DATA = {
  bn: {
    tabs: [
      { id: 0, label: "০১. সামগ্রিক সাফল্য", short: "সামগ্রিক" },
      { id: 1, label: "০২. সময় ও শ্রম", short: "সময়-শ্রম" },
      { id: 2, label: "০৩. মেধার বিকাশ", short: "মেধা" },
      { id: 3, label: "০৪. অর্থনৈতিক ROI", short: "অর্থ-ROI" },
    ],
    slides: [
      {
        badge: "MTM TECH BD • ৩৬০° ডিজিটাল রূপান্তর",
        title1: "আমাদের অ্যাপে বাঁচবে",
        titleHighlight: "সময়, মেধা, শ্রম ও অর্থ",
        title2: "— সব দিক থেকেই নিশ্চিত লাভ!",
        description:
          "শিক্ষাপ্রতিষ্ঠান, মাদরাসা ও কর্পোরেট প্রতিষ্ঠানের জন্য MTM TECH BD তৈরি করছে আধুনিক ওয়েব ও মোবাইল অ্যাপ। এক প্ল্যাটফর্মেই পান সর্বোচ্চ গতি, নির্ভুল অটোমেশন ও বহুগুণ মুনাফা।",
        pills: [
          { icon: Clock, label: "সময় সাশ্রয়", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-400/25" },
          { icon: Brain, label: "মেধার বিকাশ", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-400/25" },
          { icon: Settings, label: "শ্রম লাঘব", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-400/25" },
          { icon: Coins, label: "অর্থনৈতিক লাভ", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-400/25" },
        ],
        ctaPrimary: "আপনার অ্যাপ অর্ডার করুন",
        ctaSecondary: "কীভাবে লাভবান হবেন?",
      },
      {
        badge: "স্মার্ট অটোমেশন ও জিরো পেপারওয়ার্ক",
        title1: "৯০% ম্যানুয়াল কাজ এখন অটোমেটেড: বাঁচান",
        titleHighlight: "মূল্যবান সময় ও শ্রম",
        title2: "",
        description:
          "ঘণ্টার পর ঘণ্টা ধরে খাতা-কলমে হাজিরা, প্রবেশপত্র বা ফলাফল তৈরির দিন শেষ। আমাদের স্মার্ট অ্যাপে এক ক্লিকেই সম্পন্ন হবে সব জটিল প্রশাসনিক কাজ।",
        features: [
          {
            title: "১-ক্লিক অ্যাডমিট ও রেজাল্ট",
            desc: "হাজারো শিক্ষার্থীর মার্কশিট তৈরি মাত্র ৫ সেকেন্ডে।",
            icon: Zap,
            color: "text-cyan-400 border-cyan-500/25",
          },
          {
            title: "GPS ও ডিজিটাল হাজিরা",
            desc: "তাৎক্ষণিক SMS নোটিফিকেশন ও অটো রিপোর্ট।",
            icon: Smartphone,
            color: "text-blue-400 border-blue-500/25",
          },
        ],
        ctaPrimary: "অটোমেশন লাইভ ডেমো দেখুন",
        ctaSecondary: "ফিচারসমূহ জানুন",
      },
      {
        badge: "স্মার্ট অ্যাডমিনিস্ট্রেটিভ ইন্টেলিজেন্স",
        title1: "রুটিন কাজে নয়, ফোকাস হোক উদ্ভাবনে: নিশ্চিত হোক",
        titleHighlight: "মেধার সঠিক ব্যবহার",
        title2: "",
        description:
          "আপনার শিক্ষক, কর্মকর্তা ও কর্মীদের মূল্যবান মেধা সাধারণ হিসাব-নিকাশে নষ্ট না করে প্রতিষ্ঠানের মানোন্নয়ন ও নতুন পরিকল্পনায় কাজে লাগান। কারিগরি সব দায়িত্ব আমাদের এক্সপার্ট টিমের।",
        features: [
          {
            title: "স্মার্ট অ্যানালিটিক্স রিপোর্ট",
            desc: "সঠিক ডাটা দেখে দ্রুত ও নির্ভুল সিদ্ধান্ত নেওয়ার সুবিধা।",
            icon: BarChart3,
            color: "text-emerald-400 border-emerald-500/25",
          },
          {
            title: "ডেডিকেটেড টেক টিম",
            desc: "আলাদা আইটি এক্সপার্ট নিয়োগের ঝামেলা ছাড়াই পূর্ণ সাপোর্ট।",
            icon: ShieldCheck,
            color: "text-sky-400 border-sky-500/25",
          },
        ],
        ctaPrimary: "এক্সপার্ট পরামর্শ নিন",
        ctaSecondary: "পরামর্শ টিম দেখুন",
      },
      {
        badge: "সর্বোচ্চ ROI ও স্বচ্ছ আর্থিক ব্যবস্থাপনা",
        title1: "কম খরচে এন্টারপ্রাইজ সলিউশন: নিশ্চিত করুন",
        titleHighlight: "অর্থনৈতিক লাভ ও সর্বোচ্চ ROI",
        title2: "",
        description:
          "অতিরিক্ত জনবল, কাগজ-কলম ও ব্যবস্থাপনা অপচয় কমিয়ে সাশ্রয় করুন ৬০% পর্যন্ত অপারেশনাল খরচ। ডিজিটাল ফি কালেকশন ও স্বচ্ছ ভাউচার সিস্টেমে প্রতিষ্ঠানের আয় বাড়ান বহুগুণ।",
        features: [
          {
            title: "৬০% অপারেশনাল খরচ সাশ্রয়",
            desc: "সাশ্রয়ী সাবস্ক্রিপশন ও জিরো হিডেন চার্জ গ্যারান্টি।",
            icon: CircleDollarSign,
            color: "text-amber-400 border-amber-500/25",
          },
          {
            title: "ডিজিটাল পেমেন্ট ও ভাউচার",
            desc: "বিকাশ, নগদ ও ব্যাংকিং ইন্টিগ্রেশনে ১০০% স্বচ্ছ হিসাব।",
            icon: Wallet,
            color: "text-emerald-400 border-emerald-500/25",
          },
        ],
        ctaPrimary: "সাশ্রয়ী প্যাকেজ জানুন",
        ctaSecondary: "ROI হিসাব দেখুন",
      },
    ],
    drawer: {
      tag: "MTM TECH BD",
      title: "আপনার অ্যাপ বা সফটওয়্যার অর্ডার করুন",
      subtitle: "প্রতিষ্ঠানের তথ্য দিন, আমাদের টিম দ্রুত লাইভ ডেমো ও প্রপোজাল নিয়ে যোগাযোগ করবে।",
      nameLabel: "আপনার নাম / প্রতিষ্ঠানের নাম",
      namePlaceholder: "যেমন: দারুল উলুম একাডেমি / মাহফুজুর রহমান",
      phoneLabel: "মোবাইল নম্বর",
      phonePlaceholder: "০১XXXXXXXXX",
      typeLabel: "সফটওয়্যারের ধরন",
      typeOptions: [
        "স্কুল / মাদরাসা ম্যানেজমেন্ট সিস্টেম (MMIS ERP)",
        "কাস্টম মোবাইল অ্যাপ (Android ও iOS)",
        "অ্যাকাউন্টিং ও ডাবল-এন্ট্রি ফি সিস্টেম",
        "কাস্টম এডুকেশন ওয়েবসাইট ও পোর্টাল",
      ],
      studentsLabel: "আনুমানিক ছাত্রছাত্রী বা ব্যবহারকারী সংখ্যা",
      studentsOptions: ["২০০-এর নিচে", "২০০ - ৫০০ জন", "৫০০ - ১,৫০০ জন", "১,৫০০+ জন"],
      submitBtn: "ডেমো ও অর্ডার কনফার্ম করুন",
      submitting: "পাঠানো হচ্ছে...",
      successTitle: "ধন্যবাদ! আপনার অনুরোধ সফলভাবে গৃহীত হয়েছে",
      successDesc: "MTM TECH BD-এর একজন প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করে সম্পূর্ণ লাইভ ডেমো উপস্থাপন করবেন।",
      closeBtn: "বন্ধ করুন",
    },
  },
  en: {
    tabs: [
      { id: 0, label: "01. Overall Gain", short: "Overall" },
      { id: 1, label: "02. Time & Labor", short: "Time-Labor" },
      { id: 2, label: "03. Intellect Boost", short: "Intellect" },
      { id: 3, label: "04. Economic ROI", short: "ROI" },
    ],
    slides: [
      {
        badge: "MTM TECH BD • 360° DIGITAL TRANSFORMATION",
        title1: "Save",
        titleHighlight: "Time, Intellect, Labor & Money",
        title2: "— Guaranteed Growth in Every Aspect!",
        description:
          "MTM TECH BD engineers next-gen web & mobile apps for schools, madrasahs, and enterprises. Unlock lightning speed, zero-error automation, and maximum ROI in one suite.",
        pills: [
          { icon: Clock, label: "Save Time", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-400/25" },
          { icon: Brain, label: "Boost Intellect", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-400/25" },
          { icon: Settings, label: "Cut Labor", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-400/25" },
          { icon: Coins, label: "Maximize ROI", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-400/25" },
        ],
        ctaPrimary: "Build Your App Now",
        ctaSecondary: "Explore 4 Pillars",
      },
      {
        badge: "SMART AUTOMATION & ZERO PAPERWORK",
        title1: "90% Manual Tasks Automated: Save",
        titleHighlight: "Precious Time & Labor",
        title2: "",
        description:
          "Say goodbye to hours of manual attendance, admit cards, and result sheets. Execute complex administrative workflows in a single click.",
        features: [
          {
            title: "1-Click Admit & Results",
            desc: "Generate thousands of error-free marksheets in 5 seconds.",
            icon: Zap,
            color: "text-cyan-400 border-cyan-500/25",
          },
          {
            title: "GPS & Smart Attendance",
            desc: "Instant parent SMS alerts & automated daily reports.",
            icon: Smartphone,
            color: "text-blue-400 border-blue-500/25",
          },
        ],
        ctaPrimary: "Watch Automation Demo",
        ctaSecondary: "View All Features",
      },
      {
        badge: "SMART ADMINISTRATIVE INTELLIGENCE",
        title1: "Focus on Innovation, Not Routine: Unlock",
        titleHighlight: "True Intellectual Potential",
        title2: "",
        description:
          "Free your teachers and staff from repetitive paperwork so their intellect drives academic excellence and expansion—while our engineers handle the tech.",
        features: [
          {
            title: "Smart Analytics Reports",
            desc: "Data-driven insights for faster, sharper decisions.",
            icon: BarChart3,
            color: "text-emerald-400 border-emerald-500/25",
          },
          {
            title: "Dedicated Tech Team",
            desc: "Enterprise IT support without hiring overhead.",
            icon: ShieldCheck,
            color: "text-sky-400 border-sky-500/25",
          },
        ],
        ctaPrimary: "Consult Our Experts",
        ctaSecondary: "Meet Tech Architects",
      },
      {
        badge: "MAXIMUM ROI & FINANCIAL TRANSPARENCY",
        title1: "Enterprise Power at Smart Cost: Achieve",
        titleHighlight: "Financial Gain & Peak ROI",
        title2: "",
        description:
          "Cut operational waste by up to 60%. Streamline digital fee collection and split-voucher accounting to multiply your institution's net profitability.",
        features: [
          {
            title: "60% Operational Cost Saved",
            desc: "Transparent pricing with zero hidden charges.",
            icon: CircleDollarSign,
            color: "text-amber-400 border-amber-500/25",
          },
          {
            title: "Digital Fees & Vouchers",
            desc: "Seamless bKash, Nagad & bank integration.",
            icon: Wallet,
            color: "text-emerald-400 border-emerald-500/25",
          },
        ],
        ctaPrimary: "View Cost-Saving Plans",
        ctaSecondary: "Calculate Your ROI",
      },
    ],
    drawer: {
      tag: "MTM TECH BD",
      title: "Order Your Custom App or Software",
      subtitle: "Share your details and our solutions architect will reach out with a live demo.",
      nameLabel: "Your Name / Institution Name",
      namePlaceholder: "e.g. Al-Hera International Academy",
      phoneLabel: "Phone Number / WhatsApp",
      phonePlaceholder: "+880 1XXXXXXXXX",
      typeLabel: "Software Type",
      typeOptions: [
        "School / Madrasah ERP (MMIS)",
        "Custom Mobile App (Android & iOS)",
        "Accounting & Split Fee Ledger",
        "Institutional Website & LMS",
      ],
      studentsLabel: "Estimated Students / Users",
      studentsOptions: ["Under 200", "200 - 500", "500 - 1,500", "1,500+"],
      submitBtn: "Confirm Demo & Order",
      submitting: "Submitting...",
      successTitle: "Request Received Successfully!",
      successDesc: "An MTM Tech BD architect will contact you shortly to schedule your live walkthrough.",
      closeBtn: "Close",
    },
  },
  ar: {
    tabs: [
      { id: 0, label: "٠١. النجاح الشامل", short: "شامل" },
      { id: 1, label: "٠٢. الوقت والجهد", short: "الوقت-الجهد" },
      { id: 2, label: "٠٣. استثمار العقول", short: "العقول" },
      { id: 3, label: "٠٤. العائد المالي", short: "العائد" },
    ],
    slides: [
      {
        badge: "MTM TECH BD • تحول رقمي متكامل ٣٦٠°",
        title1: "تطبيقاتنا تضمن توفير",
        titleHighlight: "الوقت، والعقل، والجهد، والمال",
        title2: "— أرباح ونمو مضمون من كل جانب!",
        description:
          "نبني تطبيقات سحابية وهواتف ذكية متطورة للمدارس والمعاهد والمؤسسات. احصل على أعلى سرعة، وأتمتة خالية من الأخطاء، وعائد مالي مضاعف.",
        pills: [
          { icon: Clock, label: "توفير الوقت", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-400/25" },
          { icon: Brain, label: "تنمية العقول", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-400/25" },
          { icon: Settings, label: "تخفيف الجهد", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-400/25" },
          { icon: Coins, label: "عائد مالي مضاعف", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-400/25" },
        ],
        ctaPrimary: "اطلب تطبيقك الآن",
        ctaSecondary: "استكشف الأركان الـ ٤",
      },
      {
        badge: "أتمتة ذكية وبلا معاملات ورقية",
        title1: "أتمتة ٩٠٪ من المهام الروتينية: احفظ",
        titleHighlight: "الوقت والجهد الثمين",
        title2: "",
        description:
          "وداعاً للسجلات الورقية وبطاقات الامتحانات اليدوية. أنجز أعقد العمليات الإدارية بنقرة زر واحدة عبر السحابة.",
        features: [
          {
            title: "إصدار النتائج والبطاقات بنقرة واحدة",
            desc: "آلاف الشهادات خلال ٥ ثوانٍ فقط.",
            icon: Zap,
            color: "text-cyan-400 border-cyan-500/25",
          },
          {
            title: "حضور رقمي وتتبع GPS",
            desc: "إشعارات SMS فورية لأولياء الأمور وتقارير آلية.",
            icon: Smartphone,
            color: "text-blue-400 border-blue-500/25",
          },
        ],
        ctaPrimary: "شاهد العرض المباشر للأتمتة",
        ctaSecondary: "تفاصيل الأنظمة",
      },
      {
        badge: "ذكاء إداري ومؤسسي متقدم",
        title1: "لا تهدر طاقات فريقك في الروتين: وجّه",
        titleHighlight: "طاقات العقول نحو الابتكار والتطوير",
        title2: "",
        description:
          "فرّغ معلميك وإدارييك من الحسابات المعقدة ليركزوا على التطوير الأكاديمي، بينما يتكفل خبراؤنا بكل الجوانب التقنية.",
        features: [
          {
            title: "تقارير تحليلية ذكية",
            desc: "رؤى بيانية لاتخاذ قرارات أسرع وأدق.",
            icon: BarChart3,
            color: "text-emerald-400 border-emerald-500/25",
          },
          {
            title: "فريق تقني مخصص",
            desc: "دعم فني كامل بدون تكاليف توظيف إضافية.",
            icon: ShieldCheck,
            color: "text-sky-400 border-sky-500/25",
          },
        ],
        ctaPrimary: "استشر خبراءنا مجاناً",
        ctaSecondary: "فريق التطوير",
      },
      {
        badge: "أعلى عائد استثماري وشفافية مالية",
        title1: "قوة برمجية بتكلفة اقتصادية: حقق",
        titleHighlight: "الربح المالي وأقصى عائد (ROI)",
        title2: "",
        description:
          "قلل الهدر الإداري والورقي بنسبة تصل إلى ٦٠٪، وضاعف أرباح مؤسستك بنظام فواتير وتحصيل إلكتروني شفاف ومحكم.",
        features: [
          {
            title: "توفير ٦٠٪ من المصاريف التشغيلية",
            desc: "باقات اقتصادية بدون أي رسوم خفية.",
            icon: CircleDollarSign,
            color: "text-amber-400 border-amber-500/25",
          },
          {
            title: "دفع وفواتير رقمية مؤتمتة",
            desc: "ربط سلس مع بوابات الدفع والبنوك.",
            icon: Wallet,
            color: "text-emerald-400 border-emerald-500/25",
          },
        ],
        ctaPrimary: "اطلع على الباقات الاقتصادية",
        ctaSecondary: "حاسبة العائد",
      },
    ],
    drawer: {
      tag: "MTM TECH BD",
      title: "اطلب تطبيقك أو نظامك المؤسسي",
      subtitle: "أدخل بيانات مؤسستك وسيتواصل معك مهندسونا لتقديم عرض عملي مباشر.",
      nameLabel: "اسمك / اسم المؤسسة",
      namePlaceholder: "مثال: مدرسة دار الأرقم / أحمد المحمود",
      phoneLabel: "رقم الهاتف / واتساب",
      phonePlaceholder: "+880 1XXXXXXXXX",
      typeLabel: "نوع النظام البرمجي",
      typeOptions: [
        "نظام إدارة المدارس والمعاهد (MMIS ERP)",
        "تطبيق هواتف مخصص (Android و iOS)",
        "نظام المحاسبة والفواتير المزدوجة",
        "موقع مؤسسي ومنصة تعليمية",
      ],
      studentsLabel: "العدد التقديري للطلاب أو المستخدمين",
      studentsOptions: ["أقل من ٢٠٠", "٢٠٠ - ٥٠٠", "٥٠٠ - ١,٥٠٠", "أكثر من ١,٥٠٠"],
      submitBtn: "تأكيد طلب العرض والنظام",
      submitting: "جارٍ الإرسال...",
      successTitle: "تم استلام طلبك بنجاح!",
      successDesc: "سيتواصل معك ممثل MTM TECH BD قريباً لتقديم العرض الحي الكامل.",
      closeBtn: "إغلاق",
    },
  },
};

// -------------------------------------------------------------
// Interactive Mockup 1: Auto-Sync Cloud Suite Runner
// -------------------------------------------------------------
function AutoSyncRunner({ language }) {
  const [syncCount, setSyncCount] = useState(1480);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState("Just now");

  const triggerManualSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setTimeout(() => {
      setSyncCount((prev) => prev + Math.floor(Math.random() * 24 + 12));
      setIsSyncing(false);
      setLastSynced(language === "bn" ? "এইমাত্র" : language === "ar" ? "الآن" : "Just now");
    }, 700);
  };

  return (
    <div className="relative w-full max-w-[510px] p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0F1B35]/90 via-[#0C152B]/90 to-[#070D1E]/95 border border-cyan-400/25 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      {/* Levitating Floating Badge 1 (Top Left) */}
      <div className="absolute -top-3.5 -left-2 sm:-left-4 z-20 px-3.5 py-1.5 rounded-2xl bg-[#0F1D3A]/90 border border-cyan-400/40 shadow-lg backdrop-blur-md flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-cyan-400/20 text-cyan-400 flex items-center justify-center text-xs">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-mono">
            {language === "bn" ? "কাজের গতি" : language === "ar" ? "سرعة الإنجاز" : "Speed"}
          </div>
          <div className="text-xs font-bold text-white">
            {language === "bn" ? "১০ গুণ দ্রুত" : language === "ar" ? "١٠ أضعاف" : "10x Faster"}
          </div>
        </div>
      </div>

      {/* Levitating Floating Badge 2 (Bottom Right) */}
      <div className="absolute -bottom-3.5 -right-2 sm:-right-4 z-20 px-3.5 py-1.5 rounded-2xl bg-[#0F1D3A]/90 border border-amber-400/40 shadow-lg backdrop-blur-md flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs">
          <Coins className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-mono">
            {language === "bn" ? "নিট সাশ্রয়" : language === "ar" ? "التوفير" : "Savings"}
          </div>
          <div className="text-xs font-bold text-amber-300">
            {language === "bn" ? "৬০%+ খরচ কম" : language === "ar" ? "+٦٠٪ تكلفة أقل" : "60%+ Saved"}
          </div>
        </div>
      </div>

      {/* Window Title Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-mono text-slate-400 ml-1.5">
            MTM Smart Cloud Suite v4.2
          </span>
        </div>
        <button
          onClick={triggerManualSync}
          title="Click to trigger cloud sync"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold hover:bg-emerald-500/25 transition-all cursor-pointer"
        >
          <span className={`w-2 h-2 rounded-full bg-emerald-400 ${isSyncing ? "animate-spin" : "animate-ping"}`} />
          <span>{isSyncing ? "SYNCING..." : "LIVE SYNC"}</span>
        </button>
      </div>

      {/* 4 Core Pillars Metric Grid */}
      <div className="grid grid-cols-2 gap-3 mb-3.5">
        {/* Metric 1: Time */}
        <div className="p-3 rounded-2xl bg-[#091224]/80 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] text-slate-400">
              {language === "bn" ? "সময় সাশ্রয়" : language === "ar" ? "توفير الوقت" : "Time Saved"}
            </span>
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xl font-extrabold text-cyan-400">৮৫%</div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-cyan-400 w-[85%] rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </div>
        </div>

        {/* Metric 2: Talent */}
        <div className="p-3 rounded-2xl bg-[#091224]/80 border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] text-slate-400">
              {language === "bn" ? "মেধার সঠিক প্রয়োগ" : language === "ar" ? "استثمار العقول" : "Talent Focus"}
            </span>
            <Brain className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-extrabold text-emerald-400">১০০%</div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-emerald-400 w-full rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
        </div>

        {/* Metric 3: Labor */}
        <div className="p-3 rounded-2xl bg-[#091224]/80 border border-indigo-500/20 hover:border-indigo-400/40 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] text-slate-400">
              {language === "bn" ? "শ্রম লাঘব" : language === "ar" ? "تخفيف الجهد" : "Labor Cut"}
            </span>
            <Settings className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="text-xl font-extrabold text-indigo-400">৯০%</div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-indigo-400 w-[90%] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
          </div>
        </div>

        {/* Metric 4: Revenue / Money */}
        <div className="p-3 rounded-2xl bg-[#091224]/80 border border-amber-500/20 hover:border-amber-400/40 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] text-slate-400">
              {language === "bn" ? "আর্থিক প্রবৃদ্ধি" : language === "ar" ? "النمو المالي" : "Growth"}
            </span>
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-xl font-extrabold text-amber-400">৩.৫ গুণ</div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-amber-400 w-[88%] rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          </div>
        </div>
      </div>

      {/* Real-time Sync Status Strip */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 border border-cyan-400/25 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-400/15 text-cyan-300 flex items-center justify-center">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>Android + iOS + Web</span>
              <span className="text-[10px] font-mono text-cyan-300 px-1.5 py-0.2 rounded bg-cyan-500/20">
                {syncCount.toLocaleString()} {language === "bn" ? "রেকর্ড" : "records"}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              {language === "bn" ? `ক্লাউড সিঙ্ক • ${lastSynced}` : `Cloud Sync • ${lastSynced}`}
            </div>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
          99.9% Uptime
        </span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Mockup 2: Draggable Before/After Comparison Slider
// -------------------------------------------------------------
function BeforeAfterComparisonSlider({ language }) {
  const [sliderPos, setSliderPos] = useState(52); // percentage 0 - 100
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updateSlider(e);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updateSlider(e);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const updateSlider = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
    const offsetX = clientX - rect.left;
    const percentage = Math.max(10, Math.min(90, (offsetX / rect.width) * 100));
    setSliderPos(percentage);
  };

  useEffect(() => {
    const handleGlobalUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("pointerup", handleGlobalUp);
    return () => window.removeEventListener("pointerup", handleGlobalUp);
  }, []);

  return (
    <div className="relative w-full max-w-[510px] p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-[#0C1D36]/90 via-[#081329]/90 to-[#060D1E]/95 border border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl select-none">
      {/* Top Floating Badge */}
      <div className="absolute -top-3.5 right-4 z-20 px-3.5 py-1 rounded-full bg-[#0F1D3A]/90 border border-cyan-400/40 text-xs font-bold text-cyan-300 shadow-md">
        ⏱️ {language === "bn" ? "৮০% সময় সাশ্রয়" : language === "ar" ? "توفير ٨٠٪ من الوقت" : "80% Time Saved"}
      </div>

      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="font-semibold text-rose-400/90 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          {language === "bn" ? "পূর্বে: ম্যানুয়াল প্রক্রিয়া" : language === "ar" ? "سابقاً: المعاملات الورقية" : "BEFORE: Manual Workflow"}
        </span>
        <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {language === "bn" ? "বর্তমানে: MTM অটোমেশন" : language === "ar" ? "حالياً: أتمتة MTM الذكية" : "AFTER: MTM Automation"}
        </span>
      </div>

      {/* Draggable Interactive Comparison Area */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        className="relative h-64 rounded-2xl overflow-hidden border border-white/10 cursor-ew-resize bg-[#070B14]"
      >
        {/* RIGHT LAYER (AFTER: MTM Automation) */}
        <div className="absolute inset-0 p-4 bg-gradient-to-br from-emerald-950/40 via-[#071E22]/60 to-[#070E20] flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
              ⚡ {language === "bn" ? "১-ক্লিক অটোমেশন" : "1-Click Cloud Automation"}
            </div>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{language === "bn" ? "৫ সেকেন্ডে সকল শিক্ষার্থীর মার্কশিট" : "5-Second Marksheets & Results"}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{language === "bn" ? "GPS হাজিরা ও তাৎক্ষণিক SMS নোটিশ" : "GPS Attendance & Parent Alerts"}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{language === "bn" ? "১০০% নির্ভুল ডিজিটাল অ্যাকাউন্টস" : "100% Audit-Ready Double-Entry"}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{language === "bn" ? "জিরো পেপারওয়ার্ক ও পূর্ণ ক্লাউড ব্যাকআপ" : "Zero Paperwork & Automated Backup"}</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 pt-2 border-t border-emerald-500/20">
            <span>99.9% Automated</span>
            <span>0 Errors</span>
          </div>
        </div>

        {/* LEFT LAYER (BEFORE: Chaotic Manual), clipped by sliderPos */}
        <div
          className="absolute inset-y-0 left-0 p-4 bg-gradient-to-br from-rose-950/70 via-[#1C0E16]/80 to-[#0E060C] flex flex-col justify-between border-r border-cyan-400 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="min-w-[280px] space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold">
              ⚠️ {language === "bn" ? "খাতা-কলমে দীর্ঘসূত্রিতা" : "Manual & Tedious"}
            </div>
            <ul className="space-y-2 text-xs text-rose-200/80">
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{language === "bn" ? "হাজিরা ও রেজাল্টে দিনব্যাপী পরিশ্রম" : "Days spent calculating marks"}</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{language === "bn" ? "কাগজপত্রের স্তূপ ও হিসাবের অমিল" : "Piles of ledgers & lost vouchers"}</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{language === "bn" ? "ম্যানুয়াল এন্ট্রিতে বারবার ভুল" : "Frequent manual arithmetic errors"}</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{language === "bn" ? "প্রতি ছাত্রে ৪০ মিনিট অপচয়" : "Wasted 40 mins per student"}</span>
              </li>
            </ul>
          </div>
          <div className="min-w-[280px] flex items-center justify-between text-[11px] font-mono text-rose-400 pt-2 border-t border-rose-500/20">
            <span>High Waste</span>
            <span>Manual Stress</span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER HANDLE */}
        <div
          className="absolute inset-y-0 -ml-3.5 w-7 flex items-center justify-center cursor-ew-resize z-30"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-7 h-7 rounded-full bg-cyan-400 text-[#070B14] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.9)] hover:scale-110 active:scale-95 transition-transform">
            <Sliders className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Helper instruction */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>⟵ {language === "bn" ? "স্লাইডার ড্র্যাগ করুন" : "Drag slider left/right"} ⟶</span>
        <span className="text-cyan-400 font-bold">{Math.round(sliderPos)}% Split</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Mockup 3: Live Analytics Tabs
// -------------------------------------------------------------
function LiveAnalyticsTabs({ language }) {
  const [activeTab, setActiveTab] = useState("efficiency"); // efficiency | staff | ai

  return (
    <div className="relative w-full max-w-[510px] p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-[#0B2328]/90 via-[#081820]/90 to-[#060E1E]/95 border border-emerald-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      {/* Header & Metric Score */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider">
            {language === "bn" ? "অ্যাডমিনিস্ট্রেটিভ ইন্টেলিজেন্স" : "Administrative Intelligence"}
          </div>
          <div className="text-base font-bold text-white">
            {language === "bn" ? "প্রতিষ্ঠানের মেধা ও দক্ষতা সূচক" : "Talent & Efficiency Index"}
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold font-mono">
          +৯৪% Efficiency
        </span>
      </div>

      {/* Interactive Tab Controls */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10 mb-4">
        <button
          onClick={() => setActiveTab("efficiency")}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "efficiency"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {language === "bn" ? "দক্ষতা সূচক" : "Efficiency"}
        </button>
        <button
          onClick={() => setActiveTab("staff")}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "staff"
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {language === "bn" ? "মেধা বণ্টন" : "Staff Focus"}
        </button>
        <button
          onClick={() => setActiveTab("ai")}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "ai"
              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-400/40 shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {language === "bn" ? "AI Insights" : "AI Insights"}
        </button>
      </div>

      {/* Dynamic Content Based on Tab */}
      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3.5 mb-3.5 min-h-[140px] flex flex-col justify-center">
        {activeTab === "efficiency" && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-300">
                  {language === "bn" ? "সৃজনশীল ও উন্নয়নমূলক কাজে ফোকাস" : "Creative & Strategic Growth"}
                </span>
                <span className="text-emerald-400 font-bold font-mono">৯২%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 w-[92%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-300">
                  {language === "bn" ? "সিদ্ধান্ত গ্রহণের নির্ভুলতা (AI Insights)" : "Decision Accuracy"}
                </span>
                <span className="text-cyan-400 font-bold font-mono">৯৮%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 w-[98%] rounded-full shadow-[0_0_8px_rgba(6,182,212,0.7)]" />
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "staff" && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">{language === "bn" ? "পাঠদান ও শিক্ষা উন্নয়ন" : "Teaching & Mentorship"}</span>
              <span className="text-cyan-300 font-bold font-mono">৮৫% সময় ব্যয়</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-[85%] rounded-full" />
            </div>
            <div className="flex items-center justify-between text-xs pt-1 text-slate-400">
              <span>{language === "bn" ? "রুটিন পেপারওয়ার্কে অপচয়" : "Routine Paperwork"}</span>
              <span className="text-emerald-400 font-bold font-mono">মাত্র ১৫% (পূর্বে ৭০%)</span>
            </div>
          </motion.div>
        )}

        {activeTab === "ai" && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-400/25 flex items-center justify-between text-xs">
              <span className="text-indigo-200">
                {language === "bn" ? "ভর্তি ও ফি আদায় প্রেডিকশন" : "Fee Collection Forecast"}
              </span>
              <span className="font-mono text-indigo-400 font-bold">৯৯.২% নির্ভুল</span>
            </div>
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-between text-xs">
              <span className="text-emerald-200">
                {language === "bn" ? "ঝরে পড়ার আগাম সংকেত" : "Student Dropout Early Warning"}
              </span>
              <span className="font-mono text-emerald-400 font-bold">সক্রিয়</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* 3 Smart Feature Pills */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20">
          <div className="text-base mb-0.5">🎯</div>
          <div className="font-bold text-white">{language === "bn" ? "সঠিক পরিকল্পনা" : "Planning"}</div>
        </div>
        <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20">
          <div className="text-base mb-0.5">🛡️</div>
          <div className="font-bold text-white">{language === "bn" ? "ডাটা সুরক্ষা" : "Security"}</div>
        </div>
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/20">
          <div className="text-base mb-0.5">🚀</div>
          <div className="font-bold text-white">{language === "bn" ? "দ্রুত প্রবৃদ্ধি" : "Scale"}</div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Mockup 4: Interactive ROI / Savings Calculator
// -------------------------------------------------------------
function InteractiveRoiCalculator({ language }) {
  const [students, setStudents] = useState(750);

  // Dynamic calculations based on student/staff count
  const hoursSavedMonth = Math.round(students * 0.45);
  const paperSavingsMonth = Math.round(students * 28);
  const annualNetRoi = Math.round(students * 480);

  return (
    <div className="relative w-full max-w-[510px] p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-[#231A0B]/90 via-[#181307]/90 to-[#070E1E]/95 border border-amber-400/35 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      {/* Floating Gold Badge */}
      <div className="absolute -top-3.5 right-4 z-20 px-3.5 py-1 rounded-full bg-[#1F1709]/95 border border-amber-400/50 text-xs font-bold text-amber-300 shadow-md">
        💰 {language === "bn" ? "৬০% অপারেশনাল খরচ সাশ্রয়" : "60% Cost Saved"}
      </div>

      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-[11px] text-amber-400 font-mono uppercase tracking-wider flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>{language === "bn" ? "ROI লাইভ ক্যালকুলেটর" : "Interactive ROI Calculator"}</span>
          </div>
          <div className="text-base font-bold text-white">
            {language === "bn" ? "আপনার প্রতিষ্ঠানের সাশ্রয় হিসাব করুন" : "Calculate Your Savings"}
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-extrabold text-emerald-400 font-mono">+২৪৫%</div>
          <div className="text-[10px] text-slate-400 font-mono">Net ROI</div>
        </div>
      </div>

      {/* Interactive Range Slider */}
      <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 mb-3">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-300">
            {language === "bn" ? "শিক্ষার্থী সংখ্যা:" : "Total Students:"}
          </span>
          <span className="text-amber-400 font-bold font-mono text-sm">
            {students.toLocaleString()} {language === "bn" ? "জন" : "Students"}
          </span>
        </div>
        <input
          type="range"
          min="100"
          max="3000"
          step="50"
          value={students}
          onChange={(e) => setStudents(parseInt(e.target.value, 10))}
          className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
        />
        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
          <span>100</span>
          <span>1,500</span>
          <span>3,000+</span>
        </div>
      </div>

      {/* Real-time Computed Values */}
      <div className="grid grid-cols-3 gap-2 text-center mb-3">
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/25">
          <div className="text-[10px] text-slate-400">
            {language === "bn" ? "মাসিক সময় সাশ্রয়" : "Hours Saved/mo"}
          </div>
          <div className="text-sm sm:text-base font-extrabold text-amber-400 font-mono mt-0.5">
            {hoursSavedMonth}h
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/25">
          <div className="text-[10px] text-slate-400">
            {language === "bn" ? "কাগজ-কালি সাশ্রয়" : "Paper Cost/mo"}
          </div>
          <div className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono mt-0.5">
            ৳{paperSavingsMonth.toLocaleString()}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/25">
          <div className="text-[10px] text-slate-400">
            {language === "bn" ? "বার্ষিক মোট লাভ" : "Annual Net ROI"}
          </div>
          <div className="text-sm sm:text-base font-extrabold text-cyan-300 font-mono mt-0.5">
            ৳{annualNetRoi.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Dual Split-Voucher Status Strip */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center gap-2">
          <Receipt className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">
              {language === "bn" ? "অটো ভাউচার" : "Auto Vouchers"}
            </div>
            <div className="text-[10px] text-slate-400">১০০% অডিট রেডি</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center gap-2">
          <Wallet className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">
              {language === "bn" ? "দ্রুত ফি কালেকশন" : "Fast Fee Portal"}
            </div>
            <div className="text-[10px] text-slate-400">bKash / Nagad / Bank</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Slide-over Order / Demo Drawer Component
// -------------------------------------------------------------
function OrderDemoDrawer({ isOpen, onClose, language }) {
  const t = (HERO_DATA[language] || HERO_DATA.en).drawer;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: t.typeOptions[0],
    students: t.studentsOptions[1],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 900);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#090F1E]/95 border-l border-cyan-400/30 p-6 sm:p-8 overflow-y-auto shadow-[0_0_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col justify-between"
          >
            <div>
              {/* Top Bar with Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold">
                  <span>{t.tag}</span>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form or Done Box */}
              {!isDone ? (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{t.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">{t.subtitle}</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060B14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                        {t.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.phonePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060B14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                        {t.typeLabel}
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060B14] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 cursor-pointer"
                      >
                        {t.typeOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0B1222] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                        {t.studentsLabel}
                      </label>
                      <select
                        value={formData.students}
                        onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060B14] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 cursor-pointer"
                      >
                        {t.studentsOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0B1222] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 hover:brightness-110 text-[#070B14] font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{t.submitting}</span>
                      ) : (
                        <>
                          <span>{t.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{t.successTitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">{t.successDesc}</p>
                  <button
                    onClick={() => {
                      setIsDone(false);
                      onClose();
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {t.closeBtn}
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Footer Assurance */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Confidential • Zero Spam Guarantee</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// -------------------------------------------------------------
// MAIN HERO COMPONENT
// -------------------------------------------------------------
export default function Hero() {
  const { language } = useLanguage();
  const langKey = HERO_DATA[language] ? language : "bn";
  const data = HERO_DATA[langKey];

  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const slideDuration = 6500; // ms
  const intervalStep = 50; // ms

  const handleNextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % 4);
    setProgress(0);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + 4) % 4);
    setProgress(0);
  }, []);

  const goToSlide = (idx) => {
    setActiveSlide(idx);
    setProgress(0);
  };

  // Auto-play progress loop with pause-on-hover
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused && !isDrawerOpen) {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextSlide();
            return 0;
          }
          return prev + (intervalStep / slideDuration) * 100;
        });
      }
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, isDrawerOpen, handleNextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isDrawerOpen) return;
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, isDrawerOpen]);

  // Touch Swipe Support
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (diff > 50) handleNextSlide();
    else if (diff < -50) handlePrevSlide();
  };

  const currentSlideData = data.slides[activeSlide];

  return (
    <section
      id="home"
      className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#060913] via-[#0B162C]/70 to-[#070B14]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Blueprint Grid, Ambient Aurora Glow & Starfield Background */}
      <StarfieldBackground glowPosition="both" variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Glassmorphic Hero Carousel Frame */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#0E172B]/80 via-[#0A1122]/85 to-[#070D1C]/90 border border-cyan-400/20 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
          
          {/* Subtle Top Accent Glow Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

          {/* Carousel Slide Area */}
          <div className="relative min-h-[540px] sm:min-h-[500px] lg:min-h-[460px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* LEFT COLUMN: Kinetic Content */}
                  <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{currentSlideData.badge}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold leading-[1.22] text-white tracking-tight">
                      <span>{currentSlideData.title1} </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                        {currentSlideData.titleHighlight}
                      </span>
                      {currentSlideData.title2 && <span> {currentSlideData.title2}</span>}
                    </h1>

                    {/* Subheading / Description */}
                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {currentSlideData.description}
                    </p>

                    {/* Slide 0: 4 Value Pills Strip */}
                    {activeSlide === 0 && currentSlideData.pills && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                        {currentSlideData.pills.map((pill, i) => {
                          const IconComp = pill.icon;
                          return (
                            <div
                              key={i}
                              className={`flex items-center justify-center lg:justify-start gap-2 px-3 py-2 rounded-xl border backdrop-blur-md ${pill.bg}`}
                            >
                              <IconComp className={`w-4 h-4 ${pill.color}`} />
                              <span className="text-xs sm:text-sm font-bold text-white">{pill.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Slides 1, 2, 3: Dual Feature Cards */}
                    {activeSlide > 0 && currentSlideData.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left">
                        {currentSlideData.features.map((feat, i) => {
                          const IconComp = feat.icon;
                          return (
                            <div
                              key={i}
                              className={`p-3.5 rounded-2xl bg-[#091224]/80 border ${feat.color} flex items-start gap-3 backdrop-blur-md`}
                            >
                              <IconComp className="w-5 h-5 mt-0.5 shrink-0" />
                              <div>
                                <div className="text-sm font-bold text-white">{feat.title}</div>
                                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{feat.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                      <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-emerald-500 hover:brightness-110 text-[#070B14] font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>{currentSlideData.ctaPrimary}</span>
                        <Rocket className="w-4 h-4" />
                      </button>

                      <a
                        href="#mmis"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                      >
                        <span>{currentSlideData.ctaSecondary}</span>
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                      </a>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Interactive Slide Mockups */}
                  <div className="lg:col-span-6 flex justify-center">
                    {activeSlide === 0 && <AutoSyncRunner language={langKey} />}
                    {activeSlide === 1 && <BeforeAfterComparisonSlider language={langKey} />}
                    {activeSlide === 2 && <LiveAnalyticsTabs language={langKey} />}
                    {activeSlide === 3 && <InteractiveRoiCalculator language={langKey} />}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation & Progress Controls */}
          <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* 4 Tab Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {data.tabs.map((tab, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => goToSlide(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "border-cyan-400/50 bg-cyan-500/15 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        : "border-white/[0.08] bg-[#0A1224]/60 text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" : "bg-slate-600"
                      }`}
                    />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Slide Counter & Prev/Next Chevrons */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-wider text-slate-400 mr-1">
                0{activeSlide + 1} / 04
              </span>
              <button
                onClick={handlePrevSlide}
                aria-label="Previous Slide"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-cyan-400 hover:text-[#070B14] border border-white/10 hover:border-cyan-400 text-slate-200 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-cyan-400 hover:text-[#070B14] border border-white/10 hover:border-cyan-400 text-slate-200 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Smooth Auto-play Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/[0.04]">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Slide-over Order / Demo Drawer */}
      <OrderDemoDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        language={langKey}
      />
    </section>
  );
}
