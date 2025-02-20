import Logo from "../Logo";
import { SidebarMenuWrapperStyle, SidebarStyle } from "./Sidebar.css";

import UserInfo from "./UserInfo";
import { Dispatch } from "react";

import SidebarNavigation from "./SidebarNavigation";

interface SidebarProps {
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ setSelectedCategory }: SidebarProps) => {
  return (
    <aside className={SidebarStyle}>
      <div className={SidebarMenuWrapperStyle}>
        <Logo color="white" margin="0 0 25px" />
        <SidebarNavigation setSelectedCategory={setSelectedCategory} />
      </div>
      <UserInfo />
    </aside>
  );
};

export default Sidebar;
