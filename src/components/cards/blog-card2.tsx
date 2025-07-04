import Image from "next/image";
import Link from "next/link";
import ButtonLine from "../headings/button-line";

interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  className?: string;
}

export default function BlogCard2({
  date,
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  className = "",
}: BlogCardProps) {
  return (
    <div
      className={`group/item overflow-hidden border border-primary bg-background ${className}`}
    >
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image Section */}
        <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:min-h-[240px] overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 scale-105 group-hover/item:scale-100"
          />
        </div>

        {/* Content Section */}
        <div className="flex w-full sm:w-3/5 flex-col justify-between p-6">
          <div className="space-y-4">
            {/* Date */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <time dateTime={date} className="uppercase tracking-wider">
                {date}
              </time>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold leading-tight text-white group-hover:text-primary/90 transition-colors duration-200 line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-neutral-400 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Read More Link */}
          <Link
            href={href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-primary/90"
          >
            <ButtonLine title="Read More" />
          </Link>
        </div>
      </div>
    </div>
  );
}
