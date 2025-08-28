import { DayLayout } from "@/components/DayLayout";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/common/HeroSection";
import { Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { memo, useMemo, useCallback } from "react";
import { STATIC_STYLES, STATIC_TEXT, SUMMARY_LABELS } from "@/data/itinerary-static";
import { getPayUrlBySlug } from '@/data/payUrls';
import Footer from "@/components/common/Footer";
import { DayItinerary } from "@/data/types";

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

interface CountryData {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  heroImage: string;
  aboutDescription: string[];
  aboutImages: string[];
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
const AboutSection = memo(({ data }: { data: CountryData }) => {
  const countryName = useMemo(() => data.title.split(' ')[0], [data.title]);
  
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-6 text-center">{STATIC_TEXT.aboutTitle}</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          {data.aboutDescription.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.aboutImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`${data.title} destination ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      
      {/* Book Now Button */}
      <div className="text-center mb-8">
        <BookNowButton tripSlug={data.slug} countryName={countryName} />
        <p className="text-sm text-muted-foreground mt-2">Secure your {countryName} adventure today</p>
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

const IncludedSection = memo(({ included, countryName }: { included: CountryData['included'], countryName: string }) => (
  <div className={STATIC_STYLES.includedSection}>
    <div className="max-w-7xl mx-auto px-[18px] md:px-6 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">{STATIC_TEXT.includedTitle}</h3>
        <p className="text-lg text-muted-foreground">Everything you need for an unforgettable {countryName} experience</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {included.map((section, index) => (
          <div key={index} className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">{section.title}</h4>
            <ul className="space-y-3 text-muted-foreground">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const FAQSection = memo(({ faqs, countryName }: { faqs: CountryData['faqs'], countryName: string }) => (
  <div className="mt-16 bg-card rounded-xl border border-gray-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-[18px] md:px-6 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
        <p className="text-lg text-muted-foreground">Everything you need to know about your {countryName} adventure</p>
      </div>
      
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-lg bg-background shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
              <span className="font-semibold text-foreground">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
));

const ActionButtons = memo(() => {
  const handleShare = useCallback(() => {
    // Share functionality
    console.log('Share clicked');
  }, []);

  const handleSave = useCallback(() => {
    // Save functionality  
    console.log('Save clicked');
  }, []);

  return (
    <div className="flex gap-3">
      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleShare}>
        <Share2 className="w-4 h-4" />
        {STATIC_TEXT.shareText}
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleSave}>
        <Heart className="w-4 h-4" />
        {STATIC_TEXT.saveText}
      </Button>
    </div>
  );
});

export const ItineraryTemplate = memo(({ data }: ItineraryTemplateProps) => {
  // Memoize derived values
  const countryName = useMemo(() => data.title.split(' ')[0], [data.title]);
  
  // Scroll to first image function
  const scrollToFirstImage = useCallback((dayNumber: number) => {
    setTimeout(() => {
      // Target the accordion trigger (day header) or first image
      const dayTrigger = document.querySelector(`[value="day-${dayNumber}"] [data-accordion-trigger]`);
      const firstImageElement = document.querySelector(`#day-${dayNumber}-first-image`);
      
      // Use the day trigger if available, otherwise fall back to first image
      const targetElement = dayTrigger || firstImageElement;
      
      if (targetElement) {
        const offset = 280; // Much higher offset to show complete Day header and title
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150); // Delay to allow accordion to expand
  }, []);

  // Scroll to top when accordion opens
  const handleAccordionChange = useCallback((value: string) => {
    if (value) {
      setTimeout(() => {
        const trigger = document.querySelector(`[data-accordion-item][value="${value}"] [data-accordion-trigger]`);
        if (trigger) {
          trigger.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 150);
    }
  }, []);

  // Memoize itinerary rendering with accordion
  const itineraryContent = useMemo(() => (
    <Accordion type="single" collapsible className="w-full space-y-4" onValueChange={handleAccordionChange}>
      {data.itinerary.map((day) => (
        <AccordionItem key={day.day} value={`day-${day.day}`} className="border border-gray-200 rounded-lg bg-background shadow-sm">
          <AccordionTrigger className="px-6 py-4 hover:no-underline group">
            <div className="flex items-center gap-4 text-left">
              <h2 className="text-2xl font-bold text-foreground">Day {day.day.toString().padStart(2, '0')}</h2>
              <div>
                <h3 className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-200">{day.location || day.title}</h3>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-0 pb-0">
            <DayLayout
              dayNumber={day.day}
              date={day.date}
              location={day.location || day.title}
              heroImage={day.heroImage || data.heroImage}
              description={day.description || `Experience the wonders of ${day.title} in this unforgettable day of your journey.`}
              experiences={day.experiences || []}
              accommodation={day.accommodation}
              transportation={day.transportation}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ), [data.itinerary, data.heroImage, handleAccordionChange]);

  return (
    <div className={STATIC_STYLES.gradient}>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage={data.heroImage}
        title={data.title}
        subtitle={data.subtitle}
        location={data.location}
        duration={data.duration}
        height={STATIC_STYLES.heroHeight}
        overlay="light"
      />

      {/* Header with Actions */}
      <div className={STATIC_STYLES.stickyHeader}>
        <div className="max-w-6xl mx-auto px-[18px] md:px-6 py-4">
          <div className="flex items-center justify-between">
            <ActionButtons />
          </div>
        </div>
      </div>

      {/* Country Overview */}
      <div className="max-w-6xl mx-auto px-[18px] md:px-6 py-12">
        <AboutSection data={data} />

        {/* Itinerary Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{STATIC_TEXT.itineraryTitle}</h2>
          <p className="text-lg text-muted-foreground">A detailed day-by-day guide to your {countryName} adventure</p>
        </div>

        {/* Daily Itinerary */}
        {itineraryContent}
        
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

// Book Now Button Component
const BookNowButton = memo(({ tripSlug, countryName }: { tripSlug?: string; countryName: string }) => {
  console.log('BookNowButton - tripSlug:', tripSlug, 'countryName:', countryName);
  const href = getPayUrlBySlug(tripSlug || '');
  console.log('BookNowButton - resolved href:', href);
  const isDisabled = href === '#';
  
  if (isDisabled) {
    return (
      <Button 
        size="lg" 
        className="pointer-events-none opacity-50 px-8 py-4 text-lg font-semibold"
        aria-disabled="true"
      >
        {STATIC_TEXT.bookNow}
      </Button>
    );
  }
  
  return (
    <Button 
      size="lg" 
      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
      onClick={(e) => {
        e.preventDefault();
        console.log('Button clicked, opening URL:', href);
        // Try multiple approaches to ensure it works
        try {
          const newWindow = window.open(href, '_blank');
          if (!newWindow) {
            // Fallback if popup blocked
            window.location.href = href;
          }
        } catch (error) {
          console.error('Failed to open URL:', error);
          window.location.href = href;
        }
      }}
    >
      {STATIC_TEXT.bookNow}
    </Button>
  );
});

export default ItineraryTemplate;