import { TodoItemType, TodoListType } from "@/types/todo";
import SubTaskMark from "../SubTaskMark";
import TodoType from "../TodoType";
import { TodoStyle } from "./Todo.css";
import TaskContent from "../TaskContent";

interface TodoProps {
  data: TodoListType;
  item: TodoItemType;
}

const Todo = ({ data, item }: TodoProps) => {
  return (
    <div
      className={TodoStyle}
      key={item.id}
      style={{ backgroundColor: data?.sub_color }}
    >
      <TaskContent data={data} item={item} />
      <TodoType item={item} />
      {item?.sub_task?.length > 0 && <SubTaskMark data={data} />}
    </div>
  );
};

export default Todo;
