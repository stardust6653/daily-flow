import { TaskListType } from "@/types/task";
import { SubTaskMarkStyle } from "./SubTaskMark.css";

interface SubTaskMarkProps {
  data: TaskListType;
}

const SubTaskMark = ({ data }: SubTaskMarkProps) => {
  return (
    <div
      className={SubTaskMarkStyle}
      style={{ backgroundColor: data?.color }}
    />
  );
};

export default SubTaskMark;
