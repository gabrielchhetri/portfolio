"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const workExperience = [
  {
    company: "Whole9yards Global Ecom",
    role: "Junior Business Analyst — Marketplace Operations",
    period: "Jan 2023 — Present",
    location: "On-site",
    badge: "Active Engagement",
    summary:
      "End-to-end operational ownership of enterprise Walmart Marketplace accounts. Spearheaded catalog architecture across 1,500+ active SKUs and WFS fulfillment logistics, scaling annual sales from $300,000 in Year 1 to over $1.5 million (7-figure GMV) in Year 3.",
    pillars: [
      {
        title: "WFS Supply Chain & Inbound Operations",
        points: [
          "Coordinating end-to-end WFS inventory allocation, shipment creation, carton labeling, and receiving tracking across regional fulfillment centers.",
          "Analyzing 7-day and 30-day sell-through curves, warehouse capacity limits, and lead times to avoid out-of-stock search ranking penalties.",
        ],
      },
      {
        title: "1,500+ SKU Catalog & Feed Governance",
        points: [
          "Supervising bulk batch flat files, listing ingestion, attribute mapping, and category taxonomy compliance in Walmart Seller Center.",
          "Rapidly triaging and resolving listing suppressions, feed errors, and broken parent-child variant structures within a strict 24h SLA.",
        ],
      },
      {
        title: "Growth, Pricing & Buy Box Optimization",
        points: [
          "Drove 5x top-line scale from $300K initial run-rate to $1.5M+ annual GMV milestone through systematic Buy Box defense and catalog quality upgrades.",
          "Administering automated repricing strategies and competitor price parity monitoring to defend Buy Box share above 94%.",
          "Auditing product titles, backend keywords, and rich media attributes to maximize organic algorithm indexation and consumer conversion.",
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Arts in Psychology (Hons.)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    period: "2021 — 2024",
    detail: "Graduated with Honors. Coursework in research methodology, analytical reasoning, and behavioral science.",
  },
  {
    degree: "Class 12 (Senior Secondary)",
    institution: "National Institute of Open Schooling (NIOS)",
    period: "2019 — 2021",
    detail: "Academic focus in business foundation, communication, and computing fundamentals.",
  },
];

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    year: "Verified",
    description: "Generative AI applications, structured prompt engineering, and operational automation.",
  },
  {
    title: "Data Analytics using ChatGPT with Excel and Python",
    issuer: "Professional Certification",
    year: "Verified",
    description: "Python data munging, nested Excel modeling (XLOOKUP / Index-Match), and LLM data workflows.",
  },
  {
    title: "Advanced Diploma in Computer Applications (ADCA)",
    issuer: "Certified Institute",
    year: "Verified",
    description: "Database architectures, automated office software suites, and computing fundamentals.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 px-4 sm:px-10 bg-[#fafaf9] dark:bg-[#0c0a09] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-10 sm:mb-12">
          <span>04</span>
          <span className="w-6 h-px bg-stone-300 dark:bg-stone-700" />
          <span>Career Track Record & Qualifications</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              Experience & Education
            </h2>
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-sm font-mono">
            3+ years in high-velocity marketplace analytics and inventory operations.
          </p>
        </div>

        {/* Primary Role Breakdown */}
        <div className="space-y-12 mb-16 sm:mb-20">
          {workExperience.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141210] border border-stone-200/80 dark:border-stone-800 shadow-xs"
            >
              {/* Top Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-stone-200/80 dark:border-stone-800 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100">
                      {job.company}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800">
                      {job.badge}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-stone-600 dark:text-stone-300">
                    {job.role}
                  </div>
                </div>

                <div className="text-xs font-mono text-stone-400 dark:text-stone-500">
                  {job.period} • {job.location}
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
                {job.summary}
              </p>

              {/* Pillars with Staggered Entrance */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
              >
                {job.pillars.map((pillar) => (
                  <motion.div key={pillar.title} variants={itemVariants} className="space-y-3">
                    <div className="text-xs font-mono font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                      {pillar.title}
                    </div>
                    <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {pillar.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-stone-400 dark:text-stone-600 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Grid: Academic & Technical */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 pt-4">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest pb-3 border-b border-stone-200/80 dark:border-stone-800">
              Academic Foundation
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{edu.degree}</span>
                    <span className="text-xs font-mono text-stone-400 dark:text-stone-500 shrink-0">{edu.period}</span>
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-300">{edu.institution}</div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 pt-1 leading-relaxed">{edu.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications with Staggered Rows */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest pb-3 border-b border-stone-200/80 dark:border-stone-800">
              Technical Certifications
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#141210] border border-stone-200/80 dark:border-stone-800 space-y-1"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-xs font-semibold text-stone-900 dark:text-stone-100">{cert.title}</span>
                    <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 shrink-0">{cert.issuer}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Resume Download Callout */}
        <div className="mt-14 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#141210] border border-stone-200/80 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-900 flex items-center justify-center shrink-0">
              <FileText size={18} className="text-stone-700 dark:text-stone-300" />
            </div>
            <div>
              <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                Official Curriculum Vitae (PDF)
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                Complete career trajectory, Walmart SKU case metrics & academic history
              </div>
            </div>
          </div>

          <a
            href="/Gabriel_Chhetri_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 text-xs font-mono font-medium transition-colors shrink-0"
          >
            <Download size={13} className="text-stone-400 dark:text-stone-600" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
