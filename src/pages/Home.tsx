
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
    { id: 3, item: "Water Bottle