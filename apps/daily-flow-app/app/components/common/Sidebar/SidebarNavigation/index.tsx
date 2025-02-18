import { MENU_ITEMS } from "@/constants/menuItems";
import SideMenuList from "../SideMenuList";
import TodoListItem from "../TodoListItem";
import MenuItem from "../MenuItem";
import { SidebarNavigationStyle } from "./SidebarNavigation.css";
import taskListData from "@/app/data/taskList.json";
import { Dispatch } from "react";

interface SidebarProps {
  setSelectedTask: Dispatch<React.SetStateAction<string>>;
}

const SidebarNavigation = ({ setSelectedTask }: SidebarProps) => {
  const taskList = taskListData;

  return (
    <nav className={SidebarNavigationStyle}>
      <SideMenuList title="할 일 목록">
        {taskList.map((item) => (
          <TodoListItem
            key={item.name}
            item={item}
            setSelectedTask={setSelectedTask}
          />
        ))}
      </SideMenuList>

      <SideMenuList title="메뉴">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.key} item={item} />
        ))}
      </SideMenuList>
    </nav>
  );
};

export default SidebarNavigation;
