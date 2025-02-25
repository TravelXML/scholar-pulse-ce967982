
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
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300",
          bio: "Dedicated to helping students develop a strong foundation in mathematics."
        },
        {
          id: "t3",
          name: ["Michelle Scott", "Brian Young", "Lisa King", "Edward Baker"][Math.floor(Math.random() * 4)],
          role: "English Faculty Head",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300",
          bio: "Committed to fostering strong communication skills and a love for literature."
        }
      ]
    },
    images: {
      exterior: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600",
        "https://images.unsplash.com/photo-1545580158-b41b8f54a5ed?w=800&h=600"
      ],
      interior: [
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=600",
        "https://images.unsplash.com/photo-1551145317-07edbbb5c6d3?w=800&h=600"
      ],
      classrooms: [
        "https://images.unsplash.com/photo-1623680623427-aed09d6b05ac?w=800&h=600",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600"
      ],
      playArea: [
        "https://images.unsplash.com/photo-1553527922-21a2dfbbc5b7?w=800&h=600",
        "https://images.unsplash.com/photo-1536500152107-01ab1422194c?w=800&h=600"
      ],
      diningArea: [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600",
        "https://images.unsplash.com/photo-1606787366850-de6330128a16?w=800&h=600"
      ]
    },
    socialMedia: {
      instagram: "instagram.com/" + baseSchool.name.toLowerCase().replace(/\s+/g, ''),
      facebook: "facebook.com/" + baseSchool.name.toLowerCase().replace(/\s+/g, ''),
      youtube: "youtube.com/channel/" + baseSchool.name.toLowerCase().replace(/\s+/g, '')
    }
  };
};

