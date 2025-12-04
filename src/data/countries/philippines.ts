// Import images
import philippinesHero from "@/assets/philippines-hero.jpg";
import philippinesHero2 from "@/assets/ph-hero.jpg";
import philippinesHero4 from "@/assets/ph-hero4.jpg";


import philippinesDay01 from "@/assets/philippines-day-01.jpg";
import phmanila from "@/assets/ph-manila.jpg";

import philippinesDay02 from "@/assets/philippines-day-02.jpg";

import phboattrip from "@/assets/ph-hero3.jpg";
import philippinesDay03 from "@/assets/philippines-day03.jpeg";
import philippinesDay05 from "@/assets/philippines-day05.jpeg";
import philippinesDay04 from "@/assets/philippines-day04.jpeg";
import philippinesDay06 from "@/assets/philippines-day06.jpg";
import philippinesDay07 from "@/assets/philippines-day07.jpg";

import philippinesDay08 from "@/assets/philippines-day08.jpeg";
import phelnido from "@/assets/ph-elnido.jpg";

import philippinesDay09 from "@/assets/philippines-day09.jpeg";
import philippinesDay10 from "@/assets/philippines-day10.jpeg";

import philippinesDay5wonder from "@/assets/philippines-day05-wonderland.jpg";



import philippinesRice from "@/assets/philippines-rice.jpg";
import philippinesMarket from "@/assets/philippines-market.jpg";

import highlight01 from "@/assets/highlight-ph-01.jpeg"
import highlight02 from "@/assets/highlight-ph-02.jpg"
import highlight03 from "@/assets/highlight-ph-03.jpg"

// Review images
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/ph-review-3.png";
import review4 from "@/assets/ph-review-4.png";


// Import icons for highlights
import { Home, Zap, Plane, Users, Soup, TreePine } from "lucide-react";

