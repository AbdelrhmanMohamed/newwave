import Image from "next/image";
import { Circle } from "lucide-react";

const messages = [
  {
    title: "Concept Development and Strategic Planning",
    description:
      "We work closely with you to define event goals, target audiences, and key messaging, developing a strategic roadmap for success.",
  },
  {
    title: "Venue Selection and Logistics",
    description:
      "Leveraging our extensive network and local knowledge, we identify and secure the perfect venue that aligns with your event's needs and budget.",
  },
  {
    title: "Event Design and Production",
    description:
      "From creative themes to technical production, we handle every aspect of event design to ensure a cohesive and memorable experience.",
  },
  {
    title: "Vendor Management and Coordination",
    description:
      "We manage all vendor relationships, from catering to audiovisual services, ensuring seamless coordination and execution.",
  },
  {
    title: "On-Site Event Management",
    description:
      "Our experienced team oversees every detail on the event day, ensuring everything runs smoothly and according to plan.",
  },
];

export default function MessagesSection() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold mb-12">Imperdiet Massage :</h2>

      <div className="grid lg:grid-cols-6 gap-12 items-start text-sm">
        <div className="lg:col-span-2 mb-8 lg:mb-0">
          <Image
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-two-3.jpg"
            alt="Professional woman working on laptop in modern office"
            width={600}
            height={400}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="lg:col-span-4">
          <p className="text-neutral-300 mb-8 leading-relaxed">
            In elit lectus, maximus amet enim id, pharetra commodo mauris.
            Phasellus facilisis ligula consequat ultrices. Praesent quis ipsum
            ut lorem maximus luctus nec lacinia magna. Aliquam vestibulum magna
            quis feibus volutpat. Vestibulum vulputate lorem ante dictum.
            Vestibulum fermentum, lorem non feugiat vestibulum, quis commodo
            mauris nibh et velit. Nam varius vitae sapien efficitur ultrices.
            Mauris varius molus nisl, nec mollis ex maximus in.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {messages.map((message, index) => (
              <div className="flex items-start gap-3" key={index}>
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <h6 className="text-neutral-100 font-medium">
                    {message.title}
                  </h6>
                  <p className="text-neutral-400 text-xs ">
                    {message.description}
                  </p>
                </div>
              </div>
            ))}
            {/* <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <h6 className="text-neutral-100 font-medium">
                    Concept Development and Strategic Planning
                  </h6>
                  <p className="text-neutral-400 text-xs ">
                    We work closely with you to define event goals, target
                    audiences, and key messaging, developing a strategic roadmap
                    for success.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-100 font-medium">
                  Concept Development and Strategic Planning
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-100 font-medium">
                  Covat fius facilisis ligula ultrices rutrum praesent
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-100 font-medium">
                  Quis ipsum ut lorem maximus luctus nec lacinia
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h6 className="text-neutral-100 font-medium">
                    Concept Development and Strategic Planning
                  </h6>
                  <p className="text-neutral-400 text-xs">
                    Leveraging our extensive network and local knowledge, we
                    identify and secure the perfect venue that aligns with your
                    event's needs and budget.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-100 font-medium">
                  Veget enim id, commodo mauris hase
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-100 font-medium">
                  Praesent fius facilisis ligula covat ultrices rutrum
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="w-3 h-3 fill-primary text-coral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-100 font-medium">
                  Nisl ipsum ut lorem maximus luctus nec lacinia
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
