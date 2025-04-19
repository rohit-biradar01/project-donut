
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatPreview from './ChatPreview';
import { useChat } from '@/contexts/ChatContext';
import { useApp } from '@/contexts/AppContext';

const ChatSidebar: React.FC = () => {
  const { chats, activeChat, setActiveChat } = useChat();
  const { getProviderById } = useApp();
  
  return (
    <div className="h-full flex flex-col border-r border-border">
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search conversations..." className="pl-10" />
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-2">
        {chats.length > 0 ? (
          chats.map(chat => {
            const providerId = chat.participants.find(p => p !== 'user');
            const provider = providerId ? getProviderById(providerId) : undefined;
            
            if (!provider) return null;
            
            return (
              <ChatPreview
                key={chat.id}
                chat={chat}
                provider={provider}
                isActive={activeChat === chat.id}
                onClick={() => setActiveChat(chat.id)}
              />
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <h3 className="font-semibold mb-2">No conversations yet</h3>
            <p className="text-sm text-muted-foreground">
              Start booking with providers to begin messaging
            </p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
