import Logo from "../Logo";
import {
  SidebarMenuItemIconStyle,
  SidebarMenuItemStyle,
  SidebarMenuStyle,
  SidebarMenuWrapperStyle,
  SidebarStyle,
} from "./Sidebar.css";
import { CiCalendar } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import SideMenuList from "./SideMenuList";
import TodoListItem from "./TodoListItem";
import MenuItem from "./MenuItem";
import UserInfo from "./UserInfo";
import { Dispatch } from "react";

import todoListData from "@/app/data/todoList.json";

interface SidebarProps {
  setSelectedTodo: Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ setSelectedTodo }: SidebarProps) => {
  const menuItems = [
    {
      key: "calendar",
      element: (
        <span className={SidebarMenuItemStyle}>
          <CiCalendar className={SidebarMenuItemIconStyle} /> 캘린더
        </span>
      ),
      href: "/calendar",
    },
    {
      key: "analysis",
      element: (
        <span className={SidebarMenuItemStyle}>
          <IoAnalytics className={SidebarMenuItemIconStyle} /> 분석
        </span>
      ),
      href: "/analysis",
    },
  ];

  const todoList = todoListData;

  return (
    <aside className={SidebarStyle}>
      <div className={SidebarMenuWrapperStyle}>
        <Logo color="white" margin="0 0 25px" />
        <nav className={SidebarMenuStyle}>
          <SideMenuList title="할 일 목록">
            {todoList.map((item) => (
              <TodoListItem
                key={item.name}
                item={item}
                setSelectedTodo={setSelectedTodo}
              />
            ))}
          </SideMenuList>

          <SideMenuList title="메뉴">
            {menuItems.map((item) => (
              <MenuItem key={item.key} item={item} />
            ))}
          </SideMenuList>
        </nav>
      </div>
      <UserInfo />
    </aside>
  );
};

export default Sidebar;
