import { memo } from "react";
import { Car, Ship, Bus, Train, Plane } from "lucide-react";

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
    <div className="bg-muted/70 rounded-lg shadow-sm border-2 border-border overflow-hidden mb-8">
      {/* Day Header */}
      <div className="p-10 pb-6 bg-white">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-bold text-foreground">Day {dayNumber.toString().padStart(2, '0')}</h2>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{location}</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{date}</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="px-10 bg-white">
        <div className="relative h-80 md:h-96 overflow-hidden rounded-xl border-8 border-white shadow-sm">
          <img
            src={heroImage}
            alt={`Day ${dayNumber} - ${location}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Description */}
      <div className="p-10 bg-white">
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Experiences Section */}
      {experiences.length > 0 && (
        <div className="px-10 pb-10 bg-white">
          <h4 className="text-lg font-semibold text-foreground mb-4">Experiences</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experiences.map((experience, index) => (
              <div key={index} className="group">
                <div className="relative h-48 overflow-hidden rounded-lg mb-3">
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
        <div className="px-10 pb-10 bg-white">
          <h4 className="text-lg font-semibold text-foreground mb-4">Accommodation</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hotel Image */}
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img
                src="/src/assets/srilanka-colombo.jpg"
                alt="Sigiriya Rock Lodge"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hotel Details */}
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-foreground text-base">{accommodation.name}</h5>
                <p className="text-sm text-muted-foreground">{accommodation.rating}</p>
              </div>
              {accommodation.roomTypes[0] && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  {accommodation.roomTypes[0]}
                </div>
              )}
              <p className="text-sm text-muted-foreground">A comfortable stay with modern amenities and excellent service.</p>
              {accommodation.website && (
                <button className="text-sm text-primary hover:underline font-medium">
                  Visit Website
                </button>
              )}
            </div>
            {/* Map/Additional Image Placeholder */}
            <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
              <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      )}

      {/* Transportation Section */}
      {transportation && (
        <div className="px-10 pb-10 bg-white">
          <h4 className="text-lg font-semibold text-foreground mb-4">Transportation</h4>
          <div className="space-y-4">
            {/* Transportation Icons */}
            <div className="flex justify-center gap-4 mb-6">
              <Car className="w-8 h-8 text-muted-foreground/40" />
              <Ship className="w-8 h-8 text-muted-foreground/40" />
              <Bus className="w-8 h-8 text-muted-foreground/40" />
              <Train className="w-8 h-8 text-primary" />
              <Plane className="w-8 h-8 text-muted-foreground/40" />
            </div>
            
            {/* Route Line */}
            <div className="flex items-center justify-center relative max-w-md mx-auto">
              <div className="text-center">
                <p className="font-medium text-foreground text-sm">{transportation.from}</p>
              </div>
              <div className="flex-1 mx-6 relative flex items-center">
                <div className="h-1 bg-primary rounded-full flex-1 relative">
                  <div className="absolute inset-0 bg-primary rounded-full" style={{
                    background: 'linear-gradient(90deg, #0FC2BF 0%, #0FC2BF 50%, #0FC2BF 100%)',
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, white 4px, white 8px)'
                  }}></div>
                </div>
                <div className="ml-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground text-sm">{transportation.to}</p>
              </div>
            </div>
            
            {/* Duration and Distance */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {transportation.duration}
                {transportation.distance && ` | ${transportation.distance}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});