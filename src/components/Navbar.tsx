import { useState, useCallback, useMemo, memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Updated logo
import tbffLogo from "@/assets/tbff-logo2.png";

const TBFF_TRIPS = [
  {
    title: "Japan Golden Route",
    location: "Japan",
    duration: "7 days",
    link: "/project/tbff/japan-itinerary",
  },
  {
    title: "Colombia Highlights",
    location: "Colombia",
    duration: "7 days",
    link: "/project/tbff/colombia-itinerary",
  },
] as const;

type TbffTrip = (typeof TBFF_TRIPS)[number];

const DropdownTripItem = memo(({ trip }: { trip: TbffTrip }) => {
  return (
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
  );
});

/**
 * ✅ Coming Soon item
 * - NOT clickable
 * - SAME styling/hover as other items
 * - No cursor changes, no opacity changes
 */
const ComingSoonItem = memo(
  ({ title, location }: { title: string; location: string }) => {
    return (
      <div className="px-4 py-3 hover:bg-muted transition-colors block">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
            Coming soon
          </span>
        </div>
      </div>
    );
  }
);

const Navbar = memo(() => {
  const [showTripsDropdown, setShowTripsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] =
    useState<string | null>(null);

  const handleTripsMouseEnter = useCallback(() => setShowTripsDropdown(true), []);
  const handleTripsMouseLeave = useCallback(() => setShowTripsDropdown(false), []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleMobileTrips = useCallback(() => {
    setMobileActiveDropdown((prev) => (prev === "trips" ? null : "trips"));
  }, []);

  const tripItems = useMemo(
    () =>
      TBFF_TRIPS.map((trip, idx) => (
        <DropdownTripItem key={`${trip.link}-${idx}`} trip={trip} />
      )),
    []
  );

  const mobileTripsItems = useMemo(
    () =>
      TBFF_TRIPS.map((trip, index) => (
        <Link
          key={`mobile-${trip.link}-${index}`}
          to={trip.link}
          className="py-2 px-2 hover:bg-muted rounded transition-colors block"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-foreground text-sm">
                {trip.title}
              </h4>
              <p className="text-xs text-muted-foreground">{trip.location}</p>
            </div>
            <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
              {trip.duration}
            </span>
          </div>
        </Link>
      )),
    []
  );

  return (
    <nav className="bg-white text-gray-900 border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* ✅ LOCK DROPDOWN COLORS (ONLY inside dropdown wrappers) */}
      <style>{`
        /* Desktop dropdown wrapper */
        .tbff-dd {
          /* Force the same neutrals your TBFF pages expect */
          --background: 0 0% 100%;
          --foreground: 215 25% 27%;
          --muted: 210 40% 96.1%;
          --muted-foreground: 215 16% 47%;
          --primary: 84 19% 33%;
        }
        .tbff-dd .bg-background { background-color: rgb(255 255 255) !important; }
        .tbff-dd .text-foreground { color: rgb(17 24 39) !important; }
        .tbff-dd .text-muted-foreground { color: rgb(107 114 128) !important; }
        .tbff-dd .text-primary { color: #506345 !important; }
        .tbff-dd .bg-primary\\/10 { background-color: rgba(251, 221, 218, 0.85) !important; }
        .tbff-dd .hover\\:bg-muted:hover { background-color: rgb(243 244 246) !important; }

        /* Mobile dropdown wrapper */
        .tbff-dd-mobile .text-foreground { color: rgb(17 24 39) !important; }
        .tbff-dd-mobile .text-muted-foreground { color: rgb(107 114 128) !important; }
        .tbff-dd-mobile .text-primary { color: #506345 !important; }
        .tbff-dd-mobile .bg-primary\\/10 { background-color: rgba(251, 221, 218, 0.85) !important; }
        .tbff-dd-mobile .hover\\:bg-muted:hover { background-color: rgb(243 244 246) !important; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
  to="/"
  onClick={() => {
    // close mobile menu if open
    setIsMobileMenuOpen(false);
    setMobileActiveDropdown(null);

    // scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }}
>
  <Button
    variant="link"
    className="p-0 hover:no-underline flex items-center"
  >
    <img
      src={tbffLogo}
      alt="TBFF Logo"
      className="h-10 md:h-12 lg:h-14 w-auto"
    />
  </Button>
</Link>


          {/* Desktop menu */}
          <div className="hidden md:flex items-center ml-auto mr-12">
            <div
              className="relative"
              onMouseEnter={handleTripsMouseEnter}
              onMouseLeave={handleTripsMouseLeave}
            >
              <Button
                variant="ghost"
                className="flex items-center gap-1 text-foreground hover:text-primary"
              >
                Current Trips
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showTripsDropdown && (
                <div className="tbff-dd absolute top-full right-0 w-96 bg-background border border-gray-200 rounded-lg shadow-xl z-[100]">
                  <div className="py-1">
                    <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-gray-100">
                      Current Group Trips
                    </div>

                    {tripItems}

                    {/* Coming soon */}
                    <ComingSoonItem title="Sri Lanka Explorer" location="Sri Lanka" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={toggleMobileTrips}
              >
                tbff trips
                <ChevronDown className="w-4 h-4 ml-auto" />
              </Button>

              {mobileActiveDropdown === "trips" && (
                <div className="tbff-dd-mobile pl-4 space-y-1">
                  {mobileTripsItems}

                  {/* Coming soon */}
                  <div className="py-2 px-2 hover:bg-muted transition-colors rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          Sri Lanka Explorer
                        </h4>
                        <p className="text-xs text-muted-foreground">Sri Lanka</p>
                      </div>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        Coming soon
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
