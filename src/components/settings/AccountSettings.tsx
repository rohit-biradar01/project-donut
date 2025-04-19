
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AccountSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value="user@example.com" readOnly />
          <p className="text-xs text-muted-foreground">
            Your email is private an never shared with providers
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value="••••••••••" readOnly />
        </div>
      </div>
      
      <div className="pt-4 space-y-4">
        <Button variant="outline">Change Password</Button>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="w-full sm:w-auto flex items-center gap-2">
              <Trash2 size={16} />
              Delete Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Your account information, bookings, and messages will be permanently deleted.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm">
              Warning: You will lose access to all your booking history and conversations.
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AccountSettings;
