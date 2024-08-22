import React from "react";
import ProfileCard from "./ProfileCard";

export interface SidebarTypes {
  SidebarComponents?: React.ReactNode[];
}

const Sidebar: React.FC<SidebarTypes> = ({ SidebarComponents }) => {
  return (
    <aside className="hidden lg:block">
      <ProfileCard />
      <div className="w-full">
        {SidebarComponents!.map((SidebarComponent) => SidebarComponent)}
      </div>
    </aside>
  );
};

export default Sidebar;
