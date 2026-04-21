import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudySection from "../../../components/CaseStudySection";
import { projectBySlug } from "../../../lib/data/projects";

export function generateStaticParams() {
  return Object.keys(projectBySlug).map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }) {
  const project = projectBySlug[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-ink">
      <div className="sticky top-0 z-20 border-b border-black/8 bg-white/90 px-4 py-4 backdrop-blur-sm md:px-10 lg:px-16">
        <Link
          href="/"
          className="text-[0.72rem] uppercase tracking-[0.22em] text-black/58 transition hover:text-black"
        >
          Back to Home
        </Link>
      </div>

      <CaseStudySection {...project} stackIndex={0} imagePriority={true} />
    </main>
  );
}
