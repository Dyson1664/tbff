// Import images
import srilankaHero from "@/assets/srilanka-hero.jpg";
import srilankaTea from "@/assets/srilanka-tea.jpg";
import srilankaBeach from "@/assets/srilanka-beach.jpg";
import srilankaColombo from "@/assets/srilanka-colombo.png";
import sigiriyaRock from "@/assets/sigiriya-rock.jpg";


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
    },
    {
      day: 2,
      date: "21 JUN 2024",
      title: "Temples, canals & city vibes",
      location: "Sigiriya",
      heroImage: srilankaHero,
      description: "Journey into Sri Lanka's Cultural Triangle, where ancient wonders and natural beauty converge. Sigiriya stands as a testament to centuries of history, spirituality, and artistic mastery. This UNESCO World Heritage site offers unforgettable views across lush countryside, village life, and sacred shrines. Whether you're seeking cultural immersion or scenic beauty, Sigiriya is your gateway to unforgettable experiences.",
      activities: [
        {
          time: "Morning",
          title: "Colombo City Tour",
          location: "Colombo",
          description: "After an early breakfast, we start the day with a panoramic city drive, cruising past the serene Independence Square, the colonial Colombo Town Hall, and the historic Gangaramaya Temple. We'll grab a quick snack at a local food market before heading north into Sri Lanka's Cultural Triangle.",
          image: srilankaHero,
          duration: "4 hrs"
        },
        {
          time: "Evening",
          title: "Arrive in Sigiriya & Culture Show",
          location: "Colombo ➜ Sigiriya",
          description: "The journey takes about 3.5 hours, winding past roadside shrines, village spice stalls, and open countryside. Upon arrival in Sigiriya, settle in and get ready for a 6:00 PM traditional Sri Lankan cultural show, where you'll experience the vibrant dances, music and storytelling that reflect the island rich heritage. After the performance, unwind with a sunset pool dip or mocktail, followed by a cozy group dinner under the stars.",
          image: srilankaTea,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Independence Square",
          description: "Visit this iconic monument celebrating Sri Lanka's independence and colonial history.",
          image: srilankaColombo
        },
        {
          title: "Cultural Dance Show",
          description: "Experience traditional Sri Lankan dances, music and storytelling under the stars.",
          image: srilankaHero
        },
        {
          title: "Village Life Tour",
          description: "Discover authentic rural life while traveling through countryside and local markets.",
          image: srilankaTea
        }
      ],
      accommodation: {
        name: "Sigiriya Rock Lodge",
        rating: "4.5 Star",
        roomTypes: [
          "01 x Garden View Double",
          "01 x Premium Triple"
        ]
      },
      transportation: {
        from: "Colombo",
        to: "Sigiriya",
        duration: "3.5 Hours",
        distance: "165 km"
      }
    },
    {
      day: 3,
      date: "22 JUN 2024",
      title: "Ancient Wonders & Sacred Sites",
      location: "Sigiriya",
      heroImage: sigiriyaRock,
      description: "Discover the magnificent Sigiriya Rock Fortress, one of Sri Lanka's most iconic UNESCO World Heritage sites. This ancient citadel rises majestically from the jungle, offering breathtaking views and fascinating history of King Kashyapa's 5th-century palace complex.",
      activities: [
        {
          time: "Early Morning",
          title: "Sigiriya Rock Fortress Climb",
          location: "Sigiriya",
          description: "Begin your day before sunrise with the iconic climb up Sigiriya Rock Fortress. Ascend the ancient stone steps past the famous frescoes of the 'Heavenly Maidens' and through the Lion's Gate to reach the summit palace ruins. The panoramic views of the surrounding countryside are absolutely breathtaking.",
          image: srilankaHero,
          duration: "3 hrs"
        },
        {
          time: "Afternoon",
          title: "Dambulla Cave Temples",
          location: "Dambulla",
          description: "Visit the spectacular Dambulla Cave Temple complex, featuring five caves filled with over 150 Buddha statues and intricate murals dating back over 2,000 years. This sacred pilgrimage site offers insight into Sri Lanka's rich Buddhist heritage.",
          image: srilankaTea,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Lion's Gate Passage",
          description: "Walk through the iconic Lion's Gate with its massive stone paws guarding the final ascent.",
          image: srilankaHero
        },
        {
          title: "Ancient Frescoes",
          description: "Marvel at the 1,500-year-old paintings of celestial maidens adorning the rock face.",
          image: srilankaTea
        },
        {
          title: "Cave Temple Meditation",
          description: "Experience moments of tranquility in the sacred cave chambers with golden Buddha statues.",
          image: srilankaColombo
        }
      ],
      accommodation: {
        name: "Sigiriya Rock Lodge",
        rating: "4.5 Star",
        roomTypes: [
          "01 x Garden View Double",
          "01 x Premium Triple"
        ]
      },
      transportation: {
        from: "Sigiriya",
        to: "Dambulla",
        duration: "45 Minutes",
        distance: "25 km"
      }
    },
    {
      day: 4,
      date: "23 JUN 2024", 
      title: "Royal Heritage & Sacred Tooth",
      location: "Kandy",
      heroImage: srilankaTea,
      description: "Journey to the hill capital of Kandy, Sri Lanka's cultural heart and last kingdom of the ancient kings. This UNESCO World Heritage city is home to the sacred Temple of the Tooth Relic, beautiful botanical gardens, and stunning lake views surrounded by misty hills.",
      activities: [
        {
          time: "Morning",
          title: "Journey to Kandy",
          location: "Sigiriya ➜ Kandy",
          description: "Travel through Sri Lanka's stunning hill country as we make our way to Kandy. Stop at a traditional spice garden to learn about Ceylon's famous spices including cinnamon, cardamom, and vanilla. Enjoy a fragrant spice-infused lunch before continuing to Kandy.",
          image: srilankaTea,
          duration: "4 hrs"
        },
        {
          time: "Evening",
          title: "Temple of the Tooth Relic",
          location: "Kandy",
          description: "Visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa), housing the most precious Buddhist relic in Sri Lanka. Experience the evening puja ceremony with traditional drumming and chanting, followed by a peaceful walk around Kandy Lake.",
          image: srilankaHero,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Spice Garden Tour",
          description: "Learn about Ceylon's famous spices and their traditional medicinal uses.",
          image: srilankaTea
        },
        {
          title: "Sacred Tooth Relic",
          description: "Witness the evening puja ceremony at Sri Lanka's most sacred Buddhist temple.",
          image: srilankaHero
        },
        {
          title: "Kandy Lake Stroll",
          description: "Enjoy a peaceful evening walk around the scenic Kandy Lake with mountain views.",
          image: srilankaBeach
        }
      ],
      accommodation: {
        name: "Kandy Heritage Hotel",
        rating: "4 Star",
        roomTypes: [
          "01 x Hill View Double",
          "01 x Superior Twin"
        ]
      },
      transportation: {
        from: "Sigiriya",
        to: "Kandy",
        duration: "3 Hours",
        distance: "95 km"
      }
    },
    {
      day: 5,
      date: "24 JUN 2024",
      title: "Tea Country & Mountain Railways",
      location: "Nuwara Eliya",
      heroImage: srilankaTea,
      description: "Experience Sri Lanka's enchanting tea country in Nuwara Eliya, known as 'Little England' for its cool climate and colonial architecture. Journey through emerald tea plantations, visit a working tea factory, and ride the scenic hill country train through misty mountains.",
      activities: [
        {
          time: "Morning",
          title: "Royal Botanical Gardens",
          location: "Peradeniya",
          description: "Begin with a visit to the stunning Royal Botanical Gardens of Peradeniya, home to over 4,000 species of plants including orchids, spices, and the famous giant Javan fig tree. Stroll through themed gardens and enjoy the peaceful riverside setting.",
          image: srilankaBeach,
          duration: "2 hrs"
        },
        {
          time: "Afternoon",
          title: "Tea Factory & Plantation Tour",
          location: "Nuwara Eliya",
          description: "Journey to the hill station of Nuwara Eliya, stopping at a working tea factory to learn about Ceylon tea production from leaf to cup. Walk through terraced tea plantations with panoramic mountain views and enjoy fresh tea tasting.",
          image: srilankaTea,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Botanical Gardens",
          description: "Explore exotic plants and the famous giant Javan fig tree in these colonial-era gardens.",
          image: srilankaBeach
        },
        {
          title: "Tea Factory Visit",
          description: "Learn the traditional process of Ceylon tea production from withering to packaging.",
          image: srilankaTea
        },
        {
          title: "Plantation Walk",
          description: "Stroll through emerald tea terraces with breathtaking views of rolling hills.",
          image: srilankaHero
        }
      ],
      accommodation: {
        name: "Tea Plantation Bungalow",
        rating: "4 Star",
        roomTypes: [
          "01 x Mountain View Suite",
          "01 x Colonial Double"
        ]
      },
      transportation: {
        from: "Kandy",
        to: "Nuwara Eliya",
        duration: "2.5 Hours",
        distance: "75 km"
      }
    },
    {
      day: 6,
      date: "25 JUN 2024",
      title: "Scenic Train & Elephant Encounters",
      location: "Ella",
      heroImage: srilankaHero,
      description: "Experience one of the world's most beautiful train journeys from Nuwara Eliya to Ella, winding through tea plantations and mountain valleys. In Ella, discover stunning viewpoints, waterfalls, and visit an ethical elephant sanctuary.",
      activities: [
        {
          time: "Morning",
          title: "Hill Country Train Journey",
          location: "Nuwara Eliya ➜ Ella",
          description: "Board the famous hill country train for one of the world's most scenic railway journeys. Watch tea plantations, waterfalls, and mountain villages pass by your window during this unforgettable 3-hour ride through Sri Lanka's highlands.",
          image: srilankaHero,
          duration: "3 hrs"
        },
        {
          time: "Afternoon",
          title: "Little Adam's Peak Hike",
          location: "Ella",
          description: "Take a gentle hike to Little Adam's Peak for spectacular 360-degree views of the Ella valley and surrounding tea plantations. This relatively easy climb rewards you with some of Sri Lanka's most Instagram-worthy landscapes.",
          image: srilankaTea,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Scenic Train Ride",
          description: "Journey through misty mountains and tea plantations on one of the world's most beautiful train routes.",
          image: srilankaHero
        },
        {
          title: "Little Adam's Peak",
          description: "Hike to this scenic viewpoint for panoramic views of Ella valley and tea country.",
          image: srilankaTea
        },
        {
          title: "Nine Arch Bridge",
          description: "Visit the famous colonial-era railway bridge set amidst lush jungle scenery.",
          image: srilankaBeach
        }
      ],
      accommodation: {
        name: "Ella Mountain Resort",
        rating: "4 Star",
        roomTypes: [
          "01 x Valley View Double",
          "01 x Mountain Suite"
        ]
      },
      transportation: {
        from: "Nuwara Eliya",
        to: "Ella",
        duration: "3 Hours",
        distance: "Train journey"
      }
    },
    {
      day: 7,
      date: "26 JUN 2024",
      title: "Wildlife Safari & Ancient Cities",
      location: "Yala National Park",
      heroImage: srilankaBeach,
      description: "Embark on an exciting wildlife safari in Yala National Park, home to the highest density of leopards in the world. Spot elephants, sloth bears, crocodiles, and over 200 bird species in this incredible biodiversity hotspot.",
      activities: [
        {
          time: "Early Morning",
          title: "Yala National Park Safari",
          location: "Yala",
          description: "Begin before dawn for the best wildlife viewing opportunities in Yala National Park. Search for the elusive Sri Lankan leopard, herds of elephants, sloth bears, spotted deer, and colorful bird species including peacocks and hornbills.",
          image: srilankaBeach,
          duration: "4 hrs"
        },
        {
          time: "Afternoon",
          title: "Kataragama Temple Visit",
          location: "Kataragama",
          description: "Visit the sacred Kataragama Temple complex, an important pilgrimage site for Buddhists, Hindus, and indigenous Vedda people. Experience the multicultural religious harmony that defines Sri Lankan spirituality.",
          image: srilankaHero,
          duration: "1.5 hrs"
        }
      ],
      experiences: [
        {
          title: "Leopard Spotting",
          description: "Search for Sri Lankan leopards in their natural habitat in this premier wildlife destination.",
          image: srilankaBeach
        },
        {
          title: "Elephant Herds",
          description: "Observe large elephant families in their natural environment around watering holes.",
          image: srilankaHero
        },
        {
          title: "Sacred Temple Complex",
          description: "Experience the multicultural pilgrimage site sacred to multiple faiths.",
          image: srilankaTea
        }
      ],
      accommodation: {
        name: "Yala Safari Lodge",
        rating: "4 Star",
        roomTypes: [
          "01 x Safari Tent",
          "01 x Wilderness Cabin"
        ]
      },
      transportation: {
        from: "Ella",
        to: "Yala",
        duration: "2.5 Hours",
        distance: "85 km"
      }
    },
    {
      day: 8,
      date: "27 JUN 2024",
      title: "Dutch Colonial Heritage & Beaches",
      location: "Galle",
      heroImage: srilankaBeach,
      description: "Explore the UNESCO World Heritage site of Galle Fort, a perfectly preserved Dutch colonial city surrounded by massive ramparts. Wander cobblestone streets, visit art galleries, and enjoy stunning ocean views from the fort walls.",
      activities: [
        {
          time: "Morning",
          title: "Galle Fort Exploration",
          location: "Galle",
          description: "Explore the magnificent Galle Fort, built by the Dutch in the 17th century and perfectly preserved within massive stone ramparts. Walk the fort walls with ocean views, visit the lighthouse, Dutch Reformed Church, and browse boutique shops and art galleries.",
          image: srilankaBeach,
          duration: "3 hrs"
        },
        {
          time: "Afternoon",
          title: "Unawatuna Beach Relaxation",
          location: "Unawatuna",
          description: "Relax on the golden sands of Unawatuna Beach, one of Sri Lanka's most beautiful coastal spots. Swim in the calm bay waters, try fresh seafood at beachside restaurants, or simply unwind under swaying palm trees.",
          image: srilankaBeach,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Dutch Fort Walls",
          description: "Walk the historic ramparts with panoramic Indian Ocean views and colonial architecture.",
          image: srilankaBeach
        },
        {
          title: "Colonial Churches",
          description: "Visit the Dutch Reformed Church and other colonial-era religious buildings.",
          image: srilankaHero
        },
        {
          title: "Beach Paradise",
          description: "Relax on pristine golden sands surrounded by palm trees and crystal-clear waters.",
          image: srilankaBeach
        }
      ],
      accommodation: {
        name: "Galle Heritage Hotel",
        rating: "4.5 Star",
        roomTypes: [
          "01 x Ocean View Suite",
          "01 x Colonial Double"
        ]
      },
      transportation: {
        from: "Yala",
        to: "Galle",
        duration: "3 Hours",
        distance: "120 km"
      }
    },
    {
      day: 9,
      date: "28 JUN 2024",
      title: "Final Moments & Farewell",
      location: "Colombo",
      heroImage: srilankaColombo,
      description: "Return to Colombo for your final day in Sri Lanka. Enjoy last-minute shopping, visit remaining sights, or simply relax before your departure. Take with you unforgettable memories of this incredible island nation.",
      activities: [
        {
          time: "Morning",
          title: "Return to Colombo",
          location: "Galle ➜ Colombo",
          description: "Travel back to Colombo along the scenic coastal highway. Stop at local markets for last-minute souvenir shopping including tea, spices, batik textiles, and precious gems that Sri Lanka is famous for.",
          image: srilankaColombo,
          duration: "3 hrs"
        },
        {
          time: "Evening",
          title: "Departure",
          location: "Colombo",
          description: "After check-out and final preparations, transfer to Bandaranaike International Airport for your departure flight. Ayubowan and farewell to the Pearl of the Indian Ocean - until we meet again!",
          image: srilankaHero,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Souvenir Shopping",
          description: "Browse local markets for authentic Sri Lankan tea, spices, and handicrafts.",
          image: srilankaTea
        },
        {
          title: "Coastal Highway",
          description: "Enjoy scenic views along the beautiful southern coastal road back to Colombo.",
          image: srilankaBeach
        },
        {
          title: "Final Memories",
          description: "Reflect on your incredible journey through Sri Lanka's diverse landscapes and culture.",
          image: srilankaHero
        }
      ],
      accommodation: {
        name: "Airport Transit Hotel",
        rating: "3 Star",
        roomTypes: [
          "01 x Standard Room"
        ]
      },
      transportation: {
        from: "Galle",
        to: "Colombo Airport",
        duration: "2.5 Hours",
        distance: "150 km"
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
