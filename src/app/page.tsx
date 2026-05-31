import { AboutSection } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#17130f]">
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}

