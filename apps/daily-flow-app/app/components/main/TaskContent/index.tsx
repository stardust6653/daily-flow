import {
  MainTaskContentStyle,
  MemoStyle,
  TaskButtonStyle,
  TaskContentStyle,
} from "./TaskContent.css";
import { TaskStatusType, TaskType } from "@/types/types";

interface TaskContentProps {
  data: TaskStatusType;
  item: TaskType;
}

const TaskContent = ({ item, data }: TaskContentProps) => {
  const completeColor = (item: TaskType) => {
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
