
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Star, AlertCircle, School, HeartPulse, Brain, Flag, Award } from "lucide-react";

const sportsData = [
  { name: 'Football', hours: 4 },
  { name: 'Basketball', hours: 3 },
  { name: 'Swimming', hours: 2 },
  { name: 'Tennis', hours: 1 },
];

const communicationData = [
  { name: 'Class', hindi: 3, english: 4 },
  { name: 'Group Work', hindi: 4, english: 3 },
  { name: 'Presentations', hindi: 2, english: 5 },
  { name: 'Discussions', hindi: 5, english: 3 },
];

const timelineEvents = [
  {
    id: 1,
    date: "2023-09-01",
    type: "admission",
    title: "School Admission",
    description: "Admitted to Greenwood High School",
    icon: School,
    category: "academic",
    attachments: ["admission_letter.pdf"],
  },
  {
    id: 2,
    date: "2023-10-15",
    type: "medical",
    title: "Medical Leave",
    description: "Two weeks leave due to severe flu",
    icon: HeartPulse,
    category: "health",
    attachments: ["medical_certificate.pdf"],
  },
  {
    id: 3,
    date: "2023-11-01",
    type: "counseling",
    title: "Counseling Session",
    description: "Career guidance counseling with Dr. Smith",
    icon: Brain,
    category: "support",
  },
  {
    id: 4,
    date: "2024-01-15",
    type: "award",
    title: "Academic Excellence Award",
    description: "First place in Science Fair",
    icon: Award,
    category: "achievement",
    attachments: ["science_fair_project.jpg"],
  },
  {
    id: 5,
    date: "2024-02-01",
    type: "flag",
    title: "Teacher Recognition",
    description: "Outstanding performance in Mathematics",
    icon: Flag,
    category: "academic",
    teacher: "Mrs. Johnson",
    subject: "Mathematics",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>
      
      {/* Activity Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transform transition-all hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-lg">Academic Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary">A+</div>
            <p className="text-sm text-gray-500 mt-2">Current Semester Grade</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-lg">Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary">98%</div>
            <p className="text-sm text-gray-500 mt-2">This Month</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary">3</div>
            <p className="text-sm text-gray-500 mt-2">This Week</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="transform transition-all hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-lg">Sports Participation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sportsData}>
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#4A90E2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4">Hours per week in different sports</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-lg">Language Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={communicationData}>
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="hindi" fill="#9b87f5" name="Hindi" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="english" fill="#0EA5E9" name="English" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4">Communication patterns across different activities</p>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Section */}
      <Card className="transform transition-all hover:scale-[1.02]">
        <CardHeader className="border-b">
          <CardTitle className="text-xl font-semibold">Student Journey</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="relative space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="flex gap-6">
                {/* Timeline Connector */}
                <div className="relative flex items-start">
                  <div 
                    className="h-full w-0.5 bg-gradient-to-b from-primary/50 to-primary/10 absolute top-8 left-1/2 transform -translate-x-1/2" 
                    style={{ display: index === timelineEvents.length - 1 ? 'none' : 'block' }} 
                  />
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary ring-4 ring-background shadow-sm">
                    <event.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 -mt-1">
                  <div className="bg-card rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">{event.title}</h3>
                        <time className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${event.category === 'academic' ? 'bg-blue-100 text-blue-800' : ''}
                          ${event.category === 'health' ? 'bg-red-100 text-red-800' : ''}
                          ${event.category === 'support' ? 'bg-purple-100 text-purple-800' : ''}
                          ${event.category === 'achievement' ? 'bg-green-100 text-green-800' : ''}
                        `}
                      >
                        {event.category}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">{event.description}</p>

                    {/* Attachments Section */}
                    {event.attachments && (
                      <div className="mt-4 pt-3 border-t">
                        <div className="flex flex-wrap gap-2">
                          {event.attachments.map((attachment) => (
                            <Badge 
                              key={attachment} 
                              variant="outline" 
                              className="text-xs px-3 py-1 bg-background hover:bg-accent cursor-pointer transition-colors"
                            >
                              <span className="mr-1">📎</span>
                              {attachment}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Teacher Feedback Section */}
                    {event.teacher && (
                      <div className="mt-4 pt-3 border-t flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                          <Star className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{event.teacher}</p>
                          <p className="text-xs text-muted-foreground">{event.subject}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
