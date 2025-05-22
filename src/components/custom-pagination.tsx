"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ButtonLine2 from "./headings/button-line2";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export default function CustomPagination({
  totalPages = 3,
  initialPage = 2,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-4 justify-center">
      <ButtonLine2
        title="Previous"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={currentPage === 1 ? "hidden" : ""}
      />

      <div className="flex items-center space-x-2 mx-2 md:mx-4">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={cn(
                "flex items-center justify-center rounded-full w-6 h-6 md:w-8 md:h-8 text-xs md:text-sm font-medium transition-colors duration-500",
                isActive
                  ? "bg-primary text-white"
                  : "bg-neutral-700 text-white hover:bg-primary cursor-pointer"
              )}
            >
              {pageNumber.toString().padStart(2, "0")}
            </button>
          );
        })}
      </div>

      <ButtonLine2
        title="Next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? "hidden" : ""}
        reverse
      />
    </div>
  );
}
