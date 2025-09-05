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
  aboutDescription: [
    "Experience the mesmerizing contrast of Japan, where bullet trains glide past ancient temples and neon-lit cities coexist with serene gardens. This 10-day journey takes you from the bustling metropolis of Tokyo to the cultural heart of Kyoto.",
    "Immerse yourself in Japanese culture through tea ceremonies, temple visits, and authentic culinary experiences. From the iconic Mount Fuji to the peaceful bamboo groves, discover why Japan captivates travelers from around the world."
  ],
  aboutImages: [japanGarden, japanTokyo],

  // What's Included Highlights - Japan specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "9 NIGHTS<br />ACCOMMODATION",
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
    {
      day: 1,
      date: "May 15, 2024",
      title: "Tokyo Arrival & Modern Culture",
      location: "Tokyo, Japan",
      heroImage: japanTokyo,
      description: "Begin your Japanese adventure in the heart of Tokyo, experiencing the incredible energy of modern Japan. From the world's busiest pedestrian crossing to authentic sushi crafted by master chefs, immerse yourself in the vibrant culture that defines contemporary Tokyo while discovering the city's culinary excellence.",
      activities: [
        {
          time: "10:00 AM",
          title: "Shibuya Crossing Experience",
          location: "Shibuya, Tokyo",
          description: "Experience the world's busiest pedestrian crossing and explore the vibrant Shibuya district with its neon lights, shopping centers, and urban energy.",
          image: japanTokyo,
          duration: "2 hrs"
        },
        {
          time: "2:00 PM",
          title: "Authentic Sushi Experience",
          location: "Tsukiji Outer Market",
          description: "Learn the art of sushi making from a master chef and enjoy the freshest fish at Tokyo's famous fish market area. A true culinary adventure.",
          image: japanSushi,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Shibuya Crossing Culture",
          description: "Navigate the world's busiest intersection and explore modern Tokyo's urban energy.",
          image: japanTokyo
        },
        {
          title: "Master Sushi Crafting",
          description: "Learn traditional sushi techniques from certified master chefs.",
          image: japanSushi
        },
        {
          title: "Tsukiji Market Discovery",
          description: "Explore Tokyo's famous fish market and taste the freshest seafood.",
          image: japanGarden
        }
      ],
      accommodation: {
        name: "Tokyo Station Hotel",
        rating: "5 Star Historic",
        roomTypes: [
          "01 x Classic Double",
          "01 x Tokyo Station Suite"
        ]
      },
      transportation: {
        from: "Narita Airport",
        to: "Tokyo Central",
        duration: "60 Minutes",
        distance: "60 km"
      }
    },
    {
      day: 2,
      date: "May 16, 2024",
      title: "Traditional Tokyo",
      location: "Tokyo",
      heroImage: japanTorii,
      description: "Immerse yourself in Tokyo's spiritual heart where ancient traditions blend seamlessly with modern city life. Visit centuries-old temples, stroll through imperial gardens, and experience the cultural depth that makes Tokyo one of the world's most fascinating capitals.",
      activities: [
        {
          time: "9:00 AM",
          title: "Senso-ji Temple",
          location: "Asakusa, Tokyo",
          description: "Visit Tokyo's oldest Buddhist temple, walk through the traditional Nakamise shopping street, and experience the spiritual side of the bustling city.",
          image: japanTorii,
          duration: "2.5 hrs"
        },
        {
          time: "2:00 PM",
          title: "East Gardens & Imperial Palace",
          location: "Chiyoda, Tokyo",
          description: "Stroll through the peaceful East Gardens and learn about Japan's imperial history while enjoying beautifully manicured landscapes in the heart of Tokyo.",
          image: japanGarden,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Senso-ji Temple Visit",
          description: "Explore Tokyo's oldest Buddhist temple with traditional Nakamise shopping street.",
          image: japanTorii
        },
        {
          title: "Imperial Palace Gardens",
          description: "Discover beautifully manicured landscapes and Japan's imperial history.",
          image: japanGarden
        },
        {
          title: "Traditional Culture Immersion",
          description: "Experience authentic Japanese spirituality and customs in modern Tokyo.",
          image: japanSushi
        }
      ],
      accommodation: {
        name: "Tokyo Imperial Hotel",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Superior Double",
          "01 x Executive Suite"
        ]
      },
      transportation: {
        from: "Modern Tokyo",
        to: "Traditional Districts",
        duration: "30 Minutes",
        distance: "8 km"
      }
    },
    {
      day: 3,
      date: "May 17, 2024",
      title: "Mount Fuji Day Trip",
      location: "Mount Fuji & Fujikawaguchiko",
      heroImage: japanTorii,
      description: "Journey to Japan's most sacred and iconic mountain, Mount Fuji. This day trip combines natural beauty with spiritual significance as you visit the 5th station for breathtaking views and enjoy serene lake reflections. Weather permitting, capture the perfect photo of this UNESCO World Heritage site that has inspired artists and pilgrims for centuries.",
      activities: [
        {
          time: "8:00 AM",
          title: "Mount Fuji 5th Station",
          location: "Mount Fuji",
          description: "Journey to Japan's most iconic mountain and reach the 5th station for breathtaking views. Weather permitting, capture the perfect photo of this sacred peak.",
          image: japanTorii,
          duration: "4 hrs"
        },
        {
          time: "2:00 PM",
          title: "Lake Kawaguchi",
          location: "Fujikawaguchiko",
          description: "Enjoy serene lake views with Mount Fuji reflections, ride the panoramic ropeway, and experience the natural beauty surrounding Japan's most famous mountain.",
          image: japanGarden,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Mount Fuji 5th Station",
          description: "Experience breathtaking views from Japan's most sacred mountain at 2,300m elevation.",
          image: japanTorii
        },
        {
          title: "Lake Kawaguchi Reflection",
          description: "Capture perfect Mount Fuji reflections in the serene waters of Lake Kawaguchi.",
          image: japanGarden
        },
        {
          title: "Panoramic Ropeway Ride",
          description: "Soar above the landscape for spectacular mountain and lake panoramic views.",
          image: japanSushi
        }
      ],
      accommodation: {
        name: "Kawaguchiko Hotel",
        rating: "4 Star Resort",
        roomTypes: [
          "01 x Mountain View Double",
          "01 x Traditional Tatami Suite"
        ]
      },
      transportation: {
        from: "Tokyo",
        to: "Mount Fuji Area",
        duration: "2.5 Hours",
        distance: "120 km"
      }
    },
    {
      day: 4,
      date: "May 18, 2024",
      title: "Tokyo to Kyoto",
      location: "Kyoto, Japan",
      heroImage: japanTorii,
      description: "Experience Japan's legendary bullet train as you journey to the ancient capital of Kyoto. Upon arrival, immerse yourself in traditional Japanese spirituality at the iconic Fushimi Inari Shrine, famous for its thousands of vermillion torii gates that create mystical tunnels winding up the sacred mountain.",
      activities: [
        {
          time: "9:00 AM",
          title: "Shinkansen Bullet Train",
          location: "Tokyo to Kyoto",
          description: "Experience Japan's famous bullet train, reaching speeds of up to 320 km/h while enjoying views of Mount Fuji and the Japanese countryside.",
          image: japanTokyo,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Fushimi Inari Shrine",
          location: "Kyoto",
          description: "Walk through thousands of vermillion torii gates winding up the mountain at this iconic shrine dedicated to the rice deity Inari.",
          image: japanTorii,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Shinkansen Bullet Train",
          description: "Travel at 320 km/h on Japan's world-famous high-speed rail system.",
          image: japanTokyo
        },
        {
          title: "Fushimi Inari Torii Gates",
          description: "Walk through thousands of vermillion torii gates on this sacred mountain path.",
          image: japanTorii
        },
        {
          title: "Ancient Capital Discovery",
          description: "Begin exploring Kyoto's rich cultural heritage and traditional temples.",
          image: japanGarden
        }
      ],
      accommodation: {
        name: "Kyoto Traditional Ryokan",
        rating: "4.5 Star Heritage",
        roomTypes: [
          "01 x Traditional Tatami Room",
          "01 x Premium Ryokan Suite"
        ]
      },
      transportation: {
        from: "Tokyo",
        to: "Kyoto",
        duration: "2 Hours 15 Minutes",
        distance: "476 km"
      }
    }
  ],
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