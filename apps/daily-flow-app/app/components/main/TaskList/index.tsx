import { TaskListType } from "@/types/task";
import { TaskListStyle } from "./TaskList.css";

import StatusLabel from "../StatusLabel";
import Task from "../Task";
import AddTaskButton from "../AddTaskButton";
import { Dispatch, SetStateAction } from "react";

interface TaskListProps {
  data: TaskListType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const TaskList = ({ data, setIsModalOpen }: TaskListProps) => {
  return (
    <div className={TaskListStyle}>
      <StatusLabel data={data} />
      {data.items?.map((item) => (
        <Task
          data={data}
          item={item}
          key={item.id}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
      <AddTaskButton setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default TaskList;
