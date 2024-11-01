import MessageBoard from "@/app/components/features/HomePage/MessageBoard/MessageBoard";
import HomePageMenu from "@/app/components/features/HomePage/HomePageMenu/HomePageMenu";
import Contact from "./components/features/Portfolio/Contact";

const sections = [
  {
    title: "",
    component: <MessageBoard />,
    bgColor: "bg-slate-50",
  },
  { title: "全体のタイトル", component: <HomePageMenu />, bgColor: "white" },
  { title: "全体のタイトル", component: <Contact />, bgColor: "bg-slate-50" },
];

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          {sections.map((section, index) => (
            <div
              key={index}
              id={section.title}
              className={`${section.bgColor} py-24`}
            >
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
