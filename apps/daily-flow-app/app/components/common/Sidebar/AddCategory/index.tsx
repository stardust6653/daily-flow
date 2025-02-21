import { IoMdAdd } from "react-icons/io";
import { AddCategoryIconStyle, AddCategoryStyle } from "./AddCategory.css";
import { Dispatch, SetStateAction } from "react";

interface AddCategoryProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddCategory = ({ setIsModalOpen }: AddCategoryProps) => {
  const handleClick = () => {
    setIsModalOpen({
      isOpen: true,
      type: "addCategory",
    });
  };

  return (
    <div className={AddCategoryStyle} onClick={handleClick}>
      <IoMdAdd className={AddCategoryIconStyle} />
      <p>카테고리 추가</p>
    </div>
  );
};

export default AddCategory;
