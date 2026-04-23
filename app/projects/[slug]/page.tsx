import { projectBySlug, projects } from "../../../lib/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CustomCursor from "../../../components/CustomCursor";
import SmoothScroll from "../../../components/SmoothScroll";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  // In Next.js 15, params is a promise
  const resolvedParams = await params;
  const project = projectBySlug[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <CustomCursor />
      <SmoothScroll />
      <Navbar />

      {/* Project Hero */}
      <section className="min-h-[60vh] px-section-px py-section-py md:px-section-px-md lg:px-section-px-lg flex flex-col justify-end">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-[0.76rem] uppercase tracking-[0.28em] text-[rgba(33,32,32,0.48)] mb-6">
            {project.meta}
          </p>
          <h1 className="mb-6 max-w-[12ch] break-words text-[clamp(2.4rem,7vw,5.75rem)] leading-[0.92] tracking-[0.01em]">
            {(() => {
              const words = project.title.trim().split(" ");
              const last = words.pop();
              return (
                <>
                  <span className="text-rustic-red">{words.join(" ")} </span>
                  <span className="text-[#A34E24]">{last}</span>
                </>
              );
            })()}
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 max-w-2xl font-light">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="mb-20 px-section-px py-section-py md:px-section-px-md lg:px-section-px-lg">
        <div className="max-w-7xl mx-auto w-full relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-black/10">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover object-center grayscale"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <section className="px-section-px py-section-py md:px-section-px-md lg:px-section-px-lg">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50 mb-6 border-b border-ink/10 pb-4">
              Project Details
            </h3>
            <div className="flex flex-col gap-6">
               <div>
                  <h4 className="text-[0.65rem] uppercase tracking-wider text-ink/40 mb-3">Tags</h4>
                  <div className="flex flex-col gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[0.8rem] text-ink/80 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
          <div className="space-y-10">
            <p className="text-2xl md:text-3xl leading-relaxed text-ink/90 font-light">
              {project.description}
            </p>
            <div className="space-y-6 text-[1.05rem] text-ink/70 leading-[1.8] font-light">
              {project.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process / Gallery Grid */}
      <section className="px-section-px py-section-py md:px-section-px-md lg:px-section-px-lg">
        <div className="max-w-7xl mx-auto w-full">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50 mb-10 border-b border-ink/10 pb-4">
            Visual Studies & Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:gap-y-8">
             <div className="relative aspect-[4/5] overflow-hidden border border-black/10 group">
                <Image src="/interior-detail-lounge.jpg" alt="Interior detail" fill className="object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
             </div>
             <div className="relative aspect-[4/5] overflow-hidden border border-black/10 group">
                <Image src="/interior-detail-residence.jpg" alt="Residence detail" fill className="object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
             </div>
          </div>
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-black/10 group mt-4 md:mt-8">
             <Image src="/process-final.png" alt="Process detail" fill className="object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>
        </div>
      </section>
      
      {/* Next Project CTA */}
      <section className="bg-ink px-section-px py-section-py text-center text-white md:px-section-px-md lg:px-section-px-lg flex min-h-[60vh] flex-col items-center justify-center">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/50 mb-6">Next Project</p>
        <Link href={`/projects/${nextProject.slug}`} className="group inline-block mb-16">
          <h2 className="max-w-[12ch] break-words text-[clamp(2.25rem,6vw,5.5rem)] font-light leading-[0.94] tracking-tight transition-opacity duration-300 group-hover:opacity-70">
            {(() => {
              const words = nextProject.title.trim().split(" ");
              const last = words.pop();
              return (
                <>
                  <span className="text-white/80">{words.join(" ")} </span>
                  <span className="text-white/50">{last}</span>
                </>
              );
            })()}
          </h2>
        </Link>
        <div>
          <Link href="/#projects-overview" className="inline-block border border-white/30 px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-ink transition-colors duration-300">
            Back to All Projects
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
