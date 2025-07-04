"use client";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function CardsSlider({ children, className }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Mouse wheel scrolling
    // const handleWheel = (e: WheelEvent) => {
    //   e.preventDefault();
    //   slider.scrollLeft += e.deltaY;
    // };

    // Mouse drag scrolling
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      slider.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    // slider.addEventListener("wheel", handleWheel, { passive: false });
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      //   slider.removeEventListener("wheel", handleWheel);
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={cn("w-full p-6 ")}>
      <div
        ref={sliderRef}
        className={cn(
          "flex gap-6 overflow-x-auto scrollbar-hide cursor-grab select-none",
          className
        )}
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
