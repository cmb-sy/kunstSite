import MessageBoard from "@/app/components/features/HomePage/MessageBoard/MessageBoard";
import Contact from "./components/features/HomePage/Contact";
import TopPage from "./components/features/HomePage/TopPage/TopPage";

const sections = [
  {
    id: "1",
    component: <MessageBoard />,
    bgColor: "bg-topPageBackgroundColor",
  },
  {
    id: "2",
    component: <Contact />,
    bgColor: "bg-white",
  },
];

const Home = () => {
  return (
    <>
      <TopPage />
      <div className="flex-1 relative z-10">
        {sections.map((section, index) => (
          <div key={index} id={section.id} className={section.bgColor}>
            <div className="max-w-screen-lg">{section.component}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
