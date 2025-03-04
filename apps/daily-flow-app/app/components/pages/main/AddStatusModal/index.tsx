import { Dispatch, SetStateAction, useState } from "react";
import ModalHeader from "../../../common/ModalHeader";
import Button from "../../../common/Button";
import {
  AddButtonStyle,
  AddStatusModalStyle,
  ContentWrapperStyle,
} from "./AddStatusModal.css";
import StatusList from "./StatusList";
import AddStatus from "./AddStatus";
import { TaskStatusType } from "@/types/types";
import api from "@/app/api/axios";

interface AddStatusModalProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
  taskStatuses: TaskStatusType[];
  selectedCategory: string;
  refreshData: () => void;
}

const AddStatusModal = ({
  setIsModalOpen,
  taskStatuses,
  selectedCategory,
  refreshData,
}: AddStatusModalProps) => {
  const [addStatusData, setAddStatusData] = useState<TaskStatusType>({
    label: "",
    color: "",
    sub_color: "",
    category_id: selectedCategory,
  });

  const handleCloseClick = () =>
    setIsModalOpen({ isOpen: false, type: "addStatus" });

  const handleAddStatusClick = async () => {
    await api
      .post("/task-status", addStatusData)
      .then((res) => {
        console.log(res);
        refreshData();
        setIsModalOpen({ isOpen: false, type: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={AddStatusModalStyle}>
      <div>
        <ModalHeader
          title="상태 추가"
          handleCloseClick={handleCloseClick}
          size="large"
        />

        <div className={ContentWrapperStyle}>
          <StatusList taskListData={taskStatuses} />
          <AddStatus
            addStatusData={addStatusData}
            setAddStatusData={setAddStatusData}
          />
        </div>
      </div>

      <div className={AddButtonStyle}>
        <Button text="추가하기" onClick={handleAddStatusClick} type="primary" />
      </div>
    </div>
  );
};

export default AddStatusModal;
