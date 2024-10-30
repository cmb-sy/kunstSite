import ArticleLists from "@/app/components/features/ArticleContent/ArticleLists";
import type { Tag } from "@/app/lib/types/tags";

interface BlogContentProps {
  blogArticle: any;
  tags: Tag | string;
  pageData: any;
  pageType: string;
}

const TagedArticleLists: React.FC<BlogContentProps> = async ({
  blogArticle,
  tags,
  pageData,
  pageType,
}) => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <ArticleLists
          blogData={blogArticle}
          label={tags}
          pageData={pageData}
          pageType={pageType}
        />
      </div>
    </div>
  );
};

export default TagedArticleLists;
