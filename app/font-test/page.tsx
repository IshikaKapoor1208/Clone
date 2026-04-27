import React from "react";

export default function FontTestPage() {
  const text = "Gaurav Patthare Architectss";
  
  const sections = [
    {
      title: "Heading / Signature Font",
      description: "Custom local font 'Thesignature-Regular' (Handwritten style)",
      fontClass: "font-heading",
      variants: [
        { label: "Default", class: "text-7xl" },
        { label: "Rustic Red", class: "text-7xl text-rustic-red" },
        { label: "Large Hero", class: "text-h1-hero" },
        { label: "Section Header", class: "text-h2-section" },
        { label: "Italic Medium", class: "text-5xl font-medium italic" },
      ]
    },
    {
      title: "Body / Sans Font",
      description: "Google Font 'Montserrat'",
      fontClass: "font-body",
      variants: [
        { label: "Light (300)", class: "text-4xl font-light" },
        { label: "Regular (400)", class: "text-4xl font-normal" },
        { label: "Medium (500)", class: "text-4xl font-medium" },
        { label: "Semibold (600)", class: "text-4xl font-semibold" },
        { label: "Bold (700)", class: "text-4xl font-bold" },
        { label: "Uppercase Wide", class: "text-2xl uppercase tracking-[0.3em]" },
        { label: "Italic", class: "text-4xl italic" },
        { label: "Label XS", class: "text-label-xs uppercase tracking-[0.25em]" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-paper p-10 md:p-24 space-y-24">
      <header className="border-b border-ink/10 pb-12">
        <h1 className="text-label-xs uppercase st text-ink/50 mb-4 text-xl md:text-2xl xl:text-3xl font-light leading-relaxed">Typography Showcase</h1>
        <p className="text-h3-title font-body max-w-2xl">
          Visual reference for font families used across the Gaurav Patthare Architectss brand identity.
        </p>
      </header>

      <div className="space-y-32">
        {sections.map((section, idx) => (
          <section key={idx} className="space-y-12">
            <div className="border-l-2 border-rustic-red pl-6">
              <h2 className="font-body text-xl md:text-2xl xl:text-3xl font-light leading-relaxed">{section.title}</h2>
              <p className="text-ink/60 font-body mt-1">{section.description}</p>
            </div>

            <div className="space-y-16">
              {section.variants.map((variant, vIdx) => (
                <div key={vIdx} className="group relative">
                  <span className="absolute -left-4 top-0 h-full w-1 bg-rustic-red/0 group-hover:bg-rustic-red/20 transition-all" />
                  <p className="text-label-xs text-ink/30 mb-3 uppercase tracking-tighter">{variant.label}</p>
                  <div className={`${section.fontClass} ${variant.class} text-ink leading-tight`}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="pt-24 border-t border-ink/10 text-label-xs text-ink/40 text-center uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Gaurav Patthare Architectss
      </footer>
    </main>
  );
}
