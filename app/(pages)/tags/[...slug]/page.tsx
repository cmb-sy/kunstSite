import type { Post } from "@/app/lib/types/post";
import { Tags } from "@/app/lib/types/tags";
import TagedArticleLists from "@/app/components/features/Tags/TagedArticleLists";
import { getBlogData } from "@/app/lib/utils/getPostsData";
import { POSTS_PER_PAGE } from "@/app/lib/contants";
import { createPageData, PageData } from "@/app/lib/utils/createPage";

type TagType = "教師あり学習" | "kaggle" | "数学" | "教師なし学習";

export async function generateStaticParams() {
  const posts = await getBlogData();
  const params = Object.keys(Tags).flatMap((tag) => {
    const filteredPosts = posts.filter((post: any) => post.tags === tag);
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    return Array.from({ length: totalPages }, (_, i) => {
      // memo : slugは/繋ぎでは上手く動かないのでblog/[...slug]同様、[...slug]にしてslugに配列を渡しすことでパスが生成される。
      // slug以外を返り値しても意味はない。slugに対しパスにしたい値のみしかダメ。
      const url = `/tags/${tag}/${i + 1}`;
      const slugURL = url.split("/");
      return {
        slug: slugURL,
      };
    });
  });
  return params;
}

const TagsFilteredArticleListPage = async ({
  params,
}: {
  params: { slug: any };
}) => {
  // URLデコード
  const decodedSlug = decodeURIComponent(params.slug);
  const [tag, pageNumber] = decodedSlug.split(",") as [string, string];

  // tag が TagType のいずれかであることをチェック
  if (!["教師あり学習", "kaggle", "数学", "教師なし学習"].includes(tag)) {
    throw new Error("Invalid tag");
  }

  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });
  const blogData = await res.json();

  const filteredData = blogData.filter((blog: Post) =>
    blog.tags.includes(tag as TagType)
  );

  const pageData: PageData = createPageData(
    Number(pageNumber),
    filteredData.length
  );
  // これを渡さないと全ての記事がページネーションに関係なく表示される
  const slicedPosts = filteredData.slice(pageData.start, pageData.end);

  return (
    <TagedArticleLists
      blogArticle={slicedPosts}
      tags={tag as TagType}
      pageData={pageData}
      pageType={`tags/${tag}`}
    />
  );
};

export default TagsFilteredArticleListPage;
