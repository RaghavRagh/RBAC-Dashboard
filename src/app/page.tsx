// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to RBAC Dashboard</h1>
      <Link
        href="/dashboard"
        className="text-blue-500 underline text-lg font-semibold"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
