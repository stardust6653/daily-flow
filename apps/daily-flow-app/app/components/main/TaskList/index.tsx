import { TaskListType } from "@/types/task";
import { TaskListStyle } from "./TaskList.css";

import StatusLabel from "../StatusLabel";
import Task from "../Task";
import AddTaskButton from "../AddTaskButton";

interface TaskListProps {
  data: TaskListType;
}

const TaskList = ({ data }: TaskListProps) => {
  return (
    <div className={TaskListStyle}>
      <StatusLabel data={data} />
      {data.items?.map((item) => (
        <Task data={data} item={item} key={item.id} />
      ))}
      <AddTaskButton />
    </div>
  );
};

export default TaskList;
