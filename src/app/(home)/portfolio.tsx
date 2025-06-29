import ProjectCard from "@/components/cards/project-card";
import AnimatedText from "@/components/effects/animate-text";
import ButtonLine from "@/components/headings/button-line";
import SectionHead from "@/components/headings/section-head";
import Link from "next/link";

export default async function PortfolioSection() {
  return (
    <div className=" text-white mt-40">
      <div className="flex flex-col items-center mb-12">
        <SectionHead
          show={{
            start: true,
            end: true,
          }}
          title="Gallery"
          animate
        />
        <AnimatedText
          className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-4 leading-14 flex flex-wrap justify-center"
          text="Our Project Portfolio"
        />
      </div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-96 w-full">
        {/* Madina Storefront */}
        <ProjectCard
          description="Madina storefront with red brick building"
          imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
          title="Madina Storefront"
          className="lg:col-span-3 md:col-span-4 h-full"
        />

        {/* Bunny Tablet */}
        <ProjectCard
          description="Tablet displaying Bunny brand logo on red background"
          imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
          title="Bunny Tablet"
          className="lg:col-span-6 md:col-span-4 h-full"
        />

        {/* Business Card */}
        <ProjectCard
          description="Madina storefront with red brick building"
          imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
          title="Madina Storefront"
          className="lg:col-span-3 md:col-span-4 h-full"
        />
      </div>

      {/* All Projects Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
        {/* Left Content */}
        <div className="p-8 lg:p-12  flex flex-col justify-center col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="size-24 bg-primary rounded-full" />
            <h2
              className="text-4xl lg:text-5xl font-bold -translate-x-20
            "
            >
              All Projects
            </h2>
          </div>

          <p className="text-neutral-400 text-base leading-relaxed mb-8  pl-4">
            Dolor sit amet consectetur adipiscing elit ut aliquam purus sit.
            Euismod nisi porta lorem mollis aliquam ut porttitor. In hac
            habitasse platea dictumst. Amet massa vitae tortor condimentum
            lacinia quis.
          </p>

          <Link href="/projects" className="pl-4">
            <ButtonLine title="View All" className="" />
          </Link>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-7 h-96">
          {/* Cat and Person */}
          <ProjectCard
            imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg"
            title="Person in Red Sweater"
            description="Person in red sweater with cat and red mug by window"
            className="relative overflow-hidden h-full w-full"
          />

          {/* Person in Flower Field */}
          <ProjectCard
            imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg"
            title="Person in Flower Field"
            description="Person in flower field with red flowers and blue sky"
            className="relative overflow-hidden h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
