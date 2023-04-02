import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type ContextType = {};

type TaskProviderProps = {
  children: ReactNode;
};

const TaskContext = createContext<ContextType>({} as ContextType);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const value = useMemo(() => ({}), []);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);
