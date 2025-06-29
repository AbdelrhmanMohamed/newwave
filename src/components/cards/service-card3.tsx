import Image from "next/image";
import ButtonLine from "../headings/button-line";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href?: string;
}

export function ServiceCard3({
  title,
  description,
  imageUrl,
  href = "#",
}: ServiceCardProps) {
  return (
    <div className="relative flex-1 transition-all duration-300 ease-in-out cursor-pointer min-h-[500px] flex flex-col group/item">
      {/* Content */}
      <div className="h-full flex flex-col justify-between">
        <div className="px-12">
          <h3
            className={`text-2xl lg:text-2xl font-semibold mb-6 transition-colors duration-300 group-hover/item:text-primary text-white`}
          >
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8  line-clamp-3">
            {description}
          </p>
        </div>
        <div>
          <div
            className={`transition-all duration-500 opacity-0 overflow-hidden group-hover/item:scale-100 scale-95 group-hover/item:opacity-100 flex-1`}
          >
            <Link href={href}>
              <div className="relative h-60 w-full overflow-hidden ">
                <Image
                  src={imageUrl || ""}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="px-12">
            <Link
              href={href}
              className="text-white opacity-100 group-hover/item:opacity-0 duration-300 group-hover/item:text-gray-200 animate-none"
            >
              <div className="flex items-center">
                <ButtonLine title="Know more" className="animate-none" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
