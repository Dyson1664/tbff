import { useState, useCallback, useMemo, memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { NAVIGATION_TRIPS, NAVIGATION_DESTINATIONS } from "@/data/navigation";
import ibtLogo from "@/assets/ibt-logo.svg";

// Memoized dropdown item component
const DropdownTripItem = memo(({ trip }: { trip: typeof NAVIGATION_TRIPS[0] }) => (
  <Link 
    to={trip.link}
    className="px-4 py-3 hover:bg-muted cursor-pointer transition-colors block"
    onClick={() => window.scrollTo(0, 0)}
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
  </Link>
));

const DropdownDestinationItem = memo(({ destination }: { destination: typeof NAVIGATION_DESTINATIONS[0] }) => (
  <Link 
    to={destination.link}
    className="px-4 py-3 hover:bg-muted cursor-pointer transition-colors block"
    onClick={() => window.scrollTo(0, 0)}
  >
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-medium text-foreground">{destination.city}</h4>
        <p className="text-sm text-muted-foreground">{destination.description}</p>
      </div>
      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
        {destination.country}
      </span>
    </div>
  </Link>
));

const Navbar = memo(() => {
  const [showTripsDropdown, setShowTripsDropdown] = useState(false);
  const [showDestinationsDropdown, setShowDestinationsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  // Memoized event handlers to prevent recreation on every render
  const handleTripsMouseEnter = useCallback(() => setShowTripsDropdown(true), []);
  const handleTripsMouseLeave = useCallback(() => setShowTripsDropdown(false), []);
  const handleDestinationsMouseEnter = useCallback(() => setShowDestinationsDropdown(true), []);
  const handleDestinationsMouseLeave = useCallback(() => setShowDestinationsDropdown(false), []);
  
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const toggleMobileTrips = useCallback(() => {
    setMobileActiveDropdown(prev => prev === 'trips' ? null : 'trips');
  }, []);
  const toggleMobileDestinations = useCallback(() => {
    setMobileActiveDropdown(prev => prev === 'destinations' ? null : 'destinations');
  }, []);

  // Memoized trip items to prevent recreation
  const tripItems = useMemo(() => 
    NAVIGATION_TRIPS.map((trip, index) => (
      <DropdownTripItem key={`${trip.link}-${index}`} trip={trip} />
    )), []
  );

  // Memoized destination items
  const destinationItems = useMemo(() => 
    NAVIGATION_DESTINATIONS.map((destination, index) => (
      <DropdownDestinationItem key={`${destination.link}-${index}`} destination={destination} />
    )), []
  );

  // Memoized mobile trip items
  const mobileTripsItems = useMemo(() => 
    NAVIGATION_TRIPS.map((trip, index) => (
      <Link 
        key={`mobile-${trip.link}-${index}`} 
        to={trip.link} 
        className="py-2 px-2 hover:bg-muted rounded cursor-pointer block"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-foreground text-sm">{trip.title}</h4>
            <p className="text-xs text-muted-foreground">{trip.location}</p>
          </div>
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
            {trip.duration}
          </span>
        </div>
      </Link>
    )), []
  );

  // Memoized mobile destination items
  const mobileDestinationItems = useMemo(() => 
    NAVIGATION_DESTINATIONS.map((destination, index) => (
      <Link 
        key={`mobile-${destination.link}-${index}`} 
        to={destination.link} 
        className="py-2 px-2 hover:bg-muted rounded cursor-pointer block"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-foreground text-sm">{destination.city}</h4>
            <p className="text-xs text-muted-foreground">{destination.description}</p>
          </div>
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
            {destination.country}
          </span>
        </div>
      </Link>
    )), []
  );

  return (
        <nav className="bg-white text-gray-900 border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Home Button */}
          <Link to="/">
            <Button variant="link" className="text-xl font-bold text-primary hover:no-underline p-0 flex items-center gap-3
             focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none">
              <img src={ibtLogo} alt="IBT Logo"  className="block h-[72px] w-auto md:h-16 lg:h-20 shrink-0 md:mt-[-2px] lg:mt-[-4px]"/>
              <div className="flex flex-col items-center">
                  <span>Imagine Beyond</span>
                  <span className="text-base md:text-lg font-semibold leading-none">Travel</span>

                </div>

            </Button>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">

            {/* Trips Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleTripsMouseEnter}
              onMouseLeave={handleTripsMouseLeave}
            >
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-foreground hover:text-primary"
              >
                Trips
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showTripsDropdown && (
                <div className="absolute top-full right-0 w-96 bg-background border border-gray-200 rounded-lg shadow-xl z-[100] backdrop-blur-sm">
                  <div className="absolute -top-1 left-0 right-0 h-1"></div>
                  <div className="py-1">
                    <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-gray-100">
                      Featured Trip Packages
                    </div>
                    {tripItems}
                  </div>
                </div>
              )}
            </div>


            {/* Destinations Dropdown (DISABLED) */}
            {/*
            <div 
              className="relative"
              onMouseEnter={handleDestinationsMouseEnter}
              onMouseLeave={handleDestinationsMouseLeave}
            >
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-foreground hover:text-primary"
              >
                Destinations
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showDestinationsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-background border border-gray-200 rounded-lg shadow-xl z-[100] backdrop-blur-sm">
                  <div className="absolute -top-1 left-0 right-0 h-1"></div>
                  <div className="py-1">
                    <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-gray-100">
                      Popular Destinations
                    </div>
                    {destinationItems}
                  </div>
                </div>
              )}
            </div>
            */}

            <Link to="/about">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                About
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
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
                  onClick={toggleMobileTrips}
                >
                  Trips
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </Button>
                
                {mobileActiveDropdown === 'trips' && (
                  <div className="pl-4 space-y-1">
                    {mobileTripsItems}
                  </div>
                )}
              </div>


              {/* Mobile Destinations Menu (DISABLED) */}
              {/*
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:text-primary"
                  onClick={toggleMobileDestinations}
                >
                  Destinations
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </Button>
                
                {mobileActiveDropdown === 'destinations' && (
                  <div className="pl-4 space-y-1">
                    {mobileDestinationItems}
                  </div>
                )}
              </div>
                */}
              <Link to="/about">
                <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">
                  About
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
