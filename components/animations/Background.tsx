"use client";

export default function Background() {
  return (
    <>
      {/* Main Gradient */}
      <div className="fixed inset-0 -z-50 bg-[#050505]" />

      {/* Purple Glow */}
      <div className="fixed left-1/2 top-1/3 -z-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[180px]" />

      {/* Blue Glow */}
      <div className="fixed right-0 bottom-0 -z-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}