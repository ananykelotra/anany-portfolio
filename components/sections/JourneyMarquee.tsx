"use client";

import Marquee from "react-fast-marquee";

const row1 = [
  "🤖 AI Agents",
  "🛡 Cybersecurity",
  "⚛ React",
  "▲ Next.js",
  "🟦 TypeScript",
  "🟢 Node.js",
  "🐍 Python",
  "☕ Java",
  "💻 Full Stack",
];

const row2 = [
  "🗄 MongoDB",
  "🐘 PostgreSQL",
  "🔗 REST APIs",
  "🐳 Docker",
  "☁ Cloud",
  "🧠 Machine Learning",
  "📊 Data Science",
  "⚡ Express.js",
];

function Pill({ text }: { text: string }) {
  return (
    <div className="mx-3">
      <div className="rounded-full border border-white/10 bg-zinc-900/80 px-7 py-3 text-sm font-medium text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white">
        {text}
      </div>
    </div>
  );
}

export default function JourneyMarquee() {
  return (
    <section className="relative mt-24 w-full overflow-hidden bg-black py-10">

      {/* Left Fade */}

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-black via-black to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-black via-black to-transparent" />

      {/* Row 1 */}

      <Marquee
        gradient={false}
        speed={35}
        pauseOnHover
        autoFill
      >
        {row1.map((item) => (
          <Pill key={item} text={item} />
        ))}
      </Marquee>

      {/* Gap */}

      <div className="h-6" />

      {/* Row 2 */}

      <Marquee
        gradient={false}
        speed={30}
        direction="right"
        pauseOnHover
        autoFill
      >
        {row2.map((item) => (
          <Pill key={item} text={item} />
        ))}
      </Marquee>
    </section>
  );
}