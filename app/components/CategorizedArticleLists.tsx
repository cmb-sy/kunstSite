import ArticleLists from "@/app/components/ArticleLists";
import { Categories } from "@/types/post";

interface BlogContentProps {
  blogArticle: any;
  category: keyof typeof Categories;
}

const CategorizedArticleLists: React.FC<BlogContentProps> = async ({
  blogArticle,
  category,
}) => {
  const categoryLabel = Categories[category];

  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <ArticleLists blogData={blogArticle} categoryLabel={categoryLabel} />
      </div>
    </div>
  );
};

export default CategorizedArticleLists;
