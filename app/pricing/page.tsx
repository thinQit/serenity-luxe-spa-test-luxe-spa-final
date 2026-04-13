"use client";

import { motion } from "framer-motion";
import { HeroImage } from "@/components/blocks/HeroImage";
import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function PricingPage() {
  return (
    <div className="bg-background text-white">
      <HeroImage
        imageUrl="/images/product-3.png"
        headline="Premium pricing, transparent value."
        subheadline="Choose a single session or a membership-style plan for consistent care and preferred booking."
        primaryCta={{ label: "Book a Session", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        overlayOpacity="bg-gradient-to-b from-black/70 via-black/55 to-black/70"
      />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <PricingTable
          headline="Choose your plan"
          subheadline="All sessions include a brief intake and a calming post-treatment tea ritual."
          tiers={[
            {
              name: "Essential Reset",
              price: "$149",
              period: "per session",
              description: "A restorative entry point for relaxation and glow.",
              features: ["60-min Massage or Facial", "Aromatherapy upgrade", "Tea ritual"],
              ctaLabel: "Book Essential",
              ctaHref: "/contact",
            },
            {
              name: "Luxe Ritual",
              price: "$229",
              period: "per session",
              description: "Extended time + elevated upgrades for deeper results.",
              features: ["90-min customized treatment", "Hot towel + scalp ritual", "Targeted add-on (choice)"],
              ctaLabel: "Book Luxe",
              ctaHref: "/contact",
              highlighted: true,
            },
            {
              name: "Serenity Membership",
              price: "$189",
              period: "monthly",
              description: "Preferred booking + member value for regular guests.",
              features: ["One 60-min treatment monthly", "10% off add-ons", "Priority scheduling"],
              ctaLabel: "Join Membership",
              ctaHref: "/contact",
            },
          ]}
        />
      </motion.div>

      <motion.div
        id="policies"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <FAQAccordion
          headline="Policies & FAQs"
          subheadline="A few helpful details to keep your experience seamless."
          items={[
            {
              question: "What is your cancellation policy?",
              answer:
                "We kindly ask for at least 24 hours’ notice to reschedule or cancel. Late cancellations may be subject to a fee.",
            },
            {
              question: "Do you offer gift cards?",
              answer:
                "Yes—gift cards are available for any amount and can be used toward services or packages.",
            },
            {
              question: "What should I wear to my appointment?",
              answer:
                "Wear whatever feels comfortable. For massages, you’ll be professionally draped at all times.",
            },
            {
              question: "Can you customize for sensitive skin or pregnancy?",
              answer:
                "Absolutely. Please note your needs in the booking form, and we’ll tailor products and techniques accordingly.",
            },
          ]}
        />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <CTAGlass
          headline="Book your next reset"
          description="Choose a plan, then tell us your preferences. We’ll take care of the rest."
          ctaLabel="Book Now"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Services"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
