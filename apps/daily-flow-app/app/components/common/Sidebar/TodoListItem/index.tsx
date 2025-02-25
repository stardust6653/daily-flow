import { Dispatch } from "react";
import {
  TodoListItemColorChipStyle,
  TodoListItemStyle,
} from "./TodoListItem.css";
import { CategoryType } from "@/types/types";

interface TodoListItemProps {
  item: CategoryType;
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
}

const TodoListItem = ({ item, setSelectedCategory }: TodoListItemProps) => {
  const handleClick = () => {
    setSelectedCategory(item?.id);
  };

  return (
    <li className={TodoListItemStyle} key={item?.id} onClick={handleClick}>
      <span
        className={TodoListItemColorChipStyle}
        style={{ backgroundColor: item?.color }}
      />
      <span>{item?.name}</span>
    </li>
  );
};

export default TodoListItem;
