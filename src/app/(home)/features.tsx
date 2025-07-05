import FeatureCard from "@/components/cards/feature-card";
import type React from "react";
import * as motion from "motion/react-client";
import { Homepage } from "@/types/homepage";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getImageUrl } from "@/lib/utils";

// const cards = [
//   {
//     url: "icons/hero/starred-event.svg", // استخدم أيقونة مناسبة مثل mic أو presentation
//     title: "Conference & Exhibition Mastery",
//     description: "Seamless execution, impactful results.",
//   },
//   {
//     url: "icons/hero/vr.svg", // نظارة VR أو 360°
//     title: "Immersive 360° & VR/AR Events",
//     description: "Step into tomorrow's experiences.",
//   },
//   {
//     url: "icons/hero/brain-ai.svg", // مكبر صوت أو brain
//     title: "Strategic Media Consultations",
//     description: "Amplify your voice, shape your narrative.",
//   },
//   {
//     url: "icons/hero/video-camera.svg", // كاميرا أو film
//     title: "Full-Service Production House",
//     description: "Bringing visions to life, frame by frame.",
//   },
//   {
//     url: "icons/hero/idea.svg", // صاروخ أو لمبة
//     title: "Innovative Marketing Solutions",
//     description: "Connecting brands with audiences, creatively.",
//   },
//   {
//     url: "icons/hero/global.svg", // علم السعودية أو نجمة
//     title: "KSA Event Initiatives",
//     description: "Championing groundbreaking local event concepts.",
//   },
// ];

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        key_services: {
          populate: {
            icon: {
              fields: ["url"],
            },
          },
        },
      },
    });
    return res?.data as Homepage | null;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return null;
  }
}

export default async function FeaturesSection() {
  const homeData = await getHomeData();
  const keyServices = homeData?.key_services || [];
  if (!keyServices || keyServices.length === 0) {
    return <div>No key services data available</div>;
  }
  return (
    <section className="px-6 lg:px-12 mt-64 z-50">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {keyServices.map((service, index) => (
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
                image_url={getImageUrl(service.icon?.url)}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
