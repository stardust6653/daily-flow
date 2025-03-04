import api from "@/app/api/axios";
import {
  MainTaskContentStyle,
  MemoStyle,
  TaskButtonStyle,
  TaskContentStyle,
} from "./TaskContent.css";
import { TaskType } from "@/types/types";
import { themeVars } from "@/app/styles/theme.css";

interface TaskContentProps {
  item: TaskType;
  refreshData: () => void;
}

const TaskContent = ({ item, refreshData }: TaskContentProps) => {
  const completeColor = (item: TaskType) => {
    if (item.complete) {
      return themeVars.colors.state.success;
    }
    return "transparent";
  };

  const handleCompleteClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    await api
      .put(`/tasks/${item.id}`, {
        complete: !item.complete,
      })
      .then((res) => {
        console.log(res);
        refreshData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={TaskContentStyle}>
      <button
        className={TaskButtonStyle}
        style={{ backgroundColor: completeColor(item) }}
        onClick={handleCompleteClick}
      />
      <div>
        <p className={MainTaskContentStyle}>{item.main_task}</p>
        <p className={MemoStyle}>{item.memo}</p>
      </div>
    </div>
  );
};

export default TaskContent;
