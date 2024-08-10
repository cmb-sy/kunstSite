interface TBlog {
  slug: string;
  title: string;
  content: string;
}

export const dynamicParams = false;

// SSG
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });
  const blogData = await res.json();
  return blogData.map((blog: TBlog) => ({
    slug: blog.slug,
  }));
}

const getBlogArticle = async (slug: string) => {
  // console.log("slug", slug);
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    cache: "force-cache",
  });
  const blogArticle = await res.json();
  return blogArticle;
};

const BlogArticlePage = async ({ params }: { params: { slug: string } }) => {
  const blogArtcile = await getBlogArticle(params.slug);

  return (
    <div className="container mx-auto py-5">
      <article>
        <h1>{blogArtcile.title}</h1>
        <br />
        <div>{blogArtcile.date}</div>
        <br />
        <div
          dangerouslySetInnerHTML={{ __html: blogArtcile.blogContentsHTML }}
        />
      </article>
    </div>
  );
};

export default BlogArticlePage;
