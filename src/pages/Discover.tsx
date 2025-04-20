
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import DiscoveryFilters from "@/components/discovery/DiscoveryFilters";
import ProviderGrid from "@/components/discovery/ProviderGrid";
import SectionHeader from "@/components/shared/SectionHeader";
import { useApp } from "@/contexts/AppContext";
import { ServiceProvider } from "@/types";
import { Button } from "@/components/ui/button";
import { Grid3X3, List, Building2 } from "lucide-react";

const Discover: React.FC = () => {
  const { providers, user } = useApp();
  const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>(providers);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();
  
  // Redirect providers away from this page
  useEffect(() => {
    if (user?.isProvider) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  // If the user is a provider, show a restricted access message
  if (user?.isProvider) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <Building2 size={40} className="text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Provider Access Restricted</h1>
          <p className="text-muted-foreground mb-6 max-w-md">
            As a service provider, you don't have access to browse other providers. 
            Please check your dashboard to manage your services and bookings.
          </p>
          <Button onClick={() => navigate('/dashboard')}>
            Go to Dashboard
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleFilter = (filters: any) => {
    let results = [...providers];
    
    // Filter by search term
    if (filters.searchTerm) {
      const searchTerm = filters.searchTerm.toLowerCase();
      results = results.filter(
        provider => 
          provider.alias.toLowerCase().includes(searchTerm) || 
          provider.bio.toLowerCase().includes(searchTerm) || 
          provider.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          provider.services.some(service => 
            service.title.toLowerCase().includes(searchTerm) || 
            service.description.toLowerCase().includes(searchTerm)
          )
      );
    }
    
    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      results = results.filter(
        provider => provider.pricePerHour >= min && provider.pricePerHour <= max
      );
    }
    
    // Filter by tags
    if (filters.selectedTags && filters.selectedTags.length > 0) {
      results = results.filter(
        provider => filters.selectedTags.some((tag: string) => provider.tags.includes(tag))
      );
    }
    
    // Sort results
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "rating":
          results.sort((a, b) => b.rating - a.rating);
          break;
        case "price-low":
          results.sort((a, b) => a.pricePerHour - b.pricePerHour);
          break;
        case "price-high":
          results.sort((a, b) => b.pricePerHour - a.pricePerHour);
          break;
        case "new":
          // Since we don't have a date field, we'll just shuffle the results
          results = results.sort(() => Math.random() - 0.5);
          break;
        default:
          // recommended - default sort, we'll use a combination of rating and reviews
          results.sort((a, b) => (b.rating * Math.log(b.reviewCount + 1)) - (a.rating * Math.log(a.reviewCount + 1)));
      }
    }
    
    setFilteredProviders(results);
  };
  
  const handleSwipe = (providerId: string) => {
    setFilteredProviders(prev => prev.filter(p => p.id !== providerId));
  };

  return (
    <Layout>
      <div className="mb-8">
        <SectionHeader 
          title="Discover Service Providers" 
          description="Browse through our verified professionals and find the perfect match for your needs."
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <DiscoveryFilters onFilter={handleFilter} />
        </div>
        
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div className="text-muted-foreground">
              Showing {filteredProviders.length} providers
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant={viewType === "grid" ? "default" : "outline"} 
                size="icon"
                onClick={() => setViewType("grid")}
              >
                <Grid3X3 size={18} />
              </Button>
              <Button 
                variant={viewType === "list" ? "default" : "outline"} 
                size="icon"
                onClick={() => setViewType("list")}
              >
                <List size={18} />
              </Button>
            </div>
          </div>
          
          <ProviderGrid 
            providers={filteredProviders} 
            onSwipe={handleSwipe} 
            viewType={viewType}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Discover;
