// Import images
import srilankaHero from "@/assets/srilanka-hero.jpg";
import srilankaTea from "@/assets/srilanka-tea.jpg";
import srilankaBeach from "@/assets/srilanka-beach.jpg";
import srilankaColombo from "@/assets/srilanka-colombo.png";

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
      location: "Colombo",
      heroImage: srilankaColombo,
      description: "Begin your Sri Lankan adventure in the vibrant capital city of Colombo. This bustling metropolis perfectly blends colonial heritage with modern urban energy, offering your first taste of the island's rich culture and warm hospitality. From historic landmarks to trendy districts, Colombo provides the perfect introduction to your Sri Lankan journey.",
      activities: [
        {
          time: "Morning",
          title: "Colombo City Tour",
          location: "Colombo",
          description: "Ayubowan—welcome to Sri Lanka! After arriving at Bandaranaike International Airport, your driver will be ready to greet you and bring you into the heart of Colombo. The 45- minute ride takes you from palms and paddy fields into a lively blend of tradition and modernity.",
          image: srilankaColombo,
          duration: "1 hour"
        },
        {
          time: "Evening",
          title: "Free evening",
          location: "Colombo",
          description: "After check-in and time to freshen up, we'll come together for a quick orientation and tour briefing. Then you're free to stretch your legs with a walk along the breezy Galle Face Green or explore the trendy boutiques of the Dutch Hospital precinct. The evening is yours to relax before we reunite in the evening for a warm welcome dinner featuring classic Sri Lankan rice-and-curry spreads and a refreshing toast of King Coconut juice.",
          image: srilankaTea,
          duration: "5 hrs"
        }
      ],
      experiences: [
        {
          title: "Galle Face Green",
          description: "Stroll along this iconic oceanfront promenade with stunning sunset views over the Indian Ocean.",
          image: srilankaBeach
        },
        {
          title: "Dutch Hospital Shopping",
          description: "Explore trendy boutiques and cafes in this beautifully restored colonial building.",
          image: srilankaColombo
        },
        {
          title: "Sri Lankan Welcome Dinner",
          description: "Savor authentic rice-and-curry spreads with refreshing King Coconut juice.",
          image: srilankaTea
        }
      ],
      accommodation: {
        name: "Colombo City Hotel",
        rating: "4 Star",
        roomTypes: [
          "01 x Deluxe City View",
          "01 x Superior Twin"
        ]
      },
      transportation: {
        from: "Bandaranaike Airport",
        to: "Colombo City",
        duration: "45 Minutes",
        distance: "35 km"
      }
    }
  ],
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