import FeatureCard from "@/components/cards/feature-card";
import type React from "react";
import * as motion from "motion/react-client";

const cards = [
  {
    url: "images/f-1.svg",
    title: "Advanced Tools",
    description: "Scelerisque viverra mauris in aliquam sem fringilla ut.",
  },
  {
    url: "images/f-2.svg",
    title: "Innovation",
    description: "Sit amet volutpat consequat mauris nunc congue nisi.",
  },
  {
    url: "images/f-3.svg",
    title: "Creative Ideas",
    description: "Sagittis aliquam malesuada bibendum arcu vitae elem.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-6 lg:px-16 mt-64 z-50">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.4 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                url="/"
                image_url={card.url}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
