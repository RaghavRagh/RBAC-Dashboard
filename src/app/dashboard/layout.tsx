import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative z-0">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <main className="bg-slate-100 p-6 w-full">{children}</main>
      </div>
    </div>
  );
}
