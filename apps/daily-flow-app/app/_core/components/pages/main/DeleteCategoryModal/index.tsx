import { Dispatch, SetStateAction } from "react";
import ModalHeader from "../../../common/ModalHeader";
import { FaTrashCan } from "react-icons/fa6";
import {
  AlertIconStyle,
  AlertStyle,
  ColorChipStyle,
  DeleteButtonStyle,
  DeleteCategoryDescStyle,
  DeleteCategoryModalStyle,
  DeleteCategoryTitleStyle,
  DeleteIconStyle,
} from "./DeleteCategoryModal.css";
import { CategoryType } from "@/types/types";
import { IoAlertCircleOutline } from "react-icons/io5";
import api from "@/app/api/axios";

interface DeleteCategoryModalProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
  categories: CategoryType[];
  selectedCategory: string;
  refreshData: () => void;
}

const DeleteCategoryModal = ({
  refreshData,
  setIsModalOpen,
  categories,
  selectedCategory,
}: DeleteCategoryModalProps) => {
  const selectedCategoryData = categories.find(
    (item) => item.id === selectedCategory
  );

  const handleDeleteClick = async () => {
    await api
      .delete(`/categories/${selectedCategory}`)
      .then((res) => {
        console.log(res);
        setIsModalOpen({ isOpen: false, type: "" });
        refreshData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={DeleteCategoryModalStyle}>
      <div className={DeleteCategoryTitleStyle}>
        <span
          className={ColorChipStyle}
          style={{ backgroundColor: selectedCategoryData?.color }}
        />
        <ModalHeader
          size="medium"
          title={`${selectedCategoryData?.name} 삭제`}
          handleCloseClick={() => setIsModalOpen({ isOpen: false, type: "" })}
        />
      </div>
      <div className={DeleteCategoryDescStyle}>
        <p>정말 카테고리를 삭제하시겠습니까?</p>
        <p className={AlertStyle}>
          <IoAlertCircleOutline className={AlertIconStyle} /> 삭제된 데이터는
          복구 불가합니다.
        </p>
      </div>
      <button className={DeleteButtonStyle} onClick={handleDeleteClick}>
        <FaTrashCan className={DeleteIconStyle} />
        <span>삭제</span>
      </button>
    </div>
  );
};

export default DeleteCategoryModal;
