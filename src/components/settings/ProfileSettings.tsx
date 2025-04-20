
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Camera, Trash2 } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Sample stock avatars
const stockAvatars = [
  "/avatars/stock-avatar-1.jpg",
  "/avatars/stock-avatar-2.jpg",
  "/avatars/stock-avatar-3.jpg",
  "/avatars/stock-avatar-4.jpg",
];

const ProfileSettings: React.FC = () => {
  const { profileImage, setProfileImage, user } = useApp();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [stockAvatarDialogOpen, setStockAvatarDialogOpen] = useState(false);

  // Form state
  const [alias, setAlias] = useState("Demo User");
  const [location, setLocation] = useState("New York, USA");
  const [bio, setBio] = useState("");
  const [tags, setTags] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPG, PNG, or WebP image",
        variant: "destructive",
      });
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Image size must be less than 5MB",
        variant: "destructive",
      });
      return;
    }

    // Create a URL for the uploaded image
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);

    toast({
      title: "Profile picture updated",
      description: "Your new profile picture has been set",
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    toast({
      title: "Profile picture removed",
      description: "Your profile picture has been removed",
    });
  };

  const handleSaveChanges = () => {
    // Save profile changes (demo only)
    toast({
      title: "Profile updated",
      description: "Your profile changes have been saved",
    });
  };

  const handleStockAvatarSelect = (avatarUrl: string) => {
    setProfileImage(avatarUrl);
    setStockAvatarDialogOpen(false);
    toast({
      title: "Profile picture updated",
      description: "Your new profile picture has been set",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-muted transition-all group-hover:shadow-neon-md">
            {profileImage ? (
              <Avatar className="w-24 h-24">
                <AvatarImage src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                <AvatarFallback className="w-24 h-24 bg-primary/20">
                  <User size={48} className="text-primary" />
                </AvatarFallback>
              </Avatar>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User size={48} className="text-muted-foreground" />
              </div>
            )}
          </div>
          
          <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer" onClick={triggerFileInput}>
            <Camera size={24} className="text-white" />
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
          />
        </div>
        
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-semibold text-lg">Profile Picture</h3>
          <p className="text-sm text-muted-foreground">
            Upload a profile picture or avatar.
            You can use our anonymous options if you prefer privacy.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs flex gap-1 border-primary/30"
              onClick={triggerFileInput}
            >
              <Camera size={14} />
              Upload Image
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs flex gap-1 bg-secondary/50 border-primary/30"
              onClick={() => setStockAvatarDialogOpen(true)}
            >
              <User size={14} />
              Use Stock Avatar
            </Button>
            
            {profileImage && (
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs flex gap-1 text-destructive border-destructive/30 hover:bg-destructive/10"
                onClick={handleRemoveImage}
              >
                <Trash2 size={14} />
                Remove
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="alias">Alias / Display Name</Label>
            <Input 
              id="alias" 
              placeholder="Your display name" 
              value={alias} 
              onChange={(e) => setAlias(e.target.value)}
              className="bg-glass"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              placeholder="City, Country" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              className="bg-glass"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea 
            id="bio" 
            placeholder="Tell others about yourself..."
            className="min-h-[100px] bg-glass"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tags">Tags (Comma separated)</Label>
          <Input 
            id="tags" 
            placeholder="e.g. Tech, Remote, Evening" 
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="bg-glass"
          />
        </div>
      </div>
      
      <div className="pt-4">
        <Button 
          onClick={handleSaveChanges}
          className="btn-glow shadow-neon-sm hover:shadow-neon-md"
        >
          Save Changes
        </Button>
      </div>

      {/* Stock Avatar Selection Dialog */}
      <Dialog open={stockAvatarDialogOpen} onOpenChange={setStockAvatarDialogOpen}>
        <DialogContent className="sm:max-w-md bg-glass">
          <DialogHeader>
            <DialogTitle>Choose a Stock Avatar</DialogTitle>
            <DialogDescription>
              Select one of our pre-defined avatar images for your profile.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {stockAvatars.map((avatar, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                onClick={() => handleStockAvatarSelect(avatar)}
              >
                <img 
                  src={avatar} 
                  alt={`Avatar option ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStockAvatarDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileSettings;
