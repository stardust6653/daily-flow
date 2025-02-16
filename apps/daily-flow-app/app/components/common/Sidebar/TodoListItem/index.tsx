import {
  TodoListItemColorChipStyle,
  TodoListItemStyle,
} from "./TodoListItem.css";

interface TodoListItemProps {
  item: {
    name: string;
    color: string;
  };
}

const TodoListItem = ({ item }: TodoListItemProps) => {
  return (
    <li className={TodoListItemStyle} key={item.name}>
      <span
        className={TodoListItemColorChipStyle}
        style={{ backgroundColor: item.color }}
      />
      <span>{item.name}</span>
    </li>
  );
};

export default TodoListItem;
