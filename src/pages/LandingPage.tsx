import { useState, useCallback, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/common/HeroSection";
import { TripCard } from "@/components/common/TripCard";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import {
  FEATURED_TOURS,
  DESTINATIONS,
  TESTIMONIALS,
  FEATURES,
  TOUR_ROUTES,
} from "@/data/landing";
import Footer from "@/components/common/Footer";

import landingHero from "@/assets/landing-hero.jpg";

// Memoized destination card component
const DestinationCard = memo(
  ({ destination }: { destination: typeof DESTINATIONS[0] }) => {
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
  }
);

// Memoized feature card component
const FeatureCard = memo(({ feature }: { feature: typeof FEATURES[0] }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
      <feature.icon className="w-8 h-8 text-primary-foreground" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-4">
      {feature.title}
    </h3>
    <p className="text-muted-foreground">{feature.description}</p>
  </div>
));

export default memo(function LandingPage() {
  const [email, setEmail] = useState("");

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const tourCards = useMemo(
    () =>
      FEATURED_TOURS.map((tour) => (
        <TripCard
          key={tour.id}
          id={tour.id.toString()}
          image={tour.image}
          title={tour.title}
          location={tour.location}
          duration={tour.duration}
          price={tour.price}
          tag={tour.tag}
          route={TOUR_ROUTES[tour.id]}
          overview={tour.overview}
        />
      )),
    []
  );

  const destinationCards = useMemo(
    () =>
      DESTINATIONS.map((destination, index) => (
        <DestinationCard
          key={`${destination.name}-${index}`}
          destination={destination}
        />
      )),
    []
  );

  // ✅ Clean: no weird dependency array
  const testimonialCards = useMemo(
    () =>
      TESTIMONIALS.map((testimonial, index) => (
        <TestimonialCard
          key={`${testimonial.name}-${index}`}
          name={testimonial.name}
          location={testimonial.location}
          text={testimonial.text}
          rating={testimonial.rating}
          date={testimonial.date}
          avatar={testimonial.avatar}
        />
      )),
    []
  );

  const featureCards = useMemo(
    () =>
      FEATURES.map((feature, index) => (
        <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
      )),
    []
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />


      <HeroSection
        backgroundImage={landingHero}
        title="Asia Discovery Tours"
        subtitle="Discover hidden gems and iconic landmarks with curated experiences for those who say yes to adventure and imagine beyond"
        showCta={false}
        overlay="light"
      />

      {/* Featured Tours */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              New Tours
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked experiences for unforgettable journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourCards}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Next Destination
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the world's most captivating destinations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinationCards}
          </div>
        </div>
      </section>

      {/* ✅ Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What People Think About Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from our travelers
            </p>

            {/* ✅ Debug print */}
            <p className="text-xs text-muted-foreground mt-3">
              TESTIMONIALS count: {TESTIMONIALS?.length ?? "undefined"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ✅ Hardcoded test card to prove section renders */}
            <TestimonialCard
              name="Test User"
              location="Dublin"
              text="If you can see this, the section is rendering."
              rating={5}
              date="Jan 2026"
              avatar="TU"
            />

            {/* ✅ Real testimonials */}
            {testimonialCards}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes our travel experiences special
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">{featureCards}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
});
