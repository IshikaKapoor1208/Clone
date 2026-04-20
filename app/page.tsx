import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectIndexSection from "../components/ProjectIndexSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import { projects } from "../lib/data/projects";
import CaseStudiesStickySection from "../components/CaseStudiesStickySection";
import CTASection from "../components/CTASection";
import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";
import ComparisonSlider from "../components/ComparisonSlider";

export default function Page() {
  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <CustomCursor />
      <SmoothScroll />
      <Navbar />

      <div id="top">
        <HeroSection />
      </div>

      <ProjectIndexSection projects={projects} />

      <section className="py-24 px-4 md:px-10 lg:px-20 bg-paper-soft">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="font-signature text-5xl md:text-7xl">The Process.</h2>
            <p className="max-w-md text-ink/60 leading-relaxed uppercase text-[0.65rem] tracking-[0.2em] font-medium">
              Every built form begins as a dialogue on paper. We translate
              abstract sketches into precise architectural expressions.
            </p>
          </div>
          <ComparisonSlider
            beforeImage="/sketch.jpeg"
            afterImage="/reality.jpeg"
          />
        </div>
      </section>

      <ServicesSection />

      <CaseStudiesStickySection projects={projects} />

      <CTASection />

      <Footer />
    </main>
  );
}
