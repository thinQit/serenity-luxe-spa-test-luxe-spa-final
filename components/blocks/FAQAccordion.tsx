"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQAccordionProps = {
  items?: FAQItem[];
  className?: string;
  title?: string;
};

const defaultItems: FAQItem[] = [
  {
    question: "How do I contact you?",
    answer: "Use the form above and we’ll respond by email.",
  },
  {
    question: "What information should I include?",
    answer: "A short description of what you need and any relevant links or details.",
  },
];

export default function FAQAccordion({ items = defaultItems, className, title = "FAQ" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={className ?? ""}>
      <div className="mx-auto max-w-2xl px-4 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6 divide-y rounded-xl border">
          {items.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={idx} className="p-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex((cur) => (cur === idx ? null : idx))}
                  aria-expanded={open}
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="text-muted-foreground">{open ? "−" : "+"}</span>
                </button>
                {open ? <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
