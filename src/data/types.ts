// Core type definitions for travel data

export interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface TourSummary {
  duration: string;
  activities: string;
  areas: string;
  type: string;
}

export interface IncludedItem {
  text: string;
}

export interface IncludedCategory {
  title: string;
  items: IncludedItem[];
}

export interface ItineraryData {
  id?: string;
  slug?: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  heroImage: string;
  aboutDescription: string[];
  aboutImages: string[];
  itinerary: ItineraryDay[];
  summary: TourSummary;
  included: IncludedCategory[];
}

export interface Trip {
  id: string;
  slug?: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  price: string;
  route: string;
}

export interface DestinationData {
  country: string;
  heroImage: string;
  heroSubtitle: string;
  trips: Trip[];
  itinerary?: ItineraryData; // Optional full itinerary data
}

// Unified data structure for all destinations
export interface UnifiedDestinationData extends DestinationData {
  itinerary: ItineraryData;
}