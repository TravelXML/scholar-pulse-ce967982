
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Book, 
  Calendar, 
  Clock, 
  GraduationCap, 
  Award, 
  FileText, 
  Search, 
  Bell, 
  Filter,
  BarChart3,
  BookOpen,
  Newspaper,
  LibraryBig,
  Trophy,
  Users
} from "lucide-react";

export default function Academic() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold" style={{ color: "#0B6623" }}>Academic Portal</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </Button>
          <Button>View Calendar</Button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search courses, assignments, resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {showFilters && (
        <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium">Subject</label>
              <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                <option value="">All Subjects</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="history">History</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Grade Level</label>
              <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                <option value="">All Grades</option>
                <option value="elementary">Elementary</option>
                <option value="middle">Middle School</option>
                <option value="high">High School</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Status</label>
              <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                <option value="">All Status</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Date Range</label>
              <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                <option value="">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </Card>
      )}

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="resources">Learning Resources</TabsTrigger>
          <TabsTrigger value="competitions">Competitions & Events</TabsTrigger>
          <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
        </TabsList>

        {/* Courses Tab Content */}
        <TabsContent value="courses" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-3" 
                  style={{ backgroundColor: "#0B6623" }}
                ></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg" style={{ color: "#0B6623" }}>{course.title}</CardTitle>
                    <Badge>{course.grade}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{course.teacher}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Book className="h-4 w-4" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.hours} Hours</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" style={{ borderColor: "#0B6623", color: "#0B6623" }}>
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full">Load More Courses</Button>
        </TabsContent>

        {/* Assignments Tab Content */}
        <TabsContent value="assignments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg" style={{ color: "#0B6623" }}>{assignment.title}</CardTitle>
                    <Badge
                      variant={
                        assignment.status === "pending" ? "secondary" : 
                        assignment.status === "submitted" ? "outline" : "default"
                      }
                    >
                      {assignment.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {assignment.course}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className={
                        isUrgent(assignment.dueDate) ? "text-red-500 font-bold" : ""
                      }>
                        Due: {formatDate(assignment.dueDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{assignment.type}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Description:</div>
                    <p className="text-sm text-muted-foreground">{assignment.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      style={{ backgroundColor: "#0B6623" }}
                      disabled={assignment.status === "submitted"}
                    >
                      {assignment.status === "submitted" ? "Submitted" : "Submit Assignment"}
                    </Button>
                    <Button variant="outline" className="flex-none">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full">Load More Assignments</Button>
        </TabsContent>

        {/* Resources Tab Content */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2">{resource.type}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg" style={{ color: "#0B6623" }}>{resource.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Subject: {resource.subject}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button className="w-full" style={{ backgroundColor: "#0B6623" }}>
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full">View More Resources</Button>
        </TabsContent>

        {/* Competitions & Events Tab Content */}
        <TabsContent value="competitions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map((competition) => (
              <Card key={competition.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={competition.image} 
                    alt={competition.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2" 
                    style={{ backgroundColor: "#0B6623" }}
                  >
                    {competition.organizer}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg" style={{ color: "#0B6623" }}>{competition.title}</CardTitle>
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(competition.date)}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{competition.description}</p>
                  <div className="text-sm">
                    <div className="font-medium">Location:</div>
                    <div className="text-muted-foreground">{competition.location}</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Eligibility:</div>
                    <div className="text-muted-foreground">{competition.eligibility}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" style={{ backgroundColor: "#0B6623" }}>
                      Register Now
                    </Button>
                    <Button variant="outline" className="flex-none">Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full">View More Events</Button>
        </TabsContent>

        {/* Reports & Analytics Tab */}
        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg" style={{ color: "#0B6623" }}>Academic Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Mathematics</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Science</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>English</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>History</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <Button variant="outline" className="w-full">View Detailed Report</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg" style={{ color: "#0B6623" }}>Assignment Completion</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center justify-center h-48">
                  <div className="relative h-40 w-40 rounded-full flex items-center justify-center" style={{ background: `conic-gradient(#0B6623 ${85 * 3.6}deg, #e5e7eb 0deg)` }}>
                    <div className="absolute h-32 w-32 rounded-full bg-card flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">85%</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#0B6623" }}></div>
                      <span>Submitted (23)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-gray-200"></div>
                      <span>Pending (4)</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">View Assignments</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg" style={{ color: "#0B6623" }}>Activity Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-md border">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(11, 102, 35, 0.1)" }}>
                    <BookOpen className="h-5 w-5" style={{ color: "#0B6623" }} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Course Activity</div>
                    <div className="text-sm text-muted-foreground">32 hours this month</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md border">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(11, 102, 35, 0.1)" }}>
                    <FileText className="h-5 w-5" style={{ color: "#0B6623" }} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Assignment Activity</div>
                    <div className="text-sm text-muted-foreground">18 submissions this month</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md border">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(11, 102, 35, 0.1)" }}>
                    <LibraryBig className="h-5 w-5" style={{ color: "#0B6623" }} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Resource Usage</div>
                    <div className="text-sm text-muted-foreground">45 resources accessed</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Full Activity Log</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Utility functions
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function isUrgent(dateString: string) {
  const dueDate = new Date(dateString);
  const today = new Date();
  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 2 && diffDays >= 0;
}

// Mock Data
const courses = [
  {
    id: "1",
    title: "Advanced Mathematics",
    grade: "Grade 10",
    teacher: "Dr. Smith",
    progress: 65,
    lessons: 24,
    hours: 48
  },
  {
    id: "2",
    title: "Physics Fundamentals",
    grade: "Grade 9",
    teacher: "Ms. Johnson",
    progress: 78,
    lessons: 18,
    hours: 36
  },
  {
    id: "3",
    title: "World History",
    grade: "Grade 11",
    teacher: "Mr. Garcia",
    progress: 42,
    lessons: 30,
    hours: 54
  },
  {
    id: "4",
    title: "English Literature",
    grade: "Grade 10",
    teacher: "Mrs. Williams",
    progress: 90,
    lessons: 20,
    hours: 40
  },
  {
    id: "5",
    title: "Computer Science",
    grade: "Grade 12",
    teacher: "Dr. Chen",
    progress: 82,
    lessons: 28,
    hours: 56
  },
  {
    id: "6",
    title: "Environmental Science",
    grade: "Grade 11",
    teacher: "Ms. Taylor",
    progress: 35,
    lessons: 22,
    hours: 44
  }
];

const assignments = [
  {
    id: "1",
    title: "Mathematics Problem Set",
    course: "Advanced Mathematics",
    status: "pending",
    dueDate: "2024-04-15",
    type: "Homework",
    description: "Complete problems 1-20 on page 145 of the textbook."
  },
  {
    id: "2",
    title: "Physics Lab Report",
    course: "Physics Fundamentals",
    status: "submitted",
    dueDate: "2024-04-08",
    type: "Lab Report",
    description: "Write a report on the pendulum experiment conducted in class."
  },
  {
    id: "3",
    title: "Historical Essay",
    course: "World History",
    status: "pending",
    dueDate: "2024-04-20",
    type: "Essay",
    description: "Write a 1500-word essay on the causes of World War II."
  },
  {
    id: "4",
    title: "Literature Analysis",
    course: "English Literature",
    status: "pending",
    dueDate: "2024-04-12",
    type: "Essay",
    description: "Analyze the themes in Shakespeare's Macbeth. Focus on ambition and guilt."
  }
];

const resources = [
  {
    id: "1",
    title: "Mathematics Interactive Tutorial",
    subject: "Mathematics",
    type: "Interactive",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=600",
    description: "Interactive tutorials covering algebraic concepts with practice exercises.",
    tags: ["Algebra", "Interactive", "Self-paced"]
  },
  {
    id: "2",
    title: "Physics Video Lectures",
    subject: "Physics",
    type: "Video",
    image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&h=600",
    description: "Comprehensive video series on mechanics and motion by renowned professors.",
    tags: ["Mechanics", "Video", "Expert"]
  },
  {
    id: "3",
    title: "World History Timeline",
    subject: "History",
    type: "Visual",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600",
    description: "Interactive timeline of major historical events from ancient to modern times.",
    tags: ["Timeline", "Visual", "Comprehensive"]
  },
  {
    id: "4",
    title: "Literature Study Guide",
    subject: "English",
    type: "Document",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600",
    description: "Study guides for classic literature with analysis, themes, and character studies.",
    tags: ["Literature", "Guide", "Analysis"]
  },
  {
    id: "5",
    title: "Coding Exercises",
    subject: "Computer Science",
    type: "Interactive",
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?w=800&h=600",
    description: "Hands-on coding exercises with real-time feedback and solutions.",
    tags: ["Coding", "Interactive", "Practice"]
  },
  {
    id: "6",
    title: "Environmental Science Field Guide",
    subject: "Science",
    type: "Document",
    image: "https://images.unsplash.com/photo-1557434440-30035059b6ed?w=800&h=600",
    description: "Comprehensive guide for field studies and environmental observations.",
    tags: ["Environment", "Guide", "Fieldwork"]
  }
];

const competitions = [
  {
    id: "1",
    title: "National Science Olympiad",
    organizer: "National Science Foundation",
    date: "2024-05-15",
    location: "Virtual & Regional Centers",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=600",
    description: "Annual nationwide competition testing knowledge in various science disciplines.",
    eligibility: "Grades 6-12"
  },
  {
    id: "2",
    title: "Mathematics Challenge",
    organizer: "State Education Board",
    date: "2024-04-28",
    location: "State Convention Center",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600",
    description: "Problem-solving competition with individual and team categories.",
    eligibility: "Grades 9-12"
  },
  {
    id: "3",
    title: "Young Historians Conference",
    organizer: "History Association",
    date: "2024-06-10",
    location: "City University Campus",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=800&h=600",
    description: "Research presentation competition on historical topics with scholarship opportunities.",
    eligibility: "High School Students"
  },
  {
    id: "4",
    title: "Creative Writing Festival",
    organizer: "Literary Arts Council",
    date: "2024-05-20",
    location: "Community Arts Center",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600",
    description: "Showcase your creative writing talents in poetry, short stories, and essays.",
    eligibility: "All Grade Levels"
  }
];
