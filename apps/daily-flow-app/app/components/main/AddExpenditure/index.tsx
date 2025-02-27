"use client";

import {
  AddExpenditureStyle,
  AddExpenditureTextStyle,
} from "./AddExpenditure.css";
import { Dispatch, SetStateAction } from "react";
import { TaskType } from "@/types/types";

interface AddExpenditureProps {
  item: TaskType;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddExpenditure = ({ item, setIsModalOpen }: AddExpenditureProps) => {
  const expenditure =
    Math.floor(+item.expenditure) === 0
      ? "지출입력"
      : `${Math.floor(+item.expenditure).toLocaleString()}원`;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen({ isOpen: true, type: "addExpenditure" });
  };

  return (
    <div className={AddExpenditureStyle}>
      <p className={AddExpenditureTextStyle} onClick={handleClick}>
        {expenditure}
      </p>
    </div>
  );
};

export default AddExpenditure;
