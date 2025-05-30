import { cn } from "@/lib/utils";

interface BranchCardProps {
  title: string;
  address: string[];
  phone: string;
  email: string;
  backgroundImage: string;
  className?: string;
}

export default function BranchCard({
  title,
  address,
  phone,
  email,
  backgroundImage,
  className,
}: BranchCardProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border border-natext-neutral-200 transition-all duration-500 ease-in-out border-neutral-500 hover:border-primary group bg-background",
        className
      )}
    >
      {/* Background image that shows on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-cover mix-blend-luminosity opacity-15 md:opacity-0 bg-center transition-opacity duration-500 group-hover:opacity-15"
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Card content */}
      <div
        className={cn(
          "relative z-10 py-16 px-8 transition-colors duration-500"
        )}
      >
        <h2 className="text-primary text-xl sm:text-2xl font-medium mb-6 sm:mb-8">
          {title}
        </h2>

        <div className="space-y-6">
          <div className="text-lg sm:text-2xl font-light leading-relaxed text-neutral-100">
            {address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className="space-y-2 mt-6 sm:mt-10">
            <p className="text-lg sm:text-2xl font-light text-neutral-100 transition-colors">
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="hover:text-primary"
              >
                {phone}
              </a>
            </p>
            <p className="text-lg sm:text-2xl font-light text-neutral-100 transition-colors">
              <a href={`mailto:${email}`} className="hover:text-primary">
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
