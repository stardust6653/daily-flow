import { Dispatch } from "react";
import {
  TodoListItemColorChipStyle,
  TodoListItemStyle,
} from "./TodoListItem.css";

interface TodoListItemProps {
  item: {
    name: string;
    color: string;
  };
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
}

const TodoListItem = ({ item, setSelectedCategory }: TodoListItemProps) => {
  const handleClick = () => {
    setSelectedCategory(item.name);
  };

  return (
    <li className={TodoListItemStyle} key={item.name} onClick={handleClick}>
      <span
        className={TodoListItemColorChipStyle}
        style={{ backgroundColor: item.color }}
      />
      <span>{item.name}</span>
    </li>
  );
};

export default TodoListItem;
