import {
  AddStatusWrapperStyle,
  StatusColorStyle,
  StatusLabelStyle,
  StatusListItemStyle,
  StatusListStyle,
  StatusListTitleStyle,
  StatusNameStyle,
} from "./StatusList.css";

import { TaskStatusType } from "@/types/types";

interface StatusListProps {
  taskListData: TaskStatusType[];
}

const StatusList = ({ taskListData }: StatusListProps) => {
  return (
    <div className={AddStatusWrapperStyle}>
      <h3 className={StatusListTitleStyle}>목록</h3>
      <ul className={StatusListStyle}>
        {taskListData?.map((status) => (
          <li className={StatusListItemStyle} key={status?.label}>
            <div className={StatusLabelStyle}>
              <span
                className={StatusColorStyle}
                style={{ backgroundColor: status?.color }}
              />
              <span className={StatusNameStyle}>{status?.label}</span>
            </div>

            {/* <FaRegTrashCan className={RemoveIconStyle} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusList;
