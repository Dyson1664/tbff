// Import images
import thailandHero from "@/assets/thailand-hero.jpg";
import thailandMarket from "@/assets/thailand-market.jpg";
import thailandTemple from "@/assets/thailand-temple.jpg";
import thailandPalace from "@/assets/thailand-palace.jpg";
import thailandBoat from "@/assets/thailand-boat.jpg";

export const thailandData = {
  id: "thailand-discovery",
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
  itinerary: [
    {
      day: 1,
      date: "April 10, 2024",
      title: "Bangkok Arrival & Grand Palace",
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
      ]
    },
    {
      day: 2,
      date: "April 11, 2024",
      title: "Floating Markets & Local Culture",
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
      ]
    },
    {
      day: 3,
      date: "April 12, 2024",
      title: "Bangkok to Chiang Mai",
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
      ]
    },
    {
      day: 4,
      date: "April 13, 2024",
      title: "Elephant Sanctuary & Mountain Temples",
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
      ]
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
  ]
};