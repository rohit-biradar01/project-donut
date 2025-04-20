
import React from "react";
import ServiceEditor from "./ServiceEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServiceManagement = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold font-display">Service Management</h2>
      
      <Tabs defaultValue="services">
        <TabsList>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
        </TabsList>
        
        <TabsContent value="services" className="animate-in fade-in-50 pt-4">
          <ServiceEditor />
        </TabsContent>
        
        <TabsContent value="availability" className="animate-in fade-in-50 pt-4">
          <div className="bg-glass p-6 rounded-xl text-center">
            <h3 className="text-xl mb-3">Calendar Management</h3>
            <p className="text-muted-foreground">
              Calendar management features coming soon. You'll be able to set your availability and manage your schedule.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceManagement;
