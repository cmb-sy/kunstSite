interface BlogContentProps {
  blogArticle: any;
}

const BlogContent: React.FC<BlogContentProps> = ({ blogArticle }) => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between w-full section-style2">
        <section className="p-8 section-style bg-white">ss</section>
      </div>
    </div>
  );
};

export default BlogContent;
