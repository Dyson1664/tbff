import { useMemo, memo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { TripCard } from "@/components/common/TripCard";
import TBFFFooter from "@/components/common/TBFFFooter";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { FEATURES } from "@/data/landing"; // ✅ ADD

// Import destination images
import thailandHero from "@/assets/thailand-hero.jpg";
import srilankaHero from "@/assets/srilanka-hero.jpg";
import philippinesHero from "@/assets/philippines-hero.jpg";
import japanHero from "@/assets/japan-hero.jpg";
import japanHero3 from "@/assets/japan-hero-3.jpg";
import colombiaHero from "@/assets/colombia/colombia-day7.jpg";



// TBFF specific tours - Japan, Colombia (2 trips)
const TBFF_TOURS = [
  {
    id: 1,
    title: "Japan Golden Route",
    location: "Tokyo, Japan",
    duration: "7 days",
    price: "From $1,895",
    image: japanHero3,
    tag: "",
    route: "/project/tbff/japan-itinerary",
    overview:
      "Neon cities to Zen temples—Tokyo to Kyoto by bullet train, sushi, and shrines.",
  },
  {
    id: 2,
    title: "Colombia Highlights",
    location: "Bogotá, Colombia",
    duration: "10 days",
    price: "From $1,679",
    image: colombiaHero,
    tag: "",
    route: "/project/tbff/colombia-itinerary",
    overview:
      "Colorful cities, lush coffee regions, Caribbean coastlines, and vibrant culture across Colombia.",
  },
] as const;

interface Destination {
  name: string;
  image: string;
  route?: string;
  comingSoon?: boolean;
}

const TBFF_DESTINATIONS: readonly Destination[] = [
  {
    name: "Thailand",
    image: thailandHero,
    route: "/project/tbff/thailand-itinerary",
  },
  {
    name: "Sri Lanka",
    image: srilankaHero,
    route: "/project/tbff/srilanka-itinerary",
  },
  {
    name: "Philippines",
    image: philippinesHero,
    route: "/project/tbff/philippines-itinerary",
  },
  { name: "Japan", image: japanHero, route: "/project/tbff/japan-itinerary" },
] as const;

// ✅ TBFF Testimonials (NO export here — prevents Vite Fast Refresh issues)
const TESTIMONIALS = [
  {
    name: "Laura",
    location: "@laura__spurgeon",
    text:
      "Travelbff has helped me see the world and meet new people, and not just any new people, some of my best friends… literally future bridesmaids! People think I'm crazy for traveling with strangers but these strangers were meant to come into my life and have played a huge role in it since meeting!",
    rating: 5,
    date: "2024",
    avatar: "L",
  },
  {
    name: "Anastasia",
    location: "@the.brown.butterfly",
    text:
      "I took a leap and booked Peru and Thailand with this group after not being able to find people to go with. Absolutely zero regrets. I met the most amazing women and had the greatest time ever on both trips. The tour guides provided were amazing and the itineraries were a perfect balance. I'd 100% book again. I love this community!",
    rating: 5,
    date: "2024",
    avatar: "A",
  },
  {
    name: "Juli",
    location: "@juliiii_munozz",
    text:
      "I am very blessed to have been able to travel with Travel BFF for my first trip to another country. The girls I met were very friendly and made me feel like I've known them for a long time. They were home away from home.",
    rating: 5,
    date: "2024",
    avatar: "J",
  },
] as const;

// Memoized destination card component
const DestinationCard = memo(({ destination }: { destination: Destination }) => {
  const isComingSoon = destination.comingSoon === true || !destination.route;

  const badge = (
    <span
      className="inline-flex items-center text-[9px] font-semibold uppercase tracking-wide
                 bg-white text-gray-900 px-1.5 py-0.5 rounded-full shadow ring-1 ring-black/10"
    >
      Coming soon
    </span>
  );

  const content = (
    <>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      {isComingSoon && (
        <div className="absolute top-2 left-2 z-10">{badge}</div>
      )}
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-semibold text-lg drop-shadow">
          {destination.name}
        </h3>
      </div>
    </>
  );

  return isComingSoon ? (
    <div
      className="relative aspect-square overflow-hidden rounded-3xl group ring-1 ring-black/10 select-none"
      aria-disabled="true"
      title={`${destination.name} — Coming soon`}
    >
      {content}
    </div>
  ) : (
    <Link
      to={destination.route!}
      className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
      title={destination.name}
    >
      {content}
    </Link>
  );
});

// ✅ ADD: FeatureCard (local to this page)
const FeatureCard = memo(
  ({ feature }: { feature: (typeof FEATURES)[number] }) => (
    <div className="text-center">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <feature.icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4">
        {feature.title}
      </h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  )
);

export default memo(function TBFFLandingPage() {
  // CSS filter to shift teal (#0FC2BF) to olive green (#506345)
  const tbffLogoStyle = {
    filter:
      "brightness(0) saturate(100%) invert(35%) sepia(15%) saturate(600%) hue-rotate(70deg) brightness(95%) contrast(90%)",
  };

  const tourCards = useMemo(
    () =>
      TBFF_TOURS.map((tour) => (
        <TripCard
          key={tour.id}
          id={tour.id.toString()}
          image={tour.image}
          title={tour.title}
          location={tour.location}
          duration={tour.duration}
          price={tour.price}
          tag={tour.tag}
          route={tour.route}
          overview={tour.overview}
        />
      )),
    []
  );

  const destinationCards = useMemo(
    () =>
      TBFF_DESTINATIONS.map((destination, index) => (
        <DestinationCard
          key={`${destination.name}-${index}`}
          destination={destination}
        />
      )),
    []
  );

  const testimonialCards = useMemo(
    () =>
      TESTIMONIALS.map((t, index) => (
        <TestimonialCard
          key={`${t.name}-${index}`}
          name={t.name}
          location={t.location}
          text={t.text}
          rating={t.rating}
          date={t.date}
          avatar={t.avatar}
        />
      )),
    []
  );

  // ✅ ADD: featureCards
  const featureCards = useMemo(
    () =>
      FEATURES.map((feature, index) => (
        <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
      )),
    []
  );

  return (
    <div className="tbff-theme min-h-screen bg-background">
      <style>{`
        .tbff-theme .bg-primary {
          background-color: #fbddda !important;
          color: #506345 !important;
          border-color: #fbddda !important;
        }
        .tbff-theme .bg-primary .text-white,
        .tbff-theme .bg-primary [class*="text-white"] {
          color: #506345 !important;
        }
        .tbff-theme .fill-primary {
          fill: #506345 !important;
        }
        .tbff-theme .text-primary {
          color: #506345 !important;
        }
        .tbff-theme .bg-primary\\/10 {
          background-color: rgba(251, 221, 218, 0.3) !important;
        }
        .tbff-theme .hover\\:text-primary:hover {
          color: #506345 !important;
        }
      `}</style>

      {/* Navigation */}
      <Navbar logoStyle={tbffLogoStyle} />

      <section className="relative h-screen w-full overflow-hidden">
  <picture className="absolute inset-0 w-full h-full">
    <source
      media="(max-width: 767px)"
      srcSet="/hero/tbff-hero-mobile.jpg"
    />
    <source
      media="(min-width: 768px)"
      srcSet="/hero/tbff-hero-desktop.jpg"
    />
    <img
      src="/hero/tbff-hero-desktop.jpg"
      alt="Travelbff hero"
      className="w-full h-full object-cover"
    />
  </picture>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
      Travelbff
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl drop-shadow-md">
      Connecting Women Worldwide
    </p>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
    </div>
  </div>
</section>

      {/* Featured Tours */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4909F] mb-4">
              Current Available Group Trips
            </h2>

            <p className="text-lg text-muted-foreground ">
              Connecting women through unforgettable group trips and local
              adventures
            </p>
          </div>

          {/* ✅ Center 2 cards on desktop, keep SAME card size */}
          <div className="grid md:grid-cols-2 gap-8 max-w-[53rem] mx-auto">
            {tourCards}
          </div>
        </div>
      </section>

      {/* Destinations Grid
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-[#F4909F] mb-4">
              Destinations
            </h2>
           <p className="text-lg text-muted-foreground">
              Come as strangers and leave as friends
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinationCards}
          </div>
        </div>
      </section>*/}

      {/* ✅ Testimonials (FULL text preserved) */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-[#F4909F] mb-4">
              What Our BFFs Are Saying:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">{testimonialCards}</div>
        </div>
      </section>

      {/* ✅ ADD: Features (placed under reviews section) */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-[#F4909F] mb-4">
              Why Choose Travelbff?
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes our travel experiences special
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">{featureCards}</div>
        </div>
      </section>

      <TBFFFooter />
    </div>
  );
});
