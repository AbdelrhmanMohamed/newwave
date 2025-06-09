import React from "react";
import * as motion from "motion/react-client";
import { PageBanner } from "@/components/page-banner";
import { Briefcase } from "lucide-react";
import ServiceCard from "@/components/cards/service-card";
import InstagramCard from "@/components/cards/instagram-card";

const services = [
  {
    title: "Event Management",
    description: "Comprehensive event planning and execution services.",
  },
  {
    title: "Exhibition Services",
    description: "Custom exhibition stands and services for trade shows.",
  },
  {
    title: "Virtual Events",
    description: "Seamless virtual event solutions and platforms.",
  },
];

export default function ServicesPage() {
  return (
    <div className="">
      <PageBanner
        title="Services"
        backgroundImage="/images/office.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{
          duration: 1,
        }}
        layout
        className="px-4 md:px-16 py-14 md:py-20 lg:py-26 flex gap-6 xl:gap-12 flex-col xl:flex-row"
      >
        <div className="flex items-center flex-col md:flex-row text-center xl:text-left gap-8 md:gap-4 lg:gap-10 xl:gap-12 w-full justify-center xl:justify-start ">
          <Briefcase className="size-20 md:size-26 md:min-w-26  stroke-[1px]" />
          <h2 className="text-4xl md:text-[2.5rem] lg:text-[2.8rem] font-bold text-primary leading-12 md:leading-16">
            We Provide A Digital Platform
          </h2>
        </div>
        <div className="text-neutral-400 w-full text-center xl:text-left relative top-2 xl:w-8/12">
          <p>
            Expert conference and exhibition management in Saudi Arabia by New
            Wave. End-to-end solutions for impactful summits, trade shows, and
            MICE events.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
        }}
        className="px-8 lg:px-16 xl:px-20 mb-60"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-3-service-4.jpg"
              href={`/services/${service.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="px-4 pb-20"
      >
        <div className="flex overflow-hidden flex-nowrap gap-4 h-[420px] sm:h-[350px] md:h-[290px] lg:h-[270px] xl:h-[320px] items-center justify-center">
          <InstagramCard bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png" />
          <InstagramCard
            bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
            className="hidden sm:block"
          />
          <InstagramCard
            bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
            className="hidden md:block"
          />
          <InstagramCard
            bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
            className="hidden lg:block"
          />
        </div>
      </motion.section>
    </div>
  );
}
