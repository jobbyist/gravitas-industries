import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, DollarSign, Globe } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    description: string;
    fullDescription: string;
    logo: string;
    link: string;
    domainValue?: string;
    status: "ongoing" | "upcoming";
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="mb-4 flex items-center justify-center">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="max-h-20 max-w-[250px] object-contain"
            />
          </div>
          <DialogTitle className="text-3xl font-bold text-center">
            {project.name}
          </DialogTitle>
          <DialogDescription className="text-base text-center pt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
              About
            </h4>
            <p className="text-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {project.domainValue && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-accent" />
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Domain Appraisal Value
                </h4>
              </div>
              <p className="text-2xl font-bold text-foreground">
                ${project.domainValue}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                According to GoDaddy Domain Appraisal Service
              </p>
            </div>
          )}

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Website
              </h4>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-medium break-all"
            >
              {project.link}
            </a>
          </div>

          <Button
            onClick={() => window.open(project.link, "_blank")}
            className="w-full font-semibold"
            size="lg"
          >
            Visit Website
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
