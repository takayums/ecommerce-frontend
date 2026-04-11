interface ISelect {
  label: string;
  name: string;
  data: { name: string; value: string }[];
}

export default function Select({ name, label, data }: ISelect) {
  return (
    <div className="flex flex-col gap-1">
      <label
        id={name}
        htmlFor={name}
        className="block text-sm font-medium text-gray-500 capitalize"
      >
        {label}
      </label>

      <select
        name={name}
        id={name}
        className="w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
      >
        <option
          className="text-sm text-gray-500 capitalize"
          disabled
          value={""}
        >
          Select option
        </option>
        {data.map((item, index) => (
          <option
            value={item.value}
            key={index}
            className="text-sm text-gray-900 capitalize"
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
