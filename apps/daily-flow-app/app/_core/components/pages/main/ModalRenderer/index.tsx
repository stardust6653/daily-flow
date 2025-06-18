"use client";

import { ModalType } from "@/types/task";
import Modal from "../../../common/Modal";
import AddTaskModal from "../AddTaskModal";
import AddStatusModal from "../AddStatusModal";
import AddExpenditureModal from "../AddExpenditureModal";
import AddCategoryModal from "../../../common/Sidebar/AddCategoryModal";
import DetailModal from "../DetailModal";
import DeleteCategoryModal from "../DeleteCategoryModal";
import { TaskStatusType, TaskType, CategoryType } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

type ModalProps = {
  refreshData: () => void;
  taskStatuses: TaskStatusType[];
  setIsModalOpen: Dispatch<SetStateAction<ModalType>>;
  selectedCategory: string;
  tasks: TaskType[];
  categories: CategoryType[];
  taskId?: string;
};

const MODAL_COMPONENTS = {
  addTask: AddTaskModal,
  update: AddTaskModal,
  addStatus: AddStatusModal,
  addExpenditure: AddExpenditureModal,
  addCategory: AddCategoryModal,
  detail: DetailModal,
  deleteCategory: DeleteCategoryModal,
} as const;

export const getModalProps = (type: ModalType["type"], props: ModalProps) => {
  const commonProps = {
    refreshData: props.refreshData,
    setIsModalOpen: props.setIsModalOpen,
  };

  switch (type) {
    case "addTask":
      return {
        ...commonProps,
        taskStatuses: props.taskStatuses,
        selectedCategory: props.selectedCategory,
      };
    case "update":
      return {
        ...commonProps,
        taskStatuses: props.taskStatuses,
        selectedCategory: props.selectedCategory,
        updateTaskItem: props.tasks.find((t) => t.id === props.taskId),
      };
    case "addStatus":
      return {
        ...commonProps,
        selectedCategory: props.selectedCategory,
        taskStatuses: props.taskStatuses,
      };
    case "detail":
      return {
        ...commonProps,
        tasks: props.tasks,
        taskStatuses: props.taskStatuses,
      };
    case "deleteCategory":
      return {
        ...commonProps,
        categories: props.categories,
        selectedCategory: props.selectedCategory,
      };
    default:
      return commonProps;
  }
};

const ModalRenderer = ({
  isModalOpen,
  modalProps,
}: {
  isModalOpen: ModalType;
  modalProps: ReturnType<typeof getModalProps>;
}) => {
  if (!isModalOpen.isOpen) return null;

  const ModalComponent =
    MODAL_COMPONENTS[isModalOpen.type as keyof typeof MODAL_COMPONENTS];
  if (!ModalComponent) return null;

  const size =
    isModalOpen.type === "addExpenditure" ||
    isModalOpen.type === "addCategory" ||
    isModalOpen.type === "deleteCategory"
      ? "small"
      : "large";

  return (
    <Modal size={size}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModalComponent {...(modalProps as any)} />
    </Modal>
  );
};

export default ModalRenderer;
