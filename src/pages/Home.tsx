
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Star, BookOpen, Activity, Bell } from "lucide-react";

// Sample data
const schools = [
  {
    id: 1,
    name: "Green Valley International School",
    location: "123 Education Lane, City",
    rating: 4.5,
    ageGroups: "5-15 years",
    classes: "KG to Grade 10",
    admissionCriteria: "Entrance test and interview required",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Summit Heights Academy",
    location: "456 Learning Road, City",
    rating: 4.8,
    ageGroups: "3-18 years",
    classes: "Pre-KG to Grade 12",
    admissionCriteria: "Assessment and parent interview",
    imageUrl: "/placeholder.svg"
  }
];

const activities = [
  {
    id: 1,
    name: "Advanced Dance Workshop",
    category: "Dance",
    organizer: "City Dance Academy",
    type: "Class",
    schedule: "Mon, Wed, Fri",
    ageGroup: "8-15 years",
    location: "Dance Studio Complex",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Inter-School Chess Championship",
    category: "Competition",
    organizer: "State Education Board",
    type: "Tournament",
    date: "2024-03-15",
    ageGroup: "10-18 years",
    location: "Central Sports Complex",
    imageUrl: "/placeholder.svg"
  }
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState({
    ageGroup: "",
    searchQuery: "",
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Welcome to EduConnect</h1>
        <Button variant="outline">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </Button>
      </div>

      <Tabs defaultValue="schools" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="schools">
            <BookOpen className="mr-2 h-4 w-4" />
            Schools
          </TabsTrigger>
          <TabsTrigger value="activities">
            <Activity className="mr-2 h-4 w-4" />
            Activities
          </TabsTrigger>
        </TabsList>

        {/* Search and Filter Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10"
              value={activeFilter.searchQuery}
              onChange={(e) => setActiveFilter({ ...activeFilter, searchQuery: e.target.value })}
            />
          </div>
          <Input
            placeholder="Filter by age group"
            className="sm:max-w-[200px]"
            value={activeFilter.ageGroup}
            onChange={(e) => setActiveFilter({ ...activeFilter, ageGroup: e.target.value })}
          />
        </div>

        <TabsContent value="schools" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {schools.map((school) => (
              <Card key={school.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={school.imageUrl}
                    alt={school.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-white">
                      <Star className="mr-1 h-3 w-3 fill-current" /> {school.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl">{school.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-4 w-4" />
                        {school.location}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Age: {school.ageGroups}</Badge>
                      <Badge variant="secondary">Classes: {school.classes}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {school.admissionCriteria}
                    </p>
                    <Button className="w-full mt-4">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={activity.imageUrl}
                    alt={activity.name}
                    className="object-cover w-full h-full"
                  />
                  <Badge 
                    className="absolute top-4 right-4"
                    variant={activity.type === "Class" ? "secondary" : "default"}
                  >
                    {activity.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl">{activity.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-4 w-4" />
                        {activity.location}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{activity.category}</Badge>
                      <Badge variant="secondary">Age: {activity.ageGroup}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Organized by: {activity.organizer}
                    </p>
                    {activity.schedule && (
                      <p className="text-sm">Schedule: {activity.schedule}</p>
                    )}
                    {activity.date && (
                      <p className="text-sm">Date: {new Date(activity.date).toLocaleDateString()}</p>
                    )}
                    <Button className="w-full mt-4">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
