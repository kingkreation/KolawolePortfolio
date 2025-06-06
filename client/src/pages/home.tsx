import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import PortfolioSection from "@/components/sections/portfolio";
import VolunteeringSection from "@/components/sections/volunteering";
import EducationSection from "@/components/sections/education";
import TestimonialsSection from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";
import Lightbox from "@/components/lightbox";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <PortfolioSection />
      <VolunteeringSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
      <Lightbox />
      
      {/* Footer */}
      <footer className="bg-navy py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white">
              © 2025 Joshua Kolawole Obaloluwa. All Rights Reserved.
            </p>
            <p className="text-gold mt-2 italic">
              "Purpose over Popularity | Impact over Impression"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
