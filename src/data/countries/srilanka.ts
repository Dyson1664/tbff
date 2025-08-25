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
          description: "After check-in and time to freshen up, we’ll come together for a quick orientation and tour briefing. Then you’re free to stretch your legs with a walk along the breezy Galle Face Green or explore the trendy boutiques of the Dutch Hospital precinct. The evening is yours to relax before we reunite in the evening for a warm welcome dinner featuring classic Sri Lankan rice-and-curry spreads and a refreshing toast of King Coconut juice.",
          image: srilankaTea,
          duration: "5 hrs"
        }
      ]
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
      title: "Lion's Rock & Spa Downtime",
      location: "Sigiriya",
      heroImage: srilankaHero,
      description: "Nestled in the lush green hills of Sri Lanka's Cultural Triangle, Sigiriya is a city that exudes charm and spirituality. Known as the home of the iconic Lion Rock fortress, it is a testament to centuries of history, spirituality and artistic mastery. Wander through its ancient pathways brimming with colorful frescoes and archaeological marvels, or take a serene stroll around the surrounding countryside. Whether you're seeking tranquility or adventure, Sigiriya is your gateway to unforgettable experiences.",
      activities: [
        {
          time: "Morning",
          title: "Sigiriya Rock Fortress",
          location: "Sigiriya",
          description: "We rise early and take a short drive to one of Sri Lanka's most iconic sites: Sigiriya Rock Fortress. Climb the 1,200 ancient steps, pass by frescoes dating back 1,500 years, and reach the summit for unforgettable 360° views of jungle and village below. You'll be back at the hotel for a well-earned brunch.",
          image: srilankaTea,
          duration: "5 hrs"
        },
        {
          time: "Evening",
          title: "Village Safari Experience",
          location: "Sigiriya",
          description: "Immerse yourself in the charm of rural life with our unforgettable evening village safari. Begin your adventure with a peaceful canoe ride across a scenic lake, surrounded by nature's tranquility. As the sun sets, enjoy a hearty local-style dinner, followed by a cozy bonfire under the stars—complete with fun games and warm laughter. The night concludes with a delightful tractor ride through the countryside, leading you back to the bus and onward to your hotel, full of memories and smiles.",
          image: srilankaTea,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Lion Rock Fortress Climb",
          description: "Ascend the iconic 1,200 ancient steps to reach breathtaking 360° views of the surrounding jungle.",
          image: srilankaHero
        },
        {
          title: "Ancient Frescoes Gallery",
          description: "Marvel at 1,500-year-old frescoes that showcase Sri Lanka's rich artistic heritage.",
          image: srilankaTea
        },
        {
          title: "Village Safari Experience",
          description: "Enjoy a peaceful canoe ride, local dinner, and bonfire under the stars with countryside tractor rides.",
          image: srilankaBeach
        }
      ],
      accommodation: {
        name: "Sigiriya Village Hotel",
        rating: "4.3 Star",
        roomTypes: [
          "01 x Superior Double",
          "01 x Deluxe Triple"
        ]
      },
      transportation: {
        from: "Sigiriya Rock Fortress",
        to: "Village Safari Area",
        duration: "30 Minutes",
        distance: "15 km"
      }
    },
    {
      day: 4,
      date: "June 23, 2024",
      title: "Tea Trails & Scenic Train Journey",
      location: "Ella",
      heroImage: srilankaTea,
      description: "Journey into Sri Lanka's legendary hill country, where emerald tea plantations cascade down misty mountains. Experience the world-famous blue train ride through breathtaking landscapes, connecting centuries-old tea traditions with the relaxed mountain town vibes of Ella.",
      activities: [
        {
          time: "Morning",
          title: "Tea Estate Experience",
          location: "Sigiriya ➜ Ella",
          description: "After breakfast, we travel south into the cool, green hill country. Our first stop is a working tea estate where you'll try your hand at leaf-plucking and sample fresh brews with the resident planters. From there, we head to Nanu Oya station and board Sri Lanka's beloved blue train.",
          image: srilankaTea,
          duration: "4 hrs"
        },
        {
          time: "Afternoon",
          title: "Scenic Train Journey to Ella",
          location: "Ella",
          description: "This is one of the most scenic rail journeys on earth—watch waterfalls, valleys, and waving villagers roll past your window. In the evening we arrive in Ella, a peaceful mountain town. After check-in, the evening is yours to explore curry spots, music cafés, or a breezy rooftop bar.",
          image: srilankaHero,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Tea Leaf Plucking Experience",
          description: "Try your hand at traditional tea leaf plucking and learn from expert tea plantation workers.",
          image: srilankaTea
        },
        {
          title: "Blue Train Scenic Journey",
          description: "Experience one of the world's most beautiful train rides through misty mountains and valleys.",
          image: srilankaHero
        },
        {
          title: "Ella Mountain Town Discovery",
          description: "Explore cozy cafés, music venues, and rooftop bars in this charming hill station.",
          image: srilankaBeach
        }
      ],
      accommodation: {
        name: "Ella Mountain Resort",
        rating: "4.4 Star",
        roomTypes: [
          "01 x Mountain View Double",
          "01 x Garden Triple"
        ]
      },
      transportation: {
        from: "Sigiriya",
        to: "Ella via Nanu Oya Train",
        duration: "6 Hours",
        distance: "150 km"
      }
    },
    {
      day: 5,
      date: "June 24, 2024",
      title: "Nine-Arch Bridge & Little Adam's Peak",
      location: "Ella",
      heroImage: srilankaHero,
      description: "Discover Ella's most iconic landmarks on this adventure-filled day. From the fairytale Nine-Arch Bridge to the panoramic views atop Little Adam's Peak, experience the perfect blend of architectural wonder and natural beauty that makes this hill station truly magical.",
      activities: [
        {
          time: "Morning",
          title: "Nine-Arch Bridge & Free Time",
          location: "Ella",
          description: "Ease into the day with a slow breakfast before we walk to the fairytale-like Nine-Arch Bridge, just in time to watch a train curve across its famous arc. The late morning and early afternoon are yours to enjoy at your own pace—fly down the zip-line, relax at a mountaintop pool club, or café-hop through the bohemian streets of Ella.",
          image: srilankaHero,
          duration: "4 hrs"
        },
        {
          time: "Evening",
          title: "Little Adam's Peak Hike",
          location: "Ella",
          description: "Before sunset, we take a gentle hike up Little Adam's Peak. The 45-minute climb rewards you with glowing views over tea hills and valleys. After dark, we head into town for dinner—think sizzling kottu roti and relaxed local vibes.",
          image: srilankaTea,
          duration: "3 hrs"
        }
      ],
      experiences: [
        {
          title: "Nine-Arch Bridge Train Spotting",
          description: "Watch trains curve across this architectural marvel surrounded by lush jungle and tea plantations.",
          image: srilankaHero
        },
        {
          title: "Adventure Activities",
          description: "Experience thrilling zip-lines and relax at mountaintop pool clubs with stunning valley views.",
          image: srilankaBeach
        },
        {
          title: "Little Adam's Peak Sunset Hike",
          description: "Climb to panoramic viewpoints for golden hour views over endless tea hills and valleys.",
          image: srilankaTea
        }
      ],
      accommodation: {
        name: "Ella Jungle Resort",
        rating: "4.3 Star",
        roomTypes: [
          "01 x Valley View Double",
          "01 x Jungle Triple"
        ]
      },
      transportation: {
        from: "Ella Town Center",
        to: "Nine-Arch Bridge & Little Adam's Peak",
        duration: "1.5 Hours Total",
        distance: "8 km"
      }
    },
    {
      day: 6,
      date: "June 25, 2024",
      title: "Elephants & Southern Sands",
      location: "Mirissa",
      heroImage: srilankaBeach,
      description: "Journey from misty mountains to golden beaches, with incredible wildlife encounters along the way. Experience Sri Lanka's famous elephants in their natural habitat, witness conservation efforts up close, and end the day with your toes in the warm sand of the southern coast.",
      activities: [
        {
          time: "Morning",
          title: "Udawalawe Safari",
          location: "Ella ➜ Udawalawe",
          description: "After an early breakfast, we hit the road toward Udawalawe National Park. Mid morning, you'll board an open-top jeep for a wildlife safari—keep an eye out for wild elephants, crocodiles, many species of birds and even jackals if you're lucky.",
          image: srilankaHero,
          duration: "6 hrs"
        },
        {
          time: "Afternoon",
          title: "Elephant Transit Home & Beach Arrival",
          location: "Udawalawe ➜ Mirissa",
          description: "After lunch, we stop at the Elephant Transit Home where orphaned baby elephants are bottle-fed and nurtured until they're ready for the wild. By late afternoon, we reach Mirissa on Sri Lanka's south coast. Kick off your shoes, feel the sand beneath your feet, and enjoy a sunset beach dinner under glowing skies.",
          image: srilankaBeach,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Udawalawe Wildlife Safari",
          description: "Spot wild elephants, crocodiles, and diverse bird species in open-top jeeps through pristine wilderness.",
          image: srilankaHero
        },
        {
          title: "Elephant Transit Home Visit",
          description: "Witness conservation in action as orphaned baby elephants are bottle-fed and prepared for release.",
          image: srilankaTea
        },
        {
          title: "Mirissa Beach Sunset",
          description: "Enjoy your first golden hour on the southern coast with dinner under glowing beach skies.",
          image: srilankaBeach
        }
      ],
      accommodation: {
        name: "Mirissa Beach Resort",
        rating: "4.5 Star",
        roomTypes: [
          "01 x Ocean View Double",
          "01 x Beach Triple"
        ]
      },
      transportation: {
        from: "Ella",
        to: "Mirissa via Udawalawe",
        duration: "8 Hours",
        distance: "220 km"
      }
    },
    {
      day: 7,
      date: "June 26, 2024",
      title: "Turtles, Galle Fort & Beach Sunset",
      location: "Galle & Mirissa",
      heroImage: srilankaHero,
      description: "Combine meaningful conservation work with colonial history exploration along Sri Lanka's stunning southern coast. From releasing baby turtles to wandering through UNESCO-listed Galle Fort, experience the perfect blend of purpose and discovery.",
      activities: [
        {
          time: "Morning",
          title: "Turtle Conservation & Galle Fort",
          location: "Mirissa",
          description: "Start the day with a visit to a local turtle conservation project. If timing's right, you may even help release hatchlings into the ocean. Late in the morning, we head west along the coast to explore Galle Fort, a UNESCO World Heritage Site. Wander the colonial ramparts, explore local art galleries, or sip lime soda in one of its shaded cafés.",
          image: srilankaHero,
          duration: "6 hrs"
        },
        {
          time: "Evening",
          title: "Beach Sunset",
          location: "Mirissa",
          description: "We return to Mirissa by sunset for a golden-hour on the beach—an experience that defines coastal Sri Lanka.",
          image: srilankaBeach,
          duration: "2 hrs"
        }
      ],
      experiences: [
        {
          title: "Turtle Hatchling Release",
          description: "Participate in conservation efforts by helping release baby turtles into the Indian Ocean.",
          image: srilankaBeach
        },
        {
          title: "Galle Fort Colonial Walk",
          description: "Explore UNESCO World Heritage ramparts, art galleries, and historic cafés in this Dutch colonial fort.",
          image: srilankaHero
        },
        {
          title: "Mirissa Golden Hour",
          description: "Experience the quintessential Sri Lankan beach sunset with cocktails and ocean breezes.",
          image: srilankaTea
        }
      ],
      accommodation: {
        name: "Mirissa Boutique Hotel",
        rating: "4.4 Star",
        roomTypes: [
          "01 x Premium Ocean View",
          "01 x Deluxe Beach Triple"
        ]
      },
      transportation: {
        from: "Mirissa",
        to: "Galle Fort & Return",
        duration: "4 Hours Total",
        distance: "60 km"
      }
    },
    {
      day: 8,
      date: "June 27, 2024",
      title: "Beach Bliss & Farewell Feast",
      location: "Mirissa",
      heroImage: srilankaBeach,
      description: "Savor your final full day in paradise with the perfect balance of adventure and relaxation. Whether catching waves or giving back to the community, end your Sri Lankan journey with meaningful connections and unforgettable memories under tropical skies.",
      activities: [
        {
          time: "Morning",
          title: "Surf Lesson or Beach Cleanup",
          location: "Mirissa",
          description: "Enjoy a slow start to your final full day with breakfast from 7–9 AM. Then, hit the waves for an included surf lesson with a local instructor, or join a casual beach clean-up effort with our community partners.",
          image: srilankaBeach,
          duration: "5 hrs"
        },
        {
          time: "Evening",
          title: "Farewell Dinner",
          location: "Mirissa",
          description: "The afternoon is all yours—sunbathe with a coconut shake in hand, book a massage, or shop for last-minute gifts. In the evening, we come together one last time for a farewell dinner filled with grilled tuna, hoppers, and upbeat baila music to celebrate our incredible journey.",
          image: srilankaTea,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Surf Lesson Adventure",
          description: "Learn to ride Sri Lankan waves with expert local instructors on pristine Mirissa beach.",
          image: srilankaBeach
        },
        {
          title: "Community Beach Cleanup",
          description: "Give back to the local environment through meaningful conservation work with community partners.",
          image: srilankaHero
        },
        {
          title: "Farewell Feast & Baila Music",
          description: "Celebrate your journey with grilled tuna, hoppers, and traditional Sri Lankan music under the stars.",
          image: srilankaTea
        }
      ],
      accommodation: {
        name: "Mirissa Paradise Resort",
        rating: "4.6 Star",
        roomTypes: [
          "01 x Beachfront Suite",
          "01 x Ocean Terrace Triple"
        ]
      },
      transportation: {
        from: "Beach Activities",
        to: "Farewell Dinner Venue",
        duration: "15 Minutes",
        distance: "3 km"
      }
    },
    {
      day: 9,
      date: "June 28, 2024",
      title: "Until next time",
      location: "Colombo Airport",
      heroImage: srilankaHero,
      description: "Bid farewell to the Pearl of the Indian Ocean with hearts full of memories and cameras full of stunning moments. As you journey back through the diverse landscapes you've explored, carry with you the warmth of Sri Lankan hospitality and the promise of return.",
      activities: [
        {
          time: "Morning",
          title: "Departure",
          location: "Mirissa ➜ Colombo Airport",
          description: "Check out day. After one final tropical breakfast, it's time to say goodbye. All timings are approximate and may adjust for weather, wildlife movements and train schedules.",
          image: srilankaBeach,
          duration: "4 hrs"
        }
      ],
      experiences: [
        {
          title: "Final Tropical Breakfast",
          description: "Savor one last authentic Sri Lankan breakfast with fresh tropical fruits and local specialties.",
          image: srilankaTea
        },
        {
          title: "Scenic Departure Journey",
          description: "Take in the diverse landscapes one final time on your journey back to Colombo Airport.",
          image: srilankaHero
        },
        {
          title: "Memory Collection",
          description: "Reflect on nine days of incredible experiences while preparing for your onward journey.",
          image: srilankaBeach
        }
      ],
      accommodation: {
        name: "Airport Transit Hotel",
        rating: "4.0 Star",
        roomTypes: [
          "Day use rooms available"
        ]
      },
      transportation: {
        from: "Mirissa",
        to: "Bandaranaike International Airport",
        duration: "3.5 Hours",
        distance: "180 km"
      }
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