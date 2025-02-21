import { Dispatch, SetStateAction } from "react";
import Button from "../../common/Button";
import ModalHeader from "../../common/ModalHeader";
import {
  AddExpenditureInputStyle,
  AddExpenditureInputWrapperStyle,
  AddExpenditureModalStyle,
  AddExpenditureWonStyle,
} from "./AddExpenditureModal.css";

interface AddExpenditureModalProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddExpenditureModal = ({ setIsModalOpen }: AddExpenditureModalProps) => {
  const handleCloseClick = () => {
    setIsModalOpen({
      isOpen: false,
      type: "addExpenditure",
    });
  };

  return (
    <div className={AddExpenditureModalStyle}>
      <div>
        <ModalHeader title="지출 입력" handleCloseClick={handleCloseClick} />

        <div className={AddExpenditureInputWrapperStyle}>
          <input
            className={AddExpenditureInputStyle}
            type="text"
            placeholder="지출 금액을 입력해주세요"
          />
          <span className={AddExpenditureWonStyle}>원</span>
        </div>
      </div>
      <Button text="추가하기" onClick={() => {}} type="primary" />
    </div>
  );
};

export default AddExpenditureModal;
