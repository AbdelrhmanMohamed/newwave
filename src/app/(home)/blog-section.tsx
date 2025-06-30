import BlogCard2 from "@/components/cards/blog-card2";
import AnimatedText from "@/components/effects/animate-text";
import SectionHead from "@/components/headings/section-head";
import { getImageUrl } from "@/lib/utils";
import { Blog } from "@/types/blog";

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=cover&pagination[limit]=2`,
    {
      method: "GET",
    }
  );
  const blogs = await res.json();

  return blogs.data || [];
}

export default async function BlogsSection() {
  const blogs = await fetchBlogs();
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
          title="Blog"
          animate
        />
        <AnimatedText
          className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-4 leading-14 flex flex-wrap justify-center"
          text="Digital World News"
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
