import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-[#0c0a09] text-[#1c1917] dark:text-[#f5f5f4] flex flex-col justify-between px-6 sm:px-10 py-10 transition-colors duration-300">
      {/* Top Header Monogram */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 group"
        >
          <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-bold tracking-normal">
            GC
          </span>
          <span>Gabriel Chhetri</span>
          <span className="text-stone-400 dark:text-stone-500 font-normal font-mono text-[11px] hidden sm:inline">
            / Marketplace Operations
          </span>
        </Link>
        <div className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
          Status: 404
        </div>
      </div>

      {/* Main 404 Notice */}
      <main className="max-w-2xl mx-auto w-full my-auto py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs font-mono">
          <AlertCircle size={13} className="text-stone-700 dark:text-stone-300" />
          <span>Listing Suppressed • HTTP 404</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-mono">
          404
        </h1>

        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight">
            Catalog route not found in active inventory.
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 max-w-md mx-auto leading-relaxed">
            The page or asset you requested has either been delisted, moved, or temporarily suppressed by feed rules.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 text-xs font-medium font-mono transition-all shadow-xs"
          >
            <ArrowLeft size={13} />
            <span>Return to Active Catalog</span>
          </Link>
        </div>
      </main>

      {/* Footer Info */}
      <div className="max-w-5xl mx-auto w-full text-center text-xs font-mono text-stone-400 dark:text-stone-600 border-t border-stone-200/80 dark:border-stone-800/80 pt-6">
        Gabriel Chhetri • Marketplace Operations Specialist • Walmart & WFS
      </div>
    </div>
  );
}
