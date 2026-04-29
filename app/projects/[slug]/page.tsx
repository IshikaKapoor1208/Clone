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

function renderProjectTitle(title: string) {
  const words = title.trim().split(" ");
  const last = words.pop();

  return (
    <>
      <span className="text-rustic-red">{words.join(" ")} </span>
      <span className="text-[#A34E24]">{last}</span>
    </>
  );
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
    <main
      className={`relative overflow-x-clip text-ink ${project.backgroundClassName || "bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)]"}`}
    >
      <CustomCursor />
      <SmoothScroll />
      <Navbar />

      <section className="relative px-6 pt-28 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,47,35,0.06),transparent_34%),radial-gradient(circle_at_top_right,rgba(33,32,32,0.04),transparent_30%)]" />

        <div className="relative mx-auto max-w-[96rem]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.62fr)] lg:items-end lg:gap-14">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center border border-black/10 bg-white/80 px-3 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-black/50 backdrop-blur">
                  Project {project.number}
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.24em] text-black/42">
                  {project.meta}
                </span>
              </div>

              <h1 className="mt-6 max-w-[11ch] text-[clamp(3.2rem,9vw,7.4rem)] font-medium leading-[0.92] tracking-[-0.03em] text-ink">
                {renderProjectTitle(project.title)}
              </h1>

              <p className="mt-6 max-w-2xl text-[clamp(1.1rem,1.7vw,1.5rem)] leading-[1.65] text-ink/72">
                {project.subtitle}
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-5 shadow-[0_20px_45px_rgba(33,32,32,0.06)] backdrop-blur">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                  Focus
                </p>
                <p className="mt-3 text-base leading-7 text-ink/72">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-5 backdrop-blur">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                    Tags
                  </p>
                  <p className="mt-3 text-2xl font-light text-ink">
                    {project.tags.length}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-5 backdrop-blur">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                    Format
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink/72">
                    Case study
                    <br />
                    Visual sequence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-10 md:px-10 lg:px-12 lg:pt-12">
        <div className="mx-auto max-w-[96rem]">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_60px_rgba(33,32,32,0.08)]">
            <div className="relative aspect-[16/11] md:aspect-[21/9]">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt || project.title}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.08))]" />
            </div>
            <div className="flex flex-col gap-4 border-t border-black/8 bg-white/92 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-7">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                Featured View
              </p>
              <p className="max-w-2xl text-sm leading-6 text-ink/58">
                A primary visual from the project, framed to read with more depth,
                balance, and visual calm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[96rem] gap-8 lg:grid-cols-[minmax(18rem,0.38fr)_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-[1.75rem] border border-black/8 bg-white/75 p-6 shadow-[0_18px_40px_rgba(33,32,32,0.05)] backdrop-blur">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                Project Details
              </p>
              <div className="mt-6 space-y-5">
                <div className="border-b border-black/8 pb-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/40">
                    Overview
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink/68">
                    {project.meta}
                  </p>
                </div>
                <div className="border-b border-black/8 pb-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/40">
                    Description
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink/68">
                    {project.description}
                  </p>
                </div>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/40">
                    Tags
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/10 bg-white px-3 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-black/58"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-14">
            <div className="max-w-4xl space-y-6">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                Narrative
              </p>
              <p className="text-[clamp(1.35rem,2.2vw,2.15rem)] leading-[1.45] text-ink/88">
                {project.description}
              </p>
              <div className="space-y-6 text-[1.02rem] leading-[1.9] text-ink/70">
                {project.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_40px_rgba(33,32,32,0.05)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/interior-detail-lounge.jpg"
                    alt="Interior detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-black/8 px-5 py-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                    Interior Detail
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/60">
                    Calm material layers and soft edges reinforce the spatial mood.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_40px_rgba(33,32,32,0.05)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/interior-detail-residence.jpg"
                    alt="Residence detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-black/8 px-5 py-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                    Residence Detail
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/60">
                    A more domestic reading of the same quiet architectural tone.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_40px_rgba(33,32,32,0.05)]">
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src="/process-final.png"
                  alt="Process detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 border-t border-black/8 px-5 py-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/42">
                    Process Study
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/60">
                    Working drawings and process material presented as a quiet coda.
                  </p>
                </div>
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-black/40">
                  Refined sequence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6 md:px-10 md:pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[96rem]">
          <div className="grid gap-6 rounded-[2rem] border border-black/8 bg-ink px-6 py-10 text-white shadow-[0_26px_70px_rgba(33,32,32,0.16)] md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-10 lg:py-12">
            <div className="space-y-4">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/45">
                Next Project
              </p>
              <Link href={`/projects/${nextProject.slug}`} className="group inline-block">
                <h2 className="max-w-[12ch] text-[clamp(2.2rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.03em] text-white transition-opacity duration-300 group-hover:opacity-75">
                  {renderProjectTitle(nextProject.title)}
                </h2>
              </Link>
              <p className="max-w-2xl text-sm leading-7 text-white/64">
                Continue into the next case study and see how the same design language
                evolves in a different context.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end lg:text-right">
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center justify-center border border-white/18 bg-white px-6 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-white/90"
              >
                View Next Project
              </Link>
              <Link
                href="/#projects-overview"
                className="text-[0.62rem] uppercase tracking-[0.24em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
