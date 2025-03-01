
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { toast } from "sonner";

export default function GovernmentActivityForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    organizerName: "",
    organizerType: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    venue: "",
    contactEmail: "",
    contactPhone: "",
    website: "",
    eligibilityCriteria: "",
    applicationProcess: "",
    prizes: "",
    isRecurring: false,
    isFree: false,
    registrationFee: "",
    image: ""
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const removeCategory = (category: string) => {
    setCategories(categories.filter(c => c !== category));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const activityData = {
      ...formData,
      categories
    };
    console.log("Government activity form submitted:", activityData);
    toast.success("Activity information submitted for review");
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      organizerName: "",
      organizerType: "",
      startDate: "",
      endDate: "",
      registrationDeadline: "",
      venue: "",
      contactEmail: "",
      contactPhone: "",
      website: "",
      eligibilityCriteria: "",
      applicationProcess: "",
      prizes: "",
      isRecurring: false,
      isFree: false,
      registrationFee: "",
      image: ""
    });
    setCategories([]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Register Government or Educational Activity</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Activity Title *</Label>
              <Input 
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizerName">Organizer Name *</Label>
              <Input 
                id="organizerName"
                name="organizerName"
                value={formData.organizerName}
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

          <div className="space-y-2">
            <Label htmlFor="organizerType">Organizer Type *</Label>
            <Select 
              value={formData.organizerType} 
              onValueChange={(value) => handleSelectChange("organizerType", value)}
            >
              <SelectTrigger id="organizerType">
                <SelectValue placeholder="Select organizer type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="State Government">State Government</SelectItem>
                <SelectItem value="Central Government">Central Government</SelectItem>
                <SelectItem value="Educational Institution">Educational Institution</SelectItem>
                <SelectItem value="Non-Profit Organization">Non-Profit Organization</SelectItem>
                <SelectItem value="External Provider">External Provider</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date *</Label>
              <Input 
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date *</Label>
              <Input 
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registrationDeadline">Registration Deadline *</Label>
              <Input 
                id="registrationDeadline"
                name="registrationDeadline"
                type="date"
                value={formData.registrationDeadline}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="venue">Venue *</Label>
            <Input 
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email *</Label>
              <Input 
                id="contactEmail"
                name="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input 
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
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

          <div className="space-y-2">
            <Label htmlFor="eligibilityCriteria">Eligibility Criteria *</Label>
            <Textarea 
              id="eligibilityCriteria"
              name="eligibilityCriteria"
              value={formData.eligibilityCriteria}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="applicationProcess">Application Process *</Label>
            <Textarea 
              id="applicationProcess"
              name="applicationProcess"
              value={formData.applicationProcess}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="prizes">Prizes/Recognition</Label>
            <Textarea 
              id="prizes"
              name="prizes"
              value={formData.prizes}
              onChange={handleChange}
              rows={2}
            />
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="isRecurring" 
                checked={formData.isRecurring}
                onCheckedChange={(checked) => handleCheckboxChange("isRecurring", checked as boolean)}
              />
              <Label htmlFor="isRecurring">This is a recurring event</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="isFree" 
                checked={formData.isFree}
                onCheckedChange={(checked) => {
                  handleCheckboxChange("isFree", checked as boolean);
                  if (checked) {
                    setFormData(prev => ({ ...prev, registrationFee: "" }));
                  }
                }}
              />
              <Label htmlFor="isFree">This event is free</Label>
            </div>
          </div>

          {!formData.isFree && (
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
          )}

          {/* Categories */}
          <div className="space-y-2">
            <Label>Categories</Label>
            <div className="flex items-center space-x-2">
              <Input 
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Add category (e.g., Science Fair, Competition)"
              />
              <Button type="button" onClick={addCategory} style={{ backgroundColor: "#0B6623" }}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeCategory(category)}
                  />
                </Badge>
              ))}
            </div>
          </div>

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
