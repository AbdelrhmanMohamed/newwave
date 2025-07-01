import React from "react";
import Image from "next/image";
import QuerriesForm from "@/components/querries-form";
import * as motion from "motion/react-client";
import AnimatedText from "@/components/effects/animate-text";
import { AboutUsData } from "@/types/about-us";
import { GlobalData } from "@/types/global";
import { getImageUrl } from "@/lib/utils";

type QuerriesProps = {
  aboutData: AboutUsData;
  globalData: GlobalData;
};

export default function Querries({ aboutData, globalData }: QuerriesProps) {
  return (
    <div className="grid grid-cols-12 md:gap-14 justify-center items-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="col-span-12 lg:col-span-5 w-full h-[500px] sm:h-[600px] md:h-[680px]  relative overflow-hidden max-w-5xl"
      >
        <Image
          fill
          src={getImageUrl(aboutData?.contact_support_image?.url)}
          alt="Query 1"
          className="opacity-85"
        />

        <div className="absolute p-8 pt-16 bottom-0 flex justify-center items-center bg-gradient-to-t from-background  to-[#11131900]  w-full gap-6">
          <Image
            src="/icons/message.svg"
            width={100}
            height={100}
            alt="message Icon"
          />
          <div>
            <h6 className="text-xl">
              {aboutData?.contact_support_title || "24/7 Contact Support"}
            </h6>
            <p>{globalData?.email1}</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="col-span-12 lg:col-span-7 md:pr-16 px-6 lg:px-0"
      >
        <div className="break-words w-full text-center flex items-center justify-center my-4 ">
          <AnimatedText
            text={
              aboutData?.reach_us || "Do you have any querries please reach us"
            }
            className="text-4xl md:text-5xl font-bold text-white my-8 leading-14 flex flex-wrap tracking-wide"
            once={false}
          />
        </div>
        <QuerriesForm />
      </motion.div>
    </div>
  );
}
