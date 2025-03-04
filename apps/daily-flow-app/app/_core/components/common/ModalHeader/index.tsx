import { IoCloseCircleOutline } from "react-icons/io5";
import {
  CloseButtonStyle,
  ModalHeaderStyle,
  ModalHeaderTitleStyle,
} from "./ModalHeader.css";

interface ModalHeaderProps {
  title: string;
  handleCloseClick: () => void;
  size: "small" | "medium" | "large";
}

const ModalHeader = ({ title, handleCloseClick, size }: ModalHeaderProps) => {
  return (
    <div className={ModalHeaderStyle}>
      <h3 className={ModalHeaderTitleStyle[size]}>{title}</h3>
      <span className={CloseButtonStyle}>
        <IoCloseCircleOutline onClick={handleCloseClick} />
      </span>
    </div>
  );
};

export default ModalHeader;
