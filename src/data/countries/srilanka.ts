// Import images
import srilankaHero from "@/assets/srilanka-hero.jpg";
import srilankaTea from "@/assets/srilanka-tea.jpg";
import srilankaBeach from "@/assets/srilanka-beach.jpg";
import srilankaColombo from "@/assets/srilanka-colombo.png";
import sigiriyaRock from "@/assets/sigiriya-rock.jpg";

// 2x (retina) gallery images — Sri Lanka (4 tiles)
import tile1_800_srilanka from "@/assets/tile1_800_srilanka.webp";
import tile2_800_srilanka from "@/assets/tile2_800_srilanka.webp";
import tile3_800_srilanka from "@/assets/tile3_800_srilanka.webp";
import tile4_800_srilanka from "@/assets/tile4_800_srilanka.webp";

// Import icons for highlights
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine } from "lucide-react";


export const srilankaData = {
  id: "srilanka-serenity",
  slug: "sri-lanka",
  title: "Sri Lanka Explorer",
  subtitle: "Discover the Pearl of the Indian Ocean with its ancient heritage and stunning landscapes",
  location: "Sri Lanka",
  duration: "9 days",
  heroImage: srilankaHero,
  overviewGallery2x:[tile1_800_srilanka, tile2_800_srilanka, tile3_800_srilanka, tile4_800_srilanka],
  route: ["Colombo", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Galle", "Colombo"],
  aboutDescription: [
    "Traveling Sri Lanka is an incredible experience because of its stunning natural beauty, rich cultural heritage, and warm hospitality. The country offers diverse landscapes, from pristine beaches and lush tea plantations to ancient temples and wildlife safaris. You get to enjoy delicious cuisine, vibrant festivals, and friendly locals that make every trip memorable. Whether you're seeking adventure, relaxation, or cultural exploration, Sri Lanka provides a unique and captivating destination."],
  aboutImages: [srilankaTea, srilankaBeach],

  // What's Included Highlights - Sri Lanka specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "8 NIGHTS<br />ACCOMMODATION",
      description: "From heritage hotels to tea plantation bungalows and beach resorts across the island!"
    },
    {
      icon: Zap,
      title: "9 DAYS OF<br />DISCOVERY",
      description: "Ancient rock fortresses, tea country railways, wildlife safaris & pristine beaches!",
      link: {
        text: "See full itinerary",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT TRANSFERS<br />& TRANSPORT",
      description: "Meet & greet at Colombo airport plus private vehicle with driver throughout your journey."
    },
    {
      icon: Users,
      title: "EXPERT LOCAL<br />GUIDES",
      description: "Knowledgeable Sri Lankan guides who share the island's rich history and cultural insights."
    },
    {
      icon: UtensilsCrossed,
      title: "AUTHENTIC<br />CUISINE",
      description: "8 Breakfasts, 1 Lunches & 3 Dinners featuring rice & curry, tea tastings & local specialties!"
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Sri Lankan adventure supports local conservation and sustainable wildlife protection."
    }
  ],
  itinerary: [
  {
    day: 1,
    date: "June 20, 2024",
    title: "Island Welcome & Urban First Tastes",
    location: "Colombo",
    heroImage: srilankaColombo,
    description:
      "Begin your Sri Lankan adventure in the vibrant capital city of Colombo. This bustling metropolis perfectly blends colonial heritage with modern urban energy, offering your first taste of the island's rich culture and warm hospitality. From historic landmarks to trendy districts, Colombo provides the perfect introduction to your Sri Lankan journey.",
    transportation: {
      from: "Bandaranaike Airport",
      to: "Colombo City",
      duration: "45 Minutes",
      distance: "35 km"
    }
  },
  {
    day: 2,
    date: "21 JUN 2024",
    title: "Temples, canals & city vibes",
    location: "Sigiriya",
    heroImage: srilankaHero,
    description:
      "Journey into Sri Lanka's Cultural Triangle, where ancient wonders and natural beauty converge. Sigiriya stands as a testament to centuries of history, spirituality, and artistic mastery. This UNESCO World Heritage site offers unforgettable views across lush countryside, village life, and sacred shrines. Whether you're seeking cultural immersion or scenic beauty, Sigiriya is your gateway to unforgettable experiences."
  },
  {
    day: 3,
    date: "22 JUN 2024",
    title: "Ancient Wonders & Sacred Sites",
    location: "Sigiriya",
    heroImage: sigiriyaRock,
    description:
      "Discover the magnificent Sigiriya Rock Fortress, one of Sri Lanka's most iconic UNESCO World Heritage sites. This ancient citadel rises majestically from the jungle, offering breathtaking views and fascinating history of King Kashyapa's 5th-century palace complex."
  },
  {
    day: 4,
    date: "23 JUN 2024",
    title: "Royal Heritage & Sacred Tooth",
    location: "Kandy",
    heroImage: srilankaTea,
    description:
      "Journey to the hill capital of Kandy, Sri Lanka's cultural heart and last kingdom of the ancient kings. This UNESCO World Heritage city is home to the sacred Temple of the Tooth Relic, beautiful botanical gardens, and stunning lake views surrounded by misty hills."
  },
  {
    day: 5,
    date: "24 JUN 2024",
    title: "Tea Country & Mountain Railways",
    location: "Nuwara Eliya",
    heroImage: srilankaTea,
    description:
      "Experience Sri Lanka's enchanting tea country in Nuwara Eliya, known as 'Little England' for its cool climate and colonial architecture. Journey through emerald tea plantations, visit a working tea factory, and ride the scenic hill country train through misty mountains."
  },
  {
    day: 6,
    date: "25 JUN 2024",
    title: "Scenic Train & Elephant Encounters",
    location: "Ella",
    heroImage: srilankaHero,
    description:
      "Experience one of the world's most beautiful train journeys from Nuwara Eliya to Ella, winding through tea plantations and mountain valleys. In Ella, discover stunning viewpoints, waterfalls, and visit an ethical elephant sanctuary."
  },
  {
    day: 7,
    date: "26 JUN 2024",
    title: "Wildlife Safari & Ancient Cities",
    location: "Yala National Park",
    heroImage: srilankaBeach,
    description:
      "Embark on an exciting wildlife safari in Yala National Park, home to the highest density of leopards in the world. Spot elephants, sloth bears, crocodiles, and over 200 bird species in this incredible biodiversity hotspot."
  },
  {
    day: 8,
    date: "27 JUN 2024",
    title: "Dutch Colonial Heritage & Beaches",
    location: "Galle",
    heroImage: srilankaBeach,
    description:
      "Explore the UNESCO World Heritage site of Galle Fort, a perfectly preserved Dutch colonial city surrounded by massive ramparts. Wander cobblestone streets, visit art galleries, and enjoy stunning ocean views from the fort walls."
  },
  {
    day: 9,
    date: "28 JUN 2024",
    title: "Final Moments & Farewell",
    location: "Colombo",
    heroImage: srilankaColombo,
    description:
      "Return to Colombo for your final day in Sri Lanka. Enjoy last-minute shopping, visit remaining sights, or simply relax before your departure. Take with you unforgettable memories of this incredible island nation."
  }
]
,
  summary: {
    duration: "9 Days",
    activities: "18 Experiences", 
    areas: "4 Regions",
    type: "Culture & Nature"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "8 nights in premium hotels and lodges" },
        { text: "Traditional Sri Lankan breakfast daily" },
        { text: "Tea plantation bungalow experience" }
      ]
    },
    {
      title: "Activities & Tours",
      items: [
        { text: "Sigiriya Rock Fortress entrance" },
        { text: "Temple of the Tooth visit" },
        { text: "Elephant orphanage experience" },
        { text: "Tea factory and plantation tours" }
      ]
    },
    {
      title: "Transportation", 
      items: [
        { text: "Airport transfers throughout" },
        { text: "Private vehicle with driver" },
        { text: "Train journey through hill country" }
      ]
    },
    {
      title: "Culinary Experiences",
      items: [
        { text: "Traditional rice and curry meals" },
        { text: "Tea tasting sessions" },
        { text: "Spice garden visits and cooking demos" }
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
        { text: "Sunrise at Sigiriya Rock" },
        { text: "Traditional cultural performances" },
        { text: "Wildlife safari experiences" }
      ]
    }
  ],
  faqs: [
    {
      question: "What is the best time to visit Sri Lanka?",
      answer: "December to March is ideal for the west and south coasts, while April to September is better for the east coast. Our itinerary is designed to showcase the best of each region during optimal weather."
    },
    {
      question: "Do I need a visa to visit Sri Lanka?",
      answer: "Most visitors need an Electronic Travel Authorization (ETA) obtained online before travel. We'll provide detailed visa information and assistance upon booking."
    },
    {
      question: "What vaccinations do I need for Sri Lanka?",
      answer: "Routine vaccinations should be current. Consider hepatitis A, typhoid, and Japanese encephalitis. Consult your healthcare provider 4-6 weeks before departure for personalized advice."
    },
    {
      question: "Is Sri Lankan food spicy?",
      answer: "Sri Lankan cuisine can be quite spicy, but we'll ensure meals are prepared to accommodate different spice tolerances. You'll experience authentic flavors with options for milder versions."
    },
    {
      question: "What should I pack for the diverse climates?",
      answer: "Pack light, breathable clothing for the coast, warmer layers for the hill country, comfortable hiking shoes, rain jacket, sunscreen, and insect repellent. We'll provide a detailed packing list."
    }
  ]
};
