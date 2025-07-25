import { Dispatch, SetStateAction, useState } from "react";
import Button from "../../../common/Button";
import ModalHeader from "../../../common/ModalHeader";
import {
  AddExpenditureInputStyle,
  AddExpenditureInputWrapperStyle,
  AddExpenditureModalStyle,
  AddExpenditureWonStyle,
} from "./AddExpenditureModal.css";
import api from "@/app/api/axios";
import { useSearchParams } from "next/navigation";
import { ModalType } from "@/types/task";

interface AddExpenditureModalProps {
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<ModalType>>;
}

const AddExpenditureModal = ({
  setIsModalOpen,
  refreshData,
}: AddExpenditureModalProps) => {
  const [expenditure, setExpenditure] = useState<number>(0);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const handleCloseClick = () => {
    setIsModalOpen({
      isOpen: false,
      type: "addExpenditure",
    });
  };

  const handleAddExpenditureClick = async () => {
    await api
      .put(`/tasks/${id}`, {
        expenditure: expenditure,
      })
      .then(() => {
        refreshData();
        setIsModalOpen({ isOpen: false, type: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value === "" || /^\d+$/.test(value)) {
      setExpenditure(value === "" ? 0 : Number(value));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddExpenditureClick();
    }
  };

  return (
    <div className={AddExpenditureModalStyle}>
      <div>
        <ModalHeader
          title="지출 입력"
          handleCloseClick={handleCloseClick}
          size="medium"
        />

        <div className={AddExpenditureInputWrapperStyle}>
          <input
            className={AddExpenditureInputStyle}
            type="text"
            maxLength={9}
            max={999999999}
            min={0}
            placeholder="지출 금액을 입력해주세요"
            value={expenditure === 0 ? "" : expenditure}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <span className={AddExpenditureWonStyle}>원</span>
        </div>
      </div>
      <Button
        text="추가하기"
        onClick={handleAddExpenditureClick}
        type="primary"
      />
    </div>
  );
};

export default AddExpenditureModal;
