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
      <CardContent className="p-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location.split(',').pop()?.trim()}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {duration}
            </p>
            <span className="text-lg font-bold text-foreground">
              {price.replace(/^from\s*/i, '').trim() !== price ? (
                <>
                  <span className="font-normal text-base">From </span>
                  {price.replace(/^from\s*/i, '').trim()}
                </>
              ) : (
                price
              )}
            </span>
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-3">{description}</p>
          )}
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
