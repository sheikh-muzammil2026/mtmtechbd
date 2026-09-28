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
  Sparkles,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SERVICES_OPTIONS = [
  { en: "Custom Web Development", bn: "কাস্টম ওয়েব ডেভেলপমেন্ট" },
  { en: "Full-Stack SaaS Application", bn: "ফুল-স্ট্যাক SaaS অ্যাপ্লিকেশন" },
  { en: "UI/UX & Product Design", bn: "ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন" },
  { en: "Headless E-Commerce", bn: "হেডলেস ই-কমার্স" },
  { en: "Cloud Architecture & DevOps", bn: "ক্লাউড আর্কিটেকচার ও ডেভঅপ্স" },
  { en: "Dedicated IT Maintenance", bn: "ডেডিকেটেড আইটি মেইনটেন্যান্স" },
];

const BUDGET_OPTIONS = [
  "< $3,000",
  "$3,000 - $6,000",
  "$6,000 - $12,000",
  "$12,000+",
];

export default function Contact() {
  const { language, dict } = useLanguage();
  const [selectedServices, setSelectedServices] = useState([
    "Custom Web Development",
  ]);
  const [selectedBudget, setSelectedBudget] = useState("$3,000 - $6,000");
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
    <section
      id="contact"
      className="relative py-28 sm:py-32 bg-[#0B0E17] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#00E5FF]/30 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#00E5FF] to-[#38bdf8] bg-clip-text text-transparent">
              {dict.contact.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {dict.contact.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent">
              {dict.contact.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {dict.contact.description}
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* LEFT: Contact Coordinates & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Tagline Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5FF] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{dict.contact.promiseBadge}</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {dict.contact.promiseTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {dict.contact.promiseDesc}
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00E5FF]/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {dict.contact.directInquiries}
                    </div>
                    <a
                      href="mailto:contact@mtmtechbd.com"
                      className="text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors"
                    >
                      contact@mtmtechbd.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00E5FF]/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[#38bdf8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {dict.contact.technicalAdvisory}
                    </div>
                    <a
                      href="tel:+8801700000000"
                      className="text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors"
                    >
                      +880 (17) 0000-0000
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {dict.contact.availableBadge}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300">
                  <MapPin className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {dict.contact.engineeringBase}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {dict.contact.baseLocation}
                  </div>
                </div>
              </div>
            </div>

            {/* SLA & NDA Badges */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#00E5FF]/5 to-transparent border border-[#00E5FF]/20 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>{dict.contact.slaNotice}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>{dict.contact.ndaNotice}</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Interactive Lead Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#0B0E17]/95 border border-white/[0.12] p-8 sm:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {dict.contact.successTitle}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 max-w-md leading-relaxed">
                      {dict.contact.successDesc}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }}
                      className="mt-8 px-6 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-white transition-colors"
                    >
                      {dict.contact.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Services Chips */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                        {dict.contact.servicesLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES_OPTIONS.map((srv) => {
                          const isSelected = selectedServices.includes(srv.en);
                          const label = language === "bn" ? srv.bn : srv.en;
                          return (
                            <button
                              key={srv.en}
                              type="button"
                              onClick={() => toggleService(srv.en)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSelected
                                  ? "bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-semibold shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                                  : "bg-white/[0.03] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2]"
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
                      <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                        {dict.contact.budgetLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGET_OPTIONS.map((bgt) => {
                          const isSelected = selectedBudget === bgt;
                          return (
                            <button
                              key={bgt}
                              type="button"
                              onClick={() => setSelectedBudget(bgt)}
                              className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all ${
                                isSelected
                                  ? "bg-white text-[#0B0E17] shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                  : "bg-white/[0.03] text-slate-300 hover:text-white border border-white/[0.08]"
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
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
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
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
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
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                        />
                      </div>
                    </div>

                    {/* Company / Website */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        {dict.contact.companyLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder={dict.contact.companyPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                      />
                    </div>

                    {/* Project Requirements Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
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
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group focus:outline-none disabled:opacity-50"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] rounded-full filter blur-[8px] opacity-75 group-hover:opacity-100 group-hover:blur-[12px] transition-all duration-300" />
                        <span className="relative w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-bold text-sm tracking-wide transition-all duration-300 group-hover:brightness-110 active:scale-98 shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                          {isSubmitting ? (
                            <span>{dict.contact.submittingBtn}</span>
                          ) : (
                            <>
                              <span>{dict.contact.submitBtn}</span>
                              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </span>
                      </button>

                      <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{dict.contact.privacyBadge}</span>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
