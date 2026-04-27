"use client";

import { motion } from "framer-motion";
import { aboutText, stats } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About{" "}
            <span className="text-[var(--color-primary)]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mb-8 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Full Stack Web Developer{" "}
              <span className="text-[var(--color-primary)]">&</span>{" "}
              <span className="text-[var(--color-secondary)]">AI Integrator</span>
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-lg whitespace-pre-line">
              {aboutText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--color-surface)] rounded-xl p-5 text-center border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors"
              >
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
