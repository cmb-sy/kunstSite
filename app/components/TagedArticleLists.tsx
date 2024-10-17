import ArticleLists from "@/app/components/ArticleLists";
import type { Tag } from "@/types/tags";

interface BlogContentProps {
  blogArticle: any;
  tags: Tag | string[];
}

const TagedArticleLists: React.FC<BlogContentProps> = async ({
  blogArticle,
  tags,
}) => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <ArticleLists blogData={blogArticle} label={tags} />
      </div>
    </div>
  );
};

export default TagedArticleLists;
