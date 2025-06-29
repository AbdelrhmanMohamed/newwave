import FeaturesSection from "./features";
import HeroSection from "./hero-section";
import OurPartners from "./our-partners";
import { getQueryClient } from "@/api/query-client";
import { heroOptions } from "@/api/hero";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import PortfolioSection from "./portfolio";
import * as motion from "motion/react-client";
import MarketingSection from "../about-us/_components/marketing";
import ServicesSections from "./services-sections";
import TestimonialsSection from "./testimonials-section";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(heroOptions);

  return (
    <div className="">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSection />
      </HydrationBoundary>
      <OurPartners />
      <FeaturesSection />
      <PortfolioSection />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="py-20"
      >
        <MarketingSection
          bgUrl=""
          title="Our Marketing Approach"
          className="bg-[#14171b] mt-20"
          highlights={[
            {
              id: 1,
              count: 10,
              title: "Years of Experience",
            },
            {
              id: 2,
              count: 99,
              title: "Successful Campaigns",
            },
            {
              id: 3,
              count: 50,
              title: "Happy Clients",
            },
            {
              id: 4,
              count: 20,
              title: "Projects Completed",
            },
          ]}
        />
      </motion.section>
      <ServicesSections />
      <TestimonialsSection />
    </div>
  );
}
