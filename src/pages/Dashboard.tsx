
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>
      
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
    </div>
  );
}
