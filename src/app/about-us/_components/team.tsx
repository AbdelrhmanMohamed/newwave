import MotionClient from "@/app/faq/_components/motion-client";
import AnimatedText from "@/components/effects/animate-text";
import SectionHead from "@/components/headings/section-head";
import React from "react";
import Image from "next/image";
import { Dots } from "@/components/icons";
import ButtonLine from "@/components/headings/button-line";

export default function OurTeam() {
  return (
    <div
      className={`flex flex-wrap items-start flex-col lg:flex-row lg:flex-nowrap gap-40 overflow-y-hidden px-5`}
    >
      <div className={`min-w-full max-w-full lg:min-w-[50%] lg:max-w-[50%]`}>
        <SectionHead
          title="Our Team"
          show={{
            start: true,
          }}
          animate
        />
        <AnimatedText
          text="Dynamic & Diverse Team"
          className="text-4xl md:text-[2.8rem]  mt-6 font-bold mb-8"
        />
        <div className="text-gray-300 text-[15px] leading-7">
          <p>
            At the heart of New Wave is a dynamic and diverse team of passionate
            professionals. We are proud to bring together the brightest Saudi
            national talents – individuals who possess an intrinsic
            understanding of the local culture, market dynamics, with seasoned
            international experts who contribute global perspectives and
            extensive experience from mature event and PR markets. This powerful
            synergy allows us to offer solutions that are both globally
            benchmarked and locally resonant.
          </p>
          <h3 className="mt-8 mb-2 text-white text-lg font-semibold">
            Our collective expertise spans{" "}
          </h3>
          <ul className="list-disc pl-5 mb-16">
            <li>Strategic Communications</li>
            <li>Event Design and Production</li>
            <li>
              cutting-edge technology deployment (including VR/AR development
              and AI integration)
            </li>
            <li>Digital Marketing</li>
            <li>Meticulous Project Management</li>
          </ul>
          <ButtonLine title="Read More" />
        </div>
      </div>
      <div
        className={`w-11/12 sm:w-10/12 md:w-11/12 border border-primary py-10 pl-0 flex flex-col justify-end relative`}
      >
        <MotionClient
          initial={{ y: -44 }}
          animate={{ y: 44 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`relative h-[420px] sm:h-[450px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center right-12 sm:right-24 `}
        >
          <Image
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Home-1-Faq-Bg-Img-Ps.png"
            alt="FAQ Image"
            fill
            className="object-cover"
          />
        </MotionClient>
        <MotionClient
          initial={{ y: -44 }}
          animate={{ y: 40 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`absolute hidden sm:block right-0 bottom-0 w-[400px] h-[400px]`}
        >
          <Dots />
        </MotionClient>
      </div>
    </div>
  );
}
