
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Book,
  Calendar,
  FileText,
  GraduationCap,
  Award,
  Clock,
  AlertCircle,
  CheckCircle,
  BarChart3,
  BookOpen
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const subjectPerformanceData = [
  { name: "English", score: 85, average: 75 },
  { name: "Math", score: 78, average: 70 },
  { name: "Science", score: 92, average: 78 },
  { name: "History", score: 72, average: 65 },
  { name: "Geography", score: 84, average: 68 },
  { name: "Art", score: 96, average: 82 },
];

const attendanceData = [
  { month: "Jan", present: 22, absent: 2, leave: 1 },
  { month: "Feb", present: 18, absent: 1, leave: 0 },
  { month: "Mar", present: 21, absent: 0, leave: 2 },
  { month: "Apr", present: 20, absent: 3, leave: 1 },
  { month: "May", present: 23, absent: 1, leave: 0 },
  { month: "Jun", present: 14, absent: 0, leave: 0 },
];

const testScoresData = [
  { name: "Test 1", English: 82, Math: 75, Science: 86, History: 70, Geography: 78 },
  { name: "Test 2", English: 85, Math: 72, Science: 90, History: 68, Geography: 80 },
  { name: "Test 3", English: 80, Math: 78, Science: 88, History: 74, Geography: 82 },
  { name: "Midterm", English: 88, Math: 80, Science: 92, History: 76, Geography: 84 },
  { name: "Test 4", English: 84, Math: 79, Science: 90, History: 72, Geography: 83 },
  { name: "Final", English: 90, Math: 85, Science: 94, History: 80, Geography: 88 },
];

const COLORS = ['#0B6623', '#82ca9d', '#8884d8', '#ffc658', '#ff8042', '#ff5252'];

interface Assignment {
  id: string;
  subject: string;
  title: string;
  dueDate: string;
  status: "completed" | "pending" | "overdue";
  grade?: string;
  teacherComment?: string;
}

interface Exam {
  id: string;
  subject: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  status: "upcoming" | "completed";
  grade?: string;
}

export default function Academic() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: "a1",
      subject: "English",
      title: "Essay on Shakespeare's Hamlet",
      dueDate: "2024-06-25",
      status: "completed",
      grade: "A",
      teacherComment: "Excellent analysis and well-structured essay."
    },
    {
      id: "a2",
      subject: "Math",
      title: "Algebra Problem Set #4",
      dueDate: "2024-06-28",
      status: "pending"
    },
    {
      id: "a3",
      subject: "Science",
      title: "Chemistry Lab Report",
      dueDate: "2024-06-20",
      status: "overdue"
    },
    {
      id: "a4",
      subject: "Geography",
      title: "Climate Change Presentation",
      dueDate: "2024-07-05",
      status: "pending"
    },
    {
      id: "a5",
      subject: "History",
      title: "World War II Timeline",
      dueDate: "2024-06-15",
      status: "completed",
      grade: "B+",
      teacherComment: "Good work, but could include more details on key events."
    }
  ]);

  const [exams, setExams] = useState<Exam[]>([
    {
      id: "e1",
      subject: "English",
      title: "Literature Comprehension",
      date: "2024-07-05",
      time: "09:00 AM - 11:00 AM",
      venue: "Hall A",
      status: "upcoming"
    },
    {
      id: "e2",
      subject: "Math",
      title: "Calculus Final Exam",
      date: "2024-07-10",
      time: "10:00 AM - 12:00 PM",
      venue: "Room 102",
      status: "upcoming"
    },
    {
      id: "e3",
      subject: "Science",
      title: "Physics Mid-Term",
      date: "2024-06-15",
      time: "01:00 PM - 03:00 PM",
      venue: "Science Lab",
      status: "completed",
      grade: "A-"
    },
    {
      id: "e4",
      subject: "History",
      title: "Ancient Civilizations Quiz",
      date: "2024-06-08",
      time: "11:00 AM - 12:00 PM",
      venue: "Room 205",
      status: "completed",
      grade: "B+"
    }
  ]);

  const upcomingExams = exams.filter(exam => exam.status === "upcoming");
  const completedExams = exams.filter(exam => exam.status === "completed");
  
  const pendingAssignments = assignments.filter(assignment => assignment.status === "pending");
  const completedAssignments = assignments.filter(assignment => assignment.status === "completed");
  const overdueAssignments = assignments.filter(assignment => assignment.status === "overdue");

  // Calculate overall subject performance
  const overallPerformance = () => {
    const total = subjectPerformanceData.reduce((acc, curr) => acc + curr.score, 0);
    return Math.round(total / subjectPerformanceData.length);
  };

  // Calculate overall attendance
  const calculateAttendance = () => {
    const totalDays = attendanceData.reduce((acc, curr) => acc + curr.present + curr.absent + curr.leave, 0);
    const presentDays = attendanceData.reduce((acc, curr) => acc + curr.present, 0);
    return Math.round((presentDays / totalDays) * 100);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold" style={{ color: "#0B6623" }}>Academic Dashboard</h1>
          <p className="text-muted-foreground">
            Track academic performance, assignments, and examinations
          </p>
        </div>
        <Button style={{ backgroundColor: "#0B6623" }}>
          <FileText className="mr-2 h-4 w-4" /> Download Report
        </Button>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#0B6623" }}>
              Overall Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">{overallPerformance()}%</div>
              <Progress value={overallPerformance()} className="h-2 mt-2 w-full" />
              <p className="text-xs text-muted-foreground mt-2">
                Based on all subject assessments
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#0B6623" }}>
              Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">{calculateAttendance()}%</div>
              <Progress value={calculateAttendance()} className="h-2 mt-2 w-full" />
              <p className="text-xs text-muted-foreground mt-2">
                Present days over total school days
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#0B6623" }}>
              Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Completed: {completedAssignments.length}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">Pending: {pendingAssignments.length}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">Overdue: {overdueAssignments.length}</span>
                </div>
              </div>
              <div className="h-[60px] w-[60px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Completed', value: completedAssignments.length },
                        { name: 'Pending', value: pendingAssignments.length },
                        { name: 'Overdue', value: overdueAssignments.length }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={15}
                      outerRadius={30}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell fill="#4ade80" />
                      <Cell fill="#facc15" />
                      <Cell fill="#f87171" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance" className="flex items-center">
            <BarChart3 className="mr-2 h-4 w-4" style={{ color: "#0B6623" }} />
            Performance
          </TabsTrigger>
          <TabsTrigger value="assignments" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" style={{ color: "#0B6623" }} />
            Assignments
          </TabsTrigger>
          <TabsTrigger value="exams" className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" style={{ color: "#0B6623" }} />
            Examinations
          </TabsTrigger>
          <TabsTrigger value="attendance" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" style={{ color: "#0B6623" }} />
            Attendance
          </TabsTrigger>
        </TabsList>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Subject Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectPerformanceData} margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" name="Your Score" fill="#0B6623" />
                    <Bar dataKey="average" name="Class Average" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Test Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={testScoresData} margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {Object.keys(testScoresData[0])
                      .filter(key => key !== "name")
                      .map((subject, index) => (
                        <Line 
                          key={subject} 
                          type="monotone" 
                          dataKey={subject} 
                          stroke={COLORS[index % COLORS.length]} 
                          activeDot={{ r: 8 }} 
                        />
                      ))}
                  </LineChart>
                </ResponsiveContainer>
              </div