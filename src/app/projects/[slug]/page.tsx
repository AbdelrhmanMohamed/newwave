import ImageSlider from "@/components/image-slider";
import { PageBanner } from "@/components/page-banner";
import React from "react";
import * as motion from "motion/react-client";
import InstagramCard from "@/components/cards/instagram-card";
import VideoPreviewSection from "./video-preview";

export default function ProjectDetail() {
  return (
    <div>
      <PageBanner
        title={"Business Web"}
        backgroundImage={"/images/office.png"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Our Partners" },
        ]}
      />
      <div className="grid grid-cols-12 gap-16 px-10">
        <div className="col-span-12 lg:col-span-6">
          <h1 className="text-4xl font-bold mb-6">Business Web</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Business Web is a leading provider of web solutions, offering a
            comprehensive range of services to help businesses establish and
            enhance their online presence.
          </p>
          <p className="text-lg text-neutral-600 mb-8">
            Our expertise includes web design, development, digital marketing,
            and e-commerce solutions tailored to meet the unique needs of each
            client.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <ImageSlider
            showArrows={false}
            autoPlay={true}
            images={[
              "https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-1.jpg",
              "https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-7.jpg",
              "https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-8.jpg",
            ]}
          />
        </div>
      </div>
      <motion.section
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="px-10 py-20"
      >
        <VideoPreviewSection
          videoUrl="https://www.youtube.com/watch?v=GyQl-XRxLPI"
          description="Kurabitur ac interdum ex, ut porttitor augue. Maecenas nibh ligula, bibendum sit amet tristique id, semper at odio. Maecenas ornare porta lobortis. Pellentesque vestibulum non magna in sagittis. Nunc est magna, luctus quis arcu quis, tempor laoreet lorem. Donec vestibulum pretium eros, sed sollicitudin est aliquam sed. Aliquam id lacus imperdiet, hendrerit velit eu, eleifend nulla. Maecenas pharetra turpis diam, vitae venenatis velit laoreet eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quis semper ligula, in eleifend tellus. Donec rutrum sem non placerat ultrices. Suspendisse fringilla leo et neque malesuada suscipit eu ac elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ligula lectus, egestas sit amet lorem vitae."
        />
      </motion.section>
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
