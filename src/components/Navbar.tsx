import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [showTripsDropdown, setShowTripsDropdown] = useState(false);
  const [showToursDropdown, setShowToursDropdown] = useState(false);
  const [showDestinationsDropdown, setShowDestinationsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  const trips = [
    { title: "Paris Adventure", duration: "6 Days", location: "France" },
    { title: "Tokyo Discovery", duration: "8 Days", location: "Japan" },
    { title: "Santorini Escape", duration: "5 Days", location: "Greece" },
    { title: "New York Explorer", duration: "4 Days", location: "USA" },
    { title: "Iceland Northern Lights", duration: "7 Days", location: "Iceland" }
  ];

  const tours = [
    { title: "City Walking Tours", type: "Walking", duration: "3-4 Hours" },
    { title: "Food & Wine Tours", type: "Culinary", duration: "5-6 Hours" },
    { title: "Museum & Culture Tours", type: "Cultural", duration: "Half Day" },
    { title: "Adventure Tours", type: "Adventure", duration: "Full Day" },
    { title: "Private Tours", type: "Private", duration: "Custom" }
  ];

  const destinations = [
    { city: "Paris", country: "France", tours: "15+ Tours" },
    { city: "Tokyo", country: "Japan", tours: "12+ Tours" },
    { city: "New York", country: "USA", tours: "20+ Tours" },
    { city: "London", country: "UK", tours: "18+ Tours" },
    { city: "Barcelona", country: "Spain", tours: "14+ Tours" }
  ];

  const createDropdownHandlers = (setter: (value: boolean) => void) => ({
    onMouseEnter: () => setter(true),
    onMouseLeave: () => setTimeout(() => setter(false), 300)
  });

  const tripsHandlers = createDropdownHandlers(setShowTripsDropdown);
  const toursHandlers = createDropdownHandlers(setShowToursDropdown);
  const destinationsHandlers = createDropdownHandlers(setShowDestinationsDropdown);

  return (
    <nav className="bg-background border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Button */}
          <Button variant="link" className="text-xl font-bold text-primary hover:no-underline p-0">
            Imagine Beyond Travel
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {/* Trips Dropdown */}
            <div className="relative" {...tripsHandlers}>
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-foreground hover:text-primary"
              >
                Trips
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showTripsDropdown && (
                <div 
                  className="absolute top-full left-0 mt-0 w-96 bg-background border border-gray-200 rounded-lg shadow-lg z-50"
                  onMouseEnter={() => setShowTripsDropdown(true)}
                  onMouseLeave={() => setTimeout(() => setShowTripsDropdown(false), 150)}
                >
                  <div className="absolute -top-2 left-0 right-0 h-2"></div>
                  <div className="py-1">
                    <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-gray-100">
                      Featured Trip Packages
                    </div>
                    {trips.map((trip, index) => (
                      <div 
                        key={index}
                        className="px-4 py-3 hover:bg-muted cursor-pointer transition-colors block"
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
                    <div className="px-4 py-3 border-t border-gray-100">
                      <Button variant="link" className="text-primary p-0 h-auto font-medium">
                        View All Trips →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tours Dropdown */}
            <div className="relative" {...toursHandlers}>
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-foreground hover:text-primary"
              >
                Tours
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showToursDropdown && (
                <div 
                  className="absolute top-full left-0 mt-0 w-80 bg-background border border-gray-200 rounded-lg shadow-lg z-50"
                  onMouseEnter={() => setShowToursDropdown(true)}
                  onMouseLeave={() => setTimeout(() => setShowToursDropdown(false), 150)}
                >
                  <div className="absolute -top-2 left-0 right-0 h-2"></div>
                  <div className="py-1">
                    <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-gray-100">
                      Tour Categories
                    </div>
                    {tours.map((tour, index) => (
                      <div 
                        key={index}
                        className="px-4 py-3 hover:bg-muted cursor-pointer transition-colors block"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-foreground">{tour.title}</h4>
                            <p className="text-sm text-muted-foreground">{tour.type}</p>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {tour.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="px-4 py-3 border-t border-gray-100">
                      <Button variant="link" className="text-primary p-0 h-auto font-medium">
                        View All Tours →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div className="relative" {...destinationsHandlers}>
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-foreground hover:text-primary"
              >
                Destinations
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showDestinationsDropdown && (
                <div 
                  className="absolute top-full left-0 mt-0 w-80 bg-background border border-gray-200 rounded-lg shadow-lg z-50"
                  onMouseEnter={() => setShowDestinationsDropdown(true)}
                  onMouseLeave={() => setTimeout(() => setShowDestinationsDropdown(false), 150)}
                >
                  <div className="absolute -top-2 left-0 right-0 h-2"></div>
                  <div className="py-1">
                    <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-gray-100">
                      Popular Destinations
                    </div>
                    {destinations.map((destination, index) => (
                      <div 
                        key={index}
                        className="px-4 py-3 hover:bg-muted cursor-pointer transition-colors block"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-foreground">{destination.city}</h4>
                            <p className="text-sm text-muted-foreground">{destination.country}</p>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {destination.tours}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="px-4 py-3 border-t border-gray-100">
                      <Button variant="link" className="text-primary p-0 h-auto font-medium">
                        View All Destinations →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button variant="ghost" className="text-foreground hover:text-primary">
              About
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Trips Menu */}
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:text-primary"
                  onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'trips' ? null : 'trips')}
                >
                  Trips
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </Button>
                
                {mobileActiveDropdown === 'trips' && (
                  <div className="pl-4 space-y-1">
                    {trips.map((trip, index) => (
                      <div key={index} className="py-2 px-2 hover:bg-muted rounded cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-foreground text-sm">{trip.title}</h4>
                            <p className="text-xs text-muted-foreground">{trip.location}</p>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {trip.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Tours Menu */}
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:text-primary"
                  onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'tours' ? null : 'tours')}
                >
                  Tours
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </Button>
                
                {mobileActiveDropdown === 'tours' && (
                  <div className="pl-4 space-y-1">
                    {tours.map((tour, index) => (
                      <div key={index} className="py-2 px-2 hover:bg-muted rounded cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-foreground text-sm">{tour.title}</h4>
                            <p className="text-xs text-muted-foreground">{tour.type}</p>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {tour.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Destinations Menu */}
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:text-primary"
                  onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'destinations' ? null : 'destinations')}
                >
                  Destinations
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </Button>
                
                {mobileActiveDropdown === 'destinations' && (
                  <div className="pl-4 space-y-1">
                    {destinations.map((destination, index) => (
                      <div key={index} className="py-2 px-2 hover:bg-muted rounded cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-foreground text-sm">{destination.city}</h4>
                            <p className="text-xs text-muted-foreground">{destination.country}</p>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {destination.tours}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">
                About
              </Button>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;