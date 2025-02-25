
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, School, Calendar } from "lucide-react";

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

export default function StatisticsCards() {
  return (
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
  );
}
