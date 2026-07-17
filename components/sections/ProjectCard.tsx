"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  status: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  status,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/60"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-violet-600/0 to-violet-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Decorative Blur */}

      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-600/10 blur-3xl transition-all duration-700 group-hover:bg-violet-600/20" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="text-3xl font-extrabold tracking-tight text-white">
              {title}
            </h3>

            <p className="mt-3 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              {status}
            </p>

          </div>

          <div className="rounded-full border border-white/10 p-3 transition-all duration-300 group-hover:border-violet-500 group-hover:rotate-12">
            <ArrowUpRight size={22} />
          </div>

        </div>

        {/* Description */}

        <p className="mt-8 leading-8 text-zinc-400">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap gap-3">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Buttons */}

        <div className="flex items-center justify-between">

          <button className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300">
            View Details
            <ArrowUpRight size={18} />
          </button>

          <button className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10">
          <FaGithub size={20} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}