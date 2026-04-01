// Library
import { RiArrowUpLine } from "@remixicon/react";
import type { ReactNode } from "react";

export default function StatDashboard({
  title,
  nominal,
  percent,
  icons,
}: {
  title: string;
  nominal: string;
  percent: number;
  icons: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 xl:p-6">
      {/* Icons */}
      <div className="flex size-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-100">
        {icons && icons}
      </div>
      {/* Title & Precentage */}
      <div className="mt-6 flex items-center justify-between">
        <div className="">
          <h2 className="mb-2 text-base font-medium text-gray-500">{title}</h2>
          <h4 className="text-3xl font-semibold text-gray-900">{nominal}</h4>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-100 px-2 py-1">
          <RiArrowUpLine size={16} color="#7A7B7D" />
          <p className="text-sm font-normal">{percent} %</p>
        </div>
      </div>
    </div>
  );
}
