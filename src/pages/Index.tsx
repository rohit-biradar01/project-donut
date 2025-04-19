
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Testimonials from '@/components/landing/Testimonials';
import TrustBadges from '@/components/landing/TrustBadges';
import CallToAction from '@/components/landing/CallToAction';

const Index: React.FC = () => {
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
