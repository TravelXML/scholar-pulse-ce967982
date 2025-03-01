
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function ActivityForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    provider: "",
    location: "",
    date: "",
    registrationDeadline: "",
    registrationFee: "",
    ageGroup: "",
    contactInfo: "",
    sponsored: false,
    sponsoredBy: "",
    image: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, sponsored: checked }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Activity form submitted:", formData);
    toast.success("Activity information submitted for review");
    // Reset form
    setFormData({
      name: "",
      description: "",
      provider: "",
      location: "",
      date: "",
      registrationDeadline: "",
      registrationFee: "",
      ageGroup: "",
      contactInfo: "",
      sponsored: false,
      sponsoredBy: "",
      image: ""
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Register Activity or Event</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Activity Name *</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider">Provider/Organizer *</Label>
              <Input 
                id="provider"
                name="provider"
                value={formData.provider}
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
              <Label htmlFor="location">Location *</Label>
              <Input 
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date/Time *</Label>
              <Input 
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="registrationDeadline">Registration Deadline</Label>
              <Input 
                id="registrationDeadline"
                name="registrationDeadline"
                type="date"
                value={formData.registrationDeadline}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registrationFee">Registration Fee ($)</Label>
              <Input 
                id="registrationFee"
                name="registrationFee"
                type="number"
                value={formData.registrationFee}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ageGroup">Age Group</Label>
              <Input 
                id="ageGroup"
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                placeholder="e.g., 5-12 years"
              />
            </div>
          </div>

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

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="sponsored" 
              checked={formData.sponsored}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="sponsored">This activity is sponsored</Label>
          </div>

          {formData.sponsored && (
            <div className="space-y-2">
              <Label htmlFor="sponsoredBy">Sponsored By</Label>
              <Input 
                id="sponsoredBy"
                name="sponsoredBy"
                value={formData.sponsoredBy}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="image">Image URL *</Label>
            <Input 
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter URL of activity image"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" style={{ backgroundColor: "#0B6623" }}>
            Submit Activity Information
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
