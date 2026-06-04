"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 md:px-16 py-16 md:py-24" ref={ref}>
      <SectionHeader num="01" title="About" inView={inView} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 text-black/70 dark:text-white/70 leading-relaxed"
        >
          <p>
            I&apos;m a <strong className="text-brand-black dark:text-brand-white">Fullstack & Backend Engineer</strong> with 3+ years of professional experience designing and shipping production grade web applications.
          </p>
          <p>
            Proficient in the <strong className="text-brand-black dark:text-brand-white">MERN stack</strong>, RESTful API design, payment gateway integration (Paystack, Stripe), PostgreSQL, and agile workflows.
          </p>
          <p>
            Currently completing a <strong className="text-brand-black dark:text-brand-white">B.Eng in Naval Architecture & Marine Engineering</strong> at the University of Benin a rare combination of software expertise with real engineering domain knowledge.
          </p>
          <p>
            Experienced in building multi-tenant SaaS platforms, inventory systems, and client-facing web products. Currently freelancing for engineering sector clients while pursuing my degree.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="bg-[#1a2340]/10 dark:bg-[#1a2340] border border-black/6 dark:border-white/6 p-6 md:p-8 space-y-5">
            {[
              ["Location", "Benin City, Nigeria"],
              ["Education", "B.Eng Naval Architecture · Expected 2027"],
              ["Email", "aibangbeefavour509@gmail.com"],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 mb-1">{label}</p>
                <p className="font-display font-semibold text-sm md:text-base break-all">{val}</p>
              </div>
            ))}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-[#8b1a1a]/10 dark:bg-[#8b1a1a]/20 border border-[#a52020]/50 text-[#a52020] font-mono text-xs tracking-widest uppercase px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a52020] animate-pulse shrink-0" />
                Open to remote opportunities
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-3 flex-wrap">
            {[
              { label: "GitHub", href: "https://github.com/John-Favour" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/favour-john-ai" },
              { label: "X / Twitter", href: "https://x.com/_DsEnterprise" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-black/15 dark:border-white/15 text-black/50 dark:text-white/50 hover:border-[#a52020] hover:text-[#a52020] transition-all duration-200">
                {s.label} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
