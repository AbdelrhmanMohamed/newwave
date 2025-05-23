import BlogCard from "@/components/cards/blog-card";
import CustomPagination from "@/components/custom-pagination";
import { PageBanner } from "@/components/page-banner";
import React from "react";
import * as motion from "motion/react-client";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Metadata } from "next";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { Blog, BlogPageData } from "@/types/blog";


export const revalidate = 60
// export const dynamicParams = true


export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchContentType("blog-page", {
    populate: {
      seo: {
        populate: "*",
      },
    }
  }, true)
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}



async function getBlogPageData() {
  try {
    const res = await fetchContentType('blog-page', {
      'populate': {
        'cover': {
          fields: ['url'],
        },
      },
    }, true)
    return res as BlogPageData;
  } catch (error) {
    console.error("Error fetching base blog page data:", error);
    return {} as BlogPageData;
  }
}

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=cover`
  );
  const blogs = await res.json();

  return blogs.data || [];
}

export default async function BlogPage() {
  const blogPageData = await getBlogPageData()
  const blogs = await fetchBlogs();

  console.log(blogs, "blogPageData")

  return (
    <div className="pb-60">
      <PageBanner
        title="Blog"
        backgroundImage={`${process.env.NEXT_PUBLIC_API_URL}${blogPageData?.cover?.url}`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="px-8 lg:px-16 xl:px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-20 md:mb-30 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              imageUrl={`${process.env.NEXT_PUBLIC_API_URL}${blog.cover?.url}`}
              imageAlt={blog.cover?.alternativeText || ""}
              date={blog.date}
              title={blog.title}
              excerpt={blog?.summary ? blog.summary.split(" ").slice(0, 20).join(" ") + "..." : ""}
              slug={blog.slug}
            />
          ))}
        </div>
        <CustomPagination totalPages={3} initialPage={2} />
      </motion.section>
    </div>
  );
}
