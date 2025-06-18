import { useEffect, useState } from "react";
import api from "@/app/api/axios";
import { CategoryType } from "@/types/types";

export const useCategories = (refreshTrigger: number) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [refreshTrigger]);

  return { categories, loading };
};
