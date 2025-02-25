import { TaskListType } from "@/types/task";
import { ListLengthStyle, StatusLabelStyle } from "./StatusLabel.css";
import { TaskStatusType } from "@/types/types";

interface StatusLabelProps {
  data: TaskStatusType;
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
