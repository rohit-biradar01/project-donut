
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Lock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true' || 
                         sessionStorage.getItem('hasVisitedAuth') === 'true';

  const handleCreateProfile = () => {
    if (isAuthenticated) {
      // If already logged in, go to settings
      navigate('/settings');
    } else {
      // If not logged in, redirect to auth page
      navigate('/auth');
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 animate-fade-in">
            Book services securely,{" "}
            <span className="text-primary">on your terms.</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect with verified service providers for anonymous, secure, and customized booking experiences. Privacy and quality assured with every appointment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="btn-glow">
              <Link to="/discover">
                Browse Providers
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleCreateProfile}
            >
              Create Profile
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center p-6 rounded-xl bg-glass animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <ShieldCheck size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Verified Profiles</h3>
              <p className="text-center text-muted-foreground text-sm">
                All service providers are carefully vetted for quality and reliability.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-glass animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Lock size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Private Bookings</h3>
              <p className="text-center text-muted-foreground text-sm">
                Your identity and personal information remain protected throughout.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-glass animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Real-Time Chat</h3>
              <p className="text-center text-muted-foreground text-sm">
                Communicate directly with providers to customize your experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
