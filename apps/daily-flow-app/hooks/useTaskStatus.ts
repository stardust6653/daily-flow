import api from "@/app/api/axios";
import { TaskStatusType } from "@/types/types";
import { useEffect, useState } from "react";

export const useTaskStatus = (categoryId: string) => {
  const [taskStatuses, setTaskStatuses] = useState<TaskStatusType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTaskStatuses = async () => {
      try {
        const response = await api.get(`/task-status/category/${categoryId}`);
        setTaskStatuses(response.data);
      } catch (error) {
        console.error("Failed to fetch task statuses:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchTaskStatuses();
    }
  }, [categoryId]);

  return { taskStatuses, loading };
};
