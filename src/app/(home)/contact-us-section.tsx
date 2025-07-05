import { Marquee } from "@/components/effects/marquee";
import ButtonLine from "@/components/headings/button-line";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getImageUrl } from "@/lib/utils";
import { Homepage } from "@/types/homepage";
import Link from "next/link";
import React from "react";

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        contact: {
          populate: {
            cover: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },
    });

    return res?.data as Homepage | null;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return null;
  }
}

// bgUrl = "/images/home-bg-section-1.webp",

export default async function ContactUsSection() {
  const homepageData = await getHomeData();
  const contact = homepageData?.contact;
  if (!contact || !contact.cover) {
    return null;
  }
  return (
    <div
      className="bg-cover relative h-[700px] my-10 w-full flex items-end py-24"
      style={{
        backgroundImage: `url(${getImageUrl(contact.cover.url)})`,
      }}
    >
      <div className="w-full">
        <Marquee>
          <h1 className="text-white/20 text-7xl font-bold">
            {contact?.headline}
          </h1>
        </Marquee>
        <p className="text-white text-5xl font-semibold mb-8 px-8 md:px-16 max-w-7xl leading-14">
          {contact?.title}
        </p>
        <Link
          href={contact?.button_link}
          className="text-white px-8 md:px-16 block"
        >
          <ButtonLine title={contact?.button_text} />
        </Link>
      </div>
    </div>
  );
}
