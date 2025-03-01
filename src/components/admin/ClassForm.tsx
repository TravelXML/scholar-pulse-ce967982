
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Upload } from "lucide-react";
import { toast } from "sonner";

export default function ClassForm() {
  const [formData, setFormData] = useState({
    className: "",
    description: "",
    instructor: "",
    gradeLevel: "",
    schedule: "",
    duration: "",
    maxCapacity: "",
    prerequisites: "",
    learningOutcomes: "",
    materials: "",
    enrollmentFee: "",
    image: ""
  });

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const classData = {
      ...formData,
      tags
    };
    console.log("Class form submitted:", classData);
    toast.success("Class information submitted for review");
    
    // Reset form
    setFormData({
      className: "",
      description: "",
      instructor: "",
      gradeLevel: "",
      schedule: "",
      duration: "",
      maxCapacity: "",
      prerequisites: "",
      learningOutcomes: "",
      materials: "",
      enrollmentFee: "",
      image: ""
    });
    setTags([]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Register a Class or Course</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="className">Class Name *</Label>
              <Input 
                id="className"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructor">Instructor *</Label>
              <Input 
                id="instructor"
                name="instructor"
                value={formData.instructor}
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
              <Label htmlFor="gradeLevel">Grade Level *</Label>
              <Select 
                value={formData.gradeLevel} 
                onValueChange={(value) => handleSelectChange("gradeLevel", value)}
              >
                <SelectTrigger id="gradeLevel">
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pre-K">Pre-K</SelectItem>
                  <SelectItem value="Kindergarten">Kindergarten</SelectItem>
                  <SelectItem value="Elementary (1-5)">Elementary (1-5)</SelectItem>
                  <SelectItem value="Middle School (6-8)">Middle School (6-8)</SelectItem>
                  <SelectItem value="High School (9-12)">High School (9-12)</SelectItem>
                  <SelectItem value="All Grades">All Grades</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="enrollmentFee">Enrollment Fee ($) *</Label>
              <Input 
                id="enrollmentFee"
                name="enrollmentFee"
                type="number"
                value={formData.enrollmentFee}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="schedule">Schedule *</Label>
              <Input 
                id="schedule"
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                placeholder="e.g., Mon/Wed/Fri 9-10AM"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duration *</Label>
              <Input 
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 12 weeks"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxCapacity">Max Capacity</Label>
              <Input 
                id="maxCapacity"
                name="maxCapacity"
                type="number"
                value={formData.maxCapacity}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prerequisites">Prerequisites</Label>
            <Textarea 
              id="prerequisites"
              name="prerequisites"
              value={formData.prerequisites}
              onChange={handleChange}
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="learningOutcomes">Learning Outcomes *</Label>
            <Textarea 
              id="learningOutcomes"
              name="learningOutcomes"
              value={formData.learningOutcomes}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="materials">Required Materials</Label>
            <Textarea 
              id="materials"
              name="materials"
              value={formData.materials}
              onChange={handleChange}
              rows={2}
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex items-center space-x-2">
              <Input 
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add tag (e.g., Science, Arts, Technology)"
              />
              <Button type="button" onClick={addTag} style={{ backgroundColor: "#0B6623" }}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeTag(tag)}
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
              placeholder="Enter URL of class image"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" style={{ backgroundColor: "#0B6623" }}>
            Submit Class Information
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
