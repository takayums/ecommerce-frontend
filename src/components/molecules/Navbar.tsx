// Libraries / Packages
import { RiSearchLine, RiShoppingBagLine, RiSunLine } from "@remixicon/react";

export default function Navbar() {
  return (
    <header className="border-b border-gray-300">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between bg-white px-4 py-4 transition-all sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="" className="text-2xl font-bold text-gray-500">
          Takayuma<span className="text-indigo-500">Store.</span>
        </a>

        {/* Navigation Menu Desktop */}
        <ul className="flex items-center gap-8">
          <li className="text-gray-500 transition hover:text-gray-900">
            <a href="Home">Home</a>
          </li>
          <li className="text-gray-500 transition hover:text-gray-900">
            <a href="About">About</a>
          </li>
          <li className="text-gray-500 transition hover:text-gray-900">
            <a href="Contact">Contact</a>
          </li>

          {/* Input Search */}
          <li className="flex items-center gap-2 rounded-full border border-gray-300 px-3 text-sm">
            <input
              type="text"
              className="w-full bg-transparent py-1.5 placeholder-gray-500 outline-none"
              placeholder="Search Products"
            />
            <div>
              <RiSearchLine size={24} color="#7A7B7D" />
            </div>
          </li>
          {/* Input Search */}

          {/* Cart Icons */}
          <li className="relative cursor-pointer">
            <div>
              <RiShoppingBagLine size={24} color="#7A7B7D" />
            </div>
            <button className="absolute -top-1 -right-2 h-4.5 w-4.5 rounded-full bg-gray-500 text-xs text-white">
              3
            </button>
          </li>
          {/* End Cart Icons */}

          {/* Toggle Theme */}
          <li className="flex size-8 items-center justify-center rounded-md border border-slate-300">
            <div>
              <RiSunLine size={20} color="#7A7B7D" />
            </div>
          </li>

          {/* Button Login */}
          <button className="cursor-pointer rounded-full bg-gray-500 px-8 py-2 text-white transition hover:bg-gray-600">
            Login
          </button>
          {/* End Button Login */}
        </ul>
        {/* End Navigation Menu Desktop */}
      </div>
    </header>
  );
}
