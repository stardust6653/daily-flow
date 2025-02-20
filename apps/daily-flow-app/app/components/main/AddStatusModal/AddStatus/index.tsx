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
  SubColorChipStyle,
} from "./AddStatus.css";

import ColorChipList from "@/app/data/colorChipList.json";

const AddStatus = () => {
  const colorChipList = ColorChipList;

  return (
    <div className={AddStatusWrapperStyle}>
      <h3 className={AddStatusTitleStyle}>추가</h3>
      <div className={OptionStyle}>
        <p className={OptionNameStyle}>상태 이름</p>
        <input
          className={NameInputStyle}
          type="text"
          placeholder="상태 이름을 입력해주세요."
        />
      </div>
      <div className={OptionStyle}>
        <p className={OptionNameStyle}>컬러칩 선택</p>
        <div className={ColorChipListStyle}>
          {colorChipList.palettes.map((colorChip, index) => (
            <div className={ColorChipWrapperStyle} key={index}>
              <div className={ColorChipStyle}>
                <span
                  className={MainColorChipStyle}
                  style={{ backgroundColor: colorChip.main_color }}
                />
                <span
                  className={SubColorChipStyle}
                  style={{ backgroundColor: colorChip.sub_color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddStatus;
