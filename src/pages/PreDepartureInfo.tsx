import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { CheckCircle, MapPin, Calendar, FileText, Shield, Phone } from "lucide-react";

const CHECKLIST_ITEMS = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Travel Documents",
    description: "Ensure your passport is valid (6+ months remaining), obtain necessary visas, and keep copies of all documents."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Travel Insurance",
    description: "Secure comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage."
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Health & Vaccinations",
    description: "Check vaccination requirements, consult your doctor, and pack necessary medications in original containers."
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Banking & Money",
    description: "Notify your bank of travel plans, check foreign transaction fees, and have multiple payment methods available."
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Communication",
    description: "Research international phone plans, download offline maps, and share your itinerary with family/friends."
  }
];

const TRAVEL_TIPS = [
  {
    category: "Packing Essentials",
    tips: [
      "Pack light and leave room for souvenirs",
      "Bring versatile clothing suitable for local weather",
      "Pack important items in carry-on luggage",
      "Include a small first aid kit and personal medications"
    ]
  },
  {
    category: "Safety & Security",
    tips: [
      "Research local customs and dress codes",
      "Keep emergency contacts easily accessible",
      "Register with your embassy if traveling abroad",
      "Use hotel safes for valuables and important documents"
    ]
  },
  {
    category: "Cultural Preparation",
    tips: [
      "Learn basic phrases in the local language",
      "Research local customs and etiquette",
      "Understand tipping practices and currency",
      "Download translation apps for easier communication"
    ]
  }
];

const PreDepartureInfo = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pre-Departure Information
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know before your journey begins. Prepare for an amazing adventure with our comprehensive travel guide.
          </p>
        </div>
      </section>

      {/* Essential Checklist */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Essential Pre-Travel Checklist ✈️
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow this comprehensive checklist to ensure you're fully prepared for your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CHECKLIST_ITEMS.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Travel Tips & Advice 🌟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips to make your travel experience smooth and memorable
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {TRAVEL_TIPS.map((section, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-xl text-card-foreground mb-6 text-center">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Emergency Contacts 🚨
          </h2>
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-card-foreground mb-4">24/7 Travel Support</h3>
                <p className="text-2xl font-bold text-primary mb-2">+1-555-IBT-HELP</p>
                <p className="text-muted-foreground">Available round the clock for any travel emergencies</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-card-foreground mb-4">Email Support</h3>
                <p className="text-lg font-semibold text-primary mb-2">emergency@imaginebeyondtravel.com</p>
                <p className="text-muted-foreground">For non-urgent matters and documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready for Your Adventure? 🌍
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With proper preparation, your journey will be unforgettable. Have questions? Our travel experts are here to help!
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Our Travel Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
});

PreDepartureInfo.displayName = "PreDepartureInfo";

export default PreDepartureInfo;