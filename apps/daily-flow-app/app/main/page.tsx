"use client";

import { useCallback, useEffect, useState } from "react";
import Sidebar from "../_core/components/common/Sidebar";
import MainSection from "../_core/components/pages/main/MainSection";
import PageWrapper from "../_core/components/layout/PageWrapper";
import Modal from "../_core/components/common/Modal";
import AddTaskModal from "../_core/components/pages/main/AddTaskModal";
import AddStatusModal from "../_core/components/pages/main/AddStatusModal";
import AddExpenditureModal from "../_core/components/pages/main/AddExpenditureModal";
import AddCategoryModal from "../_core/components/common/Sidebar/AddCategoryModal";
import DetailModal from "../_core/components/pages/main/DetailModal";
import { PrivateRoute } from "../_core/components/auth/PrivateRoute";
import { useCategories } from "@/hooks/useCategories";
import { useTasks } from "@/hooks/useTasks";
import { useTaskStatus } from "@/hooks/useTaskStatus";
import DeleteCategoryModal from "../_core/components/pages/main/DeleteCategoryModal";

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
          tasks={tasks}
          refreshData={refreshData}
          taskStatus={taskStatuses}
          categories={categories}
          selectedCategory={selectedCategory}
          setIsModalOpen={setIsModalOpen}
        />
        {isModalOpen.type === "addTask" && isModalOpen.isOpen && (
          <Modal size="large">
            <AddTaskModal
              refreshData={refreshData}
              taskStatuses={taskStatuses}
              setIsModalOpen={setIsModalOpen}
              selectedCategory={selectedCategory}
            />
          </Modal>
        )}

        {isModalOpen.type === "addStatus" && isModalOpen.isOpen && (
          <Modal size="large">
            <AddStatusModal
              refreshData={refreshData}
              selectedCategory={selectedCategory}
              taskStatuses={taskStatuses}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        )}

        {isModalOpen.type === "addExpenditure" && isModalOpen.isOpen && (
          <Modal size="small">
            <AddExpenditureModal
              setIsModalOpen={setIsModalOpen}
              refreshData={refreshData}
            />
          </Modal>
        )}

        {isModalOpen.type === "addCategory" && isModalOpen.isOpen && (
          <Modal size="small">
            <AddCategoryModal
              setIsModalOpen={setIsModalOpen}
              refreshData={refreshData}
            />
          </Modal>
        )}

        {isModalOpen.type === "detail" && isModalOpen.isOpen && (
          <Modal size="large">
            <DetailModal
              refreshData={refreshData}
              tasks={tasks}
              taskStatuses={taskStatuses}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        )}

        {isModalOpen.type === "deleteCategory" && isModalOpen.isOpen && (
          <Modal size="small">
            <DeleteCategoryModal
              refreshData={refreshData}
              setIsModalOpen={setIsModalOpen}
              categories={categories}
              selectedCategory={selectedCategory}
            />
          </Modal>
        )}
      </PageWrapper>
    </PrivateRoute>
  );
};

export default MainPage;
