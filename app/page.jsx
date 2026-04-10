import Image from "next/image";
import HeroSection from "../components/HeroSection";

const projects = [
  {
    id: "project-01",
    number: "01",
    name: "Cliff Court Residence",
    description:
      "A stepped private home shaped by shadow, stone, and framed western light.",
    meta: "Pune / Residential"
  },
  {
    id: "project-02",
    number: "02",
    name: "North Gallery House",
    description:
      "Layered volumes and filtered courtyards compose a calm urban family retreat.",
    meta: "Mumbai / Residence"
  },
  {
    id: "project-03",
    number: "03",
    name: "Laterite Studio",
    description:
      "A compact practice space designed around material tactility and cross ventilation.",
    meta: "Goa / Workspace"
  },
  {
    id: "project-04",
    number: "04",
    name: "Monsoon Court",
    description:
      "Rain-led circulation and open edges define this hospitality-focused gathering place.",
    meta: "Alibaug / Hospitality"
  }
];

export default function Page() {
  return (
    <main className="relative bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <HeroSection />

      <section
        id="index-section"
        className="relative bg-[linear-gradient(180deg,#fbfaf7_0%,#ffffff_100%)] px-6 pb-24 pt-20 md:px-8 md:pb-28 md:pt-24 xl:px-10"
      >
        <div className="mb-16 grid gap-3">
          <p className="text-[0.76rem] uppercase tracking-[0.26em] text-[rgba(33,32,32,0.48)]">
            Selected Work
          </p>
          <h2 className="max-w-[10ch] font-signature text-[clamp(3rem,5.6vw,6rem)] font-normal leading-[0.98] tracking-[0.03em]">
            Project Index
          </h2>
        </div>

        <nav aria-label="Projects" className="border-t border-[rgba(33,32,32,0.14)]">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className="grid gap-3 border-b border-[rgba(33,32,32,0.14)] py-6 transition duration-200 hover:translate-x-2.5 hover:text-black md:grid-cols-[70px_minmax(0,1fr)_170px] md:gap-4 xl:grid-cols-[90px_minmax(0,1fr)_220px] xl:gap-5"
            >
              <span className="text-[0.84rem] uppercase tracking-[0.18em] text-[rgba(33,32,32,0.58)]">
                {project.number}
              </span>

              <span className="grid gap-1.5">
                <h3 className="project-name relative m-0 w-fit text-[clamp(1.35rem,2vw,1.9rem)] font-medium leading-[1.1]">
                  {project.name}
                </h3>
                <p className="m-0 max-w-[58ch] text-[0.97rem] leading-[1.6] text-[rgba(33,32,32,0.62)]">
                  {project.description}
                </p>
              </span>

              <span className="text-[0.84rem] uppercase tracking-[0.18em] text-[rgba(33,32,32,0.58)]">
                {project.meta}
              </span>
            </a>
          ))}

          <a
            href="#project-05"
            className="grid gap-3 border-b border-[rgba(33,32,32,0.14)] py-6 transition duration-200 hover:translate-x-2.5 hover:text-black md:grid-cols-[70px_minmax(0,1fr)_170px] md:gap-4 xl:grid-cols-[90px_minmax(0,1fr)_220px] xl:gap-5"
          >
            <span className="text-[0.84rem] uppercase tracking-[0.18em] text-[rgba(33,32,32,0.58)]">
              05
            </span>

            <span className="grid gap-1.5">
              <h3 className="project-name relative m-0 w-fit text-[clamp(1.35rem,2vw,1.9rem)] font-medium leading-[1.1]">
                IN [BE] TWEEN
              </h3>
              <p className="m-0 max-w-[58ch] text-[0.97rem] leading-[1.6] text-[rgba(33,32,32,0.62)]">
                A minimal case-study page centered on healing, atmosphere, and
                architectural drawing.
              </p>
            </span>

            <span className="text-[0.84rem] uppercase tracking-[0.18em] text-[rgba(33,32,32,0.58)]">
              Special Project
            </span>
          </a>
        </nav>
      </section>

      <section
        id="project-05"
        className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)] px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-14"
      >
        <div className="grid min-h-[calc(100svh-4rem)] grid-cols-1 overflow-hidden bg-[#fbfaf7] md:grid-cols-5">
          <div className="relative flex flex-col justify-between px-6 py-8 md:col-span-2 md:px-10 md:py-12 xl:px-14 xl:py-16">
            <div className="max-w-xl space-y-8">
              <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#6a645e]">
                Case Study 01
              </p>

              <div className="space-y-3">
                <h2 className="text-[clamp(2.35rem,5vw,5rem)] font-semibold uppercase leading-[0.94] tracking-[0.04em]">
                  IN [BE] TWEEN
                </h2>
                <p className="text-lg font-medium tracking-[0.08em] text-[#4f4a45] md:text-xl">
                  A healing journey
                </p>
              </div>

              <p className="text-sm uppercase tracking-[0.24em] text-[#6a645e]">
                Pune, India / Community Wellness / 2025
              </p>

              <div className="space-y-5 text-sm leading-7 text-[#3f3a35] md:text-[0.98rem]">
                <p>
                  IN [BE] TWEEN explores architecture as an in-between condition,
                  positioned between therapy and everyday life, enclosure and
                  openness, pause and movement. The proposal is conceived as a
                  healing environment where transitional spaces become as
                  important as enclosed rooms, allowing users to slow down,
                  gather, reflect, and recover through spatial rhythm.
                </p>
                <p>
                  The project organizes circulation as a gradual journey through
                  light courts, shaded thresholds, stepped connections, and calm
                  interior volumes. Materially, the architecture leans on a
                  restrained palette of exposed surfaces, muted tones, and soft
                  daylight to create an atmosphere that feels grounded, intimate,
                  and restorative.
                </p>
                <p>
                  Rather than presenting healing as a single destination, the
                  design frames it as a sequence of experiences. Each edge,
                  opening, and level change is intended to support emotional
                  comfort while maintaining a strong architectural identity rooted
                  in clarity, balance, and quiet permanence.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-4 left-6 select-none text-[clamp(6rem,18vw,15rem)] font-semibold leading-none text-black/[0.05] md:bottom-6 md:left-10 xl:left-14">
              1
            </div>
          </div>

          <div className="flex min-h-[28rem] flex-col bg-[#f2efe9] md:col-span-3 md:min-h-full">
            <div className="border-b border-black/10 px-6 py-5 md:px-8 xl:px-10">
              <div className="grid gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-[#5d5751] md:grid-cols-3">
                <p>Spatial Sequence</p>
                <p>Light + Thresholds</p>
                <p>Healing Through Transition</p>
              </div>
            </div>

            <div className="relative flex-1">
              <Image
                src="/section.png"
                alt="Architectural drawing for IN [BE] TWEEN"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 60vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {projects.map((project) => (
        <section
          key={project.id}
          id={project.id}
          aria-hidden="true"
          className="h-px"
        />
      ))}
    </main>
  );
}
