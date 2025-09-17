import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Shield, AlertTriangle, Eye, Lock, Phone, MapPin, Heart, Users } from "lucide-react";

const SAFETY_CATEGORIES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Personal Security",
    tips: [
      "Stay aware of your surroundings at all times",
      "Avoid displaying expensive jewelry or electronics",
      "Use hotel safes for valuables and important documents",
      "Keep copies of important documents separate from originals",
      "Trust your instincts - if something feels wrong, leave"
    ]
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Accommodation Safety",
    tips: [
      "Research accommodations thoroughly before booking",
      "Check room safety features (locks, peepholes, fire exits)",
      "Never leave your room key visible or unattended",
      "Use the deadbolt and chain locks when in your room",
      "Keep curtains closed when not in the room"
    ]
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Transportation Safety",
    tips: [
      "Use reputable transportation services and apps",
      "Verify driver identity and license plate before getting in",
      "Sit behind the driver in taxis for easy exit access",
      "Keep doors locked and windows up in unfamiliar areas",
      "Have backup transportation options planned"
    ]
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health & Medical",
    tips: [
      "Carry a basic first aid kit and necessary medications",
      "Know the location of nearest hospitals and clinics",
      "Drink bottled or filtered water in questionable areas",
      "Be cautious with street food and raw ingredients",
      "Consider travel health insurance coverage"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Social Safety",
    tips: [
      "Be cautious when meeting new people while traveling",
      "Avoid excessive alcohol consumption in unfamiliar places",
      "Never leave drinks unattended at bars or restaurants",
      "Travel in groups when possible, especially at night",
      "Inform trusted contacts of your plans and whereabouts"
    ]
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Digital Security",
    tips: [
      "Use VPN when connecting to public Wi-Fi networks",
      "Keep important photos and documents backed up in cloud",
      "Avoid accessing sensitive accounts on public computers",
      "Turn off location sharing on social media while traveling",
      "Keep devices locked with strong passwords or biometrics"
    ]
  }
];

const EMERGENCY_SITUATIONS = [
  {
    situation: "Lost or Stolen Documents",
    steps: [
      "Report to local police immediately and get a police report",
      "Contact your embassy or consulate for replacement assistance",
      "Notify your bank and credit card companies",
      "Contact your travel insurance provider if applicable"
    ]
  },
  {
    situation: "Medical Emergency",
    steps: [
      "Call local emergency services immediately",
      "Contact your travel insurance provider",
      "Notify your embassy if hospitalization is required",
      "Keep all medical receipts for insurance claims"
    ]
  },
  {
    situation: "Natural Disaster",
    steps: [
      "Follow local authorities' evacuation instructions",
      "Contact your embassy to register your safety status",
      "Stay informed through official news sources",
      "Contact family to confirm your safety"
    ]
  }
];

const DESTINATION_RESEARCH = [
  {
    category: "Before You Go",
    items: [
      "Research local laws, customs, and cultural norms",
      "Check government travel advisories for your destination",
      "Learn about common scams targeting tourists",
      "Identify safe neighborhoods and areas to avoid",
      "Research local emergency numbers and services"
    ]
  },
  {
    category: "Local Contacts",
    items: [
      "Save your embassy or consulate contact information",
      "Research reputable local tour operators and guides",
      "Find trusted local transportation options",
      "Identify reliable hospitals and medical facilities",
      "Locate police stations in areas you'll be visiting"
    ]
  }
];

const TravelSafety = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Travel Safety Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your comprehensive guide to staying safe and secure while exploring the world. Travel with confidence and peace of mind.
          </p>
        </div>
      </section>

      {/* Safety Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Essential Safety Guidelines 🛡️
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these comprehensive safety tips to protect yourself while traveling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAFETY_CATEGORIES.map((category, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Situations */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Emergency Response 🚨
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Know how to respond quickly and effectively in emergency situations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {EMERGENCY_SITUATIONS.map((emergency, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-xl text-card-foreground mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-primary mr-2" />
                  {emergency.situation}
                </h3>
                <ol className="space-y-3">
                  {emergency.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                        {stepIndex + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Research */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Research Your Destination 🔍
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proper research is your first line of defense when traveling to new places
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {DESTINATION_RESEARCH.map((section, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border">
                <h3 className="font-bold text-2xl text-card-foreground mb-6 text-center">
                  {section.category}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Numbers */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Universal Emergency Numbers 📱
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-card-foreground mb-2">Europe</h3>
              <p className="text-2xl font-bold text-primary">112</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-card-foreground mb-2">North America</h3>
              <p className="text-2xl font-bold text-primary">911</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-card-foreground mb-2">Australia</h3>
              <p className="text-2xl font-bold text-primary">000</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6">
            Always research local emergency numbers for your specific destination
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Safe, Travel Smart 🌟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Remember, the best adventures happen when you're prepared and confident. Safe travels!
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            Download Safety Checklist
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
});

TravelSafety.displayName = "TravelSafety";

export default TravelSafety;