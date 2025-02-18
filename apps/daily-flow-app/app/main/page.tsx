"use client";

import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import MainSection from "../components/main/MainSection";
import PageWrapper from "../components/layout/PageWrapper";

const MainPage = () => {
  const [selectedTodo, setSelectedTodo] = useState("일상");

  return (
    <PageWrapper>
      <Sidebar setSelectedTodo={setSelectedTodo} />
      <MainSection selectedTodo={selectedTodo} />
    </PageWrapper>
  );
};

export default MainPage;
