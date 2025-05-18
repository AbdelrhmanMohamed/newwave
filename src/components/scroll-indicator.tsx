import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={"size-2.5 bg-primary rounded-full animate-zoom"} />
      <div className="h-14">
        <motion.div
          className="bg-neutral-500 w-0.5"
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="transform -rotate-90 origin-center my-2">
        <span className="uppercase text-sm tracking-widest ">Scroll</span>
      </div>
    </div>
  );
}
