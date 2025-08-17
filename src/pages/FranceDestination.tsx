import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users } from "lucide-react";
import parisHeroImage from "@/assets/paris-hero.jpg";

const FranceDestination = () => {
  const trips = [
    {
      id: "paris-adventure",
      title: "Paris Adventure", 
      duration: "6 days",
      description: "Discover the City of Light through its iconic landmarks, charming streets, and rich culture",
      image: parisHeroImage,
      price: "From $1,899",
      route: "/paris-itinerary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/20 to-primary-glow/30 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            France
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the romance, culture, and culinary excellence of France
          </p>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Available Trips in France
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated French adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden hover:shadow-coral transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>France</span>
                    <Clock className="h-4 w-4 ml-4" />
                    <span>{trip.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {trip.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {trip.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {trip.price}
                    </span>
                    <Button asChild className="bg-primary hover:bg-primary-glow">
                      <Link to={trip.route}>
                        View Trip
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranceDestination;