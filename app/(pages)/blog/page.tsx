import BlogGrid from "@/app/components/ArticleLists";

const getBlogData = async () => {
  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });
  const blogData = await res.json();
  return blogData;
};

const ArticleListPage = async () => {
  const blogData = await getBlogData();
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <BlogGrid blogData={blogData} label={"最新記事"} />
      </div>
    </div>
  );
};

export default ArticleListPage;
