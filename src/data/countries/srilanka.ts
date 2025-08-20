// Import images
import srilankaHero from "@/assets/srilanka-hero.jpg";
import srilankaTea from "@/assets/srilanka-tea.jpg";
import srilankaBeach from "@/assets/srilanka-beach.jpg";

export const srilankaData = {
  id: "srilanka-serenity",
  slug: "sri-lanka",
  title: "Sri Lanka Explorer",
  subtitle: "Discover the Pearl of the Indian Ocean with its ancient heritage and stunning landscapes",
  location: "Sri Lanka",
  duration: "9 days",
  heroImage: srilankaHero,
  aboutDescription: [
    "Journey through Sri Lanka's incredible diversity, from ancient rock fortresses to pristine beaches and lush tea plantations. This island nation offers an extraordinary blend of culture, wildlife, and natural beauty in a compact, easily accessible package.",
    "Experience the warmth of Sri Lankan hospitality while exploring UNESCO World Heritage sites, encountering elephants in their natural habitat, and relaxing on some of the world's most beautiful beaches."
  ],
  aboutImages: [srilankaTea, srilankaBeach],
  itinerary: [
    {
      day: 1,
      date: "June 20, 2024",
      title: "Island Welcome & Urban First Tastes",
      activities: [
        {
          time: "Morning",
          title: "Colombo City Tour",
          location: "Colombo",
          description: "Ayubowan—welcome to Sri Lanka! After arriving at Bandaranaike International Airport, your driver will be ready to greet you and bring you into the heart of Colombo. The 45- minute ride takes you from palms and paddy fields into a lively blend of tradition and modernity.",
          image: srilankaBeach,
          duration: "1 hour"
        },
        {
          time: "Evening",
          title: "Free evening",
          location: "Colombo",
          description: "After check-in and time to freshen up, we’ll come together for a quick orientation and tour briefing. Then you’re free to stretch your legs with a walk along the breezy Galle Face Green or explore the trendy boutiques of the Dutch Hospital precinct. The evening is yours to relax before we reunite in the evening for a warm welcome dinner featuring classic Sri Lankan rice-and-curry spreads and a refreshing toast of King Coconut juice.",
          image: srilankaTea,
          duration: "5 hrs"
        }
      ]
    },
    {
      day: 2,
      date: "June 21, 2024",
      title: "Columbo to Sigiriya",
      activities: [
        {
          time: "7:00 AM",
          title: "Sigiriya Rock Fortress",
          location: "Sigiriya",
          description: "Climb the iconic Lion Rock, a 5th-century rock fortress with ancient frescoes, mirror walls, and breathtaking views from the summit. A UNESCO World Heritage site.",
          image: srilankaHero,
          duration: "4 hrs"
        },
        {
          time: "2:00 PM",
          title: "Dambulla Cave Temple",
          location: "Dambulla",
          description: "Explore the largest cave temple complex in Sri Lanka with over 150 Buddha statues and ancient murals dating back 2,000 years.",
          image: srilankaTea,
          duration: "2 hrs"
        }
      ]
    },
    {
      day: 3,
      date: "June 22, 2024",
      title: "Hill Country & Tea Plantations",
      activities: [
        {
          time: "8:00 AM",
          title: "Scenic Train to Nuwara Eliya",
          location: "Kandy to Nuwara Eliya",
          description: "Experience one of the world's most beautiful train journeys through misty mountains, tea plantations, and waterfalls in Sri Lanka's hill country.",
          image: srilankaTea,
          duration: "5 hrs"
        },
        {
          time: "3:00 PM",
          title: "Tea Plantation Tour",
          location: "Nuwara Eliya",
          description: "Visit a working tea plantation and factory to learn about Ceylon tea production from leaf to cup, with tastings of world-famous Ceylon tea.",
          image: srilankaTea,
          duration: "2.5 hrs"
        }
      ]
    },
    {
      day: 4,
      date: "June 23, 2024",
      title: "Beach Paradise",
      activities: [
        {
          time: "9:00 AM",
          title: "Journey to Mirissa",
          location: "Nuwara Eliya to Mirissa",
          description: "Travel from the cool hills to the tropical coast, arriving at one of Sri Lanka's most beautiful beach destinations known for its golden sand and palm trees.",
          image: srilankaBeach,
          duration: "4 hrs"
        },
        {
          time: "3:00 PM",
          title: "Beach Relaxation",
          location: "Mirissa Beach",
          description: "Unwind on pristine beaches with crystal clear waters, enjoy water sports, or simply relax under swaying palm trees with a fresh coconut.",
          image: srilankaBeach,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 5,
      date: "June 24, 2024",
      title: "Whale Watching & Coastal Adventures",
      activities: [
        {
          time: "6:00 AM",
          title: "Whale Watching Expedition",
          location: "Mirissa Harbor",
          description: "Early morning boat trip to spot blue whales, sperm whales, and dolphins in their natural habitat. Mirissa is one of the best whale watching destinations in the world.",
          image: srilankaBeach,
          duration: "4 hrs"
        },
        {
          time: "2:00 PM",
          title: "Coconut Tree Hill & Local Markets",
          location: "Mirissa",
          description: "Climb the famous Coconut Tree Hill for panoramic ocean views, then explore local markets and taste fresh tropical fruits and street food.",
          image: srilankaBeach,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 6,
      date: "June 25, 2024",
      title: "Galle Fort & Southern Coast",
      activities: [
        {
          time: "9:00 AM",
          title: "Galle Fort Exploration",
          location: "Galle",
          description: "Explore the UNESCO World Heritage Galle Fort, a 16th-century Portuguese and Dutch fortification with colonial architecture, museums, and charming streets.",
          image: srilankaHero,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Stilt Fishermen & Beach Time",
          location: "Koggala",
          description: "Witness the traditional stilt fishing method unique to Sri Lanka, then relax on pristine Koggala Beach with its calm waters and golden sand.",
          image: srilankaBeach,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 7,
      date: "June 26, 2024",
      title: "Yala National Park Safari",
      activities: [
        {
          time: "5:30 AM",
          title: "Yala National Park Safari",
          location: "Yala National Park",
          description: "Early morning safari in Sri Lanka's most famous national park. Spot leopards, elephants, sloth bears, and diverse bird species in their natural habitat.",
          image: srilankaHero,
          duration: "6 hrs"
        },
        {
          time: "4:00 PM",
          title: "Safari Lodge Experience",
          location: "Yala",
          description: "Relax at a luxury safari lodge, enjoy traditional Sri Lankan cuisine, and share safari stories around a campfire under the stars.",
          image: srilankaTea,
          duration: "4 hrs"
        }
      ]
    },
    {
      day: 8,
      date: "June 27, 2024",
      title: "Ayurveda & Cultural Immersion",
      activities: [
        {
          time: "9:00 AM",
          title: "Ayurvedic Spa Experience",
          location: "Bentota",
          description: "Indulge in traditional Ayurvedic treatments and massages using ancient healing techniques and natural herbs for complete rejuvenation.",
          image: srilankaTea,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Traditional Cooking Class",
          location: "Local Village",
          description: "Learn to cook authentic Sri Lankan dishes using fresh spices and traditional methods. Visit a spice garden and enjoy your self-prepared meal.",
          image: srilankaTea,
          duration: "4 hrs"
        }
      ]
    },
    {
      day: 9,
      date: "June 28, 2024",
      title: "Farewell Colombo",
      activities: [
        {
          time: "10:00 AM",
          title: "Colombo Shopping & Souvenirs",
          location: "Colombo",
          description: "Last-minute shopping for Ceylon tea, precious gems, handicrafts, and souvenirs at Pettah Market and modern shopping centers.",
          image: srilankaBeach,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Departure Transfer",
          location: "Colombo to Airport",
          description: "Comfortable transfer to Bandaranaike International Airport with beautiful memories of your Sri Lankan adventure and warm farewells.",
          image: srilankaHero,
          duration: "1 hr"
        }
      ]
    }
  ],
  summary: {
    duration: "9 Days",
    activities: "18 Experiences",
    areas: "6 Regions",
    type: "Culture & Beach"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "8 nights in boutique hotels and eco-lodges" },
        { text: "Traditional Sri Lankan breakfast" },
        { text: "Ocean view rooms at beach hotels" }
      ]
    },
    {
      title: "Cultural Experiences",
      items: [
        { text: "UNESCO World Heritage site entrances" },
        { text: "Traditional Sri Lankan cooking class" },
        { text: "Tea plantation and factory tours" },
        { text: "Ancient temple guided visits" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Private air-conditioned vehicle with driver" },
        { text: "Scenic hill country train journey" },
        { text: "Airport transfers included" }
      ]
    },
    {
      title: "Nature & Wildlife",
      items: [
        { text: "Elephant watching opportunities" },
        { text: "Bird watching in national parks" },
        { text: "Whale watching boat trip (seasonal)" }
      ]
    },
    {
      title: "Local Support",
      items: [
        { text: "Experienced local guides" },
        { text: "24/7 local support team" },
        { text: "Cultural orientation and tips" }
      ]
    },
    {
      title: "Special Touches",
      items: [
        { text: "Welcome ceremony with traditional garlands" },
        { text: "Ayurvedic spa treatments" },
        { text: "Local artisan visits and shopping" }
      ]
    }
  ]
};