import ArticleLists from "@/app/components/features/ArticleContent/ArticleLists";

interface BlogContentProps {
  blogArticle: any;
  category: any;
}

const CategorizedArticleLists: React.FC<BlogContentProps> = async ({
  blogArticle,
  category,
}) => {
  const categoryLabel = category;

  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <ArticleLists blogData={blogArticle} label={categoryLabel} />
      </div>
    </div>
  );
};

export default CategorizedArticleLists;
