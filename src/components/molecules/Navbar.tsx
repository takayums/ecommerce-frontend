// Libraries / Packages
import { RiSearchLine, RiShoppingBagLine, RiSunLine } from "@remixicon/react";
export default function Navbar() {
  return (
    <header className="md:8 relative flex items-center justify-between border-b border-gray-300 bg-white px-6 py-4 transition-all lg:px-24 xl:px-32">
      {/* Logo */}
      <a href="">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="Logo"
        />
      </a>

      {/* Navigation Menu Desktop */}
      <ul className="flex items-center gap-8">
        <li className="text-gray-600 transition hover:text-indigo-500">
          <a href="Home">Home</a>
        </li>
        <li className="text-gray-600 transition hover:text-indigo-500">
          <a href="About">About</a>
        </li>
        <li className="text-gray-600 transition hover:text-indigo-500">
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
          <button className="absolute -top-1 -right-2 h-4.5 w-4.5 rounded-full bg-indigo-500 text-xs text-white">
            3
          </button>
        </li>
        {/* End Cart Icons */}

        {/* Toggle Theme */}
        <li className="flex size-8 items-center justify-center rounded-md border border-slate-300">
          <div>
            <RiSunLine size={20} color="#615fff" />
          </div>
        </li>

        {/* Button Login */}
        <button className="cursor-pointer rounded-full bg-indigo-500 px-8 py-2 text-white transition hover:bg-indigo-600">
          Login
        </button>
        {/* End Button Login */}
      </ul>
      {/* End Navigation Menu Desktop */}
    </header>
  );
}
