import { TodoItemType, TodoListType } from "@/types/todo";
import {
  MainTaskContentStyle,
  MemoStyle,
  TaskButtonStyle,
  TaskContentStyle,
} from "./TaskContent.css";

interface TaskContentProps {
  data: TodoListType;
  item: TodoItemType;
}

const TaskContent = ({ item, data }: TaskContentProps) => {
  const completeColor = (item: TodoItemType) => {
    if (item.complete && data?.color) {
      return data.color;
    }
    return "transparent";
  };

  return (
    <div className={TaskContentStyle}>
      <button
        className={TaskButtonStyle}
        style={{ backgroundColor: completeColor(item) }}
      />
      <div>
        <p className={MainTaskContentStyle}>{item.main_task}</p>
        <p className={MemoStyle}>{item.memo}</p>
      </div>
    </div>
  );
};

export default TaskContent;
