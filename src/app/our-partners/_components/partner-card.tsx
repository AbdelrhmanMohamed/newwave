import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PartnerCardProps {
  name: string;
  url: string;
  showreel?: string;
  logo: string;
  description: string;
  accentColor?: string;
}

export function PartnerCard({
  name,
  url,
  showreel,
  logo,
  description,
  accentColor = "blue",
}: PartnerCardProps) {
  const getHoverClass = (color: string) => {
    const colorMap = {
      blue: "group-hover:bg-blue-50",
      purple: "group-hover:bg-purple-50",
      green: "group-hover:bg-green-50",
      orange: "group-hover:bg-orange-50",
    };
    return colorMap[color as keyof typeof colorMap] || "group-hover:bg-blue-50";
  };

  return (
    <div className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <div className="text-center pb-4">
        <Image
          src={logo || "/placeholder.svg"}
          alt={`${name} logo`}
          className="h-16 w-auto mx-auto mb-4 object-contain"
          width={64}
          height={64}
          unoptimized
          loading="lazy"
        />
        <h3 className="text-lg">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="pt-0">
        <div className="flex flex-col space-y-2">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <button className={`w-full ${getHoverClass(accentColor)}`}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Website
            </button>
          </Link>
          {showreel && (
            <Link href={showreel} target="_blank" rel="noopener noreferrer">
              <button className="w-full ">View Showreel</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
