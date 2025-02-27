import MainTitle from "../MainTitle";
import { MainSectionListStyle, MainSectionStyle } from "./MainSection.css";
import TaskList from "../TaskList";
import { Dispatch, SetStateAction } from "react";
import AddStatusButton from "../AddStatusButton";
import { CategoryType, TaskStatusType, TaskType } from "@/types/types";
import CompleteTaskList from "../CompleteTaskList";

interface MainSectionProps {
  taskStatus: TaskStatusType[];
  categories: CategoryType[];
  selectedCategory: string;
  tasks: TaskType[];
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const MainSection = ({
  selectedCategory,
  setIsModalOpen,
  categories,
  taskStatus,
  refreshData,
  tasks,
}: MainSectionProps) => {
  const selectedCategoryData = categories.find(
    (item) => item.id === selectedCategory
  );

  return (
    <>
      <section className={MainSectionStyle}>
        {selectedCategoryData && (
          <MainTitle
            data={selectedCategoryData}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <div className={MainSectionListStyle}>
          {taskStatus?.map((status) => (
            <TaskList
              tasks={tasks}
              refreshData={refreshData}
              data={status}
              setIsModalOpen={setIsModalOpen}
              key={status?.id}
            />
          ))}

          <CompleteTaskList
            tasks={tasks}
            setIsModalOpen={setIsModalOpen}
            refreshData={refreshData}
          />

          <AddStatusButton setIsModalOpen={setIsModalOpen} />
        </div>
      </section>
    </>
  );
};

export default MainSection;
