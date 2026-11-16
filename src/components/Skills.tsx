"use client";

import { motion } from "framer-motion";

const competencies = [
  {
    num: "01",
    title: "Large-Scale Catalog Architecture & Feed Governance",
    scope: "1,500+ SKUs Active Control",
    description:
      "Directing bulk batch spec sheet uploads, category taxonomy alignment, and variant mapping within Walmart Seller Center. Maintaining continuous schema validation to eliminate feed ingestion failures, image rejections, and algorithmic listing suppressions.",
    skills: ["Bulk Spec Sheets", "Taxonomy Mapping", "Listing Health Auditing", "Suppression Remediation"],
  },
  {
    num: "02",
    title: "Algorithmic Buy Box Defense & Margin Repricing",
    scope: ">94% Sustained Win Rate",
    description:
      "Configuring competitive repricing parameters that defend Buy Box ownership against aggressive third-party sellers while maintaining strict floor margins. Analyzing pricing elasticity, offer status, and fulfillment speed advantages.",
    skills: ["Repricing Rules", "Margin Protection", "Competitor Monitoring", "Price Elasticity"],
  },
  {
    num: "03",
    title: "WFS Supply Chain Logistics & Inventory Forecasting",
    scope: "Multi-FC Inbound Coordination",
    description:
      "Orchestrating end-to-end Walmart Fulfillment Services (WFS) inbound shipments. Formulating dynamic reorder points based on 7-day and 30-day velocity curves, lead-time variance, and warehouse capacity constraints to prevent costly stockouts.",
    skills: ["Inbound Shipments", "Velocity Tracking", "Stockout Prevention", "WFS Portal Workflows"],
  },
  {
    num: "04",
    title: "Analytical Automation: Python, Excel & Generative AI",
    scope: "Data Pipeline Engineering",
    description:
      "Replacing tedious manual data entry with Python data-munging scripts, nested Excel models (XLOOKUP, Index-Match, conditional logic), and structured LLM prompts (Claude 3.5, ChatGPT) to audit catalog anomalies and assemble executive KPI summaries.",
    skills: ["Python Scripting", "Excel Modeling", "LLM Prompt Engineering", "Automated KPI Dashboards"],
  },
];

const technicalStack = [
  "Walmart Seller Center",
  "Walmart Fulfillment Services (WFS)",
  "Microsoft Excel (XLOOKUP, Pivots)",
  "Python (Pandas, Data Cleaning)",
  "ChatGPT / Claude 3.5 / Gemini",
  "Google Workspace & Sheets",
  "Competitor Repricing Engines",
  "Batch Spec Flat Files",
  "Inventory Replenishment Models",
  "Listing Quality Score (LQS) Optimization",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section
      id="competencies"
      className="py-20 sm:py-24 px-4 sm:px-10 bg-[#fafaf9] dark:bg-[#0c0a09] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-10 sm:mb-12">
          <span>02</span>
          <span className="w-6 h-px bg-stone-300 dark:bg-stone-700" />
          <span>Operational Competencies</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              The Marketplace Architecture
            </h2>
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-sm font-mono">
            How systems, algorithms, and inventory pipelines are managed for high-volume enterprise operations.
          </p>
        </div>

        {/* Competency Stack with Staggered Scroll Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="divide-y divide-stone-200/80 dark:divide-stone-800 border-y border-stone-200/80 dark:border-stone-800 mb-16"
        >
          {competencies.map((comp) => (
            <motion.div
              key={comp.num}
              variants={itemVariants}
              className="py-8 sm:py-10 grid md:grid-cols-12 gap-6 items-start group"
            >
              <div className="md:col-span-1 font-mono text-xs text-stone-400 dark:text-stone-500 font-medium">
                {comp.num}
              </div>

              <div className="md:col-span-5 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">
                  {comp.title}
                </h3>
                <div className="font-mono text-xs text-stone-500 dark:text-stone-400 font-medium">
                  {comp.scope}
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {comp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {comp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-stone-100/90 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200/70 dark:border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Stack Pills */}
        <div>
          <div className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4">
            Tools & Technical Infrastructure
          </div>
          <div className="flex flex-wrap gap-2">
            {technicalStack.map((tool) => (
              <span
                key={tool}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-white dark:bg-[#141210] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 shadow-2xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
