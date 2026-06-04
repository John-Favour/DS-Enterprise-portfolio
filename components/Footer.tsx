import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 border-t border-black/8 dark:border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4 pb-20 md:pb-8">
      <p className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 text-center sm:text-left">
        © 2025 {siteConfig.name} · Fullstack Engineer
      </p>
      <div className="flex gap-6">
        {[
          { label: "GitHub", href: siteConfig.github },
          { label: "LinkedIn", href: siteConfig.linkedin },
          { label: "X", href: siteConfig.twitter },
          { label: "Email", href: `mailto:${siteConfig.email}` },
        ].map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-black/35 dark:text-white/35 hover:text-[#a52020] transition-colors duration-200">
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
