export const services = [
  {
    slug: "architecture",
    title: "Architecture",
    eyebrow: "Built Form",
    description:
      "From conceptualization to execution, we craft iconic structures that blend aesthetics, sustainability, and purpose.",
    summary:
      "Architecture is approached as a complete journey: understanding the site, shaping the massing, resolving light, and translating the design into buildable detail.",
    img: "/service-architecture.png",
    heroImage: "/service-detail-architecture.jpg",
    gallery: [
      {
        src: "/service-detail-architecture.jpg",
        title: "Contemporary Residence",
        copy:
          "A warm timber volume, broad glazing, and a grounded concrete base create a home that feels open to the landscape while remaining composed and precise.",
      },
      {
        src: "/service-detail-balconies.jpg",
        title: "Facade Rhythm",
        copy:
          "Layered balconies, glass railings, and repeated openings bring order to the elevation while creating private outdoor extensions for everyday living.",
      },
    ],
    process: ["Site study", "Concept design", "Working drawings", "Execution coordination"],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    eyebrow: "Spatial Comfort",
    description:
      "Transforming empty spaces into living experiences. We design interiors that perfectly balance form and function.",
    summary:
      "Interior work focuses on proportion, natural light, material calm, and the small daily moments that make a space feel effortless to live in.",
    img: "/service-interiors.png",
    heroImage: "/interior-detail-lounge.jpg",
    gallery: [
      {
        src: "/interior-detail-residence.jpg",
        title: "Arrival And Exterior Character",
        copy:
          "The experience of an interior begins before entering the home. Facade tones, landscape edges, and threshold details create a calm first impression.",
      },
      {
        src: "/interior-detail-lounge.jpg",
        title: "Soft Living Room Composition",
        copy:
          "Layered textiles, relaxed seating, filtered daylight, and simple artwork form a living room that feels warm without becoming visually heavy.",
      },
      {
        src: "/interior-detail-view-living.jpg",
        title: "Open View Living",
        copy:
          "Large windows, low furniture, and a restrained palette keep attention on the view while preserving comfort, clarity, and everyday usability.",
      },
      {
        src: "/interior-detail-kitchen.jpg",
        title: "Quiet Kitchen Planning",
        copy:
          "Soft cabinetry, stone surfaces, and clean appliance lines create a kitchen that feels minimal, practical, and warm in daily use.",
      },
    ],
    process: ["Space planning", "Material palette", "Lighting design", "Furniture detailing"],
  },
  {
    slug: "urban-planning",
    title: "Urban Planning",
    eyebrow: "Larger Systems",
    description:
      "Designing the future of our cities with comprehensive master planning and sustainable urban development strategies.",
    summary:
      "Urban planning begins with reading the city from above and at street level: movement, density, public space, infrastructure, and the small thresholds where people actually experience the built environment.",
    img: "/urban-skyline-towers.jpg",
    heroImage: "/urban-aerial-intersection.jpg",
    gallery: [
      {
        src: "/urban-aerial-intersection.jpg",
        title: "Movement Networks",
        copy:
          "Aerial mapping reveals how roads, crossings, open pockets, and neighborhood blocks connect. We use this layer to shape safer circulation, calmer intersections, and public spaces that support daily movement.",
      },
      {
        src: "/urban-skyline-towers.jpg",
        title: "Density And Skyline",
        copy:
          "High-rise districts need a measured balance of height, access, daylight, and shared ground. Our planning studies organize density so towers contribute to a readable and livable city fabric.",
      },
      {
        src: "/urban-commercial-district.jpg",
        title: "Commercial Districts",
        copy:
          "Mixed-use and business zones work best when transit, service access, frontage activity, and shaded pedestrian routes are coordinated into one clear urban system.",
      },
      {
        src: "/urban-transit-corridor.jpg",
        title: "Green Urban Corridors",
        copy:
          "Large-scale plans connect parks, transit lines, road loops, and civic edges into resilient corridors that make dense city life more breathable and easier to navigate.",
      },
    ],
    highlights: ["Mobility", "Density", "Public realm", "Green systems"],
    process: ["Context mapping", "Movement strategy", "Open-space planning", "Sustainable phasing"],
  },
];

export const serviceBySlug = services.reduce((lookup, service) => {
  lookup[service.slug] = service;
  return lookup;
}, {});
