"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work{" "}
            <span className="text-[var(--color-primary)]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mb-12 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 bg-[var(--color-primary)] rounded-full border-2 border-[var(--color-background)]" />

                <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[var(--color-primary)] font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[var(--color-secondary)] text-sm mb-4">
                    {exp.company} &middot; {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-[var(--color-text-muted)] text-sm flex items-start gap-2"
                      >
                        <span className="text-[var(--color-primary)] mt-1.5 text-xs">
                          ▹
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
