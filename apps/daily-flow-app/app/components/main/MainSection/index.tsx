import taskList from "@/app/data/taskList.json";
import MainTitle from "../MainTitle";
import { MainSectionListStyle, MainSectionStyle } from "./MainSection.css";
import TaskList from "../TaskList";
import { Dispatch, SetStateAction } from "react";
import AddStatusButton from "../AddStatusButton";

interface MainSectionProps {
  selectedCategory: string;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const MainSection = ({
  selectedCategory,
  setIsModalOpen,
}: MainSectionProps) => {
  const selectedCategoryData = taskList.find(
    (item) => item.name === selectedCategory
  );

  return (
    <section className={MainSectionStyle}>
      {selectedCategoryData && <MainTitle data={selectedCategoryData} />}
      <div className={MainSectionListStyle}>
        {selectedCategoryData?.tasks?.map((task) => (
          <TaskList
            data={task}
            setIsModalOpen={setIsModalOpen}
            key={task.label}
          />
        ))}

        <AddStatusButton setIsModalOpen={setIsModalOpen} />
      </div>
    </section>
  );
};

export default MainSection;
