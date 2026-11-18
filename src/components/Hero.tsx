"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";

const capabilities = [
  "$1.5M+ Annual Sales Scaled (7-Figure GMV)",
  "Walmart Seller Center",
  "Walmart Fulfillment Services (WFS)",
  "1,500+ SKU Catalog Ingestion",
  "Algorithmic Buy Box Defense",
  "Bulk Spec Sheet Automation",
  "Python Data Processing",
  "Advanced Excel (XLOOKUP / Index-Match)",
  "Inventory Velocity & Buffer Modeling",
  "Listing Suppression SLA <24h",
  "Generative AI Analytics (Claude / ChatGPT)",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative pt-32 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-10 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="max-w-5xl mx-auto"
      >
        {/* Top Operational Status Pill with Portrait Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 text-xs font-mono text-stone-500 dark:text-stone-400 mb-6 sm:mb-8 p-1 pr-3.5 rounded-full border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#141210]/70 backdrop-blur-sm"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-stone-300 dark:border-stone-700 shrink-0">
            <Image
              src="/gabriel.jpg"
              alt="Gabriel Chhetri"
              fill
              className="object-cover object-top"
              sizes="24px"
              priority
            />
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="uppercase tracking-widest text-[10px] sm:text-[11px] text-stone-700 dark:text-stone-300 font-medium">
            Marketplace Operations Specialist • Whole9yards Global Ecom
          </span>
        </motion.div>

        {/* Large Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="space-y-4 mb-8"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.08] sm:leading-[1.05]">
            Engineering marketplace scale, catalog health, and Buy&nbsp;Box&nbsp;dominance.
          </h1>
        </motion.div>

        {/* Narrative Prose & Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="grid md:grid-cols-12 gap-8 items-start mb-12 sm:mb-14"
        >
          <p className="md:col-span-8 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            I am Gabriel Chhetri — a marketplace operations specialist with over 3 years of hands-on experience
            scaling Walmart Marketplace accounts from <span className="text-stone-900 dark:text-stone-100 font-medium">$300,000 in Year 1 to over $1.5 million (7 figures) in Year 3</span>.
            Managing 1,500+ active SKUs and multi-facility WFS replenishment, I combine data precision with Python
            and spreadsheet automation to eliminate listing friction, defend the Buy Box, and drive sustainable growth.
          </p>

          <div className="md:col-span-4 flex flex-col gap-2.5 sm:gap-3 pt-1">
            <div className="flex items-baseline justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
              <span className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase">Revenue Scaled</span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">$300K → $1.5M (5x)</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
              <span className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase">Active Portfolio</span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">1,500+ SKUs</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
              <span className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase">Buy Box Rate</span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">&gt;94% Average</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
              <span className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase">Work Location</span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">On-site (Whole9yards)</span>
            </div>
          </div>
        </motion.div>

        {/* Direct Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2"
        >
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 text-xs sm:text-sm font-medium transition-all shadow-xs"
          >
            <span>Explore Case Studies</span>
            <ArrowDown size={14} className="text-stone-400 dark:text-stone-600" />
          </a>

          <a
            href="/Gabriel_Chhetri_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/80 dark:border-stone-800 transition-colors"
          >
            <FileText size={14} className="text-stone-500 dark:text-stone-400" />
            <span>Resume (PDF)</span>
          </a>

          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
          >
            <span>Career History</span>
            <ArrowUpRight size={14} className="text-stone-400 dark:text-stone-500" />
          </a>

          <a
            href="https://linkedin.com/in/gabriel-chhetri-729392187"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline underline-offset-4 transition-colors ml-auto sm:ml-0"
          >
            LinkedIn Profile ↗
          </a>
        </motion.div>
      </motion.div>

      {/* Infinite Operational Marquee Ticker */}
      <div className="w-full mt-16 sm:mt-20 pt-6 border-t border-stone-200/80 dark:border-stone-800/80 overflow-hidden select-none">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {[...capabilities, ...capabilities].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-4 text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest"
            >
              <span>{item}</span>
              <span className="text-stone-300 dark:text-stone-700">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
