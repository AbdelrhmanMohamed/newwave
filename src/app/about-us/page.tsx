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
import { FindIcon, IntegrateIcon, LampIcon } from "@/components/icons";
import VisionSection from "./_components/vision";
import {
  Award,
  Handshake,
  Lightbulb,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import BorderCard from "@/components/cards/border-card";
import OurTeam from "./_components/team";
import GlobalPresence from "./_components/global-presence";

export const revalidate = 60;

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
          cover: {
            fields: ["url"],
          },
          header: {
            populate: "*",
          },
          proceture: {
            populate: "*",
          },
          process: {
            populate: "*",
          },
          impact_highlights: {
            populate: "*",
          },
          contact_support_image: {
            fields: ["url"],
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

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We relentlessly push boundaries, integrating creative solutions and pioneering technologies (VR, AR, AI, 360°) to deliver experiences that captivate and inspire.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Our commitment to the highest standards ensures that every project, from conception to execution, stands out for its quality, precision, and lasting impact.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We believe in the power of partnership – with our clients, our international associates, and within our diverse team – fostering open communication and shared success.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "We build trust through honest, clear communication and complete operational transparency, ensuring our clients are informed and confident at every stage.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Impact",
    description:
      "Beyond flawless execution, we focus on delivering measurable value, ensuring our PR and event solutions achieve tangible business objectives and contribute to our clients' growth.",
  },
  {
    icon: Zap,
    title: "Agility",
    description:
      "In a fast-paced industry, we adapt quickly to evolving trends and client needs, delivering timely and effective solutions without compromising quality.",
  },
];

export default async function AboutUsPage() {
  const aboutUsData = await getAboutUsData();
  const globalData = await getGlobalData();

  console.log("About Us Data:", aboutUsData);
  if (!aboutUsData) {
    return <div className="text-center py-20">No data found</div>;
  }

  return (
    <div>
      <PageBanner
        title={aboutUsData.title || "About Us"}
        backgroundImage={
          getImageUrl(aboutUsData.cover?.url) || "/images/office.png"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: aboutUsData.title || "About Us" },
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
          title="Your Strategic Partner in a Transforming Kingdom"
          description="New Wave a dynamic Saudi Arabian Public Relations and Event Management powerhouse, born from a vision to redefine engagement in an era of unprecedented transformation. We are more than an agency; we are architects of experience, storytellers, and technological pioneers, deeply committed to the ambitious spirit of Saudi Vision 2030. Our roots are firmly planted in the Kingdom, yet our reach is global, with strategic offices in Egypt, Qatar, and the United States, complemented by robust international partnerships. This global footprint ensures we deliver world-class solutions with a nuanced understanding of local and international markets."
          imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png"
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
          title={aboutUsData.proceture_title || "Purpose Driven"}
          bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg"
          proceses={[
            {
              id: 1,
              title: "Our Vision",
              description:
                "To be the undisputed leader in innovative public relations and technology-driven event management in Saudi Arabia and the MENA region, recognized for creating transformative experiences that connect cultures, drive economic growth, and contribute to the ambitious goals. We aspire to set new global benchmarks for creativity, strategic impact, and technological integration in every project we undertake.",
              icon: <FindIcon />,
            },
            {
              id: 2,
              title: "Our Mission",
              description:
                "To empower our clients with cutting-edge PR strategies and flawlessly executed events by leveraging a dynamic blend of local expertise, international best practices, and pioneering technologies like VR, AR, and AI. We are committed to fostering Saudi talent, championing national initiatives, building lasting partnerships, and delivering measurable results that exceed expectations and amplify our clients' success on both local and global stages.",
              icon: <IntegrateIcon />,
            },
            {
              id: 3,
              title: "Our Strategy",
              description: (
                <div>
                  New Wave&apos;s strategy is anchored on core pillars:
                  <ul className="list-decimal pl-5">
                    <li>
                      Technological Supremacy: Continuously investing in and
                      mastering the latest event and communication technologies
                      to offer unparalleled immersive and intelligent solutions.
                    </li>
                    <li>
                      Global Network, Local Impact: Expanding our international
                      presence and partnerships (currently in KSA, Egypt, Qatar,
                      USA) to bring global best practices and innovations to the
                      Saudi market, while ensuring culturally resonant and
                      impactful delivery through our deep local expertise and
                      strong national workforce.
                    </li>
                  </ul>
                </div>
              ),
              icon: <LampIcon />,
            },
          ]}
        />
      </motion.section>
      <div className="px-20 py-20 pb-28">
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
            text={"Our Core Values"}
            className="text-3xl md:text-4xl xl:text-5xl font-bold mt-6 mb-16 tracking-wide text-center justify-center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <BorderCard
              icon={<value.icon className="size-8 text-primary" />}
              title={value.title}
              description={value.description}
              key={index}
            />
          ))}
        </div>
      </div>
      {/* <div className="my-20">
        <ProcedureSection
          title={aboutUsData.proceture_title || "Our Procedure"}
          bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg"
          proceses={aboutUsData.proceture || []}
        />
      </div> */}

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
          highlights={aboutUsData.impact_highlights || []}
        />
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-16 py-20"
      >
        <OurTeam />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-16 pr-0 py-20"
      >
        <GlobalPresence />
      </motion.div>
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
