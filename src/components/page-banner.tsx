// components/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string; // If href is undefined, it's the current page
}

interface HeroBannerProps {
  title: string;
  backgroundImage: string;
  breadcrumbs: Breadcrumb[];
  className?: string; // Optional className for additional styling
}

export const PageBanner: React.FC<HeroBannerProps> = ({
  title,
  backgroundImage,
  breadcrumbs,
  className,
}) => {
  return (
    <div className="fade-bg relative w-full h-[20rem] md:h-[24rem] lg:h-[28rem] before:absolute before:content-[''] before:w-full before:h-[50%] before:left-0 before:bottom-0 before:bg-transparent flex justify-center items-center text-center text-white flex-col">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="mix-blend-luminosity opacity-15 object-cover bg-size-[100%] bg-repeat-no-repeat"
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}
        className="mt-20 z-16 text-center w-full"
      >
        <h1
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-bold mx-auto max-w-10/12 break-words whitespace-break-spaces leading-10 md:leading-16 lg:leading-16",
            className
          )}
        >
          {title}
        </h1>
        <div className="mt-6 space-x-2 max-w-11/12 mx-auto truncate">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="text-neutral-400 ">
              {item.href ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition text-white"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-1">/</span>
                </>
              ) : (
                item.label
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
