"use client";

import { useCallback, useEffect, useState } from "react";
import Sidebar from "../components/common/Sidebar";
import MainSection from "../components/main/MainSection";
import PageWrapper from "../components/layout/PageWrapper";
import Modal from "../components/common/Modal";
import AddTaskModal from "../components/main/AddTaskModal";
import AddStatusModal from "../components/main/AddStatusModal";
import AddExpenditureModal from "../components/main/AddExpenditureModal";
import AddCategoryModal from "../components/common/Sidebar/AddCategoryModal";
import DetailModal from "../components/main/DetailModal";
import { PrivateRoute } from "../components/auth/PrivateRoute";
import { useCategories } from "@/hooks/useCategories";
import { useTasks } from "@/hooks/useTasks";
import { useTaskStatus } from "@/hooks/useTaskStatus";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    type: "",
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const { categories } = useCategories(refreshTrigger);
  const { taskStatuses } = useTaskStatus(selectedCategory, refreshTrigger);
  const { tasks } = useTasks(selectedCategory, refreshTrigger);

  const refreshData = useCallback(() => {
    console.log("refreshData 호출됨");
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories]);

  return (
    <PrivateRoute>
      <PageWrapper>
        <Sidebar
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setIsModalOpen={setIsModalOpen}
        />
        <MainSection
          refreshData={refreshData}
          refreshTrigger={refreshTrigger}
          taskStatus={taskStatuses}
          categories={categories}
          selectedCategory={selectedCategory}
          setIsModalOpen={setIsModalOpen}
        />
        {isModalOpen.type === "addTask" && isModalOpen.isOpen && (
          <Modal size="large">
            <AddTaskModal
              setRefreshTrigger={setRefreshTrigger}
              taskStatuses={taskStatuses}
              setIsModalOpen={setIsModalOpen}
              selectedCategory={selectedCategory}
            />
          </Modal>
        )}

        {isModalOpen.type === "addStatus" && isModalOpen.isOpen && (
          <Modal size="large">
            <AddStatusModal
              setIsModalOpen={setIsModalOpen}
              selectedCategory={selectedCategory}
            />
          </Modal>
        )}

        {isModalOpen.type === "addExpenditure" && isModalOpen.isOpen && (
          <Modal size="small">
            <AddExpenditureModal setIsModalOpen={setIsModalOpen} />
          </Modal>
        )}

        {isModalOpen.type === "addCategory" && isModalOpen.isOpen && (
          <Modal size="small">
            <AddCategoryModal setIsModalOpen={setIsModalOpen} />
          </Modal>
        )}

        {isModalOpen.type === "detail" && isModalOpen.isOpen && (
          <Modal size="large">
            <DetailModal
              tasks={tasks}
              taskStatuses={taskStatuses}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        )}
      </PageWrapper>
    </PrivateRoute>
  );
};

export default MainPage;
