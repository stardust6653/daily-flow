import { MENU_ITEMS } from "@/constants/menuItems";
import SideMenuList from "../SideMenuList";
import TodoListItem from "../TodoListItem";
import MenuItem from "../MenuItem";
import { SidebarNavigationStyle } from "./SidebarNavigation.css";
import { Dispatch, SetStateAction } from "react";
import AddCategory from "../AddCategory";
import { CategoryType } from "@/types/types";

interface SidebarProps {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
  categories: CategoryType[];
}

const SidebarNavigation = ({
  setSelectedCategory,
  setIsModalOpen,
  categories,
}: SidebarProps) => {
  return (
    <nav className={SidebarNavigationStyle}>
      <SideMenuList title="할 일 목록">
        {categories.map((item) => (
          <TodoListItem
            key={item.name}
            item={item}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
        <AddCategory setIsModalOpen={setIsModalOpen} />
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
