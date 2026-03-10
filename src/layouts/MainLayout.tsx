import { Outlet } from "react-router-dom";

// Components
import { Footer, Navbar } from "../components";

export default function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
