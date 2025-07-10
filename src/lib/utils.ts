import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const formatNumber = (
  number: number,
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

export const getImageUrl = (url: string | null | undefined): string => {
  if (!url) return "";
  if (process.env.NODE_ENV === "development" && url) {
    return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
  }
  return url;
};

// Extract video ID from YouTube URL if full URL is provided
export const getVideoIdFromYoutubeUrl = (url: string) => {
  if (url.includes("youtube.com/watch?v=")) {
    return url.split("v=")[1]?.split("&")[0];
  }
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1]?.split("?")[0];
  }
  // If it's already just an ID, return as is
  return url;
};
