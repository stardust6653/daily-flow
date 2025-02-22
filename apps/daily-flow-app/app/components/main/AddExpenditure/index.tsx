import { TaskItemType } from "@/types/task";
import { AddExpenditureStyle } from "./AddExpenditure.css";
import { Dispatch, SetStateAction } from "react";

interface AddExpenditureProps {
  item: TaskItemType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddExpenditure = ({ item, setIsModalOpen }: AddExpenditureProps) => {
  const expenditure =
    item.expenditure === undefined ? (
      <p>지출입력</p>
    ) : (
      <p>{item.expenditure}원</p>
    );

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen({ isOpen: true, type: "addExpenditure" });
  };

  return (
    <div className={AddExpenditureStyle} onClick={handleClick}>
      {expenditure}
    </div>
  );
};

export default AddExpenditure;
