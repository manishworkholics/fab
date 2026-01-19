import { useState } from "react";
import { Search, Send } from "lucide-react";
import Button from "@/components/ui/Buttons";
import { Input } from "@/components/ui/Input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Textarea } from "@/components/ui/Textarea";
import DashboardLayout from "@/pages/Dasboard/layout";
import { contactsData, messages } from "@/utils/constant";

interface Contact {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  text: string;
  time: string;
  isOwn: boolean;
}

const Chat = () => {
  const [selectedContactId, setSelectedContactId] = useState<string>("1");
  const [messageText, setMessageText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [messageHistories, setMessageHistories] = useState<Record<string, Message[]>>(messages);
  const contacts: Contact[] = contactsData;

  const selectedContact = contacts.find((c) => c.id === selectedContactId);
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "me",
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isOwn: true,
    };
    setMessageHistories((prev) => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), newMessage],
    }));
    setMessageText("");
  };

  return (
    <DashboardLayout header="Messages" noPadding>
      <div className="flex h-full bg-background">
        <div className="w-80 border-r border-border bg-card flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedContactId(contact.id)}
                className={`p-4 border-b border-border cursor-pointer hover:bg-accent/50 transition-colors ${
                  selectedContactId === contact.id ? "bg-accent" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={contact.avatar} />
                      <AvatarFallback>
                        {contact.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {contact.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm truncate">{contact.name}</h3>
                      <span className="text-xs text-muted-foreground">{contact.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{contact.company}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {contact.lastMessage}
                    </p>
                  </div>
                  {contact.unreadCount && (
                    <Badge variant="destructive" className="text-xs">
                      {contact.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {selectedContact ? (
            <>
              <div className="p-4 border-b border-border bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={selectedContact.avatar} />
                      <AvatarFallback>
                        {selectedContact.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {selectedContact.name} | {selectedContact.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">{selectedContact.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {(messageHistories[selectedContactId] || []).map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex items-start gap-2 max-w-xs">
                        {!message.isOwn && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={selectedContact.avatar} />
                            <AvatarFallback>
                              {selectedContact.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-muted-foreground">
                              {message.isOwn ? "You" : selectedContact.name}
                            </span>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <div
                            className={`p-3 rounded-lg text-sm ${
                              message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            {message.text}
                          </div>
                        </div>
                        {message.isOwn && (
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>You</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-border bg-card">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type here..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="resize-none min-h-[40px] max-h-[120px]"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!messageText.trim()}
                    className="shrink-0"
                    leftIcon={<Send className="h-4 w-4" />}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
