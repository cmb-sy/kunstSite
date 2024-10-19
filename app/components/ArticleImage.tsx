import Image from "next/image";

interface ArticleImageProps {
  path: string;
  alt: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ path, alt }) => {
  return (
    <div className="relative z-10 flex items-center w-full">
      <Image
        src={path.startsWith("/") ? path : `/${path}`}
        width={800}
        height={800}
        alt={alt}
        priority
      />
    </div>
  );
};

export default ArticleImage;
