import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import thailandHeroImage from "@/assets/thailand-hero.jpg";

const ThailandDestination = () => {
  const navigate = useNavigate();
  const trips = [
    {
      id: "thailand-discovery",
      title: "Thailand Discovery", 
      duration: "8 days",
      description: "Immerse yourself in the vibrant culture, stunning temples, and pristine beaches of the Land of Smiles",
      image: thailandHeroImage,
      price: "From $1,599",
      route: "/thailand-itinerary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${thailandHeroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Thailand
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the perfect blend of ancient traditions and tropical paradise
            </p>
          </div>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Available Trips in Thailand
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated Thai adventures
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
                    <span>Thailand</span>
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

export default ThailandDestination;