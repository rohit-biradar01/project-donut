
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';

const CallToAction: React.FC = () => {
  const { user } = useApp();
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
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
          Ready to Find Your Perfect <span className="text-primary">Match?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of satisfied clients who have found their ideal service provider through our platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="btn-glow text-lg font-medium px-8 py-6 h-auto animate-in fade-in-50 duration-300"
            onClick={handleCreateProfile}
          >
            Create Profile
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-primary text-lg font-medium px-8 py-6 h-auto hover:bg-primary/10 animate-in fade-in-50 duration-300 delay-100"
          >
            <Link to="/discover">
              Browse Providers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
