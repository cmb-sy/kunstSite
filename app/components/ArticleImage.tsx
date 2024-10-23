import Image from "next/image";

interface ArticleImageProps {
  path: string;
  alt: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ path, alt }) => {
  const isVideo = path.endsWith(".mp4");

  return (
    <div className="relative z-10 flex items-center w-full">
      {isVideo ? (
        <video controls width="800" height="800">
          <source
            src={path.startsWith("/") ? path : `/${path}`}
            type="video/mp4"
          />
          {alt}
        </video>
      ) : (
        <Image
          src={path.startsWith("/") ? path : `/${path}`}
          width={800}
          height={800}
          alt={alt}
          priority
        />
      )}
    </div>
  );
};

export default ArticleImage;
