import AnimatedText from "@/components/effects/animate-text";
import FAQAccordion from "@/components/faq";
import SectionHead from "@/components/headings/section-head";
import { PageBanner } from "@/components/page-banner";
import React from "react";
import Image from "next/image";
import { Dots } from "@/components/icons";
import { generateMetadataObject } from "@/lib/shared/metadata";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Metadata } from "next";
import { FAQGroup, FAQPageData } from "@/types/faq";
import MotionClient from "./_components/motion-client";
import { getImageUrl } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import * as motion from "motion/react-client";
import Querries from "@/components/querries";
import { getGlobalData } from "@/lib/shared/globalData";
import InstagramCard from "@/components/cards/instagram-card";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType(
    "faq-page",
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

async function getFaqData() {
  try {
    const res = await fetchContentType(
      "faq-page",
      {
        populate: {
          cover: {
            fields: ["url"],
          },
          header: {
            populate: "*",
          },
          contact_form_image: {
            fields: ["url"],
          },
        },
      },
      true
    );
    return res as FAQPageData;
  } catch (error) {
    console.error("Error fetching base FAQ page data:", error);
    return {} as FAQPageData;
  }
}

async function getFAQGroup(): Promise<FAQGroup[] | null> {
  try {
    const res = await fetchContentType("faq-groups", {
      populate: "*",
    });

    return res?.data as FAQGroup[] | null;
  } catch (error) {
    console.error("Error fetching base FAQ group data:", error);
    return null;
  }
}

export default async function FAQ() {
  const faqPageData = await getFaqData();
  const faqGroups = await getFAQGroup();
  const globalData = await getGlobalData();
  if (!faqGroups || faqGroups.length === 0) {
    console.warn("No FAQ groups found");
    return <div className="text-center py-20">No FAQ data available</div>;
  }

  return (
    <div className="">
      <PageBanner
        title={faqPageData?.title || "FAQ"}
        backgroundImage={
          getImageUrl(faqPageData?.cover?.url) || "/images/office.png"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: faqPageData?.title || "FAQ" },
        ]}
      />
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
        }}
        layout
        className="px-4 lg:pl-12 lg:pr-6 py-14 md:py-20 lg:py-26 flex gap-6 md:gap-8 flex-col lg:flex-row"
      >
        <PageHeader
          iconUrl={faqPageData?.header?.icon?.url || ""}
          title={faqPageData?.header?.title || "24/7 Response Time"}
          description={
            faqPageData?.header?.description ||
            "We are here to assist you at any time, day or night."
          }
        />
      </motion.section>
      {(faqGroups || [])
        .sort((a, b) => a.order - b.order)
        .map((group, index) => {
          const isEven = (index: number) => index % 2 === 0;
          return (
            <div key={group.id} className="py-20 md:pb-20 lg:pb-40">
              <div
                className={`flex flex-wrap items-start flex-col-reverse lg:flex-row lg:flex-nowrap gap-28 overflow-y-hidden px-5`}
              >
                <div
                  className={`min-w-full max-w-full lg:min-w-[50%] lg:max-w-[50%] ${
                    isEven(index) ? "pr-1 md:pr-8" : "pl-1 md:pl-8"
                  }`}
                >
                  <SectionHead
                    title="Popular Questions"
                    show={{
                      start: true,
                    }}
                    animate
                  />
                  <AnimatedText
                    text={group.title}
                    className="text-4xl md:text-[2.8rem]  mt-6 font-bold mb-10"
                  />
                  <FAQAccordion faqs={group.faqs} defaultOpenItem="item-1" />
                </div>
                <div
                  className={`w-11/12 sm:w-10/12 md:w-11/12 border border-primary py-10 pl-0 flex flex-col justify-end relative ${
                    isEven(index)
                      ? "ml-auto order-1"
                      : "mr-auto order-1 lg:-order-1"
                  }`}
                >
                  <MotionClient
                    initial={{ y: -44 }}
                    animate={{ y: 44 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={`relative h-[420px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[720px] flex items-center justify-center ${
                      isEven(index)
                        ? "right-12 sm:right-24"
                        : "left-12 sm:left-24"
                    }`}
                  >
                    <Image
                      src={getImageUrl(group.image?.url)}
                      alt="FAQ Image"
                      fill
                      className="object-cover bg-center "
                    />
                  </MotionClient>
                  <MotionClient
                    initial={{ y: -44 }}
                    animate={{ y: 40 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={`absolute hidden sm:block ${
                      isEven(index) ? "right-0 bottom-0" : "left-0 bottom-0"
                    } w-[450px] h-[450px]`}
                  >
                    <Dots />
                  </MotionClient>
                </div>
              </div>
            </div>
          );
        })}
      <section className="py-20">
        <Querries
          title={
            faqPageData?.contact_form_title ||
            "Do you have any queries? Please reach us"
          }
          imageUrl={faqPageData?.contact_form_image?.url || ""}
          globalData={globalData}
        />
      </section>
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="px-4 py-20"
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
