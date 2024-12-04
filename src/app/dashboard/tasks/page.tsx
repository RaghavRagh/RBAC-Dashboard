"use client";

import RoleSelector from "@/components/RoleSelector";
import { useRole } from "@/context/RoleContext";
import { useTasks } from "@/context/TaskContext";

export default function TaskPage() {
  const { role } = useRole();
  const { tasks, removeTask } = useTasks();

  const handleDeleteTask = (taskIndex: number) => {
    removeTask(taskIndex);
  };
  return (
    <>
      <RoleSelector />
      <div className="task-page p-4 bg-white mt-5 rounded-md min-h-[90%]">
        <h1 className="text-3xl font-semibold mb-7">Task Management</h1>
        {role !== "Admin" && (
          <p className="inline p-2.5 border border-amber-300 rounded-md bg-amber-100 text-sm mb-20">
            You do not have permission to manage users.
          </p>
        )}
        {tasks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="p-4 bg-white border rounded-lg shadow-md flex flex-col justify-between"
              >
                <h2 className="text-lg font-semibold text-slate-800 mb-2">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{task.description}</p>
                <div className="mt-auto">
                  <p className="text-xs text-gray-400 mb-2">
                    Assigned to User ID: {task.userId}
                  </p>
                  <button
                    className={`border rounded-md p-2 px-3 ${
                      role === "Admin"
                        ? "border-red-400 text-red-400"
                        : "border-gray-400 text-gray-400"
                    }`}
                    onClick={() => handleDeleteTask(index)}
                    disabled={role !== "Admin"}
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 mt-10">Threre are no tasks to display.</div>
        )}
      </div>
    </>
  );
}
