"use client";

interface PortfolioItems {
  id: string;
}

interface NavLinksProps {
  portfolioItems: PortfolioItems[];
}

const NavLinks: React.FC<NavLinksProps> = ({ portfolioItems }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center text-gray-300 dark:text-gray-500">
      {portfolioItems.map((portfolioItem) => (
        <span
          key={portfolioItem.id}
          className="cursor-pointer hover:text-lime-700 mx-2"
          onClick={() => handleScroll(portfolioItem.id)}
        >
          {portfolioItem.id}
        </span>
      ))}
    </div>
  );
};

export default NavLinks;
