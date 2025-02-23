
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  {
    id: 1,
    sender: "Mrs. Smith",
    content: "Parent-teacher meeting scheduled for next week.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "Principal Johnson",
    content: "School event announcement: Annual Sports Day",
    time: "Yesterday",
  },
  {
    id: 3,
    sender: "Math Department",
    content: "Homework reminder for Algebra class",
    time: "2 days ago",
  },
];

export default function Messages() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Messages</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <Input
            placeholder="Search messages..."
            className="mb-6"
          />
          <ScrollArea className="h-[500px]">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{message.sender}</h3>
                    <span className="text-sm text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{message.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}
