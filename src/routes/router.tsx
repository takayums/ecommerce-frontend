// Library
import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";

// Pages
import {
  AuthPage,
  CategoryPage,
  CreateCategoryPage,
  CreateProductPage,
  CustomerPage,
  DashboardPage,
  EditCategoryPage,
  EditProductPage,
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
      { path: "products/create", element: <CreateProductPage /> },
      { path: "products/edit/:id", element: <EditProductPage /> },
      {
        path: "category",
        element: <CategoryPage />,
      },
      {
        path: "category/create",
        element: <CreateCategoryPage />,
      },
      {
        path: "category/edit/:id",
        element: <EditCategoryPage />,
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
