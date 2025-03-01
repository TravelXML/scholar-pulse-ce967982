
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { toast } from "sonner";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    sku: "",
    brand: "",
    stock: "",
    warranty: "",
    discount: "",
    ageRange: "",
    image: ""
  });

  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [classes, setClasses] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newClass, setNewClass] = useState("");
  const [newTag, setNewTag] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor]);
      setNewColor("");
    }
  };

  const removeColor = (color: string) => {
    setColors(colors.filter(c => c !== color));
  };

  const addSize = () => {
    if (newSize && !sizes.includes(newSize)) {
      setSizes([...sizes, newSize]);
      setNewSize("");
    }
  };

  const removeSize = (size: string) => {
    setSizes(sizes.filter(s => s !== size));
  };

  const addClass = () => {
    if (newClass && !classes.includes(newClass)) {
      setClasses([...classes, newClass]);
      setNewClass("");
    }
  };

  const removeClass = (cls: string) => {
    setClasses(classes.filter(c => c !== cls));
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
    const productData = {
      ...formData,
      colors,
      sizes,
      forClass: classes,
      tags
    };
    console.log("Product form submitted:", productData);
    toast.success("Product information submitted for review");
    
    // Reset form
    setFormData({
      name: "",
      description: "",
      category: "",
      price: "",
      sku: "",
      brand: "",
      stock: "",
      warranty: "",
      discount: "",
      ageRange: "",
      image: ""
    });
    setColors([]);
    setSizes([]);
    setClasses([]);
    setTags([]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: "#0B6623" }}>Add New Product</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Backpacks & Bags">Backpacks & Bags</SelectItem>
                  <SelectItem value="Stationery & School Supplies">Stationery & School Supplies</SelectItem>
                  <SelectItem value="Technology & Gadgets">Technology & Gadgets</SelectItem>
                  <SelectItem value="Uniforms & Clothing">Uniforms & Clothing</SelectItem>
                  <SelectItem value="Lunch Boxes & Water Bottles">Lunch Boxes & Water Bottles</SelectItem>
                  <SelectItem value="Art & Craft Supplies">Art & Craft Supplies</SelectItem>
                  <SelectItem value="Sports & Activity Gear">Sports & Activity Gear</SelectItem>
                  <SelectItem value="Organizers & Planners">Organizers & Planners</SelectItem>
                  <SelectItem value="Personal Care & Hygiene">Personal Care & Hygiene</SelectItem>
                  <SelectItem value="Books & Learning Materials">Books & Learning Materials</SelectItem>
                </SelectContent>
              </Select>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input 
                id="price"
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sku">SKU *</Label>
              <Input 
                id="sku"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock Quantity *</Label>
              <Input 
                id="stock"
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Input 
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="discount">Discount (%)</Label>
              <Input 
                id="discount"
                name="discount"
                type="number"
                min="0"
                max="100"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="warranty">Warranty</Label>
              <Input 
                id="warranty"
                name="warranty"
                value={formData.warranty}
                onChange={handleChange}
                placeholder="e.g., 1 year"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ageRange">Age Range</Label>
            <Input 
              id="ageRange"
              name="ageRange"
              value={formData.ageRange}
              onChange={handleChange}
              placeholder="e.g., 5-12 years"
            />
          </div>

          {/* Color Variants */}
          <div className="space-y-2">
            <Label>Color Variants</Label>
            <div className="flex items-center space-x-2">
              <Input 
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                placeholder="Add color (e.g., Red)"
              />
              <Button type="button" onClick={addColor} style={{ backgroundColor: "#0B6623" }}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {colors.map((color, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {color}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeColor(color)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          {/* Size Variants */}
          <div className="space-y-2">
            <Label>Size Variants</Label>
            <div className="flex items-center space-x-2">
              <Input 
                value={newSize}
                onChange={(e) => setNewSize(e.target.value)}
                placeholder="Add size (e.g., XL, 10-12Y)"
              />
              <Button type="button" onClick={addSize} style={{ backgroundColor: "#0B6623" }}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map((size, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {size}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeSize(size)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          {/* Class Variants */}
          <div className="space-y-2">
            <Label>For Class</Label>
            <div className="flex items-center space-x-2">
              <Input 
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
                placeholder="Add class (e.g., Elementary, Middle School)"
              />
              <Button type="button" onClick={addClass} style={{ backgroundColor: "#0B6623" }}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {classes.map((cls, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {cls}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeClass(cls)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex items-center space-x-2">
              <Input 
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add tag (e.g., lightweight, durable)"
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
              placeholder="Enter URL of product image"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" style={{ backgroundColor: "#0B6623" }}>
            Submit Product Information
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
