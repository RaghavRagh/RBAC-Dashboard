"use client";

import { useRole } from "@/context/RoleContext";
import { User } from "@/utils/types";
import { useState } from "react";
import initialUsers from "@/utils/Users";
import Navigation from "@/components/Navigation";
import RoleSelector from "@/components/RoleSelector";
import TaskModal from "@/components/TaskModal";
import { useTasks } from "@/context/TaskContext";

export default function UserPage() {
  const { role } = useRole();
  const { addTask } = useTasks();

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [filter, setFilter] = useState<string>("All");

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectUserId, setSelectUserId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleRoleChange = (id: number, newRole: string) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const openTaskModal = (userId: number) => {
    setSelectUserId(userId);
    setIsTaskModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
    setSelectUserId(null);
  };

  const assignTask = (
    userId: number,
    task: { title: string; description: string }
  ) => {
    addTask({ userId, ...task });
  };

  const filteredUser = users.filter((user) => {
    if (filter === "All") return true;
    if (filter === "Active") return user.status === "Active";
    if (filter === "Inactive") return user.status === "Inactive";
    if (filter === "User") return user.role === "User";
    if (filter === "Editor") return user.role === "Editor";
    return false;
  });

  return (
    <>
      <div className="flex items-center justify-between mr-5">
        <Navigation activeFilter={filter} onFilterChange={setFilter} />
        <RoleSelector />
      </div>
      {isTaskModalOpen && (
        <TaskModal
          userId={selectUserId!}
          onClose={closeTaskModal}
          onAssign={assignTask}
        />
      )}
      <div className="bg-white border rounded-md p-6 m-2 my-2">
        <h1 className="text-3xl font-semibold mb-7">User Management</h1>
        {role !== "Admin" && (
          <p className="inline p-2.5 border border-amber-300 rounded-md bg-amber-100 text-sm">
            You do not have permission to manage users.
          </p>
        )}

        <table className=" bg-white mt-10 p-2 border-b rounded-md w-full last:border-b-0">
          <thead className="">
            <tr className="border-b transition-colors">
              <th className="h-12 w-[100px] px-4 text-left align-middle font-medium text-slate-600 sm:table-cell"></th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-600 sm:table-cell">
                Name
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-600 sm:table-cell">
                Status
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-600 sm:table-cell">
                Role
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-600 sm:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.map((user) => (
              <tr
                key={user.id}
                className="h-20 border-b hover:bg-slate-100/70 transition-colors"
              >
                <td>
                  <img
                    src={user.profile}
                    alt="user's profile"
                    width={64}
                    height={64}
                    className="aspect-square rounded-full object-cover"
                  />
                </td>
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4 align-middle ">
                  {user.status === "Active" ? (
                    <span className="px-3 py-[0.25rem] bg-green-100 text-green-900 text-sm rounded-2xl">
                      {user.status}
                    </span>
                  ) : (
                    <span className="px-3 py-[0.25rem] bg-red-200 text-red-900 text-sm rounded-2xl">
                      {user.status}
                    </span>
                  )}
                </td>
                {role === "Admin" ? (
                  <td className="p-4">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                    >
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="User">User</option>
                    </select>
                  </td>
                ) : (
                  <td className="px-4">{user.role}</td>
                )}

                <td>
                  {role === "Admin" ? (
                    <select
                      className="focus:outline-none"
                      name=""
                      id=""
                      defaultValue=""
                      onChange={(e) => {
                        if (e.target.value === "assignTask") {
                          console.log("Assigning...");
                          openTaskModal(user.id);
                        } else if (e.target.value === "removeUser") {
                          handleDelete(user.id);
                        }
                        e.target.value = "";
                      }}
                    >
                      <option value="" className="text-center">
                        ...
                      </option>
                      <option value="assignTask">Assign Task</option>
                      <option value="removeUser" className="text-red-400">
                        Remove user
                      </option>
                    </select>
                  ) : (
                    <span className="text-gray-400 ml-10">...</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
