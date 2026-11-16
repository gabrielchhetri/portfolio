"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("Gabrielchhetri0@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+918167891199");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const mailto = `mailto:Gabrielchhetri0@gmail.com?subject=${encodeURIComponent(
      `Marketplace Operations Inquiry: ${formData.company || formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany / Brand: ${formData.company}\n\nScope of Work / Role:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailto;
    }, 400);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-10 bg-white dark:bg-[#0c0a09] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-10 sm:mb-12">
          <span>05</span>
          <span className="w-6 h-px bg-stone-300 dark:bg-stone-700" />
          <span>Contact & Consultation</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mb-4 leading-tight">
                Let&apos;s build scalable marketplace operations.
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Available for full-time marketplace specialist roles, high-volume Walmart catalog audits,
                and WFS replenishment consulting.
              </p>
            </div>

            {/* Direct Cards with Staggered Entrance */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3 pt-2"
            >
              {/* Email Card */}
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-[#141210] flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-0.5">
                    Direct Email
                  </div>
                  <a
                    href="mailto:Gabrielchhetri0@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 hover:underline"
                  >
                    Gabrielchhetri0@gmail.com
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="text-stone-900 dark:text-stone-100" /> : <Copy size={14} />}
                </button>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-[#141210] flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-0.5">
                    Phone / WhatsApp
                  </div>
                  <a
                    href="tel:+918167891199"
                    className="text-xs sm:text-sm font-semibold font-mono text-stone-900 dark:text-stone-100 hover:underline"
                  >
                    +91 8167891199
                  </a>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-2 rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check size={14} className="text-stone-900 dark:text-stone-100" /> : <Copy size={14} />}
                </button>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.a
                variants={itemVariants}
                href="https://linkedin.com/in/gabriel-chhetri-729392187"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-[#141210] flex items-center justify-between hover:bg-stone-100/60 dark:hover:bg-[#181614] transition-colors block"
                aria-label="Gabriel Chhetri on LinkedIn"
              >
                <div>
                  <div className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                    <LinkedinIcon size={12} />
                    <span>LinkedIn Network</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
                    gabriel-chhetri-729392187
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-stone-400 dark:text-stone-500" />
              </motion.a>
            </motion.div>

            <div className="pt-2 text-xs font-mono text-stone-400 dark:text-stone-500">
              Operating timezone: IST (UTC+5:30) • Typical turnaround &lt;24 business hours
            </div>
          </motion.div>

          {/* Right Column: Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-8 rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/40 dark:bg-[#141210] space-y-4"
            >
              {submitted && (
                <div className="p-3.5 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center gap-2.5 text-xs text-stone-900 dark:text-stone-100 font-mono">
                  <CheckCircle2 size={16} className="text-stone-900 dark:text-stone-100 shrink-0" />
                  <span>Opening your email client with your prefilled details...</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-[11px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-xs placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-[11px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Your Work Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-xs placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-company" className="text-[11px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Company / Brand Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Apex Commerce (Optional)"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-xs placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-[11px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Project / Opportunity Details
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your catalog size, WFS logistics requirements, or full-time opening..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-xs placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 text-xs font-mono font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                <span>Dispatch Inquiry</span>
                <ArrowRight size={13} className="text-stone-400 dark:text-stone-600" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
