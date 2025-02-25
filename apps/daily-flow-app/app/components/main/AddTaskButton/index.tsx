import { MdAddCircleOutline } from "react-icons/md";
import { AddTaskButtonStyle } from "./AddTaskButton.css";
import { Dispatch, SetStateAction } from "react";
import { TaskStatusType } from "@/types/types";
import { useRouter } from "next/navigation";

interface AddTaskButtonProps {
  data: TaskStatusType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddTaskButton = ({ setIsModalOpen, data }: AddTaskButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/main?status_id=${data?.id}`);
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
