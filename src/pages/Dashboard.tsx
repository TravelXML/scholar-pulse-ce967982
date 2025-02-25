import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  School, 
  Calendar, 
  ArrowRight, 
  Star, 
  ShoppingBag,
  Heart,
  Search,
  Filter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface SchoolCard {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalRatings: number;
  preferredFor: string[];
  description: string;
}

interface ActivityCard {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalRatings: number;
  preferredFor: string[];
  description: string;
}

interface SchoolItem {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  colors?: string[];
  sizes?: string[];
  sku: string;
  description: string;
  tags: string[];
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  
  const statistics = [
    {
      title: "Total Students",
      value: "1,234",
      icon: Users,
    },
    {
      title: "Active Schools",
      value: "45",
      icon: School,
    },
    {
      title: "Upcoming Events",
      value: "23",
      icon: Calendar,
    },
  ];

  const schools: SchoolCard[] = [
    {
      id: "1",
      name: "Sunshine Kids Academy",
      image: "https://images.unsplash.com/photo-1501286727345-7e5d1b4f49cc?w=800&h=600",
      rating: 4.8,
      totalRatings: 256,
      preferredFor: ["Early Learning", "Creative Arts", "Special Needs"],
      description: "A nurturing environment for early childhood development with focus on creative learning."
    },
    {
      id: "2",
      name: "Global Montessori",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600",
      rating: 4.9,
      totalRatings: 189,
      preferredFor: ["Montessori Method", "International Curriculum", "Language Skills"],
      description: "International standard Montessori education with multilingual programs."
    },
    {
      id: "3",
      name: "Tech Tots Preschool",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600",
      rating: 4.7,
      totalRatings: 167,
      preferredFor: ["STEAM Programs", "Digital Learning", "Physical Activities"],
      description: "Modern preschool focusing on technology and hands-on learning."
    },
    {
      id: "4",
      name: "Nature's Nursery",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=600",
      rating: 4.6,
      totalRatings: 145,
      preferredFor: ["Environmental Education", "Outdoor Activities", "Sustainability"],
      description: "Eco-friendly school with focus on nature-based learning."
    },
  ];

  const activities: ActivityCard[] = [
    {
      id: "1",
      name: "Little Scientists Club",
      image: "https://images.unsplash.com/photo-1554757388-29a2a86ef02f?w=800&h=600",
      rating: 4.9,
      totalRatings: 178,
      preferredFor: ["STEM Interest", "Ages 5-8", "Curious Minds"],
      description: "Hands-on science experiments and discoveries for young minds."
    },
    {
      id: "2",
      name: "Music & Movement",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600",
      rating: 4.7,
      totalRatings: 156,
      preferredFor: ["Musical Development", "Motor Skills", "All Ages"],
      description: "Interactive music and dance sessions for holistic development."
    },
    {
      id: "3",
      name: "Art Adventure",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600",
      rating: 4.8,
      totalRatings: 134,
      preferredFor: ["Creative Expression", "Fine Motor Skills", "Ages 3-12"],
      description: "Exploring creativity through various art mediums and techniques."
    },
    {
      id: "4",
      name: "Sports Stars",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&h=600",
      rating: 4.6,
      totalRatings: 189,
      preferredFor: ["Physical Development", "Team Building", "Ages 4-12"],
      description: "Multi-sports program focusing on fitness and teamwork."
    },
  ];

