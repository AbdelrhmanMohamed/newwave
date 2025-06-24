import React from "react";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import SectionHead from "@/components/headings/section-head";
import BranchCard from "@/components/cards/branch-card";
import * as motion from "motion/react-client";
import AnimatedText from "@/components/effects/animate-text";
import { PageBanner } from "@/components/page-banner";
import { SocialIcon } from "@/components/social-icon";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { Metadata } from "next";
import { Branch, ContactPageWithBranchesAndSocialLinks } from "@/types/contact";
import { getImageUrl } from "@/lib/utils";
import { getGlobalData } from "@/lib/shared/globalData";
import PageHeader from "@/components/page-header";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType(
    "contact-us-page",
    {
      populate: "seo",
    },
    true
  );

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getBaseContactPageData(): Promise<ContactPageWithBranchesAndSocialLinks | null> {
  try {
    const res = await fetchContentType(
      "contact-us-page",
      {
        populate: {
          header_cover: {
            fields: ["url"],
          },
          say_hello_image: {
            fields: ["url"],
          },
          header: {
            populate: "*",
          },
        },
      },
      true
    );
    return res as ContactPageWithBranchesAndSocialLinks;
  } catch (error) {
    console.error("Error fetching base contact page data:", error);
    return null;
  }
}

async function getBranchesData() {
  try {
    const res = await fetchContentType(
      "branches",
      {
        populate: {
          cover: {
            fields: ["url"],
          },
        },
      },
      false
    );
    return res as Branch[];
  } catch (error) {
    console.error("Error fetching branches data:", error);
    return [] as Branch[];
  }
}

export default async function ContactUs() {
  const contactPage = await getBaseContactPageData();
  const contactBranches = await getBranchesData();
  const globalData = await getGlobalData();
  const branches = contactBranches || [];
  console.log("Branches Data:", branches);
  const socialLinks = [
    { id: 1, name: "facebook", url: globalData?.facebook_link || "#" },
    { id: 2, name: "instagram", url: globalData?.instagram_link || "#" },
    { id: 3, name: "linkedin", url: globalData?.linkedin_link || "#" },
    // { id: 4, name: 'twitter', url: globalData?.twitter_link || '#', },
  ];

  if (!contactPage) {
    return (
      <div className="text-center py-20">Contact page data not found.</div>
    );
  }

  return (
    <div className="">
      <PageBanner
        title="Contact Us"
        backgroundImage={
          getImageUrl(contactPage?.header_cover?.url) || "/images/office.png"
        }
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Response Time Section */}
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
          iconUrl={contactPage?.header?.icon?.url || ""}
          title={contactPage?.header?.title || "24/7 Response Time"}
          description={
            contactPage?.header?.description ||
            "We are here to assist you at any time, day or night."
          }
        />
      </motion.section>

      {/* Contact Form and Say Hello Section */}
      <section className="px-5 py-12 flex items-start flex-col md:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="basis-full w-full md:basis-8/12 pr-4 md:pr-16 lg:pr-32"
        >
          <SectionHead
            title="Get In touch"
            animate
            show={{
              start: true,
            }}
          />
          <AnimatedText
            text={contactPage?.contact_form_title || "Reach Out To Us"}
            className="text-4xl md:text-5xl font-bold mt-6 mb-10 lg:my-10 "
          />
          <ContactForm />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="border border-primary p-6 md:p-8 xl:p-14 basis-3/12 md:basis-4/12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {contactPage?.say_hello_title || "Say Hello!"}
          </h2>
          <p className="text-neutral-400">
            {contactPage?.say_hello_title_description}
          </p>

          <div className="mt-8 mb-16">
            <Image
              src={
                getImageUrl(contactPage?.say_hello_image?.url) ||
                "/images/people-working-together.png"
              }
              alt="People working together"
              width={200}
              height={50}
              className="w-full"
            />
          </div>

          <h3 className="text-3xl font-bold mb-3">
            {contactPage?.enquiries_title || "Enquiries"}
          </h3>
          <div className="flex gap-4 md:gap-3 lg:gap-8 flex-col sm:flex-row md:flex-col lg:flex-row">
            {globalData.email1 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://mail.google.com/mail/?view=cm&to=${globalData.email1}&subject=Hello&body=Hello`}
                className="text-white"
              >
                {globalData.email1}
              </a>
            )}
            {(globalData.email2 || globalData.email_career) && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://mail.google.com/mail/?view=cm&to=${
                  globalData.email2 || globalData.email_career
                }&subject=Hello&body=Hello`}
                className="vs"
              >
                {globalData.email2 || globalData.email_career}
              </a>
            )}
          </div>

          <div className="flex space-x-4 my-4">
            {(socialLinks || []).map((link) => (
              <a
                key={link?.id}
                href={link?.url}
                className="size-6 rounded-full border border-white transition hover:border-primary flex items-center justify-center duration-500 hover:text-primary"
              >
                <SocialIcon
                  name={link?.name as keyof typeof SocialIcon}
                  className="h-3 w-3"
                />
              </a>
            ))}
          </div>

          <div className="text-neutral-400">
            <p className="text-base">
              {globalData?.working_hours || "Working Hours : 8hrs"}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Affiliate Branches Section */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="px-5 pt-24 relative z-20 "
      >
        <AnimatedText
          text={contactPage?.branches_title || "Our Affiliate Branches"}
          className="text-4xl md:text-4xl font-bold text-center mb-4 justify-center"
        />

        <p className="text-neutral-400 text-center max-w-4xl mx-auto mb-8 md:mb-16">
          {contactPage?.branches_description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-0 sm:px-8 md:px-0">
          {(branches || []).map((branch) => (
            <BranchCard
              key={branch?.id}
              title={branch?.name}
              address={[branch?.address]}
              backgroundImage={
                getImageUrl(branch?.cover?.url) || "/images/office.png"
              }
              email={branch?.email}
              phone={branch?.tel}
            />
          ))}

          {/* Placeholder Branch Cards for Testing */}
          {/* <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          />
          <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          />
          <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          />
          <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          /> */}
        </div>
      </motion.section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative bottom-10 z-10">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=24.7136,46.6753&z=13&output=embed"
          title="الرياض"
          aria-label="الرياض"
          width="100%"
          height="100%"
        />
      </section>
    </div>
  );
}
