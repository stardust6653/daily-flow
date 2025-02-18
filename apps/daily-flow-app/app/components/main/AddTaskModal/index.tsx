import { Dispatch, SetStateAction } from "react";

import {
  AddButtonStyle,
  AddTaskInputStyle,
  AddTaskModalStyle,
  AddWrapperStyle,
} from "./AddTaskModal.css";
import ModalHeader from "../../common/ModalHeader";

import Button from "../../common/Button";
import AddSubTask from "./AddSubTask";
import AddMemo from "./AddMemo";
import SetOption from "./SetOption";

interface AddTaskModalProps {
  selectedTask: string;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddTaskModal = ({ selectedTask, setIsModalOpen }: AddTaskModalProps) => {
  const handleCloseClick = () =>
    setIsModalOpen({
      isOpen: false,
      type: "addTask",
    });

  return (
    <div className={AddTaskModalStyle}>
      <div>
        <ModalHeader title="태스크 추가" handleCloseClick={handleCloseClick} />
        <input
          className={AddTaskInputStyle}
          type="text"
          placeholder="할 일을 입력해주세요"
        />
        <div className={AddWrapperStyle}>
          <AddSubTask />
          <AddMemo />
          <SetOption selectedTask={selectedTask} />
        </div>
      </div>

      <div className={AddButtonStyle}>
        <Button text="추가하기" onClick={() => {}} type="primary" />
      </div>
    </div>
  );
};

export default AddTaskModal;
