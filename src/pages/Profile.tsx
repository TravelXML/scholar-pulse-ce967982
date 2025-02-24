
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, HeartPulse, Upload, Phone } from "lucide-react";
import QRCode from "react-qr-code";

interface EmergencyContact {
  name: string;
  phone: string;
  relation: string;
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

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Student Profile</h1>
        <Button>
          <Upload className="mr-2" /> Save Changes
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Picture & QR Section */}
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

        {/* Personal Details */}
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

        {/* Family Information */}
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

        {/* Emergency Contacts */}
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

        {/* Physical Status */}
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
      </div>
    </div>
  );
}
