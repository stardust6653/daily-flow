"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Sidebar from "../_core/components/common/Sidebar";
import MainSection from "../_core/components/pages/main/MainSection";
import PageWrapper from "../_core/components/layout/PageWrapper";
import { PrivateRoute } from "../_core/components/auth/PrivateRoute";
import { useCategories } from "@/hooks/useCategories";
import { useTasks } from "@/hooks/useTasks";
import { useTaskStatus } from "@/hooks/useTaskStatus";
import { ModalType } from "@/types/task";
import ModalRenderer, {
  getModalProps,
} from "../_core/components/pages/main/ModalRenderer";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<ModalType>({
    isOpen: false,
    type: "",
    taskId: "",
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const { categories } = useCategories(refreshTrigger);
  const { taskStatuses } = useTaskStatus(selectedCategory, refreshTrigger);
  const { tasks } = useTasks(selectedCategory, refreshTrigger);

  const refreshData = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  const prevCategoriesLength = useRef(0);

  useEffect(() => {
    if (categories.length === 0) return;

    if (categories.length > prevCategoriesLength.current) {
      setSelectedCategory(categories[categories.length - 1].id);
      prevCategoriesLength.current = categories.length;
      return;
    }

    if (!categories.some((category) => category.id === selectedCategory)) {
      setSelectedCategory(categories[0].id);
    }
    prevCategoriesLength.current = categories.length;
  }, [categories]);

  const modalProps = getModalProps(isModalOpen.type, {
    refreshData,
    taskStatuses,
    setIsModalOpen,
    selectedCategory,
    tasks,
    categories,
    taskId: isModalOpen.taskId,
  });

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
        <ModalRenderer isModalOpen={isModalOpen} modalProps={modalProps} />
      </PageWrapper>
    </PrivateRoute>
  );
};

export default MainPage;
