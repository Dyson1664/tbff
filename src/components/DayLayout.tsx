import { memo } from "react";

interface Experience {
  title: string;
  description?: string;
  image: string;
}

interface Accommodation {
  name: string;
  rating: string;
  roomTypes: string[];
  website?: string;
  image?: string;
}

interface Transportation {
  from: string;
  to: string;
  duration: string;
  distance?: string;
}

interface DayLayoutProps {
  dayNumber: number;
  date: string;
  location: string;
  heroImage: string;
  description: string;
  experiences: Experience[];
  accommodation?: Accommodation;
  transportation?: Transportation;
}

export const DayLayout = memo(({ 
  dayNumber, 
  date, 
  location, 
  heroImage, 
  description, 
  experiences, 
  accommodation, 
  transportation 
}: DayLayoutProps) => {
  return (
    <div className="bg-background rounded-lg shadow-sm border border-border overflow-hidden mb-8">
      {/* Day Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-bold text-foreground">Day {dayNumber.toString().padStart(2, '0')}</h2>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{location}</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{date}</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt={`Day ${dayNumber} - ${location}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="p-6">
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Experiences Section */}
      {experiences.length > 0 && (
        <div className="px-6 pb-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">Experiences</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experiences.map((experience, index) => (
              <div key={index} className="group">
                <div className="relative h-40 overflow-hidden rounded-lg mb-3">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h5 className="font-medium text-foreground text-sm mb-1">{experience.title}</h5>
                {experience.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {experience.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Accommodation Section */}
      {accommodation && (
        <div className="px-6 pb-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">Accommodation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accommodation.image && (
              <div className="relative h-32 overflow-hidden rounded-lg">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="space-y-2">
              <h5 className="font-medium text-foreground">{accommodation.name}</h5>
              <p className="text-sm text-muted-foreground">{accommodation.rating}</p>
              <div className="space-y-1">
                {accommodation.roomTypes.map((roomType, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-muted rounded-sm flex-shrink-0"></span>
                    {roomType}
                  </div>
                ))}
              </div>
              {accommodation.website && (
                <button className="text-xs text-primary hover:underline">
                  Visit Website
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Transportation Section */}
      {transportation && (
        <div className="px-6 pb-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">Transportation</h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-3 h-3 bg-primary rounded-full mb-1"></div>
                <p className="text-xs text-muted-foreground">{transportation.from}</p>
              </div>
              <div className="flex-1 relative">
                <div className="h-px bg-primary"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background px-2">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-primary rounded-full mb-1"></div>
                <p className="text-xs text-muted-foreground">{transportation.to}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{transportation.duration}</p>
              {transportation.distance && (
                <p className="text-xs text-muted-foreground">{transportation.distance}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});