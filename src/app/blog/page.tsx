import BlogCard from "@/components/cards/blog-card";
import CustomPagination from "@/components/custom-pagination";
import { PageBanner } from "@/components/page-banner";
import React from "react";
import * as motion from "motion/react-client";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Metadata } from "next";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { Blog, BlogPageData } from "@/types/blog";
import { getImageUrl } from "@/lib/utils";
import { ClapperboardIcon } from "lucide-react";

export const revalidate = 30; // Revalidate every 30 seconds;
// export const dynamicParams = true

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType(
    "blog-page",
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

async function getBlogPageData() {
  try {
    const res = await fetchContentType(
      "blog-page",
      {
        populate: {
          cover: {
            fields: ["url"],
          },
          header: {
            populate: "*",
          },
        },
        sort: ["createdAt:ASC"],
      },
      true
    );
    return res as BlogPageData;
  } catch (error) {
    console.error("Error fetching base blog page data:", error);
    return {} as BlogPageData;
  }
}

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=cover`,
    {
      method: "GET",
    }
  );
  const blogs = await res.json();

  return blogs.data || [];
}

export default async function BlogPage() {
  const blogPageData = await getBlogPageData();
  const blogs = await fetchBlogs();

  if (!blogPageData) {
    return <div>Error loading blog page data</div>;
  }

  return (
    <div className="pb-60">
      <PageBanner
        title="Blog"
        backgroundImage={getImageUrl(blogPageData.cover?.url)}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{
          duration: 1,
        }}
        layout
        className="px-4 md:px-16 py-14 md:py-20 lg:py-26 flex gap-6 xl:gap-12 flex-col xl:flex-row"
      >
        <div className="flex items-center flex-col md:flex-row text-center xl:text-left gap-8 md:gap-4 lg:gap-10 xl:gap-12 w-full justify-center xl:justify-start ">
          <ClapperboardIcon className="size-20 md:size-26 md:min-w-26  stroke-[1px]" />
          <h2 className="text-4xl md:text-[2.5rem] lg:text-[3rem] font-bold text-primary leading-12 md:leading-16">
            {blogPageData?.header?.title}
          </h2>
        </div>
        <div className="text-neutral-400 w-full text-center xl:text-left relative top-2 xl:w-8/12">
          <p>{blogPageData?.header?.description}</p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
        }}
        className="px-8 lg:px-16 xl:px-20 min-h-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-20 md:mb-30 gap-8">
          {(blogs || [])
            .sort(
              (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            )
            .map((blog) => (
              <BlogCard
                key={blog.id}
                imageUrl={getImageUrl(blog?.cover?.url)}
                imageAlt={blog?.cover?.alternativeText || ""}
                date={blog?.date}
                title={blog?.title}
                excerpt={
                  blog?.summary
                    ? blog?.summary.split(" ").slice(0, 20).join(" ") + "..."
                    : ""
                }
                slug={blog?.slug}
              />
            ))}
        </div>
        <CustomPagination totalPages={3} initialPage={2} />
      </motion.section>
    </div>
  );
}
