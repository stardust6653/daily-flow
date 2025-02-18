import { useState } from "react";
import { InputTitleStyle } from "../AddTaskModal.css";
import {
  LabelItemColorStyle,
  LabelItemStyle,
  LabelListStyle,
  SelectedLabelNameStyle,
  SelectedLabelStyle,
  SelectOptionStyle,
  SelectScheduleInputStyle,
  SelectScheduleLabelStyle,
  SelectScheduleStyle,
  SelectScheduleWrapperStyle,
  SelectStatusStyle,
  SelectStatusTitleStyle,
  SetOptionStyle,
  ToggleStyle,
} from "./SetOption.css";
import { TbToggleLeftFilled } from "react-icons/tb";
import { TbToggleRightFilled } from "react-icons/tb";
import { themeVars } from "@/app/styles/theme.css";
import taskList from "@/app/data/taskList.json";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SetOptionProps {
  selectedTask: string;
}

const SetOption = ({ selectedTask }: SetOptionProps) => {
  const [isSchedule, setIsSchedule] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState({
    label: "선택안함",
    color: "#cbcbcb",
  });

  const handleToggleClick = () => setIsSchedule(!isSchedule);

  const taskListData = taskList.filter((task) => task.name === selectedTask);

  console.log(taskListData);

  const OptionColor = (type: "task" | "schedule") => {
    if (type === "task") {
      return isSchedule
        ? themeVars.colors.gray[400]
        : themeVars.colors.base.black;
    } else {
      return isSchedule
        ? themeVars.colors.base.black
        : themeVars.colors.gray[400];
    }
  };

  return (
    <div className={SetOptionStyle}>
      <p className={InputTitleStyle}>옵션</p>
      <div className={SelectOptionStyle}>
        <div style={{ color: OptionColor("task") }}>할 일</div>
        <div className={ToggleStyle} onClick={handleToggleClick}>
          {isSchedule ? <TbToggleRightFilled /> : <TbToggleLeftFilled />}
        </div>
        <div style={{ color: OptionColor("schedule") }}>일정</div>
      </div>

      {isSchedule && (
        <div className={SelectScheduleWrapperStyle}>
          <div className={SelectScheduleStyle}>
            <p className={SelectScheduleLabelStyle}>시작</p>
            <input className={SelectScheduleInputStyle} type="date" />
          </div>
          <div className={SelectScheduleStyle}>
            <p className={SelectScheduleLabelStyle}>종료</p>
            <input className={SelectScheduleInputStyle} type="date" />
          </div>
        </div>
      )}

      <div className={SelectStatusStyle}>
        <p className={SelectStatusTitleStyle}>상태 목록</p>
        <div
          className={SelectedLabelStyle}
          onClick={() => setIsStatusOpen(!isStatusOpen)}
        >
          <div className={SelectedLabelNameStyle}>
            <span
              className={LabelItemColorStyle}
              style={{ backgroundColor: selectedStatus?.color }}
            />
            <p>{selectedStatus.label}</p>
          </div>
          <p>{isStatusOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
        {isStatusOpen && (
          <ul className={LabelListStyle}>
            {taskListData[0].tasks?.map((status) => (
              <li
                className={LabelItemStyle}
                key={status?.label}
                onClick={() => {
                  setSelectedStatus({
                    label: status?.label,
                    color: status?.color,
                  });
                  setIsStatusOpen(false);
                }}
              >
                <span
                  className={LabelItemColorStyle}
                  style={{ backgroundColor: status?.color }}
                />
                {status?.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SetOption;
