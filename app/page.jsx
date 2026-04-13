import HeroSection from "../components/HeroSection";
import CaseStudySection from "../components/CaseStudySection";

const projects = [
  {
    id: "project-01",
    number: "01",
    title: "IN [BE] TWEEN",
    subtitle: "A healing journey",
    meta: "Pune, India / Community Wellness / 2025",
    description:
      "Transitional spaces become the emotional core of the architecture, shaping a slower and more restorative spatial rhythm.",
    paragraphs: [
      "IN [BE] TWEEN explores architecture as an in-between condition, positioned between therapy and everyday life, enclosure and openness, pause and movement. The proposal is conceived as a healing environment where transitional spaces become as important as enclosed rooms, allowing users to slow down, gather, reflect, and recover through spatial rhythm.",
      "The project organizes circulation as a gradual journey through light courts, shaded thresholds, stepped connections, and calm interior volumes. Materially, the architecture leans on a restrained palette of exposed surfaces, muted tones, and soft daylight to create an atmosphere that feels grounded, intimate, and restorative.",
      "Rather than presenting healing as a single destination, the design frames it as a sequence of experiences. Each edge, opening, and level change is intended to support emotional comfort while maintaining a strong architectural identity rooted in clarity, balance, and quiet permanence."
    ],
    tags: ["Spatial Sequence", "Light + Thresholds", "Healing Through Transition"],
    imageSrc: "/section.png",
    imageAlt: "Architectural drawing for IN [BE] TWEEN",
    imagePriority: true,
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]"
  },
  {
    id: "project-02",
    number: "02",
    title: "Monsoon Court",
    subtitle: "A residence shaped through conversation",
    meta: "Alibaug, India / Hospitality / Planning + Coordination",
    description:
      "Collaborative plan studies organize adjacency, privacy, and everyday movement into a calm and legible spatial framework.",
    paragraphs: [
      "Monsoon Court began as a collaborative planning exercise where drawings, room relationships, and circulation options were studied closely around the table. The project developed through an attentive reading of how people would move, gather, and occupy the spaces across changing seasons and varying levels of privacy.",
      "The plan organizes common areas, service zones, and quieter rooms into a layout that feels legible and effortless to inhabit. Each adjustment to the drawing refines adjacency, improves usability, and supports a more intuitive relationship between interior function and the wider site.",
      "Rather than treating planning as a technical step alone, the design process frames it as the foundation for atmosphere and experience. Monsoon Court balances practical decision-making with spatial sensitivity, allowing the final architecture to feel calm, resolved, and deeply responsive to everyday living."
    ],
    tags: ["Plan Development", "Program + Adjacency", "Collaborative Review"],
    imageSrc: "/monsoon-court.jpg",
    imageAlt: "Team reviewing architectural floor plans for Monsoon Court",
    backgroundClassName: "bg-[linear-gradient(180deg,#f8f6f1_0%,#ffffff_100%)]"
  },
  {
    id: "project-03",
    number: "03",
    title: "Laterite Studio",
    subtitle: "Precision behind a compact workspace",
    meta: "Goa, India / Workspace / Technical Detailing",
    description:
      "Technical resolution and careful detailing shape a compact studio that feels materially quiet and highly resolved.",
    paragraphs: [
      "Laterite Studio is developed through a close attention to construction logic, compact planning, and the precision of built components. The project treats technical drawings as a design tool in themselves, using detail development to shape the experience of the workspace from the inside out.",
      "Service coordination, structural interfaces, and built-in elements are studied carefully so the studio can remain calm, efficient, and materially clear despite its modest footprint. Each junction is resolved to support durability, clarity of use, and a seamless relationship between working zones and supporting systems.",
      "The resulting architecture is not driven by visual excess but by disciplined resolution. Through measured detailing and a restrained palette, Laterite Studio creates an environment where focus, craft, and everyday function come together with quiet confidence."
    ],
    tags: ["Technical Resolution", "Services + Structure", "Compact Workspace Logic"],
    imageSrc: "/laterite-studio.jpg",
    imageAlt: "Technical architectural drawing detail for Laterite Studio",
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]"
  },
  {
    id: "project-04",
    number: "04",
    title: "North Gallery House",
    subtitle: "Drawing decisions toward lived clarity",
    meta: "Mumbai, India / Residence / Design Development",
    description:
      "Measured drawing reviews refine proportion, circulation, and domestic comfort into a calm residential language.",
    paragraphs: [
      "North Gallery House evolves through a careful process of design development where plans, alignments, and dimensional studies are reviewed collectively. The project places emphasis on how each room connects to the next, ensuring that circulation, daylight, and domestic use are resolved as part of one cohesive spatial system.",
      "Working drawings become a space for testing proportion, refining built edges, and coordinating architectural intent with practical requirements. Each mark on the sheet contributes to a home that feels ordered and generous, with transitions that support both family life and quiet retreat.",
      "The architecture is shaped not only by concept but by the discipline of refinement. Through attentive review and measured decisions, North Gallery House develops a calm residential language that balances openness, structure, and everyday ease."
    ],
    tags: ["Drawing Review", "Domestic Planning", "Design Coordination"],
    imageSrc: "/north-gallery-house.jpg",
    imageAlt:
      "Architectural team reviewing detailed residential plans for North Gallery House",
    backgroundClassName: "bg-[linear-gradient(180deg,#f8f6f1_0%,#ffffff_100%)]"
  },
  {
    id: "project-05",
    number: "05",
    title: "Cliff Court Residence",
    subtitle: "Site form shaped through geometry and terrain",
    meta: "Pune, India / Residential / Site Planning",
    description:
      "Landscape geometry, contour response, and procession inform a residence that feels grounded and precise.",
    paragraphs: [
      "Cliff Court Residence is conceived through a strong dialogue between built form and the contours of the site. Early planning studies focus on how geometry can guide entry, open space, and the placement of the residence so that the architecture feels grounded within its landscape rather than imposed upon it.",
      "The circular and radial relationships visible in the drawing help organize movement, define zones of privacy, and create a measured transition from the surrounding terrain into the heart of the home. This planning approach allows the project to balance spatial drama with clarity, ensuring that the layout remains both memorable and highly functional.",
      "By treating site planning as an integral part of the design language, the project builds a residential experience shaped by orientation, procession, and calm visual order. Cliff Court Residence becomes a study in how landscape geometry can enrich domestic life with quiet precision."
    ],
    tags: ["Site Geometry", "Contour Response", "Residential Planning"],
    imageSrc: "/cliff-court-residence.jpg",
    imageAlt: "Architect reviewing a residential site plan for Cliff Court Residence",
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]"
  }
];

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[rgba(255,255,255,0.86)] backdrop-blur-md">
        <div className="flex flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-10 lg:px-20">
          <a href="#top" className="text-[0.72rem] uppercase tracking-[0.26em] text-black/65 md:text-[0.78rem] md:tracking-[0.34em]">
            GP Architects
          </a>
          <nav aria-label="Main" className="flex flex-wrap items-center gap-4 md:gap-8">
            <a href="#index-section" className="text-[0.78rem] uppercase tracking-[0.24em] text-black/55 transition hover:text-black">
              Index
            </a>
            <a href="#projects-overview" className="text-[0.78rem] uppercase tracking-[0.24em] text-black/55 transition hover:text-black">
              Projects
            </a>
            <a href="#portfolio-footer" className="text-[0.78rem] uppercase tracking-[0.24em] text-black/55 transition hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div id="top">
        <HeroSection />
      </div>

      <section
        id="index-section"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfaf7_0%,#ffffff_100%)] px-4 py-20 md:px-10 md:py-24 lg:px-20 xl:py-28"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[24%] bg-[linear-gradient(0deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-35 xl:block" />

        <div className="grid gap-12 md:gap-14 xl:grid-cols-12 xl:gap-16">
          <div className="xl:col-span-4">
            <div className="xl:sticky xl:top-24">
              <p className="text-[0.76rem] uppercase tracking-[0.28em] text-[rgba(33,32,32,0.48)]">
                Selected Work
              </p>
              <h2 className="mt-4 max-w-[8ch] text-[2.9rem] leading-[0.9] tracking-[0.03em] md:text-[4.4rem] lg:text-[5.4rem] xl:text-[6.4rem]">
                Project Index
              </h2>
              <p className="mt-6 max-w-[24rem] text-sm leading-7 text-black/60 md:text-[0.98rem]">
                A curated sequence of residential, hospitality, and wellness
                work presented through drawings, process studies, and spatial
                narratives.
              </p>
            </div>
          </div>

          <div id="projects-overview" className="xl:col-span-7 xl:col-start-6">
            <nav aria-label="Projects" className="border-t border-[rgba(33,32,32,0.14)]">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={`#${project.id}`}
                  className="grid min-w-0 gap-4 border-b border-[rgba(33,32,32,0.14)] py-7 transition duration-200 hover:translate-x-2 hover:text-black md:grid-cols-[72px_minmax(0,1fr)_minmax(140px,180px)] md:gap-5 xl:grid-cols-[80px_minmax(0,1fr)_minmax(170px,210px)]"
                >
                  <span className="text-[0.82rem] uppercase tracking-[0.18em] text-[rgba(33,32,32,0.58)]">
                    {project.number}
                  </span>

                  <span className="grid gap-2">
                    <h3 className="project-name relative m-0 w-fit text-xl font-medium leading-[1.1] md:text-2xl lg:text-[1.95rem]">
                      {project.title}
                    </h3>
                    <p className="m-0 max-w-[56ch] text-sm leading-[1.7] text-[rgba(33,32,32,0.62)] md:text-[0.97rem]">
                      {project.description}
                    </p>
                  </span>

                  <span className="break-words text-[0.76rem] uppercase tracking-[0.16em] text-[rgba(33,32,32,0.58)] md:text-[0.82rem] md:tracking-[0.18em]">
                    {project.meta}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {projects.map((project, index) => (
        <CaseStudySection
          key={project.id}
          id={project.id}
          number={project.number}
          title={project.title}
          subtitle={project.subtitle}
          meta={project.meta}
          paragraphs={project.paragraphs}
          tags={project.tags}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          imagePriority={project.imagePriority}
          backgroundClassName={project.backgroundClassName}
          watermark={project.number}
          reverse={index % 2 === 1}
        />
      ))}

      <footer
        id="portfolio-footer"
        className="border-t border-black/8 bg-[linear-gradient(180deg,#fcfbf9_0%,#f4f0e8_100%)] px-4 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div className="space-y-4">
            <p className="text-[0.76rem] uppercase tracking-[0.3em] text-black/48">
              Gaurav Patharey Architects
            </p>
            <h2 className="max-w-[8ch] text-[2.7rem] leading-[0.92] tracking-[0.03em] md:text-[4rem] lg:text-[5.4rem]">
              Calm spaces, drawn with precision.
            </h2>
          </div>

          <div className="grid gap-3 md:justify-items-end">
            <p className="max-w-[30rem] text-sm leading-7 text-black/62 md:text-right md:text-[0.98rem]">
              Residential, hospitality, and wellness environments shaped through
              thoughtful planning, restrained material language, and architectural
              clarity.
            </p>
            <a
              href="mailto:studio@example.com"
              className="text-[0.8rem] uppercase tracking-[0.26em] text-black/58 transition hover:text-black"
            >
              studio@example.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
