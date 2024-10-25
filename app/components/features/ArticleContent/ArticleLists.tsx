import Link from "next/link";
import Sidebar from "../SidebarItems/Sidebar";
// import SearchBar from "./SearchBar";
import SideBarCategoryLists from "../Category/CategoryList";
import SideBarTagLists from "../Tags/TagsList";
import NotArticle from "@/app/not-article";
import type { Categories } from "@/types/categories";
import { marked } from "marked";
const stripMarkdown = async (markdown: string): Promise<string> => {
  const html = await marked(markdown);
  const text = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return text.trim();
};

interface ArticleListsProps {
  blogData: any;
  label: string | string[] | undefined;
}

const ArticleLists: React.FC<ArticleListsProps> = async ({
  blogData,
  label,
}) => {
  // カテゴリー内の記事がない場合はレイアウトが崩れるので、別ページへ遷移
  if (blogData.length === 0) {
    return <NotArticle />;
  }

  return (
    <>
      <section className="container mx-auto section-style3">
        <div className="flex justify-center items-center p-4">
          <span className="text-3xl font-medium px-4 pt-1 pb-2 text-black rounded">
            {label}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {await Promise.all(
            blogData.map(async (post: any, index: number) => {
              const strippedContent = (await stripMarkdown(post.content))
                // カードの大きさに応じて要変更
                .substring(0, 80);

              return (
                <div
                  key={index}
                  className="p-5 border rounded shadow-lg bg-white relative transform transition-transform duration-300 hover:scale-105 max-w-lg mx-auto"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                    <div className="relative"></div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                      <span>{post.date}</span>
                      {/* タグがない場合でも対応できるようにする */}
                      {(post.tags || []).map(
                        (tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                    <p>{strippedContent}</p>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </section>
      <div className="mt-20">
        <Sidebar
          SidebarComponents={[
            // <SearchBar key="search" />,
            <SideBarCategoryLists key="category" />,
            <SideBarTagLists key="tag" />,
          ]}
        />
      </div>
    </>
  );
};

export default ArticleLists;
