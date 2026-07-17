"use client";

import { ArrowUpRight, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.35em] text-violet-400">
              Thanks For Visiting
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              Let's Create
              <br />
              Something Meaningful.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              I enjoy building intelligent software, solving challenging
              problems, and collaborating with ambitious people around the
              world. If you have an exciting idea, let's connect.
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col justify-center lg:items-end">

            <div className="flex gap-5">

              <a
                href="https://github.com/ananykelotra"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://www.linkedin.com/in/anany-kelotra-49ab6a237/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
              >
                <FaLinkedin size={26} />
              </a>

            </div>

            <a
              href="mailto:ananykelotra@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-7 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-violet-500/20"
            >
              Get In Touch

              <ArrowUpRight
                size={20}
                className="transition group-hover:rotate-45"
              />
            </a>

          </div>

        </div>

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 Anany Kelotra. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Designed & Developed with
            <Heart
              size={15}
              className="fill-violet-500 text-violet-500"
            />
            using Next.js & Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}