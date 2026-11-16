import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielchhetri.com"),
  title: "Gabriel Chhetri — Marketplace Operations Specialist (Walmart & WFS)",
  description:
    "Over 3 years managing high-volume Walmart Marketplace accounts, scaling from $300K to $1.5M (7-figure GMV), WFS inbound logistics, 1,500+ SKU catalogs, and algorithmic Buy Box optimization.",
  keywords: [
    "Gabriel Chhetri",
    "Walmart Marketplace Specialist",
    "Walmart Seller Center",
    "WFS Logistics",
    "Marketplace Operations",
    "Catalog Architecture",
    "Buy Box Optimization",
    "Ecommerce Specialist",
    "Whole9yards Global Ecom",
    "7-Figure Marketplace Scaling",
  ],
  authors: [{ name: "Gabriel Chhetri" }],
  creator: "Gabriel Chhetri",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gabriel Chhetri — Marketplace Operations Specialist",
    description:
      "Scaling Walmart accounts from $300K to $1.5M+, managing 1,500+ SKU catalogs, WFS fulfillment, and Buy Box optimization.",
    siteName: "Gabriel Chhetri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Chhetri — Marketplace Operations Specialist",
    description:
      "Scaling Walmart accounts from $300K to $1.5M+, managing 1,500+ SKU catalogs, WFS fulfillment, and Buy Box optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#fafaf9] dark:bg-[#0c0a09] text-[#1c1917] dark:text-[#f5f5f4] antialiased selection:bg-stone-900 selection:text-stone-50 dark:selection:bg-stone-100 dark:selection:text-stone-950 transition-colors duration-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
