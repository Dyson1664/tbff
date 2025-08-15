import { ItineraryCard } from "@/components/ItineraryCard";
import Navbar from "@/components/Navbar";
import { MapPin, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
}

interface DayItinerary {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

interface IncludedItem {
  text: string;
}

interface IncludedSection {
  title: string;
  items: IncludedItem[];
}

interface CountryData {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  heroImage: string;
  aboutDescription: string[];
  aboutImages: string[];
  itinerary: DayItinerary[];
  summary: {
    duration: string;
    activities: string;
    areas: string;
    type: string;
  };
  included: IncludedSection[];
}

interface ItineraryTemplateProps {
  data: CountryData;
}

export const ItineraryTemplate = ({ data }: ItineraryTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={data.heroImage} 
          alt={`${data.title} hero image`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">{data.title}</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {data.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
              <MapPin className="w-5 h-5" />
              <span>{data.location} • {data.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header with Actions */}
      <div className="bg-background border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Country Overview */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">About This Trip</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              {data.aboutDescription.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.aboutImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${data.title} destination ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
          
          {/* Book Now Button */}
          <div className="text-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              Book This Trip Now
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Secure your {data.title.split(' ')[0]} adventure today</p>
          </div>
        </div>

        {/* Itinerary Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Your Itinerary</h2>
          <p className="text-lg text-muted-foreground">A detailed day-by-day guide to your {data.title.split(' ')[0]} adventure</p>
        </div>

        {/* Daily Itinerary */}
        <Accordion type="single" collapsible defaultValue="day-1" className="space-y-4">
          {data.itinerary.map((day) => (
            <AccordionItem key={day.day} value={`day-${day.day}`} className="border border-gray-200 rounded-lg bg-card shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center shadow-coral">
                    <span className="text-white font-bold text-lg">{day.day}</span>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <span className="text-sm font-medium">{day.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{day.title}</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {day.activities.map((activity, index) => (
                    <ItineraryCard 
                      key={index}
                      activity={activity}
                      isLast={index === day.activities.length - 1}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Trip Summary */}
        <div className="mt-16 p-6 bg-card rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-3">Trip Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Duration</span>
              <p className="font-medium">{data.summary.duration}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Activities</span>
              <p className="font-medium">{data.summary.activities}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Areas</span>
              <p className="font-medium">{data.summary.areas}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Type</span>
              <p className="font-medium">{data.summary.type}</p>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mt-16 bg-card border-t border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">What's Included</h3>
              <p className="text-lg text-muted-foreground">Everything you need for an unforgettable {data.title.split(' ')[0]} experience</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.included.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">{section.title}</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-1 text-lg">•</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};