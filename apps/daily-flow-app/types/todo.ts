export interface TodoDataType {
  data: TodoListDataType[];
}

export interface TodoListDataType {
  name: string;
  color: string;
  todos: TodoListType[];
}

export interface TodoListType {
  label: string;
  color: string;
  sub_color: string;
  items?: TodoItemType[];
}

export interface TodoItemType {
  created_at: string;
  id: string;
  main_task: string;
  sub_task: string[];
  memo: string;
  type: "todo" | "calendar" | string;
  period: string;
  complete: boolean;
}
