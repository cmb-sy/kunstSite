import BlogGrid from "@/app/components/BlogGrid"; // BlogGridコンポーネントをインポート

interface BlogContentProps {
  blogArticle: any;
}

const BlogContent2: React.FC<BlogContentProps> = async ({ blogArticle }) => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <BlogGrid blogData={blogArticle} />
      </div>
    </div>
  );
};

export default BlogContent2;
