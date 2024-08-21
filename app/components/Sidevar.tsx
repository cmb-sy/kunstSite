import React from "react";
import ProfileCard from "./ProfileCard";

interface SidebarProps {
  TocComponent?: React.ReactNode;
  TocComponent2?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ TocComponent, TocComponent2 }) => {
  return (
    <aside className="hidden lg:block">
      <ProfileCard />
      <div className="w-full">{TocComponent}</div>
      <div className="w-full">{TocComponent2}</div>
    </aside>
  );
};

export default Sidebar;
