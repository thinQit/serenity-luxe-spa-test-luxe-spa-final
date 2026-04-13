"use client";

import { motion } from "framer-motion";
import { HeroImage } from "@/components/blocks/HeroImage";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioPage() {
  return (
    <div className="bg-background text-white">
      <HeroImage
        imageUrl="/images/product-2.png"
        headline="A glimpse of Serenity Luxe"
        subheadline="Explore our space, details, and treatment moments—crafted to feel calm, elegant, and premium."
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
        <GalleryMasonry
          headline="Space & treatment highlights"
          subheadline="A curated look at our calming interiors and signature rituals."
          images={[
            { url: "/images/hero.png", alt: "Serenity Luxe Spa hero", caption: "Calm-first design" },
            { url: "/images/product-1.png", alt: "Treatment room", caption: "Quiet luxury treatment rooms" },
            { url: "/images/product-2.png", alt: "Skincare products", caption: "High-performance skincare" },
            { url: "/images/product-3.png", alt: "Massage ritual", caption: "Signature massage rituals" },
            { url: "/images/product-2.png", alt: "Relaxation lounge", caption: "Post-treatment tea ritual" },
            { url: "/images/product-1.png", alt: "Wellness details", caption: "Thoughtful details throughout" },
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
          headline="Want a personalized ritual?"
          description="Tell us what you’re looking for and we’ll tailor a session that fits your goals."
          ctaLabel="Contact & Book"
          ctaHref="/contact"
          secondaryCtaLabel="View Pricing"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </div>
  );
}
