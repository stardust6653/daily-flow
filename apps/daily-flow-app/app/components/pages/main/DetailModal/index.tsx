import { Dispatch, SetStateAction } from "react";
import ModalHeader from "../../../common/ModalHeader";
import { useSearchParams } from "next/navigation";
import {
  ColorChipStyle,
  CompleteButtonStyle,
  DetailModalColorStyle,
  DetailModalContentWrapper,
  DetailModalHeaderWrapperStyle,
  DetailModalStyle,
  LineStyle,
  MemoContentStyle,
  MemoContentTextStyle,
  MemoOptionStyle,
  MemoStyle,
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
import { SubTaskType, TaskStatusType, TaskType } from "@/types/types";
import api from "@/app/api/axios";
import Button from "../../../common/Button";

interface DetailModalProps {
  refreshData: () => void;
  tasks: TaskType[];
  taskStatuses: TaskStatusType[];
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const DetailModal = ({
  refreshData,
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

  const handleSubTaskUpdateClick = async (subtask: SubTaskType) => {
    console.log(subtask);

    await api
      .put(`/subtasks/${subtask.id}`, {
        complete: !subtask.complete,
      })
      .then((res) => {
        refreshData();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCompleteClick = async (item: TaskType) => {
    await api
      .put(`/tasks/${item.id}`, {
        complete: !item.complete,
      })
      .then((res) => {
        console.log(res);
        setIsModalOpen({ isOpen: true, type: "update" });
        refreshData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={DetailModalStyle}>
      <div>
        <div className={DetailModalHeaderWrapperStyle}>
          <span
            className={DetailModalColorStyle}
            style={{ backgroundColor: label?.color }}
          />
          <ModalHeader
            size="large"
            title={task?.main_task as string}
            handleCloseClick={() =>
              setIsModalOpen({ isOpen: false, type: "detail" })
            }
          />
        </div>

        <div className={DetailModalContentWrapper}>
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
              <span>
                {task?.complete ? `완료(${label?.label})` : label?.label}
              </span>
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
                  <li
                    className={SubTaskContentStyle}
                    key={index}
                    onClick={() => handleSubTaskUpdateClick(task)}
                  >
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

          <div className={MemoOptionStyle}>
            <div className={MemoStyle}>
              <div className={OptionNameStyle}>
                <span className={MemoContentTextStyle}>
                  <span>
                    <CiMemoPad
                      className={OptionIconStyle}
                      style={{ marginTop: "2px" }}
                    />
                  </span>
                  <span>메모</span>
                </span>
              </div>
            </div>
            <p className={MemoContentStyle}>{task?.memo}</p>
          </div>
        </div>
      </div>

      <div className={CompleteButtonStyle}>
        <Button
          type="primary"
          text={task?.complete ? "미완료 변경" : "완료하기"}
          onClick={() => handleCompleteClick(task as TaskType)}
        />
      </div>
    </div>
  );
};

export default DetailModal;
