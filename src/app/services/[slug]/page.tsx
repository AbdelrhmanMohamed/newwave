import React from "react";
import * as motion from "motion/react-client";
import { PageBanner } from "@/components/page-banner";
import Image from "next/image";
import VideoPreviewSection from "./_components/video-preview";
import MessagesSection from "./_components/messages";
import TopicsSection from "./_components/topics";
// import { getImageUrl } from "@/lib/utils";

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="pb-20"
    >
      <PageBanner
        title={slug}
        backgroundImage="/images/blogs-bg.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: slug },
        ]}
        className="text-3xl sm:text-4xl lg:text-5xl max-w-11/12 mx-auto text-center line-clamp-3 break-words whitespace-break-spaces leading-10 md:leading-14 lg:leading-16"
      />
      <div className="px-8">
        <div className="relative w-full h-[320px] md:h-[450px] lg:h-[550px]">
          <Image
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-3.jpg"
            alt="main blog image"
            fill
            className="object-cover"
          />
        </div>
        <VideoPreviewSection />
        <MessagesSection />
        <TopicsSection
          topics={[
            {
              id: "1",
              title: "Benefits of Integrating 360° Experiences:",
              description: `Increased Guest Engagement: Offer a unique and interactive activity that captivates attendees and encourages participation.
                  Enhanced Social Media Buzz: Generate a wealth of user-generated content that attendees are excited to share, significantly boosting your event's online visibility.
            Unique Branded Content: Create visually stunning and memorable content that reinforces your brand message and event aesthetic.
          Memorable Keepsakes: Give your guests a fun and unique takeaway they will cherish and share long after the event concludes.
            Data Capture (Optional): Collect valuable marketing data (with consent) through the sharing process.
`,
              iconUrl:
                "https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-two-1.jpg",
            },
            {
              id: "2",
              title: "Venue Selection and Logistics",
              description:
                "Curabitur efficitur qua Etiam eu imperdiet turpis. Etiam a tortor nec magna laoreet iacul. Ut sapien velit, rutrum nec mattis vitae, congue sed tortor. Aliquam scelerisque lorem sit amet tellus ultricies, sit ametcondimentum arcu quis facvilisis volut Nunc auctor posuere tortor. Sed ullamcorper porttitcvor massa at rutrum. Vivacc amet orci tempor, pellentesque aliquam velit gravida.",
              iconUrl:
                "https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-two-2.jpg",
            },
          ]}
          image1Url="https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-three-5.jpg"
          image2Url="https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-three-3.jpg"
          bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-bg-1.jpg"
          features={[
            "Porttitor sed id eros vitae posuere. Yoas ornare justo at arcus",
            "Porttitor sed id eros vitae posuere. Yoas ornare justo at arcus",
            "Porttitor sed id eros vitae posuere. Yoas ornare justo at arcus",
          ]}
        />
      </div>
    </motion.section>
  );
}
