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
      {/* Header */}
      <div className="bg-background border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Paris Adventure</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Paris, France • 2 days</span>
              </div>
            </div>
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
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
