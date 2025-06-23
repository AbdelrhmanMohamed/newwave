import { cn, getImageUrl } from "@/lib/utils";
import InlineSvg from "./inline-svg";

interface PageHeaderProps {
  iconUrl: string;
  title: string;
  description: string;
  iconClassName?: string; // Optional className for additional styling
  titleClassName?: string; // Optional className for title
  descriptionClassName?: string; // Optional className for description
}

export default function PageHeader({
  iconUrl,
  title,
  description,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start gap-6 w-full">
      <div className="flex items-center flex-col md:flex-row text-center lg:text-left gap-4 md:gap-12 xl:gap-8 w-full justify-center xl:justify-start xl:w-7/12">
        <div className={cn("relative fill-white text-white")}>
          <InlineSvg
            className={cn(
              "size-[100px] min-w-[100px] lg:size-[115px] lg:min-w-[115px] xl:size-[7rem] xl:min-w-[7rem] stroke-2",
              iconClassName
            )}
            url={getImageUrl(iconUrl)}
          />
        </div>
        <h2
          className={cn(
            "text-4xl md:text-5xl xl:text-[3.4rem] font-bold text-primary leading-12 md:leading-16",
            titleClassName
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "text-neutral-400 w-full text-center lg:text-left lg:w-5/12 relative top-2",
          descriptionClassName
        )}
      >
        <p>{description}</p>
      </div>
    </div>
  );
}
