
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Testimonials from '@/components/landing/Testimonials';
import TrustBadges from '@/components/landing/TrustBadges';
import CallToAction from '@/components/landing/CallToAction';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  // Improved authentication persistence - store in both session and localStorage
  React.useEffect(() => {
    const handleNavigation = () => {
      sessionStorage.setItem('hasVisitedAuth', 'true');
      localStorage.setItem('isLoggedIn', 'true');
    };
    
    // Add event listener
    window.addEventListener('beforeunload', handleNavigation);
    
    // Clean up
    return () => {
      window.removeEventListener('beforeunload', handleNavigation);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <TrustBadges />
      <CallToAction />
    </Layout>
  );
};

export default Index;
