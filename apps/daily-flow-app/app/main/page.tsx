"use client";

import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import MainSection from "../components/main/MainSection";
import PageWrapper from "../components/layout/PageWrapper";
import Modal from "../components/common/Modal";
import AddTaskModal from "../components/main/AddTaskModal";

const MainPage = () => {
  const [selectedTask, setSelectedTask] = useState("일상");
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    type: "",
  });

  return (
    <PageWrapper>
      <Sidebar setSelectedTask={setSelectedTask} />
      <MainSection
        selectedTask={selectedTask}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen.type === "addTask" && isModalOpen.isOpen && (
        <Modal size="large">
          <AddTaskModal
            setIsModalOpen={setIsModalOpen}
            selectedTask={selectedTask}
          />
        </Modal>
      )}
    </PageWrapper>
  );
};

export default MainPage;
