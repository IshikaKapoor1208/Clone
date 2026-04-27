import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import CustomCursor from "../../components/CustomCursor";
import ProjectIndexSection from "../../components/ProjectIndexSection";
import { projects } from "../../lib/data/projects";

export default function ProjectsPage() {
  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <CustomCursor />
      <SmoothScroll />
      <Navbar />

      <section className="px-6 py-16 md:px-12 md:py-24 pt-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[0.72rem] uppercase tracking-[0.3em] text-ink/48">
            Projects
          </p>
          <h1 className="mt-6 max-w-[10ch] text-xl md:text-2xl xl:text-3xl font-light leading-relaxed">
            A measured portfolio of built narratives.
          </h1>
          <p className="mt-8 max-w-2xl text-body-base text-ink/65">
            Residential, hospitality, and wellness work presented through
            drawings, process studies, and spatial detail.
          </p>
        </div>
      </section>

      <ProjectIndexSection projects={projects} />

      <Footer />
    </main>
  );
}
