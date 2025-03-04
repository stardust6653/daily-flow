import { TaskType } from "@/types/types";
import {
  CompleteTaskListLabelStyle,
  CompleteTaskListStyle,
} from "./CompleteTaskList.css";
import { Dispatch, SetStateAction } from "react";
import CompleteTask from "../CompleteTask";

interface CompleteTaskListProps {
  tasks: TaskType[];
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const CompleteTaskList = ({
  tasks,
  refreshData,
  setIsModalOpen,
}: CompleteTaskListProps) => {
  const completedTasks = tasks.filter((task) => task.complete);

  return (
    <div className={CompleteTaskListStyle}>
      <h3 className={CompleteTaskListLabelStyle}>완료</h3>
      {completedTasks?.map((task) => (
        <CompleteTask
          key={task.id}
          task={task}
          refreshData={refreshData}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
};

export default CompleteTaskList;
