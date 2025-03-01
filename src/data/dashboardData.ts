export interface SchoolCard {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalRatings: number;
  preferredFor: string[];
  description: string;
  location?: string;
  contactInfo?: string;
  website?: string;
  establishedYear?: number;
  fees?: {
    admission?: number;
    monthly?: number;
    annual?: number;
  };
}

export interface ActivityCard {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalRatings: number;
  preferredFor: string[];
  description: string;
  provider?: string;
  location?: string;
  date?: string;
  registrationDeadline?: string;
  registrationFee?: number;
  ageGroup?: string;
  contactInfo?: string;
  sponsored?: boolean;
  sponsoredBy?: string;
}

export interface SchoolItem {
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
  ageRange?: string;
  forClass?: string[];
  stock?: number;
  brand?: string;
  sellerInfo?: {
    name: string;
    rating: number;
    totalSales: number;
  };
  discount?: number;
  warranty?: string;
}

export const schools: SchoolCard[] = [
  {
    id: "1",
    name: "Sunshine Kids Academy",
    image: "https://images.unsplash.com/photo-1501286727345-7e5d1b4f49cc?w=800&h=600",
    rating: 4.8,
    totalRatings: 256,
    preferredFor: ["Early Learning", "Creative Arts", "Special Needs"],
    description: "A nurturing environment for early childhood development with focus on creative learning.",
    location: "123 Education Lane, Cityville",
    contactInfo: "info@sunshinekids.edu",
    website: "www.sunshinekids.edu",
    establishedYear: 2005,
    fees: {
      admission: 500,
      monthly: 350,
      annual: 4000
    }
  },
  {
    id: "2",
    name: "Global Montessori",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600",
    rating: 4.9,
    totalRatings: 189,
    preferredFor: ["Montessori Method", "International Curriculum", "Language Skills"],
    description: "International standard Montessori education with multilingual programs.",
    location: "456 Global Avenue, Townsville",
    contactInfo: "contact@globalmontessori.org",
    website: "www.globalmontessori.org",
    establishedYear: 1998,
    fees: {
      admission: 750,
      monthly: 450,
      annual: 5200
    }
  },
  {
    id: "3",
    name: "Tech Tots Preschool",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600",
    rating: 4.7,
    totalRatings: 167,
    preferredFor: ["STEAM Programs", "Digital Learning", "Physical Activities"],
    description: "Modern preschool focusing on technology and hands-on learning.",
    location: "789 Innovation Road, Tech City",
    contactInfo: "hello@techtots.edu",
    website: "www.techtots.edu",
    establishedYear: 2015,
    fees: {
      admission: 600,
      monthly: 400,
      annual: 4500
    }
  },
  {
    id: "4",
    name: "Nature's Nursery",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=600",
    rating: 4.6,
    totalRatings: 145,
    preferredFor: ["Environmental Education", "Outdoor Activities", "Sustainability"],
    description: "Eco-friendly school with focus on nature-based learning.",
    location: "321 Green Path, Natureville",
    contactInfo: "grow@naturesnursery.org",
    website: "www.naturesnursery.org",
    establishedYear: 2010,
    fees: {
      admission: 550,
      monthly: 375,
      annual: 4200
    }
  },
];

export const activities: ActivityCard[] = [
  {
    id: "1",
    name: "Little Scientists Club",
    image: "https://images.unsplash.com/photo-1554757388-29a2a86ef02f?w=800&h=600",
    rating: 4.9,
    totalRatings: 178,
    preferredFor: ["STEM Interest", "Ages 5-8", "Curious Minds"],
    description: "Hands-on science experiments and discoveries for young minds.",
    provider: "Science Education Foundation",
    location: "City Community Center",
    date: "Every Saturday, 10AM-12PM",
    registrationDeadline: "2024-05-01",
    registrationFee: 50,
    ageGroup: "5-8 years",
    contactInfo: "science@foundation.org",
    sponsored: true,
    sponsoredBy: "National Science Foundation"
  },
  {
    id: "2",
    name: "Music & Movement",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600",
    rating: 4.7,
    totalRatings: 156,
    preferredFor: ["Musical Development", "Motor Skills", "All Ages"],
    description: "Interactive music and dance sessions for holistic development.",
    provider: "Rhythm & Rhyme Academy",
    location: "Downtown Arts Center",
    date: "Tuesdays & Thursdays, 4PM-5PM",
    registrationDeadline: "2024-04-15",
    registrationFee: 45,
    ageGroup: "3-10 years",
    contactInfo: "info@rhythmrhyme.com"
  },
  {
    id: "3",
    name: "Art Adventure",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600",
    rating: 4.8,
    totalRatings: 134,
    preferredFor: ["Creative Expression", "Fine Motor Skills", "Ages 3-12"],
    description: "Exploring creativity through various art mediums and techniques.",
    provider: "Creative Kids Institute",
    location: "City Art Gallery",
    date: "Wednesdays, 3PM-5PM",
    registrationDeadline: "2024-04-20",
    registrationFee: 60,
    ageGroup: "3-12 years",
    contactInfo: "create@creativekids.org"
  },
  {
    id: "4",
    name: "Sports Stars",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&h=600",
    rating: 4.6,
    totalRatings: 189,
    preferredFor: ["Physical Development", "Team Building", "Ages 4-12"],
    description: "Multi-sports program focusing on fitness and teamwork.",
    provider: "Youth Sports Association",
    location: "Central Sports Complex",
    date: "Mondays & Fridays, 4PM-6PM",
    registrationDeadline: "2024-04-10",
    registrationFee: 55,
    ageGroup: "4-12 years",
    contactInfo: "join@youthsports.org",
    sponsored: true,
    sponsoredBy: "State Sports Department"
  },
  {
    id: "5",
    name: "National Science Fair 2024",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&h=600",
    rating: 4.9,
    totalRatings: 312,
    preferredFor: ["Scientific Research", "Innovation", "Ages 10-18"],
    description: "Annual national competition showcasing student research projects and innovations.",
    provider: "Department of Science & Technology",
    location: "National Science Center",
    date: "July 15-20, 2024",
    registrationDeadline: "2024-05-30",
    registrationFee: 25,
    ageGroup: "10-18 years",
    contactInfo: "sciencefair@gov.org",
    sponsored: true,
    sponsoredBy: "Ministry of Education"
  },
  {
    id: "6",
    name: "Robotics Challenge",
    image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=800&h=600",
    rating: 4.8,
    totalRatings: 156,
    preferredFor: ["Robotics", "Coding", "Engineering"],
    description: "Team-based robotics competition with challenges to solve real-world problems.",
    provider: "Future Tech Society",
    location: "Tech Innovation Hub",
    date: "August 5-7, 2024",
    registrationDeadline: "2024-06-15",
    registrationFee: 75,
    ageGroup: "12-18 years",
    contactInfo: "robotics@futuretech.org",
    sponsored: true,
    sponsoredBy: "National Robotics Association"
  }
];

