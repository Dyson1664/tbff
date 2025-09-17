// Static landing page data extracted for better performance

// Import existing images
import thailandHero from "@/assets/thailand-hero.jpg";
import japanHero from "@/assets/japan-hero.jpg";
import srilankaHero from "@/assets/srilanka-hero.jpg";
import philippinesHero from "@/assets/philippines-hero.jpg";
import colombiaHero from "@/assets/colombia-hero.jpg";
import indiaHero from "@/assets/india-hero.jpg";

import indiaDay11 from "@/assets/india-day11-main-taj-mahal.jpg";


import bhutanHero from "@/assets/bhutan-hero.jpg";
import vietnamHero from "@/assets/vietnam-hero.jpg";
import { Star, MapPin, Users, Shield, Compass, Globe, Mail } from "lucide-react";

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
  icon: typeof Users;
  title: string;
  description: string;
}

export const FEATURED_TOURS: readonly FeaturedTour[] = [
  {
    id: 1,
    slug: "japan",
    title: "Japan Journey",
    location: "Tokyo, Japan",
    duration: "7 days",
    rating: 4.9,
    reviews: 142,
    price: "From $2,499",
    image: japanHero,
    tag: "POPULAR",
    overview:
      "Neon cities to Zen temples—Tokyo to Kyoto by bullet train, sushi, and shrines."
  },
  {
    id: 2,
    slug: "india-journey",
    image: indiaDay11,
    title: "India Journey",
    location: "India",
    duration: "13 days",
    price: "from $1,599",
    rating: 4.9,
    reviews: 89,
    tag: "NEW",
    overview:
      "Handpicked highlights: Delhi, Jodhpur, Udaipur, Pushkar, Jaipur, Agra."
  },
  {
    id: 3,
    slug: "sri-lanka",
    title: "Sri Lanka Explorer",
    location: "Colombo, Sri Lanka",
    duration: "9 days",
    rating: 4.7,
    reviews: 156,
    price: "From $850",
    image: srilankaHero,
    tag: "FEATURED",
    overview:
      "From Colombo’s vibrant streets to Ella’s trails and Arugam Bay’s waves—Sri Lanka awaits."
  }
] as const;

// Extract destinations to module level
export const DESTINATIONS: readonly Destination[] = [
  { name: "Thailand",    image: thailandHero,    route: "/thailand-itinerary" },
  { name: "Sri Lanka",   image: srilankaHero,    route: "/srilanka-itinerary" },
  { name: "Philippines", image: philippinesHero, route: "/philippines-itinerary" },
  { name: "Japan",       image: japanHero,       route: "/japan-itinerary" },
  { name: "India",       image: indiaHero,       route: "/india-itinerary" },
  { name: "Colombia",    image: colombiaHero,    comingSoon: true },
  { name: "Bhutan",      image: bhutanHero,      comingSoon: true },
  { name: "Vietnam",     image: vietnamHero,     comingSoon: true },
] as const;


// Extract testimonials to module level
export const TESTIMONIALS: readonly Testimonial[] = [
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
] as const;

// Extract features to module level
export const FEATURES: readonly Feature[] = [
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
] as const;

// Tour route mappings for efficient lookups
export const TOUR_ROUTES: Record<number, string> = {
  1: "/japan-itinerary",
  2: "/india-itinerary", 
  3: "/srilanka-itinerary"
} as const;
