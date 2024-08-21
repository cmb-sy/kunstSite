import React from "react";
import ProfileCard from "./ProfileCard";

interface SidebarProps {
  TocComponent: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ TocComponent }) => {
  return (
    <aside className="hidden lg:block">
      <ProfileCard />
      <div>{TocComponent}</div>
    </aside>
  );
};

export default Sidebar;
