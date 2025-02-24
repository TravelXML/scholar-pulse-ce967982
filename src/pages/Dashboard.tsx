import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, School, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Button onClick={() => navigate("/admin")}>
          Admin Panel
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

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

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Quick overview of recent platform activities
            </p>
            {/* Add recent activities list here */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate("/admin")}
            >
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate("/admin")}
            >
              <School className="mr-2 h-4 w-4" />
              Manage Schools
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate("/admin")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Manage Activities
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
