import {
  SmallModalStyle,
  ModalWrapperStyle,
  MediumModalStyle,
  LargeModalStyle,
} from "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

const Modal = ({ children, size }: ModalProps) => {
  return (
    <div className={ModalWrapperStyle}>
      {size === "small" && <div className={SmallModalStyle}>{children}</div>}
      {size === "medium" && <div className={MediumModalStyle}>{children}</div>}
      {size === "large" && <div className={LargeModalStyle}>{children}</div>}
    </div>
  );
};

export default Modal;
