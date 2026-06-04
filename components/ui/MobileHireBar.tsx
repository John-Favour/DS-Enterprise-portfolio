"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileHireBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <a
            href="#contact"
            className="flex items-center justify-center w-full py-4 bg-[#a52020] text-[#f5f4f0] font-mono text-xs tracking-[0.2em] uppercase font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5f4f0] animate-pulse mr-3" />
            Available for hire · Get in touch
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
