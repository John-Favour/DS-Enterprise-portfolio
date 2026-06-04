import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectDetail from "@/components/sections/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDesc,
    keywords: [...project.tags, "fullstack developer nigeria", "favour aibangbee", "mern stack", "node.js developer"],
    openGraph: {
      title: `${project.name} | Favour Aibangbee`,
      description: project.shortDesc,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prev = projects[currentIndex - 1] || null;
  const next = projects[currentIndex + 1] || null;

  return <ProjectDetail project={project} prev={prev} next={next} />;
}
