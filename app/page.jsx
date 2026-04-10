import HeroSection from "../components/HeroSection";
import CaseStudySection from "../components/CaseStudySection";

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

const caseStudies = [
  {
    id: "project-05",
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]",
    studyLabel: "Case Study 01",
    title: "IN [BE] TWEEN",
    subtitle: "A healing journey",
    meta: "Pune, India / Community Wellness / 2025",
    paragraphs: [
      "IN [BE] TWEEN explores architecture as an in-between condition, positioned between therapy and everyday life, enclosure and openness, pause and movement. The proposal is conceived as a healing environment where transitional spaces become as important as enclosed rooms, allowing users to slow down, gather, reflect, and recover through spatial rhythm.",
      "The project organizes circulation as a gradual journey through light courts, shaded thresholds, stepped connections, and calm interior volumes. Materially, the architecture leans on a restrained palette of exposed surfaces, muted tones, and soft daylight to create an atmosphere that feels grounded, intimate, and restorative.",
      "Rather than presenting healing as a single destination, the design frames it as a sequence of experiences. Each edge, opening, and level change is intended to support emotional comfort while maintaining a strong architectural identity rooted in clarity, balance, and quiet permanence."
    ],
    tags: ["Spatial Sequence", "Light + Thresholds", "Healing Through Transition"],
    imageSrc: "/section.png",
    imageAlt: "Architectural drawing for IN [BE] TWEEN",
    imagePriority: true,
    watermark: "1"
  },
  {
    backgroundClassName: "bg-[linear-gradient(180deg,#f8f6f1_0%,#ffffff_100%)]",
    studyLabel: "Case Study 02",
    title: "Monsoon Court",
    subtitle: "A residence shaped through conversation",
    meta: "Alibaug, India / Hospitality / Planning + Coordination",
    paragraphs: [
      "Monsoon Court began as a collaborative planning exercise where drawings, room relationships, and circulation options were studied closely around the table. The project developed through an attentive reading of how people would move, gather, and occupy the spaces across changing seasons and varying levels of privacy.",
      "The plan organizes common areas, service zones, and quieter rooms into a layout that feels legible and effortless to inhabit. Each adjustment to the drawing refines adjacency, improves usability, and supports a more intuitive relationship between interior function and the wider site.",
      "Rather than treating planning as a technical step alone, the design process frames it as the foundation for atmosphere and experience. Monsoon Court balances practical decision-making with spatial sensitivity, allowing the final architecture to feel calm, resolved, and deeply responsive to everyday living."
    ],
    tags: ["Plan Development", "Program + Adjacency", "Collaborative Review"],
    imageSrc: "/monsoon-court.jpg",
    imageAlt: "Team reviewing architectural floor plans for Monsoon Court",
    watermark: "2"
  },
  {
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]",
    studyLabel: "Case Study 03",
    title: "Laterite Studio",
    subtitle: "Precision behind a compact workspace",
    meta: "Goa, India / Workspace / Technical Detailing",
    paragraphs: [
      "Laterite Studio is developed through a close attention to construction logic, compact planning, and the precision of built components. The project treats technical drawings as a design tool in themselves, using detail development to shape the experience of the workspace from the inside out.",
      "Service coordination, structural interfaces, and built-in elements are studied carefully so the studio can remain calm, efficient, and materially clear despite its modest footprint. Each junction is resolved to support durability, clarity of use, and a seamless relationship between working zones and supporting systems.",
      "The resulting architecture is not driven by visual excess but by disciplined resolution. Through measured detailing and a restrained palette, Laterite Studio creates an environment where focus, craft, and everyday function come together with quiet confidence."
    ],
    tags: ["Technical Resolution", "Services + Structure", "Compact Workspace Logic"],
    imageSrc: "/laterite-studio.jpg",
    imageAlt: "Technical architectural drawing detail for Laterite Studio",
    watermark: "3"
  },
  {
    backgroundClassName: "bg-[linear-gradient(180deg,#f8f6f1_0%,#ffffff_100%)]",
    studyLabel: "Case Study 04",
    title: "North Gallery House",
    subtitle: "Drawing decisions toward lived clarity",
    meta: "Mumbai, India / Residence / Design Development",
    paragraphs: [
      "North Gallery House evolves through a careful process of design development where plans, alignments, and dimensional studies are reviewed collectively. The project places emphasis on how each room connects to the next, ensuring that circulation, daylight, and domestic use are resolved as part of one cohesive spatial system.",
      "Working drawings become a space for testing proportion, refining built edges, and coordinating architectural intent with practical requirements. Each mark on the sheet contributes to a home that feels ordered and generous, with transitions that support both family life and quiet retreat.",
      "The architecture is shaped not only by concept but by the discipline of refinement. Through attentive review and measured decisions, North Gallery House develops a calm residential language that balances openness, structure, and everyday ease."
    ],
    tags: ["Drawing Review", "Domestic Planning", "Design Coordination"],
    imageSrc: "/north-gallery-house.jpg",
    imageAlt:
      "Architectural team reviewing detailed residential plans for North Gallery House",
    watermark: "4"
  },
  {
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]",
    studyLabel: "Case Study 05",
    title: "Cliff Court Residence",
    subtitle: "Site form shaped through geometry and terrain",
    meta: "Pune, India / Residential / Site Planning",
    paragraphs: [
      "Cliff Court Residence is conceived through a strong dialogue between built form and the contours of the site. Early planning studies focus on how geometry can guide entry, open space, and the placement of the residence so that the architecture feels grounded within its landscape rather than imposed upon it.",
      "The circular and radial relationships visible in the drawing help organize movement, define zones of privacy, and create a measured transition from the surrounding terrain into the heart of the home. This planning approach allows the project to balance spatial drama with clarity, ensuring that the layout remains both memorable and highly functional.",
      "By treating site planning as an integral part of the design language, the project builds a residential experience shaped by orientation, procession, and calm visual order. Cliff Court Residence becomes a study in how landscape geometry can enrich domestic life with quiet precision."
    ],
    tags: ["Site Geometry", "Contour Response", "Residential Planning"],
    imageSrc: "/cliff-court-residence.jpg",
    imageAlt: "Architect reviewing a residential site plan for Cliff Court Residence",
    watermark: "5"
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

      {caseStudies.map((study) => (
        <CaseStudySection key={study.studyLabel} {...study} />
      ))}

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
