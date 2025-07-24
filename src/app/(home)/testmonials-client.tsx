"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import type { Testimonial } from "@/types/testimonials";
import { getImageUrl } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { QuoteIcon } from "@/components/icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type TestimonialsProps = {
  testimonials: Testimonial[];
  imageUrl: string;
  title?: string;
};

export default function TestimonialsSlider({
  testimonials,
  imageUrl,
  title = "What Our People Says",
}: TestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="relative z-10 flex h-full">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
          <div className="space-y-8 lg:space-y-12 max-w-4xl lg:pl-12 pt-1">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="relative">
              <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                  loop: true,
                  slidesToScroll: 1,
                }}
              >
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <div className="space-y-8">
                        {/* Testimonial Text */}
                        {testimonial?.post_image ? (
                          <HoverCard>
                            <HoverCardTrigger className="cursor-pointer">
                              <p className="text-gray-300 mb-16 text-2xl leading-relaxed tracking-wide font-medium">
                                {testimonial.message}
                              </p>
                            </HoverCardTrigger>
                            <HoverCardContent
                              className="bg-background relative p-2"
                              sideOffset={-1}
                            >
                              <Image
                                src={getImageUrl(testimonial?.post_image?.url)}
                                alt=""
                                width={300}
                                height={300}
                              />
                            </HoverCardContent>
                          </HoverCard>
                        ) : (
                          <p className="text-gray-300 mb-16 text-2xl leading-relaxed tracking-wide font-medium">
                            {testimonial.message}
                          </p>
                        )}

                        {/* Author Info */}
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Image
                              src={getImageUrl(testimonial.avatar.url)}
                              alt={
                                testimonial.avatar.alternativeText ||
                                testimonial.author
                              }
                              width={80}
                              height={80}
                              className="rounded-full w-20 h-20 min-w-20 min-h-20 object-cover border-2 border-neutral-600"
                            />
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-xl">
                              {testimonial.author}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-3 mt-20">
              {testimonials.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => goToSlide(dotIndex)}
                  className={`h-[2px] transition-all duration-300 ${
                    dotIndex === current
                      ? "bg-primary text-primary w-16"
                      : "bg-neutral-600 hover:bg-neutral-500 w-16"
                  }`}
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative min-w-2xl md:min-w-xl">
            <div className="absolute z-10 bottom-3 -left-20 pointer-events-none">
              <QuoteIcon className="text-white" />
            </div>
            <div className="w-full">
              <div className="relative w-full aspect-[4/4] max-h-[620px] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt="Testimonials Background"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
