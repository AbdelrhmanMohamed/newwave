import React from "react";
import { BlogSubject } from "@/types/blog";
import BlockRendererClient from "./block-render";
import Image from "next/image";
type Props = {
  subject: BlogSubject;
};

export default function RenderSubject({ subject }: Props) {
  console.log(subject, "subject");
  return (
    <div key={subject.id} className="mt-6">
      <div className="grid grid-cols-6 gap-8 my-6">
        {(subject.images || []).map((image) => (
          <div key={image.id} className="col-span-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
              alt={image.alternativeText || ""}
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <h1 className="text-2xl lg:text-3xl font-bold mb-4">{subject.title}</h1>
      <div className="text-neutral-400 [&_p]:mt-4 mb-1">
        <BlockRendererClient content={subject.content} />
      </div>
    </div>
  );
}