  const schoolItems: SchoolItem[] = [
    {
      id: "1",
      name: "Premium Ergonomic Backpack",
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=800&h=600",
      category: "Backpacks & Bags",
      price: 49.99,
      colors: ["Navy", "Black", "Red"],
      sku: "BAG-001",
      description: "Durable school backpack with padded laptop compartment",
      tags: ["backpack", "storage", "ergonomic"]
    },
    {
      id: "2",
      name: "Complete Stationery Set",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&h=600",
      category: "Stationery & School Supplies",
      price: 24.99,
      sku: "STAT-001",
      description: "Essential stationery pack with notebooks and writing tools",
      tags: ["stationery", "essentials", "writing"]
    },
    {
      id: "3",
      name: "Student Laptop",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600",
      category: "Technology & Gadgets",
      price: 499.99,
      sku: "TECH-001",
      description: "Educational laptop optimized for learning",
      tags: ["technology", "computer", "digital"]
    },
    {
      id: "4",
      name: "School Uniform Set",
      image: "https://images.unsplash.com/photo-1621570171347-c6276be7b47d?w=800&h=600",
      category: "Uniforms & Clothing",
      price: 59.99,
      sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Navy", "White"],
      sku: "UNI-001",
      description: "Complete school uniform set",
      tags: ["uniform", "clothing", "dress-code"]
    },
    {
      id: "5",
      name: "Insulated Lunch Set",
      image: "https://images.unsplash.com/photo-1584992236310-6ded3f94d157?w=800&h=600",
      category: "Lunch Boxes & Water Bottles",
      price: 29.99,
      colors: ["Blue", "Pink", "Green"],
      sku: "LUNCH-001",
      description: "Insulated lunch box with matching water bottle",
      tags: ["lunch", "food", "hydration"]
    },
    {
      id: "6",
      name: "Art Supply Kit",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600",
      category: "Art & Craft Supplies",
      price: 39.99,
      sku: "ART-001",
      description: "Complete art kit for creative projects",
      tags: ["art", "creative", "supplies"]
    },
    {
      id: "7",
      name: "Sports Equipment Pack",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&h=600",
      category: "Sports & Activity Gear",
      price: 79.99,
      sku: "SPORT-001",
      description: "Essential sports equipment bundle",
      tags: ["sports", "activity", "physical"]
    },
    {
      id: "8",
      name: "Academic Planner",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&h=600",
      category: "Organizers & Planners",
      price: 19.99,
      sku: "ORG-001",
      description: "Student planner with study tracking",
      tags: ["organization", "planning", "academic"]
    },
    {
      id: "9",
      name: "Hygiene Care Package",
      image: "https://images.unsplash.com/photo-1584362522949-b94fd54bbdb4?w=800&h=600",
      category: "Personal Care & Hygiene",
      price: 34.99,
      sku: "CARE-001",
      description: "Essential personal care items for school",
      tags: ["hygiene", "health", "care"]
    },
    {
      id: "10",
      name: "Math Learning Kit",
      image: "https://images.unsplash.com/photo-1594912772762-8435b9e0e506?w=800&h=600",
      category: "Books & Learning Materials",
      price: 44.99,
      sku: "LEARN-001",
      description: "Comprehensive mathematics learning kit",
      tags: ["education", "math", "learning"]
    }
  ];

  const categories = Array.from(new Set(schoolItems.map(item => item.category)));

  const filterItems = (items: SchoolItem[]) => {
    return items.filter(item => {
      const matchesSearch = searchQuery.toLowerCase() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Welcome to Scholar Plus</h1>
          <p className="text-muted-foreground">Your complete educational companion</p>
        </div>
        <Button onClick={() => navigate("/admin")}>
          Admin Panel
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {statistics.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="schools" className="space-y-4">
        <TabsList>
          <TabsTrigger value="schools">Schools</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="supplies">School Supplies</TabsTrigger>
        </TabsList>

        <TabsContent value="schools" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schools.map((school) => (
              <Card key={school.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={school.image} 
                    alt={school.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{school.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{school.rating}</span>
                    <span className="text-muted-foreground">({school.totalRatings})</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{school.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {school.preferredFor.map((pref, idx) => (
                      <Badge key={idx} variant="secondary">{pref}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{activity.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{activity.rating}</span>
                    <span className="text-muted-foreground">({activity.totalRatings})</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.preferredFor.map((pref, idx) => (
                      <Badge key={idx} variant="secondary">{pref}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="supplies" className="space-y-4">
          <div className="flex gap-4 flex-col md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search supplies..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="border rounded p-2"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filterItems(schoolItems).map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
              >
                <div className="aspect-video relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">${item.price}</span>
                    <Badge variant="outline">SKU: {item.sku}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <Badge variant="secondary">{item.category}</Badge>
                  {item.colors && (
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Available Colors:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.colors.map((color) => (
                          <Badge key={color} variant="outline">{color}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.sizes && (
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Available Sizes:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.sizes.map((size) => (
                          <Badge key={size} variant="outline">{size}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
