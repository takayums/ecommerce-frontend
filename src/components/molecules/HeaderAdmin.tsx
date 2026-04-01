// Library
import {
  RiAlignJustify,
  RiNotification3Line,
  RiSunLine,
} from "@remixicon/react";

// Components
import Input from "../atom/Input";

export default function HeaderAdmin() {
  return (
    <header className="sticky top-0 z-100 flex w-full border-b border-gray-200 bg-white">
      {/* Wrapper Content */}
      <div className="flex flex-1 items-center justify-between px-5 py-4">
        {/* Search & Toggle Menu */}
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-md border border-gray-300">
            <RiAlignJustify size={20} color="#7A7B7D" />
          </div>
          <div>
            {/* Input Search */}
            <Input
              className="hidden w-md md:block"
              variant="input"
              name="search"
              placeholder="Search Product"
            />
          </div>
        </div>
        {/* End Search & Toggle Menu */}

        {/* Theme, Notif and Profile */}
        <div className="flex w-full items-center justify-end gap-4">
          {/* Theme */}
          <button className="flex size-10 items-center justify-center rounded-md border border-gray-300">
            <RiSunLine size={20} color="#7A7B7D" />
          </button>
          <button className="flex size-10 items-center justify-center rounded-md border border-gray-300">
            <RiNotification3Line size={20} color="#7A7B7D" />
          </button>
          <div className="flex items-center gap-2">
            <div className="relative size-10 overflow-hidden rounded-full border-gray-300">
              <img
                src="https://avatars.githubusercontent.com/u/161941652?v=4"
                alt="Profile Picture"
                className="object-contain"
              />
            </div>
            <p className="text-lg font-medium text-gray-600">takayumadev</p>
          </div>
        </div>
        {/* End Theme, Notif and Profile */}
      </div>
      {/* End Wrapper Content */}
    </header>
  );
}
