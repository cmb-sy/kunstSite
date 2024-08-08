interface TBlog {
  slug: string;
  title: string;
  content: string;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });

  const blogData = await res.json();

  console.log(blogData);

  return blogData.map((blog: TBlog) => ({
    slug: blog.slug,
  }));
}

const getBlogArticle = async (slug: string) => {
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
      <h2 className="text-[50px]">{blogArtcile.title}</h2>
      <p>{blogArtcile.content}</p>
    </div>
  );
};

export default BlogArticlePage;
