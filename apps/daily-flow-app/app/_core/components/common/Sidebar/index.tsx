import Logo from "../Logo";
import { SidebarMenuWrapperStyle, SidebarStyle } from "./Sidebar.css";

import UserInfo from "./UserInfo";
import { Dispatch, SetStateAction } from "react";

import SidebarNavigation from "./SidebarNavigation";
import { CategoryType } from "@/types/types";

interface SidebarProps {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
  categories: CategoryType[];
}

const Sidebar = ({
  setSelectedCategory,
  setIsModalOpen,
  categories,
}: SidebarProps) => {
  return (
    <aside className={SidebarStyle}>
      <div className={SidebarMenuWrapperStyle}>
        <Logo color="white" margin="0 0 25px" />
        <SidebarNavigation
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <UserInfo />
    </aside>
  );
};

export default Sidebar;
