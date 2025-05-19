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
      <div className="flex items-center justify-between gap-6">
        <div className="w-32 h-32 relative">
          <Image
            src={image_url}
            alt={title}
            fill
            loading={"lazy"}
            className="transition hover:scale-105"
          />
        </div>

        <div>
          <h3 className="text-white text-xl lg:text-3xl font-bold mb-4 transition duration-500 hover:text-primary">
            {title}
          </h3>
          <p className="text-neutral-400 max-w-11/12">{description}</p>
        </div>
      </div>
    </Link>
  );
}
