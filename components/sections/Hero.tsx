"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["APIs", "SaaS Platforms", "Web Apps", "REST APIs", "Backends", "Full Products"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-[#1a2340]/40 dark:bg-[#1a2340]/60 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#8b1a1a]/10 blur-[80px]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-[#a52020] mb-6"
      >
        Fullstack Engineer · Backend Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-display font-extrabold leading-[0.95] tracking-tight mb-4"
        style={{ fontSize: "clamp(2.8rem, 9vw, 7rem)" }}
      >
        Favour<span className="text-[#a52020]">.</span>
        <br />
        <span className="text-[#243060] dark:text-[#243060]">Aibangbee</span>
      </motion.h1>

      {/* Word cycling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="flex items-center gap-3 mb-8"
        style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}
      >
        <span className="font-display font-semibold text-black/50 dark:text-white/50">I build</span>
        <div className="relative h-[1.4em] overflow-hidden min-w-[180px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute font-display font-bold text-[#a52020] whitespace-nowrap"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="max-w-lg text-black/60 dark:text-white/60 text-base leading-7 mb-10"
      >
        Engineering student turned production grade developer. Designing and building scalable web solutions from SaaS platforms to RESTful APIs with the MERN stack and beyond.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex flex-wrap gap-4"
      >
        <a href="#projects" className="font-mono text-xs tracking-widest uppercase px-7 py-3 bg-[#a52020] text-[#f5f4f0] hover:bg-[#c02828] transition-colors duration-200">
          View Projects
        </a>
        <a href="#contact" className="font-mono text-xs tracking-widest uppercase px-7 py-3 border border-black/20 dark:border-white/20 text-black/70 dark:text-white/70 hover:border-[#a52020] hover:text-[#a52020] transition-all duration-200">
          Get In Touch
        </a>
        <a
          href={`https://github.com/John-Favour`}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs tracking-widest uppercase px-7 py-3 border border-black/20 dark:border-white/20 text-black/70 dark:text-white/70 hover:border-[#a52020] hover:text-[#a52020] transition-all duration-200"
        >
          GitHub ↗
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-black/8 dark:border-white/8"
      >
        {[["3+", "Years Experience"], ["10+", "Projects Shipped"], ["7+", "Clients Served"], ["∞", "Remote Ready"]].map(([num, label]) => (
          <div key={label}>
            <div className="font-display font-bold text-3xl md:text-4xl">
              {num.replace("+", "")}<span className="text-[#a52020]">{num.includes("+") ? "+" : ""}</span>
            </div>
            <div className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 mt-1">{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
