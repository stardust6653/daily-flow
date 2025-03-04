import { TaskTypeStyle } from "./TaskType.css";
import { TaskType as TaskItemType } from "@/types/types";

interface TaskTypeProps {
  item: TaskItemType;
}

const TaskType = ({ item }: TaskTypeProps) => {
  return (
    <p className={TaskTypeStyle}>
      {item?.type === "task" ? "할 일" : item?.period}
    </p>
  );
};

export default TaskType;
