import { ItineraryCard } from "@/components/ItineraryCard";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/common/HeroSection";
import { VirtualizedItinerary } from "@/components/VirtualizedItinerary";
import { Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { memo, useMemo, useCallback } from "react";
import { STATIC_STYLES, STATIC_TEXT, SUMMARY_LABELS } from "@/data/itinerary-static";
import { getPayUrl } from '@/data/payUrls';

interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
}

interface DayItinerary {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

interface IncludedItem {
  text: string;
}

interface IncludedSection {
  title: string;
  items: IncludedItem[];
}

interface CountryData {
  id: string;
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
        <BookNowButton tripId={data.id} countryName={countryName} />
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
    <div className="max-w-7xl mx-auto px-6 py-16">
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
  
  // Memoize itinerary rendering with virtual scrolling for large days
  const itineraryContent = useMemo(() => (
    <Accordion type="single" collapsible defaultValue="day-1" className="space-y-4">
      {data.itinerary.map((day) => (
        <AccordionItem key={day.day} value={`day-${day.day}`} className={STATIC_STYLES.accordionItem}>
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center gap-4">
              <div className={STATIC_STYLES.dayBadge}>
                <span className="text-white font-bold text-lg">{day.day}</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <span className="text-sm font-medium">{day.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{day.title}</h3>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <VirtualizedItinerary activities={day.activities} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ), [data.itinerary]);

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
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <ActionButtons />
          </div>
        </div>
      </div>

      {/* Country Overview */}
      <div className="max-w-6xl mx-auto px-6 py-12">
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
      </div>
    </div>
  );
});

// Book Now Button Component
const BookNowButton = memo(({ tripId, countryName }: { tripId: string; countryName: string }) => {
  const payUrl = getPayUrl(tripId);
  const isDisabled = payUrl === '#';
  
  if (isDisabled) {
    return (
      <Button 
        size="lg" 
        className="bg-muted hover:bg-muted text-muted-foreground px-8 py-4 text-lg font-semibold cursor-not-allowed"
        disabled
      >
        {STATIC_TEXT.bookNow}
      </Button>
    );
  }
  
  return (
    <a href={payUrl} target="_blank" rel="noopener noreferrer">
      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
        {STATIC_TEXT.bookNow}
      </Button>
    </a>
  );
});

export default ItineraryTemplate;