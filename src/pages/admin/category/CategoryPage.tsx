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

export default function CategoryPage() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white px-6 py-3">
      {/* Category Title */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-medium text-gray-500">Category List</h1>
          <p className="text-sm font-medium text-gray-400">
            Category of your products in sales.
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
          <Button icons={<RiAddLine size={20} />} href="/admin/category/create">
            Add Category
          </Button>
        </div>
      </div>
      {/* Search Category */}
      <div className="flex items-center gap-4 border-b border-gray-200 py-3 md:justify-between">
        <div className="flex-1 md:w-sm md:flex-none">
          <Input variant="input" name="search" placeholder="Search Category" />
        </div>
        <Button
          variant="secondary"
          icons={<RiEqualizer2Line size={20} />}
          iconsPosition="left"
        >
          Filter
        </Button>
      </div>

      {/* Table of Category */}
      <table className="min-w-full table-fixed text-gray-700">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 text-start text-sm font-medium">Name</th>
            <th className="py-3 text-start text-sm font-medium">Description</th>
            <th className="w-50 py-3 text-start text-sm font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 text-sm font-medium">Elektornik</td>
            <td className="py-3 text-sm font-normal">
              Eltronik tools for everyone
            </td>
            <td className="py-3 text-sm font-medium whitespace-nowrap">
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
