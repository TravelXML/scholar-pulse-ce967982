
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sportsData = [
  { name: 'Football', hours: 4 },
  { name: 'Basketball', hours: 3 },
  { name: 'Swimming', hours: 2 },
  { name: 'Tennis', hours: 1 },
];

const activitiesData = [
  { name: 'Music', hours: 3 },
  { name: 'Art', hours: 2 },
  { name: 'Dance', hours: 4 },
  { name: 'Drama', hours: 2 },
];

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
            <CardTitle className="text-lg">Additional Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activitiesData}>
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#48BB78" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4">Hours per week in extracurricular activities</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
