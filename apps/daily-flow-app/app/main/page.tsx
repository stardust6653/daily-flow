"use client";

import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import MainSection from "../components/main/MainSection";
import PageWrapper from "../components/layout/PageWrapper";
import Modal from "../components/common/Modal";
import AddTaskModal from "../components/main/AddTaskModal";
import AddStatusModal from "../components/main/AddStatusModal";
import AddExpenditureModal from "../components/main/AddExpenditureModal";
import AddCategoryModal from "../components/common/Sidebar/AddCategoryModal";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("일상");
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    type: "",
  });

  return (
    <PageWrapper>
      <Sidebar
        setSelectedCategory={setSelectedCategory}
        setIsModalOpen={setIsModalOpen}
      />
      <MainSection
        selectedCategory={selectedCategory}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen.type === "addTask" && isModalOpen.isOpen && (
        <Modal size="large">
          <AddTaskModal
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
    </PageWrapper>
  );
};

export default MainPage;
