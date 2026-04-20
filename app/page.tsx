import HeroSection from "../components/HeroSection";
import CaseStudiesStickySection from "../components/CaseStudiesStickySection";
import Navbar from "../components/Navbar";
import ProjectIndexSection from "../components/ProjectIndexSection";
import Footer from "../components/Footer";
import { projects } from "../lib/data/projects";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fcfbf9_100%)] text-ink">
      <Navbar />

      <div id="top">
        <HeroSection />
      </div>

      <ProjectIndexSection projects={projects} />

      <CaseStudiesStickySection projects={projects} />

      <Footer />
    </main>
  );
}
