import MessageBoard from "@/app/components/features/HomePage/MessageBoard/MessageBoard";
import HomePageMenu from "@/app/components/features/HomePage/HomePageMenu/HomePageMenu";
import Contact from "./components/features/Portfolio/Contact";
import TopPage from "./components/features/HomePage/TopPage/TopPage";

const sections = [
  {
    title: "最近のお知らせ",
    component: <MessageBoard />,
  },
  { title: "コンテンツ", component: <HomePageMenu /> },
  { title: "お問い合わせ", component: <Contact /> },
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <TopPage />
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 relative z-10 bg-slate-100">
          {sections.map((section, index) => (
            <div key={index} id={section.title} className={`py-12`}>
              <div className="mx-auto max-w-screen-lg">
                <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-black-500">
                  {section.title}
                </h1>
                {section.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
