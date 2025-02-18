import { TodoListType } from "@/types/todo";
import { SubTaskMarkStyle } from "./SubTaskMark.css";

interface SubTaskMarkProps {
  data: TodoListType;
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
