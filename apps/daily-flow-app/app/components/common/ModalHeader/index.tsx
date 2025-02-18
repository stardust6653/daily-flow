import { IoCloseCircleOutline } from "react-icons/io5";
import { CloseButtonStyle, ModalHeaderStyle } from "./ModalHeader.css";

interface ModalHeaderProps {
  title: string;
  handleCloseClick: () => void;
}

const ModalHeader = ({ title, handleCloseClick }: ModalHeaderProps) => {
  return (
    <div className={ModalHeaderStyle}>
      <h3>{title}</h3>
      <span className={CloseButtonStyle}>
        <IoCloseCircleOutline onClick={handleCloseClick} />
      </span>
    </div>
  );
};

export default ModalHeader;
