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
import colorChipData from "@/app/_core/data/colorChipList.json";
import { FaCheck } from "react-icons/fa";
import api from "@/app/api/axios";
import { ModalType } from "@/types/task";

interface AddCategoryModalProps {
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<ModalType>>;
}

const AddCategoryModal = ({
  refreshData,
  setIsModalOpen,
}: AddCategoryModalProps) => {
  const colorChipList = colorChipData;

  const [addCategoryData, setAddCategoryData] = useState({
    name: "",
    color: "",
  });

  const handleColorChipClick = (color: string) => {
    setAddCategoryData({
      ...addCategoryData,
      color,
    });
  };

  const handleCloseClick = () => {
    setIsModalOpen({
      isOpen: false,
      type: "addCategory",
    });
  };

  console.log(addCategoryData);

  const handleAddClick = async () => {
    await api
      .post("/categories", {
        name: addCategoryData.name,
        color: addCategoryData.color,
      })
      .then((res) => {
        console.log(res);
        refreshData();
        setIsModalOpen({ isOpen: false, type: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={AddCategoryModalStyle}>
      <div>
        <ModalHeader
          size="medium"
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
              {addCategoryData.color === color.main_color && (
                <div className={SelectedColorStyle}>
                  <FaCheck />
                </div>
              )}
            </li>
          ))}
        </ul>
        <input
          onChange={(e) =>
            setAddCategoryData({ ...addCategoryData, name: e.target.value })
          }
          value={addCategoryData.name}
          className={AddCategoryInputStyle}
          type="text"
          placeholder="카테고리를 입력하세요"
        />
      </div>

      <Button text="추가하기" onClick={handleAddClick} type="primary" />
    </div>
  );
};

export default AddCategoryModal;
