
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Camera } from "lucide-react";

const ProfileSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
            <div className="w-full h-full flex items-center justify-center">
              <User size={48} className="text-muted-foreground" />
            </div>
          </div>
          <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-primary text-primary-foreground">
            <Camera size={16} />
          </button>
        </div>
        
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-semibold text-lg">Profile Picture</h3>
          <p className="text-sm text-muted-foreground">
            Upload a profile picture or avatar.
            You can use our anonymous options if you prefer privacy.
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="alias">Alias / Display Name</Label>
            <Input id="alias" placeholder="Your display name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City, Country" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea 
            id="bio" 
            placeholder="Tell others about yourself..."
            className="min-h-[100px]"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tags">Tags (Comma separated)</Label>
          <Input id="tags" placeholder="e.g. Tech, Remote, Evening" />
        </div>
      </div>
      
      <div className="pt-4">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
