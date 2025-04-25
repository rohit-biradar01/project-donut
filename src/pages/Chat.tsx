
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatBox from "@/components/chat/ChatBox";
import { useChat } from "@/contexts/ChatContext";
import { toast } from "@/hooks/use-toast";

const Chat: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { chats, setActiveChat } = useChat();
  const [showSidebar, setShowSidebar] = useState(true);
  
  useEffect(() => {
    // If an ID is provided in the URL, set it as the active chat
    if (id) {
      // Check if this is a known chat
      const chatId = chats.find(c => c.participants.includes(id))?.id;
      
      if (chatId) {
        setActiveChat(chatId);
        
        // Show a welcome toast when a specific chat is opened
        toast({
          title: "Chat opened",
          description: "Start your conversation with this provider!",
          duration: 3000
        });
      } else {
        // This might be a new chat, we could handle that here
        console.log("Chat not found for provider:", id);
        toast({
          title: "New conversation",
          description: "Send a message to start chatting!",
          duration: 3000,
          variant: "default"
        });
      }
    }
  }, [id, chats, setActiveChat]);
  
  // For mobile: when a chat is selected, hide the sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowSidebar(!id);
      } else {
        setShowSidebar(true);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);
  
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Messages
        </h1>
        <p className="text-muted-foreground">
          Chat with your favorite service providers in a friendly, secure environment
        </p>
      </div>
      
      <div className="h-[calc(100vh-220px)] border border-border rounded-xl overflow-hidden bg-glass">
        <div className="h-full flex">
          {showSidebar && (
            <div className="w-full md:w-80 border-r border-border">
              <ChatSidebar />
            </div>
          )}
          
          <div className="flex-1">
            <ChatBox 
              backToList={() => setShowSidebar(true)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
