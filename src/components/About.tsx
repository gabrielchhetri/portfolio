"use client";

import { motion } from "framer-motion";

const languages = [
  { name: "English", level: "Fluent", tag: "Professional" },
  { name: "Hindi", level: "Fluent", tag: "Professional" },
  { name: "Nepali", level: "Native", tag: "Primary" },
  { name: "Mizo", level: "Native", tag: "Primary" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 px-4 sm:px-10 bg-white dark:bg-[#0c0a09] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-10 sm:mb-12">
          <span>01</span>
          <span className="w-6 h-px bg-stone-300 dark:bg-stone-700" />
          <span>Profile & Operational Approach</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 leading-snug">
              High-volume marketplace operations grounded in data integrity and execution.
            </h2>

            <div className="space-y-4 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                Managing enterprise ecommerce storefronts demands systematic execution across catalog health,
                inventory allocation, and pricing dynamics. Over the past 3+ years at Whole9yards Global Ecom,
                I have specialized in scaling Walmart Marketplace accounts — growing annual sales from $300,000 in Year 1
                to over $1.5 million (7 figures) by Year 3 while orchestrating end-to-end WFS logistics.
              </p>
              <p>
                My operational focus centers on eliminating catalog friction: deploying batch flat-file spec sheets
                without schema rejections, proactively monitoring suppression alerts under a strict 24-hour resolution SLA,
                and optimizing search discoverability through enriched attribute mapping.
              </p>
              <p>
                Whether coordinating multi-FC inbound replenishment shipments or configuring automated repricing rules to
                defend Buy Box share above 94%, I balance high-velocity operational output with strict gross margin discipline.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
              <span className="text-stone-900 dark:text-stone-100 font-medium">Core Metric:</span>
              <span>$1.5M GMV (5x Scale) • 1,500+ SKUs • &gt;94% Buy Box Win Rate • &lt;24h Remediation SLA</span>
            </div>
          </motion.div>

          {/* Right Column: Languages & Working Standards */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            {/* Multilingual Fluency with Staggered Rows */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4">
                Linguistic Reach & Fluency
              </div>
              <div className="divide-y divide-stone-200/80 dark:divide-stone-800 border-y border-stone-200/80 dark:border-stone-800">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    variants={itemVariants}
                    className="py-3 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-semibold text-stone-900 dark:text-stone-100">{lang.name}</span>
                      <span className="text-stone-400 dark:text-stone-500 font-mono ml-2 text-[11px]">— {lang.level}</span>
                    </div>
                    <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                      {lang.tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Operating Discipline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-stone-50 dark:bg-[#141210] border border-stone-200/80 dark:border-stone-800 space-y-2"
            >
              <div className="text-xs font-mono text-stone-900 dark:text-stone-100 uppercase tracking-wider font-semibold">
                Operational Standards & SLA
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Operating within high-velocity brand and agency workflows requires rigorous execution and accountability.
                Experienced in cross-functional coordination, real-time ticket escalation, and end-of-day
                catalog health auditing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
