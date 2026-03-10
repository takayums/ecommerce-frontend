// Node Modules
import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";
import { AuthPage, HomePage } from "../pages";

// Pages

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  { path: "/auth", element: <AuthPage /> },
]);
