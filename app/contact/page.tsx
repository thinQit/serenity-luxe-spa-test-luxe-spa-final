"use client";

import { motion } from "framer-motion";
import { HeroImage } from "@/components/blocks/HeroImage";
import { ContactForm } from "@/components/blocks/ContactForm";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="bg-background text-white">
      <HeroImage
        imageUrl="/images/product-1.png"
        headline="Book your Serenity moment."
        subheadline="Send a request and we’ll confirm your appointment, recommend the best service, and answer any questions."
        primaryCta={{ label: "View Pricing", href: "/pricing" }}
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
        <ContactForm
          headline="Contact Serenity Luxe Spa"
          subheadline="Share your preferred date/time and the treatment you’re interested in. We’ll respond promptly."
          contactInfo={[
            { icon: "📍", label: "Location", value: "Serenity Luxe Spa — Downtown Wellness District" },
            { icon: "🕒", label: "Hours", value: "Mon–Sat: 9am–7pm • Sun: 10am–4pm" },
            { icon: "☎️", label: "Phone", value: "(555) 012-3456" },
            { icon: "✉️", label: "Email", value: "hello@serenityluxespa.com" },
          ]}
        />
      </motion.div>

      <motion.div
        id="location"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-white/70">Find Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Map & location</h2>
            <p className="mt-4 text-white/70">
              Arrive a few minutes early to settle in and enjoy a calm start to your session.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-background/5">
            <div className="relative h-[420px] w-full">
              <iframe
                title="Serenity Luxe Spa Map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=New%20York%20City&output=embed"
              />
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-white/60">
            Map is for preview. Replace with your exact address embed link.
          </div>
        </div>
      </motion.div>

      <motion.div
        id="faq"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <FAQAccordion
          headline="Quick questions"
          subheadline="Everything you need to know before your visit."
          items={[
            {
              question: "How do I prepare for my appointment?",
              answer:
                "Arrive 5–10 minutes early. Avoid heavy meals right before. Let us know about sensitivities, injuries, or pregnancy in your message.",
            },
            {
              question: "Do you accept walk-ins?",
              answer:
                "We recommend booking ahead for the best availability, but we’ll do our best to accommodate same-day requests.",
            },
            {
              question: "Can I request a specific therapist?",
              answer:
                "Yes. Add the therapist name in your message and we’ll confirm availability.",
            },
          ]}
        />
      </motion.div>
    </div>
  );
}
