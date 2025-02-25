export interface TaskDataType {
  data: TaskListDataType[];
}

export interface TaskListDataType {
  name: string;
  color: string;
  tasks?: TaskListType[];
}

export interface TaskListType {
  label: string;
  color: string;
  sub_color: string;
  items: TaskItemType[];
}

export interface SubTaskType {
  task_id: string;
  order: number;
  task: string;
  complete: boolean;
}

export interface TaskItemType {
  created_at: string;
  id?: string;
  subtasks: SubTaskType[];
  type: "task" | "calendar" | string;
  category_id: string;
  status_id: string;
  main_task: string;
  memo?: string;
  period?: string;
  order?: number;
  complete?: boolean;
  expenditure?: number;
}
