import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ui/ProgressBar";
import MobileHireBar from "@/components/ui/MobileHireBar";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} | Fullstack & Backend Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Fullstack and Backend Engineer with 2+ years experience building production-grade web applications. MERN Stack, Next.js, Node.js, REST APIs, PostgreSQL, MongoDB. Open to remote roles worldwide.",
  keywords: [
    "fullstack developer",
    "backend engineer",
    "frontend developer",
    "mern stack developer",
    "next.js developer",
    "react developer",
    "node.js developer",
    "rest api developer",
    "saas developer",
    "fullstack developer nigeria",
    "remote developer nigeria",
    "frontend developer benin city",
    "hire fullstack developer",
    "freelance web developer nigeria",
    "freelance react developer",
    "javascript developer",
    "typescript developer",
    "go developer",
    "postgresql developer",
    "mongodb developer",
    "express.js developer",
    "hire remote developer",
    "open to remote",
    "software engineer nigeria",
    "favour aibangbee",
    "john favour developer",
    "web application developer",
    "payment integration developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${siteConfig.domain}`,
    title: `${siteConfig.name} | Fullstack & Backend Engineer`,
    description:
      "MERN Stack · Next.js · Node.js · REST APIs · PostgreSQL · Open to remote roles worldwide.",
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Fullstack & Backend Engineer`,
    description: "MERN Stack developer. Open to remote roles worldwide.",
    creator: siteConfig.twitterHandle,
  },
  robots: { index: true, follow: true },

  verification: {
    google: "0i8upa60Dc36lSNUUMTqeNHCZYBwAuuws4tN0ZACYUE", // paste your full code here
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Fullstack & Backend Engineer",
  url: `https://${siteConfig.domain}`,
  email: siteConfig.email,
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.twitter],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST API",
    "Go",
    "Tailwind CSS",
    "Fullstack Development",
    "Backend Engineering",
    "SaaS Development",
    "Payment Integration",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Benin City",
    addressCountry: "Nigeria",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white transition-colors duration-300">
        <ThemeProvider>
          <ProgressBar />
          <Navbar />
          {children}
          <MobileHireBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
