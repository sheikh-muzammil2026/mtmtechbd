"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StarfieldBackground from "@/components/shared/StarfieldBackground";

const SERVICES_OPTIONS = [
  {
    en: "Campus ERP & Student Records",
    bn: "ক্যাম্পাস ইআরপি ও ছাত্র তথ্য",
    ar: "إدارة الحرم المدرسي وسجلات الطلاب",
  },
  {
    en: "Double-Entry Tuition Accounting",
    bn: "দ্বি-প্রবেশ হিসাব ও ফি ভাউচার",
    ar: "محاسبة الرسوم المزدوجة والفواتير",
  },
  {
    en: "Exam Results & QR Admit Cards",
    bn: "পরীক্ষার ফলাফল ও QR প্রবেশপত্র",
    ar: "نتائج الاختبارات وبطاقات الدخول QR",
  },
  {
    en: "Attendance Sync & Daily Guardian SMS",
    bn: "হাজিরা ট্র্যাকিং ও অভিভাবক SMS",
    ar: "سجل الحضور ورسائل SMS للأهالي",
  },
  {
    en: "Hostel, Boarding & Mess Accounts",
    bn: "বোর্ডিং, হোস্টেল ও মেস হিসাব",
    ar: "إدارة السكن الداخلي والإطعام",
  },
  {
    en: "Official Institutional Website & LMS",
    bn: "প্রতিষ্ঠানের ওয়েবসাইট ও অনলাইন একাডেমি",
    ar: "الموقع المؤسسي ومنصة التعلم الرقمي",
  },
];

const BUDGET_OPTIONS = [
  "< ৳15,000",
  "৳15,000 - ৳30,000",
  "৳30,000 - ৳60,000",
  "৳60,000+",
];

export default function Contact() {
  const { language, dict } = useLanguage();
  const [selectedServices, setSelectedServices] = useState([
    "Campus ERP & Student Records",
  ]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[1]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleService = (serviceEn) => {
    if (selectedServices.includes(serviceEn)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== serviceEn));
      }
    } else {
      setSelectedServices([...selectedServices, serviceEn]);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@mtmtechbd.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="site-section-alt relative overflow-hidden">
      {/* Blueprint Grid, Ambient Aurora Glow & Starfield */}
      <StarfieldBackground glowPosition="right" />

      <div className="relative z-10 site-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="site-badge"
          >
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span>{dict.contact.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading"
          >
            {dict.contact.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {dict.contact.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-subheading"
          >
            {dict.contact.description}
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* LEFT: Contact Coordinates & Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Tagline Card */}
            <div className="theme-card p-6">
              <div className="site-badge mb-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                <span>{dict.contact.promiseBadge}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                {dict.contact.promiseTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                {dict.contact.promiseDesc}
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between group hover:border-sky-300 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 font-semibold">
                      {dict.contact.directInquiries}
                    </div>
                    <a
                      href="mailto:contact@mtmtechbd.com"
                      className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors"
                      dir="ltr"
                    >
                      contact@mtmtechbd.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between group hover:border-sky-300 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 font-semibold">
                      {dict.contact.technicalAdvisory}
                    </div>
                    <a
                      href="tel:+8801836376174"
                      className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors"
                      dir="ltr"
                    >
                      +880 (18) 3637-6174
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                  {dict.contact.availableBadge}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3.5 hover:border-sky-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                  <MapPin className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 font-semibold">
                    {dict.contact.engineeringBase}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {dict.contact.baseLocation}
                  </div>
                </div>
              </div>
            </div>

            {/* SLA & NDA Badges */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{dict.contact.slaNotice}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{dict.contact.ndaNotice}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-lg">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-6 shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {dict.contact.successTitle}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 max-w-md leading-relaxed font-normal">
                      {dict.contact.successDesc}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          message: "",
                        });
                      }}
                      className="mt-8 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors cursor-pointer"
                    >
                      {dict.contact.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Services Chips */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 tracking-wider mb-2.5 font-semibold">
                        {dict.contact.servicesLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES_OPTIONS.map((srv) => {
                          const isSelected = selectedServices.includes(srv.en);
                          const label =
                            language === "ar"
                              ? srv.ar
                              : language === "bn"
                              ? srv.bn
                              : srv.en;

                          return (
                            <button
                              key={srv.en}
                              type="button"
                              onClick={() => toggleService(srv.en)}
                              className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-sky-600 text-white font-semibold shadow-xs"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80 font-medium"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Estimated Budget Selector */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 tracking-wider mb-2.5 font-semibold">
                        {dict.contact.budgetLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" dir="ltr">
                        {BUDGET_OPTIONS.map((bgt) => {
                          const isSelected = selectedBudget === bgt;
                          return (
                            <button
                              key={bgt}
                              type="button"
                              onClick={() => setSelectedBudget(bgt)}
                              className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-sky-600 text-white shadow-xs"
                                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                              }`}
                            >
                              {bgt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Inputs: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                          {dict.contact.nameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder={dict.contact.namePlaceholder}
                          className="theme-input"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                          {dict.contact.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder={dict.contact.emailPlaceholder}
                          className="theme-input"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    {/* Institution Name / Website */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                        {dict.contact.companyLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder={dict.contact.companyPlaceholder}
                        className="theme-input"
                      />
                    </div>

                    {/* Requirements Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                        {dict.contact.messageLabel}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={dict.contact.messagePlaceholder}
                        className="theme-input resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="theme-btn-primary w-full py-4 text-sm font-bold shadow-md shadow-sky-500/20 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>{dict.contact.submittingBtn}</span>
                        ) : (
                          <>
                            <span>{dict.contact.submitBtn}</span>
                            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{dict.contact.privacyBadge}</span>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
