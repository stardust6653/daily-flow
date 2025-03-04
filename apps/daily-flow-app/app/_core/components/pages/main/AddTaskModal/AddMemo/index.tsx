import { TaskFormData } from "@/types/types";
import { InputTitleStyle } from "../AddTaskModal.css";
import { AddMemoStyle, MemoStyle } from "./AddMemo.css";
import { Dispatch, SetStateAction } from "react";

interface AddMemoProps {
  taskData: TaskFormData;
  setTaskData: Dispatch<SetStateAction<TaskFormData>>;
}

const AddMemo = ({ taskData, setTaskData }: AddMemoProps) => {
  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskData({
      ...taskData,
      memo: e.target.value,
    });
  };

  return (
    <div className={AddMemoStyle}>
      <p className={InputTitleStyle}>메모</p>
      <textarea
        className={MemoStyle}
        placeholder="메모를 입력해주세요"
        onChange={handleMemoChange}
      />
    </div>
  );
};

export default AddMemo;
