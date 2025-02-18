import taskList from "@/app/data/taskList.json";
import MainTitle from "../MainTitle";
import { MainSectionListStyle, MainSectionStyle } from "./MainSection.css";
import TaskList from "../TaskList";
import { Dispatch, SetStateAction } from "react";
import AddStatusButton from "../AddStatusButton";

interface MainSectionProps {
  selectedTask: string;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const MainSection = ({ selectedTask, setIsModalOpen }: MainSectionProps) => {
  const selectedTaskData = taskList.find((item) => item.name === selectedTask);

  return (
    <section className={MainSectionStyle}>
      {selectedTaskData && <MainTitle data={selectedTaskData} />}
      <div className={MainSectionListStyle}>
        {selectedTaskData?.tasks?.map((task) => (
          <TaskList
            data={task}
            setIsModalOpen={setIsModalOpen}
            key={task.label}
          />
        ))}

        <AddStatusButton />
      </div>
    </section>
  );
};

export default MainSection;
