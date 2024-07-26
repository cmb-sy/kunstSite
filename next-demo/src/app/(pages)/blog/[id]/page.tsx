import NotFound from "@/app/non-found";

interface TBlog {
  id: string;
  title: string;
  content: string;
}

export const dynamicParams = false;

// SSG
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/blog/");

  const blogData = await res.json();
  return blogData.blogData.map((blog: TBlog) => ({
    id: blog.id,
  }));
}

const getBlogArticle = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const blogArticle = await res.json();
  return blogArticle;
};

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
  const blogArtcile = await getBlogArticle(params.id);

  // if(blogArtcile === "NotFound"){
  //   return <NotFound />
  // }

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArtcile.title}</h2>
      <p>{blogArtcile.content}</p>
    </div>
  );
};

export default BlogArticlePage;
