
import React from "react";
import { format } from "date-fns";
import { Message } from "@/types";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
  isUser: boolean;
  providerAvatar: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser, providerAvatar }) => {
  // Format the timestamp
  const formatTimestamp = (timestamp: string) => {
    try {
      return format(new Date(timestamp), "h:mm a");
    } catch (e) {
      return "";
    }
  };
  
  return (
    <div className={cn(
      "flex items-end gap-2 max-w-[80%]",
      isUser ? "ml-auto" : ""
    )}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={providerAvatar} 
            alt="Provider"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={cn(
        "py-2 px-3 rounded-2xl",
        isUser 
          ? "bg-primary text-primary-foreground rounded-br-none" 
          : "bg-glass rounded-bl-none"
      )}>
        <p className="text-sm">{message.text}</p>
        <div className={cn(
          "text-[10px] mt-1",
          isUser ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
