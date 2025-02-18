import { FaRegTrashCan } from "react-icons/fa6";
import {
  AddSubTaskInputStyle,
  AddSubTaskStyle,
  EmptySubTaskStyle,
  EraseButtonStyle,
  SubTaskItemStyle,
} from "./AddSubTask.css";
import { InputTitleStyle } from "../AddTaskModal.css";
import { useState } from "react";

type SubTaskType = {
  created_at: Date;
  id: string;
  task: string;
};

const AddSubTask = () => {
  const [inputTask, setInputTask] = useState<string>("");
  const [subTasks, setSubTasks] = useState<SubTaskType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputTask(e.target.value);

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter" && inputTask) {
      setSubTasks([
        ...subTasks,
        {
          created_at: new Date(),
          id: crypto.randomUUID(),
          task: inputTask,
        },
      ]);
      setInputTask("");
    }
  };

  const handleEraseClick = (id: string) => {
    setSubTasks(subTasks.filter((task) => task.id !== id));
  };

  console.log(subTasks);

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

      {subTasks.length === 0 && (
        <div className={EmptySubTaskStyle}>
          서브 태스크가 <br /> 없습니다
        </div>
      )}

      {subTasks
        ?.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
        .map((task, index) => {
          return (
            <div key={index} className={SubTaskItemStyle}>
              <p>- {task.task}</p>
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
