// Import images
import japanHero from "@/assets/japan-hero.jpg";
import japanGarden from "@/assets/japan-garden.jpg";
import japanTokyo from "@/assets/japan-tokyo.jpg";
import japanSushi from "@/assets/japan-sushi.jpg";
import japanTorii from "@/assets/japan-torii.jpg";

// Import icons for highlights
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine } from "lucide-react";

export const japanData = {
  id: "japan-journey",
  slug: "japan",
  title: "Japan Journey",
  subtitle: "Discover the perfect harmony of ancient traditions and cutting-edge modernity",
  location: "Japan",
  duration: "10 days",
  heroImage: japanHero,
  route: ["Tokyo", "Mt. Fuji", "Kyoto"],
  aboutDescription: [
    "Experience the mesmerizing contrast of Japan, where bullet trains glide past ancient temples and neon-lit cities coexist with serene gardens. This 10-day journey takes you from the bustling metropolis of Tokyo to the cultural heart of Kyoto.",
    "Immerse yourself in Japanese culture through tea ceremonies, temple visits, and authentic culinary experiences. From the iconic Mount Fuji to the peaceful bamboo groves, discover why Japan captivates travelers from around the world."
  ],
  aboutImages: [japanGarden, japanTokyo],

  // What's Included Highlights - Japan specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "9 NIGHTS<br />ACCOMM",
      description: "From traditional ryokans to modern hotels - experience authentic Japanese hospitality!"
    },
    {
      icon: Zap,
      title: "10 DAYS OF<br />CULTURAL IMMERSION",
      description: "Tea ceremonies, temple visits, bullet trains & authentic experiences in Tokyo and Kyoto!",
      link: {
        text: "Explore the itinerary",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT TRANSFERS<br />& JR PASS",
      description: "Seamless transfers plus unlimited travel on Japan's famous bullet trains and local transport."
    },
    {
      icon: Users,
      title: "CULTURAL<br />EXPERTS",
      description: "Knowledgeable local guides who speak fluent English and provide deep cultural insights."
    },
    {
      icon: UtensilsCrossed,
      title: "AUTHENTIC<br />CUISINE",
      description: "9 Breakfasts plus sushi workshops, tea ceremonies, and traditional kaiseki dining experiences!"
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Japan journey is completely carbon neutral through our verified environmental program."
    }
  ],
  itinerary: [
  // --- JAPAN: Days 1–4 (paste over your existing day 1–4 objects) ---
{
  day: 1,
  date: "May 15, 2024",
  title: "Tokyo Arrival & Welcome Dinner",
  location: "Tokyo, Japan",
  heroImage: japanTokyo,
  description:
    "Welcome to Tokyo! There’s no airport pickup—your guide will help with directions for the train (about 1 hour; recommended). Taxis are available but expensive. Check in, relax, or explore nearby shopping areas. Meet the guide and crew at 7:00 PM for a relaxed welcome dinner.",
  meals: "Dinner",
  accommodation: { name: "THE KNOT TOKYO Shinjuku" },
  highlights: "Self-guided neighborhood strolls, optional Mario Kart street karts, shopping districts",
  transportation: {
    from: "Narita/Haneda Airport",
    to: "The Knot Tokyo",
    duration: "≈ 60 Minutes by train",
    distance: "—"
  }
},
{
  day: 2,
  date: "May 16, 2024",
  title: "Asakusa Senso-ji, Sake Tasting & Ameyoko",
  location: "Tokyo, Japan",
  heroImage: japanTorii,
  description:
    "Morning at Kaminarimon Gate and Senso-ji Temple, then premium sake tasting at Gashue. Stroll Ameyoko shopping street and sample local izakayas for dinner. Most sights are walkable (10–15 min), with short train hops (10–30 min). Dinner at 7.",
  meals: "Breakfast & Dinner",
  accommodation: { name: "THE KNOT TOKYO Shinjuku" },
  highlights: "Senso-ji Temple, premium sake tasting (Gashue), Ameyoko street & izakayas"
},
{
  day: 3,
  date: "May 17, 2024",
  title: "Meiji Jingu, Harajuku & Golden Gai",
  location: "Tokyo, Japan",
  heroImage: japanTorii,
  description:
    "Train to Meiji Jingu, Tokyo’s forest shrine. Wander Harajuku’s Takeshita-dori for pop culture and fashion. Free time, then dive into Shinjuku’s tiny themed bars in Golden Gai after dinner at 7. Expect plenty of walking and multiple short train rides.",
  meals: "Breakfast & Dinner",
  accommodation: { name: "THE KNOT TOKYO Shinjuku" },
  highlights: "Meiji Jingu shrine, Harajuku Takeshita-dori, Golden Gai bar alleys"
},
{
  day: 4,
  date: "May 18, 2024",
  title: "Mt. Fuji Day (Hakone Loop) → Kyoto",
  location: "Kyoto, Japan",
  heroImage: japanTorii,
  description:
    "Mt Fuji day! Tackle the Hakone Loop with scenic transports and viewpoints (weather permitting), then continue on to Kyoto. Travel notes: walk ~10 minutes to Ueno Station; total journey to Kyoto about 2.5 hours.",
  meals: "Breakfast",
  accommodation: { name: "Toyoko Inn Odawara" },
  highlights: "Hakone Loop (ropeway/cruise/Owakudani), Mt Fuji viewpoints, evening transfer to Kyoto"
}
// --- end ---
,
  {
  day: 5,
  date: "May 19, 2024",
  title: "Kyoto Classics: Tea Ceremony, Kiyomizu-dera & Gion",
  location: "Kyoto, Japan",
  heroImage: japanGarden,
  description:
    "Early start for Kyoto’s iconic red gates at dawn, then a serene tea ceremony at the Hosomi Museum (short bus ride). Wander the historic lanes around Kiyomizu-dera and through the Gion district’s wooden machiya and lantern-lit alleys.",
  meals: "Breakfast & Dinner",
  accommodation: { name: "Prince Smart Inn Shijo Omiya" },
  highlights: "Tea ceremony (Hosomi Museum), Kiyomizu-dera area, Gion streets & geisha district"
},
{
  day: 6,
  date: "May 20, 2024",
  title: "Fushimi Inari, Samurai Class & Nara Park",
  location: "Kyoto & Nara, Japan",
  heroImage: japanTorii,
  description:
    "Beat the crowds at Fushimi Inari Taisha’s vermilion torii at sunrise, then try a hands-on samurai/kendo experience. In the afternoon, take the train to Nara Park to meet the friendly deer and visit historic temple grounds.",
  meals: "Breakfast",
  accommodation: { name: "Prince Smart Inn Shijo Omiya" },
  highlights: "Fushimi Inari torii gates, samurai/kendo session, Nara Park & deer"
},
{
  day: 7,
  date: "May 21, 2024",
  title: "Kyoto Checkout & Farewell",
  location: "Kyoto, Japan",
  heroImage: japanGarden,
  description:
    "Enjoy a slow morning in Kyoto—grab a last matcha or photo stroll—then check out and continue your onward journey.",
  meals: "Breakfast",
  highlights: "Free morning, checkout, onward travel"
}
]
,
  summary: {
    duration: "10 Days",
    activities: "18 Experiences",
    areas: "4 Cities",
    type: "Culture & Nature"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "9 nights mixing modern hotels and traditional ryokans" },
        { text: "Traditional Japanese breakfast" },
        { text: "Onsen (hot spring) access" }
      ]
    },
    {
      title: "Activities & Cultural Experiences",
      items: [
        { text: "Tea ceremony with kimono experience" },
        { text: "Sushi making masterclass" },
        { text: "Temple and shrine entrance fees" },
        { text: "Mount Fuji area tour" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "7-day JR Pass for unlimited train travel" },
        { text: "Airport transfers via express trains" },
        { text: "Local transportation passes" }
      ]
    },
    {
      title: "Culinary Delights",
      items: [
        { text: "Traditional kaiseki dinner experience" },
        { text: "Tsukiji fish market food tour" },
        { text: "Sake tasting sessions" }
      ]
    },
    {
      title: "Expert Guidance",
      items: [
        { text: "Certified English-speaking guides" },
        { text: "Cultural etiquette orientation" },
        { text: "24/7 emergency support" }
      ]
    },
    {
      title: "Unique Experiences",
      items: [
        { text: "Private garden meditation session" },
        { text: "Traditional craftsman workshops" },
        { text: "Cherry blossom viewing (seasonal)" }
      ]
    }
  ],
  faqs: [
    {
      question: "What is the best time to visit Japan?",
      answer: "The best times are spring (March-May) for cherry blossoms and fall (September-November) for autumn colors. These seasons offer pleasant weather and stunning natural beauty."
    },
    {
      question: "Do I need to speak Japanese to travel in Japan?",
      answer: "While knowing some basic Japanese phrases is helpful, it's not necessary. Many signs are in English, and people in tourist areas often speak some English. Our guides will also assist with translation."
    },
    {
      question: "What should I pack for my Japan trip?",
      answer: "Pack comfortable walking shoes, weather-appropriate clothing, a portable charger, and cash (Japan is still largely cash-based). We'll provide a detailed packing list upon booking."
    },
    {
      question: "Are meals included in the itinerary?",
      answer: "Yes, most meals are included as specified in the 'What's Included' section. You'll experience authentic Japanese cuisine including sushi, ramen, and traditional kaiseki dinners."
    },
    {
      question: "What is the group size for this tour?",
      answer: "Our Japan tours are limited to 12-16 participants to ensure a personalized experience and easier access to cultural sites and restaurants."
    }
  ]
};