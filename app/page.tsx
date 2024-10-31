import TopPage from "@/app/components/features/HomePage/TopPage/TopPage";
import MessageBoard from "@/app/components/features/HomePage/MessageBoard/MessageBoard";

const Home = async () => {
  return (
    <div>
      <TopPage />
      <div className="relative z-20 bg-white flex flex-col items-center justify-center w-full h-full px-4 w-full h-screen">
        <MessageBoard />
      </div>
    </div>
  );
};

export default Home;
