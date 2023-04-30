import { Task } from "@/module/Task";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type TaskProviderProps = {
  children: ReactNode;
};

type UseTaskProps = {
  tasks: Task[];
  changeStatus: (id: number, newStatus: string) => void;
  createTask: (newTask: Omit<Task, "id">) => void;
  removeTask: (id: number) => void;
  moveTaskPosition: (positionOrigin: number, positionDestiny: number) => void;
};

const TaskContext = createContext<UseTaskProps>({} as UseTaskProps);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Terminar kanban", description: "teste", status: "toDo" },
    {
      id: 2,
      title: "Terminar kanban 2",
      description: "teste 2",
      status: "toDo",
    },
    {
      id: 3,
      title: "Terminar kanban3",
      description: "teste 3",
      status: "doing",
    },
    {
      id: 4,
      title: "Terminar kanban4",
      description: "teste 4",
      status: "done",
    },
    {
      id: 5,
      title: "Terminar kanban5",
      description: "teste 5",
      status: "doing",
    },
    {
      id: 6,
      title: "Terminar kanban6",
      description: "teste 6",
      status: "done",
    },
  ]);

  const changeStatus = useCallback(
    (id: number, newStatus: string) => {
      const arrayChanged = tasks.filter((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: newStatus,
          };
        }
      });

      setTasks(arrayChanged);
    },
    [tasks]
  );

  const moveTaskPosition = useCallback(
    (positionOrigin: number, positionDestiny: number) => {
      setTasks((prevTasks: Task[]) => {
        const newTasks = prevTasks.slice();
        const taskRemoved = newTasks.splice(positionOrigin, 1)[0];
        newTasks.splice(positionDestiny, 0, taskRemoved);
        return newTasks;
      });
    },
    []
  );

  const createTask = useCallback(
    (newTask: Omit<Task, "id">) => {
      const biggestId = tasks.reduce((acc, task) => {
        return task.id > acc ? task.id : acc;
      }, 0);
      setTasks([...tasks, { ...newTask, id: biggestId + 1 }]);
    },
    [tasks]
  );

  const removeTask = useCallback(
    (id: number) => {
      const tasksChanged = tasks.filter((task) => task.id !== id);
      setTasks(tasksChanged);
    },
    [tasks]
  );

  const value = useMemo(
    () => ({
      tasks,
      changeStatus,
      createTask,
      removeTask,
      moveTaskPosition,
    }),
    [tasks, changeStatus, createTask, removeTask, moveTaskPosition]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);
