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
import BlogsSection from "./blog-section";
import InstagramCard from "@/components/cards/instagram-card";
import FaqSection from "./faq-section";

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
      <FaqSection />
      <BlogsSection />
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="px-4 py-20"
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
