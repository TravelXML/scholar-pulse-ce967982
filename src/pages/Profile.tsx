import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  HeartPulse,
  Upload,
  Phone,
  School,
  Brain,
  Award,
  Flag,
  Star,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import QRCode from "react-qr-code";

interface EmergencyContact {
  name: string;
  phone: string;
  relation: string;
}

interface TimelineEvent {
  id: string;
  type: "academic" | "medical" | "counseling" | "award" | "flag";
  title: string;
  date: string;
  description: string;
  category: string;
  attachments?: {
    name: string;
    type: "document" | "image";
  }[];
  teacher?: {
    name: string;
    subject: string;
  };
  starred?: boolean;
}

export default function Profile() {
  const [studentData] = useState({
    name: "John Doe",
    age: "15",
    bloodGroup: "O+",
    birthDate: "2009-05-15",
    aadharNumber: "XXXX-XXXX-XXXX",
    profilePicture: "/placeholder.svg",
    parents: {
      father: "James Doe",
      mother: "Jane Doe"
    },
    address: "123 Student Lane, Education City",
    localGuardian: "Robert Smith",
    emergencyContacts: [
      { name: "James Doe", phone: "1234567890", relation: "Father" },
      { name: "Jane Doe", phone: "0987654321", relation: "Mother" },
      { name: "Robert Smith", phone: "5555555555", relation: "Guardian" }
    ],
    physicallyChalleneged: false,
    physicalDetails: "",
    studentId: "STU2024001"
  });

  const [timelineEvents] = useState<TimelineEvent[]>([
    {
      id: "1",
      type: "academic",
      title: "First Term Results",
      date: "2024-03-15",
      description: "Achieved A grade in Mathematics and Science",
      category: "Academics",
      attachments: [
        { name: "result_card.pdf", type: "document" }
      ],
      teacher: {
        name: "Mrs. Smith",
        subject: "Mathematics"
      },
      starred: true
    },
    {
      id: "2",
      type: "medical",
      title: "Annual Health Checkup",
      date: "2024-02-20",
      description: "Regular health checkup - all parameters normal",
      category: "Health",
      attachments: [
        { name: "health_report.pdf", type: "document" }
      ]
    },
    {
      id: "3",
      type: "award",
      title: "Science Fair Winner",
      date: "2024-01-15",
      description: "First place in Annual Science Fair",
      category: "Achievement",
      attachments: [
        { name: "project_photo.jpg", type: "image" },
        { name: "certificate.pdf", type: "document" }
      ],
      teacher: {
        name: "Mr. Johnson",
        subject: "Science"
      },
      starred: true
    },
    {
      id: "4",
      type: "counseling",
      title: "Career Guidance Session",
      date: "2024-01-10",
      description: "Discussion about future academic paths",
      category: "Guidance",
      teacher: {
        name: "Ms. Parker",
        subject: "Counselor"
      }
    },
    {
      id: "5",
      type: "flag",
      title: "Outstanding Performance",
      date: "2023-12-20",
      description: "Exceptional leadership in class activities",
      category: "Recognition",
      teacher: {
        name: "Mrs. Wilson",
        subject: "English"
      },
      starred: true
    }
  ]);

  const getEventIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "academic":
        return <School className="h-5 w-5" />;
      case "medical":
        return <HeartPulse className="h-5 w-5" />;
      case "counseling":
        return <Brain className="h-5 w-5" />;
      case "award":
        return <Award className="h-5 w-5" />;
      case "flag":
        return <Flag className="h-5 w-5" />;
    }
  };

  const getBadgeVariant = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "academic":
        return "default";
      case "medical":
        return "destructive";
      case "counseling":
        return "secondary";
      case "award":
        return "default";
      case "flag":
        return "outline";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Student Profile</h1>
        <Button>
          <Upload className="mr-2" /> Save Changes
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile & QR Code</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={studentData.profilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/10"
                />
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full"
                  variant="secondary"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold">{studentData.name}</h2>
                <p className="text-sm text-muted-foreground">Student ID: {studentData.studentId}</p>
              </div>
            </div>
            <div className="flex justify-center p-4 bg-white rounded-lg">
              <QRCode value={studentData.studentId} size={150} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Age</label>
                <Input value={studentData.age} readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Blood Group</label>
                <Input value={studentData.bloodGroup} readOnly />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Birth Date</label>
              <Input type="date" value={studentData.birthDate} readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Aadhar Number</label>
              <Input value={studentData.aadharNumber} readOnly />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Family Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Father's Name</label>
                <Input value={studentData.parents.father} readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mother's Name</label>
                <Input value={studentData.parents.mother} readOnly />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <Input value={studentData.address} readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Local Guardian</label>
              <Input value={studentData.localGuardian} readOnly />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studentData.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.phone}</p>
                  </div>
                  <Badge variant="secondary">{contact.relation}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Physical Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Physically Challenged Status</h3>
                <p className="text-sm text-muted-foreground">
                  {studentData.physicallyChalleneged ? "Yes" : "No"}
                </p>
                {studentData.physicallyChalleneged && (
                  <p className="text-sm mt-2">{studentData.physicalDetails}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Student Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative space-y-8">
              <div className="absolute left-9 top-0 bottom-0 w-px bg-border" />

              {timelineEvents.map((event) => (
                <div key={event.id} className="relative flex gap-6">
                  <div className="relative">
                    <div className={`
                      h-10 w-10 rounded-full border-2 flex items-center justify-center bg-background
                      ${event.starred ? 'border-primary' : 'border-border'}
                    `}>
                      {getEventIcon(event.type)}
                    </div>
                    {event.starred && (
                      <div className="absolute -top-1 -right-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge variant={getBadgeVariant(event.type)}>
                        {event.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    
                    <p className="text-sm">{event.description}</p>

                    {event.teacher && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Added by {event.teacher.name}</span>
                        <span>•</span>
                        <span>{event.teacher.subject}</span>
                      </div>
                    )}

                    {event.attachments && event.attachments.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {event.attachments.map((attachment, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="h-8"
                          >
                            {attachment.type === "document" ? (
                              <FileText className="h-4 w-4 mr-2" />
                            ) : (
                              <ImageIcon className="h-4 w-4 mr-2" />
                            )}
                            {attachment.name}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
