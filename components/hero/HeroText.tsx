"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroText() {
  return (
    <div className="max-w-3xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

        <span className="text-sm font-medium tracking-wide text-violet-300">
          Open to Internships & Collaborations
        </span>
      </motion.div>

      {/* Intro */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-8 text-xl text-zinc-400"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-3 text-7xl font-black leading-none tracking-tight md:text-[8rem]"
      >
        <span className="bg-gradient-to-r from-white via-zinc-300 to-violet-400 bg-clip-text text-transparent">
          ANANY
        </span>
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-7xl font-black leading-none tracking-tight md:text-[8rem]"
      >
        <span className="text-zinc-700">
          KELOTRA
        </span>
      </motion.h1>

      {/* Role */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-2xl font-semibold text-white"
      >
        Computer Science Student • AI Enthusiast • Builder
      </motion.h2>

      {/* Description */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-8 max-w-2xl space-y-6 text-lg leading-9 text-zinc-400"
      >
        <p>
          I'm currently pursuing a{" "}
          <span className="font-semibold text-white">
            B.S. in Computer Science
          </span>{" "}
          through the{" "}
          <span className="font-semibold text-white">
            2+2 Transfer Program
          </span>
          . After successfully completing{" "}
          <span className="font-semibold text-white">
            Phase I at Nirma University
          </span>
          , I'm preparing to begin{" "}
          <span className="font-semibold text-white">
            Phase II at Dalhousie University, Canada
          </span>
          , expanding my academic journey on a global stage.
        </p>

        <p>
  I'm available for building{" "}
  <span className="font-semibold text-white">
    Modern Websites
  </span>
  ,{" "}
  <span className="font-semibold text-white">
    Web Applications
  </span>
  ,{" "}
  <span className="font-semibold text-white">
    Custom Software
  </span>{" "}
  and{" "}
  <span className="font-semibold text-white">
    AI Solutions
  </span>
  . If you have a project in mind, I'd love to help bring it to life—feel free
  to reach out through the{" "}
  <span className="font-semibold text-white">
    Contact
  </span>{" "}
  section below.
</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <HeroButtons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <HeroStats />
      </motion.div>

    </div>
  );
}