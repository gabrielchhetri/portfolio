"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Growth & Scale" | "Catalog & Feeds" | "WFS & Logistics" | "Buy Box & Pricing" | "Automation";

const caseStudies = [
  {
    id: "revenue-scale",
    category: "Growth & Scale",
    num: "01",
    title: "Scaling Marketplace GMV from $300K to $1.5M (7-Figure Scale) in 3 Years",
    challenge:
      "Starting from an initial annual run-rate of $300,000 in Year 1, sales velocity was constrained by fragmented catalog architecture, frequent Buy Box loss to competitors, and inventory stockouts during peak shopping periods.",
    execution:
      "Architected a unified marketplace operational system: streamlined 1,500+ SKU catalog governance, implemented proactive WFS inbound replenishment to unlock 2-day delivery badges, and deployed automated repricing algorithms with strict profit margin floors.",
    result: "Delivered a 5x top-line revenue expansion over 3 years, elevating annual marketplace sales to over $1.5 million (7 figures) while preserving gross margins.",
    metric: "$300K → $1.5M GMV (5x Scale)",
    tags: ["7-Figure Scale", "Revenue Growth", "Walmart Marketplace", "WFS Scale", "Buy Box Defense"],
  },
  {
    id: "catalog-scale",
    category: "Catalog & Feeds",
    num: "02",
    title: "1,500+ SKU Catalog Ingestion & Systematic Attribute Governance",
    challenge:
      "Handling bulk onboarding of 1,500+ SKUs across diverse consumer product categories without triggering taxonomy rejection codes, attribute mismatches, or variant separation.",
    execution:
      "Engineered standardized batch flat-file spec sheets, built pre-upload automated validation checks using Excel and Python, and established strict category attribute compliance checks.",
    result: "Achieved 100% feed approval with zero data corruption, compressing seasonal launch timelines by over 50%.",
    metric: "1,500+ Active SKUs",
    tags: ["Bulk Feeds", "Spec Flat Files", "Walmart Taxonomy", "Data Validation"],
  },
  {
    id: "wfs-pipeline",
    category: "WFS & Logistics",
    num: "03",
    title: "End-to-End WFS Replenishment & Stockout Elimination Pipeline",
    challenge:
      "Volatile daily order velocity coupled with extended fulfillment center transit times caused recurring stockouts on high-velocity items, heavily penalizing search rank.",
    execution:
      "Formulated dynamic buffer reorder models factoring in 7-day and 30-day run rates, inbound transit lag, and FC receiving windows to automate weekly replenishment transfers.",
    result: "Sustained a >98% in-stock ratio across priority SKUs, eliminating algorithm ranking drop-offs caused by inventory depletion.",
    metric: "98.9% In-Stock Ratio",
    tags: ["WFS Portal", "Velocity Modeling", "Inbound Workflows", "Inventory Planning"],
  },
  {
    id: "buybox-defense",
    category: "Buy Box & Pricing",
    num: "04",
    title: "Algorithmic Buy Box Defense & Margin-Protected Repricing",
    challenge:
      "Aggressive third-party sellers were constantly undercutting retail pricing, capturing the Buy Box and eroding brand visibility without long-term price parity.",
    execution:
      "Structured competitive price tracking rules and automated threshold boundaries, defending Buy Box win rate while enforcing strict contribution margin floors.",
    result: "Consistently captured >94% average Buy Box share on core revenue drivers while defending brand equity.",
    metric: ">94% Buy Box Win Rate",
    tags: ["Buy Box Strategy", "Automated Repricing", "Margin Protection", "Price Elasticity"],
  },
  {
    id: "suppression-recovery",
    category: "Catalog & Feeds",
    num: "05",
    title: "Listing Suppression Remediation & Rapid Escalation Protocol",
    challenge:
      "Unannounced platform algorithm changes and bot crawls resulted in unexpected listing suppressions, broken parent-child matrices, and missing image specifications.",
    execution:
      "Instituted daily morning catalog health audit routines inside Walmart Seller Center, identifying error payloads immediately and submitting targeted remediation packages.",
    result: "Reduced average suppression resolution time from multiple days to under 24 hours, shielding vital organic revenue.",
    metric: "<24h Resolution SLA",
    tags: ["Listing Audits", "Suppression Fixes", "Seller Center", "Variant Healing"],
  },
  {
    id: "walmart-seo",
    category: "Catalog & Feeds",
    num: "06",
    title: "Search Term Optimization & Rich Attribute Conversion Lift",
    challenge:
      "High-potential catalog products were ranking beyond page 3 due to non-optimized keyword indexing and incomplete backend attribute specifications.",
    execution:
      "Re-engineered product titles, bullet copy, and backend query keywords around high-intent Walmart search queries, enriching product specifications for full indexation.",
    result: "Elevated organic search placement to Page 1 for targeted queries, accelerating unpaid customer acquisition.",
    metric: "+85% Organic Visibility",
    tags: ["Walmart SEO", "Search Indexation", "Rich Content", "Listing Quality"],
  },
  {
    id: "ai-reporting",
    category: "Automation",
    num: "07",
    title: "AI-Augmented Analytical Operations & Weekly Reporting Engine",
    challenge:
      "Manually assembling weekly transaction logs, return reports, and catalog health audits across multiple accounts was draining valuable operational hours.",
    execution:
      "Engineered automated spreadsheet templates leveraging nested XLOOKUP formulas, Python data cleaning, and custom prompt workflows using Claude 3.5 and ChatGPT.",
    result: "Automated the extraction of weekly KPI dashboards, cutting reporting time by over 5 hours every single week.",
    metric: "5+ Hours Saved Weekly",
    tags: ["Python Analytics", "ChatGPT / Claude Prompts", "Excel XLOOKUP", "Executive Reporting"],
  },
];

