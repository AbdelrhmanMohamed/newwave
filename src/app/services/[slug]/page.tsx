import React from "react";
import * as motion from "motion/react-client";
import { PageBanner } from "@/components/page-banner";
import Image from "next/image";
import VideoPreviewSection from "./_components/video-preview";
import MessagesSection from "./_components/messages";
import TopicsSection from "./_components/topics";
import { Metadata } from "next";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { ServiceDetail } from "@/types/service";
import { getImageUrl } from "@/lib/utils";
import ShareSection from "@/components/share-section";
import { headers } from "next/headers";
import FloatingShare from "@/components/floating-share";
import ButtonLine from "@/components/headings/button-line";
import Link from "next/link";
// import { getImageUrl } from "@/lib/utils";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await fetchContentType(
    "services",
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: {
        seo: {
          populate: "*",
        },
      },
      fields: ["id"],
    },
    true
  );

  if (!service) {
    return {
      title: "Service not found",
      description: "The service you are looking for does not exist.",
    };
  }
  const seo = service?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getServiceData(slug: string): Promise<ServiceDetail | null> {
  try {
    const res = await fetchContentType(
      "services",
      {
        filters: {
          slug: { $eq: slug },
        },
        populate: {
          image: {
            fields: ["url"],
          },
          cover: {
            fields: ["url"],
          },
          main_content: "*",
          topics: {
            populate: ["icon", "image"],
          },
          messages: {
            populate: ["image", "points"],
          },
        },
      },
      true // spreadData = true => يرجع أول عنصر بدل array
    );

    return res as ServiceDetail;
  } catch (error) {
    console.error("Error fetching base service page data:", error);
    return null;
  }
}

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceData(slug);
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("x-forwarded-host") || headersList.get("host");

  const origin = `${protocol}://${host}`;
  const serviceUrl = `${origin}/services/${slug}`;

  console.log("Service URL:", serviceUrl);
  console.log("Service Data:", service);

  if (!service) {
    return <div className="text-center">Service not found</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="pb-40"
    >
      <PageBanner
        title={service.title || "Service Details"}
        backgroundImage={
          getImageUrl(
            service?.cover?.url ? service?.cover?.url : service.image.url
          ) || "/images/blogs-bg.jpg"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: slug },
        ]}
        className="text-3xl sm:text-4xl lg:text-5xl max-w-11/12 mx-auto text-center line-clamp-3 break-words whitespace-break-spaces leading-10 md:leading-14 lg:leading-16"
      />
      <div className="px-4 md:px-8 lg:px-10 ">
        <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px]">
          <Image
            src={
              getImageUrl(
                service?.cover?.url ? service?.cover?.url : service.image.url
              ) || "/images/blogs-bg.jpg"
            }
            alt={service.title || "Service Image"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-end p-2">
          <FloatingShare url={serviceUrl} title={service?.title} />
        </div>
        {/* Main Content Section */}
        <VideoPreviewSection
          videoUrl={service.main_content.youtube_link || ""}
          title={service.main_content.title || ""}
          description1={service.main_content.content1 || ""}
          description2={service.main_content.content2 || ""}
        />
        {/* Messages and Topics Sections */}
        <MessagesSection message={service?.messages} />
        <TopicsSection
          topics={service?.topics || []}
          image1Url={getImageUrl(service?.topics?.[0]?.image?.[0]?.url ?? "")}
          image2Url={getImageUrl(
            (service?.topics?.[1]?.image?.[0]?.url ||
              service?.topics?.[0]?.image?.[1]?.url) ??
              ""
          )}
          bgUrl={getImageUrl(service?.cover?.url || service?.image?.url)}
          features={[
            service?.feature1 || "Feature 1",
            service?.feature2 || "Feature 2",
            service?.feature3 || "Feature 3",
          ]}
        />
      </div>
      <div className="mt-8 border border-primary/50 text-center p-6 text-neutral-300 mx-4 md:mx-8 lg:mx-16">
        <q>
          {service?.final_message ||
            "Partner with New Wave to transform your entertainment vision into a legendary spectacle that resonates deeply and leaves a lasting legacy."}
        </q>
        <div className="mt-6 flex justify-center">
          <Link href={service?.call_action_url || "/projects"}>
            <ButtonLine
              title={service?.call_action_text || "Discover Our Projects"}
              className="text-primary hover:text-white"
            />
          </Link>
        </div>
      </div>
      <ShareSection
        url={serviceUrl}
        title={service?.title}
        shareTitle="Share"
        className="mt-12"
      />
    </motion.section>
  );
}
