
import React, { useState, useRef, useEffect } from "react";
import { Send, Phone, Video, MoreHorizontal, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@/contexts/ChatContext";
import { useApp } from "@/contexts/AppContext";
import MessageBubble from "./MessageBubble";
import { toast } from "@/hooks/use-toast";

interface ChatBoxProps {
  backToList?: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ backToList }) => {
  const { activeChat, messages, sendMessage } = useChat();
  const { getProviderById } = useApp();
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const activeMessages = activeChat ? messages[activeChat] || [] : [];
  
  const providerId = activeChat && activeMessages.length > 0 
    ? activeMessages[0].senderId === "user" 
      ? activeMessages[0].receiverId 
      : activeMessages[0].senderId
    : "";
    
  const provider = getProviderById(providerId);
  
  // Randomized placeholder suggestions to encourage conversation
  const placeholders = [
    "Type your message here...",
    "Ask about availability...",
    "Ask what services they offer...",
    "Say hello...",
    "Ask about rates..."
  ];

  // Rotate placeholders every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleSendMessage = () => {
    if (!activeChat || !inputValue.trim()) return;
    
    sendMessage(activeChat, inputValue.trim());
    setInputValue("");
    
    // Simulate typing indication
    const randomDelay = 1000 + Math.random() * 2000;
    setIsTyping(true);
    
    // Focus back on input after sending
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    setTimeout(() => {
      setIsTyping(false);
    }, randomDelay);
  };
  
  // Simulate provider coming online or becoming active occasionally
  useEffect(() => {
    if (provider && activeChat && Math.random() > 0.7) {
      const delay = 10000 + Math.random() * 20000; // 10-30 seconds
      const timeoutId = setTimeout(() => {
        toast({
          title: `${provider.alias} is online`,
          description: "They're active and ready to chat!",
          duration: 3000
        });
      }, delay);
      
      return () => clearTimeout(timeoutId);
    }
  }, [activeChat, provider]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const element = scrollAreaRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [activeMessages]);
  
  if (!activeChat || !provider) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
        <h3 className="font-semibold text-xl mb-2">Select a conversation</h3>
        <p className="text-muted-foreground max-w-md">
          Choose a conversation from the sidebar to start chatting with a provider.
        </p>
      </div>
    );
  }
  
  return (
    <div className="h-full flex flex-col">
      {/* Chat header */}
      <div className="p-3 border-b border-border flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden mr-2"
          onClick={backToList}
        >
          <ChevronLeft size={20} />
        </Button>
        
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src={provider.avatar} 
              alt={provider.alias}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{provider.alias}</h3>
            <p className="text-xs text-muted-foreground">
              {isTyping ? "Typing..." : "Online"}
            </p>
          </div>
        </div>
        
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" onClick={() => toast({ title: "Coming soon", description: "Voice calls will be available in a future update!" })}>
            <Phone size={18} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => toast({ title: "Coming soon", description: "Video calls will be available in a future update!" })}>
            <Video size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal size={18} />
          </Button>
        </div>
      </div>
      
      {/* Chat messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-3">
          {activeMessages.map(message => (
            <MessageBubble 
              key={message.id}
              message={message}
              isUser={message.senderId === "user"}
              providerAvatar={provider.avatar}
            />
          ))}
          
          {isTyping && (
            <div className="flex items-end gap-2 max-w-[80%]">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={provider.avatar} 
                  alt={provider.alias}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-glass rounded-2xl rounded-bl-none py-2 px-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {/* Message input */}
      <div className="p-3 border-t border-border">
        <div className="flex gap-2">
          <Input 
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholders[placeholderIndex]}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="transition-all"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="btn-glow transition-all"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
