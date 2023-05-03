import { StatusTask, Task } from "@/module/Task";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { v4 as uuidv4 } from "uuid";

type TaskProviderProps = {
  children: ReactNode;
};

type UseTaskProps = {
  tasksToDo: Task[];
  tasksDoing: Task[];
  tasksDone: Task[];
  changeStatus: (task: Task, newStatus: StatusTask) => void;
  createTask: (newTask: Omit<Task, "id">) => void;
  removeTask: (taskForRemove: Task) => void;
  moveTaskPosition: (
    positionOrigin: number,
    positionDestiny: number,
    status: StatusTask
  ) => void;
};

const TaskContext = createContext<UseTaskProps>({} as UseTaskProps);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasksToDo, setTasksToDo] = useState<Task[]>([]);

  const [tasksDoing, setTasksDoing] = useState<Task[]>([]);

  const [tasksDone, setTasksDone] = useState<Task[]>([]);

  const removeTask = useCallback((taskForRemove: Task) => {
    if (taskForRemove.status === "toDo") {
      setTasksToDo((prevTasks) => {
        const tasksChanged = prevTasks.filter(
          (task) => task.id !== taskForRemove.id
        );

        return tasksChanged;
      });
    }

    if (taskForRemove.status === "doing") {
      setTasksDoing((prevTasks) => {
        const tasksChanged = prevTasks.filter(
          (task) => task.id !== taskForRemove.id
        );

        return tasksChanged;
      });
    }

    if (taskForRemove.status === "done") {
      setTasksDone((prevTasks) => {
        const tasksChanged = prevTasks.filter(
          (task) => task.id !== taskForRemove.id
        );

        return tasksChanged;
      });
    }
  }, []);

  const changeStatus = useCallback(
    (task: Task, newStatus: StatusTask) => {
      if (newStatus === "toDo") {
        setTasksToDo((prevTasks) => {
          const newTasks = [...prevTasks];
          newTasks.push({ ...task, status: "toDo" });
          return newTasks;
        });

        removeTask(task);
      }

      if (newStatus === "doing") {
        setTasksDoing((prevTasks) => {
          const newTasks = [...prevTasks];
          newTasks.push({ ...task, status: "doing" });
          return newTasks;
        });

        removeTask(task);
      }

      if (newStatus === "done") {
        setTasksDone((prevTasks) => {
          const newTasks = [...prevTasks];
          newTasks.push({ ...task, status: "done" });
          return newTasks;
        });

        removeTask(task);
      }
    },
    [removeTask]
  );

  const moveTaskPosition = useCallback(
    (positionOrigin: number, positionDestiny: number, status: StatusTask) => {
      if (status === "toDo") {
        setTasksToDo((prevTasks: Task[]) => {
          const newTasks = prevTasks.slice();
          const taskRemoved = newTasks.splice(positionOrigin, 1)[0];
          newTasks.splice(positionDestiny, 0, taskRemoved);
          return newTasks;
        });
      }

      if (status === "doing") {
        setTasksDoing((prevTasks: Task[]) => {
          const newTasks = prevTasks.slice();
          const taskRemoved = newTasks.splice(positionOrigin, 1)[0];
          newTasks.splice(positionDestiny, 0, taskRemoved);
          return newTasks;
        });
      }

      if (status === "done") {
        setTasksDone((prevTasks: Task[]) => {
          const newTasks = prevTasks.slice();
          const taskRemoved = newTasks.splice(positionOrigin, 1)[0];
          newTasks.splice(positionDestiny, 0, taskRemoved);
          return newTasks;
        });
      }
    },
    []
  );

  const createTask = useCallback((newTask: Omit<Task, "id">) => {
    if (newTask.status === "toDo") {
      const id = uuidv4();
      setTasksToDo((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.push({ ...newTask, id });

        return newTasks;
      });
    }

    if (newTask.status === "doing") {
      const id = uuidv4();
      setTasksDoing((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.push({ ...newTask, id });

        return newTasks;
      });
    }

    if (newTask.status === "done") {
      const id = uuidv4();
      setTasksDone((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.push({ ...newTask, id });

        return newTasks;
      });
    }
  }, []);

  const value = useMemo(
    () => ({
      tasksToDo,
      tasksDoing,
      tasksDone,
      changeStatus,
      createTask,
      removeTask,
      moveTaskPosition,
    }),
    [
      tasksToDo,
      tasksDoing,
      tasksDone,
      changeStatus,
      createTask,
      removeTask,
      moveTaskPosition,
    ]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);
