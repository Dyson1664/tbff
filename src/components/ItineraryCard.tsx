import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
}

interface ItineraryCardProps {
  activity: Activity;
  isLast?: boolean;
}

export const ItineraryCard = ({ activity, isLast = false }: ItineraryCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
      <div className="md:flex">
        <div className="md:w-1/3 aspect-[4/3] md:aspect-auto relative overflow-hidden">
          <img 
            src={activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="flex items-center gap-1 text-sm font-medium text-foreground">
              <Clock className="w-3 h-3" />
              {activity.time}
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-muted-foreground">{activity.duration}</span>
          </div>
        </div>
        
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">{activity.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{activity.location}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
        </div>
      </div>
    </Card>
  );
};