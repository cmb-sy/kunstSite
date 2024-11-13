import * as Homepage from "@/app/components/features/HomePage/index";

const sections = [
  {
    id: "1",
    component: <Homepage.MessageBoard />,
    bgColor: "bg-topPageBackgroundColor dark:bg-black",
  },
  {
    id: "2",
    component: <Homepage.Contact />,
    bgColor: "bg-white dark:bg-black",
  },
];

const Home = () => {
  return (
    <>
      <Homepage.TopPage />
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
