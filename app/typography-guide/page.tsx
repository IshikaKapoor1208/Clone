import React from "react";

export default function TypographyGuide() {
  const sampleHeading = "Architecture of Precision";
  const sampleBody = "Our approach is rooted in the belief that spaces should be calm, intentional, and shaped through a restrained material language. We focus on residential, hospitality, and wellness environments that resonate with architectural clarity.";
  const roleMap = [
    { role: "Heading", font: "Samarata" },
    { role: "Subheading", font: "Gustera" },
    { role: "Paragraph", font: "Paragraph" },
    { role: "Accent", font: "Allison / Signature" },
  ];

  const hierarchy = [
    {
      tag: "h1",
      label: "Hero Heading (H1)",
      description: "Main page titles. Can use the brand signature or the elegant serif.",
      fontClass: "font-heading",
      style: "text-h1-hero text-rustic-red",
      usage: "Hero sections, Brand moments"
    },
    {
      tag: "h2",
      label: "Section Heading (H2)",
      description: "Primary dividers. Using Serif for a sophisticated architectural feel.",
      fontClass: "font-serif",
      style: "text-h2-section font-medium italic",
      usage: "Section headers (About, Services)"
    },
    {
      tag: "h3",
      label: "Sub-heading (H3)",
      description: "Project titles or smaller headers.",
      fontClass: "font-body",
      style: "text-h3-title font-semibold uppercase tracking-wider",
      usage: "Project titles, UI headers"
    },
    {
      tag: "p",
      label: "Body Text (Large)",
      description: "Introductory paragraphs.",
      fontClass: "font-body",
      style: "text-body-lg text-ink/80 font-light",
      usage: "Intro text, Summaries"
    },
    {
      tag: "p",
      label: "Body Text (Base)",
      description: "Standard content font.",
      fontClass: "font-body",
      style: "text-body-base text-ink/70",
      usage: "General descriptions"
    },
    {
      tag: "span",
      label: "Label / Meta Text",
      description: "Small technical details.",
      fontClass: "font-body",
      style: "text-label-xs uppercase tracking-[0.3em] font-bold text-ink/40",
      usage: "Captions, Metadata"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-ink selection:bg-rustic-red/10 selection:text-rustic-red">
      {/* Header */}
      <section className="border-b border-ink/5 bg-white px-6 py-16 md:px-12 md:py-24 pt-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-label-xs mb-4 text-rustic-red">Design System</p>
          <h1 className="text-h2-section font-body font-semibold leading-tight">
            Typography <span className="text-rustic-red">&</span> Hierarchy
          </h1>
          <p className="text-body-lg text-ink/60 mt-6 max-w-2xl font-body">
            A guide to the typographic scale and font pairings for Gaurav Patthare Architectss. 
            Designed to ensure consistency, readability, and a premium architectural aesthetic.
          </p>
        </div>
      </section>

      {/* Font Family Overview */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-ink/5 rounded-sm bg-[#fbfaf7]">
            <p className="text-label-xs text-ink/40 mb-2 uppercase">Brand Accent</p>
            <h2 className="font-heading text-4xl text-rustic-red mb-4">The Signature</h2>
            <p className="text-body-base text-ink/60">
              Personal, bespoke, and artistic. Use sparingly for brand presence and character.
            </p>
          </div>
          <div className="p-8 border border-ink/5 rounded-sm bg-[#fbfaf7]">
            <p className="text-label-xs text-ink/40 mb-2 uppercase">Premium Heading</p>
            <h2 className="font-serif text-4xl mb-4 italic">Cormorant</h2>
            <p className="text-body-base text-ink/60">
              An elegant serif that conveys luxury, precision, and architectural heritage.
            </p>
          </div>
          <div className="p-8 border border-ink/5 rounded-sm bg-[#fbfaf7]">
            <p className="text-label-xs text-ink/40 mb-2 uppercase">Interface & Body</p>
            <h2 className="font-body font-bold text-4xl mb-4 tracking-tight">Montserrat</h2>
            <p className="text-body-base text-ink/60">
              Clean, geometric, and modern. The backbone of the site's clarity and readability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-section-px py-section-py md:px-section-px-md lg:px-section-px-lg">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="mb-3 text-label-xs text-rustic-red">Font Roles</p>
            <h2 className="text-h3-title text-ink">Role To Font Mapping</h2>
          </div>

          <div className="overflow-hidden border border-ink/10 bg-[#2a2a2a] text-paper">
            <div className="grid grid-cols-2 border-b border-white/15">
              <div className="px-6 py-4 text-xl font-semibold md:text-2xl">Role</div>
              <div className="border-l border-white/15 px-6 py-4 text-xl font-semibold md:text-2xl">Font</div>
            </div>

            {roleMap.map((item) => (
              <div key={item.role} className="grid grid-cols-2 border-b border-white/15 last:border-b-0">
                <div className="px-6 py-4 text-lg md:text-xl">{item.role}</div>
                <div className="border-l border-white/15 px-6 py-4 text-lg md:text-xl">{item.font}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hierarchy Table */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {hierarchy.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-ink/5 pb-16">
              <div className="lg:col-span-3">
                <p className="text-label-xs text-rustic-red mb-1 font-bold">{item.label}</p>
                <p className="text-xs text-ink/40 uppercase tracking-tighter mb-4">{item.usage}</p>
                <p className="text-body-base text-ink/50 leading-relaxed italic">{item.description}</p>
              </div>
              <div className="lg:col-span-9">
                <div className={`${item.fontClass} ${item.style} leading-tight`}>
                  {item.tag.startsWith('p') || item.tag === 'span' ? sampleBody : sampleHeading}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-ink/5 text-[10px] font-mono text-ink/60 rounded">CSS: {item.style}</span>
                  <span className="px-3 py-1 bg-ink/5 text-[10px] font-mono text-ink/60 rounded">Tag: &lt;{item.tag}&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Improvements */}
      <section className="bg-ink px-6 py-16 md:px-12 md:py-24 text-paper">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-h3-title font-body font-semibold">Recommended Pairing Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <h4 className="text-rustic-red font-bold uppercase text-xs tracking-widest">Minimalist</h4>
              <p className="text-sm text-paper/60">Use Montserrat for everything. Vary weights (300 for body, 700 for headings) and tracking (widest for labels).</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-rustic-red font-bold uppercase text-xs tracking-widest">Balanced</h4>
              <p className="text-sm text-paper/60">The Signature for Hero H1s only. Montserrat for all other headings and body. Maintains professionalism with a spark of personality.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-rustic-red font-bold uppercase text-xs tracking-widest">Sophisticated</h4>
              <p className="text-sm text-paper/60">Introduce a Serif (like Lora or Cormorant) for H2 and H3 headings. Montserrat remains for navigation and body text.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/5 py-16 md:py-24 text-center">
        <p className="text-label-xs text-ink/30 uppercase tracking-[0.5em]">Gaurav Patthare Architectss &copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
