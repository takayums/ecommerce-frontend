// Components
import { Button, Input } from "@/components";

// Icons
import {
  RiAddLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDeleteBinLine,
  RiDownload2Line,
  RiEqualizer2Line,
  RiEyeLine,
  RiPencilLine,
} from "@remixicon/react";

export default function ProductsPage() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white px-6 py-3">
      {/* Product Title & Action  */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-medium text-gray-500">Product List</h1>
          <p className="text-sm font-medium text-gray-400">
            Track your store's progress to boost your sales.
          </p>
        </div>
        {/* Export and Add Product */}
        <div className="inline-flex gap-2">
          <Button
            variant="secondary"
            icons={<RiDownload2Line size={20} />}
            iconsPosition="right"
          >
            Export
          </Button>
          <Button href="/admin/products/create" icons={<RiAddLine size={20} />}>
            Add Products
          </Button>
        </div>
      </div>
      {/* Search Products */}
      <div className="flex items-center gap-4 border-b border-gray-200 py-3 md:justify-between">
        <div className="flex-1 md:w-sm md:flex-none">
          <Input variant="input" name="search" placeholder="Search Product" />
        </div>
        <Button
          variant="secondary"
          icons={<RiEqualizer2Line size={20} />}
          iconsPosition="left"
        >
          Filter
        </Button>
      </div>

      <table className="min-w-full table-fixed text-gray-700">
        <thead className="border-b border-gray-200">
          <tr>
            <th className="py-3 text-start text-sm font-medium">Products</th>
            <th className="py-3 text-start text-sm font-medium">Category</th>
            <th className="py-3 text-start text-sm font-medium">Price</th>
            <th className="py-3 text-start text-sm font-medium">Stock</th>
            <th className="py-3 text-start text-sm font-medium">Size</th>
            <th className="py-3 text-start text-sm font-medium">Create At</th>
            <th className="w-50 py-3 text-start text-sm font-medium">
              Actions
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
            <td className="py-3 text-sm font-medium">Elektornik</td>
            <td className="py-3 text-sm font-medium">Rp. 2000</td>
            <td className="py-3 text-sm font-medium">100</td>
            <td className="py-3 text-sm font-medium">S, M, L, XL</td>
            <td className="py-3 text-sm font-medium">01 Dec, 2027</td>
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
                  href="/admin/products/edit/1"
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
      {/* Pagination */}
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
