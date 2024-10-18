// ------------------
// 記事の画像を出すためのコンポーネント
// ------------------
import Image from "next/image";

interface ArticleImage {
  path: string;
  alt: string;
}

const ArticleImage: React.FC<ArticleImage> = ({ path, alt }) => {
  return (
    <div className="relative z-10 flex items-center w-full">
      <Image src={path} width={800} height={800} alt={alt} />
    </div>
  );
};

export default ArticleImage;
