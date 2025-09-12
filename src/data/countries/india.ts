// Import images
import indiaHero from "@/assets/india-hero.jpg";
import indiaDay01 from "@/assets/india-day01-main-shiny.jpg";
import indiaDay02 from "@/assets/india-day02-main-india-gate.jpg";
import indiaDay03 from "@/assets/india-day03-main-jaswant-thada.jpg";
import indiaDay04 from "@/assets/india-day04-main-mehrangarh-fort.jpg";
import indiaDay05 from "@/assets/india-day05-main-ranakpur-jain-temples.jpg";
import indiaDay06 from "@/assets/india-day06-main-city-palace.jpg";
import indiaDay07 from "@/assets/india-day07-main-udaipur.jpg";
import indiaDay08 from "@/assets/india-day08-main-safari.jpg";
import indiaDay09 from "@/assets/india-day09-main-jaipur.jpg";
import indiaDay10 from "@/assets/india-day10-main-amer-fort.jpg";
import indiaDay11 from "@/assets/india-day11-main-taj-mahal.jpg";
import indiaDay12 from "@/assets/india-day12-main-amer-fort.jpg";
import indiaDay13 from "@/assets/india-day13-main-checkout.jpg";

// Import icons for highlights
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine } from "lucide-react";

import ov1_400 from "@/assets/india-overviewov1-400w.webp";
import ov1_800 from "@/assets/india-overviewov1-800w.webp";
import ov2_400 from "@/assets/india-overviewov2-400w.webp";
import ov2_800 from "@/assets/india-overviewov2-800w.webp";
import ov3_400 from "@/assets/india-overviewov3-400w.webp";
import ov3_800 from "@/assets/india-overviewov3-800w.webp";
import ov4_400 from "@/assets/india-overviewov4-400w.webp";
import ov4_800 from "@/assets/india-overviewov4-800w.webp";
import ov5_400 from "@/assets/india-overviewov5-400w.webp";
import ov5_800 from "@/assets/india-overviewov5-800w.webp";
import ov6_400 from "@/assets/india-overviewov6-400w.webp";
import ov6_800 from "@/assets/india-overviewov6-800w.webp";

// Import gallery images
import indiaDay01Gallery01 from "@/assets/india-day01-gallery-01.jpg";
import indiaDay01Gallery02 from "@/assets/india-day01-gallery-02.jpg";
import indiaDay01Gallery03 from "@/assets/india-day01-gallery-03.jpg";
import indiaDay01Gallery04 from "@/assets/india-day01-gallery-04.jpg";

// Day 2 gallery
import indiaDay02Gallery01 from "@/assets/india-day02-gallery-01.jpg";
import indiaDay02Gallery02 from "@/assets/india-day02-gallery-02.jpg";
import indiaDay02Gallery03 from "@/assets/india-day02-gallery-03.jpg";

// Day 3 gallery
import indiaDay03Gallery01 from "@/assets/india-day03-gallery-01.jpg";
import indiaDay03Gallery02 from "@/assets/india-day03-gallery-02.jpg";
import indiaDay03Gallery03 from "@/assets/india-day03-gallery-03.jpg";

// Day 4 gallery
import indiaDay04Gallery01 from "@/assets/india-day04-gallery-01.jpg";
import indiaDay04Gallery02 from "@/assets/india-day04-gallery-02.jpg";
import indiaDay04Gallery03 from "@/assets/india-day04-gallery-03.jpg";
import indiaDay04Gallery04 from "@/assets/india-day04-gallery-04.jpg";

// Day 5
import indiaDay05Gallery01 from "@/assets/india-day05-gallery-01.jpg";
import indiaDay05Gallery02 from "@/assets/india-day05-gallery-02.jpg";
import indiaDay05Gallery03 from "@/assets/india-day05-gallery-03.jpg";

// Day 6
import indiaDay06Gallery01 from "@/assets/india-day06-gallery-01.jpg";
import indiaDay06Gallery02 from "@/assets/india-day06-gallery-02.jpg";
import indiaDay06Gallery03 from "@/assets/india-day06-gallery-03.jpg";

// Day 7
import indiaDay07Gallery01 from "@/assets/india-day07-gallery-01.jpg";
import indiaDay07Gallery02 from "@/assets/india-day07-gallery-02.jpg";
import indiaDay07Gallery03 from "@/assets/india-day07-gallery-03.jpg";

// Day 8
import indiaDay08Gallery01 from "@/assets/india-day08-gallery-01.jpg";
import indiaDay08Gallery02 from "@/assets/india-day08-gallery-02.jpg";
import indiaDay08Gallery03 from "@/assets/india-day08-gallery-03.jpg";

