import { useState } from "react";
import { useRole } from "@/context/RoleContext";

interface TaskModalProps {
  userId: number;
  onClose: () => void;
  onAssign: (
    userId: number,
    task: { title: string; description: string }
  ) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ userId, onClose, onAssign }) => {
  const { role } = useRole();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onAssign(userId, { title, description });
    onClose();
  };

  return (
    <div className="modal absolute left-[40%] top-[30%] z-10">
      <div className="modal-content bg-white p-4 border rounded-lg shadow-2xl">
        <h2 className="text-center border-b pb-4 text-xl font-medium">
          Assign Task
        </h2>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="focus:outline-none p-2 text-lg border-b w-full"
          formNoValidate
        />
        <textarea
          className="border rounded-md w-full my-3 p-2 focus:outline-none"
          placeholder="Task Description"
          value={description}
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <button onClick={handleSubmit} className="border rounded-md p-2 bg-slate-800 text-white px-3" disabled={role !== "Admin"}>Assign</button>
          <button
            onClick={onClose}
            className="border rounded-md p-2 px-3 border-red-400 text-red-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
