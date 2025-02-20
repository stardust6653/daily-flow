import { Dispatch, SetStateAction } from "react";
import ModalHeader from "../../common/ModalHeader";
import Button from "../../common/Button";
import {
  AddButtonStyle,
  AddStatusModalStyle,
  ContentWrapperStyle,
} from "./AddStatusModal.css";
import StatusList from "./StatusList";
import taskList from "@/app/data/taskList.json";
import { TaskListDataType } from "@/types/task";
import AddStatus from "./AddStatus";

interface AddStatusModalProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
  selectedCategory: string;
}

const AddStatusModal = ({
  setIsModalOpen,
  selectedCategory,
}: AddStatusModalProps) => {
  const taskListData: TaskListDataType[] = taskList.filter(
    (task) => task.name === selectedCategory
  );

  return (
    <div className={AddStatusModalStyle}>
      <div>
        <ModalHeader
          title="상태 추가"
          handleCloseClick={() =>
            setIsModalOpen({ isOpen: false, type: "addStatus" })
          }
        />

        <div className={ContentWrapperStyle}>
          <StatusList taskListData={taskListData} />
          <AddStatus />
        </div>
      </div>

      <div className={AddButtonStyle}>
        <Button text="추가하기" onClick={() => {}} type="primary" />
      </div>
    </div>
  );
};

export default AddStatusModal;
