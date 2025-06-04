import AnimatedText from "@/components/effects/animate-text";
import React from "react";

export default function Market() {
  return (
    <div className="border border-primary p-8 bg-background/90 relative z-20 shadow">
      <AnimatedText
        text="New Wave & Saudi Arabia’s Vision 2030"
        className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-8 leading-14 flex flex-wrap justify-center"
        once={false}
      />
      <p className="leading-6 text-neutral-300 mt-4">
        New Wave is more than a business; we are a dedicated contributor to
        Saudi Market. Our operations, our services, and our company culture are
        deeply interwoven with the principles and objectives of Saudi Vision
        2030.
      </p>
      <ul className="list-disc pl-5 text-neutral-300 mt-2 mb-4 leading-6">
        <li>
          <span className="font-bold">Elevate Local Content:</span> Championing
          culture, heritage, and arts through the events we design and manage.
        </li>
        <li>
          <span className="font-bold">Develop National Talent:</span> Investing
          in the training and development of youth, creating sustainable career
          opportunities within the burgeoning events and creative industries.
        </li>
        <li>
          <span className="font-bold">Enhance Quality of Life:</span>{" "}
          Contributing to a vibrant society by delivering engaging and enriching
          experiences alike, aligning with the Quality-of-Life Program.
        </li>
        <li>
          <span className="font-bold">Promote Technological Advancement:</span>{" "}
          Leading the adoption of innovative event technologies, positioning the
          Kingdom as a hub for digital creativity and excellence.
        </li>
      </ul>
    </div>
  );
}
