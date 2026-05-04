const baseProjects = [
  {
    id: "project-01",
    number: "01",
    title: "Hello",
    subtitle: "A healing journey",
    meta: "Pune, India / Community Wellness / 2025",
    description:
      "Transitional spaces become the emotional core of the architecture, shaping a slower and more restorative spatial rhythm.",
    paragraphs: [
      "IN [BE] TWEEN explores architecture as an in-between condition, positioned between therapy and everyday life, enclosure and openness, pause and movement. The proposal is conceived as a healing environment where transitional spaces become as important as enclosed rooms, allowing users to slow down, gather, reflect, and recover through spatial rhythm.",
      "The project organizes circulation as a gradual journey through light courts, shaded thresholds, stepped connections, and calm interior volumes. Materially, the architecture leans on a restrained palette of exposed surfaces, muted tones, and soft daylight to create an atmosphere that feels grounded, intimate, and restorative.",
      "Rather than presenting healing as a single destination, the design frames it as a sequence of experiences. Each edge, opening, and level change is intended to support emotional comfort while maintaining a strong architectural identity rooted in clarity, balance, and quiet permanence.",
    ],
    tags: [
      "Spatial Sequence",
      "Light + Thresholds",
      "Healing Through Transition",
    ],
    imageSrc: "/section.png",
    stickyImageSrc: "/interior-detail-lounge.jpg",
    imageAlt: "Architectural drawing for IN [BE] TWEEN",
    imagePriority: true,
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]",
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
      "Rather than treating planning as a technical step alone, the design process frames it as the foundation for atmosphere and experience. Monsoon Court balances practical decision-making with spatial sensitivity, allowing the final architecture to feel calm, resolved, and deeply responsive to everyday living.",
    ],
    tags: ["Plan Development", "Program + Adjacency", "Collaborative Review"],
    imageSrc: "/monsoon-court.jpg",
    stickyImageSrc: "/interior-detail-residence.jpg",
    imageAlt: "Team reviewing architectural floor plans for Monsoon Court",
    backgroundClassName: "bg-[linear-gradient(180deg,#f8f6f1_0%,#ffffff_100%)]",
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
      "The resulting architecture is not driven by visual excess but by disciplined resolution. Through measured detailing and a restrained palette, Laterite Studio creates an environment where focus, craft, and everyday function come together with quiet confidence.",
    ],
    tags: [
      "Technical Resolution",
      "Services + Structure",
      "Compact Workspace Logic",
    ],
    imageSrc: "/laterite-studio.jpg",
    stickyImageSrc: "/interior-detail-kitchen.jpg",
    imageAlt: "Technical architectural drawing detail for Laterite Studio",
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]",
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
      "The architecture is shaped not only by concept but by the discipline of refinement. Through attentive review and measured decisions, North Gallery House develops a calm residential language that balances openness, structure, and everyday ease.",
    ],
    tags: ["Drawing Review", "Domestic Planning", "Design Coordination"],
    imageSrc: "/north-gallery-house.jpg",
    stickyImageSrc: "/interior-detail-view-living.jpg",
    imageAlt:
      "Architectural team reviewing detailed residential plans for North Gallery House",
    backgroundClassName: "bg-[linear-gradient(180deg,#f8f6f1_0%,#ffffff_100%)]",
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
      "By treating site planning as an integral part of the design language, the project builds a residential experience shaped by orientation, procession, and calm visual order. Cliff Court Residence becomes a study in how landscape geometry can enrich domestic life with quiet precision.",
    ],
    tags: ["Site Geometry", "Contour Response", "Residential Planning"],
    imageSrc: "/cliff-court-residence.jpg",
    stickyImageSrc: "/bulding.jpg",
    imageAlt: "Architect reviewing a residential site plan for Cliff Court Residence",
    backgroundClassName: "bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f1_100%)]"
  }
];

export const projects = baseProjects.map((project) => {
  const slug =
    project.slug ??
    project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  return { ...project, slug };
});

export const projectBySlug = projects.reduce((lookup, project) => {
  lookup[project.slug] = project;
  lookup[project.id] = project;
  return lookup;
}, {});
