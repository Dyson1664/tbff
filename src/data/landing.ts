// Static landing page data extracted for better performance

// Import existing images
import thailandHero from "@/assets/thailand-hero.jpg";
import japanHero from "@/assets/japan-hero.jpg";
import srilankaHero from "@/assets/srilanka-hero.jpg";
import philippinesHero from "@/assets/philippines-hero.jpg";
import colombiaHero from "@/assets/colombia-hero.jpg";
import indiaHero from "@/assets/india-hero.jpg";
import srilankaDay06 from "@/assets/srilanka-day05-ella-bridge.jpg";


import indiaDay13 from "@/assets/india-day13-main-taj-mahal.jpg";


import bhutanHero from "@/assets/bhutan-hero.jpg";
import vietnamHero from "@/assets/vietnam-hero.jpg";
import type { LucideIcon } from "lucide-react";
import {
  Star,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  CreditCard,
  Headphones,
  Users,
  MapPinned,
} from "lucide-react";


export interface FeaturedTour {
  id: number;
  slug?: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  tag: string;
  overview?: string;
}

export interface Destination {
  name: string;
  image: string;
  route?: string;
  comingSoon?: boolean;
}

export interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  location: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}


export const FEATURED_TOURS: readonly FeaturedTour[] = [
  {
    id: 1,
    slug: "japan",
    title: "Japan Golden Route",
    location: "Tokyo, Japan",
    duration: "7 days",
    rating: 4.9,
    reviews: 142,
    price: "From $1,899",
    image: japanHero,
    tag: "",
    overview:
      "Neon cities to Zen temples—Tokyo to Kyoto by bullet train, sushi, and shrines."
  },
  {
    id: 2,
    slug: "india-journey",
    image: indiaDay13,
    title: "India Journey",
    location: "India",
    duration: "14 days",
    price: "from $1,529",
    rating: 4.9,
    reviews: 89,
    tag: "RESERVE NOW",
    overview:
      "Handpicked highlights: Delhi, Jodhpur, Udaipur, Pushkar, Jaipur, Agra."
  },
  {
    id: 3,
    slug: "sri-lanka",
    title: "Sri Lanka Explorer",
    location: "Colombo, Sri Lanka",
    duration: "11 days",
    rating: 4.7,
    reviews: 156,
    price: "From $1,449",
    image: srilankaDay06,
    tag: "",
    overview:
      "From Colombo’s vibrant streets to Ella’s trails and Arugam Bay’s waves—Sri Lanka awaits."
  }
] as const;

// Extract destinations to module level
export const DESTINATIONS: readonly Destination[] = [
  { name: "India",       image: indiaHero,       route: "/india-itinerary" },
  { name: "Sri Lanka",   image: srilankaHero,    route: "/srilanka-itinerary" },
  { name: "Philippines", image: philippinesHero, route: "/philippines-itinerary" },
  { name: "Japan",       image: japanHero,       route: "/japan-itinerary" },
  { name: "Thailand",    image: thailandHero,    comingSoon: true },
  { name: "Colombia",    image: colombiaHero,    comingSoon: true },
  { name: "Bhutan",      image: bhutanHero,      comingSoon: true },
  { name: "Vietnam",     image: vietnamHero,     comingSoon: true },
] as const;


// Extract testimonials to module level
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Daniel Riley",
    avatar: "DR",
    rating: 5,
    date: "Oct 2025",
    text: "Did the Japan tour and it was honestly the best time of my life! A great mix of experiencing culture, food and nightlife. Would definitely recommend, one ticked off the bucket list!",
    location: "United Kingdom"
  },
  {
    name: "Anastasia Giddens", 
    avatar: "AG",
    rating: 5,
    date: "Nov 2025",
    text: "Jay was a fantastic tour guide for the Philippines trip. He accommodated everyone's needs and was amazing and patient. Would highly recommend a trip with him.",
    location: "United States"
  },
  {
    name: "Selena Agosto",
    avatar: "SA", 
    rating: 5,
    date: "Nov 2025",
    text: "Our tour guide Jay was amazing. He was super kind, accommodating, and always made sure all the girls on the trip had everything they needed!",
    location: "United States"
  }
] as const;



export const FEATURES = [
  {
    title: "Hosting group trips since 2021",
    description:
      "Thousands of shared moments — built around community, confidence, and unforgettable experiences.",
    icon: Users,
  },
  {
    title: "Everything planned for you",
    description:
      "Accommodation, transport, and activities are organized so you can just show up and enjoy.",
    icon: CalendarCheck,
  },
  {
    title: "24/7 support on the ground",
    description:
      "A tour guide is with you throughout the trip — plus support before you travel and help with onward plans.",
    icon: Headphones,
  },
  {
    title: "Safety is our top priority",
    description:
      "We choose trusted partners, vetted accommodations, and keep the group supported at every step.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible payment options",
    description:
      "Pay tour operators directly with payment plan options available where offered.",
    icon: CreditCard,
  },
  {
    title: "Small group sizes",
    description:
      "Typically 8–16 travelers — the perfect balance of social and personal space.",
    icon: MapPinned,
  },
] as const;


// Tour route mappings for efficient lookups
export const TOUR_ROUTES: Record<number, string> = {
  1: "/japan-itinerary",
  2: "/india-itinerary", 
  3: "/srilanka-itinerary"
} as const;
