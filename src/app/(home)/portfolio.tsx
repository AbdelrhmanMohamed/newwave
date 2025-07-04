import ProjectCard from "@/components/cards/project-card";
import AnimatedText from "@/components/effects/animate-text";
import ButtonLine from "@/components/headings/button-line";
import SectionHead from "@/components/headings/section-head";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getImageUrl } from "@/lib/utils";
import { Project } from "@/types/Project";
import Link from "next/link";

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

export default async function PortfolioSection() {
  const projects = await getProjects();
  if (!projects) {
    return <div>Error loading projects</div>;
  }
  return (
    <section className="text-white mt-40 px-4 md:px-12">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <SectionHead
          show={{ start: true, end: true }}
          title="Gallery"
          animate
        />
        <AnimatedText
          className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight"
          text="Our Project Portfolio"
        />
      </div>

      {/* First Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            imageUrl={getImageUrl(project.main_image?.url) || ""}
            title={project.title}
            className={`${
              index === 1
                ? "lg:col-span-6 col-span-1"
                : "lg:col-span-3 col-span-1"
            } col-span-1 aspect-video`}
          />
        ))}
      </div>

      {/* All Projects Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-5 p-6 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="size-20 bg-primary rounded-full" />
            <h2 className="text-4xl lg:text-5xl font-bold -translate-x-12">
              All Projects
            </h2>
          </div>
          <p className="text-neutral-400 text-base leading-relaxed mb-8 pl-4">
            Dolor sit amet consectetur adipiscing elit ut aliquam purus sit.
            Euismod nisi porta lorem mollis aliquam ut porttitor. In hac
            habitasse platea dictumst. Amet massa vitae tortor condimentum
            lacinia quis.
          </p>
          <Link href="/projects" className="pl-4">
            <ButtonLine title="View All" />
          </Link>
        </div>

        {/* Right Image Grid */}
        <div className="hidden lg:grid col-span-12 lg:col-span-7 grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.slice(3, 6).map((project, index) => (
            <ProjectCard
              key={index}
              description={project?.description}
              imageUrl={getImageUrl(project.main_image?.url) || ""}
              title={project?.title}
              className="aspect-video"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
