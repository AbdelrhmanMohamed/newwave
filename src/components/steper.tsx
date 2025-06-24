/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";
import StrokeNumber from "./stroke-number";
import { cn, getImageUrl } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import * as motion from "motion/react-client";
import useMediaQuery, { ScreenSize } from "@/hooks/useMediaQuery";
import { Process } from "@/types/about-us";

type StepperProps = {
  steps: Process[];
};

export default function Stepper({ steps }: StepperProps) {
  const isMobile = useMediaQuery(ScreenSize.Mobile);
  const isTablet = useMediaQuery(ScreenSize.Tablet);
  const [newSteps, setNewSteps] = React.useState<Process[]>(steps);

  React.useEffect(() => {
    if (isMobile) {
      setNewSteps(steps.slice(0, 1));
    } else if (isTablet) {
      setNewSteps(steps.slice(0, 2));
    } else {
      setNewSteps(steps);
    }
  }, [isMobile, isTablet, steps]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative ">
      {newSteps.map((step, index) => (
        <StepperItem
          index={index}
          reverse={index % 2 === 1}
          key={index}
          step={step}
          isLast={index === newSteps.length - 1}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}

type StepperItemProps = {
  step: any;
  reverse?: boolean;
  index: number;
  isLast?: boolean;
  isFirst?: boolean;
};

function StepperItem({
  step,
  reverse,
  index,
  isLast,
  isFirst,
}: StepperItemProps) {
  return (
    <div
      className={`relative grid-cols-1 flex flex-col justify-between px-6 gap-0 ${
        reverse ? "flex-col-reverse" : ""
      } ${isLast ? "overflow-hidden" : ""}`}
    >
      <motion.div
        initial={{ y: reverse ? -80 : 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.15,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className={cn("relative h-[360px]", reverse ? "mt-20" : "mb-20")}
      >
        <Image
          src={getImageUrl(step?.icon?.url)}
          alt={step.title}
          fill
          className="object-cover"
        />
      </motion.div>
      {isFirst && (
        <span className="absolute left-0 top-[50.2%]  transform -translate-y-1/2 text-sm">
          <ArrowLeftIcon />
        </span>
      )}
      <span
        className={cn("h-[0.8px] w-full bg-primary/70 absolute top-1/2", {
          "w-[90%]": isLast,
        })}
      />
      {!reverse ? (
        <span className="h-20 w-[0.8px] bg-primary/70 absolute top-1/2 left-32" />
      ) : (
        <span className="h-20 w-[0.8px]  bg-primary/70 absolute bottom-1/2 left-32" />
      )}
      {isLast && (
        <span className="absolute right-0 top-[50.2%] transform -translate-y-1/2 text-sm">
          <ArrowRightIcon />
        </span>
      )}
      <motion.div
        initial={{ y: reverse ? -80 : 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.15,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className={cn(
          "h-[360px] flex flex-col",
          reverse ? "flex-col-reverse" : "flex-col"
        )}
      >
        <StrokeNumber
          number={`0${index + 1}`}
          className="text-neutral-500 text-6xl justify-start items-center"
          customClass="stroke-text2"
        />
        <h3
          className={cn(
            "font-semibold text-white text-2xl mt-0 mb-4",
            reverse ? "order-2" : ""
          )}
        >
          {step.title}
        </h3>
        <div className="text-neutral-400">{step.description}</div>
      </motion.div>
    </div>
  );
}
