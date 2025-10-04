import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Project details and requirements</li>
              <li>Communication preferences</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about projects, services, and events</li>
              <li>Improve our website and services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">3. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. Contact us to exercise these rights.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
