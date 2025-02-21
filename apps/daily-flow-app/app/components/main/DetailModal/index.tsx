import { Dispatch, SetStateAction } from "react";
import ModalHeader from "../../common/ModalHeader";
import { useSearchParams } from "next/navigation";
import taskListData from "@/app/data/taskList.json";
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

interface DetailModalProps {
  selectedCategory: string;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const DetailModal = ({
  setIsModalOpen,
  selectedCategory,
}: DetailModalProps) => {
  const searchParams = useSearchParams();
  const task = searchParams.get("task");
  const status = searchParams.get("status");
  const id = searchParams.get("id");

  const category = taskListData.find((item) => item.name === selectedCategory);
  const label = category?.tasks?.find((item) => item.label === status);
  const item = label?.items?.find((item) => item.id === id);

  console.log(item);

  return (
    <div className={DetailModalStyle}>
      <div className={DetailModalHeaderWrapperStyle}>
        <span
          className={DetailModalColorStyle}
          style={{ backgroundColor: label?.color }}
        />
        <ModalHeader
          title={task as string}
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
            {item?.type === "calendar" ? item?.period : "할 일"}
          </div>
        </div>

        <div className={OptionStyle}>
          <p className={OptionNameStyle}>
            <FaTasks className={OptionIconStyle} />
            <span>서브 태스크</span>
          </p>
          <ul className={SubTaskStyle}>
            {item?.sub_task?.length === 0 ? (
              <li>비어있음</li>
            ) : (
              item?.sub_task?.map((task, index) => (
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
          <p className={OptionContentStyle}>{item?.memo}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
