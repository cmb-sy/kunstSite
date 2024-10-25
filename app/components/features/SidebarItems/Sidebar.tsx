import React from "react";
import ProfileCard from "@/app/components/features/SidebarItems/ProfileCard";

export interface SidebarTypes {
  SidebarComponents?: React.ReactNode[];
}

const Sidebar: React.FC<SidebarTypes> = ({ SidebarComponents }) => {
  return (
    <aside className="hidden lg:block lg:w-custom-298 ">
      <ProfileCard />
      <div>
        {SidebarComponents!.map((SidebarComponent) => SidebarComponent)}
      </div>
    </aside>
  );
};

export default Sidebar;
