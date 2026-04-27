"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio-data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Certifications &{" "}
            <span className="text-[var(--color-primary)]">Training</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all group"
            >
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                <svg
                  className="w-6 h-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-[var(--color-secondary)] text-sm mb-3">
                {cert.issuer} &middot; {cert.year}
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                {cert.description}
              </p>
              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-primary)] text-sm hover:underline"
                >
                  View Certificate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
