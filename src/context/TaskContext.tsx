'use client';

import { createContext, useContext, useState } from "react";

interface Task {
  userId: number;
  title: string;
  description: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (index: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
  const removeTask = (index: number) =>
    setTasks((prev) => prev.filter((_, i) => i !== index));

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
};
