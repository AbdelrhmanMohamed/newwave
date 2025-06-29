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
        className={`w-6 h-6 ${index < rating ? "text-white" : "text-gray-600"}`}
      />
    ));
  };

  return (
    <div className={`w-full bg-[#121212] rounded-lg p-8 ${className}`}>
      <div className="flex justify-between items-start mb-8">
        <QuoteIcon className="text-primary w-10 h-10" />
        <div className="flex">{renderStars()}</div>
      </div>

      <blockquote className="text-white text-lg mb-10">{quote}</blockquote>

      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${author}'s avatar`}
              className="w-full h-full object-cover"
              width={64}
              height={64}
            />
          ) : (
            <Image
              src={`https://img.heroui.chat/image/avatar?w=64&h=64&u=${author}`}
              alt={`${author}'s avatar`}
              className="w-full h-full object-cover"
              width={64}
              height={64}
            />
          )}
        </div>
        <div>
          <p className="text-primary font-medium text-lg">{author}</p>
          {position && (
            <p className="text-gray-400">
              <span className="mx-2">—</span>
              {position}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
