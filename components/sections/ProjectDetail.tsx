"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

interface StackItem { name: string; reason: string; }
interface Project {
  slug: string; num: string; name: string; tagline: string;
  shortDesc: string; problem: string; solution: string;
  stack: StackItem[]; features: string[]; tags: string[];
}

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function ProjectDetail({ project, prev, next }: Props) {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 md:px-16">
      {/* Back link */}
      <motion.div {...fade(0.05)} className="mb-10">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 hover:text-[#a52020] transition-colors">
          ← Back to Projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div {...fade(0.1)} className="mb-12 pb-10 border-b border-black/8 dark:border-white/8">
        <p className="font-mono text-xs tracking-widest uppercase text-[#a52020] mb-3">{project.num}</p>
        <h1 className="font-display font-extrabold leading-tight mb-3" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
          {project.name}
        </h1>
        <p className="text-black/50 dark:text-white/50 text-lg mb-6">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-xs px-3 py-1.5 bg-[#a52020]/10 border border-[#a52020]/30 text-[#a52020]">{t}</span>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Problem */}
          <motion.div {...fade(0.15)}>
            <h2 className="font-display font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#a52020]/10 border border-[#a52020]/30 flex items-center justify-center text-[#a52020] text-xs">!</span>
              The Problem
            </h2>
            <p className="text-black/65 dark:text-white/65 leading-relaxed">{project.problem}</p>
          </motion.div>

          {/* Solution */}
          <motion.div {...fade(0.2)}>
            <h2 className="font-display font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#1a2340]/10 dark:bg-[#1a2340] border border-[#243060]/30 flex items-center justify-center text-[#243060] dark:text-[#a0b0ff] text-xs">✓</span>
              The Solution
            </h2>
            <p className="text-black/65 dark:text-white/65 leading-relaxed">{project.solution}</p>
          </motion.div>

          {/* Stack Rationale */}
          <motion.div {...fade(0.25)}>
            <h2 className="font-display font-bold text-xl mb-6">Stack & Why Each Technology</h2>
            <div className="space-y-4">
              {project.stack.map((s) => (
                <div key={s.name} className="border border-black/8 dark:border-white/8 p-5 hover:border-[#a52020]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs tracking-widest uppercase text-[#a52020] font-bold">{s.name}</span>
                  </div>
                  <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{s.reason}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div {...fade(0.3)}>
            <h2 className="font-display font-bold text-xl mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-black/65 dark:text-white/65">
                  <span className="text-[#a52020] mt-0.5 shrink-0">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div {...fade(0.2)} className="space-y-6">
          <div className="border border-black/8 dark:border-white/8 p-6 sticky top-24">
            <p className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1.5 bg-black/4 dark:bg-white/4 border border-black/8 dark:border-white/8 text-black/60 dark:text-white/60">{t}</span>
              ))}
            </div>
            <div className="border-t border-black/8 dark:border-white/8 pt-4 space-y-3">
              <a href={siteConfig.github} target="_blank" rel="noreferrer"
                className="flex items-center justify-between font-mono text-xs tracking-widest uppercase text-black/50 dark:text-white/50 hover:text-[#a52020] transition-colors">
                View on GitHub <span>↗</span>
              </a>
              <a href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between font-mono text-xs tracking-widest uppercase text-black/50 dark:text-white/50 hover:text-[#a52020] transition-colors">
                Discuss this project <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Prev/Next navigation */}
      <motion.div {...fade(0.35)} className="mt-16 pt-10 border-t border-black/8 dark:border-white/8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="group border border-black/8 dark:border-white/8 p-5 hover:border-[#a52020]/40 transition-colors">
            <p className="font-mono text-xs tracking-widest uppercase text-black/35 dark:text-white/35 mb-2">← Previous</p>
            <p className="font-display font-bold group-hover:text-[#a52020] transition-colors">{prev.name}</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="group border border-black/8 dark:border-white/8 p-5 hover:border-[#a52020]/40 transition-colors text-right">
            <p className="font-mono text-xs tracking-widest uppercase text-black/35 dark:text-white/35 mb-2">Next →</p>
            <p className="font-display font-bold group-hover:text-[#a52020] transition-colors">{next.name}</p>
          </Link>
        ) : <div />}
      </motion.div>
    </main>
  );
}
