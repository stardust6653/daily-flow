import { Dispatch, SetStateAction, useState } from "react";
import Button from "../../Button";
import ModalHeader from "../../ModalHeader";
import {
  AddCategoryInputStyle,
  AddCategoryModalStyle,
  ColorChipListStyle,
  ColorChipStyle,
  SelectedColorStyle,
} from "./AddCategoryModal.css";
import colorChipData from "@/app/data/colorChipList.json";
import { FaCheck } from "react-icons/fa";

interface AddCategoryModalProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const AddCategoryModal = ({ setIsModalOpen }: AddCategoryModalProps) => {
  const colorChipList = colorChipData;

  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleColorChipClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleCloseClick = () => {
    setIsModalOpen({
      isOpen: false,
      type: "addCategory",
    });
  };

  return (
    <div className={AddCategoryModalStyle}>
      <div>
        <ModalHeader
          title="카테고리 추가"
          handleCloseClick={handleCloseClick}
        />

        <ul className={ColorChipListStyle}>
          {colorChipList.palettes.map((color) => (
            <li
              className={ColorChipStyle}
              key={color.main_color}
              style={{ backgroundColor: color.main_color }}
              onClick={() => handleColorChipClick(color.main_color)}
            >
              {selectedColor === color.main_color && (
                <div className={SelectedColorStyle}>
                  <FaCheck />
                </div>
              )}
            </li>
          ))}
        </ul>
        <input
          className={AddCategoryInputStyle}
          type="text"
          placeholder="카테고리를 입력하세요"
        />
      </div>

      <Button text="추가하기" onClick={() => {}} type="primary" />
    </div>
  );
};

export default AddCategoryModal;
