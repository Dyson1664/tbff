// Import images
import japanHero from "@/assets/japan-hero.jpg";
import japanGarden from "@/assets/japan-garden.jpg";
import japanTokyo from "@/assets/japan-tokyo.jpg";
import japanSushi from "@/assets/japan-sushi.jpg";
import japanTorii from "@/assets/japan-torii.jpg";

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
  itinerary: [
    {
      day: 1,
      date: "May 15, 2024",
      title: "Tokyo Arrival & Modern Culture",
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
      ]
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
      ]
    },
    {
      day: 4,
      date: "May 18, 2024",
      title: "Tokyo to Kyoto",
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
      ]
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