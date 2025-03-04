import { Dispatch, SetStateAction, useEffect, useState } from "react";

import {
  AddButtonStyle,
  AddTaskInputStyle,
  AddTaskModalStyle,
  AddWrapperStyle,
} from "./AddTaskModal.css";
import ModalHeader from "../../../common/ModalHeader";

import Button from "../../../common/Button";
import AddSubTask from "./AddSubTask";
import AddMemo from "./AddMemo";
import SetOption from "./SetOption";
import { useSearchParams } from "next/navigation";
import { TaskFormData, TaskStatusType } from "@/types/types";
import api from "@/app/api/axios";

interface AddTaskModalProps {
  taskStatuses: TaskStatusType[];
  selectedCategory: string;
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddTaskModal = ({
  selectedCategory,
  setIsModalOpen,
  taskStatuses,
  refreshData,
}: AddTaskModalProps) => {
  const searchParams = useSearchParams();
  const status_id = searchParams.get("status_id");

  const [statusId, setStatusId] = useState<string>(status_id as string);

  const [taskData, setTaskData] = useState<TaskFormData>({
    main_task: "",
    subtasks: [],
    memo: "",
    category_id: selectedCategory,
    status_id: statusId,
    type: "task",
    period: "",
    complete: false,
    expenditure: 0,
  });

  useEffect(() => {
    setTaskData({
      ...taskData,
      status_id,
    });
  }, [status_id]);

  console.log(taskData);

  const handleCloseClick = () =>
    setIsModalOpen({
      isOpen: false,
      type: "addTask",
    });

  const handleMainTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskData({
      ...taskData,
      main_task: e.target.value,
    });
  };

  const handleAddClick = async () => {
    try {
      const dataToSend = {
        ...taskData,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        subtasks: taskData.subtasks.map(({ id, ...rest }) => rest),
      };
      const response = await api.post("/tasks", dataToSend);
      console.log("Task 생성 성공:", response.data);

      setIsModalOpen({ isOpen: false, type: "" });
      refreshData();
    } catch (err) {
      console.error("Task 생성 실패:", err);
    }
  };

  console.log(taskData);

  return (
    <div className={AddTaskModalStyle}>
      <div>
        <ModalHeader
          title="태스크 추가"
          handleCloseClick={handleCloseClick}
          size="large"
        />
        <input
          className={AddTaskInputStyle}
          type="text"
          placeholder="할 일을 입력해주세요"
          value={taskData.main_task}
          onChange={handleMainTaskChange}
        />
        <div className={AddWrapperStyle}>
          <AddSubTask taskData={taskData} setTaskData={setTaskData} />
          <AddMemo taskData={taskData} setTaskData={setTaskData} />
          <SetOption
            taskStatuses={taskStatuses}
            taskData={taskData}
            setTaskData={setTaskData}
            setStatusId={setStatusId}
          />
        </div>
      </div>

      <div className={AddButtonStyle}>
        <Button text="추가하기" onClick={handleAddClick} type="primary" />
      </div>
    </div>
  );
};

export default AddTaskModal;
