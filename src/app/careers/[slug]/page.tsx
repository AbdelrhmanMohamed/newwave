import { generateMetadataObject } from "@/lib/shared/metadata";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Career } from "@/types/career";
import { Metadata } from "next";
import React from "react";
import { MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import BlockRendererClient from "@/components/block-render";
import CareerForm from "../_components/form";
import { getImageUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const revalidate = 120;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = await fetchContentType(
    "careers",
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: "seo",
      fields: ["id"],
    },
    true
  );

  if (!career) {
    return {
      title: "Career not found",
      description: "The career you are looking for does not exist.",
    };
  }
  const seo = career?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getCareerData(slug: string): Promise<Career | null> {
  try {
    const res = await fetchContentType(
      "careers",
      {
        filters: {
          slug: { $eq: slug },
        },
        populate: {
          // subjects: {
          //     populate: ["images"],
          // },
          image: {
            fields: ["url"],
          },
        },
      },
      true // spreadData = true => يرجع أول عنصر بدل array
    );

    return res as Career;
  } catch (error) {
    console.error("Error fetching base career page data:", error);
    return null;
  }
}

async function getCareers(): Promise<Career[] | null> {
  try {
    const res = await fetchContentType("careers", {
      populate: "*",
    });
    return res?.data as Career[] | null;
  } catch (error) {
    console.error("Error fetching base FAQ group data:", error);
    return null;
  }
}

export default async function CareerDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const careerData = await getCareerData(slug);
  const careers = await getCareers();

  if (!careerData) {
    return (
      <div className="text-center py-20">No data found for this career.</div>
    );
  }

  return (
    <div className="pb-40">
      {/* Header */}
      <PageBanner
        title={careerData?.title || "Career Details"}
        backgroundImage={
          getImageUrl(careerData?.image?.url) || "/images/office.png"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: careerData.title || "Career Details" },
        ]}
      />

      {/* Main Content */}
      <div className="grid lg:grid-cols-6 gap-10 px-6 items-start">
        {/* Left Content */}
        <div className="lg:col-span-4">
          {/* Job Image */}
          <div className="relative mb-12">
            <Image
              src={getImageUrl(careerData?.image?.url) || "/images/office.png"}
              alt={careerData.title || "Job Image"}
              width={800}
              height={500}
              className="w-full h-[33rem] object-cover"
            />
            <div className="mt-4 flex items-center text-sm justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary">LOCATION:</span>
                <span>{careerData.location || "Unknown Location"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-primary">DATE:</span>
                <span>
                  {new Date(careerData.date).toLocaleDateString() ||
                    "Unknown Date"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-primary">JOB TYPE:</span>
                <span>{careerData.job_type || "Unknown Job Type"}</span>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {careerData.title || "Unknown Title"}
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                {careerData.description || "No description available."}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Role:</h3>
              <div className="text-neutral-400 leading-relaxed">
                <BlockRendererClient content={careerData.role} />
              </div>
            </div>
            {/* Skillsets */}
            {careerData.skillsets && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Skillsets:</h3>
                <div className="text-neutral-400 leading-relaxed">
                  <BlockRendererClient content={careerData.skillsets} />
                </div>
              </div>
            )}
            {/* <div className="pt-8">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full">Apply Now</button>
                        </div> */}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="border border-primary space-y-5 px-4 py-6 lg:col-span-2">
          <h2 className="text-4xl font-bold text-center py-4">Join Our Team</h2>
          <CareerForm
            careers={careers || []}
            isSide
            careerId={Number(careerData.id)}
          />
        </div>
      </div>
    </div>
  );
}