export const philippinesData = {
  id: "philippines-paradise",
  slug: "philippines",
  title: "Philippines Paradise",
  subtitle: "Explore tropical islands, ancient rice terraces, and vibrant Filipino culture",
  location: "Philippines",
  duration: "10 days",
  heroImage: philippinesHero2,
  price: "USD $1,679",
  startDate: "May 4th",
  overviewGallery2x:[philippinesDay03, philippinesHero4, philippinesDay04, philippinesDay08],
  route: ["Manila", "Port Barton", "Wonderland", "El Nido"],
  tags: [
    { emoji: "🏖️", label: "Beach" },
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🏝️", label: "Island Hopping" },
    { emoji: "⏱️", label: "Under 2 Weeks" },
  ],
  aboutDescription: [
    "Discover the incredible diversity of the Philippines, an archipelago of over 7,000 islands offering pristine beaches, ancient rice terraces, and warm Filipino hospitality. From the bustling streets of Manila to the remote beauty of Palawan and Banaue.",
    "Experience world-class diving, UNESCO World Heritage sites, and some of the most beautiful islands on Earth. This journey combines adventure, relaxation, and cultural immersion in one of Southeast Asia's most stunning destinations."
  ],
  aboutImages: [philippinesRice, philippinesMarket],

highlights: [
  {
    title: "Island hoping El Nido & Lime Resort",
    description: "Spend one unforgettable day exploring El Nido’s turquoise waters and hidden lagoons. Spend three dreamy nights of incredible sunsets at Lime Resort’s infinity pool.",
    image: highlight01,
  },
  {
    title: "Wonderland island",
    description: "Nestled between jungle hills and turquoise waters, Wonderland is island living perfected. As the sun sets, unwind with music and tropical drinks, then gather around the bonfire under a starlit sky.",
    image: highlight02,
  },
  {
    title: "Island hopping & snorkeling",
    description: "Island hop through Port Barton’s hidden gems and snorkel vibrant reefs with turtles.",
    image: highlight03,
  },
],

  // What's Included Highlights - Philippines specific
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "9 NIGHTS<br />ACCOMM",
      description: "From beachside resorts to traditional Filipino bamboo bungalows on remote tropical islands!"
    },
    {
      icon: Zap,
      title: "10 DAYS OF<br />ISLAND PARADISE",
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
      icon: Soup,
      title: "AUTHENTIC<br />CUISINE",
      description: "8 Breakfasts, 5 Lunches & 2 Dinners featuring authentic Filipino dishes!"
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
  date: "May 4th",
  title: "Welcome to the Philippines",
  location: "Manila, Luzon",
  heroImage: phmanila,
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
  date: "May 5th",
  title: "Journey to Port Barton",
  location: "Port Barton, Palawan",
  heroImage: philippinesDay05,
  description:
    "We’re off to island life! Catch a morning flight to Puerto Princesa, then drive through scenic countryside. Along the way, stop for a heartfelt local lunch at a family home—a true taste of Filipino hospitality. By afternoon, arrive in the peaceful beach town of Port Barton. Unwind and explore at your own pace.",
  meals: "Lunch",
  accommodation: { name: "Holiday Suites, Port Barton" },
  highlights: "flight to Puerto Princesa, countryside drive, home-cooked lunch with local family, Port Barton arrival & free time"
},
{
  day: 3,
  date: "May 6th",
  title: "Island Hopping in Paradise",
  location: "Port Barton, Palawan",
  heroImage: phboattrip,
  description:
    "A full day of island hopping in Port Barton’s turquoise waters—snorkel vibrant reefs, relax on palm-fringed beaches, and enjoy island picnics. Expect 3–4 snorkeling stops (weather dependent) and plenty of saltwater joy.",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Holiday Suites, Port Barton" },
  highlights: "3–4 island/snorkel spots (weather dependent), turquoise lagoons, reef snorkeling, island picnic, beach time"
},
{
  day: 4,
  date: "May 7th",
  title: "Free Day: Choose Your Own Adventure",
  location: "Port Barton, Palawan",
  heroImage: philippinesDay04,
  description:
    "Today is yours! Lounge on the beach, book a massage, or opt for adventures like scuba diving, a trip to Long Beach, or a hands-on cultural craft experience with locals.",
  meals: "Breakfast",
  accommodation: { name: "Holiday Suites, Port Barton" },
  highlights: "free day, optional massage, optional scuba diving, Long Beach visit, cultural craft experience"
}
,
    {
  day: 5,
  date: "May 8th",
  title: "Escape to Wonderland",
  location: "Wonderland, Palawan",
  heroImage: philippinesDay5wonder,
  description:
    "Head off the grid to Wonderland and settle into the rustic-luxe Isla Experience. Spend the afternoon snorkeling, hammocking, and soaking up tropical island magic. If skies are clear, enjoy a bonfire on the beach tonight.",
  meals: "Breakfast & Dinner",
  accommodation: { name: "Isla Experience, Wonderland" },
  highlights: "boat transfer to remote island, snorkeling, hammocks, beach time, bonfire under the stars"
},
{
  day: 6,
  date: "May 9th",
  title: "Shipwrecks, Village Life & Ocean Vibes",
  location: "Wonderland, Palawan",
  heroImage: philippinesDay06,
  description:
    "Begin with sunrise yoga or a peaceful beach walk. Choose your rhythm: snorkel a shipwreck, swim with friendly pigs, explore the local village, or learn to cook Filipino-style.",
  meals: "Breakfast, Lunch & Dinner",
  accommodation: { name: "Isla Experience, Wonderland" },
  highlights: "sunrise yoga, shipwreck snorkel, swim with pigs, village trek, Filipino cooking demo"
},
{
  day: 7,
  date: "May 10th",
  title: "From Island Escape to El Nido",
  location: "El Nido, Palawan",
  heroImage: philippinesDay07,
  description:
    "Say goodbye to remote island life and transfer to El Nido, famed for its limestone cliffs and beach scene. Check into a stunning coastal resort, then enjoy sunset views and a rooftop cocktail.",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Lime Resort, El Nido" },
  highlights: "island-to-town transfer, coastal resort check-in, rooftop sunset, cocktails"
},
{
  day: 8,
  date: "May 11th",
  title: "El Nido Island Hopping Adventure",
  location: "El Nido Islands, Palawan",
  heroImage: phelnido,
  description:
    "Cruise the Bacuit Archipelago’s secret lagoons, hidden coves, and jaw-dropping beaches. A full day of swimming, snorkeling, kayaking, and a delicious Filipino-style island lunch. (3–5 island stops, weather dependent.)",
  meals: "Breakfast & Lunch",
  accommodation: { name: "Lime Resort, El Nido" },
  highlights: "Bacuit lagoons and coves, kayaking, snorkeling, Filipino island lunch"
},
{
  day: 9,
  date: "May 12th",
  title: "Zipline & Beach Club Bliss",
  location: "El Nido, Palawan",
  heroImage: philippinesDay09,
  description:
    "Soar the Maremegmeg Zipline with ocean views, then spend the afternoon your way—chill at Angkla Beach Club or head to Nacpan Beach for sun and swim.",
  meals: "Breakfast",
  accommodation: { name: "Lime Resort, El Nido" },
  highlights: "Maremegmeg Zipline ocean views, Angkla Beach Club, Nacpan Beach (₱1000/$18 minimum spend)"
},
{
  day: 10,
  date: "May 13th",
  title: "Until Next Time",
  location: "El Nido, Palawan",
  heroImage: philippinesDay10,
  description:
    "Enjoy a final beachfront coffee or one last dip. We’ll assist with transfers back to Puerto Princesa or Manila depending on your onward travel.",
  meals: "Breakfast",
  highlights: "free morning, farewell ocean dip, airport transfers to Puerto Princesa or Manila"
}
]
,
  summary: {
    duration: "10 Days",
    activities: "16 Experiences",
    areas: "3 Islands",
    type: "Adventure & Beach"
  },
  included: [
  {
    title: "Meals",
    items: [
      { text: "8 Breakfasts" },
      { text: "4 Lunches" },
      { text: "2 Dinners" }
    ]
  },
  {
    title: "Transportation",
    items: [
      { text: "Airport pick-up from Manila (NAIA)" },
      { text: "Flight on Day 2: Manila → Puerto Princesa" },
      { text: "Transport to all included activities" }
    ]
  },
  {
    title: "Island & Water Adventures",
    items: [
      { text: "Private boat excursion in Port Barton" },
      { text: "El Nido private boat excursion" },
      { text: "Zip-line" },
      { text: "Feed / swim with island pigs" },
      { text: "Beach picnics" },
      { text: "Beach bonfire (weather permitting)" }
    ]
  },
  {
    title: "Cultural & Community",
    items: [
      { text: "Cooking demonstration" },
      { text: "Visit local community & give" },
      { text: "Local lunch experience" }
    ]
  }
]
,
  faqs: [
  {
    question: "Where does the trip start & finish?",
    answer: "The tour starts in Manila and ends in El Nido, Palawan."
  },
  {
    question: "Which airport do I need to fly into?",
    answer: "Fly into Manila—Ninoy Aquino International Airport (NAIA)."
  },
  {
  question: "Which airport do I need to fly out from?",
  answer:
    "The tour ends in El Nido. Options:\n\n" +
    "1) Fly from El Nido (ENI) to Manila or Cebu for your international connection.\n\n" +
    "2) Take a ~6-hour van/car to Puerto Princesa (PPS) and fly to Manila or Cebu.\n\n" +
    "3) Take a 5–6 hour ferry from El Nido to Coron, then fly from Coron (USU) to Manila or Cebu.\n\n" +
    "Note: Transfers for these options are not included."
}
,
  {
    question: "Do you have an age limit for tours?",
    answer: "Our tours cater to adventurous travelers aged 18–45, with most guests between 21–35 years old."
  },
  {
    question: "What is the local currency?",
    answer: "Philippine Peso (PHP)."
  },
  {
    question: "What are the visa requirements?",
    answer: `Citizens of ~157 countries receive a 30-day visa-free entry (check your government's site to confirm). You must have an onward/return flight. Complete the Philippines eTravel form within 72 hours of arrival: https://etravel.gov.ph`
  }
],

review: {
  testimonialText: "What an amazing 10-day adventure in the Philippines! Jiear was the perfect guide! He was warm, knowledgeable, and always one step ahead. We explored Port Barton and El Nido, plus the magical Wonderland Island experience.",
  author: "Louisa Miller, USA",
  images: [review1, review2, review3, review4]
}

};