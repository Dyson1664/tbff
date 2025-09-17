// Import images
import philippinesHero from "@/assets/philippines-hero.jpg";
import philippinesRice from "@/assets/philippines-rice.jpg";
import philippinesMarket from "@/assets/philippines-market.jpg";

// Import icons for highlights
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine } from "lucide-react";

export const philippinesData = {
  id: "philippines-paradise",
  title: "Philippines Paradise",
  subtitle: "Explore tropical islands, ancient rice terraces, and vibrant Filipino culture",
  location: "Philippines",
  duration: "9 days",
  heroImage: philippinesHero,
  route: ["Manila", "Port Barton", "Daracotan Island", "El Nido"],
  aboutDescription: [
    "Discover the incredible diversity of the Philippines, an archipelago of over 7,000 islands offering pristine beaches, ancient rice terraces, and warm Filipino hospitality. From the bustling streets of Manila to the remote beauty of Palawan and Banaue.",
    "Experience world-class diving, UNESCO World Heritage sites, and some of the most beautiful islands on Earth. This journey combines adventure, relaxation, and cultural immersion in one of Southeast Asia's most stunning destinations."
  ],
  aboutImages: [philippinesRice, philippinesMarket],

  // What's Included Highlights - Philippines specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "8 NIGHTS<br />ACCOMMODATION",
      description: "From beachside resorts to traditional Filipino bamboo bungalows on remote tropical islands!"
    },
    {
      icon: Zap,
      title: "9 DAYS OF<br />ISLAND PARADISE",
      description: "Visit stunning rice terraces, pristine beaches, snorkel in crystal waters & island hopping!",
      link: {
        text: "See all adventures",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT PICKUP<br />& TRANSFERS",
      description: "We'll greet you in Manila and handle all transfers including domestic flights between islands."
    },
    {
      icon: Users,
      title: "LOCAL FILIPINO<br />GUIDES",
      description: "Expert local guides who know hidden gems and provide authentic cultural experiences."
    },
    {
      icon: UtensilsCrossed,
      title: "TROPICAL<br />CUISINE",
      description: "8 Breakfasts, 6 Lunches & 4 Dinners featuring fresh seafood and authentic Filipino dishes!"
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Philippines adventure supports marine conservation and sustainable island tourism."
    }
  ],
  itinerary: [
  {
  day: 1,
  date: "July 10, 2024",
  title: "Welcome to the Philippines",
  location: "Manila, Luzon",
  heroImage: philippinesMarket,
  description:
    "Welcome to Manila! After arriving in the capital, a private van transfers you to our centrally located hotel. Settle in, unwind, or take a stroll around the vibrant neighborhood. At 6:00 PM, meet your guide and travel crew for a relaxed welcome meet-up, with an optional group dinner and drinks to kick things off.",
  meals: "—",
  accommodation: { name: "Lub D Hotel, Manila" },
  highlights: "private airport pickup, welcome meet-up at 6:00 PM, optional group dinner & drinks, neighborhood stroll",
  transportation: {
    from: "Ninoy Aquino International Airport (MNL)",
    to: "Lub D Hotel, Makati (Manila)",
    duration: "45 Minutes",
    distance: "15 km"
  }
},
{
  day: 2,
  date: "July 11, 2024",
  title: "Journey to Port Barton",
  location: "Port Barton, Palawan",
  heroImage: philippinesHero,
  description:
    "We’re off to island life! Catch a morning flight to Puerto Princesa, then drive through scenic countryside. Along the way, stop for a heartfelt local lunch at a family home—a true taste of Filipino hospitality. By afternoon, arrive in the peaceful beach town of Port Barton. Unwind and explore at your own pace.",
  meals: "Lunch",
  accommodation: { name: "Holiday Suites, Port Barton" },
  highlights: "flight to Puerto Princesa, countryside drive, home-cooked lunch with local family, Port Barton arrival & free time"
},
{
  day: 3,
  date: "July 12, 2024",
  title: "Island Hopping in Paradise",
  location: "Port Barton, Palawan",
  heroImage: philippinesHero,
  description:
    "A full day of island hopping in Port Barton’s turquoise waters—snorkel vibrant reefs, relax on palm-fringed beaches, and enjoy island picnics. Expect 3–4 snorkeling stops (weather dependent) and plenty of saltwater joy.",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Holiday Suites, Port Barton" },
  highlights: "3–4 island/snorkel spots (weather dependent), turquoise lagoons, reef snorkeling, island picnic, beach time"
},
{
  day: 4,
  date: "July 13, 2024",
  title: "Free Day: Choose Your Own Adventure",
  location: "Port Barton, Palawan",
  heroImage: philippinesHero,
  description:
    "Today is yours! Lounge on the beach, book a massage, or opt for adventures like scuba diving, a trip to Long Beach, or a hands-on cultural craft experience with locals.",
  meals: "Breakfast",
  accommodation: { name: "Holiday Suites, Port Barton" },
  highlights: "free day, optional massage, optional scuba diving, Long Beach visit, cultural craft experience"
}
,
    {
  day: 5,
  date: "July 14, 2024",
  title: "Escape to Daracotan Island",
  location: "Daracotan Island, Palawan",
  heroImage: philippinesHero,
  description:
    "Head off the grid to Daracotan Island and settle into the rustic-luxe Isla Experience. Spend the afternoon snorkeling, hammocking, and soaking up tropical island magic. If skies are clear, enjoy a bonfire on the beach tonight.",
  meals: "Breakfast & Dinner",
  accommodation: { name: "Isla Experience, Daracotan Island" },
  highlights: "boat transfer to remote island, snorkeling, hammocks, beach time, bonfire under the stars"
},
{
  day: 6,
  date: "July 15, 2024",
  title: "Shipwrecks, Village Life & Ocean Vibes",
  location: "Daracotan Island, Palawan",
  heroImage: philippinesHero,
  description:
    "Begin with sunrise yoga or a peaceful beach walk. Choose your rhythm: snorkel a shipwreck, swim with friendly pigs, explore the local village, or learn to cook Filipino-style.",
  meals: "Breakfast, Lunch & Dinner",
  accommodation: { name: "Isla Experience, Daracotan Island" },
  highlights: "sunrise yoga, shipwreck snorkel, swim with pigs, village trek, Filipino cooking demo"
},
{
  day: 7,
  date: "July 16, 2024",
  title: "From Island Escape to El Nido",
  location: "El Nido, Palawan",
  heroImage: philippinesHero,
  description:
    "Say goodbye to remote island life and transfer to El Nido, famed for its limestone cliffs and beach scene. Check into a stunning coastal resort, then enjoy sunset views and a rooftop cocktail.",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Lime Resort, El Nido" },
  highlights: "island-to-town transfer, coastal resort check-in, rooftop sunset, cocktails"
},
{
  day: 8,
  date: "July 17, 2024",
  title: "El Nido Island Hopping Adventure",
  location: "El Nido Islands, Palawan",
  heroImage: philippinesHero,
  description:
    "Cruise the Bacuit Archipelago’s secret lagoons, hidden coves, and jaw-dropping beaches. A full day of swimming, snorkeling, kayaking, and a delicious Filipino-style island lunch. (3–5 island stops, weather dependent.)",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Lime Resort, El Nido" },
  highlights: "Bacuit lagoons and coves, kayaking, snorkeling, Filipino island lunch"
},
{
  day: 9,
  date: "July 18, 2024",
  title: "Zipline & Beach Club Bliss",
  location: "El Nido, Palawan",
  heroImage: philippinesHero,
  description:
    "Soar the Maremegmeg Zipline with ocean views, then spend the afternoon your way—chill at Angkla Beach Club or head to Nacpan Beach for sun and swim.",
  meals: "Breakfast",
  accommodation: { name: "Lime Resort, El Nido" },
  highlights: "Maremegmeg Zipline ocean views, Angkla Beach Club, Nacpan Beach (₱1000/$18 minimum spend)"
},
{
  day: 10,
  date: "July 19, 2024",
  title: "Until Next Time",
  location: "El Nido, Palawan",
  heroImage: philippinesHero,
  description:
    "Enjoy a final beachfront coffee or one last dip. We’ll assist with transfers back to Puerto Princesa or Manila depending on your onward travel.",
  meals: "Breakfast",
  highlights: "free morning, farewell ocean dip, airport transfers to Puerto Princesa or Manila"
}
]
,
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