// Day 9
import indiaDay09Gallery01 from "@/assets/india-day09-gallery-01.jpg";
import indiaDay09Gallery02 from "@/assets/india-day09-gallery-02.jpg";
import indiaDay09Gallery03 from "@/assets/india-day09-gallery-03.jpg";

// Day 10
import indiaDay10Gallery01 from "@/assets/india-day10-gallery-01.jpg";
import indiaDay10Gallery02 from "@/assets/india-day10-gallery-02.jpg";
import indiaDay10Gallery03 from "@/assets/india-day10-gallery-03.jpg";

// Day 11
import indiaDay11Gallery01 from "@/assets/india-day11-gallery-01.jpg";
import indiaDay11Gallery02 from "@/assets/india-day11-gallery-02.jpg";
import indiaDay11Gallery03 from "@/assets/india-day11-gallery-03.jpg";

// Day 12
import indiaDay12Gallery01 from "@/assets/india-day12-gallery-01.jpg";
import indiaDay12Gallery02 from "@/assets/india-day12-gallery-02.jpg";
import indiaDay12Gallery03 from "@/assets/india-day12-gallery-03.jpg";

export const indiaData = {
  id: "india-journey", 
  slug: "india-journey",
  title: "India Journey",
  subtitle: "Immerse yourself in the colors, flavors, and ancient wisdom of incredible India",
  location: "India",
  duration: "13 days",
  heroImage: indiaHero,
  overviewGallery: [ov1_400, ov2_400, ov3_400, ov4_400, ov5_400, ov6_400],
  overviewGallery2x:[ov1_800, ov2_800, ov3_800, ov4_800, ov5_800, ov6_800],

  // Updated to reflect your new flow incl. Mandawa & Pushkar
  route: ["New Delhi", "Mandawa", "Jodhpur", "Udaipur", "Pushkar", "Jaipur", "Agra"],

  aboutDescription: [
    "It's time to start exploring India. This tour is perfect for those first time travellers that have always wanted to explore the wonders of India but don't want to do it alone. This tour will let you experience the amazing different sites India has to offer such as citadel, bustling local markets to the great monuments including the infamous Taj Mahal, the Pink Palaces of Jaipur and Ranthambhore National Park. We begin the tour in India's capital New Delhi and finish in Agra with various different locations along the way, throughout the trip guests will get to immerse themselves in India's rich culture experiencing many Indian traditions and tasting some of the amazing dishes India has to offer. Join us for a once in a lifetime experience that will make you want to travel more"
  ],
  aboutImages: [indiaHero, indiaHero],

  // What's Included Highlights - India specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "12 NIGHTS<br />ACCOMM",
      description: "From heritage hotels in Rajasthan to luxury resorts - experience authentic Indian hospitality!"
    },
    {
      icon: Zap,
      title: "13 DAYS OF<br />EPIC ACTIVITIES",
      description: "Visit the Taj Mahal, explore royal palaces, wildlife safaris & immerse in vibrant culture!",
      link: {
        text: "See the full itinerary",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT PICKUP",
      description: "We'll greet you in New Delhi and handle all transfers throughout your Indian journey."
    },
    {
      icon: Users,
      title: "EXPERT LOCAL<br />GUIDES",
      description: "Knowledgeable guides at every destination plus 24/7 support throughout your adventure."
    },
    {
      icon: UtensilsCrossed,
      title: "AUTHENTIC<br />INDIAN CUISINE",
      description: "12 Breakfasts, 8 Lunches & 6 Dinners featuring regional specialties!"
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your India journey is completely carbon neutral through our verified tree planting program."
    }
  ],
  // NEW: Trip highlights
  highlights: [
    {
      title: "Taj Mahal",
      description: "Visit one of the 7 wonders of the world",
      image: indiaDay11, // Taj photo
    },
    {
      title: "Canter Safari Ranthambhore National Park",
      description:
        "Visit Ranthambhore National Park where you have the chance to witness Leopards, Sloth Bear and maybe even the majestic Tiger",
      image: indiaDay08, // Safari photo
    },
    {
      title: "Cruise over Lake Pichola",
      description:
        "Set off on a sunset cruise across Lake Pichola where expert guides will enhance your trip by explaining the rich history of Udaipur City",
      image: indiaDay06, // Udaipur/Lake photo
    },
  ],
  
  // Summary for the trip
  summary: {
    duration: "13 days",
    activities: "30+ activities", 
    areas: "7 cities",
    type: "Small group"
  },

  // What's included sections
  included: [
    {
      title: "Accommodation", 
      items: [
        { text: "12 nights in carefully selected hotels and heritage properties" },
        { text: "Twin-share accommodation with private bathrooms" },
        { text: "Unique stays including desert camps and palace hotels" }
      ]
    },
    {
      title: "Meals",
      items: [
        { text: "12 breakfasts featuring local and international options" },
        { text: "8 lunches at local restaurants and cultural venues" }, 
        { text: "6 dinners including welcome and farewell meals" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Airport transfers in Delhi" },
        { text: "Air-conditioned coach transportation between cities" },
        { text: "All intercity travel and local transportation" }
      ]
    },
    {
      title: "Activities",
      items: [
        { text: "Guided tours of all major monuments and attractions" },
        { text: "Ranthambhore National Park safari experience" },
        { text: "Lake Pichola sunset boat cruise in Udaipur" }
      ]
    },
    {
      title: "Guides & Support",
      items: [
        { text: "Expert local guides at each destination" },
        { text: "24/7 tour leader support throughout journey" },
        { text: "Cultural orientation and travel briefings" }
      ]
    },
    {
      title: "Extras",
      items: [
        { text: "Carbon neutral travel through verified tree planting" },
        { text: "Comprehensive travel insurance coverage" },
        { text: "Small group experience (max 16 travelers)" }
      ]
    }
  ],
  
  itinerary: [
  {
    day: 1,
    date: "March 15, 2024",
    title: "Delhi Arrival: Hello, India!",
    location: "New Delhi, India",
    heroImage: "indiaDay01",
    description:
      "Touch down in New Delhi, where Mughal grandeur meets modern buzz. Check in at Saket 27, freshen up, and if you're early, dip into mini-adventures—heritage strolls or bustling bazaars. As the city lights glow, meet the crew for a cheerful briefing and a tasty welcome dinner at a local favorite. Stay: Saket 27 · Meals: Breakfast & Dinner",
    activities: [
      {
        time: "All Day",
        title: "Arrival & Welcome",
        location: "New Delhi",
        description: "Airport pickup, hotel check-in, and welcome dinner",
        image: indiaDay01,
        duration: "Full Day"
      }
    ],
    transportation: {
      from: "Indira Gandhi Airport",
      to: "Central Delhi Hotel",
      duration: "45 Minutes",
      distance: "25 km"
    }
  },
  {
    day: 2,
    date: "March 16, 2024",
    title: "Delhi Deep-Dive: Stories, Spice & Splendor",
    location: "Delhi, India",
    heroImage: "indiaDay02",
    description:
      "Ease into the rhythm of the capital with the Salaam Baalak Trust City Walk, guided by young storytellers with lived experience. Step into Old Delhi at Jama Masjid, then shift gears to the serene Gurudwara Bangla Sahib with its glinting domes. Cruise past India Gate, Rashtrapati Bhavan, and Parliament through stately Lutyens' Delhi before a relaxed evening back at your hotel. Stay: Saket 27 · Meals: Breakfast",
    activities: [
      {
        time: "Full Day",
        title: "Delhi City Tour",
        location: "Delhi",
        description: "Explore Old & New Delhi including Jama Masjid, India Gate, and Gurudwara Bangla Sahib",
        image: indiaDay02,
        duration: "8 Hours"
      }
    ]
  }
]
,
  faqs: [
    {
      question: "Where does the trip start & finish?",
      answer: "The trip starts at New Delhi and finishes in New Delhi"
    },
    {
      question: "Which airport do I need to fly into?",
      answer: "Indira Gandhi International Airport - New Delhi"
    },
    {
      question: "What should I wear?",
          answer: `For Summer & Warmer Months (March–June): Stick to light, breathable fabrics like cotton and linen to stay cool. Loose-fitting clothes, comfortable sandals or sneakers, sunglasses, and a hat are must-haves. Sun protection, including sunscreen, is key for long days outdoors.
        
        For Cooler & Winter Months (October–February): Pack layers! Mornings and evenings can be chilly, especially in northern regions. A light jacket or sweater will keep you warm, while breathable clothing works for daytime. Comfortable walking shoes and a scarf for temple visits are always handy.
        
        No matter the season, bring a shawl for religious sites and adventure-ready outfits for outdoor activities!`
        }
        ,
    {
      question: "Do you have an age limit for tours?",
      answer: "Our tours cater to adventurous travelers aged 18-45, with most guests between 21-35 years old. It's perfect for people from diverse backgrounds to share travel experiences."
    },
    {
      question: "What is the local currency?",
      answer: "The local currency in India is the Indian Rupee (INR). We advise guests to first collect cash from the airport ATMs, and there will also be various ATMs available along the way."
    },
    {
      question: "Which airport do I fly out from?",
      answer: "Indira Gandhi International Airport - New Delhi"
    }
  ]
};
