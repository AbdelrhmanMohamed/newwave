import Image from "next/image";
import Link from "next/link";

interface FeatureProps {
  image_url: string;
  title: string;
  description: string;
  url: string;
}

export default function FeatureCard({
  url,
  image_url,
  title,
  description,
}: FeatureProps) {
  return (
    <Link href={url}>
      <div className="flex items-center justify-between gap-6 ">
        <div className="w-24 h-24 min-w-24 min-h-24 relative">
          <Image
            src={image_url}
            alt={title}
            fill
            loading={"lazy"}
            className="transition hover:scale-105"
          />
        </div>

        <div className="text-left flex-1">
          <h3 className="text-white text-xl lg:text-[1.4rem] font-bold mb-4 transition duration-500 hover:text-primary">
            {title}
          </h3>
          <p className="text-neutral-400 max-w-full">{description}</p>
        </div>
      </div>
    </Link>
  );
}
