import { ItineraryCard } from "@/components/ItineraryCard";
import { DayHeader } from "@/components/DayHeader";
import { MapPin, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import day1Morning from "@/assets/day1-morning.jpg";
import day1Afternoon from "@/assets/day1-afternoon.jpg";
import day1Evening from "@/assets/day1-evening.jpg";
import day2Morning from "@/assets/day2-morning.jpg";
import day2Afternoon from "@/assets/day2-afternoon.jpg";
import day2Evening from "@/assets/day2-evening.jpg";
import parisHero from "@/assets/paris-hero.jpg";
import parisStreet from "@/assets/paris-street.jpg";
import parisSeine from "@/assets/paris-seine.jpg";

const Index = () => {
  const itinerary = [
    {
      day: 1,
      date: "March 15, 2024",
      title: "Arrival & Classic Paris",
      activities: [
        {
          time: "9:00 AM",
          title: "Breakfast at Café de Flore",
          location: "6th Arrondissement, Saint-Germain",
          description: "Start your Parisian adventure with a classic French breakfast at this iconic café. Enjoy fresh croissants, café au lait, and soak in the authentic Parisian atmosphere.",
          image: day1Morning,
          duration: "1.5 hrs"
        },
        {
          time: "2:00 PM",
          title: "Eiffel Tower Visit",
          location: "Champ de Mars, 7th Arrondissement",
          description: "Visit the iconic Eiffel Tower and take the elevator to the top for breathtaking views of Paris. Perfect time for photos and to experience this world-famous landmark.",
          image: day1Afternoon,
          duration: "3 hrs"
        },
        {
          time: "7:30 PM",
          title: "Dinner at Le Comptoir du Relais",
          location: "6th Arrondissement",
          description: "End your first day with an authentic French dining experience at this renowned bistro. Enjoy traditional French cuisine in a cozy, intimate setting.",
          image: day1Evening,
          duration: "2 hrs"
        }
      ]
    },
    {
      day: 2,
      date: "March 16, 2024",
      title: "Art & Culture",
      activities: [
        {
          time: "10:00 AM",
          title: "Louvre Museum",
          location: "1st Arrondissement",
          description: "Explore the world's largest art museum and see masterpieces like the Mona Lisa and Venus de Milo. Pre-booked tickets ensure skip-the-line access.",
          image: day2Morning,
          duration: "4 hrs"
        },
        {
          time: "3:00 PM",
          title: "Seine River Cruise",
          location: "Various departure points",
          description: "Relax on a scenic cruise along the Seine River, passing by Notre-Dame, the Louvre, and other historic landmarks from a unique water perspective.",
          image: day2Afternoon,
          duration: "1.5 hrs"
        },
        {
          time: "6:00 PM",
          title: "Montmartre & Sacré-Cœur",
          location: "18th Arrondissement",
          description: "Explore the artistic quarter of Montmartre, visit the stunning Sacré-Cœur Basilica, and enjoy street performances and local artists.",
          image: day2Evening,
          duration: "3 hrs"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={parisHero} 
          alt="Paris skyline with Eiffel Tower" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Paris Adventure</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Discover the City of Light through its iconic landmarks, charming streets, and rich culture
            </p>
            <div className="flex items-center justify-center gap-2 text-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
              <MapPin className="w-5 h-5" />
              <span>Paris, France • 2 days</span>
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

      {/* Paris Overview */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">About This Trip</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Experience the magic of Paris through this carefully curated 2-day journey. From iconic landmarks 
                to hidden gems, immerse yourself in the rich history, stunning architecture, and vibrant culture 
                that makes Paris one of the world's most beloved destinations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're marveling at the Eiffel Tower, exploring world-class museums, or strolling along 
                the Seine, this itinerary offers the perfect blend of must-see attractions and authentic Parisian experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={parisStreet} 
                alt="Charming Parisian street" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src={parisSeine} 
                alt="Seine River in Paris" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Itinerary Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Your Itinerary</h2>
          <p className="text-lg text-muted-foreground">A detailed day-by-day guide to your Parisian adventure</p>
        </div>

        {/* Daily Itinerary */}
        {itinerary.map((day) => (
          <div key={day.day} className="mb-12">
            <DayHeader 
              dayNumber={day.day}
              date={day.date}
              title={day.title}
            />
            
            <div className="pl-6">
              {day.activities.map((activity, index) => (
                <ItineraryCard 
                  key={index}
                  activity={activity}
                  isLast={index === day.activities.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
        
        {/* Trip Summary */}
        <div className="mt-16 p-6 bg-card rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-3">Trip Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Duration</span>
              <p className="font-medium">2 Days</p>
            </div>
            <div>
              <span className="text-muted-foreground">Activities</span>
              <p className="font-medium">6 Experiences</p>
            </div>
            <div>
              <span className="text-muted-foreground">Areas</span>
              <p className="font-medium">5 Districts</p>
            </div>
            <div>
              <span className="text-muted-foreground">Type</span>
              <p className="font-medium">Culture & Sightseeing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
