import React from "react";
import * as motion from "motion/react-client";
import { PageBanner } from "@/components/page-banner";
import { LampIcon } from "@/components/icons";
import ProjectCard from "@/components/cards/project-card";

const projects = [
  {
    id: 1,
    title: "Interactive Metaverse Launch",
    slug: "interactive-metaverse-launch",
    description:
      "To launch a new digital retail platform to a Gen Z audience in Saudi Arabia, creating significant buzz and driving early adoption through an innovative and highly shareable experience.",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Portfolio-Another-Img-3.png",
  },
  {
    id: 2,
    title: "Project Two",
    slug: "project-two",
    description:
      "To create an immersive brand experience for a leading fashion retailer, leveraging AR technology to engage customers in a unique way.",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-1.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    slug: "project-three",
    description:
      "To develop a comprehensive PR strategy for a major product launch, focusing on media relations and influencer partnerships.",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-img-3.jpg",
  },
];

export default function ProjectPage() {
  return (
    <div>
      <PageBanner
        title={"Portfolio of Events & PR Campaigns | New Wave KSA"}
        backgroundImage={"/images/office.png"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "projects" }]}
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
        <div className="flex items-start md:items-center lg:items-start flex-col md:flex-row text-left gap-6 md:gap-12 xl:gap-12 w-full justify-start -mt-1 min-w-[60%]">
          <LampIcon className="text-primary w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 lg:min-w-22 lg:min-h-22 md:min-h-20 md:min-w-20 min-w-16 min-h-16" />
          <h2 className="text-4xl md:text-[2.5rem] xl:text-[3rem] font-bold text-primary leading-12 md:leading-16">
            A Portfolio of Excellence, Creativity, and Impact
          </h2>
        </div>
        <div className="text-neutral-400 w-full text-[1rem] text-left ">
          <p>
            Welcome to the New Wave portfolio – a curated showcase of our
            passion for excellence, our drive for innovation, and our commitment
            to delivering impactful results. We are immensely proud to have
            partnered with a diverse spectrum of distinguished clients, ranging
            from influential government entities and leading multinational
            corporations to pioneering local businesses and cultural
            institutions.
          </p>
        </div>
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
          Our Projects
        </h2>
        <p className="text-neutral-400 mb-12 max-w-7xl mx-auto text-center">
          Each project represents a unique challenge and a collaborative
          journey, where we&apos;ve had the privilege of transforming ambitious
          visions into tangible successes with precision, creativity, and
          strategic flair. Our work is a testament to our ability to blend deep
          local insights with international best practices, consistently
          exceeding expectations.
        </p>
        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
