import api from "@/app/api/axios";
import { TaskType } from "@/types/types";
import { useEffect, useState } from "react";

export const useTasks = (categoryId: string) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get(`/tasks/category/${categoryId}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchTasks();
    }
  }, [categoryId]);

  return { tasks, loading };
};
