// Node Modules
import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h2 className="underline text-blue-500">Hello World</h2>,
      },
    ],
  },
]);
