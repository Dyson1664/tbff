import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MapPin, Clock, CreditCard, Plane, Shield, Users, Calendar } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    title: "Booking & Planning",
    icon: <Calendar className="w-5 h-5" />,
    color: "bg-blue-500/10 border-blue-200",
    iconColor: "text-blue-600",
    questions: [
      {
        question: "How far in advance should I book my trip?",
        answer: "We recommend booking 2-3 months in advance for the best prices and availability. However, we can often arrange last-minute trips with 2-4 weeks notice, though options may be more limited."
      },
      {
        question: "Can I customize my itinerary?",
        answer: "Absolutely! All our trips can be customized to match your interests, budget, and travel style. Our expert travel consultants will work with you to create your perfect adventure."
      },
      {
        question: "What's included in the trip price?",
        answer: "Trip inclusions vary by destination, but typically include accommodations, most meals, guided tours, entrance fees, and ground transportation. International flights and personal expenses are usually separate."
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes! We offer discounts for groups of 6 or more travelers. Contact us for special group pricing and customized itineraries for your friends, family, or organization."
      },
      {
        question: "What if I need to cancel my trip?",
        answer: "Cancellation policies vary by trip and timing. We strongly recommend travel insurance to protect your investment. Our team will explain all policies before booking and help you understand your options."
      }
    ]
  },
  {
    title: "Travel Requirements",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-green-500/10 border-green-200",
    iconColor: "text-green-600",
    questions: [
      {
        question: "Do I need a visa for my destination?",
        answer: "Visa requirements depend on your nationality and destination. We'll provide detailed information about visa requirements and can assist with the application process for most destinations."
      },
      {
        question: "What vaccinations do I need?",
        answer: "Vaccination requirements vary by destination. We recommend consulting with a travel health clinic 4-6 weeks before departure. We'll provide health information for your specific destinations."
      },
      {
        question: "How early should I arrive at the airport?",
        answer: "For international flights, arrive 3 hours early. For domestic flights, 2 hours is usually sufficient. We'll provide detailed departure information in your pre-trip documentation."
      },
      {
        question: "Can I travel if my passport expires soon?",
        answer: "Most countries require your passport to be valid for 6 months beyond your travel dates. Check your passport expiration date and renew if necessary well before your trip."
      },
      {
        question: "What should I pack for my destination?",
        answer: "We provide detailed packing lists tailored to your specific destination and travel season. Generally, pack light, bring comfortable walking shoes, and leave room for souvenirs!"
      }
    ]
  },
  {
    title: "During Your Trip",
    icon: <MapPin className="w-5 h-5" />,
    color: "bg-purple-500/10 border-purple-200",
    iconColor: "text-purple-600",
    questions: [
      {
        question: "Will I have Wi-Fi and internet access?",
        answer: "Most hotels and many restaurants offer Wi-Fi. We recommend getting an international data plan or local SIM card for reliable connectivity while exploring."
      },
      {
        question: "What if I get sick during my trip?",
        answer: "We provide 24/7 emergency support and can help you find medical care. Travel insurance with medical coverage is highly recommended for all international trips."
      },
      {
        question: "How much spending money should I bring?",
        answer: "This varies by destination and your spending habits. We provide spending guidelines for each location, covering meals, shopping, tips, and optional activities."
      },
      {
        question: "Are your tour guides local?",
        answer: "Yes! We work with experienced local guides who are passionate about sharing their culture and knowledge. They provide authentic insights you won't find in guidebooks."
      },
      {
        question: "What if I have dietary restrictions?",
        answer: "We can accommodate most dietary needs with advance notice. Inform us of any allergies or restrictions when booking, and we'll coordinate with restaurants and hotels."
      }
    ]
  },
  {
    title: "Payment & Insurance",
    icon: <CreditCard className="w-5 h-5" />,
    color: "bg-orange-500/10 border-orange-200",
    iconColor: "text-orange-600",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, bank transfers, and PayPal. A deposit is required to secure your booking, with the balance due 60 days before departure."
      },
      {
        question: "Do I need travel insurance?",
        answer: "While not mandatory, we strongly recommend comprehensive travel insurance covering trip cancellation, medical emergencies, and lost luggage. We can help you find the right coverage."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees! We provide transparent pricing upfront. Any additional costs (like optional activities or meals not included) are clearly outlined in your itinerary."
      },
      {
        question: "Can I pay in installments?",
        answer: "Yes! We offer flexible payment plans. You can split your payment over several months leading up to your departure date. Contact us to arrange a payment schedule that works for you."
      },
      {
        question: "What happens if my flight is delayed or cancelled?",
        answer: "We monitor all flights and will assist with rebooking and arrangements. Travel insurance can cover additional costs due to flight disruptions. Our 24/7 support team is always available to help."
      }
    ]
  }
];

const FAQs = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-4">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions 🤔
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Find everything you need to know about traveling with Imagine Beyond Travel.
          </p>
        </div>
      </section>

      {/* Fun Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {FAQ_CATEGORIES.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`rounded-2xl border-2 p-6 ${category.color}`}>
                <div className="flex items-center mb-6">
                  <div className={`${category.iconColor} mr-3`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="bg-card/50 rounded-lg border border-border/50 px-4"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                        <span className="flex items-start">
                          <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                            {categoryIndex * 5 + index + 1}
                          </span>
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 pl-9">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Still Have Questions? 💬
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see your question answered? Our friendly travel experts are here to help you plan your perfect adventure!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              📞 Call Us: +1-555-IBT-TRIP
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              📧 Email Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

FAQs.displayName = "FAQs";

export default FAQs;