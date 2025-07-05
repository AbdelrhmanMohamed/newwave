import BlogCard2 from "@/components/cards/blog-card2";
import AnimatedText from "@/components/effects/animate-text";
import SectionHead from "@/components/headings/section-head";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getImageUrl } from "@/lib/utils";
import { Homepage } from "@/types/homepage";

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        blogs: {
          populate: {
            cover: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },
    });

    return res?.data as Homepage | null;
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return null;
  }
}

export default async function BlogsSection() {
  const homepageData = await getHomeData();
  const blogs = homepageData?.blogs || [];
  if (!blogs || blogs.length === 0) {
    return (
      <div className="w-full px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">No blogs available</h2>
      </div>
    );
  }
  return (
    <div className="w-full px-6 relative py-20 text-white ">
      <div className="flex flex-col items-center mb-12">
        <SectionHead
          show={{
            start: true,
            end: true,
          }}
          title={homepageData?.blogs_headline || "Latest Blogs"}
          animate
        />
        <AnimatedText
          className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-4 leading-14 flex flex-wrap justify-center"
          text={homepageData?.blogs_title || "Our Latest Blogs"}
        />
      </div>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(blogs || []).map((blog, index) => (
          <BlogCard2
            key={index}
            imageUrl={getImageUrl(blog?.cover?.url)}
            imageAlt={blog?.cover?.alternativeText || ""}
            date={blog?.date}
            title={blog?.title}
            description={
              blog?.summary
                ? blog?.summary.split(" ").slice(0, 20).join(" ") + "..."
                : ""
            }
            href={blog?.slug}
          />
        ))}
      </div>
    </div>
  );
}
