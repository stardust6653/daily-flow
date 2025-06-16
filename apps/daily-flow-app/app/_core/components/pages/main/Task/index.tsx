import SubTaskMark from "../SubTaskMark";
import TaskType from "../TaskType";
import TaskContent from "../TaskContent";
import { TaskStyle, EditButtonStyle } from "./Task.css";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { TaskStatusType, TaskType as TaskItemType } from "@/types/types";
import DeleteModal from "../DeleteModal";
import { ModalType } from "@/types/task";

interface TaskProps {
  data: TaskStatusType;
  item: TaskItemType;
  setIsDeleteModalOpen: Dispatch<
    SetStateAction<{ task: string; isOpen: boolean }>
  >;
  isDeleteModalOpen: { task: string; isOpen: boolean };
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<ModalType>>;
}

const Task = ({
  data,
  item,
  setIsModalOpen,
  refreshData,
  setIsDeleteModalOpen,
  isDeleteModalOpen,
}: TaskProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/main?id=${item?.id}`);
    setIsModalOpen({ isOpen: true, type: "detail", taskId: item.id });
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDeleteModalOpen({
      task: item.id,
      isOpen: !isDeleteModalOpen.isOpen,
    });
  };

  const handleUpdateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen({ isOpen: true, type: "update", taskId: item.id });
  };

  return (
    <>
      <div
        className={TaskStyle}
        key={item.id}
        style={{ backgroundColor: data?.sub_color }}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
      >
        <TaskContent item={item} refreshData={refreshData} />
        <div>
          <TaskType item={item} />
          <button className={EditButtonStyle} onClick={handleUpdateClick}>
            수정
          </button>
        </div>
        {item?.subtasks?.length > 0 && <SubTaskMark data={data} />}

        {isDeleteModalOpen.isOpen && item.id === isDeleteModalOpen.task && (
          <DeleteModal
            item={item}
            data={data}
            refreshData={refreshData}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        )}
      </div>
    </>
  );
};

export default Task;
