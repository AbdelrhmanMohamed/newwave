import React from "react";
import Image from "next/image";
import QuerriesForm from "@/components/querries-form";
import * as motion from "motion/react-client";
import AnimatedText from "@/components/effects/animate-text";

import { getImageUrl } from "@/lib/utils";
import { GlobalData } from "@/types/global";

type QuerriesProps = {
  title: string;
  imageUrl: string;
  globalData: GlobalData;
};

export default function Querries({
  title,
  imageUrl,
  globalData,
}: QuerriesProps) {
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
        className="col-span-12 lg:col-span-5 w-full h-[550px] sm:h-[650px] md:h-[650px]  relative overflow-hidden max-w-7xl"
      >
        <Image
          fill
          src={getImageUrl(imageUrl)}
          alt="Query 1"
          className="opacity-100 "
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
              {globalData?.support_title || "24/7 Contact Support"}
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
        <div className="break-words w-full text-center flex items-center justify-center my-10">
          <AnimatedText
            text={title || "Do you have any querries please reach us"}
            className="text-4xl md:text-5xl font-bold text-white my-4 leading-14 flex flex-wrap tracking-wide"
            once={false}
          />
        </div>
        <QuerriesForm />
      </motion.div>
    </div>
  );
}
