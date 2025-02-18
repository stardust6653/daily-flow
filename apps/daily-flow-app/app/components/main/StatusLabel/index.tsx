import { TodoListType } from "@/types/todo";
import { ListLengthStyle, StatusLabelStyle } from "./StatusLabel.css";

interface StatusLabelProps {
  data: TodoListType;
}

const StatusLabel = ({ data }: StatusLabelProps) => {
  return (
    <h3 className={StatusLabelStyle} style={{ backgroundColor: data?.color }}>
      <span>{data.label}</span>
      <span className={ListLengthStyle}>{data?.items?.length}</span>
    </h3>
  );
};

export default StatusLabel;
