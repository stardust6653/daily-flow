import { MdAddCircleOutline } from "react-icons/md";
import {
  AddStatusButtonStyle,
  AddStatusButtonWrapperStyle,
} from "./AddStatusButton.css";

const AddStatusButton = () => {
  return (
    <div className={AddStatusButtonWrapperStyle}>
      <label className={AddStatusButtonStyle}>
        <MdAddCircleOutline />
      </label>
    </div>
  );
};

export default AddStatusButton;
