import { MENU_ITEMS } from "@/constants/menuItems";
import SideMenuList from "../SideMenuList";
import TodoListItem from "../TodoListItem";
import MenuItem from "../MenuItem";
import { SidebarNavigationStyle } from "./SidebarNavigation.css";
import todoListData from "@/app/data/todoList.json";
import { Dispatch } from "react";

interface SidebarProps {
  setSelectedTodo: Dispatch<React.SetStateAction<string>>;
}

const SidebarNavigation = ({ setSelectedTodo }: SidebarProps) => {
  const todoList = todoListData;

  return (
    <nav className={SidebarNavigationStyle}>
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
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.key} item={item} />
        ))}
      </SideMenuList>
    </nav>
  );
};

export default SidebarNavigation;
