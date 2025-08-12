import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const trips = [
    { title: "Paris Adventure", duration: "6 Days", location: "France" },
    { title: "Tokyo Discovery", duration: "8 Days", location: "Japan" },
    { title: "Santorini Escape", duration: "5 Days", location: "Greece" },
    { title: "New York Explorer", duration: "4 Days", location: "USA" },
    { title: "Iceland Northern Lights", duration: "7 Days", location: "Iceland" }
  ];

  return (
    <nav className="bg-background border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Button */}
          <Button variant="link" className="text-xl font-bold text-primary hover:no-underline p-0">
            Imagine Beyond Travel
          </Button>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {/* Trips Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-foreground hover:text-primary"
              >
                Trips
                <ChevronDown className="w-4 h-4" />
              </Button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-background border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm font-medium text-muted-foreground border-b border-gray-100">
                      Featured Destinations
                    </div>
                    {trips.map((trip, index) => (
                      <div 
                        key={index}
                        className="px-4 py-3 hover:bg-muted cursor-pointer transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-foreground">{trip.title}</h4>
                            <p className="text-sm text-muted-foreground">{trip.location}</p>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {trip.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <Button variant="link" className="text-primary p-0 h-auto font-medium">
                        View All Trips →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Nav Items */}
            <Button variant="ghost" className="text-foreground hover:text-primary">
              About
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Contact
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Plan Your Trip
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;