import FeaturesSection from "./features";
import HeroSection from "./hero-section";
import OurPartners from "./our-partners";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurPartners />
      <FeaturesSection />
      <div className="min-h-[1600px]"></div>
    </div>
  );
}
