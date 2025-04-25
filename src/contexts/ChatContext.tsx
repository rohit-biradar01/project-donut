import React, { createContext, useContext, useState } from "react";
import { Chat, Message } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { generateResponse } from '@/utils/chatResponses';

type ChatContextType = {
  chats: Chat[];
  messages: Record<string, Message[]>;
  activeChat: string | null;
  setActiveChat: (chatId: string | null) => void;
  sendMessage: (chatId: string, text: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Mock initial data
const initialChats: Chat[] = [
  {
    id: "c1",
    participants: ["user", "p1"],
    lastMessage: {
      id: "m3",
      senderId: "p1",
      receiverId: "user",
      text: "Looking forward to our appointment tomorrow!",
      timestamp: "2025-04-18T15:30:00",
      isRead: false
    },
    unreadCount: 1
  },
  {
    id: "c2",
    participants: ["user", "p2"],
    lastMessage: {
      id: "m6",
      senderId: "user",
      receiverId: "p2",
      text: "Thanks for the session yesterday, it was very helpful.",
      timestamp: "2025-04-17T12:15:00",
      isRead: true
    },
    unreadCount: 0
  },
  {
    id: "c3",
    participants: ["user", "p5"],
    lastMessage: {
      id: "m9",
      senderId: "p5",
      receiverId: "user",
      text: "I've prepared some additional materials for our next tutoring session.",
      timestamp: "2025-04-18T09:45:00",
      isRead: false
    },
    unreadCount: 3
  }
];

const initialMessages: Record<string, Message[]> = {
  c1: [
    {
      id: "m1",
      senderId: "user",
      receiverId: "p1",
      text: "Hi there! I'm interested in booking a session with you.",
      timestamp: "2025-04-18T14:30:00",
      isRead: true
    },
    {
      id: "m2",
      senderId: "p1",
      receiverId: "user",
      text: "Hey! I'd be happy to help you out! What service were you interested in?",
      timestamp: "2025-04-18T14:45:00",
      isRead: true
    },
    {
      id: "m3",
      senderId: "p1",
      receiverId: "user",
      text: "Looking forward to our appointment tomorrow! Can't wait to see you!",
      timestamp: "2025-04-18T15:30:00",
      isRead: false
    }
  ],
  c2: [
    {
      id: "m4",
      senderId: "p2",
      receiverId: "user",
      text: "Your nutrition plan is all set! Let me know if you have any questions!",
      timestamp: "2025-04-16T10:30:00",
      isRead: true
    },
    {
      id: "m5",
      senderId: "user",
      receiverId: "p2",
      text: "Thanks! I'll review it and get back to you if I need any clarification.",
      timestamp: "2025-04-16T11:00:00",
      isRead: true
    },
    {
      id: "m6",
      senderId: "user",
      receiverId: "p2",
      text: "Thanks for the session yesterday, it was very helpful.",
      timestamp: "2025-04-17T12:15:00",
      isRead: true
    }
  ],
  c3: [
    {
      id: "m7",
      senderId: "user",
      receiverId: "p5",
      text: "Hello, I need help with my calculus homework.",
      timestamp: "2025-04-17T20:00:00",
      isRead: true
    },
    {
      id: "m8",
      senderId: "p5",
      receiverId: "user",
      text: "Sure thing! Send me those tricky problems and we'll tackle them together!",
      timestamp: "2025-04-17T20:15:00",
      isRead: true
    },
    {
      id: "m9",
      senderId: "p5",
      receiverId: "user",
      text: "I've prepared some cool extra materials for our next tutoring session. Can't wait to go through them with you!",
      timestamp: "2025-04-18T09:45:00",
      isRead: false
    }
  ]
};

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const { getProviderById } = useApp();
  
  const sendMessage = (chatId: string, text: string) => {
    const newMessage: Message = {
      id: `m${Date.now()}`,
      senderId: "user",
      receiverId: chatId.includes("p") ? chatId : chats.find(c => c.id === chatId)?.participants.find(p => p !== "user") || "",
      text,
      timestamp: new Date().toISOString(),
      isRead: false
    };
    
    setMessages(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage]
    }));
    
    setChats(prev => 
      prev.map(chat => 
        chat.id === chatId
          ? { ...chat, lastMessage: newMessage, unreadCount: 0 }
          : chat
      )
    );
    
    // Extract provider info to personalize response
    const providerId = chats.find(c => c.id === chatId)?.participants.find(p => p !== "user") || "";
    const provider = getProviderById(providerId);
    
    // Generate casual, context-aware response
    setTimeout(() => {
      const responseText = generateResponse(text, provider?.alias);
      
      const responseMessage: Message = {
        id: `m${Date.now() + 1}`,
        senderId: providerId,
        receiverId: "user",
        text: responseText,
        timestamp: new Date().toISOString(),
        isRead: true
      };
      
      setMessages(prev => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), responseMessage]
      }));
      
      setChats(prev => 
        prev.map(chat => 
          chat.id === chatId
            ? { ...chat, lastMessage: responseMessage }
            : chat
        )
      );
    }, 1000 + Math.random() * 1500);
  };
  
  return (
    <ChatContext.Provider 
      value={{ 
        chats,
        messages,
        activeChat,
        setActiveChat,
        sendMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  
  return context;
}
