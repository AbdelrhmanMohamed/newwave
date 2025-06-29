import React from "react";

interface ServiceCard2Props {
  title: React.ReactNode;
  description: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  circleColor?: string;
}

export default function ServiceCard2({
  title,
  description,
  linkText = "Know more",
  linkHref = "#",
}: ServiceCard2Props) {
  return (
    <div
      className={` text-white p-8 md:p-12 lg:p-16 relative overflow-hidden min-h-[400px] flex flex-col justify-center`}
    >
      <div
        className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-30`}
      ></div>

      <div className="relative z-10 max-w-md">
        <h2 className="text-5xl font-bold mb-6 leading-tight">{title}</h2>

        <p className="text-gray-400 mb-12">{description}</p>

        <div className="flex items-center">
          <div className="w-8 h-[2px] bg-white mr-2"></div>
          <div className={`w-2 h-2 rounded-full  mr-3`}></div>
          <a
            href={linkHref}
            className="text-white hover:text-gray-200 transition-colors"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
