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
import { TaskFormData, TaskStatusType, TaskType } from "@/types/types";
import api from "@/app/api/axios";
import { ModalType } from "@/types/task";

interface AddTaskModalProps {
  taskStatuses: TaskStatusType[];
  selectedCategory: string;
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<ModalType>>;
  updateTaskItem?: TaskType;
}

const AddTaskModal = ({
  selectedCategory,
  setIsModalOpen,
  taskStatuses,
  refreshData,
  updateTaskItem,
}: AddTaskModalProps) => {
  const searchParams = useSearchParams();
  const status_id = searchParams.get("status_id");

  const [statusId, setStatusId] = useState<string>(status_id ? status_id : "");

  const isUpdate = !!updateTaskItem;

  const [taskData, setTaskData] = useState<TaskFormData>({
    main_task: updateTaskItem?.main_task || "",
    subtasks: updateTaskItem?.subtasks || [],
    memo: updateTaskItem?.memo || "",
    category_id: String(
      (updateTaskItem?.category_id ?? selectedCategory) || ""
    ),
    status_id: String((updateTaskItem?.status_id ?? statusId) || ""),
    type: updateTaskItem?.type || "task",
    period: updateTaskItem?.period || "",
    complete: updateTaskItem?.complete || false,
    expenditure: updateTaskItem?.expenditure
      ? Number(updateTaskItem.expenditure)
      : 0,
  });

  useEffect(() => {
    if (!isUpdate) {
      setTaskData((prev) => ({
        ...prev,
        status_id,
      }));
    }
  }, [status_id]);

  useEffect(() => {
    if (isUpdate && updateTaskItem) {
      setTaskData({
        main_task: updateTaskItem.main_task,
        subtasks: updateTaskItem.subtasks,
        memo: updateTaskItem.memo,
        category_id: String(updateTaskItem.category_id || ""),
        status_id: String(updateTaskItem.status_id || ""),
        type: updateTaskItem.type,
        period: updateTaskItem.period || "",
        complete: updateTaskItem.complete,
        expenditure: updateTaskItem.expenditure
          ? Number(updateTaskItem.expenditure)
          : 0,
      });
    }
  }, [updateTaskItem]);

  const handleCloseClick = () =>
    setIsModalOpen({
      isOpen: false,
      type: isUpdate ? "update" : "addTask",
    });

  const handleMainTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskData({
      ...taskData,
      main_task: e.target.value,
    });
  };

  const handleSubmitClick = async () => {
    try {
      const dataToSend = {
        ...taskData,
        category_id: String(taskData.category_id),
        status_id: String(taskData.status_id),
        type: String(taskData.type),
        subtasks: taskData.subtasks.map(({ task, complete, order }) => ({
          task,
          complete,
          order,
        })),
      };

      if (isUpdate && updateTaskItem?.id) {
        await api.put(`/tasks/${updateTaskItem.id}`, dataToSend);
      } else {
        await api.post("/tasks", dataToSend);
      }
      setIsModalOpen({ isOpen: false, type: "" });
      refreshData();
    } catch (err) {
      console.error(isUpdate ? "Task 수정 실패:" : "Task 생성 실패:", err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmitClick();
    }
    if (e.key === "Escape") {
      handleCloseClick();
    }
  };

  return (
    <div className={AddTaskModalStyle}>
      <div>
        <ModalHeader
          title={isUpdate ? "태스크 수정" : "태스크 추가"}
          handleCloseClick={handleCloseClick}
          size="large"
        />
        <input
          className={AddTaskInputStyle}
          type="text"
          placeholder="할 일을 입력해주세요"
          value={taskData.main_task}
          onChange={handleMainTaskChange}
          onKeyDown={handleKeyDown}
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
        <Button
          text={isUpdate ? "수정하기" : "추가하기"}
          onClick={handleSubmitClick}
          type="primary"
        />
      </div>
    </div>
  );
};

export default AddTaskModal;
