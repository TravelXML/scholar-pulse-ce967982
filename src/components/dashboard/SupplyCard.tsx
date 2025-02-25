
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface SupplyCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  colors?: string[];
  sizes?: string[];
  sku: string;
  description: string;
}

export default function SupplyCard({
  name,
  image,
  category,
  price,
  colors,
  sizes,
  sku,
  description,
}: SupplyCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" style={{ color: "#0B6623" }} />
        </Button>
      </div>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: "#0B6623" }}>{name}</CardTitle>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${price}</span>
          <Badge variant="outline">SKU: {sku}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Badge variant="secondary">{category}</Badge>
        {colors && (
          <div className="space-y-1">
            <p className="text-sm font-medium" style={{ color: "#0B6623" }}>Available Colors:</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Badge key={color} variant="outline">{color}</Badge>
              ))}
            </div>
          </div>
        )}
        {sizes && (
          <div className="space-y-1">
            <p className="text-sm font-medium" style={{ color: "#0B6623" }}>Available Sizes:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Badge key={size} variant="outline">{size}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
