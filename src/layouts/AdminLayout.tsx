// Library
import { Outlet } from "react-router-dom";

// Components
import { HeaderAdmin, Sidebar } from "../components";

export default function AdminLayout() {
  return (
    <div className="font-roboto min-h-screen lg:flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Conten */}
      <div className="flex-1 lg:ml-72">
        {/* Header Admin */}
        <HeaderAdmin />

        <main className="mx-auto max-w-384 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
