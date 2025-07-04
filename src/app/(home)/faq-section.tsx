import AnimatedText from "@/components/effects/animate-text";
import FAQAccordion from "@/components/faq";
import SectionHead from "@/components/headings/section-head";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { FAQGroup } from "@/types/faq";
import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import CircleScroll from "@/components/effects/circel-scroll";

async function getFAQGroup(): Promise<FAQGroup[] | null> {
  try {
    const res = await fetchContentType("faq-groups", {
      populate: "*",
      limit: 1,
    });

    return res?.data as FAQGroup[] | null;
  } catch (error) {
    console.error("Error fetching base FAQ group data:", error);
    return null;
  }
}

export default async function FaqSection() {
  const faqGroups = await getFAQGroup();
  if (!faqGroups || faqGroups.length === 0) {
    return <div>No FAQ data available</div>;
  }
  return (
    <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center py-24 px-6 relative">
      <div
        className={`min-w-full max-w-full lg:min-w-[55%] lg:max-w-[55%] relative left-0 md:left-5 z-10 bg-background border border-primary p-8 h-fit`}
      >
        <SectionHead
          title="Popular Questions"
          show={{
            start: true,
          }}
          animate
        />
        <AnimatedText
          text="FAQ"
          className="text-4xl md:text-[2.8rem]  mt-6 font-bold mb-10"
        />
        <FAQAccordion faqs={faqGroups[0].faqs} defaultOpenItem="item-1" />
      </div>
      <div className="absolute z-40 top-16 left-[55%] transform -translate-x-1/2 pointer-events-none">
        <CircleScroll />
      </div>
      <div className="h-[950px] hidden md:block min-w-full max-w-4xl relative lg:min-w-[50%] lg:max-w-[50%]">
        <Image
          src={getImageUrl(faqGroups[0]?.image?.url)}
          alt="FAQ Image"
          fill
          className="object-cover bg-center "
        />
      </div>
    </div>
  );
}
