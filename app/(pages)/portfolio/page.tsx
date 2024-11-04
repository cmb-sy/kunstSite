import AboutMe from "@/app/components/features/Portfolio/AboutMe";
import Career from "@/app/components/features/Portfolio/Career/Career";
import Works from "@/app/components/features/Portfolio/Work/Works";
import Skills from "@/app/components/features/Portfolio/Skill/Skills";
import NavLinks from "@/app/components/features/Portfolio/NavLinks";

function portfolio() {
  const portfolioItems = [
    {
      id: "about-me",
      title: "About Me",
      comment: "私について",
      component: <AboutMe />,
      bgColor: "bg-slate-50",
    },
    {
      id: "skills",
      title: "Skill",
      comment: "経験のあるスキルを一覧でまとめました",
      component: <Skills />,
      bgColor: "bg-white",
    },
    {
      id: "works",
      title: "Works",
      comment: "過去に作成したアプリケーションを掲載しました",
      component: <Works />,
      bgColor: "bg-slate-50",
    },
    {
      id: "career",
      title: "Career",
      comment: "これまでの業務経験をまとめました",
      component: <Career />,
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
              className={`${portfolioItem.bgColor} py-24`}
            >
              <NavLinks portfolioItems={portfolioItems} />
              <div className="mx-auto max-w-screen-lg">
                <h1 className="sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 mt-2 text-center text-black-500">
                  {portfolioItem.title}
                </h1>
                <p className="text-md mb-4 text-center text-gray-900">
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
