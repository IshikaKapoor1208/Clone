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

export default function Page() {
  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <CustomCursor />
      <SmoothScroll />
      <Navbar />

      <section id="top" className="relative min-h-screen overflow-hidden bg-white px-4 pt-20 sm:px-5 md:px-10 md:pt-28 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78)_0%,rgba(250,247,243,0.94)_64%,rgba(246,242,237,1)_100%)]" />

        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute left-[-23vw] top-[11%] h-[86%] w-[48vw] min-w-[180px] max-w-[460px] opacity-50 sm:left-[-18vw] sm:opacity-60 md:left-[-10vw] md:w-[36vw] md:opacity-65 lg:left-[-8vw]"
            viewBox="0 0 420 980"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="#d2ab84" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 176 L204 90 L204 784" strokeWidth="1.3" />
              <path d="M18 176 L18 968 L204 784" strokeWidth="1.3" />
              <path d="M204 545 L297 492" strokeWidth="1.05" />
              <path d="M18 968 L204 784 L362 858" strokeWidth="1.05" />
              <path d="M18 968 L18 858" strokeWidth="1.05" />
            </g>
            <g stroke="#d8b08a" strokeWidth="0.95" strokeLinecap="round">
              {Array.from({ length: 20 }).map((_, index) => {
                const x = 74 + index * 13.4;
                const topY = 808 + index * 3.6;
                return <line key={`beam-${index}`} x1={x} y1={topY} x2={x} y2={980} />;
              })}
              <path d="M18 868 L362 858" />
              <path d="M68 802 L362 858" />
            </g>
          </svg>

          <div className="absolute right-[-18vw] top-[16%] h-[38vw] w-[38vw] max-h-[360px] max-w-[360px] rounded-full border border-[#c46e3d]/35 opacity-70 sm:right-[-12vw] sm:h-[32vw] sm:w-[32vw] md:right-[-8vw] md:top-[18%] md:h-[42vw] md:w-[42vw] md:max-h-[520px] md:max-w-[520px] md:opacity-65 lg:right-[-4vw]" />

          <div className="absolute right-[4vw] top-[46%] grid gap-4 opacity-65 sm:right-[3vw] md:right-[6.5vw] md:top-[39%] md:gap-5 lg:right-[7vw]">
            {Array.from({ length: 3 }).map((_, row) => (
              <div key={`dots-row-${row}`} className="grid grid-cols-5 gap-3 sm:gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={`dot-${row}-${index}`}
                    className="h-[2px] w-[2px] rounded-full bg-[#c46e3d]"
                  />
                ))}
              </div>
            ))}
          </div>

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
