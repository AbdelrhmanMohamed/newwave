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
        <Image
          src={image_url}
          alt={title}
          width={110}
          height={110}
          loading={"lazy"}
          className="transition hover:scale-105"
        />
        <div>
          <h3 className="text-white text-3xl font-bold mb-4 transition duration-500 hover:text-primary">
            {title}
          </h3>
          <p className="text-neutral-400 max-w-11/12">{description}</p>
        </div>
      </div>
    </Link>
  );
}
