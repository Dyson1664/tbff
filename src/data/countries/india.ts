// Import images
import indiaHero from "@/assets/india-hero.jpg";

export const indiaData = {
  id: "india-journey", 
  slug: "india-journey",
  title: "India Journey",
  subtitle: "Immerse yourself in the colors, flavors, and ancient wisdom of incredible India",
  location: "India",
  duration: "12 days",
  heroImage: indiaHero,
  aboutDescription: [
    "Embark on an extraordinary journey through India, where ancient traditions meet vibrant modernity. From the iconic Taj Mahal to bustling spice markets, colorful festivals, and spiritual temples, this 12-day adventure showcases the incredible diversity of the subcontinent.",
    "Experience the warmth of Indian hospitality, savor authentic regional cuisines, and witness the architectural marvels that tell stories of emperors and saints. From the Golden Triangle to spiritual Varanasi, discover why India captivates every traveler's heart."
  ],
  aboutImages: [indiaHero, indiaHero],
  itinerary: [
    {
      day: 1,
      date: "March 15, 2024",
      title: "Delhi Arrival & Old City Discovery",
      location: "New Delhi, India",
      heroImage: indiaHero,
      description: "Begin your Indian adventure in the bustling capital, exploring the contrast between Old and New Delhi. From historic Red Fort to vibrant Chandni Chowk market, immerse yourself in the energy and chaos that defines this incredible city.",
      activities: [
        {
          time: "10:00 AM", 
          title: "Red Fort & Mughal Heritage",
          location: "Old Delhi",
          description: "Explore the magnificent Red Fort, a UNESCO World Heritage site and symbol of Mughal power, learning about India's rich imperial history.",
          image: indiaHero,
          duration: "2.5 hrs"
        },
        {
          time: "2:00 PM",
          title: "Chandni Chowk Market Adventure", 
          location: "Old Delhi",
          description: "Navigate the bustling lanes of Asia's largest wholesale market, sampling street food and experiencing authentic Delhi life.",
          image: indiaHero,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Mughal Architecture",
          description: "Marvel at the stunning Red Fort and its intricate Mughal architectural details.",
          image: indiaHero
        },
        {
          title: "Street Food Culture", 
          description: "Taste authentic Indian street food in the historic Chandni Chowk market.",
          image: indiaHero
        },
        {
          title: "Rickshaw Adventure",
          description: "Navigate Old Delhi's narrow lanes on a traditional cycle rickshaw.",
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
        to: "Central Delhi",
        duration: "45 Minutes",
        distance: "25 km"
      }
    },
    {
      day: 2,
      date: "March 16, 2024", 
      title: "New Delhi & India Gate",
      location: "New Delhi",
      heroImage: indiaHero,
      description: "Discover the planned city of New Delhi with its wide boulevards, government buildings, and colonial architecture. Visit India Gate and explore the modern face of India's capital.",
      activities: [
        {
          time: "9:00 AM",
          title: "India Gate & Rajpath",
          location: "Central Delhi",
          description: "Visit the iconic India Gate war memorial and stroll down Rajpath, witnessing the grandeur of New Delhi's colonial architecture.",
          image: indiaHero,
          duration: "2 hrs"
        },
        {
          time: "2:00 PM", 
          title: "Humayun's Tomb",
          location: "South Delhi",
          description: "Explore this UNESCO World Heritage site, considered the precursor to the Taj Mahal with its stunning Mughal garden tomb architecture.",
          image: indiaHero,
          duration: "2.5 hrs"
        }
      ],
      experiences: [
        {
          title: "Colonial Architecture",
          description: "Experience the grandeur of British colonial architecture along Rajpath.",
          image: indiaHero
        },
        {
          title: "Mughal Gardens", 
          description: "Wander through the beautiful char bagh gardens at Humayun's Tomb.",
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
      title: "Journey to Agra",
      location: "Agra, India", 
      heroImage: indiaHero,
      description: "Travel to Agra, home of the world-famous Taj Mahal. Experience your first glimpse of this marble masterpiece and explore the rich Mughal heritage of this historic city.",
      activities: [
        {
          time: "6:00 AM",
          title: "Taj Mahal Sunrise",
          location: "Agra",
          description: "Witness the breathtaking beauty of the Taj Mahal at sunrise, when the marble monument glows in the soft morning light - truly a once-in-a-lifetime experience.",
          image: indiaHero,
          duration: "3 hrs"
        },
        {
          time: "2:00 PM",
          title: "Agra Fort Exploration",
          location: "Agra", 
          description: "Explore the magnificent Agra Fort, a UNESCO World Heritage site showcasing the power and grandeur of the Mughal Empire.",
          image: indiaHero,
          duration: "2.5 hrs"
        }
      ],
      experiences: [
        {
          title: "Taj Mahal Wonder",
          description: "Experience one of the Seven Wonders of the World at its most magical hour.",
          image: indiaHero
        },
        {
          title: "Mughal Architecture",
          description: "Marvel at the intricate inlay work and architectural perfection of Mughal monuments.",
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
        from: "New Delhi",
        to: "Agra",
        duration: "3.5 Hours",
        distance: "210 km"
      }
    }
  ],
  summary: {
    duration: "12 days",
    activities: "Cultural immersion", 
    areas: "Golden Triangle & more",
    type: "Heritage & Culture"
  },
  included: [
    {
      title: "Accommodation",
      items: [
        { text: "11 nights in luxury heritage hotels" },
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