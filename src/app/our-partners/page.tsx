import StrategySection from "./_components/technology";
import { PartnerSection } from "./_components/partner-section";
import { CTASection } from "./_components/cta-section";
import { PageBanner } from "@/components/page-banner";
import * as motion from "motion/react-client";
import SkillCard from "./_components/skill-card";
import GlobalCollaboration from "./_components/global-collaboration";
import AnimatedText from "@/components/effects/animate-text";
import BorderCard from "@/components/cards/border-card";
import SectionHead from "@/components/headings/section-head";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Metadata } from "next";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { console } from "inspector";
import { PartnersPageData } from "@/types/our-parterner";
import { getImageUrl } from "@/lib/utils";
import PageHeader from "@/components/page-header";

export const revalidate = 1;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType(
    "our-partners-page",
    {
      populate: {
        seo: {
          populate: "*",
        },
      },
    },
    true
  );
  console.log("Page Data for Metadata:", pageData);
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getPartnerPageData(): Promise<PartnersPageData | null> {
  try {
    const res = await fetchContentType(
      "our-partners-page",
      {
        populate: {
          cover: {
            fields: ["url"],
          },
          header: {
            populate: "*",
          },
          gn_image: {
            fields: ["url"],
          },
          tp_cover: {
            fields: ["url"],
          },
          tp_technologies: {
            populate: "*",
          },
          tp_benefits_points: {
            populate: "*",
          },
          collaboration: {
            populate: "*",
          },
          c_benefits_points: {
            populate: "*",
          },
          st_solutions: {
            populate: "*",
          },
        },
      },
      true
    );
    return res as PartnersPageData;
  } catch (error) {
    console.error("Error fetching base service page data:", error);
    return null;
  }
}

export default async function PartnersPage() {
  const pageData = await getPartnerPageData();
  if (!pageData) {
    return <div>Error loading partner data</div>;
  }

  return (
    <div className="min-h-screen">
      <PageBanner
        title={pageData?.title || "Our Partners"}
        backgroundImage={
          getImageUrl(pageData?.cover?.url) || "/images/office.png"
        }
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Partners" }]}
        className="text-4xl md:text-5xl lg:text-5xl lg:leading-16"
      />
      {/*  Section */}
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="xl:pl-12 px-6 py-20 lg:py-26 flex gap-8 flex-col lg:flex-row"
      >
        <PageHeader
          iconUrl={pageData?.header?.icon?.url || ""}
          title={pageData?.header?.title || ""}
          description={pageData?.header?.description || ""}
          titleClassName="xl:text-[3rem] "
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 pt-20"
      >
        <SkillCard
          section={pageData?.gn_headline || "Our Global Network"}
          title={
            pageData?.gn_title || "Global Innovation Meets Local Expertise"
          }
          description={pageData?.gn_description || []}
          imageUrl={getImageUrl(pageData?.gn_image?.url) || ""}
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <StrategySection
          technologies={pageData?.tp_technologies ?? []}
          title={pageData?.tp_title ?? "Technology Partnerships"}
          description={pageData?.tp_description ?? ""}
          bgUrl={getImageUrl(pageData?.tp_cover?.url) ?? ""}
          tp_benefits_title={pageData?.tp_benefits_title ?? ""}
          tp_benefits_description={pageData?.tp_benefits_description ?? ""}
          tp_benefits_points={
            (pageData?.tp_benefits_points || []).map((point) => point?.title) ||
            []
          }
        />
      </motion.section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-14">
              {pageData?.partners_title || "Our Partners"}
            </h2>
            <p className="text-neutral-300 max-w-5xl mx-auto">
              {pageData?.partners_description}
            </p>
          </div>
          <PartnerSection />
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 py-20"
      >
        <GlobalCollaboration
          title={
            pageData?.collaboration?.title || "Global Collaboration Network"
          }
          description={pageData?.collaboration?.description || ""}
          topics={pageData?.collaboration?.points || []}
          imageUrl={getImageUrl(pageData?.collaboration?.image?.url) || ""}
          features={
            (pageData?.c_benefits_points || []).map((point) => point?.title) ||
            []
          }
          benefitsTitle={pageData?.c_benefits_title || "Key Benefits"}
        />
      </motion.div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-20 pb-28">
        <div className="text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <SectionHead
              title={pageData?.st_title || "Strategies for Success"}
              show={{
                start: true,
                end: true,
              }}
              animate
            />
          </motion.div>
          <AnimatedText
            text={pageData?.st_title || "Our Strategic Focus"}
            className="text-3xl md:text-4xl xl:text-5xl font-bold mt-6 tracking-wide text-center justify-center"
          />
          <p className="text-neutral-400 max-w-3xl mt-4 mx-auto text-center mb-12">
            {pageData?.st_description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(pageData?.st_solutions || []).map((value, index) => (
            <BorderCard
              iconUrl={value?.icon?.url || ""}
              title={value?.title}
              description={value?.description}
              key={index}
            />
          ))}
        </div>
      </div>
      {/* Value Proposition and CTA */}
      <CTASection
        message={pageData?.final_message}
        buttonTitle={pageData?.call_action_text}
        href={pageData?.call_action_url}
      />
    </div>
  );
}
