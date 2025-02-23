
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Calendar</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Parent-Teacher Meeting</h3>
                  <p className="text-sm text-gray-500">10:00 AM - 11:00 AM</p>
                </div>
                <span className="text-sm text-primary">Today</span>
              </div>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Science Fair</h3>
                  <p className="text-sm text-gray-500">All Day</p>
                </div>
                <span className="text-sm text-primary">Tomorrow</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
