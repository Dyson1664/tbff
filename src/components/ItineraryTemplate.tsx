import { DayLayout } from "@/components/DayLayout";
import Navbar from "@/components/Navbar";
import { Home, Zap, Plane, Users, UtensilsCrossed, TreePine, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { memo, useMemo, useCallback } from "react";
import { STATIC_STYLES, STATIC_TEXT, SUMMARY_LABELS } from "@/data/itinerary-static";
import Footer from "@/components/common/Footer";
import { DayItinerary } from "@/data/types";
import ResponsiveRoute from "@/components/RouteBar"; // <-- route component


// Book Now Button Component (routes to external Shopify payment)
import { Link } from "react-router-dom";
import { getPayUrlBySlug } from "@/data/payUrls";


const BookNowButton = memo((
  { tripSlug, countryName, title }: { tripSlug?: string; countryName: string; title?: string }
) => {
  const paymentUrl = tripSlug ? getPayUrlBySlug(tripSlug) : '#';

  return (
    <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
      >
        Book Now
      </Button>
    </a>
  );
});


interface WhatsIncludedHighlight {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

interface IncludedItem {
  text: string;
}

interface IncludedSection {
  title: string;
  items: IncludedItem[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface TripHighlight {
  title: string;
  description: string;
  image: string;
}

interface CountryData {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  heroImage: string;
  overviewGallery?: string[]; 
  overviewGallery2x?: (string | null)[];  // <-- new optional gallery for hero left grid
  route?: string[];
  aboutDescription: string[];
  aboutImages: string[];
  whatsIncludedHighlights?: WhatsIncludedHighlight[];
  highlights?: TripHighlight[];
  itinerary: DayItinerary[];
  summary: {
    duration: string;
    activities: string;
    areas: string;
    type: string;
  };
  included: IncludedSection[];
  faqs: FAQ[];
}

interface ItineraryTemplateProps {
  data: CountryData;
}

// Memoized sub-components for better performance
const TripHighlights = memo(({ data }: { data: CountryData }) => {
  // Default highlights if not provided
  const defaultHighlights: TripHighlight[] = [
    {
      title: "Cultural Immersion",
      description: "Experience authentic local traditions, festivals, and customs that bring this destination to life.",
      image: data.aboutImages[0] || data.heroImage
    },
    {
      title: "Iconic Landmarks",
      description: "Visit world-famous monuments and architectural marvels that define this incredible destination.",
      image: data.aboutImages[1] || data.heroImage
    },
    {
      title: "Local Cuisine",
      description: "Savor authentic regional dishes and discover the flavors that make this cuisine unique.",
      image: data.heroImage
    }
  ];

  const highlights = data.highlights || defaultHighlights;

  return (
    <div className="space-y-4">
      {/* Mobile: Just title */}
      <h3 className="md:hidden text-xl font-semibold text-foreground mb-4">Trip Highlights</h3>
      
      <div className="relative">
        {/* Desktop: Carousel with external arrows */}
        <Carousel className="hidden md:block w-full max-w-none md:max-w-md lg:max-w-lg mx-auto">
          {/* Desktop: Title with arrows in same row */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-foreground">Trip Highlights</h3>
            <div className="flex gap-2">
              <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0" />
              <CarouselNext className="relative inset-auto translate-x-0 translate-y-0" />
            </div>
          </div>
          
          <CarouselContent>
            {highlights.map((highlight, index) => (
              <CarouselItem key={index}>
                <div className="space-y-3">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-2xl shadow-md"
                    loading="lazy"
                  />
                  <div className="text-center space-y-2">
                    <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Mobile: Swipeable container with peek */}
        <div className="md:hidden overflow-x-auto overflow-y-hidden scrollbar-none scroll-smooth snap-x snap-mandatory">
          <div className="flex pb-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex-shrink-0 snap-start snap-always" style={{ width: 'calc(100vw - 3rem)', paddingRight: '0.75rem' }}>
                <div className="space-y-3 w-full max-w-80 mx-auto">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-56 object-cover rounded-2xl shadow-md"
                    loading="lazy"
                  />
                  <div className="text-center space-y-2">
                    <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const AboutSection = memo(({ data }: { data: CountryData }) => {
  const countryName = useMemo(() => data.title.split(' ')[0], [data.title]);

  return (
    <div className="mb-16">
      {/* Trip title */}
      <h2 className="text-3xl font-bold text-foreground mb-6 text-center">{data.title}</h2>

      {/* 1-col on mobile, 2-col on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12
          bg-white md:bg-background
          w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          md:w-auto md:left-auto md:right-auto md:ml-0 md:mr-0
          px-4 md:px-8 py-8 rounded-2xl">

        {/* Left col: route + about */}
        <div className="order-1 md:order-none space-y-6 w-full">
          {/* Route: below title, left of highlights */}
          {Array.isArray(data.route) && data.route.length > 1 && (
            <div className="w-full">
              <ResponsiveRoute stops={data.route} />
            </div>
          )}

          {/* About text */}
          {data.aboutDescription.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right col: highlights */}
        <div className="order-2 md:order-none w-full md:flex md:justify-center">
          <TripHighlights data={data} />
        </div>
      </div>

      {/* Book Now Button */}
        <div className="text-center mb-8">
        <BookNowButton tripSlug={data.slug} countryName={countryName} title={data.title} />
        <p className="text-sm text-muted-foreground mt-2">
        Secure your {countryName} adventure today
        </p>
      </div>

    </div>
  );
});

const SummarySection = memo(({ summary }: { summary: CountryData['summary'] }) => (
  <div className={STATIC_STYLES.summaryCard}>
    <h3 className="text-lg font-semibold text-foreground mb-3">{STATIC_TEXT.summaryTitle}</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      <div>
        <span className="text-muted-foreground">{SUMMARY_LABELS.duration}</span>
        <p className="font-medium">{summary.duration}</p>
      </div>
      <div>
        <span className="text-muted-foreground">{SUMMARY_LABELS.activities}</span>
        <p className="font-medium">{summary.activities}</p>
      </div>
      <div>
        <span className="text-muted-foreground">{SUMMARY_LABELS.areas}</span>
        <p className="font-medium">{summary.areas}</p>
      </div>
      <div>
        <span className="text-muted-foreground">{SUMMARY_LABELS.type}</span>
        <p className="font-medium">{summary.type}</p>
      </div>
    </div>
  </div>
));

const IncludedSection = memo(
  ({ included, countryName }: { included: CountryData["included"]; countryName: string }) => (
    <div
      id="whats-included"
      className="mt-16
                 bg-white md:bg-card
                 rounded-2xl md:rounded-xl md:border md:shadow-sm
                 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                 md:w-auto md:left-auto md:right-auto md:ml-0 md:mr-0">
      <div className="max-w-7xl mx-auto px-4 md:px-3 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">{STATIC_TEXT.includedTitle}</h3>
          <p className="text-lg text-muted-foreground">
            Everything you need for an unforgettable {countryName} experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:justify-items-center max-w-6xl mx-auto">
          {included.map((section, index) => (
            <div key={index} className="space-y-4 md:text-center">
              <h4 className="font-semibold text-foreground text-lg">{section.title}</h4>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside marker:text-primary md:text-left">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
);



const WhatsIncludedHighlights = memo(({ highlights }: { highlights?: WhatsIncludedHighlight[] }) => {
  if (!highlights || highlights.length === 0) return null;

  const handleLinkClick = useCallback((url: string) => {
    if (url === "#itinerary") {
      const includedSection = document.getElementById('whats-included');
      if (includedSection) {
        const offset = 100;
        const elementPosition = includedSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div
  className="bg-white md:bg-background
             w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
             md:w-auto md:left-auto md:right-auto md:ml-0 md:mr-0
             py-10 rounded-2xl">
    <div className="max-w-6xl mx-auto px-4 md:px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">WHAT'S INCLUDED</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <IconComponent className="w-12 h-12 text-primary" strokeWidth={1.25} />
                </div>
                <h3 className="text-lg font-bold text-foreground" dangerouslySetInnerHTML={{ __html: highlight.title }} />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
                {highlight.link && (
                  <button 
                    onClick={() => handleLinkClick(highlight.link.url)}
                    className="text-primary hover:text-primary/80 underline text-xs cursor-pointer"
                  >
                    {highlight.link.text}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

const FAQSection = memo(({ faqs, countryName }: { faqs: CountryData['faqs'], countryName: string }) => (
  <div
    className="mt-16
               bg-white md:bg-card
               rounded-2xl md:rounded-xl md:border md:shadow-sm
               w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
               md:w-auto md:left-auto md:right-auto md:ml-0 md:mr-0">
      <div className="max-w-7xl mx-auto px-4 md:px-3 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
        <p className="text-lg text-muted-foreground">Everything you need to know about your {countryName} adventure</p>
      </div>
      
      <Accordion
  type="single"
  collapsible
  className="w-full max-w-4xl mx-auto divide-y divide-gray-200 px-4 md:px-0"
>
  {faqs.map((faq, index) => (
    <AccordionItem
      key={index}
      value={`faq-${index}`}
      className="border-0 rounded-none bg-background"
    >
        <AccordionTrigger className="px-0 md:px-6 py-4 hover:no-underline text-left">
          <span className="font-semibold text-foreground">{faq.question}</span>
        </AccordionTrigger>
        <AccordionContent className="px-0 md:px-6 pb-4">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
    </Accordion>

    </div>
  </div>
));



export const ItineraryTemplate = memo(({ data }: ItineraryTemplateProps) => {
  // Memoize derived values
  const countryName = useMemo(() => data.title.split(' ')[0], [data.title]);

  // ✅ New: compute 4 images for hero left grid (prefer overviewGallery)
  const overviewFour = useMemo(() => {
    if (data.overviewGallery && data.overviewGallery.length) {
      return data.overviewGallery.slice(0, 4);
    }
    // fallback to first 4 day hero images (current behavior)
    return data.itinerary.slice(0, 4).map(d => d.heroImage || data.heroImage);
  }, [data.overviewGallery, data.itinerary, data.heroImage]);
  
  // Scroll to first image function (kept for reference)
  const scrollToFirstImage = useCallback((dayNumber: number) => {
    setTimeout(() => {
      const dayTrigger = document.querySelector(`[value="day-${dayNumber}"] [data-accordion-trigger]`);
      const firstImageElement = document.querySelector(`#day-${dayNumber}-first-image`);
      const targetElement = dayTrigger || firstImageElement;
      if (targetElement) {
        const offset = 280;
        const elementPosition = (targetElement as HTMLElement).getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 150);
  }, []);

  // Scroll to top when accordion opens
  const handleAccordionChange = useCallback((value: string) => {
    if (value) {
      setTimeout(() => {
        const dayNumber = value.replace('day-', '');
        const dayHeaders = document.querySelectorAll('h2');
        for (const header of dayHeaders) {
          if (header.textContent && header.textContent.includes(`Day ${dayNumber}`)) {
            let offsetTop = 0;
            let element = header as HTMLElement;
            while (element) {
              offsetTop += element.offsetTop;
              element = element.offsetParent as HTMLElement;
            }
            window.scrollTo({ top: offsetTop - 150, behavior: 'smooth' });
            break;
          }
        }
      }, 200);
    }
  }, []);

  // Memoize itinerary rendering with accordion
  const itineraryContent = useMemo(() => (
    <Accordion type="single" collapsible className="w-full" onValueChange={handleAccordionChange}>
      {data.itinerary.map((day, index) => (
        <AccordionItem key={day.day} value={`day-${day.day}`} className={`bg-background border-0 ${
          index === 0 ? 'rounded-t-2xl' : ''
        } ${
          index === data.itinerary.length - 1 ? 'rounded-b-2xl' : ''
        }`}>
          <div className={`${index < data.itinerary.length - 1 ? 'border-b border-gray-200' : ''} mx-0 md:mx-6`}>
            <AccordionTrigger className="px-4 md:px-0 py-4 hover:no-underline group">
              <div className="w-full flex items-baseline gap-2 md:gap-4 text-left">
                <h2 className="whitespace-nowrap flex-shrink-0 text-2xl font-bold text-foreground">
                  Day {day.day}
                </h2>
                <span aria-hidden="true" className="mx-2 text-muted-foreground/40">|</span>
                <h3 className="min-w-0 break-words text-base md:text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-200">
                  {day.title}
                </h3>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent className="px-0 pb-0">
            <DayLayout
              dayNumber={day.day}
              date={day.date}
              location={day.location || day.title}
              heroImage={day.heroImage || data.heroImage}
              description={day.description || `Experience the wonders of ${day.title} in this unforgettable day of your journey.`}
              carouselImages={day.galleryImages || []}
              accommodation={day.accommodation}
              transportation={day.transportation}
              meals={day.meals || "Breakfast"}
              highlights={day.highlights || day.activities?.map(activity => activity.title).join(", ") || "Explore and discover"}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ), [data.itinerary, data.heroImage, handleAccordionChange]);

  return (
    <div className={STATIC_STYLES.gradient}>
      <Navbar />
      
      {/* Hero Section (custom) */}
      <section className="relative h-[70vh] flex overflow-hidden md:mx-8 lg:mx-16 xl:mx-24 md:rounded-2xl">
        {/* Mobile: Show only main image */}
        <div className="md:hidden relative w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${data.heroImage})` }}
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
              <div className="flex items-center justify-center gap-2 text-base">
                <MapPin className="w-4 h-4" />
                <span>{data.location} • {data.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:flex w-full h-full">
          {/* Left side: 4-image grid (35% of screen) */}
          <div className="w-[35%] h-full grid grid-cols-2 grid-rows-2 gap-0 border-r border-white/20">
            {overviewFour.map((src, index) => {
  const src2x = data.overviewGallery2x?.[index] || undefined;
  return (
    <div key={index} className="relative h-full w-full overflow-hidden">
      <img
        src={src}
        srcSet={src2x ? `${src} 1x, ${src2x} 2x` : undefined}
        sizes="(min-width:1280px) 17vw, (min-width:1024px) 17vw, 50vw"
        alt={`${data.title} overview ${index + 1}`}
        className="h-full w-full object-cover"
        decoding="async"
        loading={index < 2 ? "eager" : "lazy"}
      />
    </div>
  );
})}

          </div>

          {/* Right side: Main hero image (65% of screen) */}
          <div className="w-[65%] relative">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${data.heroImage})` }}
            />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
              <div className="text-center text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-3">{data.title}</h1>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  <span>{data.location} • {data.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Overview */}
      <div className="max-w-6xl mx-auto px-4 md:px-3 py-12">
        <AboutSection data={data} />

        {/* What's Included Highlights */}
        <WhatsIncludedHighlights highlights={data.whatsIncludedHighlights} />
        
        {/* Itinerary Title */}
        <div className="text-center mt-10 md:mt-16 mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">{STATIC_TEXT.itineraryTitle}</h2>
          <p className="text-lg text-muted-foreground">A detailed day-by-day guide to your {countryName} adventure</p>
        </div>

        {/* Daily Itinerary (full-bleed on mobile) */}
            <div
              className="bg-white md:bg-transparent
                         w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                         md:w-auto md:left-auto md:right-auto md:ml-0 md:mr-0 rounded-2xl">
              {itineraryContent}
            </div>
        
        {/* Trip Summary */}
        <SummarySection summary={data.summary} />

        {/* What's Included Section */}
        <IncludedSection included={data.included} countryName={countryName} />
        
        {/* FAQ Section */}
        <FAQSection faqs={data.faqs} countryName={countryName} />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
});


export default ItineraryTemplate;
