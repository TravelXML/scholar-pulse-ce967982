
import React from "react";
import { 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Clock,
  FileText,
  User,
  Users
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const courseData = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    code: "CS101",
    instructor: "Dr. Alan Turing",
    schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
    room: "Tech Hall 305",
    credits: 3,
    status: "In Progress",
    progress: 65,
    description: "A foundational course covering basic principles of computer science, algorithms, and programming concepts."
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    code: "CS201",
    instructor: "Dr. Ada Lovelace",
    schedule: "Tue, Thu 1:00 PM - 3:00 PM",
    room: "Tech Hall 220",
    credits: 4,
    status: "In Progress",
    progress: 42,
    description: "An intermediate course focusing on data structures, algorithm design, and analysis of efficiency."
  },
  {
    id: 3,
    title: "Web Development Fundamentals",
    code: "CS150",
    instructor: "Prof. Tim Berners-Lee",
    schedule: "Mon, Wed 3:30 PM - 5:00 PM",
    room: "Digital Lab 110",
    credits: 3,
    status: "In Progress",
    progress: 78,
    description: "Learn the principles of web development, HTML, CSS, and JavaScript to build responsive web applications."
  },
  {
    id: 4,
    title: "Database Management Systems",
    code: "CS301",
    instructor: "Dr. Edgar Codd",
    schedule: "Tue, Thu 9:00 AM - 10:30 AM",
    room: "Tech Hall 405",
    credits: 3,
    status: "Upcoming",
    progress: 0,
    description: "Study of database design, implementation, and management with emphasis on SQL and relational databases."
  }
];

const assignmentData = [
  {
    id: 1,
    title: "Algorithm Analysis Project",
    course: "CS201",
    dueDate: "2023-11-15",
    status: "Pending",
    description: "Analyze the time and space complexity of three sorting algorithms."
  },
  {
    id: 2,
    title: "Web Portfolio",
    course: "CS150",
    dueDate: "2023-11-20",
    status: "Pending",
    description: "Create a personal portfolio website showcasing your projects."
  },
  {
    id: 3,
    title: "Programming Quiz",
    course: "CS101",
    dueDate: "2023-11-10",
    status: "Completed",
    description: "Online quiz covering loops, conditionals, and basic data types."
  }
];

const resourceData = [
  { 
    id: 1, 
    title: "Computer Science Handbook", 
    type: "Book", 
    author: "Dr. John Smith",
    link: "#",
    description: "Comprehensive textbook covering all fundamental CS concepts."
  },
  { 
    id: 2, 
    title: "Algorithm Visualization Tool", 
    type: "Software", 
    author: "Tech University",
    link: "#",
    description: "Interactive tool for visualizing common algorithms in action."
  },
  { 
    id: 3, 
    title: "Web Dev Resource Collection", 
    type: "Online Resource", 
    author: "Various",
    link: "#",
    description: "Curated collection of tutorials, documentation, and tools for web development."
  }
];

export default function Academic() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Academic Portal</h1>
          <p className="text-muted-foreground">
            View your courses, assignments, and academic resources
          </p>
        </div>
        <Button className="self-start">
          <FileText className="mr-2 h-4 w-4" />
          Download Transcript
        </Button>
      </div>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4">
          <TabsTrigger value="courses">
            <BookOpen className="h-4 w-4 mr-2" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="assignments">
            <FileText className="h-4 w-4 mr-2" />
            Assignments
          </TabsTrigger>
          <TabsTrigger value="resources">
            <GraduationCap className="h-4 w-4 mr-2" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="schedule" className="hidden md:flex">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courseData.map((course) => (
              <Card key={course.id} className="hover-scale">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant={course.status === "In Progress" ? "default" : "secondary"}>
                      {course.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div>{course.code}</div>
                      <div>•</div>
                      <div>{course.credits} Credits</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{course.room}</span>
                    </div>
                    {course.status === "In Progress" && (
                      <div className="mt-4">
                        <div className="text-sm mb-1 flex justify-between">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Current Assignments</h2>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Submit Assignment
            </Button>
          </div>

          <div className="space-y-4">
            {assignmentData.map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <Badge variant={assignment.status === "Completed" ? "secondary" : "default"}>
                      {assignment.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    Course: {assignment.course} • Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{assignment.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  {assignment.status !== "Completed" && (
                    <Button>Submit Work</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Academic Resources</h2>
            <Button variant="outline">
              <GraduationCap className="mr-2 h-4 w-4" />
              Request Resource
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {resourceData.map((resource) => (
              <Card key={resource.id} className="hover-scale">
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{resource.title}</CardTitle>
                    <Badge>{resource.type}</Badge>
                  </div>
                  <CardDescription>By {resource.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={resource.link}>Access Resource</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Request Academic Support</CardTitle>
              <CardDescription>Need tutoring or additional academic resources? Let us know.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Enter the subject you need help with" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Details</label>
                  <Textarea id="description" placeholder="Describe what kind of academic support you need" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Request</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Your classes and academic appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Monday */}
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Monday
                  </h3>
                  <div className="border rounded-lg divide-y">
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <div className="font-medium">Introduction to Computer Science</div>
                        <div className="text-sm text-muted-foreground">Tech Hall 305</div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="font-medium">10:00 AM - 11:30 AM</div>
                        <div className="text-muted-foreground">Dr. Alan Turing</div>
                      </div>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <div className="font-medium">Web Development Fundamentals</div>
                        <div className="text-sm text-muted-foreground">Digital Lab 110</div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="font-medium">3:30 PM - 5:00 PM</div>
                        <div className="text-muted-foreground">Prof. Tim Berners-Lee</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tuesday */}
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Tuesday
                  </h3>
                  <div className="border rounded-lg divide-y">
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <div className="font-medium">Database Management Systems</div>
                        <div className="text-sm text-muted-foreground">Tech Hall 405</div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="font-medium">9:00 AM - 10:30 AM</div>
                        <div className="text-muted-foreground">Dr. Edgar Codd</div>
                      </div>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <div className="font-medium">Data Structures and Algorithms</div>
                        <div className="text-sm text-muted-foreground">Tech Hall 220</div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="font-medium">1:00 PM - 3:00 PM</div>
                        <div className="text-muted-foreground">Dr. Ada Lovelace</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wednesday */}
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Wednesday
                  </h3>
                  <div className="border rounded-lg divide-y">
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <div className="font-medium">Introduction to Computer Science</div>
                        <div className="text-sm text-muted-foreground">Tech Hall 305</div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="font-medium">10:00 AM - 11:30 AM</div>
                        <div className="text-muted-foreground">Dr. Alan Turing</div>
                      </div>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <div className="font-medium">Web Development Fundamentals</div>
                        <div className="text-sm text-muted-foreground">Digital Lab 110</div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="font-medium">3:30 PM - 5:00 PM</div>
                        <div className="text-muted-foreground">Prof. Tim Berners-Lee</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                Full Schedule View
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
