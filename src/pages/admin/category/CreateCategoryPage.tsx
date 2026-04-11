import { Button, Input } from "@/components";

export default function CreateCategoryPage() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white px-6 py-3">
      {/* Title Section */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-medium text-gray-500">Add Category</h1>
          <p className="text-sm font-medium text-gray-400">
            Craete your category to group your products
          </p>
        </div>
      </div>

      {/* Form Create */}
      <form action="" className="mt-4">
        <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
          <Input name="name" type="text" variant="input" label="Name" />
          <Input
            name="description"
            type="text"
            variant="input"
            label="Description"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
