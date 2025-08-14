import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Users, Shield, Compass, Globe, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Import existing images
import parisHero from "@/assets/paris-hero.jpg";
import parisStreet from "@/assets/paris-street.jpg";
import parisSeine from "@/assets/paris-seine.jpg";
import day1Morning from "@/assets/day1-morning.jpg";
import day2Morning from "@/assets/day2-morning.jpg";
import day3Morning from "@/assets/day3-morning.jpg";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const featuredTours = [
    {
      id: 1,
      title: "Paris Discovery Tour",
      location: "Paris, France",
      duration: "6 days",
      rating: 4.9,
      reviews: 127,
      price: "From €1100",
      image: parisHero,
      tag: "POPULAR"
    },
    {
      id: 2,
      title: "Rome Cultural Journey",
      location: "Rome, Italy", 
      duration: "5 days",
      rating: 4.8,
      reviews: 89,
      price: "From €950",
      image: day1Morning,
      tag: "NEW"
    },
    {
      id: 3,
      title: "Barcelona Explorer",
      location: "Barcelona, Spain",
      duration: "4 days", 
      rating: 4.7,
      reviews: 156,
      price: "From €750",
      image: day2Morning,
      tag: "FEATURED"
    }
  ];

  const destinations = [
    { name: "Paris", image: parisStreet },
    { name: "Rome", image: day1Morning },
    { name: "Barcelona", image: day2Morning },
    { name: "Amsterdam", image: day3Morning },
    { name: "Prague", image: parisSeine },
    { name: "Vienna", image: parisHero },
    { name: "Budapest", image: parisStreet },
    { name: "Berlin", image: day1Morning }
  ];

  const testimonials = [
    {
      name: "Emma Wilson",
      avatar: "EW",
      rating: 5,
      date: "Dec 2024",
      text: "An amazing trip! The itinerary was perfectly planned and every detail was taken care of. The local guides were exceptional and really made the experience memorable.",
      location: "London, UK"
    },
    {
      name: "Marco Rodriguez", 
      avatar: "MR",
      rating: 5,
      date: "Nov 2024", 
      text: "Incredible value for money and outstanding service. The accommodations were beautiful and the experiences were truly authentic. Highly recommend!",
      location: "Madrid, Spain"
    },
    {
      name: "Sarah Chen",
      avatar: "SC", 
      rating: 5,
      date: "Oct 2024",
      text: "Perfect for solo travelers! I felt safe and supported throughout the entire journey. Met wonderful people and created memories that will last a lifetime.",
      location: "Toronto, Canada"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Social Travel",
      description: "Connect with like-minded travelers and make lifelong friends on your journey"
    },
    {
      icon: Compass,
      title: "Expert Guides", 
      description: "Local experts who know hidden gems and authentic experiences off the beaten path"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "24/7 support and carefully vetted accommodations for your peace of mind"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Wanderly</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Tours</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Destinations</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">Join Now</Button>
            </div>
          </div>
        </div>
      </nav>

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
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
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
                    {tour.id === 1 ? (
                      <Link to="/paris-itinerary">
                        <Button size="sm" variant="outline">View Details</Button>
                      </Link>
                    ) : (
                      <Button size="sm" variant="outline">View Details</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Next Destination</h2>
            <p className="text-lg text-muted-foreground">Explore Europe's most captivating cities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <div 
                key={index}
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
              </div>
            ))}
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
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
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
            ))}
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
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
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
                  onChange={(e) => setEmail(e.target.value)}
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
              <h3 className="text-2xl font-bold text-primary mb-4">Wanderly</h3>
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
            <p className="text-sm">&copy; 2024 Wanderly. All rights reserved.</p>
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
}