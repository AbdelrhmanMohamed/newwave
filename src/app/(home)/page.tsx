import FeaturesSection from "./features";
import HeroSection from "./hero-section";
import OurPartners from "./our-partners";
import PortfolioSection from "./portfolio";
import ServicesSections from "./services-sections";
import TestimonialsSection from "./testimonials-section";
import BlogsSection from "./blog-section";
import ContactUsSection from "./contact-us-section";
import GalleryMedia from "@/components/gallery-media";
import MarketingSectionHome from "./marketing-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurPartners />
      <FeaturesSection />
      <PortfolioSection />
      <MarketingSectionHome />
      <ServicesSections />
      {/* <FaqSection /> */}
      <TestimonialsSection />
      <ContactUsSection />
      <BlogsSection />
      <GalleryMedia />
    </div>
  );
}
