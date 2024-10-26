import BlogGrid from "@/app/components/features/ArticleContent/ArticleLists";

const getBlogData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog/", {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const blogData = await res.json();
    return blogData;
  } catch (error) {
    console.error("Failed to fetch blog article:", error);
    return null;
  }
};

const ArticleLists = async () => {
  const blogData = await getBlogData();
  if (!blogData) {
    return <div>ブログ記事の取得に失敗しました。</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <BlogGrid blogData={blogData} label={"最新記事"} />
      </div>
    </div>
  );
};

export default ArticleLists;
