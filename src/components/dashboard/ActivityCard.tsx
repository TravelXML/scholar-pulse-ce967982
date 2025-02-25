
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ActivityCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalRatings: number;
  preferredFor: string[];
  description: string;
}

export default function ActivityCard({
  name,
  image,
  rating,
  totalRatings,
  preferredFor,
  description,
}: ActivityCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: "#0B6623" }}>{name}</CardTitle>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-muted-foreground">({totalRatings})</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {preferredFor.map((pref, idx) => (
            <Badge key={idx} variant="secondary">{pref}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
