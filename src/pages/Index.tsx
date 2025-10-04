import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import AuthModal from "@/components/AuthModal";
import ExplorerMenu from "@/components/ExplorerMenu";
import ValuationTool from "@/components/ValuationTool";
import AdPlaceholder from "@/components/AdPlaceholder";
import PartnerLogos from "@/components/PartnerLogos";
import { projects, Project } from "@/data/projects";
import { User, Menu } from "lucide-react";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const handleLearnMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const ongoingProjects = projects.filter((p) => p.status === "ongoing");
  const upcomingProjects = projects.filter((p) => p.status === "upcoming");

  return (
    <div className="min-h-screen bg-background">
      {/* Explorer Menu Link */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setIsExplorerOpen(true)}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold tracking-widest text-sm"
        >
          <Menu className="h-5 w-5" />
          EXPLORER
        </button>
      </div>

      {/* JOIN NOW Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsAuthOpen(true)}
          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold tracking-widest text-sm rounded-md hover:bg-primary/90 transition-all animate-pulse-glow"
        >
          <User className="h-4 w-4" />
          JOIN NOW
        </button>
      </div>

      <Hero />

      {/* Top Banner Ad */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <AdPlaceholder size="banner" />
      </div>

      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ongoing Developments
          </h2>
          <p className="text-muted-foreground text-lg">
            Active projects in beta and continuous development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ongoingProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              logo={project.logo}
              link={project.link}
              status={project.status}
              initialViews={project.initialViews}
              initialLikes={project.initialLikes}
              onLearnMore={() => handleLearnMore(project)}
            />
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Upcoming Developments
          </h2>
          <p className="text-muted-foreground text-lg">
            Next-generation solutions in planning and pre-launch
          </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  logo={project.logo}
                  link={project.link}
                  status={project.status}
                  initialViews={project.initialViews}
                  initialLikes={project.initialLikes}
                  onLearnMore={() => handleLearnMore(project)}
                />
              ))}
            </div>
          </div>

          {/* Sidebar Ads */}
          <div className="lg:col-span-1 space-y-6">
            <AdPlaceholder size="sidebar" />
            <AdPlaceholder size="square" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Digital Asset Valuation Tool Section */}
      <ValuationTool />

      {/* Partner Logos Section */}
      <PartnerLogos />

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()} GRAVITAS INDUSTRIES. All rights reserved.
          </p>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ExplorerMenu
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Index;
