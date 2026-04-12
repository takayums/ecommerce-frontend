// Components
import { Button, Input } from "@/components";

// Icons
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDeleteBinLine,
  RiDownload2Line,
  RiEqualizer2Line,
  RiEyeLine,
  RiPencilLine,
} from "@remixicon/react";

export default function OrderPage() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white px-6 py-3">
      {/* Orders Title */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-medium text-gray-500">Orders List</h1>
          <p className="text-sm font-medium text-gray-400">
            Transaction everyone in here.
          </p>
        </div>
        {/* Export CSV */}
        <Button
          variant="outline"
          icons={<RiDownload2Line size={20} />}
          iconsPosition="right"
        >
          Export Csv
        </Button>
      </div>
      {/* Search Orders */}
      <div className="flex items-center gap-4 border-b border-gray-200 py-3 md:justify-between">
        <div className="flex-1 md:w-sm md:flex-none">
          <Input variant="input" name="search" placeholder="Search Orders" />
        </div>
        <Button
          variant="secondary"
          icons={<RiEqualizer2Line size={20} />}
          iconsPosition="left"
        >
          Filter
        </Button>
      </div>

      {/* Table of Orders */}

      <div className="overflow-x-auto pb-4">
        <table className="min-w-250 table-fixed text-gray-700 md:w-full">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="py-3 text-start text-sm font-medium">Id</th>
              <th className="py-3 text-start text-sm font-medium">Products</th>
              <th className="py-3 text-start text-sm font-medium">Customer</th>
              <th className="py-3 text-start text-sm font-medium">Price</th>
              <th className="py-3 text-start text-sm font-medium">Date</th>
              <th className="py-3 text-start text-sm font-medium">Payment</th>
              <th className="py-3 text-start text-sm font-medium">Status</th>
              <th className="w-50 py-3 text-start text-sm font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-sm font-normal">#A123</td>
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
              <td className="py-3 text-sm font-normal">takayums@gmail.com</td>
              <td className="py-3 text-sm font-normal">Rp. 12.000</td>
              <td className="py-3 text-sm font-normal">1 Des, 2026</td>
              <td className="py-3 text-sm font-normal">
                <span className="rounded-full border border-blue-400 bg-blue-200 px-2.5 py-1 text-blue-500 lowercase">
                  paid
                </span>
              </td>
              <td className="py-3 text-sm font-normal">
                <span className="rounded-full border border-green-400 bg-green-200 px-2.5 py-1 text-green-500 lowercase">
                  shipping
                </span>
              </td>
              <td className="font-mediu whitespace-nowrapm py-3 text-sm">
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    icons={<RiEyeLine size={20} />}
                    iconsPosition="left"
                  />
                  <Button
                    variant="secondary"
                    icons={<RiPencilLine size={20} />}
                    iconsPosition="left"
                  />
                  <Button
                    variant="danger"
                    icons={<RiDeleteBinLine size={20} />}
                    iconsPosition="left"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between py-3">
        <p className="text-sm font-normal text-gray-500">
          Showing <strong>1</strong> to <strong>7</strong> of{" "}
          <strong>20</strong>
        </p>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            icons={<RiArrowLeftLine size={20} />}
            iconsPosition="left"
          />

          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button
            variant="outline"
            size="sm"
            icons={<RiArrowRightLine size={20} />}
            iconsPosition="right"
          />
        </div>
      </div>
    </section>
  );
}