const categories: Category[] = [
  "All",
  "Growth & Scale",
  "Catalog & Feeds",
  "WFS & Logistics",
  "Buy Box & Pricing",
  "Automation",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <section
      id="case-studies"
      className="py-20 sm:py-24 px-4 sm:px-10 bg-white dark:bg-[#0c0a09] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-10 sm:mb-12">
          <span>03</span>
          <span className="w-6 h-px bg-stone-300 dark:bg-stone-700" />
          <span>Case Studies & Verified Outcomes</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              Selected Operations
            </h2>
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-sm font-mono">
            Direct problems solved, technical systems deployed, and measurable business outcomes.
          </p>
        </div>

        {/* Minimal Underline Filter Bar with Horizontal Scroll for Mobile */}
        <div className="overflow-x-auto hide-scrollbar border-b border-stone-200/80 dark:border-stone-800 pb-2 mb-10 sm:mb-12">
          <div className="flex items-center gap-5 sm:gap-6 min-w-max pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono transition-colors relative py-1 cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? "text-stone-900 dark:text-stone-100 font-semibold"
                    : "text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                }`}
              >
                <span>{cat}</span>
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 dark:bg-stone-100"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, idx) => (
              <motion.article
                key={study.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-5 sm:p-7 rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-[#141210] hover:bg-stone-50 dark:hover:bg-[#171513] hover:border-stone-300 dark:hover:border-stone-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-4 text-xs font-mono">
                    <span className="text-stone-400 dark:text-stone-500">{study.num} / {study.category}</span>
                    <span className="font-semibold text-stone-900 dark:text-stone-100 px-2 py-0.5 rounded bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-[11px] sm:text-xs">
                      {study.metric}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-stone-900 dark:text-stone-100 leading-snug mb-4">
                    {study.title}
                  </h3>

                  {/* Challenge & Execution */}
                  <div className="space-y-3 text-xs leading-relaxed mb-6">
                    <div>
                      <span className="font-mono text-stone-400 dark:text-stone-500 uppercase text-[10px] tracking-wider block mb-1">
                        Problem
                      </span>
                      <p className="text-stone-600 dark:text-stone-300">{study.challenge}</p>
                    </div>

                    <div>
                      <span className="font-mono text-stone-400 dark:text-stone-500 uppercase text-[10px] tracking-wider block mb-1">
                        Execution
                      </span>
                      <p className="text-stone-600 dark:text-stone-300">{study.execution}</p>
                    </div>
                  </div>
                </div>

                {/* Result & Tags */}
                <div className="pt-4 border-t border-stone-200/70 dark:border-stone-800/80">
                  <div className="text-xs text-stone-900 dark:text-stone-100 font-medium mb-3">
                    <span className="font-mono text-stone-400 dark:text-stone-500 font-normal uppercase text-[10px] tracking-wider block mb-0.5">
                      Verified Result
                    </span>
                    {study.result}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-stone-900 text-stone-500 dark:text-stone-400 border border-stone-200/60 dark:border-stone-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
