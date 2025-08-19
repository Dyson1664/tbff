import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Globe, Mail } from "lucide-react";
import { useState, useCallback, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { 
  FEATURED_TOURS, 
  DESTINATIONS, 
  TESTIMONIALS, 
  FEATURES, 
  TOUR_ROUTES 
} from "@/data/landing";

// Import static images
import parisHero from "@/assets/paris-hero.jpg";
import parisSeine from "@/assets/paris-seine.jpg";

// Memoized tour card component
const TourCard = memo(({ tour }: { tour: typeof FEATURED_TOURS[0] }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img 
        src={tour.image} 
        alt={tour.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
        {tour.tag}
      </div>
      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{tour.rating}</span>
        </div>
      </div>
    </div>
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-foreground">{tour.title}</h3>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{tour.location}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{tour.duration} • {tour.reviews} reviews</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-foreground">{tour.price}</span>
        <Link to={TOUR_ROUTES[tour.id]}>
          <Button size="sm" variant="outline">View Details</Button>
        </Link>
      </div>
    </CardContent>
  </Card>
));

// Memoized destination card component  
const DestinationCard = memo(({ destination }: { destination: typeof DESTINATIONS[0] }) => (
  <Link
    to={destination.route}
    className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
  >
    <img 
      src={destination.image} 
      alt={destination.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-4 left-4">
      <h3 className="text-white font-semibold text-lg">{destination.name}</h3>
    </div>
  </Link>
));

// Memoized testimonial card component
const TestimonialCard = memo(({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
  <Card className="p-6">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="text-sm text-muted-foreground ml-2">{testimonial.date}</span>
    </div>
    <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
        <span className="text-primary-foreground font-medium text-sm">{testimonial.avatar}</span>
      </div>
      <div>
        <p className="font-medium text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
      </div>
    </div>
  </Card>
));

// Memoized feature card component
const FeatureCard = memo(({ feature }: { feature: typeof FEATURES[0] }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
      <feature.icon className="w-8 h-8 text-primary-foreground" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
    <p className="text-muted-foreground">{feature.description}</p>
  </div>
));

export default memo(function LandingPage() {
  const [email, setEmail] = useState("");

  // Memoized email change handler
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  // Memoized component arrays to prevent recreation on every render
  const tourCards = useMemo(() => 
    FEATURED_TOURS.map((tour) => (
      <TourCard key={tour.id} tour={tour} />
    )), []
  );

  const destinationCards = useMemo(() => 
    DESTINATIONS.map((destination, index) => (
      <DestinationCard key={`${destination.name}-${index}`} destination={destination} />
    )), []
  );

  const testimonialCards = useMemo(() => 
    TESTIMONIALS.map((testimonial, index) => (
      <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
    )), []
  );

  const featureCards = useMemo(() => 
    FEATURES.map((feature, index) => (
      <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
    )), []
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${parisHero})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <div className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">TRENDING DESTINATION</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Europe Discovery Tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Discover hidden gems and iconic landmarks with curated experiences designed for the modern traveler
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold animate-fade-in"
            style={{animationDelay: '0.4s'}}
          >
            Book Now
          </Button>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">New Tours</h2>
            <p className="text-lg text-muted-foreground">Handpicked experiences for unforgettable journeys</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourCards}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Next Destination</h2>
            <p className="text-lg text-muted-foreground">Explore the world's most captivating destinations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinationCards}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What People Think About Us</h2>
            <p className="text-lg text-muted-foreground">Real experiences from our travelers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialCards}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">What makes our travel experiences special</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img 
                src={parisSeine} 
                alt="Join our community"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stay up to date on the latest tours, events and travel tips from our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="bg-primary hover:bg-primary/90 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing you agree to our Privacy Policy and Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Imagine Beyond Travel</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary transition-colors">Support</a>
                <a href="#" className="block hover:text-primary transition-colors">Help Center</a>
                <a href="#" className="block hover:text-primary transition-colors">Contact Us</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tours</h4>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary transition-colors">Europe Tours</a>
                <a href="#" className="block hover:text-primary transition-colors">City Breaks</a>
                <a href="#" className="block hover:text-primary transition-colors">Cultural Tours</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary transition-colors">Get Help</a>
                <a href="#" className="block hover:text-primary transition-colors">FAQs</a>
                <a href="#" className="block hover:text-primary transition-colors">Booking Help</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary transition-colors">Travel Safety</a>
                <a href="#" className="block hover:text-primary transition-colors">Travel Information</a>
                <a href="#" className="block hover:text-primary transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Imagine Beyond Travel. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});