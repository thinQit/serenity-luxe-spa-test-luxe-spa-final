"use client";

import { motion } from "framer-motion";
import { HeroImage } from "@/components/blocks/HeroImage";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-white">
      <HeroImage
        imageUrl="/images/product-1.png"
        headline="Services designed for calm, glow, and recovery."
        subheadline="Choose from signature massages, advanced facials, and body rituals—each tailored to your goals and comfort."
        primaryCta={{ label: "Book a Session", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        overlayOpacity="bg-gradient-to-b from-black/70 via-black/55 to-black/70"
      />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <FeaturesGrid
          badge="Core Offerings"
          headline="Signature treatments"
          subheadline="Premium essentials with elevated upgrades—crafted to feel indulgent and deliver results."
          features={[
            { icon: "💆", title: "Signature Massage", description: "Customized pressure, aromatherapy, and a calming finish ritual." },
            { icon: "🧖", title: "Luxe Facial", description: "Deep cleanse, targeted actives, and hydration for a refined glow." },
            { icon: "🌙", title: "Sleep Reset Ritual", description: "Gentle bodywork + scalp ritual to unwind the nervous system." },
            { icon: "🫧", title: "Body Polish + Hydration", description: "Exfoliation and moisture infusion for soft, radiant skin." },
            { icon: "🧊", title: "Recovery Add-Ons", description: "Targeted enhancements for tension, puffiness, and post-workout recovery." },
            { icon: "🌿", title: "Sensitive Skin Care", description: "Barrier-support protocols with calm-first product selection." },
          ]}
        />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-white/70">Treatment Menu</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Choose your ritual</h2>
            <p className="mt-4 text-white/70">
              Explore popular options. We’ll personalize duration, pressure, and focus areas during intake.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                {
                  title: "60-min Signature Massage",
                  description: "A full-body reset with customized pressure and aromatherapy.",
                  link: "/pricing",
                },
                {
                  title: "90-min Luxe Massage",
                  description: "Extended time for deeper release, plus a scalp ritual finish.",
                  link: "/pricing",
                },
                {
                  title: "Glow Facial",
                  description: "Brightening + hydration for an immediate, refined glow.",
                  link: "/pricing",
                },
                {
                  title: "Clarifying Facial",
                  description: "Congestion-focused care with gentle, effective exfoliation.",
                  link: "/pricing",
                },
                {
                  title: "Body Polish Ritual",
                  description: "Exfoliation + hydration for silky, radiant skin.",
                  link: "/pricing",
                },
                {
                  title: "Add-Ons",
                  description: "Hot towels, scalp ritual, targeted recovery, and more.",
                  link: "/contact",
                },
              ]}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <CTAGlass
          headline="Not sure what to book?"
          description="Tell us your goals—relaxation, glow, or recovery—and we’ll recommend the ideal service."
          ctaLabel="Get a Recommendation"
          ctaHref="/contact"
          secondaryCtaLabel="See Pricing"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </div>
  );
}
