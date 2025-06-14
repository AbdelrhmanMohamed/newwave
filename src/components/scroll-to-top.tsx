"use client";
import { ChevronUp } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Check if the user has scrolled down
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fullHeight = document.body.scrollHeight;

      // Show only when at the bottom of the page
      if (scrollTop + window.innerHeight >= fullHeight - 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <motion.button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 cursor-pointer right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary transition-colors ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <ChevronUp className="w-5 h-5" />
    </motion.button>
  );
}
