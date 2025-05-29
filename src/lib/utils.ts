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
