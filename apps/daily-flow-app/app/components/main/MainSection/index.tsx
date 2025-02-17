import todoList from "@/app/data/todoList.json";
import MainTitle from "../MainTitle";
import {
  MainSectionAddButtonStyle,
  MainSectionAddListStyle,
  MainSectionListStyle,
  MainSectionStyle,
} from "./MainSection.css";
import TodoList from "../TodoList";
import { MdAddCircleOutline } from "react-icons/md";

interface MainSectionProps {
  selectedTodo: string;
}

const MainSection = ({ selectedTodo }: MainSectionProps) => {
  const selectedTodoData = todoList.find((item) => item.name === selectedTodo);

  return (
    <section className={MainSectionStyle}>
      {selectedTodoData && <MainTitle data={selectedTodoData} />}
      <div className={MainSectionListStyle}>
        {selectedTodoData?.todos?.map((todo) => (
          <TodoList data={todo} key={todo.label} />
        ))}

        <div className={MainSectionAddListStyle}>
          <label className={MainSectionAddButtonStyle}>
            <MdAddCircleOutline />
          </label>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
