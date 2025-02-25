import { DeleteModalBgStyle, TaskListStyle } from "./TaskList.css";
import StatusLabel from "../StatusLabel";
import Task from "../Task";
import AddTaskButton from "../AddTaskButton";
import { Dispatch, SetStateAction, useState } from "react";
import { TaskStatusType } from "@/types/types";
import { useTasks } from "@/hooks/useTasks";

interface TaskListProps {
  selectedCategory: string;
  data: TaskStatusType;
  refreshTrigger: number;
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const TaskList = ({
  data,
  setIsModalOpen,
  selectedCategory,
  refreshTrigger,
  refreshData,
}: TaskListProps) => {
  const { tasks } = useTasks(selectedCategory, refreshTrigger);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState({
    task: "",
    isOpen: false,
  });

  const handleModalBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDeleteModalOpen({ task: "", isOpen: false });
  };

  return (
    <>
      <div className={TaskListStyle}>
        <StatusLabel data={data} />
        {tasks
          .filter((task) => task.status_id === data?.id)
          .map((item) => (
            <Task
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              isDeleteModalOpen={isDeleteModalOpen}
              refreshData={refreshData}
              data={data}
              item={item}
              key={item.id}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        <AddTaskButton data={data} setIsModalOpen={setIsModalOpen} />
      </div>

      {isDeleteModalOpen.isOpen && (
        <div className={DeleteModalBgStyle} onClick={handleModalBgClick} />
      )}
    </>
  );
};

export default TaskList;
