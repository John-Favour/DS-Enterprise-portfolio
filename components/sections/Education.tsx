"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="px-6 md:px-16 py-16 md:py-24" ref={ref}>
      <SectionHeader num="05" title="Education" inView={inView} />
      {education.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border-l-2 border-[#a52020] pl-6 md:pl-8"
        >
          <h3 className="font-display font-bold text-xl md:text-2xl mb-2">{e.degree}</h3>
          <p className="text-black/60 dark:text-white/60 mb-1">{e.school} · {e.location}</p>
          <p className="font-mono text-xs tracking-widest uppercase text-[#a52020] mb-4">{e.year}</p>
          <p className="text-black/50 dark:text-white/50 text-sm max-w-xl leading-relaxed">{e.note}</p>
        </motion.div>
      ))}
    </section>
  );
}
