import React from "react";
import * as motion from "motion/react-client";
import { PageBanner } from "@/components/page-banner";
import { Briefcase } from "lucide-react";
import ServiceCard from "@/components/cards/service-card";
import InstagramCard from "@/components/cards/instagram-card";
import { Metadata } from "next";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { Service, ServicePageData } from "@/types/service";
import { getImageUrl } from "@/lib/utils";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType(
    "services-page",
    {
      populate: {
        seo: {
          populate: "*",
        },
      },
    },
    true
  );
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getServicesPageData() {
  try {
    const res = await fetchContentType(
      "services-page",
      {
        populate: {
          cover: {
            fields: ["url"],
          },
          header: {
            populate: "*",
          },
        },
      },
      true
    );
    return res as ServicePageData;
  } catch (error) {
    console.error("Error fetching base service page data:", error);
    return {} as ServicePageData;
  }
}

async function getServices(): Promise<Service[] | null> {
  try {
    const res = await fetchContentType("services", {
      populate: {
        image: {
          fields: ["url"],
        },
      },
    });
    return res?.data as Service[] | null;
  } catch (error) {
    console.error("Error fetching base service data:", error);
    return null;
  }
}

export default async function ServicesPage() {
  const pageData = await getServicesPageData();
  const services = await getServices();

  if (!pageData) {
    return <div>Error loading services page data.</div>;
  }

  return (
    <div className="">
      <PageBanner
        title={pageData?.title || "Services"}
        backgroundImage={
          getImageUrl(pageData?.cover?.url) || "/images/office.png"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: pageData?.title || "Services" },
        ]}
      />
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{
          duration: 1,
        }}
        layout
        className="px-4 md:px-16 py-14 md:py-20 lg:py-26 flex gap-6 xl:gap-12 flex-col xl:flex-row"
      >
        <div className="flex items-center flex-col md:flex-row text-center xl:text-left gap-8 md:gap-4 lg:gap-10 xl:gap-12 w-full justify-center xl:justify-start ">
          <Briefcase className="size-20 md:size-26 md:min-w-26  stroke-[1px]" />
          <h2 className="text-4xl md:text-[2.5rem] lg:text-[2.8rem] font-bold text-primary leading-12 md:leading-16">
            {pageData?.header?.title || "We Provide Exceptional Services"}
          </h2>
        </div>
        <div className="text-neutral-400 w-full text-center xl:text-left relative top-2 xl:w-8/12">
          <p>
            {pageData?.header?.description ||
              "We offer a wide range of services to cater to your event needs, from event management to virtual events. Explore our services to find the perfect solution for your next event."}
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
        }}
        className="px-8 lg:px-16 xl:px-16 mb-60"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(services || [])
            .sort((a, b) => a.order - b.order)
            .map((service) => (
              <ServiceCard
                key={service?.id}
                title={service?.title}
                imageUrl={
                  getImageUrl(service?.image?.url) ||
                  "/images/service-image.jpg"
                }
                href={`/services/${service?.slug}`}
              />
            ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="px-4 pb-20"
      >
        <div className="flex overflow-hidden flex-nowrap gap-4 h-[420px] sm:h-[350px] md:h-[290px] lg:h-[270px] xl:h-[320px] items-center justify-center">
          <InstagramCard bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png" />
          <InstagramCard
            bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
            className="hidden sm:block"
          />
          <InstagramCard
            bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
            className="hidden md:block"
          />
          <InstagramCard
            bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
            className="hidden lg:block"
          />
        </div>
      </motion.section>
    </div>
  );
}
