import FeaturesSection from "./features";
import HeroSection from "./hero-section";
import OurPartners from "./our-partners";
import { getQueryClient } from "@/api/query-client";
import { heroOptions } from "@/api/hero";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

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
      <div className="min-h-[1600px]"></div>
    </div>
  );
}
