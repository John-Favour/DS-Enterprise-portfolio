"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="px-6 md:px-16 py-16 md:py-24" ref={ref}>
      <SectionHeader num="03" title="Experience" inView={inView} />
      <div>
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col md:grid md:grid-cols-[180px_1fr] border-t border-black/8 dark:border-white/8 py-8 md:py-10 gap-3 md:gap-0"
          >
            <div className="md:pr-8 flex-shrink-0">
              <div className="flex items-center gap-2 mb-1">
                {exp.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a52020] animate-pulse" />
                )}
                <p className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40">{exp.period}</p>
              </div>
              <p className="font-display font-bold text-sm text-black/70 dark:text-white/70">{exp.company}</p>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-4">{exp.role}</h3>
              <ul className="space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="relative pl-5 text-black/60 dark:text-white/60 text-sm leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#a52020] before:text-xs before:top-0.5">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
