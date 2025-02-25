import { FaRegTrashCan } from "react-icons/fa6";
import {
  AddSubTaskInputStyle,
  AddSubTaskStyle,
  EmptySubTaskStyle,
  EraseButtonStyle,
  SubTaskContentStyle,
  SubTaskItemStyle,
} from "./AddSubTask.css";
import { InputTitleStyle } from "../AddTaskModal.css";
import { Dispatch, SetStateAction, useState } from "react";
import { TaskFormData } from "@/types/types";

interface AddSubTaskProps {
  taskData: TaskFormData;
  setTaskData: Dispatch<SetStateAction<TaskFormData>>;
}

const AddSubTask = ({ taskData, setTaskData }: AddSubTaskProps) => {
  const [inputTask, setInputTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputTask(e.target.value);

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter" && inputTask) {
      setTaskData({
        ...taskData,
        subtasks: [
          ...taskData.subtasks,
          {
            id: `${Date.now()}`,
            task: inputTask,
            complete: false,
            order: taskData.subtasks.length,
          },
        ],
      });
      setInputTask("");
    }
  };

  const handleEraseClick = (id: string) => {
    setTaskData({
      ...taskData,
      subtasks: taskData.subtasks.filter((task) => task.task_id !== id),
    });
  };

  return (
    <div className={AddSubTaskStyle}>
      <p className={InputTitleStyle}>서브 태스크</p>
      <input
        value={inputTask}
        onChange={handleChange}
        onKeyDown={handleEnterKeyDown}
        className={AddSubTaskInputStyle}
        type="text"
        placeholder="할 일을 입력해주세요"
      />

      {taskData.subtasks.length === 0 && (
        <div className={EmptySubTaskStyle}>
          서브 태스크가 <br /> 없습니다
        </div>
      )}

      {taskData.subtasks
        ?.sort((a, b) => +b.id - +a.id)
        .map((task, index) => {
          return (
            <div key={index} className={SubTaskItemStyle}>
              <p className={SubTaskContentStyle}>- {task.task}</p>
              <p
                className={EraseButtonStyle}
                onClick={() => handleEraseClick(task.id)}
              >
                <FaRegTrashCan />
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default AddSubTask;
