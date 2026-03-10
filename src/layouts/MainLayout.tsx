import { Outlet } from "react-router-dom";

// Components
import { Navbar } from "../components";

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
      <footer></footer>
    </>
  );
}
