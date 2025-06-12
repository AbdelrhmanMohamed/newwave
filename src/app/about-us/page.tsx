import React from "react";
import SkillCard from "./_components/skill-card";
import { PageBanner } from "@/components/page-banner";
import * as motion from "motion/react-client";
// import ProcedureSection from "./_components/proceture";
import MarketingSection from "./_components/marketing";
import InstagramCard from "@/components/cards/instagram-card";
import Querries from "./_components/querries";
import Stepper from "@/components/steper";
import SectionHead from "@/components/headings/section-head";
import AnimatedText from "@/components/effects/animate-text";
import { generateMetadataObject } from "@/lib/shared/metadata";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Metadata } from "next";
import { AboutUsData } from "@/types/about-us";
import { getGlobalData } from "@/lib/shared/globalData";
import { getImageUrl } from "@/lib/utils";
import VisionSection from "./_components/vision";
import BorderCard from "@/components/cards/border-card";
import OurTeam from "./_components/team";
import GlobalPresence from "./_components/global-presence";
import Market from "./_components/market";

export const revalidate = 120;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType(
    "about-us-page",
    {
      populate: {
        seo: {
          populate: "*",
        },
      },
    },
    true
  );
  if (!pageData?.seo) {
    return {
      title: "About Us",
      description: "Learn more about our company and values.",
    };
  }
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getAboutUsData() {
  try {
    const res = await fetchContentType(
      "about-us-page",
      {
        populate: {
          core_values: {
            populate: "*",
          },
          vision: {
            populate: "*",
          },
          mission: {
            populate: "*",
          },
          strategy: {
            populate: "*",
          },
          process: {
            populate: "*",
          },

          impact_highlights: {
            populate: "*",
          },
          cover: {
            populate: "*",
          },
          about_image: {
            populate: "*",
          },
          contact_support_image: {
            populate: "*",
          },
          global_presence_image: {
            populate: "*",
          },
          our_team_image: {
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

// const coreValues = [
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description:
//       "We relentlessly push boundaries, integrating creative solutions and pioneering technologies (VR, AR, AI, 360°) to deliver experiences that captivate and inspire.",
//   },
//   {
//     icon: Award,
//     title: "Excellence",
//     description:
//       "Our commitment to the highest standards ensures that every project, from conception to execution, stands out for its quality, precision, and lasting impact.",
//   },
//   {
//     icon: Handshake,
//     title: "Collaboration",
//     description:
//       "We believe in the power of partnership – with our clients, our international associates, and within our diverse team – fostering open communication and shared success.",
//   },
//   {
//     icon: Shield,
//     title: "Integrity & Transparency",
//     description:
//       "We build trust through honest, clear communication and complete operational transparency, ensuring our clients are informed and confident at every stage.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Strategic Impact",
//     description:
//       "Beyond flawless execution, we focus on delivering measurable value, ensuring our PR and event solutions achieve tangible business objectives and contribute to our clients' growth.",
//   },
//   {
//     icon: Zap,
//     title: "Agility",
//     description:
//       "In a fast-paced industry, we adapt quickly to evolving trends and client needs, delivering timely and effective solutions without compromising quality.",
//   },
// ];

export default async function AboutUsPage() {
  const aboutUsData = await getAboutUsData();
  const globalData = await getGlobalData();

  if (!aboutUsData || Object.keys(aboutUsData || {}).length === 0) {
    return <div className="text-center py-20">No data found</div>;
  }

  return (
    <div>
      <PageBanner
        title={aboutUsData?.title || "About Us"}
        backgroundImage={
          getImageUrl(aboutUsData?.cover?.url) || "/images/office.png"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: aboutUsData?.title || "About Us" },
        ]}
      />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 pt-20"
      >
        <SkillCard
          section="About Us"
          title={aboutUsData?.about_title || "About New Wave"}
          description={aboutUsData?.about_summary || []}
          imageUrl={
            getImageUrl(aboutUsData?.about_image?.url) ||
            "https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png"
          }
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="py-20"
      >
        <VisionSection
          title={aboutUsData?.proceture_title || "Purpose Driven"}
          bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg"
          proceses={[
            {
              id: 1,
              title: aboutUsData?.vision.title || "Our Vision",
              description: aboutUsData?.vision.description || [],
              iconUrl: aboutUsData?.vision.icon?.url || "",
            },
            {
              id: 2,
              title: "Our Mission",
              description: aboutUsData?.mission.description || [],
              iconUrl: aboutUsData?.mission.icon?.url || "",
            },
            {
              id: 3,
              title: "Our Strategy",
              description: aboutUsData?.strategy.description || [],
              iconUrl: aboutUsData?.strategy.icon?.url || "",
            },
          ]}
        />
      </motion.section>
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
              title="Impactful Core Values"
              show={{
                start: true,
                end: true,
              }}
              animate
            />
          </motion.div>
          <AnimatedText
            text={aboutUsData?.core_value_title || "Our Core Values"}
            className="text-3xl md:text-4xl xl:text-5xl font-bold mt-6 mb-16 tracking-wide text-center justify-center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(aboutUsData?.core_values || []).map((value, index) => (
            <BorderCard
              iconUrl={value?.icon?.url || ""}
              title={value?.title}
              description={value?.description}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col items-center justify-center text-center mb-10"
        >
          <SectionHead
            title={aboutUsData?.process_title || "Know Us"}
            show={{
              end: true,
              start: true,
            }}
            animate
          />
          <AnimatedText
            text={
              aboutUsData?.process_headline || "What Kind Of Service We Offer"
            }
            className="text-3xl md:text-4xl xl:text-5xl font-bold mt-6 mb-10 tracking-wide text-center justify-center"
          />
        </motion.div>

        <Stepper steps={aboutUsData?.process || []} />
      </div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="py-20"
      >
        <MarketingSection
          bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Counter-Bg-Img-1-scaled.jpg"
          title="Our Marketing Approach"
          highlights={aboutUsData?.impact_highlights || []}
        />
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 md:px-6 lg:px-10 xl:px-20 py-20"
      >
        <OurTeam
          title={aboutUsData?.our_team_title || "Our Team"}
          description={aboutUsData?.our_team_description || []}
          imageUrl={aboutUsData?.our_team_image?.url || ""}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 md:px-6 lg:px-10 xl:px-20 py-20"
      >
        <GlobalPresence
          title={aboutUsData?.global_presence_title || "Global Presence"}
          description={aboutUsData?.global_presence_description || []}
          imageUrl={aboutUsData?.global_presence_image?.url || ""}
        />
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 md:px-6 lg:px-10 xl:px-20 py-20"
      >
        <Market
          title={aboutUsData?.market_title || "Our Market"}
          description={aboutUsData?.market_description || []}
        />
      </motion.section>
      <section className="py-20">
        <Querries aboutData={aboutUsData} globalData={globalData} />
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
