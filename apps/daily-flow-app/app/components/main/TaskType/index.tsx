import { TaskItemType } from "@/types/task";
import { TaskTypeStyle } from "./TaskType.css";

interface TaskTypeProps {
  item: TaskItemType;
}

const TaskType = ({ item }: TaskTypeProps) => {
  console.log(item);

  return (
    <p className={TaskTypeStyle}>
      {item?.type === "task" ? "할 일" : item?.period}
    </p>
  );
};

export default TaskType;
