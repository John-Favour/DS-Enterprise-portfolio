"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="px-6 md:px-16 py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]" ref={ref}>
      <SectionHeader num="02" title="Skills & Stack" inView={inView} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="border border-black/8 dark:border-white/8 p-5 md:p-6 hover:border-[#a52020]/30 transition-colors duration-300"
          >
            <p className="font-mono text-xs tracking-widest uppercase text-[#a52020] mb-4">{s.category}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((tag) => (
                <span key={tag} className="font-mono text-xs tracking-wide px-3 py-1.5 bg-black/4 dark:bg-white/4 border border-black/8 dark:border-white/8 text-black/70 dark:text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
