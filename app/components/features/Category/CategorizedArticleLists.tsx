import ArticleLists from "@/app/components/features/ArticleContent/ArticleLists";

interface BlogContentProps {
  blogArticle: any;
  category: any;
  pageData: any;
  pageType: string;
}

const CategorizedArticleLists: React.FC<BlogContentProps> = async ({
  blogArticle,
  category,
  pageData,
  pageType,
}) => {
  const categoryLabel = category;

  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between">
        <ArticleLists
          blogData={blogArticle}
          label={categoryLabel}
          pageData={pageData}
          pageType={pageType}
        />
      </div>
    </div>
  );
};

export default CategorizedArticleLists;
