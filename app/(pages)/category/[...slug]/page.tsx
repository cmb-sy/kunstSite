import { Categories } from "@/app/lib/types/categories";
import CategorizedArticleLists from "@/app/components/features/Category/CategorizedArticleLists";
import { Post } from "@/app/lib/types/post";
import { createPageData, PageData } from "@/app/lib/utils/createPage";
import { getPostsData } from "@/app/lib/utils/getPostsData";
import { POSTS_PER_PAGE } from "@/app/lib/contants";

// SSG
export async function generateStaticParams() {
  const posts = await getPostsData();

  const params = Object.keys(Categories).flatMap((category) => {
    const filteredPosts = posts.filter(
      (post: any) => post.category === category
    );
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    return Array.from({ length: totalPages }, (_, i) => {
      // memo : slugは/繋ぎでは上手く動かないのでblog/[...slug]同様、[...slug]にしてslugに配列を渡しすことでパスが生成される。
      // slug以外を返り値しても意味はない。slugに対しパスにしたい値のみしかダメ。
      const url = `category/${category}/${i + 1}`;
      const slugURL = url.split("/");
      return {
        slug: slugURL,
      };
    });
  });

  return params;
}

const CategorizedArticleListPage = async ({
  params,
}: {
  // このslugは上のgenerateStaticParamsの値ではなく,URLの値がくる
  params: { slug: any };
}) => {
  const decodedSlug = decodeURIComponent(params.slug);

  const [category, pageNumber] = decodedSlug.split(",");
  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });
  const posts = await res.json();

  // slug値(カテゴリー)でblogDataをフィルタリング
  const filteredData = posts.filter((blog: Post) => blog.category === category);
  const pageData: PageData = createPageData(
    Number(pageNumber),
    filteredData.length
  );
  // これを渡さないと全ての記事がページネーションに関係なく表示される
  const slicedPosts = filteredData.slice(pageData.start, pageData.end);

  return (
    <CategorizedArticleLists
      blogArticle={slicedPosts}
      category={category}
      pageData={pageData}
      pageType={`category/${category}`}
    />
  );
};

export default CategorizedArticleListPage;
