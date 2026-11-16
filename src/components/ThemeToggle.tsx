"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === "class") {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const newDark = !isDark;
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="p-1.5 sm:p-2 rounded-full border border-stone-200/80 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900 hover:bg-stone-200/80 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun size={14} className="text-stone-200" /> : <Moon size={14} className="text-stone-700" />}
      </motion.div>
    </motion.button>
  );
}
