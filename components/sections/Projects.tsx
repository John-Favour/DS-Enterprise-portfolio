"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="px-6 md:px-16 py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]" ref={ref}>
      <SectionHeader num="04" title="Projects" inView={inView} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/projects/${p.slug}`} className="group block h-full bg-[#1a2340]/5 dark:bg-[#1a2340]/60 border border-black/8 dark:border-white/8 p-6 md:p-7 flex flex-col gap-4 hover:border-[#a52020]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#a52020] tracking-widest">{p.num}</span>
                <span className="font-mono text-xs text-black/30 dark:text-white/30 group-hover:text-[#a52020] transition-colors">↗</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">{p.name}</h3>
                <p className="font-mono text-xs text-black/40 dark:text-white/40 tracking-wide">{p.tagline}</p>
              </div>
              <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed flex-1">{p.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 text-black/50 dark:text-white/50">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
