// Import images
import srilankaHero from "@/assets/srilanka-hero.jpg";
import srilankaTea from "@/assets/srilanka-tea.jpg";
import srilankaBeach from "@/assets/srilanka-beach.jpg";

export const srilankaData = {
  title: "Sri Lanka Explorer",
  subtitle: "Discover the Pearl of the Indian Ocean with its ancient heritage and stunning landscapes",
  location: "Sri Lanka",
  duration: "7 days",
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
      title: "Colombo & Cultural Triangle",
      activities: [
        {
          time: "9:00 AM",
          title: "Colombo City Tour",
          location: "Colombo",
          description: "Explore Sri Lanka's vibrant capital with its colonial architecture, bustling markets, and modern developments. Visit the Red Mosque, Independence Square, and Galle Face Green.",
          image: srilankaBeach,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Journey to Sigiriya",
          location: "Colombo to Sigiriya",
          description: "Travel through scenic countryside to reach the Cultural Triangle, home to ancient kingdoms and archaeological wonders. Check into your hotel near the famous Lion Rock.",
          image: srilankaTea,
          duration: "4 hrs"
        }
      ]
    },
    {
      day: 2,
      date: "June 21, 2024",
      title: "Ancient Kingdoms",
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
    }
  ],
  summary: {
    duration: "7 Days",
    activities: "12 Experiences",
    areas: "4 Regions",
    type: "Culture & Beach"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "6 nights in boutique hotels and eco-lodges" },
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