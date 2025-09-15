import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { getPayUrlBySlug } from '@/data/payUrls';

interface TripCardProps {
  id: string;
  slug?: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating?: string;
  reviews?: string;
  tag?: string;
  route: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  showBookNow?: boolean;
}

export const TripCard = memo(({
  id,
  slug,
  image,
  title,
  location,
  duration,
  price,
  rating,
  reviews,
  tag,
  route,
  description,
  buttonText = "View Details",
  buttonVariant = "outline",
  showBookNow = false
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
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {duration}{reviews && ` • ${reviews} reviews`}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">{price}</span>
          {showBookNow && slug ? (
            <a 
              href={getPayUrlBySlug(slug)} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Button size="sm" variant={buttonVariant}>
                Book Now
              </Button>
            </a>
          ) : (
            <Button 
              size="sm" 
              variant={buttonVariant}
              onClick={(e) => e.stopPropagation()}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (showBookNow && slug) {
    return cardContent;
  }

  return (
    <Link to={route} className="block">
      {cardContent}
    </Link>
  );
});