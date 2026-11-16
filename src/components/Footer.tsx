"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [time, setTime] = useState("");
  const year = 2026;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    const timer = setTimeout(updateTime, 0);
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-10 border-t border-stone-200/80 dark:border-stone-800 bg-[#fafaf9] dark:bg-[#0c0a09] text-xs font-mono text-stone-500 dark:text-stone-400 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Live Time */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-stone-900 dark:text-stone-100">Gabriel Chhetri</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-100 animate-pulse" />
            IST {time || "05:30 PM"} (UTC+5:30)
          </span>
        </div>

        {/* Center: Statement */}
        <div className="text-[11px] text-stone-400 dark:text-stone-500 text-center sm:text-left">
          Marketplace Operations • Walmart & WFS Specialist • © {year}
        </div>

        {/* Right: Network & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/gabriel-chhetri-729392187"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            aria-label="Gabriel Chhetri LinkedIn Profile"
          >
            <LinkedinIcon size={14} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            aria-label="Gabriel Chhetri GitHub Profile"
          >
            <GithubIcon size={14} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors pl-3 border-l border-stone-200 dark:border-stone-800 font-medium cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
