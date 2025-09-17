import { memo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { HeroSection } from "@/components/common/HeroSection";
import landingHero from "@/assets/landing-hero.jpg";

// Founders data
const FOUNDERS_INFO = {
  description: "Founded in January 2023 by Darrin and Dave, Imagine Beyond Travel was born from a shared passion for creating extraordinary travel experiences. With their combined 14+ years of experience in the travel industry and operations, they are committed to providing exceptional customer service while continuously innovating to make every journey even more memorable."
};

export default memo(function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage={landingHero}
        title="About Us"
        subtitle="Passionate travelers creating unforgettable experiences"
        showCta={false}
        overlay="light"
      />

      {/* Our Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full"></div>
                <img 
                  src={landingHero} 
                  alt="Travel adventure"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to create unique, fun, and unforgettable travel experiences. Working with local communities, we aim to leave a trail of meaningful connections and a positive impact wherever we go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a vibrant, inclusive, and responsible travel community. A world where travel is not only for new experiences but also a positive impact for the places and people it touches.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400/30 rounded-full"></div>
              <img 
                src={landingHero} 
                alt="Travel community"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full opacity-20"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Purpose</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our purpose is to form lifelong connections and make a positive change in every community we visit and the people we meet. We believe travel should enrich both the traveler and the destination.
          </p>
          <div className="absolute -bottom-8 right-1/4 w-16 h-16 bg-red-400/20 rounded-full"></div>
          <div className="absolute top-1/2 right-8 text-4xl opacity-60">✨</div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">The passionate people behind your amazing travel experiences</p>
          </div>
          
          <div className="text-center">
            {/* Team Photo Placeholder */}
            <div className="w-64 h-48 mx-auto mb-8 bg-muted rounded-2xl border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Team Photo</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Darrin & Dave</h3>
            <p className="text-primary font-medium mb-6">Spoofer 1 and spoofer 2</p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
              {FOUNDERS_INFO.description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});
