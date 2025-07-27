import ImageSlider from "@/components/image-slider";
import { PageBanner } from "@/components/page-banner";
import React from "react";
import * as motion from "motion/react-client";
// import InstagramCard from "@/components/cards/instagram-card";
// import VideoPreviewSection from "./video-preview";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Project } from "@/types/Project";
import { Metadata } from "next/types";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { headers } from "next/headers";
import FloatingShare from "@/components/floating-share";
import ShareSection from "@/components/share-section";
import Stepper from "@/components/steper";
import { AboutUsData } from "@/types/about-us";
import GalleryMedia from "@/components/gallery-media";
import VideoSlider from "@/components/video-slider";
import VideoPreviewSection from "./video-preview";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchContentType(
    "projects",
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: "seo",
      fields: ["id"],
    },
    true
  );

  if (!project) {
    return {
      title: "Project not found",
      description: "The project you are looking for does not exist.",
    };
  }
  const seo = project?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getProjectData(slug: string): Promise<Project | null> {
  try {
    const res = await fetchContentType(
      "projects",
      {
        filters: {
          slug: { $eq: slug },
        },
        populate: {
          main_image: {
            fields: ["url"],
          },
          gallery: {
            fields: ["url", "width", "height"],
          },
          project_categories: {
            populate: "*",
          },
        },
      },
      true // spreadData = true => يرجع أول عنصر بدل array
    );

    return res as Project;
  } catch (error) {
    console.error("Error fetching base career page data:", error);
    return null;
  }
}

async function getAboutUsData() {
  try {
    const res = await fetchContentType(
      "about-us-page",
      {
        populate: {
          process: {
            populate: "*",
          },
        },
      },
      true
    );
    return res as AboutUsData;
  } catch (error) {
    console.error("Error fetching base About Us page data:", error);
    return {} as AboutUsData;
  }
}
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = await getProjectData(slug);
  const aboutUsData = await getAboutUsData();
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("x-forwarded-host") || headersList.get("host");

  const origin = `${protocol}://${host}`;
  const projectUrl = `${origin}/projects/${slug}`;

  if (!projectData) {
    return (
      <div className="text-center py-20">No data found for this project.</div>
    );
  }
  const videoLinks = () => {
    const links: (string | undefined)[] = [
      projectData?.youtube_link,
      projectData?.youtube_link2,
      projectData?.youtube_link3,
      projectData?.youtube_link4,
    ];

    return links.filter((link): link is string => Boolean(link && link.trim()));
  };
  return (
    <div>
      <PageBanner
        title={projectData?.title || "Project Details"}
        backgroundImage={"/images/office.png"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: projectData?.title },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-10 xl:px-12 pb-20 items-start">
        {/* Content */}
        <div className="pt-4">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold">Description :</h1>
            <FloatingShare url={projectUrl} title={projectData?.title} />
          </div>

          <p className="text-base sm:text-lg text-neutral-400 mb-8">
            {projectData?.description}
          </p>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Client :
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 mb-8">
              {projectData?.client}
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Service :
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 mb-8">
              {projectData?.project_categories[0]?.title}
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div>
          <ImageSlider
            showArrows={false}
            autoPlay={true}
            images={projectData?.gallery || []}
          />
        </div>
      </div>

      <div className="px-4 py-20">
        <Stepper steps={aboutUsData?.process || []} />
      </div>
      {projectData?.youtube_link ? (
        <motion.section
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="px-10 py-20"
        >
          {videoLinks().length === 1 ? (
            <VideoPreviewSection
              videoUrl={projectData?.youtube_link || ""}
              description={
                projectData?.description ||
                "Watch the video to see how we brought this project to life."
              }
            />
          ) : (
            <>
              <VideoSlider
                links={[
                  projectData?.youtube_link,
                  projectData?.youtube_link2,
                  projectData?.youtube_link3,
                  projectData?.youtube_link4,
                ]}
                indicatorType="dots"
              />
              <p className="text-neutral-300 leading-relaxed text-center px-4 mt-8">
                {projectData?.description}
              </p>
            </>
          )}
        </motion.section>
      ) : (
        <div className="mb-20" />
      )}

      <ShareSection
        url={projectUrl}
        title={projectData?.title}
        shareTitle="Share"
        className="mb-20 mt-10"
      />
      <GalleryMedia />
    </div>
  );
}
