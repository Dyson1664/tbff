import { ItineraryCard } from "@/components/ItineraryCard";
import { DayHeader } from "@/components/DayHeader";
import Navbar from "@/components/Navbar";
import { MapPin, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import day1Morning from "@/assets/day1-morning.jpg";
import day1Afternoon from "@/assets/day1-afternoon.jpg";
import day2Morning from "@/assets/day2-morning.jpg";
import day2Afternoon from "@/assets/day2-afternoon.jpg";
import day3Morning from "@/assets/day3-morning.jpg";
import day3Afternoon from "@/assets/day3-afternoon.jpg";
import day4Morning from "@/assets/day4-morning.jpg";
import day4Afternoon from "@/assets/day4-afternoon.jpg";
import day5Morning from "@/assets/day5-morning.jpg";
import day5Afternoon from "@/assets/day5-afternoon.jpg";
import day6Morning from "@/assets/day6-morning.jpg";
import day6Afternoon from "@/assets/day6-afternoon.jpg";
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
        }
      ]
    },
    {
      day: 3,
      date: "March 17, 2024",
      title: "Historic Landmarks",
      activities: [
        {
          time: "9:30 AM",
          title: "Notre-Dame Cathedral",
          location: "4th Arrondissement, Île de la Cité",
          description: "Visit the iconic Gothic cathedral and marvel at its stunning architecture, stained glass windows, and historic significance in the heart of Paris.",
          image: day3Morning,
          duration: "2 hrs"
        },
        {
          time: "2:30 PM",
          title: "Latin Quarter Exploration",
          location: "5th Arrondissement",
          description: "Wander through the charming cobblestone streets, discover independent bookshops, cozy cafés, and soak in the bohemian atmosphere of this historic district.",
          image: day3Afternoon,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 4,
      date: "March 18, 2024",
      title: "Shopping & Royal Heritage",
      activities: [
        {
          time: "10:00 AM",
          title: "Champs-Élysées & Arc de Triomphe",
          location: "8th Arrondissement",
          description: "Stroll down the famous avenue, shop at luxury boutiques, and climb the Arc de Triomphe for panoramic views of the city's twelve radiating avenues.",
          image: day4Morning,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Palace of Versailles",
          location: "Versailles (30 min from Paris)",
          description: "Take a day trip to the opulent palace of French royalty. Explore the magnificent rooms, Hall of Mirrors, and expansive gardens of this UNESCO World Heritage site.",
          image: day4Afternoon,
          duration: "4 hrs"
        }
      ]
    },
    {
      day: 5,
      date: "March 19, 2024",
      title: "Local Markets & Art",
      activities: [
        {
          time: "9:00 AM",
          title: "Marché des Enfants Rouges",
          location: "3rd Arrondissement, Le Marais",
          description: "Experience Paris's oldest covered market, sample fresh produce, artisanal foods, and enjoy authentic local cuisine in this vibrant neighborhood market.",
          image: day5Morning,
          duration: "2.5 hrs"
        },
        {
          time: "2:00 PM",
          title: "Musée d'Orsay",
          location: "7th Arrondissement",
          description: "Discover the world's finest collection of Impressionist masterpieces by Monet, Renoir, and Van Gogh in this beautifully converted railway station.",
          image: day5Afternoon,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 6,
      date: "March 20, 2024",
      title: "Farewell Paris",
      activities: [
        {
          time: "10:00 AM",
          title: "Trocadéro Gardens",
          location: "16th Arrondissement",
          description: "Capture your final memories with the best view of the Eiffel Tower from these beautifully landscaped gardens, perfect for farewell photos and reflections.",
          image: day6Morning,
          duration: "1.5 hrs"
        },
        {
          time: "6:00 PM",
          title: "Seine Sunset Dinner Cruise",
          location: "Various departure points",
          description: "End your Parisian journey with an elegant dinner cruise along the Seine, enjoying gourmet French cuisine while watching the city lights come alive at sunset.",
          image: day6Afternoon,
          duration: "3 hrs"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
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
              <span>Paris, France • 6 days</span>
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
                Experience the magic of Paris through this carefully curated 6-day journey. From iconic landmarks 
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
          
          {/* Book Now Button */}
          <div className="text-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              Book This Trip Now
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Secure your Paris adventure today</p>
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
              <p className="font-medium">6 Days</p>
            </div>
            <div>
              <span className="text-muted-foreground">Activities</span>
              <p className="font-medium">12 Experiences</p>
            </div>
            <div>
              <span className="text-muted-foreground">Areas</span>
              <p className="font-medium">8 Districts</p>
            </div>
            <div>
              <span className="text-muted-foreground">Type</span>
              <p className="font-medium">Culture & Sightseeing</p>
        </div>
      </div>

      {/* Trip Includes Section - Full Width */}
      <div className="mt-16 bg-card border-t border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What's Included</h3>
            <p className="text-lg text-muted-foreground">Everything you need for an unforgettable Paris experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Accommodation</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  5 nights in boutique hotel near Champs-Élysées
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Daily breakfast included
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Free WiFi and concierge services
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Activities & Tours</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Skip-the-line tickets to major attractions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Seine River cruise with dinner
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Guided walking tours in historic districts
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Day trip to Palace of Versailles
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Transportation</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Airport transfers included
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Metro passes for easy city travel
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Private transport to Versailles
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Dining Experiences</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Traditional French breakfast daily
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Sunset dinner cruise on the Seine
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Food market tour with tastings
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Support & Guidance</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  24/7 travel support hotline
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Detailed digital itinerary and maps
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Local emergency contact information
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Special Extras</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Welcome package with city map
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Complimentary travel insurance
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  Photography session at iconic landmarks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Index;
