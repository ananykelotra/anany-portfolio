"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "achievements", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll detection in PAGE order (not navbar order)
      const sections = [
        document.getElementById("about"),
        document.getElementById("journey"),
        document.getElementById("projects"),
        document.getElementById("achievements"),
        document.getElementById("contact"),
      ];

      let current = "about";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 180;

        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 lg:block"
      >
        <nav
          className={`flex items-center gap-2 rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-violet-500/30 bg-black/70 px-4 py-3 shadow-[0_10px_50px_rgba(139,92,246,0.25)] backdrop-blur-3xl"
              : "border-white/10 bg-black/40 px-4 py-3 backdrop-blur-2xl"
          }`}
        >
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mr-3 rounded-full px-4 py-2 text-lg font-black tracking-[0.3em] text-white transition hover:text-violet-400"
          >
            ANANY
          </button>

          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === item.id
                  ? "bg-violet-600 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </motion.header>

      {/* Mobile Navbar */}

      <div className="fixed left-0 right-0 top-5 z-50 px-5 lg:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-2xl">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-lg font-black tracking-[0.25em]"
          >
            ANANY
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-3xl"
          >
            <div className="flex flex-col gap-2">
              {links.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-xl px-4 py-3 text-left transition ${
                    active === item.id
                      ? "bg-violet-600 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}