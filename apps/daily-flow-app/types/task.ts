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
  task: string;
  complete: boolean;
}

export interface TaskItemType {
  created_at: string;
  id: string;
  main_task: string;
  sub_task: SubTaskType[];
  memo: string;
  type: "task" | "calendar" | string;
  period: string;
  complete: boolean;
  expenditure?: number;
}
