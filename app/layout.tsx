import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anany Kelotra",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        geistSans.variable,
        geistMono.variable,
        figtree.variable
      )}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white">
        <ScrollProgress />

        {/* Premium Custom Cursor */}
        <CustomCursor />

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}