"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Nirma University",
    description:
      "Started my B.S. Computer Science (2+2) program while actively participating in IEEE, hackathons, and technical communities.",
  },
  {
    year: "2025",
    title: "Former Co-Founder • VertiBot",
    description:
      "Co-founded VertiBot, an autonomous glass-cleaning robot startup focused on improving safety in high-rise maintenance. The project received SSIP innovation support.",
  },
  {
    year: "2025",
    title: "Lemosys Infotech",
    description:
      "Completed a Full Stack Development internship working with React, Node.js, Express, MySQL and AI integrations.",
  },
  {
    year: "2026",
    title: "IIMA Ventures",
    description:
      "Participated in startup events, founder networking sessions and innovation programs.",
  },
  {
    year: "2026",
    title: "Dalhousie University 🇨🇦",
    description:
      "Beginning Phase II of my Computer Science degree with a focus on Artificial Intelligence, Cybersecurity and Software Engineering.",
    current: true,
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#050505] pt-40 pb-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="uppercase tracking-[0.35em] text-violet-400">
          My Journey
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Every Step Built The Next.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Every milestone has shaped my growth—from building technical skills
          and startups to preparing for my next chapter in Canada.
        </p>

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-[92px] top-0 h-full w-px bg-gradient-to-b from-violet-500 via-zinc-700 to-transparent" />

          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className="relative mb-10 flex gap-8 last:mb-0"
            >
              {/* Year */}

              <div className="w-20 shrink-0 text-right">

                <p className="text-xl font-bold text-violet-400">
                  {item.year}
                </p>

              </div>

              {/* Timeline Dot */}

              <div className="relative flex w-8 justify-center">

                <div className="absolute top-2 h-5 w-5 rounded-full border-4 border-[#050505] bg-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.8)]" />

              </div>

              {/* Content */}

              <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-500 hover:bg-white/[0.07]">

                <div className="flex items-center justify-between gap-4 flex-wrap">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  {item.current && (
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                      Current
                    </span>
                  )}

                </div>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}