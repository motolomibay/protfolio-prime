"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase mb-4"
        >
          Available for Remote Work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            {personalInfo.name.split(" ")[0]}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--color-text-muted)] mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[var(--color-border)] text-[var(--color-text)] rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors font-medium"
          >
            Get In Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
