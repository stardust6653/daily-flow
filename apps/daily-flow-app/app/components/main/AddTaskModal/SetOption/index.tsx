import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { InputTitleStyle } from "../AddTaskModal.css";
import {
  LabelItemColorStyle,
  LabelItemStyle,
  LabelItemTextStyle,
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

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TaskFormData, TaskStatusType } from "@/types/types";
import { useSearchParams } from "next/navigation";
import { EllipsisTextStyle } from "@/app/styles/common.css";

interface SetOptionProps {
  taskStatuses: TaskStatusType[];
  taskData: TaskFormData;
  setTaskData: Dispatch<SetStateAction<TaskFormData>>;
  setStatusId: Dispatch<SetStateAction<string>>;
}

const SetOption = ({
  taskData,
  setTaskData,
  taskStatuses,
  setStatusId,
}: SetOptionProps) => {
  const searchParams = useSearchParams();
  const statusId = searchParams.get("status_id");

  const [isSchedule, setIsSchedule] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState({
    status_id: "",
    label: "",
    color: "",
  });

  console.log(taskStatuses);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleToggleClick = () => setIsSchedule(!isSchedule);

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

  useEffect(() => {
    setTaskData({
      ...taskData,
      type: isSchedule ? "calendar" : "task",
    });
  }, [isSchedule]);

  useEffect(() => {
    setTaskData({
      ...taskData,
      period: `${startDate}~${endDate}`,
    });
  }, [startDate, endDate]);

  useEffect(() => {
    if (statusId) {
      const selected = taskStatuses.find(
        (status) => status.id === statusId
      ) as TaskStatusType;

      setSelectedStatus({
        label: selected?.label,
        color: selected?.color,
        status_id: selected?.id ?? "",
      });
    }
  }, [statusId]);

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
            <input
              className={SelectScheduleInputStyle}
              type="date"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className={SelectScheduleStyle}>
            <p className={SelectScheduleLabelStyle}>종료</p>
            <input
              className={SelectScheduleInputStyle}
              type="date"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEndDate(e.target.value);
              }}
            />
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
            <p className={EllipsisTextStyle}>{selectedStatus.label}</p>
          </div>
          <p>{isStatusOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>

        {isStatusOpen && (
          <ul className={LabelListStyle}>
            {taskStatuses.map((status) => (
              <li
                className={LabelItemStyle}
                key={status?.label}
                onClick={() => {
                  setSelectedStatus({
                    label: status?.label,
                    color: status?.color,
                    status_id: status?.id ?? "",
                  });
                  setStatusId(status?.id as string);
                  setIsStatusOpen(false);
                }}
              >
                <span
                  className={LabelItemColorStyle}
                  style={{ backgroundColor: status?.color }}
                />
                <span className={LabelItemTextStyle}>{status?.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SetOption;
