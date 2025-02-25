import MainTitle from "../MainTitle";
import { MainSectionListStyle, MainSectionStyle } from "./MainSection.css";
import TaskList from "../TaskList";
import { Dispatch, SetStateAction } from "react";
import AddStatusButton from "../AddStatusButton";
import { useTaskStatus } from "@/hooks/useTaskStatus";
import { CategoryType } from "@/types/types";

interface MainSectionProps {
  categories: CategoryType[];
  selectedCategory: string;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; type: string }>>;
}

const MainSection = ({
  selectedCategory,
  setIsModalOpen,
  categories,
}: MainSectionProps) => {
  const selectedCategoryData = categories.find(
    (item) => item.id === selectedCategory
  );

  const { taskStatuses } = useTaskStatus(selectedCategory);

  return (
    <section className={MainSectionStyle}>
      {selectedCategoryData && <MainTitle data={selectedCategoryData} />}
      <div className={MainSectionListStyle}>
        {taskStatuses?.map((status) => (
          <TaskList
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
