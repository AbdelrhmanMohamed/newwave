import React from "react";
import { BlogSubject } from "@/types/blog";
import BlockRendererClient from "./block-render";
import Image from "next/image";
type Props = {
  subject: BlogSubject;
};

export default function RenderSubject({ subject }: Props) {
  const renderColsSpan = () => {
    if (subject.images && subject.images.length > 2) {
      return "col-span-2";
    } else if (subject.images && subject.images.length === 2) {
      return "col-span-3";
    } else if (subject.images && subject.images.length === 1) {
      return "col-span-6";
    }
    return "col-span-6";
  };
  return (
    <div key={subject.id} className="mt-6">
      <div className="grid grid-cols-6 gap-8 my-6">
        {(subject?.images || []).map((image) => (
          <div key={image.id} className={renderColsSpan()}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
              alt={image.alternativeText || ""}
              width={1200}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-neutral-100">
        {subject.title}
      </h1>
      <div className="text-neutral-400 [&_p]:mt-4 mb-1">
        <BlockRendererClient content={subject.content} />
      </div>
    </div>
  );
}
