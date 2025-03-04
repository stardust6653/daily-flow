import { CategoryType } from "@/types/types";
import {
  DeleteIconStyle,
  MainTitleColorChipStyle,
  MainTitleStyle,
  TitleGroupStyle,
} from "./MainTitle.css";
import { FaTrashCan } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";

interface MainTitleProps {
  data: CategoryType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const MainTitle = ({ data, setIsModalOpen }: MainTitleProps) => {
  const handleDeleteClick = () => {
    setIsModalOpen({ isOpen: true, type: "deleteCategory" });
  };

  return (
    <div className={MainTitleStyle}>
      <div className={TitleGroupStyle}>
        <span
          className={MainTitleColorChipStyle}
          style={{ backgroundColor: data?.color }}
        />
        <h2>{data?.name}</h2>
      </div>
      <FaTrashCan className={DeleteIconStyle} onClick={handleDeleteClick} />
    </div>
  );
};

export default MainTitle;
