"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Purple Glow */}

      <div className="absolute -inset-8 rounded-[42px] bg-violet-600/20 blur-3xl" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <Image
          src="/images/profile.jpg"
          alt="Anany Kelotra"
          width={560}
          height={700}
          priority
          className="rounded-[28px] object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Badge */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-violet-500/30 bg-black/70 px-6 py-3 backdrop-blur-xl"
      >
        <p className="text-sm font-medium tracking-wide text-white">
          🇨🇦 Dalhousie University • Fall 2026
        </p>
      </motion.div>
    </motion.div>
  );
}