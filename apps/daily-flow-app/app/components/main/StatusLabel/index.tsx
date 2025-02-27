import { StatusLabelStyle } from "./StatusLabel.css";
import { TaskStatusType } from "@/types/types";
import { Dispatch, SetStateAction } from "react";
import DeleteStatusModal from "../DeleteStatusModal";

interface StatusLabelProps {
  data: TaskStatusType;
  refreshData: () => void;
  setIsDeleteStatusModalOpen: Dispatch<
    SetStateAction<{ status: string; isOpen: boolean }>
  >;
  isDeleteStatusModalOpen: { status: string; isOpen: boolean };
}

const StatusLabel = ({
  data,
  refreshData,
  setIsDeleteStatusModalOpen,
  isDeleteStatusModalOpen,
}: StatusLabelProps) => {
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDeleteStatusModalOpen({
      status: data?.id ?? "",
      isOpen: !isDeleteStatusModalOpen.isOpen,
    });
  };
  return (
    <h3
      className={StatusLabelStyle}
      style={{ backgroundColor: data?.color }}
      onContextMenu={handleContextMenu}
    >
      <span>{data.label}</span>

      {isDeleteStatusModalOpen.isOpen &&
        data?.id === isDeleteStatusModalOpen.status && (
          <DeleteStatusModal
            data={data}
            refreshData={refreshData}
            setIsDeleteStatusModalOpen={setIsDeleteStatusModalOpen}
          />
        )}
    </h3>
  );
};

export default StatusLabel;
