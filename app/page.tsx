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
import IdentitySection from "../components/IdentitySection";

export default function Page() {
  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <CustomCursor />
      <SmoothScroll />
      <Navbar />

      <div id="top">
        <HeroSection />
      </div>

      <ServicesSection />

      <section className="py-section-py px-section-px md:px-section-px-md lg:px-section-px-lg bg-paper-soft">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="font-signature text-h2-section">
              <span className="text-rustic-red">The </span>
              <span className="text-[#A34E24]">Process.</span>
            </h2>
            <p className="max-w-md text-label-xs text-ink/60">
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

      <IdentitySection />

      <ProjectIndexSection projects={projects} />

      <CaseStudiesStickySection projects={projects} />

      <CTASection />

      <Footer />
    </main>
  );
}
