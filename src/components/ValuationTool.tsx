import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, FileText } from "lucide-react";

const ValuationTool = () => {
  const [includeAddon, setIncludeAddon] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement valuation tool functionality in Phase 2
    console.log("Valuation requested", { includeAddon });
  };

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Digital Asset Valuation Tool
            </h2>
          </div>
          
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Use this free, AI-powered valuation tool to get a highly accurate monetary value 
            estimation of any digital asset featured in our catalog in less than 5 minutes. 
            The total valuation amount also includes the estimated value of the domain that 
            is connected to every digital asset in our catalog.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="asset-url">Digital Asset URL *</Label>
              <Input 
                id="asset-url" 
                type="url"
                placeholder="https://example.com" 
                required 
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="asset-email">Email Address *</Label>
              <Input 
                id="asset-email" 
                type="email"
                placeholder="your.email@example.com" 
                required 
                className="bg-background border-border"
              />
              <p className="text-sm text-muted-foreground">
                We'll send the valuation report to this email address
              </p>
            </div>

            <div className="bg-background/50 border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="addon" 
                  checked={includeAddon}
                  onCheckedChange={(checked) => setIncludeAddon(checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <label
                    htmlFor="addon"
                    className="text-sm font-medium leading-none cursor-pointer flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Add Comprehensive Audit & Market Viability Report
                    <span className="text-primary font-bold">+$10</span>
                  </label>
                  <p className="text-sm text-muted-foreground mt-2">
                    Get an in-depth viability analysis based on in-depth market research 
                    report powered by Google Gemini's advanced 2.5 Pro AI model.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="submit" size="lg" className="flex-1">
                <Calculator className="mr-2 h-5 w-5" />
                Get Valuation {includeAddon && "(+$10)"}
              </Button>
            </div>

            {includeAddon && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Total: <span className="text-foreground font-semibold">$10.00</span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ValuationTool;
