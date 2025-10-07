import gravitasLogo from "@/assets/gravitas-logo.png";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

interface HeroProps {
  onBackProject?: () => void;
}

const Hero = ({ onBackProject }: HeroProps) => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={gravitasLogo} 
            alt="GRAVITAS INDUSTRIES" 
            className="h-32 md:h-40 w-auto"
          />
        </div>
        
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></div>
          <span className="text-sm md:text-base font-medium tracking-widest text-green-500 uppercase">
            Available for Work
          </span>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide mb-8">
          An independently owned, operated, and social benefit enterprise positioning itself as one of South Africa's top players in the rapidly evolving tech industry through strategic product development and a noteworthy digital asset portfolio.
        </p>

        <Button 
          onClick={onBackProject}
          size="lg"
          className="font-semibold tracking-wide"
        >
          <DollarSign className="mr-2 h-5 w-5" />
          Back This Project
        </Button>
      </div>
    </section>
  );
};

export default Hero;