export default function SchoolDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the basic school data
  const baseSchool = schools.find(school => school.id === id);
  
  // If no school is found, redirect to dashboard
  if (!baseSchool) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-2xl font-semibold mb-4" style={{ color: "#0B6623" }}>School Not Found</h1>
        <p className="text-muted-foreground mb-6">The school you're looking for doesn't exist or has been removed.</p>
        <Button 
          onClick={() => navigate("/dashboard")}
          style={{ backgroundColor: "#0B6623" }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Dashboard
        </Button>
      </div>
    );
  }
  
  // Generate detailed school data from base school
  const schoolDetails: SchoolDetails = generateDetailedSchoolData(baseSchool);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" style={{ color: "#0B6623" }} />
          Back to Dashboard
        </Button>
      </div>
      
      {/* School Header */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img 
              src={schoolDetails.image} 
              alt={schoolDetails.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4">
              <Badge className="text-lg py-1.5 px-3 bg-[#0B6623]">
                {schoolDetails.board}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 space-y-4">
          <h1 className="text-3xl font-bold" style={{ color: "#0B6623" }}>{schoolDetails.name}</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`h-5 w-5 ${
                    star <= Math.floor(schoolDetails.rating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">{schoolDetails.rating}</span>
            <span className="text-muted-foreground">({schoolDetails.totalRatings} ratings)</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{schoolDetails.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{schoolDetails.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <a 
                href={`https://${schoolDetails.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {schoolDetails.website}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Founded: {schoolDetails.founded}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Educational Levels:</h3>
            <div className="flex flex-wrap gap-2">
              {schoolDetails.hasPlayschool && <Badge variant="outline">Playschool</Badge>}
              {schoolDetails.hasNursery && <Badge variant="outline">Nursery</Badge>}
              {schoolDetails.hasDaycare && <Badge variant="outline">Daycare</Badge>}
              <Badge variant="secondary">Classes: {schoolDetails.standards.join(', ')}</Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Specializes in:</h3>
            <div className="flex flex-wrap gap-2">
              {schoolDetails.specializations.map((spec, index) => (
                <Badge key={index} className="bg-[#0B6623]/10 text-[#0B6623] border border-[#0B6623]/30">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href={`https://${schoolDetails.socialMedia.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href={`https://${schoolDetails.socialMedia.facebook}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href={`https://${schoolDetails.socialMedia.youtube}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <p className="text-lg">{schoolDetails.description}</p>
      
      {/* School Content Tabs */}
      <Tabs defaultValue="about" className="mt-6">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="about">
            <School className="h-4 w-4 mr-2" style={{ color: "#0B6623" }} />
            About
          </TabsTrigger>
          <TabsTrigger value="faculty">
            <User className="h-4 w-4 mr-2" style={{ color: "#0B6623" }} />
            Faculty & Staff
          </TabsTrigger>
          <TabsTrigger value="gallery">
            <BookOpen className="h-4 w-4 mr-2" style={{ color: "#0B6623" }} />
            Gallery
          </TabsTrigger>
        </TabsList>
        
        {/* About Tab */}
        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>About Our School</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {schoolDetails.name} is a premier educational institution founded in {schoolDetails.founded}. 
                We are committed to providing quality education and fostering a nurturing environment where 
                students can grow academically, socially, and emotionally.
              </p>
              <p>
                Our school follows the {schoolDetails.board} curriculum and offers education from 
                {schoolDetails.hasPlayschool ? ' playschool' : ''} 
                {schoolDetails.hasNursery ? ', nursery' : ''} 
                {schoolDetails.hasDaycare ? ', daycare' : ''} 
                to classes {schoolDetails.standards.join(', ')}.
              </p>
              <p>
                At {schoolDetails.name}, we specialize in {schoolDetails.specializations.join(', ')}, 
                providing a well-rounded education that prepares students for future success.
              </p>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#0B6623" }}>Our Facilities</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Modern, well-equipped classrooms</li>
                  <li>State-of-the-art computer labs</li>
                  <li>Extensive library with print and digital resources</li>
                  <li>Science laboratories with latest equipment</li>
                  <li>Sports facilities including indoor and outdoor play areas</li>
                  <li>Hygienic dining areas with nutritious meal options</li>
                  <li>Medical room with qualified staff</li>
                  <li>Transport facilities with GPS-enabled buses</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: "#0B6623" }}>Academic Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <GraduationCap className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Core Curriculum</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive education based on {schoolDetails.board} standards with 
                        emphasis on fundamental concepts and practical applications.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Enrichment Programs</h4>
                      <p className="text-sm text-muted-foreground">
                        Additional courses in arts, music, dance, and languages to develop 
                        well-rounded personalities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">STEM Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Special emphasis on Science, Technology, Engineering, and Mathematics 
                        through project-based learning and experimentation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Life Skills Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Programs designed to develop critical thinking, problem-solving, 
                        communication, and leadership skills.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle style={{ color: "#0B6623" }}>Extracurricular Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Sports & Athletics</h4>
                      <p className="text-sm text-muted-foreground">
                        Football, basketball, cricket, athletics, swimming, tennis, and more, 
                        with regular inter-school competitions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Arts & Culture</h4>
                      <p className="text-sm text-muted-foreground">
                        Drama club, music ensembles, dance groups, art workshops, and annual cultural festivals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Clubs & Societies</h4>
                      <p className="text-sm text-muted-foreground">
                        Science club, debate society, math olympiad team, robotics club, 
                        environment club, and literary society.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0B6623] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Community Service</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular involvement in social service activities and community outreach programs.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Faculty Tab */}
        <TabsContent value="faculty" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={schoolDetails.staff.principal.image} alt={schoolDetails.staff.principal.name} />
                    <AvatarFallback>{schoolDetails.staff.principal.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-semibold mb-1">{schoolDetails.staff.principal.name}</h3>
                  <p className="text-muted-foreground mb-4">{schoolDetails.staff.principal.role}</p>
                  <p>{schoolDetails.staff.principal.bio}</p>
                  <p className="mt-4">
                    As the Principal of {schoolDetails.name}, {schoolDetails.staff.principal.name.split(' ')[0]} is dedicated to fostering an environment 
                    of academic excellence and personal growth. With a strong background in education and 
                    leadership, {schoolDetails.staff.principal.name.split(' ')[0]} has implemented innovative programs and initiatives that 
                    have significantly enhanced the quality of education at our school.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Administrative Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {schoolDetails.staff.administrators.map((admin) => (
                  <div key={admin.id} className="flex flex-col sm:flex-row gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={admin.image} alt={admin.name} />
                      <AvatarFallback>{admin.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{admin.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{admin.role}</p>
                      <p className="text-sm">{admin.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Faculty Heads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {schoolDetails.staff.teachers.map((teacher) => (
                  <div key={teacher.id} className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-2">
                      <AvatarImage src={teacher.image} alt={teacher.name} />
                      <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{teacher.role}</p>
                    <p className="text-sm">{teacher.bio}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Gallery Tab */}
        <TabsContent value="gallery" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Exterior</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schoolDetails.images.exterior.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={img} 
                      alt={`${schoolDetails.name} exterior ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Interior</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schoolDetails.images.interior.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={img} 
                      alt={`${schoolDetails.name} interior ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Classrooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schoolDetails.images.classrooms.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={img} 
                      alt={`${schoolDetails.name} classroom ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Play Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schoolDetails.images.playArea.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={img} 
                      alt={`${schoolDetails.name} play area ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Dining Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schoolDetails.images.diningArea.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={img} 
                      alt={`${schoolDetails.name} dining area ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#0B6623" }}>Video Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <Youtube className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-lg font-semibold mb-2">School Tour Video</h3>
                  <p className="text-muted-foreground mb-4">
                    Take a virtual tour of our campus and facilities.
                  </p>
                  <a 
                    href={`https://${schoolDetails.socialMedia.youtube}`}
                    target="_blank"
                    rel="noopener norefer