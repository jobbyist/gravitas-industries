import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, LogIn } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication in Phase 2
    console.log(isSignUp ? "Sign up submitted" : "Login submitted");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-wide">
            {isSignUp ? "Join GRAVITAS" : "Welcome Back"}
          </DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground mb-4">
          {isSignUp 
            ? "Create an account to access exclusive features and digital asset insights."
            : "Log in to your account to continue."}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name *</Label>
              <Input 
                id="fullname" 
                placeholder="John Doe" 
                required 
                className="bg-card border-border"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="auth-email">Email Address *</Label>
            <Input 
              id="auth-email" 
              type="email" 
              placeholder="john@example.com" 
              required 
              className="bg-card border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="auth-password">Password *</Label>
            <Input 
              id="auth-password" 
              type="password" 
              placeholder="Enter your password" 
              required 
              className="bg-card border-border"
            />
          </div>

          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password *</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="Confirm your password" 
                required 
                className="bg-card border-border"
              />
            </div>
          )}
          
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {isSignUp ? (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Log In
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary hover:underline"
          >
            {isSignUp 
              ? "Already have an account? Log in" 
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
