import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Scale, FileText, Shield, AlertCircle } from "lucide-react";

const TERMS_SECTIONS = [
  {
    title: "1. Booking and Payment Terms",
    content: [
      "A deposit is required to secure your booking, with the balance due 60 days before departure.",
      "Full payment is required for bookings made within 60 days of departure.",
      "We accept major credit cards, bank transfers, and PayPal payments.",
      "All prices are quoted in USD unless otherwise specified.",
      "Prices are subject to change until booking is confirmed with deposit."
    ]
  },
  {
    title: "2. Cancellation and Refund Policy",
    content: [
      "Cancellations more than 90 days before departure: Full refund minus $200 processing fee.",
      "Cancellations 61-90 days before departure: 50% refund of total trip cost.",
      "Cancellations 31-60 days before departure: 25% refund of total trip cost.",
      "Cancellations within 30 days of departure: No refund available.",
      "Travel insurance is highly recommended to protect against unforeseen circumstances."
    ]
  },
  {
    title: "3. Travel Documents and Requirements",
    content: [
      "Travelers are responsible for ensuring they have valid passports and necessary visas.",
      "Passports must be valid for at least 6 months beyond the return date.",
      "Visa requirements vary by destination and nationality - we provide guidance but ultimate responsibility lies with the traveler.",
      "Health requirements including vaccinations are the traveler's responsibility.",
      "Failure to have proper documentation may result in denied boarding or entry."
    ]
  },
  {
    title: "4. Trip Changes and Modifications",
    content: [
      "Trip modifications are subject to availability and may incur additional costs.",
      "Changes requested within 30 days of departure may not be possible.",
      "Room upgrades and special requests are subject to availability and additional fees.",
      "Itinerary changes due to weather, political situations, or safety concerns may be necessary.",
      "We reserve the right to substitute hotels or activities of similar quality if necessary."
    ]
  },
  {
    title: "5. Liability and Insurance",
    content: [
      "Imagine Beyond Travel acts as an agent for transportation, accommodation, and activity providers.",
      "We are not liable for acts, errors, or omissions of third-party service providers.",
      "Travel insurance is strongly recommended and may be required for certain destinations.",
      "Travelers participate in all activities at their own risk.",
      "Maximum liability is limited to the cost of the trip purchased."
    ]
  },
  {
    title: "6. Health and Safety",
    content: [
      "Travelers must disclose any medical conditions that may affect their ability to travel.",
      "Some activities may have age, health, or physical fitness requirements.",
      "We reserve the right to refuse service to travelers who pose a risk to themselves or others.",
      "Emergency medical evacuation insurance is recommended for international travel.",
      "Travelers should consult healthcare providers regarding destination-specific health requirements."
    ]
  },
  {
    title: "7. Behavior and Conduct",
    content: [
      "Travelers are expected to behave respectfully toward other travelers, guides, and local communities.",
      "Disruptive behavior may result in removal from the trip without refund.",
      "Travelers must comply with local laws and customs at all destinations.",
      "Illegal drug use or excessive alcohol consumption will not be tolerated.",
      "Damage to property caused by travelers will be charged to the responsible party."
    ]
  },
  {
    title: "8. Force Majeure",
    content: [
      "We are not liable for trip cancellations or changes due to circumstances beyond our control.",
      "Force majeure includes but is not limited to: natural disasters, war, terrorism, strikes, and government actions.",
      "In case of force majeure, we will work to provide alternative arrangements or future travel credits.",
      "Refunds for force majeure situations are subject to what we can recover from suppliers.",
      "Travel insurance can provide additional protection for force majeure situations."
    ]
  }
];

const TermsConditions = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-4">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before booking your travel with Imagine Beyond Travel.
          </p>
        </div>
      </section>

      {/* Last Updated Notice */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <FileText className="w-4 h-4" />
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-start space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-primary mt-0.5" />
              <div>
                <h2 className="text-xl font-semibold text-card-foreground mb-3">Important Notice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By booking a trip with Imagine Beyond Travel, you agree to be bound by these Terms and Conditions. 
                  These terms constitute a legally binding agreement between you and Imagine Beyond Travel. 
                  Please read them carefully and contact us if you have any questions before making a booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {TERMS_SECTIONS.map((section, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-3 mt-1.5">•</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Legal Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Governing Law</h3>
              <p className="text-muted-foreground">
                These terms and conditions are governed by the laws of the United States. 
                Any disputes will be resolved through binding arbitration in accordance with 
                the rules of the American Arbitration Association.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Changes to Terms</h3>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms and conditions at any time. 
                Changes will be posted on our website and will apply to bookings made 
                after the effective date of the changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              📞 Call: +1-555-IBT-TRIP
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              📧 Email: legal@imaginebeyondtravel.com
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

TermsConditions.displayName = "TermsConditions";

export default TermsConditions;