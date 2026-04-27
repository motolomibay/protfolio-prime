"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";

const categoryIcons: Record<string, string> = {
  frontend: "🖥",
  backend: "⚙",
  ai: "🤖",
  database: "🗄",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--color-surface)]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Technical{" "}
            <span className="text-[var(--color-primary)]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([key, category], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span>{categoryIcons[key]}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[var(--color-background)] text-[var(--color-text-muted)] text-sm rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
