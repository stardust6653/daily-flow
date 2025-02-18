import { MdAddCircleOutline } from "react-icons/md";
import { AddTaskButtonStyle } from "./AddTaskButton.css";

const AddTaskButton = () => {
  return (
    <div className={AddTaskButtonStyle}>
      <MdAddCircleOutline />
    </div>
  );
};

export default AddTaskButton;
