import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily access the materials on GRAVITAS INDUSTRIES' website for personal, non-commercial transitory viewing only.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">3. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on GRAVITAS INDUSTRIES' website are provided on an 'as is' basis. GRAVITAS INDUSTRIES makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">4. Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall GRAVITAS INDUSTRIES or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GRAVITAS INDUSTRIES' website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">5. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
