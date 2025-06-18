import { FaRegTrashCan } from "react-icons/fa6";
import {
  DeleteIconStyle,
  DeleteModalButtonStyle,
  DeleteModalColorStyle,
  DeleteModalContentStyle,
  DeleteModalStyle,
  MainTaskTextStyle,
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key, "key 다운");
    if (e.key === "Enter") {
      e.stopPropagation();
      (async () => {
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
      })();
    }
    if (e.key === "Escape") {
      setIsDeleteModalOpen({ isOpen: false, task: "" });
    }
  };

  return (
    <div
      className={DeleteModalStyle}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={handleKeyDown}
    >
      <div className={DeleteModalContentStyle}>
        <span
          className={DeleteModalColorStyle}
          style={{ backgroundColor: data?.color }}
        />
        <span className={MainTaskTextStyle}>{item?.main_task}</span>
      </div>
      <button className={DeleteModalButtonStyle} onClick={handleDeleteClick}>
        <FaRegTrashCan className={DeleteIconStyle} /> 삭제하시겠습니까?
      </button>
    </div>
  );
};

export default DeleteModal;
