
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Service } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";
import { Clock, DollarSign, PenLine, Trash2, Plus, MoreHorizontal, ImagePlus } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const ServiceEditor: React.FC = () => {
  const { providerServices, addService, updateService, deleteService } = useApp();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);
  
  // New service form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [duration, setDuration] = useState<number>(60);
  const [imageUrl, setImageUrl] = useState("");
  
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPrice(0);
    setDuration(60);
    setImageUrl("");
    setEditingService(null);
  };
  
  const handleOpenNewServiceDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };
  
  const handleEditService = (service: Service) => {
    setEditingService(service);
    setTitle(service.title);
    setDescription(service.description);
    setPrice(service.price);
    setDuration(service.duration);
    setImageUrl(service.imageUrl || "");
    setIsDialogOpen(true);
  };
  
  const handleDeleteService = (serviceId: string) => {
    setServiceToDelete(serviceId);
    setShowDeleteConfirm(true);
  };
  
  const confirmDeleteService = () => {
    if (serviceToDelete) {
      deleteService(serviceToDelete);
      setShowDeleteConfirm(false);
      setServiceToDelete(null);
      
      toast({
        title: "Service deleted",
        description: "The service has been removed from your profile",
      });
    }
  };
  
  const handleSaveService = () => {
    if (!title || price <= 0 || duration <= 0) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Create the service object
    const serviceData: Service = {
      id: editingService?.id || `service_${Date.now()}`,
      title,
      description,
      price,
      duration,
      imageUrl: imageUrl || "https://placehold.co/600x400?text=Service+Image",
    };
    
    // Simulate delay
    setTimeout(() => {
      if (editingService) {
        updateService(serviceData);
        toast({
          title: "Service updated",
          description: "Your service details have been updated",
        });
      } else {
        addService(serviceData);
        toast({
          title: "Service added",
          description: "Your new service has been added to your profile",
        });
      }
      
      setIsLoading(false);
      setIsDialogOpen(false);
      resetForm();
    }, 800);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold font-display">Your Services</h2>
        <Button onClick={handleOpenNewServiceDialog} className="btn-glow flex items-center gap-2 hover:scale-105 transition-transform">
          <Plus size={16} />
          Add New Service
        </Button>
      </div>
      
      {providerServices.length === 0 ? (
        <div className="bg-glass rounded-xl p-10 text-center border border-border">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <PenLine size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-2">No Services Yet</h3>
          <p className="text-muted-foreground mb-4">
            Add your first service to start getting bookings
          </p>
          <Button onClick={handleOpenNewServiceDialog} className="btn-glow flex items-center gap-2 mx-auto">
            <Plus size={16} />
            Create Your First Service
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {providerServices.map((service) => (
            <Card key={service.id} className="bg-glass overflow-hidden transition-all duration-300 hover:shadow-glow group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={service.imageUrl || "https://placehold.co/600x400?text=Service+Image"} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="icon" className="rounded-full h-8 w-8 bg-background/80 backdrop-blur-sm">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditService(service)} className="cursor-pointer flex items-center gap-2">
                        <PenLine size={14} />
                        <span>Edit Service</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteService(service.id)} className="cursor-pointer text-destructive focus:text-destructive flex items-center gap-2">
                        <Trash2 size={14} />
                        <span>Delete Service</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold line-clamp-1">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{service.description}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <Clock size={16} className="text-muted-foreground" />
                    <span>{service.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <DollarSign size={16} className="text-muted-foreground" />
                    <span>${service.price}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button 
                  variant="outline"
                  className="w-full hover:bg-primary/10 group-hover:border-primary transition-all"
                  onClick={() => handleEditService(service)}
                >
                  Edit Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      
      {/* Service Editor Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{editingService ? "Edit Service" : "Add New Service"}</DialogTitle>
            <DialogDescription>
              {editingService 
                ? "Update your service details below. Click save when you're done." 
                : "Fill out the form below to add a new service to your profile."
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Service Title*</Label>
              <Input 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Professional Massage"
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what this service includes..."
                rows={4}
                className="bg-background/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)*</Label>
                <div className="relative">
                  <DollarSign size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    min={0}
                    className="pl-8 bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)*</Label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    min={15}
                    step={15}
                    className="pl-8 bg-background/50"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <div className="relative">
                <ImagePlus size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  id="image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="pl-8 bg-background/50"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSaveService}
              disabled={isLoading}
              className="btn-glow"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full"></span>
                  Saving...
                </>
              ) : (
                <>Save Service</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this service? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteService}>
              Delete Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceEditor;
