"use client";

import { motion } from "framer-motion";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Animated Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[220px]"
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [50, -40, 50],
          y: [20, -30, 20],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[170px]"
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Hero */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-20 px-8 pt-24 lg:flex-row flex-col">

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <HeroText />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          <HeroImage />
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-zinc-400 transition hover:text-white"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.35em]">
          Scroll
        </span>

        <ChevronDown size={28} />
      </motion.button>

    </section>
  );
}