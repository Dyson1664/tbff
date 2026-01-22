// Static navigation data for TBFF only

export interface NavigationTrip {
  title: string;
  duration: string;
  location: string;
  link: string; // TBFF-only link
}

export interface NavigationDestination {
  city: string;
  country: string;
  description: string;
  link: string;
}

// ===============================
// TBFF Trips (MUST match Navbar routes)
// ===============================
export const NAVIGATION_TRIPS: readonly NavigationTrip[] = [
  {
    title: "Japan Golden Route",
    duration: "7 Days",
    location: "Japan",
    link: "/project/tbff/japan-itinerary",
  },
  {
    title: "Colombia Highlights",
    duration: "7 Days",
    location: "Colombia",
    link: "/project/tbff/colombia-itinerary", // ✅ FIXED
  },
  {
    title: "Sri Lanka Explorer",
    duration: "11 Days",
    location: "Sri Lanka",
    link: "/project/tbff/srilanka-itinerary",
  },
  {
    title: "Philippines Island Hopping",
    duration: "10 Days",
    location: "Philippines",
    link: "/project/tbff/philippines-itinerary",
  },

  // Coming soon (hidden by footer filter)
  {
    title: "Thailand Adventure",
    duration: "Coming Soon",
    location: "Thailand",
    link: "#",
  },
] as const;

// ===============================
// TBFF Destinations (optional)
// ===============================
export const NAVIGATION_DESTINATIONS: readonly NavigationDestination[] = [
  {
    city: "Japan",
    country: "Asia",
    description: "Ancient traditions & modern cities",
    link: "/japan",
  },
  {
    city: "Colombia",
    country: "South America",
    description: "Coffee culture & vibrant cities",
    link: "/colombia",
  },
  {
    city: "Sri Lanka",
    country: "Asia",
    description: "Pearl of the Indian Ocean",
    link: "/srilanka",
  },
  {
    city: "Philippines",
    country: "Asia",
    description: "Tropical islands paradise",
    link: "/philippines",
  },
] as const;
