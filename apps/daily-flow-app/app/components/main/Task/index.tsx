import SubTaskMark from "../SubTaskMark";
import TaskType from "../TaskType";
import TaskContent from "../TaskContent";
import { TaskStyle } from "./Task.css";
import AddExpenditure from "../AddExpenditure";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { TaskStatusType, TaskType as TaskItemType } from "@/types/types";

interface TaskProps {
  data: TaskStatusType;
  item: TaskItemType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const Task = ({ data, item, setIsModalOpen }: TaskProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/main?id=${item?.id}`);
    setIsModalOpen({ isOpen: true, type: "detail" });
  };

  return (
    <div
      className={TaskStyle}
      key={item.id}
      style={{ backgroundColor: data?.sub_color }}
      onClick={handleClick}
    >
      <TaskContent data={data} item={item} />
      {item.complete && (
        <AddExpenditure item={item} setIsModalOpen={setIsModalOpen} />
      )}
      <TaskType item={item} />
      {item?.subtasks?.length > 0 && <SubTaskMark data={data} />}
    </div>
  );
};

export default Task;