export const schoolItems: SchoolItem[] = [
  {
    id: "1",
    name: "Premium Ergonomic Backpack",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=800&h=600",
    category: "Backpacks & Bags",
    price: 49.99,
    colors: ["Navy", "Black", "Red"],
    sku: "BAG-001",
    description: "Durable school backpack with padded laptop compartment",
    tags: ["backpack", "storage", "ergonomic"],
    ageRange: "8-18 years",
    forClass: ["Middle School", "High School"],
    stock: 250,
    brand: "SchoolPro",
    sellerInfo: {
      name: "Education Supplies Inc.",
      rating: 4.7,
      totalSales: 12500
    },
    discount: 10,
    warranty: "1 year"
  },
  {
    id: "2",
    name: "Complete Stationery Set",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&h=600",
    category: "Stationery & School Supplies",
    price: 24.99,
    sku: "STAT-001",
    description: "Essential stationery pack with notebooks and writing tools",
    tags: ["stationery", "essentials", "writing"],
    ageRange: "6-18 years",
    forClass: ["Elementary", "Middle School", "High School"],
    stock: 500,
    brand: "WriteRight",
    sellerInfo: {
      name: "School Supply Depot",
      rating: 4.5,
      totalSales: 28700
    }
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

export interface GovernmentActivity {
  id: string;
  title: string;
  image: string;
  organizer: string;
  type: "competition" | "fair" | "workshop" | "seminar" | "other";
  level: "district" | "state" | "national" | "international";
  description: string;
  eligibility: string;
  venue: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  website: string;
  prizes?: string;
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
}

export const governmentActivities: GovernmentActivity[] = [
  {
    id: "1",
    title: "National Science Olympiad 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600",
    organizer: "Ministry of Education",
    type: "competition",
    level: "national",
    description: "A prestigious annual competition to promote science education and identify talented young scientists across the country.",
    eligibility: "Students from grades 6-12",
    venue: "National Science Center, Capital City",
    startDate: "2024-06-15",
    endDate: "2024-06-20",
    registrationDeadline: "2024-05-15",
    contactPerson: "Dr. Michael Johnson",
    contactEmail: "scienceolympiad@education.gov",
    contactPhone: "+1-555-123-4567",
    website: "www.nationalscienceolympiad.gov",
    prizes: "Gold Medal: $10,000 scholarship, Silver Medal: $5,000 scholarship, Bronze Medal: $2,500 scholarship",
    status: "upcoming"
  },
  {
    id: "2",
    title: "State Mathematics Fair",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600",
    organizer: "State Education Department",
    type: "fair",
    level: "state",
    description: "An event showcasing mathematical projects and innovations from students across the state.",
    eligibility: "All students from grades K-12",
    venue: "State Convention Center",
    startDate: "2024-05-10",
    endDate: "2024-05-12",
    registrationDeadline: "2024-04-20",
    contactPerson: "Prof. Sarah Williams",
    contactEmail: "mathfair@state.edu",
    contactPhone: "+1-555-987-6543",
    website: "www.statemathfair.edu",
    prizes: "Various categories with prizes ranging from $100-$1,000",
    status: "upcoming"
  },
  {
    id: "3",
    title: "Innovation & Entrepreneurship Workshop",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600",
    organizer: "Department of Science & Technology",
    type: "workshop",
    level: "state",
    description: "A hands-on workshop to foster innovation and entrepreneurial skills among young students.",
    eligibility: "High school and college students",
    venue: "Innovation Hub, Tech City",
    startDate: "2024-07-05",
    endDate: "2024-07-07",
    registrationDeadline: "2024-06-15",
    contactPerson: "Mr. David Rodriguez",
    contactEmail: "innovation@scitech.gov",
    contactPhone: "+1-555-789-0123",
    website: "www.innovationworkshop.gov",
    status: "upcoming"
  }
];
