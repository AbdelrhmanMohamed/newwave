import React from "react";
import * as motion from "motion/react-client";
import { PageBanner } from "@/components/page-banner";
import ProjectCard from "@/components/cards/project-card";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Metadata } from "next/types";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { Project, ProjectPageData } from "@/types/Project";
import { getImageUrl } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import ButtonLine from "@/components/headings/button-line";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType(
    "projects-page",
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

async function getProjectsData() {
  try {
    const res = await fetchContentType(
      "projects-page",
      {
        populate: {
          cover: {
            fields: ["url"],
          },
          header: {
            populate: "*",
          },
        },
      },
      true
    );
    return res as ProjectPageData;
  } catch (error) {
    console.error("Error fetching base Projects page data:", error);
    return {} as ProjectPageData;
  }
}

async function getProjects(): Promise<Project[] | null> {
  try {
    const res = await fetchContentType("projects", {
      populate: {
        main_image: {
          fields: ["url"],
        },
      },
    });

    return res?.data as Project[] | null;
  } catch (error) {
    console.error("Error fetching base project data:", error);
    return null;
  }
}

export default async function ProjectPage() {
  const pageData = await getProjectsData();
  const projects = await getProjects();
  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }
  if (!pageData) {
    return <div>No project data available</div>;
  }

  return (
    <div>
      <PageBanner
        title={pageData?.title || "Projects"}
        backgroundImage={
          getImageUrl(pageData.cover?.url) || "/images/office.png"
        }
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "projects" }]}
        className="text-4xl md:text-5xl lg:text-[3rem] lg:leading-16 break-words"
      />
      {/*  Section */}
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
          iconUrl={pageData?.header?.icon?.url || ""}
          title={pageData?.header?.title || "Projects"}
          description={
            pageData?.header?.description ||
            "Explore our diverse portfolio of projects that showcase our expertise in delivering innovative solutions across various industries. From digital transformations to strategic brand campaigns, each project reflects our commitment to excellence and creativity."
          }
          titleClassName="text-3xl xl:text-5xl"
        />
      </motion.section>

      <motion.section
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="px-6 lg:px-12 py-20 lg:py-26"
      >
        <h2 className="text-3xl md:text-4xl text-center lg:text-5xl font-semibold text-white mb-8">
          {pageData.projects_title || "Our Projects"}
        </h2>
        <p className="text-neutral-400 mb-12 max-w-7xl mx-auto text-center">
          {pageData.projects_description ||
            "Discover our innovative projects that blend creativity and technology to deliver exceptional results. From immersive digital experiences to strategic brand campaigns, explore how we bring ideas to life."}
        </p>
        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects || []).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={getImageUrl(project.main_image?.url) || ""}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </motion.section>

      <div className="mb-16 mt-28 border border-primary/50 text-center p-6 text-neutral-300 mx-4 md:mx-8 lg:mx-16">
        <q>{pageData?.final_message || "Your success is our priority."}</q>
        <div className="mt-6 flex justify-center">
          <Link href={pageData?.call_action_url || "/contact-us"}>
            <ButtonLine
              title={
                pageData?.call_action_text || "Let's Create Your Success Story"
              }
              className="text-primary hover:text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
