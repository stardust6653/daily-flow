import { InputTitleStyle } from "../AddTaskModal.css";
import { AddMemoStyle, MemoStyle } from "./AddMemo.css";

const AddMemo = () => {
  return (
    <div className={AddMemoStyle}>
      <p className={InputTitleStyle}>메모</p>
      <textarea className={MemoStyle} placeholder="메모를 입력해주세요" />
    </div>
  );
};

export default AddMemo;
