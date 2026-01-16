import React from "react";
import Navbar from "@/components/Navbar";
import TBFFFooter from "@/components/common/TBFFFooter";
import { Scale, Shield, AlertCircle } from "lucide-react";

const BRAND_TEAL = "#0FC2BF";

const TERMS_SECTIONS = [
  {
    title: "1. Parties, Contract & Acceptance",
    type: "paragraphs",
    content: [
      "These Terms & Conditions apply to all tours marketed under the TravelBFF brand and operated by IBT Tours (\"IBT\"). TravelBFF acts solely as a brand, community host, and promotional partner. IBT Tours (Imagine Beyond Travel) is the tour operator, merchant of record, and sole contracting party.",
      "By booking a tour, you enter into a legally binding contract with IBT Tours. Payment of any booking fee, deposit, or balance confirms you have read, understood, and agreed to these Terms & Conditions in full.",
      "Only these Terms & Conditions, your booking confirmation, and the published tour inclusions/exclusions form part of your contract. Social media posts, influencer content, or verbal statements do not form part of the contract unless confirmed in writing by IBT."
    ]
  },
  {
    title: "2. Booking, Payment & Merchant of Record",
    content: [
      "The person making the booking (the \"Lead Booker\") confirms they have authority to accept these Terms on behalf of all participants and accepts financial responsibility for the booking.",
      "IBT Tours is the merchant of record and processes payments via Shopify Payments or authorized processors.",
      "A non-refundable booking fee is required to secure your place. This fee covers administrative and third-party payment processing costs and is non-refundable except where required by law.",
      "The remaining balance must be paid in full no later than 90 days prior to tour start. Failure to pay may result in cancellation with all amounts forfeited.",
      "All prices are quoted and charged in United States Dollars (USD).",
      "All participants must be 18 years of age or older at the time of booking."
    ]
  },
  {
    title: "3. Transfers & Name Changes",
    content: [
      "Bookings may be transferred to another person for the same tour date only, subject to written notice and approval.",
      "The replacement traveler must meet all tour requirements and accept these Terms.",
      "Full payment must be received no later than 90 days prior to departure.",
      "Any supplier-imposed fees, fare differences, or administrative costs apply.",
      "A booking transfer fee of $75 USD per person applies.",
      "IBT reserves the right to refuse transfers where deadlines or supplier rules are not met."
    ]
  },
  {
    title: "4. Cancellations & Refunds",
    content: [
      "90 days or more before tour start: 100% refund of amounts paid minus the non-refundable booking fee.",
      "89 days or fewer before tour start: No refund. All payments are forfeited.",
      "No refunds for late arrival, early departure, missed services, flight disruptions, illness, personal circumstances, weather, or change of mind.",
      "Non-recoverable costs include accommodation deposits, internal flights, transport, guides, permits, and third-party services.",
      "If IBT cancels a tour, a refund of all amounts paid directly to IBT will be issued for tour land services only.",
      "Tours are subject to minimum participant numbers and may be cancelled if minimums are not met."
    ]
  },
  {
    title: "5. Chargebacks & Payment Disputes",
    content: [
      "Customers agree to contact IBT directly before initiating a chargeback or payment dispute.",
      "Initiating a chargeback after accepting these Terms may be considered a breach of contract.",
      "IBT reserves the right to recover disputed amounts, chargeback fees, and administrative costs.",
      "Refund and cancellation policies apply regardless of any chargeback attempt."
    ]
  },
  {
    title: "6. Travel & Medical Insurance (Mandatory)",
    content: [
      "Adequate travel insurance is mandatory and must cover medical expenses, emergency evacuation, repatriation, trip cancellation, interruption, and personal liability.",
      "Participants are responsible for ensuring they are medically and physically fit to travel.",
      "Failure to maintain adequate insurance releases IBT from liability for losses that would otherwise be covered."
    ]
  },
  {
    title: "7. Health, Fitness & Medical Disclosure",
    content: [
      "Participants must disclose any medical condition, disability, pregnancy, allergy, or injury prior to departure.",
      "IBT may require medical clearance or restrict participation for safety reasons.",
      "Failure to disclose material medical information may result in denial of participation without refund.",
      "Cancellations due to medical or pregnancy-related reasons are subject to the standard cancellation policy."
    ]
  },
  {
    title: "8. Passports, Visas & Entry Requirements",
    content: [
      "Participants are responsible for complying with all passport, visa, vaccination, and entry requirements.",
      "Passports must generally be valid for at least six (6) months beyond tour end date.",
      "IBT is not liable for denied boarding or entry."
    ]
  },
  {
    title: "9. Airfare & Transportation",
    content: [
      "International flights are not included unless explicitly stated.",
      "IBT is not responsible for airline delays, cancellations, missed connections, or lost baggage.",
      "Missed tour services due to flight disruptions are non-refundable."
    ]
  },
  {
    title: "10. Itinerary Changes",
    content: [
      "IBT reserves the right to modify itineraries, accommodations, transport, or activities due to operational, safety, weather, or supplier reasons.",
      "Unused services are non-refundable.",
      "Alternative arrangements may be offered but are not guaranteed."
    ]
  },
  {
    title: "11. Assumption of Risk & Liability",
    content: [
      "Group travel involves inherent risks including illness, accidents, political instability, weather events, and limited medical facilities.",
      "Participation is voluntary and at your own risk.",
      "IBT is not liable except where loss is directly caused by proven negligence."
    ]
  },
  {
    title: "12. Participant Conduct",
    content: [
      "IBT reserves the right to remove any participant for unsafe, disruptive, abusive, illegal, or inappropriate behavior without refund."
    ]
  },
  {
    title: "13. Force Majeure & Extraordinary Events",
    content: [
      "IBT is not liable for delays, changes, or cancellations caused by events beyond its control including natural disasters, pandemics, government actions, civil unrest, supplier failure, or transportation disruptions.",
      "IBT may, acting reasonably and in good faith, modify, suspend, shorten, or cancel tours where required for safety, operational, legal, or force majeure reasons, or where minimum participation requirements are not met.",
      "No refunds will be issued for fear of travel, perceived risk, or media coverage where the tour continues lawfully."
    ]
  },
  {
    title: "14. Images & Marketing",
    content: [
      "By participating in an IBT tour, you grant a perpetual, worldwide, royalty-free license for use of photos or videos featuring your likeness for marketing purposes."
    ]
  },
  {
    title: "15. Complaints",
    content: [
      "Issues must be raised immediately with the group leader during the tour.",
      "Written complaints must be submitted within 30 days of tour completion."
    ]
  },
  {
    title: "16. Governing Law & Jurisdiction",
    content: [
      "These Terms & Conditions are governed by the laws of the State of Colorado, USA.",
      "Any disputes shall be subject to the exclusive jurisdiction of Colorado courts."
    ]
  },
  {
    title: "17. Privacy & Communications",
    content: [
      "By booking, you consent to receive transactional communications related to your booking and acknowledge IBT’s Privacy Policy."
    ]
  }
];

const TermsConditions = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-4">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            IBT Tours – Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Updated 2026 · Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card border rounded-lg p-8 flex gap-3">
            <AlertCircle className="w-6 h-6 text-primary mt-1" />
            <p className="text-muted-foreground leading-relaxed">
              These Terms & Conditions apply to all TravelBFF-branded tours operated by IBT Tours (Imagine Beyond Travel).
              Please read carefully before booking.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-8">
      {TERMS_SECTIONS.map((section, index) => (
        <div key={index} className="bg-card rounded-lg p-8 border border-border">
          <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
            <Shield className="w-5 h-5 text-primary mr-3" />
            {section.title}
          </h3>

          {section.type === "paragraphs" ? (
            <div className="space-y-4">
              {section.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--brand-teal)]">
              {section.content.map((item: string, i: number) => (
                <li key={i} className="text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
      <TBFFFooter />
    </div>
  );
});

TermsConditions.displayName = "TermsConditions";
export default TermsConditions;
