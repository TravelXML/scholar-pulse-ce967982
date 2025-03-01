
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductForm from "@/components/admin/ProductForm";

export default function ProductUpload() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold" style={{ color: "#0B6623" }}>Product Management</h1>
      </div>

      <Tabs defaultValue="add" className="space-y-6">
        <TabsList>
          <TabsTrigger value="add">Add Product</TabsTrigger>
          <TabsTrigger value="manage">Manage Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="add" className="space-y-6">
          <ProductForm />
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Your Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">You haven't added any products yet. Use the form to create your first product.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No orders have been placed for your products yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Sales Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Start selling products to see analytics data here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
