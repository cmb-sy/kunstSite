import Image from "next/image";

interface ArticleImageGifMovieGifMovieProps {
  path: string;
  alt: string;
  width?: number;
  height?: number;
}

const ArticleImageGifMovieGifMovie: React.FC<
  ArticleImageGifMovieGifMovieProps
> = ({ path, alt, width = 800, height = 800 }) => {
  const isVideo = path.endsWith(".mp4");
  const isGif = path.endsWith(".gif");

  return (
    <div className="relative z-10 justify-items-center mt-4">
      {isVideo ? (
        <video controls width={width} height={height}>
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
          width={width}
          height={height}
          alt={alt}
        />
      ) : (
        <Image
          src={path.startsWith("/") ? path : `/${path}`}
          width={width}
          height={height}
          alt={alt}
          priority
        />
      )}
    </div>
  );
};

export default ArticleImageGifMovieGifMovie;
