import React from "react";

type VerticalCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function VerticalCard({
  title,
  description,
  icon,
}: VerticalCardProps) {
  return (
    <div>
      <div className="px-12 pb-8 text-white">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-5">{description}</p>
      </div>
      <div className="px-12 pb-8">{icon}</div>
    </div>
  );
}
