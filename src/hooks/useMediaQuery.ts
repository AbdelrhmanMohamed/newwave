"use client";
import { useEffect, useState } from "react";

function useMediaQuery(size: ScreenSize): boolean {
  const query = screenSizeQueryMap[size];

  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;

// mediaQueries.ts
export enum ScreenSize {
  Mobile = "mobile",
  Tablet = "tablet",
  Laptop = "laptop",
  Desktop = "desktop",
}

export const screenSizeQueryMap: Record<ScreenSize, string> = {
  [ScreenSize.Mobile]: "(max-width: 767px)",
  [ScreenSize.Tablet]: "(min-width: 768px) and (max-width: 1023px)",
  [ScreenSize.Laptop]: "(min-width: 1024px) and (max-width: 1279px)",
  [ScreenSize.Desktop]: "(min-width: 1280px)",
};
