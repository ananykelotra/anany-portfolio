"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="bg-[#050505] py-28 text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative">

            <div className="absolute -inset-6 rounded-[40px] bg-violet-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-500 hover:border-violet-500">

              <Image
                src="/images/about.jpg"
                alt="Anany Kelotra"
                width={550}
                height={700}
                className="rounded-[28px] object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <p className="mb-4 uppercase tracking-[0.35em] text-violet-400">
              About Me
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Beyond The Resume.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-9 text-zinc-400">

            <p>
  During my first two years of university, I actively participated in hackathons,
  research conferences, technical workshops, startup events, and collaborative
  projects that strengthened both my technical and professional skills. These
  experiences exposed me to real-world problem solving, teamwork, innovation,
  and leadership while allowing me to connect with talented peers, industry
  professionals, and researchers. Each opportunity has contributed to my growth
  as a developer and has reinforced my passion for building impactful technology.
</p>

<p>
  My primary interests lie in{" "}
  <span className="font-semibold text-white">
    Artificial Intelligence
  </span>
  ,{" "}
  <span className="font-semibold text-white">
    Machine Learning
  </span>
  ,{" "}
  <span className="font-semibold text-white">
    Cybersecurity
  </span>
  ,{" "}
  <span className="font-semibold text-white">
    Data Science
  </span>{" "}
  and modern{" "}
  <span className="font-semibold text-white">
    Software Engineering
  </span>
  . I am passionate about leveraging these technologies to develop intelligent
  applications, scalable software, and innovative digital products that solve
  meaningful real-world challenges. As technology continues to evolve, I strive
  to continuously learn, adapt, and contribute to solutions that create a
  positive and lasting impact.
</p>

            </div>

            {/* Skills */}

            <div className="mt-12 flex flex-wrap gap-3">

              {[
                "Artificial Intelligence",
                "Cybersecurity",
                "Machine Learning",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Java",
                "MySQL",
                "Git",
                "Entrepreneurship",
                "Problem Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}