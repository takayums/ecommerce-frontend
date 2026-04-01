// components
import {
  BarTopSlaesChart,
  MontlySlaesChart,
  StatDashboard,
} from "../components";

// Icons
import {
  RiWallet3Line,
  RiGroupLine,
  RiArrowLeftRightLine,
} from "@remixicon/react";

export default function DashboardPage() {
  return (
    <section className="grid grid-cols-12 gap-4 xl:gap-6">
      {/* Statistic  */}
      {/* Total Sales */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <StatDashboard
          title="Total Sales"
          percent={10}
          nominal={"Rp. 1200"}
          icons={<RiWallet3Line size={24} color="#7A7B7D" />}
        />
      </div>
      {/* Orders */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <StatDashboard
          title="Orders"
          percent={10}
          nominal={"500"}
          icons={<RiArrowLeftRightLine size={24} color="#7A7B7D" />}
        />
      </div>
      {/* Users */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <StatDashboard
          title="Users"
          percent={10}
          nominal={"100"}
          icons={<RiGroupLine size={24} color="#7A7B7D" />}
        />
      </div>

      {/* Chart */}
      <div className="col-span-12 rounded-2xl border border-gray-200 px-6 py-3 lg:col-span-8">
        <MontlySlaesChart />
      </div>
      <div className="col-span-12 rounded-2xl border border-gray-200 px-6 py-3 lg:col-span-4">
        <BarTopSlaesChart />
      </div>

      {/* Recent Orders */}
      <div className="col-span-12">
        {/* Table Orders */}
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-3">
          {/* Title */}
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Orders
            </h2>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto pb-4">
            <table className="w-160 border-y border-gray-200 text-gray-500 md:w-full">
              <thead>
                <tr>
                  <th className="py-3 text-start text-sm font-medium">
                    Products
                  </th>
                  <th className="py-3 text-start text-sm font-medium">
                    Category
                  </th>
                  <th className="py-3 text-start text-sm font-medium">Price</th>
                  <th className="py-3 text-start text-sm font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3">
                    {/* Wrapper Product */}
                    <div className="flex items-center gap-3">
                      {/* Img */}
                      <div className="size-12 rounded-lg border border-gray-200">
                        <img
                          src="https://react-demo.tailadmin.com/images/product/product-01.jpg"
                          alt="Laptop"
                          className="object-contain"
                        />
                      </div>
                      {/* Title Product */}
                      <div>
                        <h3 className="text-sm font-medium">Maccbooks</h3>
                        <p className="text-xs text-gray-500">2 variants</p>
                      </div>
                    </div>
                    {/* End Wrapper Product */}
                  </td>
                  <td className="py-3 text-sm font-normal">Elektornik</td>
                  <td className="py-3 text-sm font-normal">Rp. 2000</td>
                  <td className="py-3">
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-sm font-normal text-gray-500 lowercase">
                      pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* End Table Content */}
        </div>

        {/* End Table Orders */}
      </div>
      {/* End Recent Orders */}
    </section>
  );
}
