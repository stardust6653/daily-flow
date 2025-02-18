import { TodoItemType } from "@/types/todo";
import { TodoTypeStyle } from "./TodoType.css";

interface TodoTypeProps {
  item: TodoItemType;
}

const TodoType = ({ item }: TodoTypeProps) => {
  return (
    <p className={TodoTypeStyle}>
      {item?.type === "todo" ? "할 일" : item?.period}
    </p>
  );
};

export default TodoType;
