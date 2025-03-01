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
  ChevronRight,
  Image,
  Images
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [leaveDate, setLeaveDate] = useState<Date | undefined>(new Date());
  const [leaveEndDate, setLeaveEndDate] = useState<Date | undefined>(new Date());
  const [leaveMessage, setLeaveMessage] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [productTab, setProductTab] = useState("recent");
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

  const topProducts = [
    { id: 1, item: "Student Backpack", age: "8-12 yrs", category: "Bags", price: "$39.99" },
    { id: 2, item: "Math Learning Set", age: "6-9 yrs", category: "Learning Materials", price: "$25.50" },
    { id: 3, item: "Water Bottle", age: "All ages", category: "Accessories", price: "$15.99" }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Overview Section */}
          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Leave Application</CardTitle>
                <CardDescription>Apply for leave with a custom message.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="leave-start-date">Start Date</label>
                  <Calendar
                    id="leave-start-date"
                    mode="single"
                    selected={leaveDate}
                    onSelect={setLeaveDate}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="leave-end-date">End Date</label>
                  <Calendar
                    id="leave-end-date"
                    mode="single"
                    selected={leaveEndDate}
                    onSelect={setLeaveEndDate}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="leave-message">Message</label>
                  <Textarea 
                    id="leave-message" 
                    placeholder="Explain why you need leave..." 
                    value={leaveMessage}
                    onChange={(e) => setLeaveMessage(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => {
                  toast({
                    title: "Leave Applied!",
                    description: `Leave from ${leaveDate ? format(leaveDate, "PPP") : 'N/A'} to ${leaveEndDate ? format(leaveEndDate, "PPP") : 'N/A'} applied successfully.`,
                  });
                }}>Apply for Leave</Button>
              </CardFooter>
            </Card>

            {/* Performance Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>See how your child is performing in different subjects.</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#8884d8" />
                    <Bar dataKey="average" fill="#82ca9d" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access & Notifications */}
          <div className="space-y-4">
            {/* Quick Access */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
                <CardDescription>Jump to frequently used sections.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button variant="outline" className="justify-start" onClick={() => navigate("/grades")}>
                  <BarChart className="mr-2 h-4 w-4" />
                  View Grades
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => navigate("/attendance")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Check Attendance
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => navigate("/messages")}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send a Message
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay up-to-date with important updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full">
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={notification.avatar} />
                          <AvatarFallback>{notification.teacher.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{notification.teacher}</p>
                          <p className="text-sm text-gray-500">{notification.message}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-400">
                            <span>{notification.time}</span>
                            {notification.unread && <Badge variant="secondary">New</Badge>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity & Purchases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Recent Activity */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Track your latest actions and updates.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] w-full">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Read Chapter 3 of Science Textbook</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Video className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Watched a video on Photosynthesis</p>
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                  </div>
                  {/* Add more activity items here */}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Purchases */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Purchases</CardTitle>
              <CardDescription>View your recent transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] w-full">
                <div className="space-y-4">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="flex items-center space-x-4">
                      <ShoppingCart className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium">{purchase.item}</p>
                        <div className="flex justify-between">
                          <p className="text-sm text-gray-500">{purchase.date}</p>
                          <p className="text-sm font-medium">{purchase.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Example & Top Products */}
        <div className="mt-8">
          <Tabs defaultvalue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All</TabsTrigger>
              <TabsTrigger value="grades" onClick={() => setActiveTab("grades")}>Grades</TabsTrigger>
              <TabsTrigger value="attendance" onClick={() => setActiveTab("attendance")}>Attendance</TabsTrigger>
              <TabsTrigger value="messages" onClick={() => setActiveTab("messages")}>Messages</TabsTrigger>
            </TabsList>
            <div className="mt-4">
              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>All Content</CardTitle>
                    <CardDescription>A summary of everything.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p>Welcome to your dashboard! Here's an overview of everything.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="grades">
                <Card>
                  <CardHeader>
                    <CardTitle>Grades</CardTitle>
                    <CardDescription>Your grades for the current semester.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p>Check your grades here.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="attendance">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance</CardTitle>
                    <CardDescription>Your attendance record.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p>View your attendance details.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Your inbox messages.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p>Read and send messages.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Top Products Section */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between w-full">
                <div>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Explore our best-selling products.</CardDescription>
                </div>
                <Tabs defaultValue="recent" className="w-auto">
                  <TabsList>
                    <TabsTrigger value="recent" onClick={() => setProductTab("recent")}>Recent</TabsTrigger>
                    <TabsTrigger value="popular" onClick={() => setProductTab("popular")}>Popular</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topProducts.map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <CardTitle>{product.item}</CardTitle>
                      <CardDescription>Age: {product.age}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Category: {product.category}</p>
                      <p>Price: {product.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
