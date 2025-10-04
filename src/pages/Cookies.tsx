import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Cookies = () => {
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website.</li>
              <li><strong>Preference Cookies:</strong> These cookies allow the website to remember your preferences.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Session Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Temporary cookies that expire when you close your browser.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Persistent Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies that remain on your device for a set period or until you delete them.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">4. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow you to control cookies through their settings. However, limiting cookies may impact your experience on our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">5. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services that set cookies on our website for analytics and advertising purposes. These third parties have their own privacy policies.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about our use of cookies, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
