import { TodoListType } from "@/types/todo";
import { TodoListStyle } from "./TodoList.css";

import StatusLabel from "../StatusLabel";
import Todo from "../Todo";
import AddTaskButton from "../AddTaskButton";

interface TodoListProps {
  data: TodoListType;
}

const TodoList = ({ data }: TodoListProps) => {
  return (
    <div className={TodoListStyle}>
      <StatusLabel data={data} />
      {data.items?.map((item) => (
        <Todo data={data} item={item} key={item.id} />
      ))}
      <AddTaskButton />
    </div>
  );
};

export default TodoList;
