import MainTitle from "../MainTitle";
import { MainSectionListStyle, MainSectionStyle } from "./MainSection.css";
import TaskList from "../TaskList";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AddStatusButton from "../AddStatusButton";
import { CategoryType, TaskStatusType, TaskType } from "@/types/types";
import CompleteTaskList from "../CompleteTaskList";
import { ModalType } from "@/types/task";

interface MainSectionProps {
  taskStatus: TaskStatusType[];
  categories: CategoryType[];
  selectedCategory: string;
  tasks: TaskType[];
  refreshData: () => void;
  setIsModalOpen: Dispatch<SetStateAction<ModalType>>;
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

  const [totalExpenditure, setTotalExpenditure] = useState(0);

  useEffect(() => {
    const total = tasks.reduce(
      (sum, task) =>
        task.complete ? sum + Number(task.expenditure || 0) : sum,
      0
    );

    setTotalExpenditure(total);
  }, [tasks]);

  return (
    <>
      <section className={MainSectionStyle}>
        {selectedCategoryData && (
          <MainTitle
            expenditure={totalExpenditure}
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
