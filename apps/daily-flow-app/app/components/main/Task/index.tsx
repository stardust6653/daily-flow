import SubTaskMark from "../SubTaskMark";
import TaskType from "../TaskType";
import TaskContent from "../TaskContent";
import { TaskStyle } from "./Task.css";
import { TaskItemType, TaskListType } from "@/types/task";
import AddExpenditure from "../AddExpenditure";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface TaskProps {
  data: TaskListType;
  item: TaskItemType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const Task = ({ data, item, setIsModalOpen }: TaskProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      `/main?status=${data.label}&task=${item.main_task}&id=${item.id}`
    );
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
      {item?.sub_task?.length > 0 && <SubTaskMark data={data} />}
    </div>
  );
};

export default Task;
