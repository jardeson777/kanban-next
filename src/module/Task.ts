export type Task = {
  id: number;
  title: string;
  description: string;
  status: "toDo" | "doing" | "done";
};

export interface TaskUtil extends Task {
  index: number;
}
