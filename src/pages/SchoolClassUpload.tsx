
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SchoolForm from "@/components/admin/SchoolForm";
import ClassForm from "@/components/admin/ClassForm";
import ActivityForm from "@/components/admin/ActivityForm";

export default function SchoolClassUpload() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold" style={{ color: "#0B6623" }}>School Portal</h1>
      </div>

      <Tabs defaultValue="school" className="space-y-6">
        <TabsList>
          <TabsTrigger value="school">Register School</TabsTrigger>
          <TabsTrigger value="class">Register Class</TabsTrigger>
          <TabsTrigger value="activity">Register Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="school" className="space-y-6">
          <SchoolForm />
        </TabsContent>

        <TabsContent value="class" className="space-y-6">
          <ClassForm />
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <ActivityForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
