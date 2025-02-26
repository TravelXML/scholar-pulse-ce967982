
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Globe, 
  Calendar, 
  Users, 
  BookOpen,
  GraduationCap,
  School,
  User,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { schools } from "@/data/dashboardData";

// Extended staff interface
interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

// Extended school interface with additional details
interface SchoolDetails {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalRatings: number;
  preferredFor: string[];
  description: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  board: string;
  standards: string[];
  hasPlayschool: boolean;
  hasNursery: boolean;
  hasDaycare: boolean;
  founded: string;
  specializations: string[];
  staff: {
    principal: StaffMember;
    administrators: StaffMember[];
    teachers: StaffMember[];
  };
  images: {
    exterior: string[];
    interior: string[];
    classrooms: string[];
    playArea: string[];
    diningArea: string[];
  };
  socialMedia: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

// Function to generate mock detailed school data
const generateDetailedSchoolData = (baseSchool: any): SchoolDetails => {
  return {
    ...baseSchool,
    address: `${Math.floor(Math.random() * 1000) + 1} Education Avenue, Springfield`,
    phone: `(555) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    website: `www.${baseSchool.name.toLowerCase().replace(/\s+/g, '')}.edu`,
    email: `info@${baseSchool.name.toLowerCase().replace(/\s+/g, '')}.edu`,
    founded: `${1960 + Math.floor(Math.random() * 50)}`,
    specializations: [
      ...baseSchool.preferredFor,
      "Technology Integration",
      "Holistic Development",
      "Sports Excellence"
    ],
    staff: {
      principal: {
        id: "p1",
        name: "Dr. " + ["James Smith", "Maria Johnson", "Robert Williams", "Elizabeth Brown"][Math.floor(Math.random() * 4)],
        role: "Principal",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300",
        bio: "With over 20 years of experience in education, our principal leads the school with dedication and vision."
      },
      administrators: [
        {
          id: "a1",
          name: ["Jennifer Davis", "Michael Wilson", "Sarah Thompson", "David Garcia"][Math.floor(Math.random() * 4)],
          role: "Vice Principal",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300",
          bio: "Dedicated to ensuring smooth school operations and maintaining academic standards."
        },
        {
          id: "a2",
          name: ["Thomas Anderson", "Nancy White", "Richard Moore", "Susan Lee"][Math.floor(Math.random() * 4)],
          role: "Administrative Head",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300",
          bio: "Oversees administrative tasks and coordinates between different departments."
        }
      ],
      teachers: [
        {
          id: "t1",
          name: ["Emily Johnson", "Daniel Martinez", "Rebecca Lewis", "John Miller"][Math.floor(Math.random() * 4)],
          role: "Science Faculty Head",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300",
          bio: "Passionate about making science accessible and fun for students."
        },
        {
          id: "t2",
          name: ["Patricia Clark", "Kevin Taylor", "Laura Allen", "Steven Wright"][Math.floor(Math.random() * 4)],
          role: "Mathematics Faculty Head",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300",
          bio: "Dedicated to building strong analytical skills in students."
        }
      ]
    },
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1594740982109-9fb0af8ed6a3?w=600&h=400",
        "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?w=600&h=400"
      ],
      interior: [
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&h=400",
        "https://images.unsplash.com/photo-1505081598304-3bee85f930d4?w=600&h=400"
      ],
      classrooms: [
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400",
        "https://images.unsplash.com/photo-1583227122027-5c7e95b3e39f?w=600&h=400"
      ],
      playArea: [
        "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=600&h=400",
        "https://images.unsplash.com/photo-1471869303149-a8c5952d9ddb?w=600&h=400"
      ],
      diningArea: [
        "https://images.unsplash.com/photo-1567633483699-5a93739867ba?w=600&h=400",
        "https://images.unsplash.com/photo-1539922631499-59889d7000a3?w=600&h=400"
      ]
    },
    socialMedia: {
      instagram: "schoolname_official",
      facebook: "SchoolNameOfficial",
      youtube: "SchoolNameEdu"
    }
  };
};

const SchoolDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  const baseSchool = schools.find(school => school.id === id) || schools[0];
  const schoolData = generateDetailedSchoolData(baseSchool);

  return (
    <div className="space-y-6">
      <Button 
        variant="outline" 
        className="flex items-center"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Schools
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold" style={{ color: "#0B6623" }}>
                    {schoolData.name}
                  </CardTitle>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center mr-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(schoolData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium">{schoolData.rating.toFixed(1)}</span>
                      <span className="ml-1 text-xs text-muted-foreground">({schoolData.totalRatings} reviews)</span>
                    </div>
                    <Badge>{schoolData.board}</Badge>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xs text-muted-foreground">Founded: {schoolData.founded}</p>
                  <div className="flex mt-2">
                    <Button size="sm" variant="outline" className="mr-2">
                      <Instagram className="h-4 w-4 mr-1" />
                    </Button>
                    <Button size="sm" variant="outline" className="mr-2">
                      <Facebook className="h-4 w-4 mr-1" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Youtube className="h-4 w-4 mr-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                <img 
                  src={schoolData.image} 
                  alt={schoolData.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
                <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  <TabsTrigger value="staff">Staff</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold mb-2">About {schoolData.name}</h3>
                    <p className="text-sm text-muted-foreground">{schoolData.description}</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5" style={{ color: "#0B6623" }} />
                          <span>{schoolData.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" style={{ color: "#0B6623" }} />
                          <span>{schoolData.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" style={{ color: "#0B6623" }} />
                          <span>{schoolData.website}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Available Programs</h3>
                      <div className="flex flex-wrap gap-2">
                        {schoolData.hasPlayschool && 
                          <Badge variant="outline" className="flex items-center">
                            <GraduationCap className="h-3 w-3 mr-1" />
                            Playschool
                          </Badge>
                        }
                        {schoolData.hasNursery && 
                          <Badge variant="outline" className="flex items-center">
                            <GraduationCap className="h-3 w-3 mr-1" />
                            Nursery
                          </Badge>
                        }
                        {schoolData.hasDaycare && 
                          <Badge variant="outline" className="flex items-center">
                            <GraduationCap className="h-3 w-3 mr-1" />
                            Daycare
                          </Badge>
                        }
                        {schoolData.standards.map((standard, idx) => (
                          <Badge key={idx} variant="outline" className="flex items-center">
                            <School className="h-3 w-3 mr-1" />
                            Class {standard}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-semibold mb-2">Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {schoolData.specializations.map((specialization, idx) => (
                        <Badge key={idx} className="bg-[#0B6623]">
                          {specialization}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="facilities" className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg" style={{ color: "#0B6623" }}>Amenities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="bg-primary/10 p-1 rounded-full mr-2">
                              <BookOpen className="h-4 w-4" style={{ color: "#0B6623" }} />
                            </div>
                            Library with 10,000+ books
                          </li>
                          <li className="flex items-center">
                            <div className="bg-primary/10 p-1 rounded-full mr-2">
                              <Users className="h-4 w-4" style={{ color: "#0B6623" }} />
                            </div>
                            Sports facilities and playgrounds
                          </li>
                          <li className="flex items-center">
                            <div className="bg-primary/10 p-1 rounded-full mr-2">
                              <School className="h-4 w-4" style={{ color: "#0B6623" }} />
                            </div>
                            Computer labs and science labs
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg" style={{ color: "#0B6623" }}>Extra Curricular</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="bg-primary/10 p-1 rounded-full mr-2">
                              <Calendar className="h-4 w-4" style={{ color: "#0B6623" }} />
                            </div>
                            Regular cultural events and competitions
                          </li>
                          <li className="flex items-center">
                            <div className="bg-primary/10 p-1 rounded-full mr-2">
                              <User className="h-4 w-4" style={{ color: "#0B6623" }} />
                            </div>
                            Personalized student counseling
                          </li>
                          <li className="flex items-center">
                            <div className="bg-primary/10 p-1 rounded-full mr-2">
                              <BookOpen className="h-4 w-4" style={{ color: "#0B6623" }} />
                            </div>
                            Special workshops and masterclasses
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="staff" className="space-y-4 mt-4">
                  <h3 className="font-semibold">Principal</h3>
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={schoolData.staff.principal.image} />
                      <AvatarFallback>{schoolData.staff.principal.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{schoolData.staff.principal.name}</p>
                      <p className="text-sm text-muted-foreground">{schoolData.staff.principal.role}</p>
                      <p className="text-sm mt-1">{schoolData.staff.principal.bio}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <h3 className="font-semibold">Administration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {schoolData.staff.administrators.map((admin) => (
                      <div key={admin.id} className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={admin.image} />
                          <AvatarFallback>{admin.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{admin.name}</p>
                          <p className="text-sm text-muted-foreground">{admin.role}</p>
                          <p className="text-sm mt-1">{admin.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <h3 className="font-semibold">Faculty Heads</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {schoolData.staff.teachers.map((teacher) => (
                      <div key={teacher.id} className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={teacher.image} />
                          <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{teacher.name}</p>
                          <p className="text-sm text-muted-foreground">{teacher.role}</p>
                          <p className="text-sm mt-1">{teacher.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="gallery" className="mt-4">
                  <Tabs defaultValue="exterior">
                    <TabsList>
                      <TabsTrigger value="exterior">Exterior</TabsTrigger>
                      <TabsTrigger value="interior">Interior</TabsTrigger>
                      <TabsTrigger value="classrooms">Classrooms</TabsTrigger>
                      <TabsTrigger value="playArea">Play Area</TabsTrigger>
                      <TabsTrigger value="diningArea">Dining Area</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="exterior" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {schoolData.images.exterior.map((src, idx) => (
                          <div key={idx} className="aspect-video rounded-md overflow-hidden">
                            <img src={src} alt={`Exterior ${idx+1}`} className="object-cover w-full h-full" />
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="interior" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {schoolData.images.interior.map((src, idx) => (
                          <div key={idx} className="aspect-video rounded-md overflow-hidden">
                            <img src={src} alt={`Interior ${idx+1}`} className="object-cover w-full h-full" />
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="classrooms" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {schoolData.images.classrooms.map((src, idx) => (
                          <div key={idx} className="aspect-video rounded-md overflow-hidden">
                            <img src={src} alt={`Classroom ${idx+1}`} className="object-cover w-full h-full" />
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="playArea" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {schoolData.images.playArea.map((src, idx) => (
                          <div key={idx} className="aspect-video rounded-md overflow-hidden">
                            <img src={src} alt={`Play Area ${idx+1}`} className="object-cover w-full h-full" />
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="diningArea" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {schoolData.images.diningArea.map((src, idx) => (
                          <div key={idx} className="aspect-video rounded-md overflow-hidden">
                            <img src={src} alt={`Dining Area ${idx+1}`} className="object-cover w-full h-full" />
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-center text-muted-foreground">Reviews will be available soon.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg" style={{ color: "#0B6623" }}>Admission Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" style={{ backgroundColor: "#0B6623" }}>
                  Apply for Admission
                </Button>
                <Button variant="outline" className="w-full">
                  Download Brochure
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule a Visit
                </Button>
                <Separator />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Have questions?</p>
                  <p className="font-medium">{schoolData.phone}</p>
                  <p className="text-sm">{schoolData.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg" style={{ color: "#0B6623" }}>Related Schools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schools.filter(s => s.id !== id).slice(0, 3).map((school) => (
                  <div key={school.id} className="flex items-start space-x-2">
                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <img src={school.image} alt={school.name} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{school.name}</p>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(school.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                        <span className="ml-1 text-xs">{school.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetailsPage;
