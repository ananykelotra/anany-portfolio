"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      <div className="w-full max-w-sm px-8">

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-black tracking-[0.35em]"
        >
          ANANY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className="mt-4 text-center text-sm tracking-[0.45em] uppercase text-zinc-500"
        >
          Portfolio
        </motion.p>

        <div className="mt-12 h-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-violet-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.3,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          className="mt-5 text-center text-xs uppercase tracking-[0.45em] text-zinc-500"
        >
          Loading Experience...
        </motion.p>

      </div>
    </main>
  );
}