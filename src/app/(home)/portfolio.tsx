import ProjectCard from "@/components/cards/project-card";
import AnimatedText from "@/components/effects/animate-text";
import ButtonLine from "@/components/headings/button-line";
import SectionHead from "@/components/headings/section-head";
import Link from "next/link";

const projects = [
  {
    title: "Madina Storefront",
    description: "Madina storefront with red brick building",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg",
  },
  {
    title: "Bunny Tablet",
    description: "Tablet displaying Bunny brand logo on red background",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg",
  },
  {
    title: "Business Card",
    description: "Madina storefront with red brick building",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg",
  },
  {
    title: "Bunny Tablet",
    description: "Tablet displaying Bunny brand logo on red background",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg",
  },
  {
    title: "Business Card",
    description: "Madina storefront with red brick building",
    imageUrl:
      "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg",
  },
];

export default function PortfolioSection() {
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
            imageUrl={project.imageUrl}
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
              description={project.description}
              imageUrl={project.imageUrl}
              title={project.title}
              className="aspect-video"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
