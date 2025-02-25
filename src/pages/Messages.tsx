
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, ChevronDown, ChevronUp } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  senderAvatar: string;
  content: string;
  time: string;
  replies?: Reply[];
  isRead?: boolean;
}

interface Reply {
  id: number;
  sender: "parent" | "student";
  content: string;
  time: string;
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Mrs. Smith",
      senderAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400",
      content: "Parent-teacher meeting scheduled for next week. Please confirm your availability for the same.",
      time: "10:30 AM",
      isRead: false,
      replies: [
        {
          id: 101,
          sender: "parent",
          content: "Thank you for the information. We will be available for the meeting.",
          time: "11:45 AM"
        }
      ]
    },
    {
      id: 2,
      sender: "Principal Johnson",
      senderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400",
      content: "School event announcement: Annual Sports Day will be held on the 15th of next month. All students are encouraged to participate.",
      time: "Yesterday",
      isRead: true,
      replies: []
    },
    {
      id: 3,
      sender: "Math Department",
      senderAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400",
      content: "Homework reminder for Algebra class: Please complete exercises 5-10 from chapter 3 by tomorrow.",
      time: "2 days ago",
      isRead: true,
      replies: [
        {
          id: 301,
          sender: "student",
          content: "I'm having trouble with exercise 8. Can I get some clarification?",
          time: "2 days ago"
        },
        {
          id: 302,
          sender: "parent",
          content: "My child will complete the homework tonight. Thank you for the reminder.",
          time: "2 days ago"
        }
      ]
    },
  ]);

  const [activeMessage, setActiveMessage] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleReply = (messageId: number) => {
    if (replyText.trim() === "") return;

    setMessages(prevMessages => {
      return prevMessages.map(message => {
        if (message.id === messageId) {
          const newReply: Reply = {
            id: Date.now(),
            sender: "parent", // Assuming parent is replying
            content: replyText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };

          return {
            ...message,
            replies: [...(message.replies || []), newReply]
          };
        }
        return message;
      });
    });

    setReplyText("");
  };

  const toggleMessageExpand = (messageId: number) => {
    setActiveMessage(prev => prev === messageId ? null : messageId);
    
    // Mark message as read when expanded
    setMessages(prevMessages => {
      return prevMessages.map(message => {
        if (message.id === messageId && !message.isRead) {
          return { ...message, isRead: true };
        }
        return message;
      });
    });
  };

  const filteredMessages = messages.filter(message => 
    message.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold" style={{ color: "#0B6623" }}>Messages</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-muted-foreground">{unreadCount} unread message(s)</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <div className="mb-6">
            <Input
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <ScrollArea className="h-[600px]">
            <div className="space-y-6">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-lg border ${!message.isRead ? 'border-[#0B6623]' : 'border-border'}`}
                >
                  <div 
                    className="p-4 rounded-t-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                    onClick={() => toggleMessageExpand(message.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3 items-start">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={message.senderAvatar} alt={message.sender} />
                          <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold" style={{ color: !message.isRead ? "#0B6623" : "" }}>
                              {message.sender}
                            </h3>
                            {!message.isRead && (
                              <span className="w-2 h-2 rounded-full bg-[#0B6623]"></span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{message.time}</span>
                        </div>
                      </div>
                      {activeMessage === message.id ? 
                        <ChevronUp className="h-5 w-5" /> : 
                        <ChevronDown className="h-5 w-5" />
                      }
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{message.content}</p>
                  </div>
                  
                  {activeMessage === message.id && (
                    <div className="p-4 border-t">
                      {message.replies && message.replies.length > 0 && (
                        <div className="space-y-4 mb-4">
                          <h4 className="text-sm font-medium" style={{ color: "#0B6623" }}>Replies</h4>
                          {message.replies.map(reply => (
                            <div 
                              key={reply.id} 
                              className={`p-3 rounded-lg text-sm ${
                                reply.sender === "parent" 
                                  ? "bg-[#0B6623]/10 ml-auto max-w-[80%]" 
                                  : "bg-gray-100 mr-auto max-w-[80%]"
                              }`}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium">
                                  {reply.sender === "parent" ? "You" : "Student"}
                                </span>
                                <span className="text-xs text-gray-500">{reply.time}</span>
                              </div>
                              <p>{reply.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        <Textarea 
                          placeholder="Type your reply..." 
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          className="min-h-[80px]"
                        />
                        <Button 
                          onClick={() => handleReply(message.id)}
                          className="self-end"
                          style={{ backgroundColor: "#0B6623" }}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}
