// URLのパラメータ（例えば、/blog/[id]のid部分）を取得して、その値をコンポーネントに渡す。
// 異なるidに基づいて異なるブログ記事ページを動的に生成することができる。

interface TBlog {
  id: string;
  title: string;
  content: string;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/blog/");

  const blogData = await res.json();

  console.log(blogData);

  return blogData.map((blog: TBlog) => ({
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

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArtcile.title}</h2>
      <p>{blogArtcile.content}</p>
    </div>
  );
};

export default BlogArticlePage;
