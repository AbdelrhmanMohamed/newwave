import * as motion from "motion/react-client";
import { PageBanner } from "@/components/page-banner";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadataObject } from "@/lib/shared/metadata";
import { Blog, BlogSubject } from "@/types/blog";
import fetchContentType from "@/lib/strapi/fetchContentType";
import RenderSubject from "@/components/subject";
import { getImageUrl } from "@/lib/utils";
import ShareSection from "@/components/share-section";
import FloatingShare from "@/components/floating-share";
import { headers } from "next/headers";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchContentType(
    "blogs",
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: "seo",
      fields: ["id"],
    },
    true
  );
  if (!blog) {
    return {
      title: "Blog not found",
      description: "The blog you are looking for does not exist.",
    };
  }
  const seo = blog?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

async function getBlogData(slug: string): Promise<Blog | null> {
  try {
    const res = await fetchContentType(
      "blogs",
      {
        filters: {
          slug: { $eq: slug },
        },
        populate: {
          subjects: {
            populate: ["images"],
          },
          cover: {
            fields: ["url"],
          },
        },
      },
      true // spreadData = true => يرجع أول عنصر بدل array
    );

    return res as Blog;
  } catch (error) {
    console.error("Error fetching base blog page data:", error);
    return null;
  }
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogData(slug);
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("x-forwarded-host") || headersList.get("host");

  const origin = `${protocol}://${host}`;
  const articleUrl = `${origin}/blog/${slug}`;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="pb-60 relative"
    >
      <PageBanner
        title={blog?.title}
        backgroundImage="/images/blogs-bg.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: slug },
        ]}
        className="text-3xl sm:text-4xl lg:text-5xl max-w-11/12 mx-auto text-center line-clamp-3 break-words whitespace-break-spaces leading-10 md:leading-14 lg:leading-16"
      />
      <div className="max-w-5xl mx-auto px-6">
        {/** MAIN IMAGE */}
        <div className="relative w-full h-[320px] md:h-[450px] lg:h-[550px]">
          <Image
            src={getImageUrl(blog.cover?.url)}
            alt="main blog image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between py-2">
          <p className="text-neutral-300 mt-4 tracking-wide uppercase text-sm">
            {new Date(blog.date).toLocaleDateString()}
          </p>
          <p className="text-primary text-sm font-semibold mt-4 tracking-wide uppercase">
            By {blog.author}
          </p>
          <FloatingShare url={articleUrl} title={blog?.title} />
        </div>
        <div>
          {(blog?.subjects || [])?.map((subject: BlogSubject) => (
            <RenderSubject key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
      {/* Bottom Share Section */}
      <ShareSection url={articleUrl} title={blog?.title} className="mt-16" />
      {/* Floating Share Section */}
    </motion.section>
  );
}
