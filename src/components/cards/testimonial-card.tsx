import React from "react";
import Image from "next/image";
import { QuoteIcon, StarIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  rating: number;
  maxRating?: number;
  avatarUrl?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position = "",
  rating,
  maxRating = 5,
  avatarUrl,
  className,
}) => {
  const renderStars = () => {
    return Array.from({ length: maxRating }).map((_, index) => (
      <StarIcon
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-white" : "fill-neutral-500"
        }`}
        stroke="none"
      />
    ));
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-start px-4">
        <QuoteIcon className="fill-primary stroke-primary w-5 h-5" />
        <div className="flex gap-2">{renderStars()}</div>
      </div>

      <blockquote className="text-neutral-300 text-sm my-4 min-h-60 max-h-60 p-8 bg-[#1d1e22]">
        {quote}
      </blockquote>

      <div className="flex items-center relative px-8 -translate-y-8">
        <div className="w-20 h-20 min-w-20 min-h-20 rounded-full overflow-hidden mr-4 bg-neutral-300 grayscale-100 hover:grayscale-0 transition-all duration-500  hover:bg-primary">
          <Image
            src={avatarUrl || "/avatar.png"}
            alt={`${author}'s avatar`}
            className="w-full h-full object-cover "
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-row items-center gap-1 text-sm">
          <p className="text-primary ">{author}</p>
          <p className="text-gray-400">
            <span className="mx-2">—</span>
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};
