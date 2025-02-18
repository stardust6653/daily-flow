import Logo from "../Logo";
import { SidebarMenuWrapperStyle, SidebarStyle } from "./Sidebar.css";

import UserInfo from "./UserInfo";
import { Dispatch } from "react";

import SidebarNavigation from "./SidebarNavigation";

interface SidebarProps {
  setSelectedTodo: Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ setSelectedTodo }: SidebarProps) => {
  return (
    <aside className={SidebarStyle}>
      <div className={SidebarMenuWrapperStyle}>
        <Logo color="white" margin="0 0 25px" />
        <SidebarNavigation setSelectedTodo={setSelectedTodo} />
      </div>
      <UserInfo />
    </aside>
  );
};

export default Sidebar;
