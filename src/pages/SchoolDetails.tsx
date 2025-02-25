
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
          image: "https://images.unsplash.com/photo-1494790108377-