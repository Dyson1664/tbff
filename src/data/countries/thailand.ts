// Import images
import thailandHero from "@/assets/thailand-hero.jpg";
import thailandMarket from "@/assets/thailand-market.jpg";
import thailandTemple from "@/assets/thailand-temple.jpg";
import thailandPalace from "@/assets/thailand-palace.jpg";
import thailandBoat from "@/assets/thailand-boat.jpg";

// Import icons for highlights
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine } from "lucide-react";

export const thailandData = {
  id: "thailand-discovery",
  slug: "thailand",
  title: "Thailand Discovery",
  subtitle: "Experience the Land of Smiles through ancient temples, vibrant markets, and pristine beaches",
  location: "Thailand",
  duration: "8 days",
  heroImage: thailandHero,
  aboutDescription: [
    "Embark on an unforgettable journey through Thailand, where ancient traditions meet modern vibrancy. From the bustling streets of Bangkok to the serene beaches of the islands, this 8-day adventure showcases the best of what Thailand has to offer.",
    "Discover golden temples, sample incredible street food, explore floating markets, and relax on world-famous beaches. This carefully curated itinerary balances cultural immersion with natural beauty, creating memories that will last a lifetime."
  ],
  aboutImages: [thailandMarket, thailandTemple],

  // What's Included Highlights - Thailand specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "7 NIGHTS<br />ACCOMMODATION",
      description: "From luxury Bangkok hotels to beachfront resorts and traditional Thai-style accommodations!"
    },
    {
      icon: Zap,
      title: "8 DAYS OF<br />THAI ADVENTURES",
      description: "Ancient temples, floating markets, Thai cooking classes, island hopping & cultural immersion!",
      link: {
        text: "Discover Thailand",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT TRANSFERS<br />& TRANSPORT",
      description: "Meet & greet in Bangkok plus all transfers including domestic flights and boat transfers."
    },
    {
      icon: Users,
      title: "THAI CULTURAL<br />EXPERTS",
      description: "Local guides fluent in English who share deep knowledge of Thai history and traditions."
    },
    {
      icon: UtensilsCrossed,
      title: "AUTHENTIC<br />THAI CUISINE",
      description: "7 Breakfasts, 5 Lunches & 4 Dinners plus hands-on Thai cooking classes and street food tours!"
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Thailand journey supports local conservation and sustainable tourism initiatives."
    }
  ],
  itinerary: [
    {
      day: 1,
      date: "April 10, 2024",
      title: "Bangkok Arrival & Grand Palace",
      location: "Bangkok, Thailand",
      heroImage: thailandPalace,
      description: "Begin your Thai adventure in the magnificent capital of Bangkok, exploring the stunning Grand Palace complex that served as the royal residence for centuries. Discover intricate golden architecture, sacred temples, and the spiritual heart of Buddhism at Wat Pho, home to the famous reclining Buddha and traditional Thai massage traditions.",
      activities: [
        {
          time: "10:00 AM",
          title: "Grand Palace Complex",
          location: "Bangkok Old City",
          description: "Begin your Thai adventure at the magnificent Grand Palace, home to Thai royalty for centuries. Marvel at the intricate architecture, golden spires, and the sacred Emerald Buddha.",
          image: thailandPalace,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Wat Pho Temple",
          location: "Bangkok",
          description: "Visit the Temple of the Reclining Buddha, famous for its massive golden Buddha statue and traditional Thai massage school. Experience the spiritual heart of Buddhism in Thailand.",
          image: thailandTemple,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Grand Palace Majesty",
          description: "Explore centuries of Thai royal history through stunning golden architecture and sacred spaces.",
          image: thailandPalace
        },
        {
          title: "Emerald Buddha Temple",
          description: "Visit Thailand's most sacred Buddhist temple housing the revered Emerald Buddha.",
          image: thailandTemple
        },
        {
          title: "Traditional Massage Heritage",
          description: "Discover the birthplace of traditional Thai massage at Wat Pho Temple.",
          image: thailandMarket
        }
      ],
      accommodation: {
        name: "Bangkok Luxury Riverside Hotel",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Deluxe City View",
          "01 x Royal Suite"
        ]
      },
      transportation: {
        from: "Airport",
        to: "Bangkok Historic Center",
        duration: "45 Minutes",
        distance: "35 km"
      }
    },
    {
      day: 2,
      date: "April 11, 2024",
      title: "Floating Markets & Local Culture",
      location: "Bangkok & Ratchaburi",
      heroImage: thailandMarket,
      description: "Discover Thailand's authentic water-based culture through vibrant floating markets and traditional long-tail boat journeys. Experience local life along the canals where vendors have traded for generations, offering fresh produce and traditional delicacies from their boats.",
      activities: [
        {
          time: "8:00 AM",
          title: "Damnoen Saduak Floating Market",
          location: "Ratchaburi Province",
          description: "Experience Thailand's famous floating market where vendors sell fresh fruits, vegetables, and local delicacies from traditional long-tail boats along the canals.",
          image: thailandMarket,
          duration: "4 hrs"
        },
        {
          time: "3:00 PM",
          title: "Long-tail Boat River Tour",
          location: "Chao Phraya River",
          description: "Cruise along Bangkok's waterways on a traditional long-tail boat, witnessing local life along the klongs (canals) and visiting riverside temples.",
          image: thailandBoat,
          duration: "2.5 hrs"
        }
      ],
      experiences: [
        {
          title: "Floating Market Experience",
          description: "Navigate authentic Thai floating markets on traditional long-tail boats.",
          image: thailandMarket
        },
        {
          title: "Canal Life Discovery",
          description: "Witness local life along Bangkok's historic waterways and klongs.",
          image: thailandBoat
        },
        {
          title: "Riverside Temple Visits",
          description: "Explore beautiful temples accessible only by water along the river.",
          image: thailandTemple
        }
      ],
      accommodation: {
        name: "Bangkok Riverside Resort",
        rating: "4.5 Star",
        roomTypes: [
          "01 x Deluxe River View",
          "01 x Traditional Thai Suite"
        ]
      },
      transportation: {
        from: "Bangkok",
        to: "Ratchaburi Province",
        duration: "2 Hours",
        distance: "80 km"
      }
    },
    {
      day: 3,
      date: "April 12, 2024",
      title: "Bangkok to Chiang Mai",
      location: "Chiang Mai, Northern Thailand",
      heroImage: thailandTemple,
      description: "Journey north to Chiang Mai, Thailand's cultural capital surrounded by mountains and home to over 300 temples. Experience the transition from bustling Bangkok to the laid-back northern Thai culture as you explore the ancient walled city with its traditional temples, local markets, and authentic mountain atmosphere.",
      activities: [
        {
          time: "9:00 AM",
          title: "Flight to Chiang Mai",
          location: "Bangkok to Chiang Mai",
          description: "Take a short domestic flight to Northern Thailand's cultural capital, surrounded by mountains and home to over 300 temples.",
          image: thailandTemple,
          duration: "1.5 hrs"
        },
        {
          time: "2:00 PM",
          title: "Chiang Mai Old City Walk",
          location: "Chiang Mai Historic Center",
          description: "Explore the ancient walled city, visiting traditional temples, local markets, and experiencing the laid-back northern Thai culture.",
          image: thailandMarket,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Ancient Walled City",
          description: "Discover Chiang Mai's historic center with traditional Lanna architecture and culture.",
          image: thailandTemple
        },
        {
          title: "Temple Architecture Tour",
          description: "Explore beautiful northern Thai temples with unique architectural styles.",
          image: thailandMarket
        },
        {
          title: "Mountain Culture Immersion",
          description: "Experience authentic northern Thai culture and laid-back mountain lifestyle.",
          image: thailandBoat
        }
      ],
      accommodation: {
        name: "Chiang Mai Heritage Hotel",
        rating: "4.5 Star Boutique",
        roomTypes: [
          "01 x Lanna Style Double",
          "01 x Traditional Mountain Suite"
        ]
      },
      transportation: {
        from: "Bangkok",
        to: "Chiang Mai",
        duration: "1 Hour 20 Minutes",
        distance: "700 km"
      }
    },
    {
      day: 4,
      date: "April 13, 2024",
      title: "Elephant Sanctuary & Mountain Temples",
      location: "Mae Taeng & Doi Suthep, Chiang Mai",
      heroImage: thailandPalace,
      description: "Experience ethical wildlife conservation at a rescued elephant sanctuary, learning about these gentle giants while participating in their care and rehabilitation. End your day with a spiritual journey to Doi Suthep Temple, perched high on a sacred mountain offering panoramic views of the Chiang Mai valley below.",
      activities: [
        {
          time: "8:00 AM",
          title: "Ethical Elephant Sanctuary",
          location: "Mae Taeng District",
          description: "Spend time with rescued elephants in their natural habitat, learning about conservation efforts while feeding and bathing these gentle giants.",
          image: thailandTemple,
          duration: "6 hrs"
        },
        {
          time: "4:00 PM",
          title: "Doi Suthep Temple",
          location: "Doi Suthep Mountain",
          description: "Visit this sacred mountain temple offering panoramic views of Chiang Mai valley. Climb the 309-step staircase flanked by golden nagas.",
          image: thailandPalace,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Elephant Conservation Experience",
          description: "Participate in ethical elephant care and learn about wildlife conservation efforts.",
          image: thailandTemple
        },
        {
          title: "Sacred Mountain Temple",
          description: "Climb to Doi Suthep Temple for spiritual enlightenment and panoramic valley views.",
          image: thailandPalace
        },
        {
          title: "Golden Naga Staircase",
          description: "Ascend the famous 309-step staircase guarded by golden serpent statues.",
          image: thailandMarket
        }
      ],
      accommodation: {
        name: "Chiang Mai Mountain Resort",
        rating: "4 Star Eco-Resort",
        roomTypes: [
          "01 x Mountain View Villa",
          "01 x Traditional Thai Pavilion"
        ]
      },
      transportation: {
        from: "Chiang Mai City",
        to: "Mae Taeng & Doi Suthep",
        duration: "45 Minutes",
        distance: "30 km"
      }
    }
  ],
  summary: {
    duration: "8 Days",
    activities: "15 Experiences",
    areas: "3 Regions",
    type: "Culture & Adventure"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "7 nights in carefully selected hotels" },
        { text: "Traditional Thai breakfast daily" },
        { text: "Pool and spa facilities access" }
      ]
    },
    {
      title: "Activities & Tours",
      items: [
        { text: "Grand Palace and temple entrances" },
        { text: "Floating market boat tour" },
        { text: "Ethical elephant sanctuary visit" },
        { text: "Traditional cooking class" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Airport transfers throughout" },
        { text: "Domestic flight Bangkok-Chiang Mai" },
        { text: "Private transport for day trips" }
      ]
    },
    {
      title: "Culinary Experiences",
      items: [
        { text: "Street food tours in Bangkok" },
        { text: "Traditional Thai cooking class" },
        { text: "Floating market food sampling" }
      ]
    },
    {
      title: "Support & Guidance",
      items: [
        { text: "English-speaking local guides" },
        { text: "24/7 support during your trip" },
        { text: "Cultural orientation sessions" }
      ]
    },
    {
      title: "Special Experiences",
      items: [
        { text: "Sunset temple visits" },
        { text: "Traditional Thai massage session" },
        { text: "Local artisan workshop visits" }
      ]
    }
  ],
  faqs: [
    {
      question: "What is the best time to visit Thailand?",
      answer: "November to March is ideal with cooler, dry weather. April-May is hot season, and June-October is rainy season. Each season has its charm, and we plan activities accordingly."
    },
    {
      question: "What should I wear when visiting temples?",
      answer: "Dress modestly with covered shoulders and knees. Avoid shorts, tank tops, or revealing clothing. We recommend bringing a light scarf or shawl for easy temple visits."
    },
    {
      question: "Is Thai food very spicy?",
      answer: "Thai cuisine can be spicy, but most restaurants can adjust spice levels. Our culinary experiences include mild to medium spiced dishes, and we'll always ask about your spice preferences."
    },
    {
      question: "How much should I tip in Thailand?",
      answer: "Tipping isn't mandatory but appreciated. 10% at restaurants, 20-50 baht for hotel staff, and 100-200 baht per day for tour guides are standard amounts."
    },
    {
      question: "Can I drink tap water in Thailand?",
      answer: "We recommend bottled water for drinking. All our accommodations provide complimentary bottled water, and our restaurants use filtered water for cooking and ice."
    }
  ]
};