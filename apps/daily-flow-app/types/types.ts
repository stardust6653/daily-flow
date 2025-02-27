export interface CategoryType {
  color: string;
  id: string;
  name: string;
  order: number;
  user_id: string;
}

export interface TaskStatusType {
  category_id: string;
  color: string;
  id?: string;
  label: string;
  sub_color: string;
}

export interface TaskType {
  category_id?: string;
  complete: boolean;
  expenditure: string;
  id: string;
  main_task: string;
  memo: string;
  status_id: string;
  subtasks: SubTaskType[];
  type: "task" | "calendar";
  user_id: string;
  order?: number;
  period?: string;
}

export interface SubTaskType {
  complete: boolean;
  order: number;
  task: string;
  task_id?: string;
  id?: string;
}

export interface TaskFormData {
  main_task: string;
  subtasks: SubTaskType[];
  memo: string;
  category_id: string;
  status_id: string | null;
  type: "task" | "calendar" | string;
  period: string;
  complete: boolean;
  expenditure?: number;
  created_at?: string;
}
