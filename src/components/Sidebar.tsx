import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen fixed border-1 shadow">
      <h1 className="m-5 text-lg font-medium">
        <Link href="/dashboard">Dashboard</Link>
      </h1>
      <ul className="p-4 text-center font-medium text-lg text-slate-800">
        <li className="my-2 p-2 rounded-lg hover:bg-slate-100">
          <Link href="/dashboard/users">Users</Link>
        </li>
        <hr />
        <li className="my-2 p-2 rounded-lg hover:bg-slate-100">
          <Link href="/dashboard/tasks">Tasks</Link>
        </li>
        <hr />
      </ul>
    </aside>
  );
};

export default Sidebar;
