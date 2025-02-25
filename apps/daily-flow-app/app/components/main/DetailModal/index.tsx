import { Dispatch, SetStateAction } from "react";
import ModalHeader from "../../common/ModalHeader";
import { useSearchParams } from "next/navigation";
import {
  ColorChipStyle,
  DetailModalColorStyle,
  DetailModalHeaderWrapperStyle,
  DetailModalStyle,
  LineStyle,
  OptionContentStyle,
  OptionIconStyle,
  OptionNameStyle,
  OptionStyle,
  SubTaskCheckButtonStyle,
  SubTaskCheckCompleteButtonStyle,
  SubTaskContentStyle,
  SubTaskContentTextCompleteStyle,
  SubTaskStyle,
} from "./DetailModal.css";

import { LuCircleCheckBig } from "react-icons/lu";
import { BsCalendarCheck } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";
import { TaskStatusType, TaskType } from "@/types/types";

interface DetailModalProps {
  tasks: TaskType[];
  taskStatuses: TaskStatusType[];
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const DetailModal = ({
  setIsModalOpen,
  taskStatuses,
  tasks,
}: DetailModalProps) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const task = tasks.find((item) => item.id === id);

  const label = taskStatuses.find(
    (item) => item.id === task?.status_id
  ) as TaskStatusType;

  console.log(task);

  return (
    <div className={DetailModalStyle}>
      <div className={DetailModalHeaderWrapperStyle}>
        <span
          className={DetailModalColorStyle}
          style={{ backgroundColor: label?.color }}
        />
        <ModalHeader
          title={task?.main_task as string}
          handleCloseClick={() =>
            setIsModalOpen({ isOpen: false, type: "detail" })
          }
        />
      </div>

      <div>
        <div className={OptionStyle}>
          <p className={OptionNameStyle}>
            <LuCircleCheckBig className={OptionIconStyle} />
            <span>상태</span>
          </p>
          <p className={OptionContentStyle}>
            <span
              className={ColorChipStyle}
              style={{ backgroundColor: label?.color }}
            />
            <span>{label?.label}</span>
          </p>
        </div>

        <div className={OptionStyle}>
          <p className={OptionNameStyle}>
            <BsCalendarCheck className={OptionIconStyle} />
            <span>일정</span>
          </p>
          <div className={OptionContentStyle}>
            {task?.type === "calendar" ? task?.period : "할 일"}
          </div>
        </div>

        <div className={OptionStyle}>
          <p className={OptionNameStyle}>
            <FaTasks className={OptionIconStyle} />
            <span>서브 태스크</span>
          </p>
          <ul className={SubTaskStyle}>
            {task?.subtasks?.length === 0 ? (
              <li>비어있음</li>
            ) : (
              task?.subtasks?.map((task, index) => (
                <li className={SubTaskContentStyle} key={index}>
                  <div
                    className={
                      task?.complete
                        ? SubTaskCheckCompleteButtonStyle
                        : SubTaskCheckButtonStyle
                    }
                  />
                  {task?.complete ? (
                    <p className={SubTaskContentTextCompleteStyle}>
                      {task?.task}
                    </p>
                  ) : (
                    <p>{task?.task}</p>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>

        <div className={LineStyle} />

        <div className={OptionStyle}>
          <p className={OptionNameStyle}>
            <CiMemoPad className={OptionIconStyle} />
            <span>메모</span>
          </p>
          <p className={OptionContentStyle}>{task?.memo}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
