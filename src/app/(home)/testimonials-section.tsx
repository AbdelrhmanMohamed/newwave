// import { TestimonialCard } from "@/components/cards/testimonial-card";
// import AnimatedText from "@/components/effects/animate-text";
// import SectionHead from "@/components/headings/section-head";
// import CardsSlider from "@/components/slider";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Homepage } from "@/types/homepage";
import TestimonialsSlider from "./testmonials-client";
import { getImageUrl } from "@/lib/utils";
// import { Testimonial } from "@/types/testimonials";

// async function getTestimonials(): Promise<Testimonial[] | null> {
//   try {
//     const res = await fetchContentType("testimonials", {
//       populate: {
//         avatar: {
//           fields: ["url"],
//         },
//       },
//       sort: ["createdAt:Asc"],
//     });
//     return res?.data as Testimonial[] | null;
//   } catch (error) {
//     console.error("Error fetching base service data:", error);
//     return null;
//   }
// }

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        testimonials: {
          populate: {
            avatar: {
              fields: ["url"],
            },
            post_image: {
              fields: ["url"],
            },
          },
        },
        testimonials_image: {
          fields: ["url"],
        },
      },
    });

    return res?.data as Homepage | null;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return null;
  }
}
export default async function TestimonialsSection() {
  const homeData = await getHomeData();
  const testimonials = homeData?.testimonials || [];
  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials data available</div>;
  }
  return (
    <div className="w-full px-6 relative py-40 text-white ">
      {/* <div className="flex flex-col items-center mb-12">
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
      </div> */}
      {/* testimonials Grid */}
      <TestimonialsSlider
        testimonials={testimonials}
        imageUrl={getImageUrl(homeData?.testimonials_image?.url) || ""}
        title={homeData?.testimonials_title || "What Our People Says"}
      />
      {/* <CardsSlider>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.message}
            avatarUrl={getImageUrl(testimonial.avatar?.url)}
            author={testimonial.author}
            rating={testimonial?.rate || 4}
            position={testimonial.position}
            className="min-w-[400px]"
          />
        ))}
      </CardsSlider> */}
    </div>
  );
}
