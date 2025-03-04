import { TaskType } from "@/types/types";
import { CompleteTaskStyle } from "./CompleteTask.css";
import TaskContent from "../TaskContent";
import AddExpenditure from "../AddExpenditure";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface CompleteTaskProps {
  task: TaskType;
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const CompleteTask = ({
  task,
  refreshData,
  setIsModalOpen,
}: CompleteTaskProps) => {
  const router = useRouter();

  const handleDetailOpenClick = () => {
    router.push(`/main?id=${task?.id}`);
    setIsModalOpen({ isOpen: true, type: "detail" });
  };

  return (
    <>
      <div className={CompleteTaskStyle} onClick={handleDetailOpenClick}>
        <TaskContent item={task} refreshData={refreshData} />
        <AddExpenditure item={task} setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default CompleteTask;
