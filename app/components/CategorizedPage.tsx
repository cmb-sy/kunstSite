import BlogGrid from "@/app/components/BlogGrid";
import { Categories } from "@/types/post";

interface BlogContentProps {
  blogArticle: any;
  category: any;
}

const BlogContent2: React.FC<BlogContentProps> = async ({
  blogArticle,
  category,
}) => {
  const categoryLabel = Categories[category];

  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <BlogGrid blogData={blogArticle} newArticlesLabel={categoryLabel} />
      </div>
    </div>
  );
};

export default BlogContent2;
