"use client";

import { motion } from "framer-motion";

import { HeroImage } from "@/components/blocks/HeroImage";
import { Spotlight } from "@/components/ui/backgrounds/Spotlight";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { ParallaxScroll } from "@/components/ui/effects/ParallaxScroll";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { PricingTable } from "@/components/blocks/PricingTable";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="bg-background text-white">
      <div className="relative overflow-hidden">
        <Spotlight className="top-[-200px] left-[-200px] h-[700px] w-[700px]" fill="#7C3AED" />
        <Spotlight className="top-[-260px] right-[-260px] h-[800px] w-[800px]" fill="#4F46E5" />

        <HeroImage
          imageUrl="/images/hero.png"
          headline="Luxury wellness, curated for calm."
          subheadline="Serenity Luxe Spa blends restorative rituals, advanced skincare, and quiet elegance—so you leave feeling renewed, radiant, and grounded."
          primaryCta={{ label: "Book a Session", href: "/contact" }}
          secondaryCta={{ label: "Explore Services", href: "/services" }}
          overlayOpacity="bg-gradient-to-b from-black/70 via-black/55 to-black/70"
        />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <LogoCloud
          headline="Trusted by wellness-minded guests & partners"
          logos={[
            { name: "Luxe Wellness", imageUrl: "/images/product-1.png" },
            { name: "Calm Collective", imageUrl: "/images/product-2.png" },
            { name: "Radiant Skin Lab", imageUrl: "/images/product-3.png" },
            { name: "Serene Retreats", imageUrl: "/images/product-2.png" },
            { name: "Modern Recovery", imageUrl: "/images/product-3.png" },
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
        <FeaturesGrid
          badge="Signature Experience"
          headline="A premium spa experience—thoughtful in every detail"
          subheadline="From the first inhale to the final sip of tea, every element is designed to soothe the nervous system and elevate your glow."
          features={[
            {
              icon: "✨",
              title: "Luxury Rituals",
              description: "Massage, facials, and body treatments crafted for deep relaxation and visible results.",
            },
            {
              icon: "🕯️",
              title: "Calming Atmosphere",
              description: "Soft lighting, quiet rooms, and a refined aesthetic designed for true decompression.",
            },
            {
              icon: "🧴",
              title: "Clinical-Grade Skincare",
              description: "Results-focused protocols with gentle, high-performance products.",
            },
            {
              icon: "🌿",
              title: "Clean & Conscious",
              description: "Thoughtful ingredients and hygienic standards you can feel confident about.",
            },
            {
              icon: "⏱️",
              title: "On-Time Appointments",
              description: "A seamless schedule with unhurried service—your time is respected.",
            },
            {
              icon: "💎",
              title: "Membership Perks",
              description: "Preferred booking, member pricing, and seasonal upgrades for regular guests.",
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
        className="py-10 md:py-16"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Inside Serenity Luxe</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              A glimpse of our calming spaces, signature treatments, and the details that make every visit feel elevated.
            </p>
          </div>
          <ParallaxScroll
            images={[
              "/images/product-1.png",
              "/images/product-2.png",
              "/images/product-3.png",
              "/images/product-2.png",
              "/images/product-1.png",
              "/images/product-1.png"
            ]}
            className="rounded-2xl border border-white/10 bg-background/5"
          />
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <TestimonialsAnimated
          headline="Guests leave glowing"
          subheadline="A few words from clients who come to Serenity Luxe for calm, recovery, and radiant skin."
          testimonials={[
            {
              quote:
                "The most luxurious facial I’ve ever had—my skin looked brighter immediately, and the entire experience felt so calming.",
              name: "Ava R.",
              designation: "Skincare Client",
              src: "/images/product-2.png",
            },
            {
              quote:
                "The massage was deeply restorative. The space is quiet, elegant, and the team is incredibly attentive.",
              name: "Jordan M.",
              designation: "Wellness Guest",
              src: "/images/product-3.png",
            },
            {
              quote:
                "I love the consistency—every visit feels elevated, on-time, and tailored to what my body needs that day.",
              name: "Priya S.",
              designation: "Member",
              src: "/images/product-1.png",
            },
          ]}
          autoplay
        />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <PricingTable
          headline="Simple, premium pricing"
          subheadline="Choose a single session or a membership-style package for ongoing care."
          tiers={[
            {
              name: "Essential Reset",
              price: "$149",
              period: "per session",
              description: "A restorative entry point for relaxation and glow.",
              features: ["60-min Signature Massage or Facial", "Aromatherapy upgrade", "Post-treatment tea ritual"],
              ctaLabel: "Book Essential",
              ctaHref: "/contact",
            },
            {
              name: "Luxe Ritual",
              price: "$229",
              period: "per session",
              description: "Our most-loved elevated experience.",
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
              ctaHref: "/pricing",
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
          headline="Ready to feel like yourself again?"
          description="Book your next session at Serenity Luxe Spa—luxury wellness designed for modern recovery."
          ctaLabel="Book Now"
          ctaHref="/contact"
          secondaryCtaLabel="View Pricing"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </div>
  );
}
