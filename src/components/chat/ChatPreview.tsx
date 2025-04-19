
import React from "react";
import { format } from "date-fns";
import { Chat, ServiceProvider } from "@/types";
import { cn } from "@/lib/utils";

interface ChatPreviewProps {
  chat: Chat;
  provider: ServiceProvider;
  isActive: boolean;
  onClick: () => void;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({ chat, provider, isActive, onClick }) => {
  // Format the timestamp
  const formatTimestamp = (timestamp: string) => {
    try {
      const date = new Date(timestamp);
      const today = new Date();
      
      if (date.toDateString() === today.toDateString()) {
        return format(date, 'h:mm a');
      }
      
      return format(date, 'MMM d');
    } catch (e) {
      return '';
    }
  };
  
  return (
    <div 
      className={cn(
        "p-3 rounded-lg mb-1 cursor-pointer transition-colors",
        isActive ? "bg-primary/10" : "hover:bg-secondary"
      )}
      onClick={onClick}
    >
      <div className="flex gap-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={provider.avatar} 
              alt={provider.alias}
              className="w-full h-full object-cover"
            />
          </div>
          {chat.unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {chat.unreadCount > 9 ? '9+' : chat.unreadCount}
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline">
            <h4 className="font-medium truncate">{provider.alias}</h4>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {formatTimestamp(chat.lastMessage.timestamp)}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground truncate">
            {chat.lastMessage.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;
