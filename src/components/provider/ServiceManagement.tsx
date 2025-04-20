
import React, { useState } from 'react';
import { DollarSign, Clock, PenLine, Plus, Save, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Service } from '@/types';

// Simulate an API with fake provider data
const fakeServices: Service[] = [
  {
    id: "s1",
    title: "Sports Recovery",
    price: 140,
    duration: 60,
    description: "Full sports massage focusing on recovery and injury prevention."
  },
  {
    id: "s2",
    title: "Deep Relaxation",
    price: 120,
    duration: 60,
    description: "A relaxing experience to reduce stress and promote wellbeing."
  },
  {
    id: "s3",
    title: "Express Session",
    price: 80,
    duration: 30,
    description: "Quick targeted session for specific areas of tension."
  }
];

const ServiceManagement: React.FC = () => {
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>(fakeServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  
  const [formData, setFormData] = useState<Service>({
    id: '',
    title: '',
    price: 0,
    duration: 0,
    description: ''
  });
  
  const handleOpenDialog = (service?: Service) => {
    if (service) {
      setFormData({ ...service });
      setEditingService(service);
    } else {
      setFormData({
        id: `s${Date.now()}`, // Generate a temporary ID
        title: '',
        price: 0,
        duration: 60,
        description: ''
      });
      setEditingService(null);
    }
    setIsDialogOpen(true);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'duration' ? Number(value) : value
    }));
  };
  
  const handleSaveService = () => {
    // Validate form
    if (!formData.title || formData.price <= 0 || formData.duration <= 0) {
      toast({
        title: "Invalid service details",
        description: "Please fill all required fields with valid values",
        variant: "destructive"
      });
      return;
    }
    
    // Create or update service
    if (editingService) {
      // Update existing service
      setServices(prev => prev.map(s => 
        s.id === formData.id ? formData : s
      ));
      toast({
        title: "Service updated",
        description: `${formData.title} has been updated successfully`
      });
    } else {
      // Add new service
      setServices(prev => [...prev, formData]);
      toast({
        title: "Service added",
        description: `${formData.title} has been added to your services`
      });
    }
    
    // Close dialog and reset form
    setIsDialogOpen(false);
  };
  
  const handleDeleteService = (serviceId: string) => {
    setServices(prev => prev.filter(s => s.id !== serviceId));
    setIsDialogOpen(false);
    
    toast({
      title: "Service removed",
      description: "The service has been removed from your profile",
      variant: "destructive"
    });
  };
  
  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-display">Services</h2>
        <Button onClick={() => handleOpenDialog()} className="group hover:scale-105 transition-transform">
          <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
          Add Service
        </Button>
      </div>
      
      <div className="grid gap-6">
        {services.map(service => (
          <Card key={service.id} className="bg-glass hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle>{service.title}</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0" 
                  onClick={() => handleOpenDialog(service)}
                >
                  <PenLine className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="font-semibold">${service.price}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                  <span>{service.duration} min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingService ? 'Edit Service' : 'Add New Service'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Service Title
              </label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Sports Recovery"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="price" className="block text-sm font-medium mb-1">
                  Price ($)
                </label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium mb-1">
                  Duration (minutes)
                </label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  min="15"
                  step="15"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="60"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your service..."
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter className="flex sm:justify-between">
            {editingService && (
              <Button 
                variant="destructive" 
                onClick={() => handleDeleteService(editingService.id)}
                className="flex items-center"
                size="sm"
              >
                <X className="mr-2 h-4 w-4" />
                Delete Service
              </Button>
            )}
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveService} className="flex items-center btn-glow">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceManagement;
