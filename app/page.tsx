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
import AnimatedHeroName from "../components/AnimatedHeroName";
import AnimatedSkyline from "../components/AnimatedSkyline";
import { ArrowDown } from "lucide-react";

export default function Page() {
  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <CustomCursor />
      <SmoothScroll />
      <Navbar />

      <section id="top" className="relative min-h-screen overflow-hidden bg-white px-4 pt-20 sm:px-5 md:px-10 md:pt-28 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78)_0%,rgba(250,247,243,0.94)_64%,rgba(246,242,237,1)_100%)]" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.58))]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-[88rem] flex-col items-center justify-center px-1 text-center sm:min-h-[calc(100vh-7rem)]">
          <AnimatedHeroName
            firstLine="Gaurav Patthare"
            secondLine="Architects"
          />

          <p className="mt-6 text-center text-[0.58rem] uppercase tracking-[0.34em] text-[#b95b28] sm:mt-8 sm:text-[0.68rem] sm:tracking-[0.45em] md:mt-10">
            Architecture & Interior Design Studio
          </p>

          <div className="mt-8 grid w-full max-w-[34rem] grid-cols-2 gap-3 sm:mt-10 sm:flex sm:max-w-none sm:flex-row sm:justify-center sm:gap-5">
            <a
              href="/projects"
              data-cursor="view"
              className="inline-flex w-full items-center justify-center border border-[#b95b28] bg-[linear-gradient(135deg,#c66a33_0%,#a64a20_100%)] px-4 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-white shadow-[0_16px_40px_rgba(166,74,32,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#9f451e] hover:shadow-[0_22px_48px_rgba(166,74,32,0.28)] active:translate-y-0 active:scale-[0.99] sm:w-[13.5rem] sm:flex-none sm:px-6 sm:py-3.5 sm:text-[0.7rem] sm:tracking-[0.3em] md:w-[14rem] md:px-7 md:py-3.5 md:text-[0.72rem]"
            >
              Explore Work
            </a>
            <a
              href="/contact"
              data-cursor="view"
              className="inline-flex w-full items-center justify-center border border-[#c46e3d] bg-white/30 px-4 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-[#b95b28] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#b95b28] hover:bg-white/65 hover:shadow-[0_18px_36px_rgba(196,110,61,0.16)] active:translate-y-0 active:scale-[0.99] sm:w-[13.5rem] sm:flex-none sm:px-6 sm:py-3.5 sm:text-[0.7rem] sm:tracking-[0.3em] md:w-[14rem] md:px-7 md:py-3.5 md:text-[0.72rem]"
              >
                Start a Project
              </a>
          </div>

          <div className="mt-8 mb-10 w-full max-w-[48rem] px-2 sm:mt-10 sm:mb-12 sm:px-4 md:mb-16 md:max-w-[52rem]">
            <AnimatedSkyline />
          </div>

          <a
            href="#services"
            aria-label="Scroll to services"
            className="absolute bottom-[-8px] left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center bg-transparent text-rustic-red shadow-none transition duration-300 ease-out hover:translate-y-1 hover:shadow-none sm:bottom-[-6px] sm:h-14 sm:w-14 md:bottom-[-4px]"
          >
            <ArrowDown className="hero-scroll-arrow h-6 w-6 translate-y-0.5 stroke-[2.5] sm:h-7 sm:w-7" />
          </a>
        </div>
      </section>

      <ServicesSection />

      <section className="px-6 py-16 md:px-12 md:py-24 bg-paper-soft">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="font-signature text-5xl md:text-2xl xl:text-7xl font-light leading-relaxed">
              <span className="text-rustic-red">The </span>
              <span className="text-[#A34E24]">Process.</span>
            </h2>
            <p className="max-w-md text-label-lg text-ink/60">
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
