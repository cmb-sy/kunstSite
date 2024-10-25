import Image from "next/image";

interface ArticleImageGifMovieGifMovieProps {
  path: string;
  alt: string;
}

const ArticleImageGifMovieGifMovie: React.FC<
  ArticleImageGifMovieGifMovieProps
> = ({ path, alt }) => {
  const isVideo = path.endsWith(".mp4");
  const isGif = path.endsWith(".gif");

  return (
    <div className="relative z-10 flex items-center w-full mt-10">
      {isVideo ? (
        <video controls width="800" height="800">
          <source
            src={path.startsWith("/") ? path : `/${path}`}
            type="video/mp4"
          />
          {alt}
        </video>
      ) : isGif ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={path.startsWith("/") ? path : `/${path}`}
          width={800}
          height={800}
          alt={alt}
        />
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

export default ArticleImageGifMovieGifMovie;
