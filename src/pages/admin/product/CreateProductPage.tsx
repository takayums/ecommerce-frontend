import { Button, FileInput, Input, Select } from "@/components";

export default function CreateProductPage() {
  const dataCategory = [
    { name: "Elektronik", value: "elektronik" },
    { name: "Passion", value: "passion" },
    { name: "Health", value: "health" },
  ];
  return (
    <section className="rounded-2xl border border-gray-200 bg-white px-6 py-3">
      {/* Title Section */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-medium text-gray-500">Add Products</h1>
          <p className="text-sm font-medium text-gray-400">
            Craete your product to show your all users
          </p>
        </div>
      </div>

      {/* Form Create */}
      <form action="" className="mt-4">
        <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
          <Input name="name" type="text" variant="input" label="Name" />
          <Input name="price" type="text" variant="input" label="Price" />
          <Input name="size" type="text" variant="input" label="Size" />
          <Input name="quantity" type="text" variant="input" label="Quantity" />
          <Input name="stock" type="text" variant="input" label="Stock" />
          <Select name="category" label="category" data={dataCategory} />
          <div className="col-span-full">
            <Input name="description" variant="textarea" label="Description" />
          </div>
          <div className="col-span-full">
            <FileInput label="Thumbnail" />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
