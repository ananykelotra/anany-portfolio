"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] py-32 text-white"
    >
      <div className="mx-auto max-w-6xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-12">

              <p className="uppercase tracking-[0.35em] text-violet-400">
                Contact
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight">
                Let's Build
                <br />
                Something Amazing.
              </h2>

              <p className="mt-8 text-lg leading-8 text-zinc-400">
                Whether it's an internship, research opportunity,
                startup idea or simply connecting,
                I'd love to hear from you.
              </p>

              <div className="mt-12 space-y-5">

                <a
                  href="mailto:ananykelotra@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
                >
                  <Mail className="text-violet-400" />

                  <div>
                    <p className="text-sm text-zinc-500">
                      Email
                    </p>

                    <p className="font-medium">
                      ananykelotra@gmail.com
                    </p>
                  </div>

                </a>

                <a
                  href="tel:+919826334635"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
                >
                  <Phone className="text-violet-400" />

                  <div>
                    <p className="text-sm text-zinc-500">
                      Phone
                    </p>

                    <p className="font-medium">
                      +91 9826334635
                    </p>
                  </div>

                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <MapPin className="text-violet-400" />

                  <div>
                    <p className="text-sm text-zinc-500">
                      Location
                    </p>

                    <p className="font-medium">
                      Indore, India 🇮🇳
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-center border-t border-white/10 p-12 lg:border-l lg:border-t-0">

              <h3 className="text-3xl font-bold">
                Connect With Me
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                Explore my work, follow my journey, or reach out for
                collaborations and opportunities.
              </p>

              <div className="mt-10 space-y-5">

                <a
                  href="https://github.com/ananykelotra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
                >
                  <div className="flex items-center gap-4">

                    <FaGithub
                      size={24}
                      className="text-violet-400"
                    />

                    <div>

                      <p className="font-semibold">
                        GitHub
                      </p>

                      <p className="text-sm text-zinc-500">
                        github.com/ananykelotra
                      </p>

                    </div>

                  </div>

                  <ArrowUpRight className="transition group-hover:rotate-45" />

                </a>

                <a
                  href="https://www.linkedin.com/in/anany-kelotra-49ab6a237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
                >
                  <div className="flex items-center gap-4">

                    <FaLinkedin
                      size={24}
                      className="text-violet-400"
                    />

                    <div>

                      <p className="font-semibold">
                        LinkedIn
                      </p>

                      <p className="text-sm text-zinc-500">
                        linkedin.com/in/anany-kelotra-49ab6a237
                      </p>

                    </div>

                  </div>

                  <ArrowUpRight className="transition group-hover:rotate-45" />

                </a>

              </div>

              <a
                href="mailto:ananykelotra@gmail.com"
                className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-violet-500"
              >
                Say Hello
                <ArrowUpRight size={20} />
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}