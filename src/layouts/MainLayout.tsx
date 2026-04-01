import { Outlet } from "react-router-dom";

// Components
import { Footer, Navbar } from "../components";

export default function MainLayout() {
  return (
    <div className="font-roboto flex min-h-dvh flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
