"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Former Co-Founder",
    subtitle: "VertiBot Startup",
    description:
      "Co-founded VertiBot, an autonomous glass-cleaning robot startup supported through the SSIP innovation program.",
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    subtitle: "Lemosys Infotech",
    description:
      "Worked as a Full Stack Development Intern building web applications and exploring AI-powered solutions.",
  },
  {
    icon: GraduationCap,
    title: "Global Education",
    subtitle: "Nirma → Dalhousie",
    description:
      "Completed Phase I of my B.S. Computer Science degree at Nirma University and preparing to continue Phase II at Dalhousie University.",
  },
  {
    icon: Award,
    title: "Leadership & Innovation",
    subtitle: "IEEE • IIMA • Hackathons",
    description:
      "Actively participated in technical communities, startup events, hackathons, and innovation programs while building impactful projects.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-[#050505] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="uppercase tracking-[0.35em] text-violet-400">
          Highlights
        </p>

        <h2 className="mt-4 text-5xl font-black">
          More Than Just Numbers.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          My journey has been shaped by building products, exploring
          entrepreneurship, gaining industry experience, and preparing for a
          global career in Computer Science.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500"
              >
                <div className="flex items-start gap-6">

                  <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4 transition duration-300 group-hover:scale-110">
                    <Icon
                      size={30}
                      className="text-violet-400"
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-medium text-violet-400">
                      {item.subtitle}
                    </p>

                    <p className="mt-5 leading-8 text-zinc-400">
                      {item.description}
                    </p>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}