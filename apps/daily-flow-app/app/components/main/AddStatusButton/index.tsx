import { MdAddCircleOutline } from "react-icons/md";
import {
  AddStatusButtonStyle,
  AddStatusButtonWrapperStyle,
} from "./AddStatusButton.css";
import { Dispatch, SetStateAction } from "react";

interface AddStatusButtonProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddStatusButton = ({ setIsModalOpen }: AddStatusButtonProps) => {
  return (
    <div className={AddStatusButtonWrapperStyle}>
      <label
        className={AddStatusButtonStyle}
        onClick={() => setIsModalOpen({ isOpen: true, type: "addStatus" })}
      >
        <MdAddCircleOutline />
      </label>
    </div>
  );
};

export default AddStatusButton;
