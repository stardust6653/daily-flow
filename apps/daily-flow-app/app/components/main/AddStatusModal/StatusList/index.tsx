import { TaskListDataType } from "@/types/task";
import {
  AddStatusWrapperStyle,
  RemoveIconStyle,
  StatusColorStyle,
  StatusLabelStyle,
  StatusListItemStyle,
  StatusListStyle,
  StatusListTitleStyle,
} from "./StatusList.css";
import { FaRegTrashCan } from "react-icons/fa6";

interface StatusListProps {
  taskListData: TaskListDataType[];
}

const StatusList = ({ taskListData }: StatusListProps) => {
  const statusList = taskListData[0].tasks;

  return (
    <div className={AddStatusWrapperStyle}>
      <h3 className={StatusListTitleStyle}>목록</h3>
      <ul className={StatusListStyle}>
        {statusList?.map((status) => (
          <li className={StatusListItemStyle} key={status.label}>
            <div className={StatusLabelStyle}>
              <span
                className={StatusColorStyle}
                style={{ backgroundColor: status.color }}
              />
              <span>{status.label}</span>
            </div>

            <FaRegTrashCan className={RemoveIconStyle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusList;
