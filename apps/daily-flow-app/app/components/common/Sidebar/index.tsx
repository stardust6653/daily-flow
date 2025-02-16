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

const Sidebar = () => {
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

  const todoListItems = [
    {
      name: "일상",
      color: "#9994D0",
    },
    {
      name: "업무",
      color: "#80B99D",
    },
    {
      name: "약속",
      color: "#E6A4D5",
    },
  ];

  return (
    <aside className={SidebarStyle}>
      <div className={SidebarMenuWrapperStyle}>
        <Logo color="white" margin="0 0 25px" />
        <nav className={SidebarMenuStyle}>
          <SideMenuList title="할 일 목록">
            {todoListItems.map((item) => (
              <TodoListItem key={item.name} item={item} />
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
