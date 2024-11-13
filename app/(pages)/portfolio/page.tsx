import * as Portfolio from "@/app/components/features/Portfolio/index";

function portfolio() {
  const portfolioItems = [
    {
      id: "about-me",
      title: "About Me",
      comment: "私について",
      component: <Portfolio.AboutMe />,
      bgColor: "bg-slate-50",
    },
    {
      id: "skills",
      title: "Skill",
      comment: "経験のあるスキルを一覧でまとめました",
      component: <Portfolio.Skills />,
      bgColor: "bg-white",
    },
    {
      id: "works",
      title: "Works",
      comment: "過去に作成したアプリケーションを掲載しました",
      component: <Portfolio.Works />,
      bgColor: "bg-slate-50",
    },
    {
      id: "career",
      title: "Career",
      comment: "これまでの業務経験をまとめました",
      component: <Portfolio.Career />,
      bgColor: "bg-white",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          {portfolioItems.map((portfolioItem, index) => (
            <div
              key={index}
              id={portfolioItem.id}
              className={`${portfolioItem.bgColor} py-10 md:py-24`}
            >
              <Portfolio.NavLinks portfolioItems={portfolioItems} />
              <div className="mx-auto max-w-screen-lg">
                <h1 className="text-3xl md:text-5xl font-bold my-2 text-center text-black-500">
                  {portfolioItem.title}
                </h1>
                <p className="text-md mb-4 text-center text-gray-400">
                  {portfolioItem.comment}
                </p>
                {portfolioItem.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default portfolio;
