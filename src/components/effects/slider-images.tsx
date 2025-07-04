"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  items: React.ReactNode[];
};

export function ImageSlider({ className, items }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
        dragFree: true,
        slidesToScroll: 2,
      }}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            className="pl-1 basis-1/2 sm:basis-1/4 lg:basis-1/5"
            key={index}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
