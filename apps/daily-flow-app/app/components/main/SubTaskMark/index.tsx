import { SubTaskMarkStyle } from "./SubTaskMark.css";
import { TaskStatusType } from "@/types/types";

interface SubTaskMarkProps {
  data: TaskStatusType;
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
