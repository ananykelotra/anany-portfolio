"use client";

import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-5">

      {/* Projects Button */}

      <button
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="group inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500"
      >
        Explore Projects

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Resume */}

      <a
        href="/Anany Resume 2026AUG copy.pdf"
        download
        className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />

        Download Resume
      </a>

      {/* GitHub */}

      <a
        href="https://github.com/ananykelotra"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
      >
        <FaGithub size={22} />
      </a>

      {/* LinkedIn */}

      <a
        href="https://www.linkedin.com/in/anany-kelotra-49ab6a237/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
      >
        <FaLinkedin size={22} />
      </a>

    </div>
  );
}