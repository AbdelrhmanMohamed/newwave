import { TestimonialCard } from "@/components/cards/testimonial-card";
import AnimatedText from "@/components/effects/animate-text";
import SectionHead from "@/components/headings/section-head";
import CardsSlider from "@/components/slider";

const testimonials = [
  {
    quote:
      "Working with this team was a fantastic experience. They delivered on time and exceeded our expectations.",
    avatarUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-1.png",
    author: "Sarah",
    position: "CEO",
    rating: 5,
  },
  {
    quote:
      "Their professionalism and attention to detail made all the difference. Highly recommended!",
    avatarUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.png",
    author: "David Lee",
    position: "Project Manager",
    rating: 4,
  },
  {
    quote:
      "Excellent service and support throughout our project. We are very satisfied with the results.",
    avatarUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-3.png",
    author: "Emily Chen",
    position: "Marketing Lead",
    rating: 3,
  },
  {
    quote:
      "The team was responsive and creative, helping us achieve our goals efficiently.",
    avatarUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png",
    author: "Michael Brown",
    position: "CTO",
    rating: 4,
  },
  {
    quote:
      "We appreciate their dedication and hard work. The outcome was exactly what we needed.",
    avatarUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png",
    author: "Olivia Smith",
    position: "COO",
    rating: 2,
  },
  {
    quote:
      "Great communication and a pleasure to work with. Would choose them again for future projects.",
    avatarUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png",
    author: "James Wilson",
    position: "Lead Developer",
    rating: 3,
  },
];

export default async function TestimonialsSection() {
  return (
    <div className="w-full px-6 relative py-20 text-white ">
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
      <CardsSlider>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            avatarUrl={testimonial.avatarUrl}
            author={testimonial.author}
            rating={testimonial.rating}
            className="min-w-[400px]"
            position={testimonial.position}
          />
        ))}
      </CardsSlider>
    </div>
  );
}
