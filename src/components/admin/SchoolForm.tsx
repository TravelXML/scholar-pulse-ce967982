
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function SchoolForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    contactInfo: "",
    website: "",
    establishedYear: "",
    admissionFee: "",
    monthlyFee: "",
    annualFee: "",
    image: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("School form submitted:", formData);
    toast.success("School information submitted for review");
    // Reset form
    setFormData({
      name: "",
      description: "",
      location: "",
      contactInfo: "",
      website: "",
      establishedYear: "",
      admissionFee: "",
      monthlyFee: "",
      annualFee: "",
      image: ""
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Register Your School</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">School Name *</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input 
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea 
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactInfo">Contact Email *</Label>
              <Input 
                id="contactInfo"
                name="contactInfo"
                type="email"
                value={formData.contactInfo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input 
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="establishedYear">Established Year</Label>
              <Input 
                id="establishedYear"
                name="establishedYear"
                type="number"
                value={formData.establishedYear}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admissionFee">Admission Fee ($)</Label>
              <Input 
                id="admissionFee"
                name="admissionFee"
                type="number"
                value={formData.admissionFee}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyFee">Monthly Fee ($)</Label>
              <Input 
                id="monthlyFee"
                name="monthlyFee"
                type="number"
                value={formData.monthlyFee}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL *</Label>
            <Input 
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter URL of school image"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" style={{ backgroundColor: "#0B6623" }}>
            Submit School Information
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
