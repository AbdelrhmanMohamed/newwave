import FeatureCard from "@/components/cards/feature-card";
import type React from "react";
import * as motion from "motion/react-client";

const cards = [
  {
    url: "icons/hero/starred-event.svg", // استخدم أيقونة مناسبة مثل mic أو presentation
    title: "Conference & Exhibition Mastery",
    description: "Seamless execution, impactful results.",
  },
  {
    url: "icons/hero/vr.svg", // نظارة VR أو 360°
    title: "Immersive 360° & VR/AR Events",
    description: "Step into tomorrow's experiences.",
  },
  {
    url: "icons/hero/brain-ai.svg", // مكبر صوت أو brain
    title: "Strategic Media Consultations",
    description: "Amplify your voice, shape your narrative.",
  },
  {
    url: "icons/hero/video-camera.svg", // كاميرا أو film
    title: "Full-Service Production House",
    description: "Bringing visions to life, frame by frame.",
  },
  {
    url: "icons/hero/idea.svg", // صاروخ أو لمبة
    title: "Innovative Marketing Solutions",
    description: "Connecting brands with audiences, creatively.",
  },
  {
    url: "icons/hero/global.svg", // علم السعودية أو نجمة
    title: "KSA Event Initiatives",
    description: "Championing groundbreaking local event concepts.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-6 lg:px-12 mt-64 z-50">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.4 }}
              viewport={{ once: true }}
              className="col-span-1"
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
