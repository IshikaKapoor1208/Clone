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
        </nav>
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
