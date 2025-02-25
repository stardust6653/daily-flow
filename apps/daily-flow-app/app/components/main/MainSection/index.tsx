import MainTitle from "../MainTitle";
import { MainSectionListStyle, MainSectionStyle } from "./MainSection.css";
import TaskList from "../TaskList";
import { Dispatch, SetStateAction } from "react";
import AddStatusButton from "../AddStatusButton";
import { CategoryType, TaskStatusType } from "@/types/types";

interface MainSectionProps {
  taskStatus: TaskStatusType[];
  categories: CategoryType[];
  selectedCategory: string;
  refreshTrigger: number;
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const MainSection = ({
  selectedCategory,
  setIsModalOpen,
  categories,
  taskStatus,
  refreshTrigger,
  refreshData,
}: MainSectionProps) => {
  const selectedCategoryData = categories.find(
    (item) => item.id === selectedCategory
  );

  return (
    <section className={MainSectionStyle}>
      {selectedCategoryData && <MainTitle data={selectedCategoryData} />}
      <div className={MainSectionListStyle}>
        {taskStatus?.map((status) => (
          <TaskList
            refreshData={refreshData}
            refreshTrigger={refreshTrigger}
            selectedCategory={selectedCategory}
            data={status}
            setIsModalOpen={setIsModalOpen}
            key={status?.id}
          />
        ))}

        <AddStatusButton setIsModalOpen={setIsModalOpen} />
      </div>
    </section>
  );
};

export default MainSection;
