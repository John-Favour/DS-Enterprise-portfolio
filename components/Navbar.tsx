"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-brand-white/95 dark:bg-brand-black/95 backdrop-blur-md border-b border-black/5 dark:border-white/5"
            : "bg-transparent"
        }`}
      >
        <a href="#home" className="font-display font-extrabold text-lg tracking-wide text-brand-black dark:text-brand-white">
          FA<span className="text-[#a52020]">.</span>
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  active === l.toLowerCase()
                    ? "text-[#a52020]"
                    : "text-black/40 dark:text-white/40 hover:text-brand-black dark:hover:text-brand-white"
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="mailto:aibangbeefavour509@gmail.com"
            className="font-mono text-xs tracking-widest uppercase px-5 py-2 border border-[#a52020] text-[#a52020] hover:bg-[#a52020] hover:text-[#f5f4f0] transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-brand-black dark:bg-brand-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-brand-black dark:bg-brand-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-brand-black dark:bg-brand-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-brand-white/98 dark:bg-brand-black/98 backdrop-blur-md border-b border-black/5 dark:border-white/5 flex flex-col px-6 py-6 gap-5 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-sm tracking-widest uppercase transition-colors ${
                  active === l.toLowerCase() ? "text-[#a52020]" : "text-black/50 dark:text-white/50"
                }`}
              >
                {l}
              </a>
            ))}
            <a
              href="mailto:aibangbeefavour509@gmail.com"
              className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-[#a52020] text-[#a52020] text-center mt-2"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
