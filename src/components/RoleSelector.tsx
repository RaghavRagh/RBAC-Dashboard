"use client";

import { useRole } from "@/context/RoleContext";

const RoleSelector: React.FC = () => {
  const { role, setRole } = useRole();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as "Admin" | "User");
  };

  return (
    <div className="my-2">
      <label htmlFor="role-select" className="font-medium">
        Logged in as:{" "}
      </label>
      <select
        className="border rounded-md p-1 outline-none w-28 text-center"
        id="role-select"
        value={role}
        onChange={handleRoleChange}
      >
        <option className="p-3" value="Admin">
          Admin
        </option>
        <option className="p-3" value="User">
          User
        </option>
      </select>
    </div>
  );
};

export default RoleSelector;
