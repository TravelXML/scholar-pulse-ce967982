
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  School,
  Calendar,
  CheckCircle2,
  XCircle,
  BarChart3,
  Search,
  Filter,
} from "lucide-react";

// Sample data
const pendingContent = [
  {
    id: 1,
    type: "School",
    title: "New School Registration",
    author: "Green Valley International",
    status: "pending",
    date: "2024-03-10",
  },
  {
    id: 2,
    type: "Event",
    title: "Science Competition 2024",
    author: "State Education Board",
    status: "pending",
    date: "2024-03-12",
  },
];

const statistics = [
  {
    title: "Total Students",
    value: "1,234",
    icon: Users,
  },
  {
    title: "Active Schools",
    value: "45",
    icon: School,
  },
  {
    title: "Upcoming Events",
    value: "23",
    icon: Calendar,
  },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <Button>Download Report</Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {statistics.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="approval" className="space-y-6">
        <TabsList>
          <TabsTrigger value="approval">Content Approval</TabsTrigger>
          <TabsTrigger value="schools">Schools</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Search and Filter Bar */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <TabsContent value="approval" className="space-y-4">
          {pendingContent.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{item.type}</Badge>
                    <span>by {item.author}</span>
                    <span>• {new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button size="sm">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="schools" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>School Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                  <div>School Name</div>
                  <div>Location</div>
                  <div>Students</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {/* Sample school row */}
                <div className="grid grid-cols-5 gap-4 p-4 border-t items-center">
                  <div>Green Valley International</div>
                  <div className="text-muted-foreground">City Center</div>
                  <div>450</div>
                  <div><Badge>Active</Badge></div>
                  <div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                  <div>Activity Name</div>
                  <div>Category</div>
                  <div>Organizer</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {/* Sample activity row */}
                <div className="grid grid-cols-5 gap-4 p-4 border-t items-center">
                  <div>Chess Championship</div>
                  <div className="text-muted-foreground">Competition</div>
                  <div>State Board</div>
                  <div><Badge variant="outline">Upcoming</Badge></div>
                  <div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-lg">
                <div className="flex flex-col items-center text-muted-foreground">
                  <BarChart3 className="h-8 w-8 mb-2" />
                  <p>Analytics visualization will be implemented here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
