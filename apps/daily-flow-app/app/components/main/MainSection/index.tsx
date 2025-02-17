import todoList from "@/app/data/todoList.json";
import MainTitle from "../MainTitle";
import { MainSectionStyle } from "./MainSection.css";

interface MainSectionProps {
  selectedTodo: string;
}

const MainSection = ({ selectedTodo }: MainSectionProps) => {
  const selectedTodoData = todoList.find((item) => item.name === selectedTodo);

  console.log(selectedTodoData);

  return (
    <section className={MainSectionStyle}>
      {selectedTodoData && <MainTitle data={selectedTodoData} />}
    </section>
  );
};

export default MainSection;
