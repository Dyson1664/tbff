// Import images
import philippinesHero from "@/assets/philippines-hero.jpg";
import philippinesRice from "@/assets/philippines-rice.jpg";
import philippinesMarket from "@/assets/philippines-market.jpg";

export const philippinesData = {
  id: "philippines-paradise",
  title: "Philippines Paradise",
  subtitle: "Explore tropical islands, ancient rice terraces, and vibrant Filipino culture",
  location: "Philippines",
  duration: "9 days",
  heroImage: philippinesHero,
  aboutDescription: [
    "Discover the incredible diversity of the Philippines, an archipelago of over 7,000 islands offering pristine beaches, ancient rice terraces, and warm Filipino hospitality. From the bustling streets of Manila to the remote beauty of Palawan and Banaue.",
    "Experience world-class diving, UNESCO World Heritage sites, and some of the most beautiful islands on Earth. This journey combines adventure, relaxation, and cultural immersion in one of Southeast Asia's most stunning destinations."
  ],
  aboutImages: [philippinesRice, philippinesMarket],
  itinerary: [
    {
      day: 1,
      date: "July 10, 2024",
      title: "Manila Heritage",
      location: "Manila, Luzon",
      heroImage: philippinesMarket,
      description: "Begin your Philippine adventure in Manila, where Spanish colonial heritage meets modern Filipino culture. Explore the historic walled city of Intramuros with its centuries-old churches and cobblestone streets, then discover the country's rich artistic and cultural heritage through museums and parks dedicated to national heroes.",
      activities: [
        {
          time: "9:00 AM",
          title: "Intramuros Walking Tour",
          location: "Manila",
          description: "Explore the historic walled city built by Spanish colonizers, featuring centuries-old churches, museums, and cobblestone streets that tell the story of Philippine history.",
          image: philippinesMarket,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Rizal Park & National Museum",
          location: "Manila",
          description: "Visit the park dedicated to the national hero Dr. José Rizal and explore Filipino art, culture, and history at the National Museum complex.",
          image: philippinesMarket,
          duration: "2.5 hrs"
        }
      ],
      experiences: [
        {
          title: "Intramuros Historic Walk",
          description: "Journey through Spanish colonial architecture and centuries-old churches.",
          image: philippinesMarket
        },
        {
          title: "National Museum Discovery",
          description: "Explore Filipino art, culture, and natural history collections.",
          image: philippinesHero
        },
        {
          title: "Rizal Park Heritage",
          description: "Visit the memorial dedicated to Philippines' national hero Dr. José Rizal.",
          image: philippinesRice
        }
      ],
      accommodation: {
        name: "Manila Peninsula Hotel",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Deluxe City View",
          "01 x Executive Suite"
        ]
      },
      transportation: {
        from: "Airport",
        to: "Manila Historic District",
        duration: "45 Minutes",
        distance: "15 km"
      }
    },
    {
      day: 2,
      date: "July 11, 2024",
      title: "Banaue Rice Terraces",
      location: "Banaue, Northern Luzon",
      heroImage: philippinesRice,
      description: "Journey to the spectacular 2,000-year-old Banaue Rice Terraces, often called the 8th Wonder of the World. These ancient terraces carved into mountain slopes by the Ifugao people showcase incredible indigenous engineering and remain a living UNESCO World Heritage site where traditional farming continues today.",
      activities: [
        {
          time: "7:00 AM",
          title: "Flight to Tuguegarao",
          location: "Manila to Banaue",
          description: "Journey to the Cordillera Mountains in Northern Luzon, home to the spectacular 2,000-year-old Banaue Rice Terraces, often called the 8th Wonder of the World.",
          image: philippinesRice,
          duration: "6 hrs"
        },
        {
          time: "3:00 PM",
          title: "Rice Terraces Viewpoint",
          location: "Banaue",
          description: "Marvel at the ancient rice terraces carved into mountain slopes by the Ifugao people, a UNESCO World Heritage site showcasing indigenous engineering.",
          image: philippinesRice,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Ancient Rice Terraces",
          description: "Marvel at 2,000-year-old terraces carved by indigenous Ifugao people.",
          image: philippinesRice
        },
        {
          title: "Ifugao Culture Experience",
          description: "Learn about traditional farming methods and indigenous engineering marvels.",
          image: philippinesMarket
        },
        {
          title: "Mountain Village Tour",
          description: "Explore authentic Cordillera mountain villages and local traditions.",
          image: philippinesHero
        }
      ],
      accommodation: {
        name: "Banaue Hotel & Youth Hostel",
        rating: "3.5 Star Heritage",
        roomTypes: [
          "01 x Mountain View Double",
          "01 x Traditional Room"
        ]
      },
      transportation: {
        from: "Manila",
        to: "Banaue",
        duration: "8 Hours",
        distance: "350 km"
      }
    },
    {
      day: 3,
      date: "July 12, 2024",
      title: "Island Paradise - Palawan",
      location: "El Nido, Palawan",
      heroImage: philippinesHero,
      description: "Fly to one of the world's most beautiful island destinations, known for its dramatic limestone karsts, hidden lagoons, and crystal-clear waters. El Nido offers some of the most pristine beaches and spectacular island hopping experiences in Southeast Asia, with secluded lagoons and world-class snorkeling opportunities.",
      activities: [
        {
          time: "10:00 AM",
          title: "Flight to El Nido",
          location: "Manila to El Nido, Palawan",
          description: "Fly to one of the world's most beautiful island destinations, known for its limestone karsts, hidden lagoons, and crystal-clear waters.",
          image: philippinesHero,
          duration: "2 hrs"
        },
        {
          time: "2:00 PM",
          title: "Island Hopping Tour A",
          location: "El Nido Islands",
          description: "Explore Big Lagoon, Small Lagoon, Secret Lagoon, and Shimizu Island. Snorkel in pristine waters and relax on secluded beaches surrounded by dramatic cliffs.",
          image: philippinesHero,
          duration: "6 hrs"
        }
      ],
      experiences: [
        {
          title: "Hidden Lagoons Discovery",
          description: "Kayak through secret lagoons surrounded by towering limestone cliffs.",
          image: philippinesHero
        },
        {
          title: "Pristine Beach Relaxation",
          description: "Unwind on some of the world's most beautiful secluded beaches.",
          image: philippinesMarket
        },
        {
          title: "Snorkeling Paradise",
          description: "Explore vibrant coral reefs and tropical marine life in crystal-clear waters.",
          image: philippinesRice
        }
      ],
      accommodation: {
        name: "El Nido Resorts Lagen Island",
        rating: "4.5 Star Resort",
        roomTypes: [
          "01 x Beach Villa",
          "01 x Lagoon View Suite"
        ]
      },
      transportation: {
        from: "Manila",
        to: "El Nido",
        duration: "1.5 Hours",
        distance: "580 km"
      }
    },
    {
      day: 4,
      date: "July 13, 2024",
      title: "El Nido Adventures",
      location: "El Nido Islands, Palawan",
      heroImage: philippinesHero,
      description: "Continue your island adventure with more spectacular beaches and hidden gems. Visit some of the most photographed beaches in the world, including secret beaches accessible only by boat, and end your day with one of the world's most spectacular sunsets at Las Cabanas Beach with dramatic limestone cliffs as your backdrop.",
      activities: [
        {
          time: "8:00 AM",
          title: "Island Hopping Tour C",
          location: "El Nido Islands",
          description: "Visit Hidden Beach, Matinloc Shrine, Secret Beach, and Star Beach. Experience some of the most photographed beaches in the world with excellent snorkeling opportunities.",
          image: philippinesHero,
          duration: "7 hrs"
        },
        {
          time: "6:00 PM",
          title: "Sunset at Las Cabanas Beach",
          location: "El Nido",
          description: "Watch one of the world's most spectacular sunsets while sipping cocktails on the beach, with the dramatic limestone cliffs of El Nido as your backdrop.",
          image: philippinesHero,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Secret Beach Access",
          description: "Discover hidden beaches accessible only through small openings in limestone cliffs.",
          image: philippinesHero
        },
        {
          title: "Matinloc Shrine Visit",
          description: "Explore historic shrine perched on dramatic cliffs with panoramic ocean views.",
          image: philippinesMarket
        },
        {
          title: "World-Class Sunset",
          description: "Experience breathtaking sunsets at Las Cabanas Beach with cocktails and limestone backdrop.",
          image: philippinesRice
        }
      ],
      accommodation: {
        name: "El Nido Resorts Miniloc Island",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Water Cottage",
          "01 x Deluxe Beach Villa"
        ]
      },
      transportation: {
        from: "El Nido Town",
        to: "Remote Islands",
        duration: "45 Minutes",
        distance: "25 km"
      }
    }
  ],
  summary: {
    duration: "9 Days",
    activities: "16 Experiences",
    areas: "3 Islands",
    type: "Adventure & Beach"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "8 nights in beachfront resorts and mountain lodges" },
        { text: "Filipino breakfast featuring local specialties" },
        { text: "Ocean view rooms in El Nido" }
      ]
    },
    {
      title: "Island Adventures",
      items: [
        { text: "Multiple island hopping tours with snorkeling gear" },
        { text: "Kayaking through hidden lagoons" },
        { text: "Rice terraces guided trekking" },
        { text: "Underground river exploration" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Domestic flights between islands" },
        { text: "Private boats for island hopping" },
        { text: "Mountain transfers in air-conditioned vehicles" }
      ]
    },
    {
      title: "Cultural Immersion",
      items: [
        { text: "Traditional Ifugao village visits" },
        { text: "Filipino cooking class with local families" },
        { text: "Historical Manila walking tours" }
      ]
    },
    {
      title: "Expert Support",
      items: [
        { text: "Licensed dive masters and boat captains" },
        { text: "Local mountain guides in Banaue" },
        { text: "24/7 travel support throughout" }
      ]
    },
    {
      title: "Special Experiences",
      items: [
        { text: "Sunset cocktails on private beaches" },
        { text: "Traditional Filipino massage treatments" },
        { text: "Local market tours and food tastings" }
      ]
    }
  ],
  faqs: [
    {
      question: "What is the best time to visit the Philippines?",
      answer: "The dry season from November to April offers the best weather for traveling. March to May can be hot, while June to October is the rainy season with potential typhoons."
    },
    {
      question: "Do I need any vaccinations for the Philippines?",
      answer: "Routine vaccinations should be up to date. Consider hepatitis A, typhoid, and Japanese encephalitis. Consult your doctor at least 4-6 weeks before travel for personalized advice."
    },
    {
      question: "What currency is used and can I use credit cards?",
      answer: "The Philippine Peso (PHP) is the local currency. Credit cards are accepted in cities and tourist areas, but cash is preferred in rural areas and small establishments."
    },
    {
      question: "Is the water safe to drink?",
      answer: "We recommend drinking bottled or filtered water. All accommodations provide safe drinking water, and our guides will ensure you have access to clean water throughout the trip."
    },
    {
      question: "What should I know about Filipino culture and customs?",
      answer: "Filipinos are known for their hospitality and friendliness. Dress modestly when visiting religious sites, remove shoes when entering homes, and always greet with a smile. Tipping is appreciated but not mandatory."
    }
  ]
};