"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Copy, Check, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Competencies", href: "#competencies" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("Gabrielchhetri0@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-stone-900 dark:bg-stone-100 origin-left z-[60]"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-6 pointer-events-none"
      >
        <motion.nav
          role="navigation"
          aria-label="Main Navigation"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-3.5 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/85 dark:bg-[#141210]/90 border-stone-200 dark:border-stone-800 shadow-sm backdrop-blur-xl"
              : "bg-white/65 dark:bg-[#141210]/70 border-stone-200/70 dark:border-stone-800/80 backdrop-blur-md"
          }`}
        >
          {/* Brand Signature */}
          <a
            href="#overview"
            aria-label="Gabriel Chhetri Overview"
            className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 group"
          >
            <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-bold tracking-normal group-hover:scale-105 transition-transform">
              GC
            </span>
            <span className="hidden sm:inline">Gabriel Chhetri</span>
            <span className="hidden lg:inline text-stone-400 dark:text-stone-500 font-normal font-mono text-[11px]">
              / Marketplace Ops
            </span>
          </a>

          {/* Desktop Nav Links with Active State */}
          <div className="hidden md:flex items-center gap-0.5 text-xs font-medium text-stone-500 dark:text-stone-400">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full transition-colors relative ${
                    isActive
                      ? "text-stone-900 dark:text-stone-100 font-semibold"
                      : "hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/70 dark:hover:bg-stone-800/50"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Stack */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Resume PDF Download Link */}
            <a
              href="/Gabriel_Chhetri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 hover:bg-stone-200/80 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-800 transition-all"
              title="Download Gabriel's Resume PDF"
              aria-label="Download Gabriel Chhetri Resume PDF"
            >
              <FileText size={12} className="text-stone-500 dark:text-stone-400" />
              <span>Resume</span>
            </a>

            {/* Quick Email Copy */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 sm:px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 hover:bg-stone-200/80 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-800 transition-all cursor-pointer"
              title="Copy email address"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-stone-900 dark:text-stone-100" />
                  <span className="font-sans text-[11px] font-medium text-stone-900 dark:text-stone-100">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} className="text-stone-400 dark:text-stone-500" />
                  <span className="hidden sm:inline text-[11px]">Email</span>
                </>
              )}
            </button>

            {/* Contact Connect */}
            <a
              href="#contact"
              className="flex items-center gap-1 text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 transition-all shadow-xs"
              aria-label="Navigate to Contact section"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} className="text-stone-400 dark:text-stone-600" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-full text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl bg-white dark:bg-[#171513] border border-stone-200 dark:border-stone-800 shadow-xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest px-2 pb-2 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span>Navigation</span>
                <span className="text-[10px]">Gabriel Chhetri</span>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800/60 rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-stone-100 dark:border-stone-800 flex flex-col gap-2">
                <a
                  href="/Gabriel_Chhetri_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-stone-100 dark:bg-stone-800 text-xs font-mono text-stone-700 dark:text-stone-300 font-medium"
                >
                  <FileText size={13} />
                  <span>Download Resume (PDF)</span>
                </a>
                <div className="flex flex-col gap-1 text-[11px] text-stone-500 dark:text-stone-400 font-mono pt-1">
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-stone-700 dark:text-stone-300">Gabrielchhetri0@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span className="text-stone-700 dark:text-stone-300">+91 8167891199</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
