import { TodoItemType, TodoListType } from "@/types/todo";
import {
  TodoListAddButtonStyle,
  TodoListButtonStyle,
  TodoListContentStyle,
  TodoListLabelStyle,
  TodoListLengthStyle,
  TodoListMainContentStyle,
  TodoListMemoStyle,
  TodoListPeriodStyle,
  TodoListStyle,
  TodoListSubTaskMarkStyle,
  TodoListTaskStyle,
} from "./TodoList.css";

import { MdAddCircleOutline } from "react-icons/md";

interface TodoListProps {
  data: TodoListType;
}

const TodoList = ({ data }: TodoListProps) => {
  const completeColor = (item: TodoItemType) => {
    if (item.complete && data?.color) {
      return data.color;
    }
    return "transparent";
  };

  return (
    <div className={TodoListStyle}>
      <h3
        className={TodoListLabelStyle}
        style={{ backgroundColor: data?.color }}
      >
        <span>{data.label}</span>
        <span className={TodoListLengthStyle}>{data?.items?.length}</span>
      </h3>
      {data.items?.map((item) => (
        <div
          className={TodoListContentStyle}
          key={item.id}
          style={{ backgroundColor: data?.sub_color }}
        >
          <div className={TodoListMainContentStyle}>
            <button
              className={TodoListButtonStyle}
              style={{ backgroundColor: completeColor(item) }}
            />
            <div>
              <p className={TodoListTaskStyle}>{item.main_task}</p>
              <p className={TodoListMemoStyle}>{item.memo}</p>
            </div>
          </div>
          <p className={TodoListPeriodStyle}>
            {item?.type === "todo" ? "할 일" : item?.period}
          </p>

          {item?.sub_task?.length > 0 && (
            <div
              className={TodoListSubTaskMarkStyle}
              style={{ backgroundColor: data?.color }}
            />
          )}
        </div>
      ))}
      <div className={TodoListAddButtonStyle}>
        <MdAddCircleOutline />
      </div>
    </div>
  );
};

export default TodoList;
