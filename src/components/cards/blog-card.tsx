import Image from "next/image";
import Link from "next/link";
import ButtonLine from "../headings/button-line";

interface BlogCardProps {
  imageUrl: string;
  imageAlt: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export default function BlogCard({
  imageUrl,
  imageAlt,
  date,
  title,
  excerpt,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`blog/${slug}`}>
      <article className="text-white w-full overflow-hidden">
        <div className="space-y-4">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 scale-120 ease-in-out hover:scale-100"
              priority
            />
          </div>

          <div className="space-y-4 pt-2">
            <p className="text-primary uppercase text-xs font-medium tracking-wider">
              {date}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold line-clamp-2 text-white hover:text-primary transition duration-500">
              {title}
            </h2>

            <p className="text-neutral-400 text-base">{excerpt}</p>
          </div>
        </div>
        <div className="pt-2 mt-6">
          <ButtonLine title="Read more" />
        </div>
      </article>
    </Link>
  );
}
