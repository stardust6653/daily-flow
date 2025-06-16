import { Dispatch, SetStateAction, useState } from "react";
import {
  AddStatusTitleStyle,
  AddStatusWrapperStyle,
  ColorChipListStyle,
  ColorChipStyle,
  ColorChipWrapperStyle,
  MainColorChipStyle,
  NameInputStyle,
  OptionNameStyle,
  OptionStyle,
  SelectedColorStyle,
  SubColorChipStyle,
} from "./AddStatus.css";

import ColorChipList from "@/app/_core/data/colorChipList.json";
import { TaskStatusType } from "@/types/types";
import { FaCheck } from "react-icons/fa";

interface AddStatusProps {
  addStatusData: TaskStatusType;
  setAddStatusData: Dispatch<SetStateAction<TaskStatusType>>;
}

const AddStatus = ({ setAddStatusData, addStatusData }: AddStatusProps) => {
  const [statusName, setStatusName] = useState("");
  const [selectedColor, setSelectedColor] = useState({
    main_color: "",
    sub_color: "",
  });

  const colorChipList = ColorChipList;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusName(e.currentTarget.value);
    setAddStatusData({
      ...addStatusData,
      label: e.currentTarget.value,
    });
  };

  const handleColorChipClick = (colorChip: {
    main_color: string;
    sub_color: string;
  }) => {
    setAddStatusData({
      ...addStatusData,
      label: statusName,
      color: colorChip.main_color,
      sub_color: colorChip.sub_color,
    });
    setSelectedColor(colorChip);
  };

  return (
    <div className={AddStatusWrapperStyle}>
      <h3 className={AddStatusTitleStyle}>추가</h3>
      <div className={OptionStyle}>
        <p className={OptionNameStyle}>상태 이름</p>
        <input
          className={NameInputStyle}
          type="text"
          placeholder="상태 이름을 입력해주세요."
          onChange={handleNameChange}
          value={statusName}
        />
      </div>
      <div className={OptionStyle}>
        <p className={OptionNameStyle}>컬러칩 선택</p>
        <div className={ColorChipListStyle}>
          {colorChipList.palettes.map((colorChip, index) => (
            <div
              className={ColorChipWrapperStyle}
              key={index}
              onClick={() => handleColorChipClick(colorChip)}
            >
              <div className={ColorChipStyle}>
                <span
                  className={MainColorChipStyle}
                  style={{ backgroundColor: colorChip.main_color }}
                />
                <span
                  className={SubColorChipStyle}
                  style={{ backgroundColor: colorChip.sub_color }}
                />
                {selectedColor.main_color === colorChip.main_color && (
                  <div className={SelectedColorStyle}>
                    <FaCheck />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddStatus;
