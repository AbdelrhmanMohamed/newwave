import BlogCard from "@/components/cards/blog-card";
import CustomPagination from "@/components/custom-pagination";
import { PageBanner } from "@/components/page-banner";
import React from "react";
import * as motion from "motion/react-client";

export default function Blog() {
  return (
    <div className="pb-60">
      <PageBanner
        title="Blog"
        backgroundImage="/images/contact-us-breadcrumb.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="px-8 lg:px-16 xl:px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-20 md:mb-30 gap-8">
          <BlogCard
            imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Blog-Detail-Type-Img-1-768x439.png"
            imageAlt="Gaming setup with RGB keyboard and mouse on desk with red ambient lighting"
            date="June 22, 2023"
            title="Creative graphics designing tools"
            excerpt="Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim..."
          />
          <BlogCard
            imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Blog-Detail-Type-Img-1-768x439.png"
            imageAlt="Gaming setup with RGB keyboard and mouse on desk with red ambient lighting"
            date="June 22, 2023"
            title="Creative graphics designing tools"
            excerpt="Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim..."
          />
          <BlogCard
            imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Blog-Detail-Type-Img-1-768x439.png"
            imageAlt="Gaming setup with RGB keyboard and mouse on desk with red ambient lighting"
            date="June 22, 2023"
            title="Creative graphics designing tools"
            excerpt="Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim..."
          />
        </div>
        <CustomPagination totalPages={3} initialPage={2} />
      </motion.section>
    </div>
  );
}
