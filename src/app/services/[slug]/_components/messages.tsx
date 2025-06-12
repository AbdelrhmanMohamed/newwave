import Image from "next/image";
import { Circle } from "lucide-react";
import { MessageBlock } from "@/types/service";
import { getImageUrl } from "@/lib/utils";

type Props = { message: MessageBlock };

export default function MessagesSection({ message }: Props) {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold mb-8">{message.title}</h2>

      <div className="grid lg:grid-cols-6 gap-12 items-start text-sm">
        <div className="lg:col-span-2 mb-8 lg:mb-0">
          <Image
            src={getImageUrl(message.image.url) || ""}
            alt={message.title || "Message Image"}
            width={620}
            height={500}
            className="w-full h-[400px] md:h-[500px] lg:h-[500px] object-cover"
          />
        </div>

        <div className="lg:col-span-4">
          <p className="text-neutral-300 mb-8 leading-relaxed">
            {message.description || "No description available."}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {message.points.map((point, index) => (
              <div className="flex items-start gap-3" key={index}>
                <div className="space-y-1">
                  <h6 className="text-neutral-100 font-medium text-base">
                    <Circle className="w-2.5 h-2.5 fill-primary stroke-none inline-block mr-1 mb-1" />
                    {point.title}
                  </h6>
                  <p className="text-neutral-300 text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
