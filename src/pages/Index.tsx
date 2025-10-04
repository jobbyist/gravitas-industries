import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, Project } from "@/data/projects";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const ongoingProjects = projects.filter((p) => p.status === "ongoing");
  const upcomingProjects = projects.filter((p) => p.status === "upcoming");

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <section className="px-6 py-16 max-w-7xl mx-auto">
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
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} GRAVITAS. All rights reserved.
          </p>
        </div>
      </footer>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Index;
