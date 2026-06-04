"use client";
import { motion } from "framer-motion";

interface Props {
  num: string;
  title: string;
  inView: boolean;
}

export default function SectionHeader({ num, title, inView }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex items-baseline gap-4 mb-12"
    >
      <span className="font-mono text-xs text-[#a52020] tracking-widest">{num}</span>
      <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-black/8 dark:bg-white/8 ml-2" />
    </motion.div>
  );
}
