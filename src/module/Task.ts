export type StatusTask = "toDo" | "doing" | "done";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: StatusTask;
};

export interface TaskUtil extends Task {
  index: number;
}
