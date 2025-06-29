import { TestimonialCard } from "@/components/cards/testimonial-card";
import AnimatedText from "@/components/effects/animate-text";
import SectionHead from "@/components/headings/section-head";

export default async function TestimonialsSection() {
  return (
    <div className=" text-white mt-40">
      <div className="flex flex-col items-center mb-12">
        <SectionHead
          show={{
            start: true,
            end: true,
          }}
          title="Client Feedback"
          animate
        />
        <AnimatedText
          className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-4 leading-14 flex flex-wrap justify-center"
          text="Happy Words From Happy Customer"
        />
      </div>
      {/* testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-96 w-full">
        {/* Madina Storefront */}
        <TestimonialCard
          quote="Madina storefront with red brick building"
          avatarUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
          author="Madina Storefront"
          rating={5}
          className="col-span-1 h-full"
        />
      </div>
    </div>
  );
}
