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
  Plus,
  ShoppingBag,
  Building,
  BookOpen,
  Upload,
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
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import SchoolForm from "@/components/admin/SchoolForm";
import ActivityForm from "@/components/admin/ActivityForm";
import ProductForm from "@/components/admin/ProductForm";
import GovernmentActivityForm from "@/components/admin/GovernmentActivityForm";

const userActivityData = [
  { month: "Jan", students: 65, schools: 4, events: 12 },
  { month: "Feb", students: 78, schools: 5, events: 15 },
  { month: "Mar", students: 90, schools: 6, events: 18 },
];

const activityDistribution = [
  { name: "Sports", value: 35 },
  { name: "Arts", value: 25 },
  { name: "Academic", value: 20 },
  { name: "Music", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const pendingContent = [
  {
    id: 1,
    type: "School",
    title: "New School Registration",
    author: "Green Valley International",
    status: "pending",
    date: "2024-03-10",
    category: "Registration",
    priority: "High",
  },
  {
    id: 2,
    type: "Event",
    title: "Science Competition 2024",
    author: "State Education Board",
    status: "pending",
    date: "2024-03-12",
    category: "Competition",
    priority: "Medium",
  },
];

const schoolsData = [
  {
    id: 1,
    name: "Green Valley International",
    location: "City Center",
    students: 450,
    status: "active",
    type: "International",
    rating: 4.5,
    lastUpdated: "2024-03-01",
  },
];

const activitiesData = [
  {
    id: 1,
    name: "Chess Championship",
    category: "Competition",
    organizer: "State Board",
    status: "upcoming",
    participants: 120,
    date: "2024-04-15",
    venue: "Central Hall",
  },
];

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "all",
    status: "all",
    priority: "all",
    dateRange: "all",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [activeUploadTab, setActiveUploadTab] = useState("school");

  const handleAdd = (type: "school" | "activity") => {
    console.log(`Adding new ${type}`);
  };

  const handleEdit = (id: number, type: "school" | "activity") => {
    console.log(`Editing ${type} with id: ${id}`);
  };

  const handleDelete = (id: number, type: "school" | "activity") => {
    console.log(`Deleting ${type} with id: ${id}`);
  };

  const handleApprove = (id: number) => {
    console.log(`Approving content with id: ${id}`);
  };

  const handleReject = (id: number) => {
    console.log(`Rejecting content with id: ${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold" style={{ color: "#0B6623" }}>Admin Panel</h1>
        <Button style={{ backgroundColor: "#0B6623" }}>Download Report</Button>
      </div>

      <Tabs defaultValue="approval" className="space-y-6">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="approval" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">Content Approval</TabsTrigger>
          <TabsTrigger value="schools" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">Schools</TabsTrigger>
          <TabsTrigger value="activities" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">Activities</TabsTrigger>
          <TabsTrigger value="products" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">Products</TabsTrigger>
          <TabsTrigger value="upload" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">Upload Content</TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">Analytics</TabsTrigger>
        </TabsList>

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
                <label className="text-sm font-medium">Type</label>
                <select
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                >
                  <option value="all">All Types</option>
                  <option value="school">School</option>
                  <option value="event">Event</option>
                  <option value="product">Product</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Priority</label>
                <select
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                  value={filters.priority}
                  onChange={(e) =>
                    setFilters({ ...filters, priority: e.target.value })
                  }
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Date Range</label>
                <select
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                  value={filters.dateRange}
                  onChange={(e) =>
                    setFilters({ ...filters, dateRange: e.target.value })
                  }
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
            </div>
          </Card>
        )}

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
                  <Button variant="outline" size="sm" onClick={() => handleReject(item.id)}>
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button size="sm" onClick={() => handleApprove(item.id)} style={{ backgroundColor: "#0B6623" }}>
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
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>School Management</CardTitle>
              <Button onClick={() => handleAdd("school")} style={{ backgroundColor: "#0B6623" }}>
                <Plus className="mr-2 h-4 w-4" />
                Add School
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 gap-4 p-4 font-medium">
                  <div>School Name</div>
                  <div>Location</div>
                  <div>Students</div>
                  <div>Rating</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {schoolsData.map((school) => (
                  <div key={school.id} className="grid grid-cols-6 gap-4 p-4 border-t items-center">
                    <div>{school.name}</div>
                    <div className="text-muted-foreground">{school.location}</div>
                    <div>{school.students}</div>
                    <div>{school.rating}/5</div>
                    <div><Badge>{school.status}</Badge></div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(school.id, "school")}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(school.id, "school")}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Activity Management</CardTitle>
              <Button onClick={() => handleAdd("activity")} style={{ backgroundColor: "#0B6623" }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Activity
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 gap-4 p-4 font-medium">
                  <div>Activity Name</div>
                  <div>Category</div>
                  <div>Organizer</div>
                  <div>Participants</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {activitiesData.map((activity) => (
                  <div key={activity.id} className="grid grid-cols-6 gap-4 p-4 border-t items-center">
                    <div>{activity.name}</div>
                    <div className="text-muted-foreground">{activity.category}</div>
                    <div>{activity.organizer}</div>
                    <div>{activity.participants}</div>
                    <div><Badge variant="outline">{activity.status}</Badge></div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(activity.id, "activity")}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(activity.id, "activity")}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Product Management</CardTitle>
              <Button style={{ backgroundColor: "#0B6623" }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 gap-4 p-4 font-medium">
                  <div>Product Name</div>
                  <div>Category</div>
                  <div>Price</div>
                  <div>SKU</div>
                  <div>Stock</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-7 gap-4 p-4 border-t items-center">
                  <div>Premium Ergonomic Backpack</div>
                  <div className="text-muted-foreground">Backpacks & Bags</div>
                  <div>$49.99</div>
                  <div>BAG-001</div>
                  <div>250</div>
                  <div><Badge variant="outline">In Stock</Badge></div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Delete</Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-4 p-4 border-t items-center">
                  <div>Complete Stationery Set</div>
                  <div className="text-muted-foreground">Stationery & Supplies</div>
                  <div>$24.99</div>
                  <div>STAT-001</div>
                  <div>500</div>
                  <div><Badge variant="outline">In Stock</Badge></div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Delete</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Content</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">Add new schools, activities, products, or government initiatives.</p>
            </CardHeader>
            <CardContent>
              <Tabs 
                value={activeUploadTab} 
                onValueChange={setActiveUploadTab}
                className="space-y-6"
              >
                <TabsList className="bg-slate-100 w-full justify-start overflow-auto">
                  <TabsTrigger value="school" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">
                    <School className="mr-2 h-4 w-4" />
                    School
                  </TabsTrigger>
                  <TabsTrigger value="activity" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    Activity
                  </TabsTrigger>
                  <TabsTrigger value="product" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Product
                  </TabsTrigger>
                  <TabsTrigger value="government" className="data-[state=active]:bg-[#0B6623] data-[state=active]:text-white">
                    <Building className="mr-2 h-4 w-4" />
                    Government Activity
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="school" className="mt-4">
                  <SchoolForm />
                </TabsContent>

                <TabsContent value="activity" className="mt-4">
                  <ActivityForm />
                </TabsContent>

                <TabsContent value="product" className="mt-4">
                  <ProductForm />
                </TabsContent>

                <TabsContent value="government" className="mt-4">
                  <GovernmentActivityForm />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Growth Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="students" stroke="#0B6623" />
                      <Line type="monotone" dataKey="schools" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Events Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="events" fill="#0B6623" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Activity Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={activityDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name} (${(percent * 100).toFixed(0)}%)`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {activityDistribution.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={index === 0 ? "#0B6623" : COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={[
                        { type: "Schools", count: 25 },
                        { type: "Activities", count: 42 },
                        { type: "Products", count: 78 },
                        { type: "Gov. Events", count: 15 },
                      ]}
                      margin={{ left: 80 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="type" type="category" />
                      <Tooltip />
                      <Bar dataKey="count" fill="#0B6623" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
