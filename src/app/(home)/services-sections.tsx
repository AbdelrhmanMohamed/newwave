import { ServiceCard3 } from "@/components/cards/service-card3";
import AnimatedText from "@/components/effects/animate-text";
import SectionHead from "@/components/headings/section-head";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getImageUrl } from "@/lib/utils";
import { Homepage } from "@/types/homepage";
import Link from "next/link";
import React from "react";
// import * as motion from "motion/react-client";

type ProcedureProps = {
  className?: string;
};

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        services_cover: {
          fields: ["url"],
        },
        services: {
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
      },
    });

    return res?.data as Homepage | null;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return null;
  }
}

export default async function ServicesSections({ className }: ProcedureProps) {
  const homeData = await getHomeData();
  const services = homeData?.services || [];
  if (!services || services.length === 0) {
    return <div>No services data available</div>;
  }

  return (
    <div className={`relative bg-background py-40  ${className}`}>
      <div className="flex flex-col items-center mb-12">
        <SectionHead
          show={{
            start: true,
            end: true,
          }}
          title="Services"
          animate
        />
        <AnimatedText
          className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-4 leading-14 flex flex-wrap justify-center"
          text="What We Have to Offer"
        />
      </div>
      <div className="w-full">
        {services?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20">
            {(services || []).slice(0, 4).map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col lg:flex-row flex-1"
              >
                <ServiceCard3
                  key={service?.id}
                  title={service?.title}
                  description={service?.main_content?.content1 || ""}
                  imageUrl={getImageUrl(service?.image?.url)}
                  href={`/services/${service?.slug}`}
                />
                {/* Divider - vertical on desktop, horizontal on mobile */}
                {index < services.length - 1 && (
                  <>
                    {/* Desktop divider */}
                    <div className="hidden lg:block w-px bg-neutral-600 my-8"></div>
                    {/* Mobile divider */}
                    {/* <div className="lg:hidden h-px bg-neutral-600 mx-8"></div> */}
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">No services available</p>
        )}
        <Link href="/services">
          <button className="border mx-auto mt-16 hidden sm:flex border-neutral-600 px-8 py-3.5  items-center cursor-pointer text-base hover:border-primary hover:text-primary transition duration-500 group">
            <span className="bg-primary mr-2 rounded-full size-2 group-hover:bg-white transition duration-500" />
            View All
          </button>
        </Link>
      </div>
      <div
        className="bg-cover pointer-events-none absolute top-0 bg-center mix-blend-luminosity opacity-10 w-full h-full"
        style={{
          backgroundImage: `url(${getImageUrl(homeData?.services_cover?.url)})`,
        }}
      />
    </div>
  );
}
