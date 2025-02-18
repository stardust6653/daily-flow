"use client";

import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import MainSection from "../components/main/MainSection";
import PageWrapper from "../components/layout/PageWrapper";

const MainPage = () => {
  const [selectedTask, setSelectedTask] = useState("일상");

  return (
    <PageWrapper>
      <Sidebar setSelectedTask={setSelectedTask} />
      <MainSection selectedTask={selectedTask} />
    </PageWrapper>
  );
};

export default MainPage;
