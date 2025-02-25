import { TaskListStyle } from "./TaskList.css";
import StatusLabel from "../StatusLabel";
import Task from "../Task";
import AddTaskButton from "../AddTaskButton";
import { Dispatch, SetStateAction } from "react";
import { TaskStatusType } from "@/types/types";
import { useTasks } from "@/hooks/useTasks";

interface TaskListProps {
  selectedCategory: string;
  data: TaskStatusType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const TaskList = ({
  data,
  setIsModalOpen,
  selectedCategory,
}: TaskListProps) => {
  const { tasks } = useTasks(selectedCategory);

  return (
    <div className={TaskListStyle}>
      <StatusLabel data={data} />
      {tasks
        .filter((task) => task.status_id === data?.id)
        .map((item) => (
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
