// Library
import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Pages
import {
  AuthPage,
  CategoryPage,
  CustomerPage,
  DashboardPage,
  HomePage,
  OrderPage,
  ProductsPage,
} from "../pages";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
      {
        path: "orders",
        element: <OrderPage />,
      },
      {
        path: "customers",
        element: <CustomerPage />,
      },
    ],
  },
]);
