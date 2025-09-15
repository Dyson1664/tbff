import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";

interface TripCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  tag?: string;
  route: string;
  description?: string;
}

export const TripCard = memo(({
  id,
  image,
  title,
  location,
  duration,
  price,
  tag,
  route,
  description
}: TripCardProps) => {
  const cardContent = (
    <Card className="overflow-hidden rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {tag && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </div>
        )}
      </div>
      <CardContent className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <MapPin className="w-5 h-5" />
            <span className="text-base font-medium">{location}</span>
          </div>
          <p className="text-base text-muted-foreground font-medium">
            {duration}
          </p>
        </div>
        {description && (
          <p className="text-base text-muted-foreground leading-relaxed mb-6">{description}</p>
        )}
        <div className="pt-4 border-t border-border">
          <span className="text-2xl font-bold text-foreground">{price}</span>
          <p className="text-sm text-muted-foreground mt-1">per person</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Link to={route} className="block">
      {cardContent}
    </Link>
  );
});
