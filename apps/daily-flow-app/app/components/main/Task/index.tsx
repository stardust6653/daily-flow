import SubTaskMark from "../SubTaskMark";
import TaskType from "../TaskType";
import TaskContent from "../TaskContent";
import { TaskStyle } from "./Task.css";
import { TaskItemType, TaskListType } from "@/types/task";

interface TaskProps {
  data: TaskListType;
  item: TaskItemType;
}

const Task = ({ data, item }: TaskProps) => {
  return (
    <div
      className={TaskStyle}
      key={item.id}
      style={{ backgroundColor: data?.sub_color }}
    >
      <TaskContent data={data} item={item} />
      <TaskType item={item} />
      {item?.sub_task?.length > 0 && <SubTaskMark data={data} />}
    </div>
  );
};

export default Task;
