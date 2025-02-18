import { MdAddCircleOutline } from "react-icons/md";
import { AddTaskButtonStyle } from "./AddTaskButton.css";
import { Dispatch, SetStateAction } from "react";

interface AddTaskButtonProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddTaskButton = ({ setIsModalOpen }: AddTaskButtonProps) => {
  const handleClick = () => {
    setIsModalOpen({
      isOpen: true,
      type: "addTask",
    });
  };

  return (
    <div className={AddTaskButtonStyle} onClick={handleClick}>
      <MdAddCircleOutline />
    </div>
  );
};

export default AddTaskButton;
