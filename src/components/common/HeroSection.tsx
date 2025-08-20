import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import { getPayUrl } from '@/data/payUrls';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  location?: string;
  duration?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  tag?: string;
  onCtaClick?: () => void;
  tripId?: string;
  height?: string;
  overlay?: "light" | "medium" | "dark";
}

export const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  location,
  duration,
  showCta = false,
  ctaText = "Book Now",
  ctaVariant = "default",
  tag,
  onCtaClick,
  tripId,
  height = "h-[70vh]",
  overlay = "medium"
}: HeroSectionProps) => {
  const overlayClass = {
    light: "bg-black/20",
    medium: "bg-black/40",
    dark: "bg-black/60"
  }[overlay];

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        {tag && (
          <div className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">{tag}</span>
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          {subtitle}
        </p>
        {(location || duration) && (
          <div className="flex items-center justify-center gap-2 text-lg mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <MapPin className="w-5 h-5" />
            <span>{location}{duration && ` • ${duration}`}</span>
          </div>
        )}
        {showCta && (
          tripId ? (
            (() => {
              const payUrl = getPayUrl(tripId);
              const isDisabled = payUrl === '#';
              
              if (isDisabled) {
                return (
                  <Button 
                    size="lg" 
                    variant="outline"
                    disabled
                    className="mt-6 text-lg px-8 py-4 cursor-not-allowed animate-fade-in"
                    style={{animationDelay: '0.6s'}}
                  >
                    {ctaText}
                  </Button>
                );
              }
              
              return (
                <a href={payUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant={ctaVariant}
                    className="mt-6 text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in"
                    style={{animationDelay: '0.6s'}}
                  >
                    {ctaText}
                  </Button>
                </a>
              );
            })()
          ) : (
            <Button 
              size="lg" 
              variant={ctaVariant}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold animate-fade-in"
              style={{animationDelay: '0.6s'}}
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          )
        )}
      </div>
    </section>
  );
};