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

export const indiaData = {
  id: "india-journey", 
  slug: "india-journey",
  title: "India Journey",
  subtitle: "Immerse yourself in the colors, flavors, and ancient wisdom of incredible India",
  location: "India",
  duration: "13 days",
  heroImage: indiaHero,
  aboutDescription: [
    "It’s time to start exploring India. This tour is perfect for those first time travellers that have always wanted to explore the wonders of India but don’t want to do it alone. This tour will let you experience the amazing different sites India has to offer such as citadel, bustling local markets to the great monuments including the infamous Taj Mahal, the Pink Palaces of Jaipur and Ranthambhore National Park. We begin the tour in India’s capital New Delhi and finish in Agra with various different locations along the way, throughout the trip guests will get to immerse themselves in India’s rich culture experiencing many Indian traditions and tasting some of the amazing dishes India has to offer. Join us for a once in a lifetime experience that will make you want to travel more"
  ],
  aboutImages: [indiaHero, indiaHero],
  itinerary: [
    {
      day: 1,
      date: "March 15, 2024",
      title: "Airport, Meet & Greet",
      location: "New Delhi, India",
      heroImage: indiaDay01,
      description: "Welcome to India! Begin your incredible journey with a warm traditional greeting at Delhi airport. Experience your first taste of Indian hospitality as you're welcomed to this vibrant country.",
      activities: [
        {
          time: "Upon Arrival",
          title: "Airport Welcome & Transfer",
          location: "Indira Gandhi International Airport",
          description: "Traditional welcome with marigold garlands and warm Indian hospitality. Meet your guide and transfer to your luxury hotel in the heart of Delhi.",
          image: indiaHero,
          duration: "1 hr"
        },
        {
          time: "Evening",
          title: "Welcome Dinner & Orientation",
          location: "Hotel Restaurant",
          description: "Enjoy a traditional Indian welcome dinner while receiving your detailed itinerary briefing and cultural orientation for your journey ahead.",
          image: indiaHero,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Traditional Welcome",
          description: "Experience authentic Indian hospitality with ceremonial welcome rituals.",
          image: indiaHero
        },
        {
          title: "Cultural Orientation",
          description: "Learn about Indian customs, etiquette, and what to expect on your journey.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "The Imperial New Delhi",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Deluxe Room",
          "01 x Imperial Suite"
        ]
      },
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
      title: "Sightseeing Old Delhi and New Delhi",
      location: "Delhi, India",
      heroImage: indiaDay02,
      description: "Discover the fascinating contrasts of India's capital city. Explore the narrow, bustling lanes of Old Delhi and the wide, planned boulevards of New Delhi, experiencing centuries of history in a single day.",
      activities: [
        {
          time: "9:00 AM",
          title: "Red Fort & Chandni Chowk",
          location: "Old Delhi",
          description: "Visit the magnificent Red Fort, a UNESCO World Heritage site, then navigate the chaotic beauty of Chandni Chowk market on a thrilling rickshaw ride.",
          image: indiaHero,
          duration: "4 hrs"
        },
        {
          time: "2:00 PM",
          title: "New Delhi Monuments",
          location: "New Delhi",
          description: "Explore India Gate, Rajpath, and Humayun's Tomb, witnessing the grandeur of Mughal and colonial architecture that defines modern Delhi.",
          image: indiaHero,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Old Delhi Chaos",
          description: "Experience the vibrant energy of Old Delhi's markets and street food culture.",
          image: indiaHero
        },
        {
          title: "Colonial Grandeur",
          description: "Marvel at the planned architecture and wide boulevards of New Delhi.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "The Imperial New Delhi",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Deluxe Room",
          "01 x Imperial Suite"
        ]
      }
    },
    {
      day: 3,
      date: "March 17, 2024",
      title: "Arrival in Jodhpur",
      location: "Jodhpur, Rajasthan",
      heroImage: indiaDay03,
      description: "Journey to the magnificent Blue City of Jodhpur, where azure-painted houses cascade below the imposing Mehrangarh Fort. Experience the royal heritage of the Marwar region.",
      activities: [
        {
          time: "Morning",
          title: "Flight to Jodhpur",
          location: "Delhi to Jodhpur",
          description: "Take a comfortable domestic flight to Jodhpur, enjoying aerial views of the Rajasthani landscape as you approach the Blue City.",
          image: indiaHero,
          duration: "1.5 hrs"
        },
        {
          time: "Afternoon",
          title: "Blue City Walking Tour",
          location: "Jodhpur Old City",
          description: "Explore the blue-painted houses of the old city, visit local markets, and experience the unique culture of this desert city.",
          image: indiaHero,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Blue City Magic",
          description: "Wander through the iconic blue-painted streets of Jodhpur's old city.",
          image: indiaHero
        },
        {
          title: "Desert Culture",
          description: "Experience the unique Marwari culture and desert lifestyle of Rajasthan.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Umaid Bhawan Palace",
        rating: "5 Star Palace Hotel",
        roomTypes: [
          "01 x Palace Room",
          "01 x Maharaja Suite"
        ]
      },
      transportation: {
        from: "Delhi",
        to: "Jodhpur",
        duration: "1.5 Hours (Flight)",
        distance: "550 km"
      }
    },
    {
      day: 4,
      date: "March 18, 2024",
      title: "Visit Mehrangarh Fort and Jaswant Thada",
      location: "Jodhpur, Rajasthan",
      heroImage: indiaDay04,
      description: "Explore two of Jodhpur's most magnificent monuments - the imposing Mehrangarh Fort and the elegant marble cenotaph of Jaswant Thada, showcasing the architectural brilliance of Rajput rulers.",
      activities: [
        {
          time: "9:00 AM",
          title: "Mehrangarh Fort Exploration",
          location: "Jodhpur",
          description: "Explore one of India's largest forts, with its intricate palaces, courtyards, and museum showcasing royal artifacts, weapons, and paintings.",
          image: indiaHero,
          duration: "4 hrs"
        },
        {
          time: "2:00 PM",
          title: "Jaswant Thada Memorial",
          location: "Jodhpur",
          description: "Visit the beautiful white marble memorial built in honor of Maharaja Jaswant Singh II, known as the 'Taj Mahal of Marwar'.",
          image: indiaHero,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Fort Architecture",
          description: "Marvel at the massive walls and intricate palaces of Mehrangarh Fort.",
          image: indiaHero
        },
        {
          title: "Royal Heritage",
          description: "Learn about the rich history of the Rathore dynasty through artifacts and stories.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Umaid Bhawan Palace",
        rating: "5 Star Palace Hotel",
        roomTypes: [
          "01 x Palace Room",
          "01 x Maharaja Suite"
        ]
      }
    },
    {
      day: 5,
      date: "March 19, 2024",
      title: "Travel to Udaipur",
      location: "Udaipur, Rajasthan",
      heroImage: indiaDay05,
      description: "Journey to Udaipur, the City of Lakes, renowned for its romantic palaces, serene lakes, and stunning architecture. Experience one of India's most picturesque destinations.",
      activities: [
        {
          time: "Morning",
          title: "Scenic Drive to Udaipur",
          location: "Jodhpur to Udaipur",
          description: "Enjoy a scenic drive through the Aravalli Hills, stopping at traditional villages and experiencing rural Rajasthan along the way.",
          image: indiaHero,
          duration: "5 hrs"
        },
        {
          time: "Evening",
          title: "Lake Pichola Sunset Cruise",
          location: "Udaipur",
          description: "Take a magical boat cruise on Lake Pichola as the sun sets behind the City Palace, creating a truly romantic and unforgettable experience.",
          image: indiaHero,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Rural Rajasthan",
          description: "Experience authentic village life during your scenic journey to Udaipur.",
          image: indiaHero
        },
        {
          title: "Lake City Magic",
          description: "Discover why Udaipur is considered one of the world's most romantic cities.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Taj Lake Palace",
        rating: "5 Star Heritage Hotel",
        roomTypes: [
          "01 x Lake Room",
          "01 x Royal Suite"
        ]
      },
      transportation: {
        from: "Jodhpur",
        to: "Udaipur",
        duration: "5 Hours",
        distance: "250 km"
      }
    },
    {
      day: 6,
      date: "March 20, 2024",
      title: "Time to Explore Udaipur",
      location: "Udaipur, Rajasthan",
      heroImage: indiaDay06,
      description: "Immerse yourself in the romantic splendor of Udaipur. Explore magnificent palaces, wander through colorful bazaars, and experience the cultural richness of this lake city.",
      activities: [
        {
          time: "9:00 AM",
          title: "City Palace Complex",
          location: "Udaipur",
          description: "Explore the magnificent City Palace, a fusion of Rajasthani and Mughal architecture, with its courtyards, pavilions, terraces, and stunning lake views.",
          image: indiaHero,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Saheliyon-ki-Bari & Local Markets",
          location: "Udaipur",
          description: "Visit the beautiful Garden of Maidens and explore local markets famous for miniature paintings, textiles, and handicrafts.",
          image: indiaHero,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Palace Architecture",
          description: "Marvel at the intricate architecture and artistic details of Udaipur's palaces.",
          image: indiaHero
        },
        {
          title: "Cultural Shopping",
          description: "Discover traditional Rajasthani arts and crafts in local bazaars.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Taj Lake Palace",
        rating: "5 Star Heritage Hotel",
        roomTypes: [
          "01 x Lake Room",
          "01 x Royal Suite"
        ]
      }
    },
    {
      day: 7,
      date: "March 21, 2024",
      title: "Sawai Madhopur",
      location: "Sawai Madhopur, Rajasthan",
      heroImage: indiaDay07,
      description: "Travel to Sawai Madhopur, gateway to the famous Ranthambore National Park. Prepare for an exciting wildlife adventure in one of India's premier tiger reserves.",
      activities: [
        {
          time: "Morning",
          title: "Journey to Sawai Madhopur",
          location: "Udaipur to Sawai Madhopur",
          description: "Travel through scenic Rajasthani countryside to reach Sawai Madhopur, stopping at local villages and experiencing rural life.",
          image: indiaHero,
          duration: "4 hrs"
        },
        {
          time: "Evening",
          title: "Ranthambore Fort Visit",
          location: "Ranthambore",
          description: "Explore the historic Ranthambore Fort, a UNESCO World Heritage site, and learn about the area's rich history and wildlife conservation efforts.",
          image: indiaHero,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Wildlife Preparation",
          description: "Learn about tiger behavior and wildlife photography tips from expert naturalists.",
          image: indiaHero
        },
        {
          title: "Historic Fort",
          description: "Explore ancient ruins within the national park boundaries.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Oberoi Vanyavilas",
        rating: "5 Star Wildlife Resort",
        roomTypes: [
          "01 x Luxury Tent",
          "01 x Royal Tent"
        ]
      },
      transportation: {
        from: "Udaipur",
        to: "Sawai Madhopur",
        duration: "4 Hours",
        distance: "280 km"
      }
    },
    {
      day: 8,
      date: "March 22, 2024",
      title: "Safari in Ranthambore National Park",
      location: "Ranthambore National Park",
      heroImage: indiaDay08,
      description: "Experience the thrill of wildlife safari in one of India's most famous tiger reserves. Search for the majestic Bengal tiger and other wildlife in their natural habitat.",
      activities: [
        {
          time: "6:00 AM",
          title: "Morning Tiger Safari",
          location: "Ranthambore National Park",
          description: "Embark on an exciting morning safari in search of the elusive Bengal tiger, leopards, sloth bears, and diverse bird species in their natural habitat.",
          image: indiaHero,
          duration: "4 hrs"
        },
        {
          time: "3:00 PM",
          title: "Evening Wildlife Safari",
          location: "Ranthambore National Park",
          description: "Continue your wildlife adventure with an evening safari, when animals are most active, offering the best chances for tiger sightings.",
          image: indiaHero,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Tiger Tracking",
          description: "Learn to identify tiger signs and behavior with expert naturalist guides.",
          image: indiaHero
        },
        {
          title: "Wildlife Photography",
          description: "Capture stunning photographs of India's diverse wildlife in their natural environment.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Oberoi Vanyavilas",
        rating: "5 Star Wildlife Resort",
        roomTypes: [
          "01 x Luxury Tent",
          "01 x Royal Tent"
        ]
      }
    },
    {
      day: 9,
      date: "March 23, 2024",
      title: "Arrival in Jaipur",
      location: "Jaipur, Rajasthan",
      heroImage: indiaDay09,
      description: "Travel to Jaipur, the vibrant Pink City and capital of Rajasthan. Experience the royal heritage, colorful bazaars, and magnificent architecture of this historic city.",
      activities: [
        {
          time: "Morning",
          title: "Journey to Jaipur",
          location: "Sawai Madhopur to Jaipur",
          description: "Take a comfortable journey to Jaipur, with stops at local artisan workshops to see traditional crafts being made.",
          image: indiaHero,
          duration: "3 hrs"
        },
        {
          time: "Afternoon",
          title: "Pink City Introduction",
          location: "Jaipur",
          description: "Take an orientation tour of the Pink City, visiting local markets and getting acquainted with this vibrant royal capital.",
          image: indiaHero,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Artisan Workshops",
          description: "Visit traditional craft workshops and see skilled artisans at work.",
          image: indiaHero
        },
        {
          title: "Pink City Charm",
          description: "Discover why Jaipur is called the Pink City and learn about its royal heritage.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Taj Rambagh Palace",
        rating: "5 Star Palace Hotel",
        roomTypes: [
          "01 x Palace Room",
          "01 x Maharaja Suite"
        ]
      },
      transportation: {
        from: "Sawai Madhopur",
        to: "Jaipur",
        duration: "3 Hours",
        distance: "160 km"
      }
    },
    {
      day: 10,
      date: "March 24, 2024",
      title: "Let's explore Jaipur",
      location: "Jaipur, Rajasthan",
      heroImage: indiaDay10,
      description: "Dive deep into Jaipur's royal heritage. Explore magnificent forts, palaces, and markets that showcase the grandeur of Rajput architecture and culture.",
      activities: [
        {
          time: "8:00 AM",
          title: "Amber Fort & Palace",
          location: "Amber, Jaipur",
          description: "Explore the stunning hilltop Amber Fort with its mirror work, courtyards, and panoramic views. Enjoy an elephant ride or jeep ride to the fort entrance.",
          image: indiaHero,
          duration: "4 hrs"
        },
        {
          time: "2:00 PM",
          title: "City Palace & Hawa Mahal",
          location: "Jaipur",
          description: "Visit the magnificent City Palace complex and the iconic Hawa Mahal (Palace of Winds), symbols of Jaipur's royal heritage.",
          image: indiaHero,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Royal Architecture",
          description: "Marvel at the intricate architecture and artistic details of Rajput palaces.",
          image: indiaHero
        },
        {
          title: "Cultural Immersion",
          description: "Experience traditional Rajasthani culture through music, dance, and local interactions.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Taj Rambagh Palace",
        rating: "5 Star Palace Hotel",
        roomTypes: [
          "01 x Palace Room",
          "01 x Maharaja Suite"
        ]
      }
    },
    {
      day: 11,
      date: "March 25, 2024",
      title: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      heroImage: indiaDay11,
      description: "Experience the crown jewel of India - the magnificent Taj Mahal. Witness this eternal symbol of love in the soft morning light, creating memories that will last a lifetime.",
      activities: [
        {
          time: "Early Morning",
          title: "Journey to Agra",
          location: "Jaipur to Agra",
          description: "Travel to Agra via the scenic route, with a stop at Fatehpur Sikri, the abandoned Mughal capital city.",
          image: indiaHero,
          duration: "5 hrs"
        },
        {
          time: "Afternoon",
          title: "Taj Mahal Visit",
          location: "Agra",
          description: "Visit the breathtaking Taj Mahal, one of the Seven Wonders of the World, and learn about this eternal monument to love built by Emperor Shah Jahan.",
          image: indiaHero,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Wonder of the World",
          description: "Experience the architectural perfection and romantic story of the Taj Mahal.",
          image: indiaHero
        },
        {
          title: "Mughal Heritage",
          description: "Explore the rich history and architectural legacy of the Mughal Empire.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "The Oberoi Amarvilas",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Premier Room with Taj View",
          "01 x Kohinoor Suite"
        ]
      },
      transportation: {
        from: "Jaipur",
        to: "Agra",
        duration: "5 Hours",
        distance: "240 km"
      }
    },
    {
      day: 12,
      date: "March 26, 2024",
      title: "Agra back to Delhi",
      location: "Delhi, India",
      heroImage: indiaDay12,
      description: "Complete your incredible Indian journey by returning to Delhi. Enjoy last-minute shopping and reminisce about your amazing adventures across incredible India.",
      activities: [
        {
          time: "Morning",
          title: "Agra Fort & Local Crafts",
          location: "Agra",
          description: "Visit the magnificent Agra Fort and explore local marble inlay workshops to see artisans creating beautiful Taj Mahal-style crafts.",
          image: indiaHero,
          duration: "3 hrs"
        },
        {
          time: "Afternoon",
          title: "Return to Delhi",
          location: "Agra to Delhi",
          description: "Take the express highway back to Delhi, with time for last-minute shopping at Delhi's famous markets for souvenirs and gifts.",
          image: indiaHero,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Artisan Crafts",
          description: "Learn about traditional marble inlay work and purchase authentic crafts.",
          image: indiaHero
        },
        {
          title: "Souvenir Shopping",
          description: "Find perfect mementos of your incredible Indian journey.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "The Imperial New Delhi",
        rating: "5 Star Luxury",
        roomTypes: [
          "01 x Deluxe Room",
          "01 x Imperial Suite"
        ]
      },
      transportation: {
        from: "Agra",
        to: "Delhi",
        duration: "4 Hours",
        distance: "230 km"
      }
    },
    {
      day: 13,
      date: "March 27, 2024",
      title: "Checkout",
      location: "Delhi, India",
      heroImage: indiaDay13,
      description: "Bid farewell to incredible India. Complete your checkout and departure with warm memories of an unforgettable journey through the land of colors, culture, and heritage.",
      activities: [
        {
          time: "Morning",
          title: "Hotel Checkout & Final Shopping",
          location: "Delhi",
          description: "Complete hotel checkout and enjoy final shopping opportunities at Delhi's famous markets for any last-minute purchases.",
          image: indiaHero,
          duration: "3 hrs"
        },
        {
          time: "Afternoon",
          title: "Departure Transfer",
          location: "Delhi to Airport",
          description: "Transfer to Indira Gandhi International Airport for your departure flight, taking with you unforgettable memories of incredible India.",
          image: indiaHero,
          duration: "1 hr"
        }
      ],
      experiences: [
        {
          title: "Final Memories",
          description: "Reflect on your incredible journey through India's diverse landscapes and cultures.",
          image: indiaHero
        },
        {
          title: "Farewell India",
          description: "Depart with a heart full of memories and a deeper appreciation for Indian culture.",
          image: indiaHero
        }
      ],
      accommodation: {
        name: "Day Use - The Imperial New Delhi",
        rating: "5 Star Luxury",
        roomTypes: [
          "Day use facilities until departure"
        ]
      },
      transportation: {
        from: "Hotel",
        to: "Indira Gandhi Airport",
        duration: "45 Minutes",
        distance: "25 km"
      }
    }
  ],
  summary: {
    duration: "13 days",
    activities: "Cultural immersion", 
    areas: "Golden Triangle & more",
    type: "Heritage & Culture"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "12 nights in luxury heritage hotels" },
        { text: "Daily breakfast and select meals" },
        { text: "24/7 concierge service" },
        { text: "Traditional welcome ceremonies" }
      ]
    },
    {
      title: "Transportation", 
      items: [
        { text: "Private air-conditioned vehicles" },
        { text: "Professional English-speaking guides" },
        { text: "Airport transfers and assistance" },
        { text: "All toll taxes and parking fees" }
      ]
    },
    {
      title: "Experiences",
      items: [
        { text: "Taj Mahal sunrise visit" },
        { text: "Private heritage walks and cultural tours" },
        { text: "Traditional cooking demonstrations" },
        { text: "Spiritual ceremonies and blessings" },
        { text: "Local artisan workshops" }
      ]
    }
  ],
  faqs: [
    {
      question: "What's the best time to visit India?",
      answer: "The best time to visit India is during the cooler months from October to March, when temperatures are more comfortable and rainfall is minimal. This is ideal for exploring outdoor monuments and cities."
    },
    {
      question: "Do I need a visa for India?",
      answer: "Yes, most travelers need a visa to enter India. An e-Tourist visa can be obtained online in advance for stays up to 60 days. We'll provide detailed visa assistance as part of your booking."
    },
    {
      question: "What should I pack for India?",
      answer: "Pack comfortable, modest clothing covering shoulders and knees for temple visits. Include sunscreen, hat, comfortable walking shoes, and any personal medications. Light, breathable fabrics work best."
    },
    {
      question: "Is Indian food very spicy?",
      answer: "Indian cuisine varies greatly by region. While some dishes are spicy, there are many mild options available. Our guides will help you navigate menus and find dishes suited to your taste preferences."
    },
    {
      question: "What about health and safety precautions?",
      answer: "We recommend drinking bottled water, eating at recommended restaurants, and following basic hygiene practices. Travel insurance is highly recommended. Our guides provide ongoing safety advice throughout the journey."
    }
  ]
};
