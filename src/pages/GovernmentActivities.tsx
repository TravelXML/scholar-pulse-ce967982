
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GovernmentActivityForm from "@/components/admin/GovernmentActivityForm";

export default function GovernmentActivities() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold" style={{ color: "#0B6623" }}>Government & External Activities</h1>
      </div>

      <Tabs defaultValue="register" className="space-y-6">
        <TabsList>
          <TabsTrigger value="register">Register Activity</TabsTrigger>
          <TabsTrigger value="manage">Manage Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="register" className="space-y-6">
          <GovernmentActivityForm />
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Your Registered Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">You haven't registered any activities yet. Use the form to create your first activity.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
