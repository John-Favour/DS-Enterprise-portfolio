"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-black/4 dark:bg-white/4 border border-black/10 dark:border-white/10 text-brand-black dark:text-brand-white font-body text-sm px-4 py-3 outline-none focus:border-[#a52020] transition-colors placeholder:text-black/30 dark:placeholder:text-white/30";

  return (
    <section id="contact" className="px-6 md:px-16 py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]" ref={ref}>
      <SectionHeader num="06" title="Contact" inView={inView} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
      >
        {/* Left */}
        <div>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-4">
            Let&apos;s build something <span className="text-[#a52020]">great</span> together.
          </h3>
          <p className="text-black/60 dark:text-white/60 text-sm mb-8 leading-relaxed">
            Open to full-time remote roles, freelance contracts, and exciting collaborations worldwide. I respond within 24 hours.
          </p>
          <div className="space-y-4">
            {[
              { label: "Email", val: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { label: "GitHub", val: "github.com/John-Favour", href: siteConfig.github },
              { label: "LinkedIn", val: "linkedin.com/in/favour-john-ai", href: siteConfig.linkedin },
              { label: "X (Twitter)", val: siteConfig.twitterHandle, href: siteConfig.twitter },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="flex items-start gap-4 border-b border-black/6 dark:border-white/6 pb-4 group hover:border-[#a52020]/30 transition-colors">
                <div>
                  <span className="font-mono text-xs tracking-widest uppercase text-black/35 dark:text-white/35 block mb-0.5">{l.label}</span>
                  <span className="text-sm text-black/70 dark:text-white/70 group-hover:text-[#a52020] transition-colors break-all">{l.val}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 block mb-2">Your Name</label>
            <input {...register("name")} placeholder="John " className={inputClass} />
            {errors.name && <p className="text-[#a52020] text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 block mb-2">Email</label>
            <input {...register("email")} type="email" placeholder="john@company.com" className={inputClass} />
            {errors.email && <p className="text-[#a52020] text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 block mb-2">Subject</label>
            <input {...register("subject")} placeholder="Remote opportunity / Project collaboration" className={inputClass} />
            {errors.subject && <p className="text-[#a52020] text-xs mt-1">{errors.subject.message}</p>}
          </div>
          <div>
            <label className="font-mono text-xs tracking-widest uppercase text-black/40 dark:text-white/40 block mb-2">Message</label>
            <textarea {...register("message")} rows={5} placeholder="Tell me about your project or opportunity..." className={`${inputClass} resize-none`} />
            {errors.message && <p className="text-[#a52020] text-xs mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full font-mono text-xs tracking-widest uppercase py-3.5 bg-[#a52020] text-[#f5f4f0] hover:bg-[#c02828] disabled:opacity-50 transition-colors duration-200"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-600 dark:text-green-400 font-mono text-xs text-center">✓ Message sent! I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-[#a52020] font-mono text-xs text-center">Something went wrong. Email me directly at {siteConfig.email}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
