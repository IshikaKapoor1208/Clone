import { notFound, redirect } from "next/navigation";
import { projects, projectBySlug } from "../../../lib/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyPage({ params }) {
  const project = projectBySlug[params.slug];

  if (!project) {
    notFound();
  }

  redirect(`/projects/${project.slug}`);
}
