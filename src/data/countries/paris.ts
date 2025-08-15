// Import images
import day1Morning from "@/assets/day1-morning.jpg";
import day1Afternoon from "@/assets/day1-afternoon.jpg";
import day2Morning from "@/assets/day2-morning.jpg";
import day2Afternoon from "@/assets/day2-afternoon.jpg";
import day3Morning from "@/assets/day3-morning.jpg";
import day3Afternoon from "@/assets/day3-afternoon.jpg";
import day4Morning from "@/assets/day4-morning.jpg";
import day4Afternoon from "@/assets/day4-afternoon.jpg";
import day5Morning from "@/assets/day5-morning.jpg";
import day5Afternoon from "@/assets/day5-afternoon.jpg";
import day6Morning from "@/assets/day6-morning.jpg";
import day6Afternoon from "@/assets/day6-afternoon.jpg";
import parisHero from "@/assets/paris-hero.jpg";
import parisStreet from "@/assets/paris-street.jpg";
import parisSeine from "@/assets/paris-seine.jpg";

export const parisData = {
  title: "Paris Adventure",
  subtitle: "Discover the City of Light through its iconic landmarks, charming streets, and rich culture",
  location: "Paris, France",
  duration: "6 days",
  heroImage: parisHero,
  aboutDescription: [
    "Experience the magic of Paris through this carefully curated 6-day journey. From iconic landmarks to hidden gems, immerse yourself in the rich history, stunning architecture, and vibrant culture that makes Paris one of the world's most beloved destinations.",
    "Whether you're marveling at the Eiffel Tower, exploring world-class museums, or strolling along the Seine, this itinerary offers the perfect blend of must-see attractions and authentic Parisian experiences."
  ],
  aboutImages: [parisStreet, parisSeine],
  itinerary: [
    {
      day: 1,
      date: "March 15, 2024",
      title: "Arrival & Classic Paris",
      activities: [
        {
          time: "9:00 AM",
          title: "Breakfast at Café de Flore",
          location: "6th Arrondissement, Saint-Germain",
          description: "Start your Parisian adventure with a classic French breakfast at this iconic café. Enjoy fresh croissants, café au lait, and soak in the authentic Parisian atmosphere.",
          image: day1Morning,
          duration: "1.5 hrs"
        },
        {
          time: "2:00 PM",
          title: "Eiffel Tower Visit",
          location: "Champ de Mars, 7th Arrondissement",
          description: "Visit the iconic Eiffel Tower and take the elevator to the top for breathtaking views of Paris. Perfect time for photos and to experience this world-famous landmark.",
          image: day1Afternoon,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 2,
      date: "March 16, 2024",
      title: "Art & Culture",
      activities: [
        {
          time: "10:00 AM",
          title: "Louvre Museum",
          location: "1st Arrondissement",
          description: "Explore the world's largest art museum and see masterpieces like the Mona Lisa and Venus de Milo. Pre-booked tickets ensure skip-the-line access.",
          image: day2Morning,
          duration: "4 hrs"
        },
        {
          time: "3:00 PM",
          title: "Seine River Cruise",
          location: "Various departure points",
          description: "Relax on a scenic cruise along the Seine River, passing by Notre-Dame, the Louvre, and other historic landmarks from a unique water perspective.",
          image: day2Afternoon,
          duration: "1.5 hrs"
        }
      ]
    },
    {
      day: 3,
      date: "March 17, 2024",
      title: "Historic Landmarks",
      activities: [
        {
          time: "9:30 AM",
          title: "Notre-Dame Cathedral",
          location: "4th Arrondissement, Île de la Cité",
          description: "Visit the iconic Gothic cathedral and marvel at its stunning architecture, stained glass windows, and historic significance in the heart of Paris.",
          image: day3Morning,
          duration: "2 hrs"
        },
        {
          time: "2:30 PM",
          title: "Latin Quarter Exploration",
          location: "5th Arrondissement",
          description: "Wander through the charming cobblestone streets, discover independent bookshops, cozy cafés, and soak in the bohemian atmosphere of this historic district.",
          image: day3Afternoon,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 4,
      date: "March 18, 2024",
      title: "Shopping & Royal Heritage",
      activities: [
        {
          time: "10:00 AM",
          title: "Champs-Élysées & Arc de Triomphe",
          location: "8th Arrondissement",
          description: "Stroll down the famous avenue, shop at luxury boutiques, and climb the Arc de Triomphe for panoramic views of the city's twelve radiating avenues.",
          image: day4Morning,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Palace of Versailles",
          location: "Versailles (30 min from Paris)",
          description: "Take a day trip to the opulent palace of French royalty. Explore the magnificent rooms, Hall of Mirrors, and expansive gardens of this UNESCO World Heritage site.",
          image: day4Afternoon,
          duration: "4 hrs"
        }
      ]
    },
    {
      day: 5,
      date: "March 19, 2024",
      title: "Local Markets & Art",
      activities: [
        {
          time: "9:00 AM",
          title: "Marché des Enfants Rouges",
          location: "3rd Arrondissement, Le Marais",
          description: "Experience Paris's oldest covered market, sample fresh produce, artisanal foods, and enjoy authentic local cuisine in this vibrant neighborhood market.",
          image: day5Morning,
          duration: "2.5 hrs"
        },
        {
          time: "2:00 PM",
          title: "Musée d'Orsay",
          location: "7th Arrondissement",
          description: "Discover the world's finest collection of Impressionist masterpieces by Monet, Renoir, and Van Gogh in this beautifully converted railway station.",
          image: day5Afternoon,
          duration: "3 hrs"
        }
      ]
    },
    {
      day: 6,
      date: "March 20, 2024",
      title: "Farewell Paris",
      activities: [
        {
          time: "10:00 AM",
          title: "Trocadéro Gardens",
          location: "16th Arrondissement",
          description: "Capture your final memories with the best view of the Eiffel Tower from these beautifully landscaped gardens, perfect for farewell photos and reflections.",
          image: day6Morning,
          duration: "1.5 hrs"
        },
        {
          time: "6:00 PM",
          title: "Seine Sunset Dinner Cruise",
          location: "Various departure points",
          description: "End your Parisian journey with an elegant dinner cruise along the Seine, enjoying gourmet French cuisine while watching the city lights come alive at sunset.",
          image: day6Afternoon,
          duration: "3 hrs"
        }
      ]
    }
  ],
  summary: {
    duration: "6 Days",
    activities: "12 Experiences",
    areas: "8 Districts",
    type: "Culture & Sightseeing"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "5 nights in boutique hotel near Champs-Élysées" },
        { text: "Daily breakfast included" },
        { text: "Free WiFi and concierge services" }
      ]
    },
    {
      title: "Activities & Tours",
      items: [
        { text: "Skip-the-line tickets to major attractions" },
        { text: "Seine River cruise with dinner" },
        { text: "Guided walking tours in historic districts" },
        { text: "Day trip to Palace of Versailles" }
      ]
    },
    {
      title: "Transportation",
      items: [
        { text: "Airport transfers included" },
        { text: "Metro passes for easy city travel" },
        { text: "Private transport to Versailles" }
      ]
    },
    {
      title: "Dining Experiences",
      items: [
        { text: "Traditional French breakfast daily" },
        { text: "Sunset dinner cruise on the Seine" },
        { text: "Food market tour with tastings" }
      ]
    },
    {
      title: "Support & Guidance",
      items: [
        { text: "24/7 travel support hotline" },
        { text: "Detailed digital itinerary and maps" },
        { text: "Local insider tips and recommendations" }
      ]
    },
    {
      title: "Special Extras",
      items: [
        { text: "Welcome gift package" },
        { text: "Professional photo session at iconic spots" },
        { text: "Access to exclusive experiences" }
      ]
    }
  ]
};