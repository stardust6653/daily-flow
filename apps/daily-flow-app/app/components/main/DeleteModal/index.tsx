import { FaRegTrashCan } from "react-icons/fa6";
import {
  DeleteModalButtonStyle,
  DeleteModalColorStyle,
  DeleteModalContentStyle,
  DeleteModalStyle,
} from "./DeleteModal.css";
import { TaskStatusType, TaskType } from "@/types/types";
import api from "@/app/api/axios";
import { Dispatch, SetStateAction } from "react";

interface DeleteModalProps {
  data: TaskStatusType;
  item: TaskType;
  setIsDeleteModalOpen: Dispatch<
    SetStateAction<{ isOpen: boolean; task: string }>
  >;
  refreshData: () => void;
}

const DeleteModal = ({
  item,
  data,
  refreshData,
  setIsDeleteModalOpen,
}: DeleteModalProps) => {
  const handleDeleteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    try {
      await api.delete(`/tasks/${item.id}`);
      refreshData();
    } catch (err) {
      console.error(err);
    }

    setIsDeleteModalOpen({
      isOpen: false,
      task: "",
    });
  };

  return (
    <div className={DeleteModalStyle}>
      <div className={DeleteModalContentStyle}>
        <span
          className={DeleteModalColorStyle}
          style={{ backgroundColor: data?.color }}
        />
        <span>{item?.main_task}</span>
      </div>
      <button className={DeleteModalButtonStyle} onClick={handleDeleteClick}>
        <FaRegTrashCan /> 삭제하시겠습니까?
      </button>
    </div>
  );
};

export default DeleteModal;
