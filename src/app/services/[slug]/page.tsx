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
      populate: "seo",
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
  if (!service) {
    return <div className="text-center">Service not found</div>;
  }
  console.log("Service data:", service);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="pb-20"
    >
      <PageBanner
        title={service.title || "Service Details"}
        backgroundImage={
          getImageUrl(service.image?.url) || "/images/blogs-bg.jpg"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: slug },
        ]}
        className="text-3xl sm:text-4xl lg:text-5xl max-w-11/12 mx-auto text-center line-clamp-3 break-words whitespace-break-spaces leading-10 md:leading-14 lg:leading-16"
      />
      <div className="px-8">
        <div className="relative w-full h-[320px] md:h-[450px] lg:h-[550px]">
          <Image
            src={getImageUrl(service.image?.url) || "/images/blogs-bg.jpg"}
            alt={service.title || "Service Image"}
            fill
            className="object-cover"
          />
        </div>
        {/* Main Content Section */}
        <VideoPreviewSection
          videoUrl={service.main_content.youtube_link || ""}
          title={service.main_content.title || ""}
          description1={service.main_content.content1 || ""}
          description2={service.main_content.content2 || ""}
        />
        {/* Messages and Topics Sections */}
        <MessagesSection message={service.messages} />
        <TopicsSection
          topics={service.topics || []}
          image1Url={getImageUrl(service.topics[0]?.image[0]?.url)}
          image2Url={getImageUrl(service.topics[1]?.image[0]?.url)}
          bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-bg-1.jpg"
          features={[
            service.feature1 || "Feature 1",
            service.feature2 || "Feature 2",
            service.feature3 || "Feature 3",
          ]}
        />
      </div>
    </motion.section>
  );
}
