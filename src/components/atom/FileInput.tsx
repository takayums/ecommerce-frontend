export default function FileInput({ label }: { label: string }) {
  return (
    <>
      <label className="mb-1 text-sm font-medium text-gray-500 capitalize">
        {label}
      </label>
      <div className="relative h-60 overflow-hidden rounded-lg border border-dashed border-gray-600 bg-gray-200 text-gray-600">
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1">
          <p className="text-sm text-gray-500">
            <strong>Click to upload</strong> or drag and drop
          </p>
          <p className="text-sm text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>

        <input
          type="file"
          className="absolute inset-0 h-full w-full cursor-pointer text-transparent file:hidden"
        />
      </div>
    </>
  );
}
