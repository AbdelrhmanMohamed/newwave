"use client";
import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  showValue?: boolean;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  interactive = false,
}: StarRatingProps) {
  const [hoverRating] = useState(0);

  const displayRating = interactive && hoverRating > 0 ? hoverRating : rating;

  const renderStar = (index: number) => {
    // const starValue = index + 1;
    const fillPercentage = Math.min(Math.max(displayRating - index, 0), 1);

    return (
      <div
        key={index}
        className={`relative ${interactive ? "cursor-pointer" : ""}`}
      >
        <Star size={size} className="fill-gray-500" stroke="none" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${fillPercentage * 100}%` }}
        >
          <Star size={size} className="text-white fill-white" stroke="none" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
      </div>
    </div>
  );
}
