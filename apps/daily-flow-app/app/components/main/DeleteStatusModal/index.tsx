import { FaRegTrashCan } from "react-icons/fa6";
import {
  DeleteIconStyle,
  DeleteModalButtonStyle,
  DeleteModalColorStyle,
  DeleteModalContentStyle,
  DeleteModalStyle,
} from "./DeleteStatusModal.css";
import { TaskStatusType } from "@/types/types";
import api from "@/app/api/axios";
import { Dispatch, SetStateAction } from "react";

interface DeleteStatusModalProps {
  data: TaskStatusType;
  refreshData: () => void;
  setIsDeleteStatusModalOpen: Dispatch<
    SetStateAction<{ status: string; isOpen: boolean }>
  >;
}

const DeleteStatusModal = ({
  data,
  refreshData,
  setIsDeleteStatusModalOpen,
}: DeleteStatusModalProps) => {
  const handleDeleteClick = async () => {
    await api
      .delete(`/task-status/${data.id}`)
      .then((res) => {
        console.log(res);
        refreshData();
        setIsDeleteStatusModalOpen({ status: "", isOpen: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={DeleteModalStyle}>
      <div className={DeleteModalContentStyle}>
        <span
          className={DeleteModalColorStyle}
          style={{ backgroundColor: data?.color }}
        />
        <span>{data?.label}</span>
      </div>
      <button className={DeleteModalButtonStyle} onClick={handleDeleteClick}>
        <FaRegTrashCan className={DeleteIconStyle} />
        정말 삭제하시겠습니까?
      </button>
    </div>
  );
};

export default DeleteStatusModal;
