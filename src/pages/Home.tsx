
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  BookOpen, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  Bell, 
  ShoppingCart, 
  User, 
  Video, 
  ChevronRight 
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

export default function Home() {
  const { toast } = useToast();
  const [leaveDate, setLeaveDate] = useState<Date | undefined>(new Date());
  const [leaveEndDate, setLeaveEndDate] = useState<Date | undefined>(new Date());
  const [leaveMessage, setLeaveMessage] = useState("");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      teacher: "Mrs. Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400",
      message: "Your child has been performing exceptionally well in science class this week.",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      teacher: "Mr. Davis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400",
      message: "Please submit the permission slip for the upcoming museum trip by Friday.",
      time: "Yesterday",
      unread: false
    },
    {
      id: 3,
      teacher: "Principal Williams",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400",
      message: "School will be closing early on Friday due to teacher training.",
      time: "3 days ago",
      unread: false
    }
  ]);

  const performanceData = [
    { subject: "Math", score: 87, average: 72, best: 95 },
    { subject: "Science", score: 92, average: 75, best: 98 },
    { subject: "English", score: 78, average: 70, best: 90 },
    { subject: "History", score: 85, average: 68, best: 88 },
    { subject: "Art", score: 95, average: 82, best: 97 }
  ];

  const purchases = [
    { id: 1, item: "Science Textbook", date: "15 Apr 2023", price: "$45.99" },
    { id: 2, item: "Annual School Trip", date: "02 Mar 2023", price: "$120.00" },
    { id: 3, item: "Art Supplies Kit", date: "18 Feb 2023", price: "$32.50" }
  ];

  const upcomingHolidays = [
    { date: "May 25", name: "Summer Break Begins" },
    { date: "Jun 19", name: "Founder's Day" },
    { date: "Jul 4", name: "Independence Day" }
  ];

  const schoolDetails = {
    name: "Springfield Elementary School",
    board: "CBSE",
    address: "123 Education Lane, Springfield",
    phone: "(555) 123-4567",
    website: "www.springfieldelementary.edu",
    principalName: "Dr. Eleanor Thompson"
  };

  const handleSubmitLeave = () => {
    if (!leaveDate || !leaveEndDate || !leaveMessage) {
      toast({
        title: "Missing information",
        description: "Please fill all the required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Leave request submitted",
      description: "Your leave request has been sent to your teacher for approval.",
    });

    // Add a notification to simulate the approval process
    setTimeout(() => {
      setNotifications(prev => [
        {
          id: Date.now(),
          teacher: "Principal Williams",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400",
          message: "Your leave request has been approved.",
          time: "Just now",
          unread: true
        },
        ...prev
      ]);

      toast({
        title: "Leave approved",
        description: "Your leave request has been approved by Principal Williams.",
      });
    }, 5000);
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? {...notification, unread: false} : notification
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            {notifications.filter(n => n.unread).length > 0 && (
              <Badge className="ml-1 bg-red-500 text-white">{notifications.filter(n => n.unread).length}</Badge>
            )}
          </Button>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* School Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              My School
            </CardTitle>
            <CardDescription>Information about your school</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{schoolDetails.name}</h3>
                <Badge>{schoolDetails.board}</Badge>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><span className="font-medium">Address:</span> {schoolDetails.address}</p>
                <p><span className="font-medium">Phone:</span> {schoolDetails.phone}</p>
                <p><span className="font-medium">Website:</span> {schoolDetails.website}</p>
                <p><span className="font-medium">Principal:</span> {schoolDetails.principalName}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="h-5 w-5 mr-2" />
              Performance Overview
            </CardTitle>
            <CardDescription>Your academic performance compared to class averages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#8884d8" name="Your Score" />
                  <Bar dataKey="average" fill="#82ca9d" name="Class Average" />
                  <Bar dataKey="best" fill="#ffc658" name="Best Score" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="h-4 w-4 mr-2" />
                    Join Online Class
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Join Online Class</DialogTitle>
                    <DialogDescription>Select a class to join from the available options</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      {["Math - 10:00 AM", "Science - 11:30 AM", "English - 2:00 PM"].map((cls, i) => (
                        <Button key={i} variant="outline" className="w-full justify-between">
                          {cls}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Apply for Leave
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Apply for Leave</DialogTitle>
                    <DialogDescription>Select date range and provide reason</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">From Date</label>
                        <Calendar
                          mode="single"
                          selected={leaveDate}
                          onSelect={setLeaveDate}
                          className="rounded-md border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">To Date</label>
                        <Calendar
                          mode="single"
                          selected={leaveEndDate}
                          onSelect={setLeaveEndDate}
                          className="rounded-md border"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message to Teacher</label>
                      <Textarea 
                        placeholder="Please explain the reason for your leave..."
                        value={leaveMessage}
                        onChange={(e) => setLeaveMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleSubmitLeave}>Submit Request</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Holidays Card */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Holidays</CardTitle>
            <CardDescription>School holidays and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingHolidays.map((holiday, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{holiday.name}</p>
                      <p className="text-sm text-muted-foreground">{holiday.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="link" className="p-0" onClick={() => window.location.href="/calendar"}>
                View full calendar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Purchases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Recent Purchases
            </CardTitle>
            <CardDescription>Your recent transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">{purchase.item}</p>
                    <p className="text-sm text-muted-foreground">{purchase.date}</p>
                  </div>
                  <p className="font-semibold">{purchase.price}</p>
                </div>
              ))}
              <Button variant="link" className="p-0">View all purchases</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </CardTitle>
            <CardDescription>Messages from teachers and school</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`flex p-3 rounded-lg ${notification.unread ? 'bg-secondary' : ''}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={notification.avatar} />
                      <AvatarFallback>{notification.teacher[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">{notification.teacher}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                      <p className="text-sm mt-1">{notification.message}</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </div>
                    {notification.unread && (
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
