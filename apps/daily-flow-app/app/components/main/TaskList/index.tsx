import { DeleteModalBgStyle, TaskListStyle } from "./TaskList.css";
import StatusLabel from "../StatusLabel";
import Task from "../Task";
import AddTaskButton from "../AddTaskButton";
import { Dispatch, SetStateAction, useState } from "react";
import { TaskStatusType, TaskType } from "@/types/types";

interface TaskListProps {
  data: TaskStatusType;
  refreshData: () => void;
  tasks: TaskType[];
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const TaskList = ({
  data,
  setIsModalOpen,
  refreshData,
  tasks,
}: TaskListProps) => {
  const taskList = tasks
    .filter((task) => task.status_id === data?.id && !task.complete)
    .sort((a, b) => +(b?.order ?? 0) - +(a?.order ?? 0));

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState({
    task: "",
    isOpen: false,
  });

  const [isDeleteStatusModalOpen, setIsDeleteStatusModalOpen] = useState({
    status: "",
    isOpen: false,
  });

  const handleModalBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDeleteStatusModalOpen({ status: "", isOpen: false });
    setIsDeleteModalOpen({ task: "", isOpen: false });
  };

  return (
    <>
      <div className={TaskListStyle}>
        <StatusLabel
          data={data}
          refreshData={refreshData}
          isDeleteStatusModalOpen={isDeleteStatusModalOpen}
          setIsDeleteStatusModalOpen={setIsDeleteStatusModalOpen}
        />
        {taskList.map((item) => (
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

      {isDeleteStatusModalOpen.isOpen && (
        <div className={DeleteModalBgStyle} onClick={handleModalBgClick} />
      )}
    </>
  );
};

export default TaskList;
