// Library
import { Link } from "react-router-dom";

// Icons
import {
  RiBox3Line,
  RiDashboardLine,
  RiGroupLine,
  RiMailLine,
  RiPriceTag3Line,
  RiReceiptLine,
  RiSettingsLine,
  RiStarLine,
} from "@remixicon/react";

export default function Sidebar() {
  const dataSidebarMenu = [
    {
      name: "Dashboard",
      path: "/admin",
      icons: <RiDashboardLine />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icons: <RiBox3Line />,
    },
    {
      name: "Category",
      path: "/admin/category",
      icons: <RiPriceTag3Line />,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icons: <RiReceiptLine />,
    },
    {
      name: "Customers",
      path: "/admin/customers",
      icons: <RiGroupLine />,
    },
  ];

  const dataSidebarSupport = [
    {
      name: "Reviews",
      path: "/admin/reviews",
      icons: <RiStarLine />,
    },
    {
      name: "Email",
      path: "/admin/email",
      icons: <RiMailLine />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icons: <RiSettingsLine />,
    },
  ];
  return (
    <aside className="fixed top-0 left-0 z-100 hidden h-screen w-72 translate-x-0 flex-col border-r border-gray-200 bg-white px-5 lg:flex">
      <div>
        {/* Logo */}
        <div className="flex justify-start py-8">
          <Link to="/admin" className="text-2xl font-bold text-gray-500">
            Takayuma<span className="text-indigo-500">Store.</span>
          </Link>
        </div>
        {/* Menu Scroll Vertikal*/}
        <div className="flex flex-col overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {/* main menu */}
            <div>
              <h2 className="mb-4 text-xs text-gray-500 uppercase">Menu</h2>
              <ul className="flex flex-col gap-1">
                {dataSidebarMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="relative flex gap-3 rounded-lg bg-white px-2 py-3 font-medium text-gray-500 capitalize hover:bg-gray-200"
                    >
                      {item.icons}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* end main menu */}

            {/* support */}
            <div>
              <h2 className="mb-4 text-xs text-gray-500 uppercase">Supports</h2>
              <ul className="flex flex-col gap-1">
                {dataSidebarSupport.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="relative flex gap-3 rounded-lg bg-white px-2 py-3 font-medium text-gray-500 hover:bg-gray-200"
                    >
                      {item.icons}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* others */}
          </nav>
        </div>
        {/* End Menu */}
      </div>
    </aside>
  );
}
